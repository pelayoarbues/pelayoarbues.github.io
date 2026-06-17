---
author: "[[MCP Core Maintainers]]"
title: 'MCP Apps - Bringing UI Capabilities to MCP Clients'
date: "2026-02-02"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](http://blog.modelcontextprotocol.io/og-image.png)

## Metadata
- Author: [[MCP Core Maintainers]]
- Full Title: MCP Apps - Bringing UI Capabilities to MCP Clients
- URL: https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/

## Highlights
- Today, we’re announcing that **MCP Apps are now live as an official MCP extension**. Tools can now return interactive UI components that render directly in the conversation: dashboards, forms, visualizations, multi-step workflows, and more. This is the first official MCP extension, and it’s ready for production. ([View Highlight](https://read.readwise.io/read/01kgfvnfv0r830dynhc5zcq57e))
- MCP Apps let tools return rich, interactive interfaces instead of plain text. When a tool declares a UI resource, the host renders it in a sandboxed iframe, and users interact with it directly in the conversation.
  ![](https://blog.modelcontextprotocol.io/posts/images/mcp-apps/claude-colorpicker-apps.gif) ([View Highlight](https://read.readwise.io/read/01kgfvnvz178932wr1qjgdbnk4))
- • **Data exploration**: A sales analytics tool returns an interactive dashboard. Users filter by region, drill down into specific accounts, and export reports without leaving the conversation.
  • **Configuration wizards**: A deployment tool presents a form with dependent fields. Selecting “production” reveals additional security options; selecting “staging” shows different defaults.
  • **Document review**: A contract analysis tool displays the PDF inline with highlighted clauses. Users click to approve or flag sections, and the model sees their decisions in real time.
  • **Real-time monitoring**: A server health tool shows live metrics that update as systems change. No need to re-run the tool to see current status. ([View Highlight](https://read.readwise.io/read/01kgfvpas83swdk5xww08vg8w1))
- The architecture of MCP Apps relies on two key MCP primitives:
  1. **Tools with UI metadata**: Tools include a `_meta.ui.resourceUri` field pointing to a UI resource
  2. **UI Resources**: Server-side resources served via the `ui://` scheme containing bundled HTML/JavaScript ([View Highlight](https://read.readwise.io/read/01kgfvpfmjg7nmfcjz9hgh3n3w))
- **Why MCP Apps?**
  MCP is great for connecting models to data and giving them the ability to take actions. But there’s still a context gap between what tools can do and what users can see.
  Consider a tool that queries your database. It returns rows of data, maybe hundreds of them. The model can summarize this data, but users often want to explore: sort by a column, filter to a date range, or click into a specific record. With text responses, every interaction requires another prompt. “Show me just the ones from last week.” “Sort by revenue.” “What’s the detail on row 47?” It works, but it’s slow.
  MCP Apps closes this gap. The model stays in the loop, seeing what users do and responding accordingly, but the UI handles what text can’t: live updates, native media viewers, persistent states, and direct manipulation. Combined, they provide the model and user with all the context they need in one familiar interface. ([View Highlight](https://read.readwise.io/read/01kgfvpyfvdtdj7pmrqnpytm1j))
- [MCP-UI](https://mcpui.dev/) and [OpenAI Apps SDK](https://developers.openai.com/apps-sdk/) pioneered the patterns that MCP Apps now standardizes. The projects proved that UI resources can and do fit naturally within the MCP ecosystem, with enterprises of all sizes adopting both the OpenAI and MCP-UI SDKs for production applications.
  MCP-UI isn’t going anywhere. The SDKs support MCP Apps patterns, with the Client SDK as the recommended framework for Hosts looking to adopt MCP Apps. The community continues to contribute extensively to the specification. If you’re already using MCP-UI, keep using it. Migration to the official extension is straightforward when you’re ready. ([View Highlight](https://read.readwise.io/read/01kgfvq8716mbjm3pfwc2435xd))
- MCP Apps are supported in:
  • **Claude** - available today both on web and desktop experiences
  • **ChatGPT** - starting this week
  For the first time, an MCP tool developer can ship an interactive experience that works across a broad range of widely-adopted clients without writing a single line of client-specific code. ([View Highlight](https://read.readwise.io/read/01kgfvqjwng7ecce9cvxyhz1bm))
