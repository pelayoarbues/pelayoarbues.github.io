---
author: "[[letta.com]]"
title: 'Programmatic Tool Calling With Any LLM'
date: "2025-12-05"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/66bb3d1f468f0f3848a20a84/692dff0f8c7ecba7ca2db3fe_scale%20growing%402x.png)

## Metadata
- Author: [[letta.com]]
- Full Title: Programmatic Tool Calling With Any LLM
- URL: https://www.letta.com/blog/programmatic-tool-calling-with-any-llm

## Highlights
- Last week, Anthropic released built-in [programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling) support in the Claude API. Although the idea of having agents take actions by running arbitrary code is not new (e.g., the [CodeAct](https://machinelearning.apple.com/research/codeact) research paper, and Cloudflare’s [Code Mode](https://blog.cloudflare.com/code-mode/) extension for MCP), agents have historically relied on picking single tools to execute in sequence from a pre-defined toolset specified at inference time (e.g., tools provided by an MCP server), rather than dynamic code execution. ([View Highlight](https://read.readwise.io/read/01kbr4kdcr47e56mht6bxjpk0f))
- However, as LLMs become extremely adept at coding, agents can rely more heavily on dynamic code execution rather than basic tool calling. Programmatic tool calling allows agents to write and execute code that invokes tools, mixing dynamic code generation with pre-defined tools. This pattern is extremely powerful as it allows general-purpose agents to define and execute workflows themselves, rather than requiring developers to pre-define them. In other words, programmatic tool calling allows agents to write their own workflows. ([View Highlight](https://read.readwise.io/read/01kbr4khck83t0xr0tpkdgt4m3))
