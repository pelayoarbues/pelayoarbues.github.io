---
author: "[[openwebui.com]]"
title: '🛰️ MCP Support'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[openwebui.com]]
- Full Title: 🛰️ MCP Support
- URL: https://docs.openwebui.com/openapi-servers/mcp/

## Highlights
- The MCP-to-OpenAPI proxy server lets you use tool servers implemented with MCP (Model Context Protocol) directly via standard REST/OpenAPI APIs—no need to manage unfamiliar or complicated custom protocols. If you're an end-user or application developer, this means you can interact easily with powerful MCP-based tooling directly through familiar REST-like endpoints. ([View Highlight](https://read.readwise.io/read/01jrqgeapbr1ec7ace98vk29dr))
- While MCP tool servers are powerful and flexible, they commonly communicate via standard input/output (stdio)—often running on your local machine where they can easily access your filesystem, environment, and other native system capabilities. ([View Highlight](https://read.readwise.io/read/01jrqgen9wq8n9jw6tp1ydpv73))
- That’s a strength—but also a limitation.
  If you want to deploy your main interface (like Open WebUI) on the cloud, you quickly run into a problem: your cloud instance can’t speak directly to an MCP server running locally on your machine via stdio. ([View Highlight](https://read.readwise.io/read/01jrqgeyjprqx87d8reakceb52))
- [That’s where mcpo comes in with a game-changing solution.](https://github.com/open-webui/mcpo)
  MCP servers typically rely on raw stdio communication, which is:
  • 🔓 Inherently insecure across environments
  • ❌ Incompatible with most modern tools, UIs, or platforms
  • 🧩 Lacking critical features like authentication, documentation, and error handling
  The mcpo proxy eliminates those issues—automatically:
  • ✅ Instantly compatible with existing OpenAPI tools, SDKs, and clients
  • 🛡 Wraps your tools with secure, scalable, and standards-based HTTP endpoints
  • 🧠 Auto-generates interactive OpenAPI documentation for every tool, entirely config-free
  • 🔌 Uses plain HTTP—no socket setup, daemon juggling, or platform-specific glue code ([View Highlight](https://read.readwise.io/read/01jrqgf7w1est67ew02y1m9tr8))
- So even though adding mcpo might at first seem like "just one more layer"—in reality, it simplifies everything while giving you:
  • Better integration ✅
  • Better security ✅
  • Better scalability ✅
  • Happier developers & users ✅
  ✨ With mcpo, your local-only AI tools become cloud-ready, UI-friendly, and instantly interoperable—without changing a single line of tool server code. ([View Highlight](https://read.readwise.io/read/01jrqggbqasysa77xvxf6dm5vp))
- 🍃 How It Works (Technical Summary)[​](https://docs.openwebui.com/openapi-servers/mcp/#-how-it-works-technical-summary)
  • **Dynamic Schema Discovery & Endpoints:** At server startup, the proxy connects to the MCP server to query available tools. It automatically builds FastAPI endpoints based on the MCP tool schemas, creating concise and clear REST endpoints.
  • **OpenAPI Auto-documentation:** Endpoints generated are seamlessly documented and available via FastAPI's built-in Swagger UI (`/docs`). No extra doc writing required.
  • **Asynchronous & Performant**: Built on robust asynchronous libraries, ensuring speed and reliability for concurrent users. ([View Highlight](https://read.readwise.io/read/01jrqgmxke45m4mw95hk245hfc))
- 📚 Under the Hood:[​](https://docs.openwebui.com/openapi-servers/mcp/#-under-the-hood)
  • FastAPI (Automatic routing & docs generation)
  • MCP Client (Standard MCP integration & schema discovery)
  • Standard JSON over HTTP (Easy integration) ([View Highlight](https://read.readwise.io/read/01jrqgn4rmrvp5j27nrj71t3m7))
