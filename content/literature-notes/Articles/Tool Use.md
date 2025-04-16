---
author: "[[docs.anthropic.com]]"
title: 'Tool Use'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://mintlify.com/docs/api/og?division=Documentation&mode=light&title=Tool+use+%28function+calling%29&logoLight=https%3A%2F%2Fmintlify.s3-us-west-1.amazonaws.com%2Fanthropic%2Flogo%2Flight.svg&logoDark=https%3A%2F%2Fmintlify.s3-us-west-1.amazonaws.com%2Fanthropic%2Flogo%2Fdark.svg&primaryColor=%230E0E0E&lightColor=%23D4A27F&darkColor=%230E0E0E)

## Metadata
- Author: [[docs.anthropic.com]]
- Full Title: Tool Use
- URL: https://docs.anthropic.com/en/docs/tool-use

## Highlights
- Claude is capable of interacting with external client-side tools and functions, allowing you to equip Claude with your own custom tools to perform a wider variety of tasks. ([View Highlight](https://read.readwise.io/read/01hz5hbtr4jz11gxeyasxbx9c2))
- We’re excited to announce that tool use is now in public beta! To access this feature, you’ll need to include the `anthropic-beta: tools-2024-05-16` header in your API requests. ([View Highlight](https://read.readwise.io/read/01hz5hbypn42fdrv4jnakmkr0e))
- Please note that during the beta period:
  • While the feature is production-ready, we may introduce multiple beta versions before the final release.
  • Tool use is not yet available on third-party platforms like Vertex AI or AWS Bedrock, but is coming soon. See [Legacy tool use](https://docs.anthropic.com/en/docs/legacy-tool-use) for guidance on how to do tool use on Vertex AI and AWS Bedrock right now. ([View Highlight](https://read.readwise.io/read/01hz5hcn1ef4pevjky0hxgjeh3))
- Using tools with Claude involves the following steps:
  1. **Provide Claude with tools and a user prompt:** (API request)
  • Define the set of tools you want Claude to have access to, including their names, descriptions, and input schemas.
  • Provide a user prompt that may require the use of one or more of these tools to answer, such as “What is the weather in San Francisco?“.
  2. **Claude uses a tool:** (API response)
  • Claude assesses the user prompt and decides whether any of the available tools would help with the user’s query or task. If so, it also decides which tool(s) to use and with what inputs.
  • Claude constructs a properly formatted tool use request.
  • The API response will have a `stop_reason` of `tool_use`, indicating that Claude wants to use an external tool.
  3. **Extract tool input, run code, and return results:** (API request)
  • On the client side, you should extract the tool name and input from Claude’s tool use request.
  • Run the actual tool code on the client side.
  • Return the results to Claude by continuing the conversation with a new `user` message containing a `tool_result` content block.
  4. **Claude uses tool result to formulate a response:** (API response)
  • After receiving the tool results, Claude will use that information to formulate its final response to the original user prompt. ([View Highlight](https://read.readwise.io/read/01hz5hdncx30mq0n0mfvg8fk1e))
- **All tools are user-provided**
  It’s important to note that Claude does not have access to any built-in server-side tools. All tools must be explicitly provided by you, the user, in each API request. This gives you full control and flexibility over the tools Claude can use. ([View Highlight](https://read.readwise.io/read/01hz5hen5canq4k91j3dvdq9ym))
- Tools are specified in the `tools` top-level parameter of the API request. Each tool definition includes:
  • `name`: The name of the tool. Must match the regex `^[a-zA-Z0-9_-]{1,64}$`.
  • `description`: A detailed plaintext description of what the tool does, when it should be used, and how it behaves.
  • `input_schema`: A [JSON Schema](https://json-schema.org/) object defining the expected parameters for the tool.
  Here’s an example simple tool definition:
  {
  "name": "get_weather",
  "description": "Get the current weather in a given location",
  "input_schema": {
  "type": "object",
  "properties": {
  "location": {
  "type": "string",
  "description": "The city and state, e.g. San Francisco, CA"
  },
  "unit": {
  "type": "string",
  "enum": ["celsius", "fahrenheit"],
  "description": "The unit of temperature, either 'celsius' or 'fahrenheit'"
  }
  },
  "required": ["location"]
  }
  } ([View Highlight](https://read.readwise.io/read/01hz5hfc8ffzb9seqp84ybzab4))
- This tool, named `get_weather`, expects an input object with a required `location` string and an optional `unit` string that must be either “celsius” or “fahrenheit”. ([View Highlight](https://read.readwise.io/read/01hz5hfh8z207rnbkfg8wmv18k))
- To get the best performance out of Claude when using tools, follow these guidelines:
  • **Provide extremely detailed descriptions.** This is by far the most important factor in tool performance. Your descriptions should explain every detail about the tool, including:
  • What the tool does
  • When it should be used (and when it shouldn’t)
  • What each parameter means and how it affects the tool’s behavior
  • Any important caveats or limitations, such as what information the tool does not return if the tool name is unclear 
  The more context you can give Claude about your tools, the better it will be at deciding when and how to use them. Aim for at least 3-4 sentences per tool description, more if the tool is complex.
  • **Prioritize descriptions over examples.** While you can include examples of how to use a tool in its description or in the accompanying prompt, this is less important than having a clear and comprehensive explanation of the tool’s purpose and parameters. Only add examples after you’ve fully fleshed out the description. ([View Highlight](https://read.readwise.io/read/01hz5hfwg532fy5qhtv4nc9xa7))
- Here’s an example of a good tool description:
  {
  "name": "get_stock_price",
  "description": "Retrieves the current stock price for a given ticker symbol. The ticker symbol must be a valid symbol for a publicly traded company on a major US stock exchange like NYSE or NASDAQ. The tool will return the latest trade price in USD. It should be used when the user asks about the current or most recent price of a specific stock. It will not provide any other information about the stock or company.",
  "input_schema": {
  "type": "object",
  "properties": {
  "ticker": {
  "type": "string",
  "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."
  }
  },
  "required": ["ticker"]
  }
  }
  In contrast, here’s an example of a poor tool description:
  {
  "name": "get_stock_price",
  "description": "Gets the stock price for a ticker.",
  "input_schema": {
  "type": "object",
  "properties": {
  "ticker": {
  "type": "string"
  }
  },
  "required": ["ticker"]
  }
  } ([View Highlight](https://read.readwise.io/read/01hz5hg6y8qk0cgabfca7svrd3))
- The good description clearly explains what the tool does, when to use it, what data it returns, and what the `ticker` parameter means. The poor description is too brief and leaves Claude with many open questions about the tool’s behavior and usage. ([View Highlight](https://read.readwise.io/read/01hz5hga53exqz8ddgd5x8vng8))
- Tools do not necessarily need to be client-side functions — you can use tools anytime you want the model to return JSON output that follows a provided schema. For example, you might use a `record_summary` tool with a particular schema. See [tool use examples](https://docs.anthropic.com/en/docs/tool-use-examples) for a full working example. ([View Highlight](https://read.readwise.io/read/01hz5hhevx7gf5sqbegr8y0mds))
- **Number of tools**: All Claude 3 models can maintain >90% accuracy even when working with hundreds of simple tools, and a smaller number of complex tools. A “complex” tool would be one with a large number of parameters or parameters with complex schemas (e.g. nested objects). ([View Highlight](https://read.readwise.io/read/01hz5hj3sqn5jc6phr6m58vb3a))
- **Complex and deeply nested tools**: Just like a human, Claude can work better with simpler interfaces and simpler tools. If Claude is struggling to correctly use your tool, try to flatten the input schema away from deeply nested json objects, and reduce the number of inputs. ([View Highlight](https://read.readwise.io/read/01hz5hj7tswgavjsfffywhrqts))
- **Sequential tool use**: Claude generally prefers to use one tool at a time, then use the output of that tool to inform its next action. While you can prompt Claude to use multiple tools in parallel by carefully designing your prompt and tools, this may lead to Claude filling in dummy values for parameters that depend on the results of earlier tool use. For best results, design your workflow and tools to elicit and work with a series of sequential tool use from Claude. ([View Highlight](https://read.readwise.io/read/01hz5hjccpax2a6bwf0dm0zr8x))
- **Retries**: If Claude’s tool use request is invalid or missing required parameters, you can return an error response and Claude will usually retry the request with the missing information filled in. However, after 2-3 failed attempts, Claude may give up and return an apology to the user instead of retrying further. ([View Highlight](https://read.readwise.io/read/01hz5hjd7pa04qnzb5dv8m6es4))
- **Debugging**: When debugging unexpected tool use behavior, pay attention to Claude’s chain of thought output (if any) to understand why it’s making the choices it’s making. You can also try prompting Claude to use a specific tool to see if that leads to the expected behavior. If Claude is misusing a tool, double check that your tool descriptions and schemas are clear and unambiguous. ([View Highlight](https://read.readwise.io/read/01hz5hjdycyvk9hyvxwf0wqzjr))
- **<search_quality_reflection> tags**: At times when using search tools, the model may return <search_quality_reflection> XML tags and a search quality score in its response. To stop the model from doing this, add the sentence “Do not reflect on the quality of the returned search results in your response.” to the end of your prompt. ([View Highlight](https://read.readwise.io/read/01hz5hjer3sz46qm675dch3cvh))
