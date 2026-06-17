---
author: "[[Nikos Vaggalis]]"
title: 'Mirascope-Python''s Alternative to Langchain'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Nikos Vaggalis]]
- Full Title: Mirascope-Python's Alternative to Langchain
- URL: https://www.i-programmer.info/news/90-tools/17275-mirascope-pythons-alternative-to-langchain.html

## Highlights
- If you've been used to Langchain to call into various model providers such as OpenAI, Anthropic, Mistral etc you'll find that this library does the same but more fluenty and with less overhead. The notion is that working with LLMs should be intuitive and simple just like coding with other Python projects. ([View Highlight](https://read.readwise.io/read/01j1pr3w1xdpaem2rbqtwasrvs))
- Mirascope unites the core modules of accessing each distinct LLM provider under a common API but at the same time gives you full access to every nitty-gritty detail of them when you need to; that is you can use the Mirascope wrapper API but at any point in your workflow you can get access to the original provider classes. ([View Highlight](https://read.readwise.io/read/01j1pr414gpngczxe79wen87w6))
- You can also Chain Calls, do Retries when LLM providers fail for various reasons, have stateful Chat History, Function calling etc.
  The following providers are for the time being supported:
  • OpenAI
  • Anthropic
  • Mistral
  • Cohere
  • Groq
  • Gemini
  As said, Mirascope's unified interface makes it fast and simple to swap between various providers. For instance here's how easy is the swapping, first with OpenAI: ([View Highlight](https://read.readwise.io/read/01j1pr4fnh1rfatp17q4jnb8fy))
