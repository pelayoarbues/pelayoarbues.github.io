---
author: "[[Tinybird]]"
title: 'How We Built Our Own Claude Code'
date: "2025-10-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/opengraph-image-1vhxgn)

## Metadata
- Author: [[Tinybird]]
- Full Title: How We Built Our Own Claude Code
- URL: https://www.tinybird.co/blog-posts/how-we-built-our-own-claude-code

## Highlights
- How we built our own Claude Code
  Or, rather, how we built Tinybird Code, a command line agent inspired by Claude Code, but optimized for complex real-time data engineering problems with ClickHouse. ([View Highlight](https://read.readwise.io/read/01k7p3wb0drdt2zcd8g072bf3a))
- General purpose agents like Claude Code aren't good at working with large-scale, real-time data. Operating ClickHouse in production [is really hard](https://www.tinybird.co/blog-posts/what-i-learned-operating-clickhouse); we wanted to build an agent that was good at it. People choose Tinybird so they can focus less on ClickHouse and more on feature development. Tinybird Code is an agent for those AI-native developers who want to speed up feature delivery when working with data. ([View Highlight](https://read.readwise.io/read/01k7p3wjh17tjyjfz2eqm9af12))
- Our CLI is built in Python, so we looked at some of the more popular Python agent frameworks (e.g. Agno, Pydantic, LangGraph). We ended up choosing [Pydantic AI](https://ai.pydantic.dev) because we felt it best addressed our requirements:
  • **Custom model providers**: We host and manage models via Vertex AI rather than user-provided API keys
  • **Message processing between calls**: Ability to limit message history or summarize it for long sessions
  • **Multi-agent support**: Different tasks need different specialists with their own context
  • **Sync methods**: Tinybird CLI is mostly synchronous. We wanted to keep the same experience when developing our agent.
  • **Flexible message rendering**: We have different kinds of messages to show - model responses, tool calls, validations, `tb` commands, and file previews + diffs. We needed to be able to render each one with proper syntax highlighting, formatting, and interactive components. ([View Highlight](https://read.readwise.io/read/01k7p3wqhac4rfr24hak05pndh))
- A good framework simplifies building agents. Pydantic gave us a basic foundation for agent building, with enough flexibility to support our needs, so we could focus less on the agent boilerplate and more on improving the LLM-data interaction. ([View Highlight](https://read.readwise.io/read/01k7p3wwbxbw3te9skgd15jtqp))
- Since we were hosting and managing the models on our backend, we needed a way to securely handle model provider credentials while allowing users to authenticate. Users needed to authenticate with just their Tinybird tokens and the agent needed to respect workspace contexts and permissions ([View Highlight](https://read.readwise.io/read/01k7p3x115cbk3vgkbjabg7kk8))
- Our work building [Explorations](https://www.tinybird.co/blog-posts/introducing-explorations), a natural language exploratory data analysis interface, convinced us that a single agent wouldn't be sufficient for Tinybird Code. We recognized the need to both preserve the main agent's context window and develop specialized sub-agents with prompts and tools specific to their domain. Unlike general coding where you're mostly manipulating files and running commands, data engineering involves distinct phases with very different context requirements: ([View Highlight](https://read.readwise.io/read/01k7p3xn1wp6950ap0zvg6dxd2))
- • **Main agent**: Orchestrates the overall workflow and coordinates other agents
  • **Exploration agent**: Executes SQL queries and explores available endpoints
  • **Testing agent**: Creates, updates, and runs data quality tests
  • **Mock agent**: Creates, updates, and analyzes mock data fixtures
  • **Command agent**: Works as a default or fallback, handles tasks that don't have specific tools by using the Tinybird CLI. ([View Highlight](https://read.readwise.io/read/01k7p3xr9gbf8zpqs7kragaeg4))
- Each sub-agent can operate with its own context window and state, preventing the main agent from getting overwhelmed with large query results or complex test outputs. The architecture also makes it easier to optimize each agent for its specific domain. ([View Highlight](https://read.readwise.io/read/01k7p3y472nkjgp7aqr8n0mspn))
- Technically, the leading agent will use the subagents as tools and these ones will return the result of the task with a summary of the work done. If some error happens in the process, each subagent is responsible for handling it by itself and fix it. ([View Highlight](https://read.readwise.io/read/01k7p3ye5zsr9cz5jde8ypaenk))
- We built two distinct CLI modes to support different usage patterns.
  The interactive mode is just like Claude Code. You type `tb` and the interactive console opens - ideal for human-in-the-loop development and extended "pair programming" sessions. ([View Highlight](https://read.readwise.io/read/01k7p3ywzf1q2re54ct2p5y781))
- The "one-shot" mode, triggered with `tb --prompt/-p "some prompt"`, can be more useful for very specific, delimited tasks that don't require conversational interaction. In addition, this mode can be useful to allow Tinybird Code to act as a specialized sub-agent within larger workflows - for example, Claude Code can delegate analytics tasks to Tinybird Code while maintaining its own context and focus. This composability between agents is key for complex workflows that span multiple domains. ([View Highlight](https://read.readwise.io/read/01k7p3yytqrpa7k6en0fgpmnjt))
- One thing we learned early on is that [LLMs struggle with analytics](https://www.tinybird.co/blog-posts/why-llms-struggle-with-analytics-and-how-we-fixed-that). They're also not particularly good at understanding data schemas and [writing SQL queries](https://www.tinybird.co/blog-posts/which-llm-writes-the-best-sql), especially as data complexity grows. LLMs make different (and often more egregious) mistakes in specialized domains like data engineering than they do in general programming. This makes sense: there are millions of React component examples floating around the internet on which to train. There are orders of magnitude fewer ClickHouse schema optimization examples. ([View Highlight](https://read.readwise.io/read/01k7p3zbdveeq3k2mjv25gbkg2))
- Any good agent should automatically handle errors, so we built error recovery into Tinybird Code's core workflow using three approaches:
  First, we validate every change using Tinybird's own tools. Every time we modify project files, we immediately run a build to catch issues: ([View Highlight](https://read.readwise.io/read/01k7p3zhet1qp8r048zbxfpnp7))
- Second, we took a hard look at error messages. We've always prioritized valuable, human-readable error messages with specific feedback, but building an autonomous agent helped us refine our product error messages to be as detailed and context-specific as possible. Generic errors teach the developer, whether human or agent, nothing about the domain. Good error messages allow the agent to immediately act on feedback received: ([View Highlight](https://read.readwise.io/read/01k7p3znwjegss8tbdrj6f29zh))
- Third, we built deterministic error handling for common failure patterns. For example, when data hits [quarantine](https://www.tinybird.co/docs/forward/get-data-in/quarantine) due to an ingestion failure (usually a type mismatch), we automatically query the quarantine table for error data and provide that context to the agent: ([View Highlight](https://read.readwise.io/read/01k7p401jkjn2hr2a8cpd0exqz))
- We found that Tinybird's workflows needed a modular approach to message rendering that could interleave LLM responses with our own validations, file previews, and real-time feedback from the Tinybird platform.
  Rather than waiting for complete responses or setting up server-sent events, we discovered we could iterate over the agent's underlying graph nodes to get much finer control: ([View Highlight](https://read.readwise.io/read/01k7p40en1b9m3nskv53g4jhx1))
- This approach gives us complete control over when and how we display different types of content, which turned out to be essential for the user experience we wanted Tinybird Code to have. ([View Highlight](https://read.readwise.io/read/01k7p40tjvy70r88mr2aj3fdsn))
- Context compaction is an important pattern in agentic workflows, especially long-running chats that can span days or even weeks of development. We knew that context window management would be important. It's made increasingly challenging by the fact that Tinybird users are often working with billions of rows of data - a context window nightmare. Tinybird Code sessions can get very token-heavy very quickly - large query results, comprehensive schema information, test outputs, etc. ([View Highlight](https://read.readwise.io/read/01k7p411ydjnd7vn01d6wk1tgq))
- We built context management into the architecture using Pydantic AI's `history_processors` parameter, so we can process message history before sending it to the model and keep essential context while staying under token limits. The compaction process uses a summarizing agent to take the existing chat history and shrink it down into essential summaries to preserve the context window: ([View Highlight](https://read.readwise.io/read/01k7p41mhv9drrfh8vksqwzd2q))
- Our compactor agent maintains:
  • **User requests**: a summary of all previous user requests.
  • **Problems solved**: a summary of all problems solved by the agent.
  • **Pending tasks**: a summary of all pending tasks that the agent needs to complete.
  • **Current work**: a summary of the current work the agent is doing.
  • **Next step**: a summary of the next step the agent will take. ([View Highlight](https://read.readwise.io/read/01k7p41r9876jdvcrmhxj3be78))
- Tinybird Code is a productivity tool, so it is important that its tools match how engineers actually think about the domain. Rather than organizing tools around technical capabilities, we organized them around engineering workflows:
  • **File tools**: Create, read, update, delete `.datasource` and `.pipe` files
  • **Fixture tools**: Analyze and append fixtures to datasources
  • **Query tools**: Execute SQL queries or request endpoints with parameters
  • **Testing tools**: Create, update, and run tests
  • **Command tools**: Run any CLI command when specialized tools aren't enough
  • **Planning tool**: Help the agent break down complex multi-file operations
  • **Secret tools**: Manage secrets locally
  • **Build/deploy tools**: Build locally or deploy to production
  These tools generally map more to how engineers think about development work, rather than around database- or API-focused technical tasks. This aligns generally with our developer-focused product principles and emphasis on good developer experience. ([View Highlight](https://read.readwise.io/read/01k7p42b69z730cczddp0jynbd))
- One unique aspect of Tinybird Code is its ability to read/write directly to/from the production environment, Tinybird Cloud, via CLI commands like `tb --cloud deploy`. Claude Code will checkout new branches and make PRs, but Tinybird Code was instead given autonomy to handle deployments directly via CLI if requested. That introduces some strict safety requirements; nobody wants an agent deploying to production accidentally or without confirmation.
  We built environment awareness into Tinybird Code's core:
  • Defaulting to local environment
  • Detecting environment automatically, when possible, based on the user request or context
  • Asking users to choose an environment when the request or context is ambiguous
  • Requiring confirmation for actions that affect production
  • Making environment switching explicit and safe ([View Highlight](https://read.readwise.io/read/01k7p42nd1az96q26h7ppfz7wv))
