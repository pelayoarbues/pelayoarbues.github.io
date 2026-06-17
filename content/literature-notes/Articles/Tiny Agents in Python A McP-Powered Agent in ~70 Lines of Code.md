---
author: "[[Hugging Face - Blog]]"
title: 'Tiny Agents in Python: A McP-Powered Agent in ~70 Lines of Code'
date: "2025-05-26"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/favicon.ico)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: Tiny Agents in Python: A McP-Powered Agent in ~70 Lines of Code
- URL: https://huggingface.co/blog/python-tiny-agents

## Highlights
- Inspired by [Tiny Agents in JS](https://huggingface.co/blog/tiny-agents), we ported the idea to Python 🐍 and extended the [`huggingface_hub`](https://github.com/huggingface/huggingface_hub/) client SDK to act as a MCP Client so it can pull tools from MCP servers and pass them to the LLM during inference. ([View Highlight](https://read.readwise.io/read/01jvyy52myr5a2rz82b5fhysex))
- MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) is an open protocol that standardizes how Large Language Models (LLMs) interact with external tools and APIs. Essentially, it removed the need to write custom integrations for each tool, making it simpler to plug new capabilities into your LLMs. ([View Highlight](https://read.readwise.io/read/01jvyy5hbazaekbhxmqq6t9y12))
- In this blog post, we'll show you how to get started with a tiny Agent in Python connected to MCP servers to unlock powerful tool capabilities. You'll see just how easy it is to spin up your own Agent and start building! ([View Highlight](https://read.readwise.io/read/01jvyy5n7eeg8s3rym5dhdzq02))
- First, you need to install the latest version of `huggingface_hub` with the `mcp` extra to get all the necessary components. ([View Highlight](https://read.readwise.io/read/01jvyy5vdzbqx40qzq5jrfx37b))
- The coolest part is that you can load agents directly from the Hugging Face Hub [tiny-agents](https://huggingface.co/datasets/tiny-agents/tiny-agents) Dataset, or specify a path to your own local agent configuration! ([View Highlight](https://read.readwise.io/read/01jvyy62knm28stcne0xfcfxgc))
- The following example shows a web-browsing agent configured to use the [Qwen/Qwen2.5-72B-Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) model via Nebius inference provider, and it comes equipped with a playwright MCP server, which lets it use a web browser! The agent config is loaded specifying [its path in the `tiny-agents/tiny-agents`](https://huggingface.co/datasets/tiny-agents/tiny-agents/tree/main/celinah/web-browser) Hugging Face dataset. ([View Highlight](https://read.readwise.io/read/01jvyy6k74h7dp3jt7htn7vw5e))
- When you run the agent, you'll see it load, listing the tools it has discovered from its connected MCP servers. Then, it's ready for your prompts! ([View Highlight](https://read.readwise.io/read/01jvyy6x4b98pf0tjakv8cw3px))
- do a Web Search for HF inference providers on Brave Search and open the first result and then give me the list of the inference providers supported on Hugging Face ([View Highlight](https://read.readwise.io/read/01jvyy72nyy85ggrjnwww4e6sn))
- You can also use Gradio Spaces as MCP servers! The following example uses [Qwen/Qwen2.5-72B-Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) model via Nebius inference provider, and connects to a `FLUX.1 [schnell]` image generation HF Space as an MCP server. The agent is loaded from its configuration in the [tiny-agents/tiny-agents](https://huggingface.co/datasets/tiny-agents/tiny-agents/tree/main/julien-c/flux-schnell-generator) dataset on the Hugging Face Hub. ([View Highlight](https://read.readwise.io/read/01jvyy75aksb75s9swp4a9r4tt))
- Now that you've seen how to run existing Tiny Agents, the following sections will dive deeper into how they work and how to build your own. ([View Highlight](https://read.readwise.io/read/01jvyy7b5289h4xy7597qr0kxp))
- Each agent's behavior (its default model, inference provider, which MCP servers to connect to, and its initial system prompt) is defined by an `agent.json` file. You can also provide a custom `PROMPT.md` in the same directory for a more detailed system prompt. Here is an example: ([View Highlight](https://read.readwise.io/read/01jvyy7ey43k4prqgzb061q7d4))
- `agent.json` The `model` and `provider` fields specify the LLM and inference provider used by the agent. The `servers` array defines the MCP servers the agent will connect to. In this example, a "stdio" MCP server is configured. This type of server runs as a local process. The Agent starts it using the specified `command` and `args`, and then communicates with it via stdin/stdout to discover and execute available tools. ([View Highlight](https://read.readwise.io/read/01jvyy7qrp0p7sdhj57pp61213))
- Modern LLMs are built for function calling (or tool use), which enables users to easily build applications tailored to specific use cases and real-world tasks. ([View Highlight](https://read.readwise.io/read/01jvyy829mpn6www4m1x7n44at))
- A function is defined by its schema, which informs the LLM what it does and what input arguments it expects. The LLM decides when to use a tool, the Agent then orchestrates running the tool and feeding the result back. ([View Highlight](https://read.readwise.io/read/01jvyy860wf4hjvzrejj4bxeye))
- `InferenceClient` implements the same tool calling interface as the [OpenAI Chat Completions API](https://platform.openai.com/docs/guides/function-calling?api-mode=chat), which is the established standard for inference providers and the community. ([View Highlight](https://read.readwise.io/read/01jvyy899nsqy91defymt49ps0))
- The `MCPClient` is the heart of our tool-use functionality. It's now part of `huggingface_hub` and uses the `AsyncInferenceClient` to communicate with LLMs. ([View Highlight](https://read.readwise.io/read/01jvyy8ase9tmydgzv6e70dnpx))
- responsibilities of the `MCPClient`:
  • Manage async connections to one or more MCP servers.
  • Discover tools from these servers.
  • Format these tools for the LLM.
  • Execute tool calls via the correct MCP server. ([View Highlight](https://read.readwise.io/read/01jvyy8jjxwky239htcfnbvssd))
- It supports `stdio` servers for local tools (like accessing your file system), and `http` servers for remote tools! It's also compatible with `sse`, which is the previous standard for remote tools. ([View Highlight](https://read.readwise.io/read/01jvyy8qaaxv1y9hw730fz196d))
- Prepare tools and calling the LLM
  First, the method determines all tools the LLM should be aware of for the current turn – this includes tools from MCP servers and any special "exit loop" tools for agent control; then, it makes a streaming call to the LLM:
  As chunks arrive from the LLM, the method iterates through them. Each chunk is immediately yielded, then we reconstruct the complete text response and any tool calls. ([View Highlight](https://read.readwise.io/read/01jvyy8yph8m6r6pghys0pha1q))
- . Executing tools
  Once the stream is complete, if the LLM requested any tool calls (now fully reconstructed in `final_tool_calls`), the method processes each one:
  It first checks if the tool called exits the loop (`exit_loop_tool`). If not, it finds the correct MCP session responsible for that tool and calls `session.call_tool()`. The result (or error response) is then formatted, added to the conversation history, and yielded so the Agent is aware of the tool's output. ([View Highlight](https://read.readwise.io/read/01jvyy982g1n9a8d3g8tcf2x8t))
- Our Tiny Python Agent: It's (Almost) Just a Loop!
  With the `MCPClient` doing all the job for tool interactions, our `Agent` class becomes wonderfully simple. It inherits from `MCPClient` and adds the conversation management logic.
  > The Agent class is tiny and focuses on the conversational loop, the code can be found [here](https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/inference/_mcp/agent.py). ([View Highlight](https://read.readwise.io/read/01jvyy9hzpk0hpg89vrtvcwy1z))
- . Intializing the Agent
  When an Agent is created, it takes an agent config (model, provider, which MCP servers to use, system prompt) and initializes the conversation history with the system prompt. The `load_tools()` method then iterates through the server configurations (defined in agent.json) and calls `add_mcp_server` (from the parent `MCPClient`) for each one, populating the agent's toolbox. ([View Highlight](https://read.readwise.io/read/01jvyy9r2z7xmpgrxgptxszxs9))
- The `Agent.run()` method is an asynchronous generator that processes a single user input. It manages the conversation turns, deciding when the agent's current task is complete. ([View Highlight](https://read.readwise.io/read/01jvyy9yvc8dztnvp7v2058q46))
- • It first adds the user prompt to the conversation.
  • Then it calls `MCPClient.process_single_turn_with_tools(...)` to get the LLM's response and handle any tool executions for one step of reasoning.
  • Each item is immediately yielded, enabling real-time streaming to the caller.
  • After each step, it checks exit conditions: if a special "exit loop" tools was used, if a maximum turn limit is hit, or if the LLM provides a text response that seems final for the current request.
  Next Steps ([View Highlight](https://read.readwise.io/read/01jvyya56gfr4qw6nzc7v7gwp0))
- There are a lot of cool ways to explore and expand upon the MCP Client and the Tiny Agent 🔥 Here are some ideas to get you started:
  • Benchmark how different LLM models and inference providers impact agentic performance: Tool calling performance can differ because each provider may optimize it differently. You can find the list of supported providers [here](https://huggingface.co/docs/inference-providers/index#partners).
  • Run tiny agents with local LLM inference servers, such as [llama.cpp](https://github.com/ggerganov/llama.cpp), or [LM Studio](https://lmstudio.ai/). ([View Highlight](https://read.readwise.io/read/01jvyyascbz1st1bqzvf8j9538))
