---
author: [[Simon Willison's Weblog]]
title: "OpenAI Agents SDK"
date: 2025-03-12
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: OpenAI Agents SDK
- URL: https://simonwillison.net/2025/Mar/11/openai-agents-sdk/#atom-everything

## Highlights
- **[OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)**. OpenAI's other big announcement today ([see also](https://simonwillison.net/2025/Mar/11/responses-vs-chat-completions/)) - a Python library ([openai-agents](https://pypi.org/project/openai-agents/)) for building "agents", which is a replacement for their previous [swarm](https://github.com/openai/swarm) research project. ([View Highlight](https://read.readwise.io/read/01jp5gmb9ny7w0g42sfxzv39ex))
- In this project, an "agent" is a class that configures an LLM with a system prompt an access to specific tools.
  An interesting concept in this one is the concept of **[handoffs](https://openai.github.io/openai-agents-python/handoffs/)**, where one agent can chose to hand execution over to a different system-prompt-plus-tools agent treating it almost like a tool itself. ([View Highlight](https://read.readwise.io/read/01jp5gmvnsc98rgc4zwgtqkemv))
- The library also includes [guardrails](https://openai.github.io/openai-agents-python/guardrails/) - classes you can add that attempt to filter user input to make sure it fits expected criteria. Bits of this look suspiciously like trying to [solve AI security problems with more AI](https://simonwillison.net/2022/Sep/17/prompt-injection-more-ai/) to me. ([View Highlight](https://read.readwise.io/read/01jp5gn0x2jq87q93mmhhqph1v))
