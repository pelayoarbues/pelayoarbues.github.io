---
author: "[[Simon Willison's Weblog]]"
title: 'Introducing GPT-5.1 for Developers'
date: "2025-11-17"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Introducing GPT-5.1 for Developers
- URL: https://simonwillison.net/2025/Nov/13/gpt-51/#atom-everything

## Highlights
- OpenAI announced GPT-5.1 yesterday, calling it [a smarter, more conversational ChatGPT](https://openai.com/index/gpt-5-1/). Today they've added it to their API. ([View Highlight](https://read.readwise.io/read/01ka9hrdvjp2fe8cke125yh652))
- GPT-5.1 introduces a new reasoning effort called "none" (previous were minimal, low, medium, and high) - and none is the new default.
  > This makes the model behave like a non-reasoning model for latency-sensitive use cases, with the high intelligence of GPT‑5.1 and added bonus of performant tool-calling. Relative to GPT‑5 with 'minimal' reasoning, GPT‑5.1 with no reasoning is better at parallel tool calling (which itself increases end-to-end task completion speed), coding tasks, following instructions, and using search tools---and supports [web search⁠](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses) in our API platform. ([View Highlight](https://read.readwise.io/read/01ka9hrjebtfqse98dked88szz))
- When you DO enable thinking you get to benefit from a new feature called "adaptive reasoning":
  > On straightforward tasks, GPT‑5.1 spends fewer tokens thinking, enabling snappier product experiences and lower token bills. On difficult tasks that require extra thinking, GPT‑5.1 remains persistent, exploring options and checking its work in order to maximize reliability. ([View Highlight](https://read.readwise.io/read/01ka9hrws4adefszke9bbk4srn))
- The most interesting documentation I've seen so far is in the new [5.1 cookbook](https://cookbook.openai.com/examples/gpt-5/gpt-5-1_prompting_guide), which also includes details of the new `shell` and `apply_patch` built-in tools. The [apply_patch.py implementation](https://github.com/openai/openai-cookbook/blob/main/examples/gpt-5/apply_patch.py) is worth a look, especially if you're interested in the advancing state-of-the-art of file editing tools for LLMs. ([View Highlight](https://read.readwise.io/read/01ka9hshhstx36kz38ma3hh81p))
