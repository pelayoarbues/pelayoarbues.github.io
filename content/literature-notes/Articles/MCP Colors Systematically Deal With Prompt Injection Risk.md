---
author: "[[Simon Willison's Weblog]]"
title: 'MCP Colors: Systematically Deal With Prompt Injection Risk'
date: "2025-11-05"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: MCP Colors: Systematically Deal With Prompt Injection Risk
- URL: https://simonwillison.net/2025/Nov/4/mcp-colors/#atom-everything

## Highlights
- **[MCP Colors: Systematically deal with prompt injection risk](https://timkellogg.me/blog/2025/11/03/colors)** ([via](https://bsky.app/profile/timkellogg.me/post/3m4ridhi3ps25)) Tim Kellogg proposes a neat way to think about prompt injection, especially with respect to MCP tools.
  Classify every tool with a color: red if it exposes the agent to untrusted (potentially malicious) instructions, blue if it involves a "critical action" - something you would not want an attacker to be able to trigger.
  This means you can configure your agent to actively avoid mixing the two colors at once:
  > The Chore: Go label every data input, and **every tool** (especially MCP tools). For MCP tools & resources, you can use the _meta object to keep track of the color. The agent can decide at runtime (or earlier) if it’s gotten into an unsafe state.
  > 
  > Personally, I like to automate. I needed to label ~200 tools, so I put them in a spreadsheet and used an LLM to label them. That way, I could focus on being **precise and clear** about my criteria for what constitutes “red”, “blue” or “neither”. That way I ended up with an artifact that scales beyond my initial set of tools. ([View Highlight](https://read.readwise.io/read/01k9a9pejs3wnsv7329hfyz93y))
