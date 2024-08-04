---
author: [[openai.com]]
title: "New Models and Developer Products Announced at DevDay"
date: 2023-11-06
tags: 
- articles
- literature-note
---
![rw-book-cover](https://images.openai.com/blob/a2e49de2-ba5b-4869-9c2d-db3b4b5dcc19/new-models-and-developer-products-announced-at-devday.jpg?width=1000&quality=80)

## Metadata
- Author: [[openai.com]]
- Full Title: New Models and Developer Products Announced at DevDay
- URL: https://openai.com/blog/new-models-and-developer-products-announced-at-devday

## Highlights
- Today, we’re releasing the [Assistants API](https://platform.openai.com/docs/assistants/overview), our first step towards helping developers build agent-like experiences within their own applications. An assistant is a purpose-built AI that has specific instructions, leverages extra knowledge, and can call models and tools to perform tasks. The new Assistants API provides new capabilities such as Code Interpreter and Retrieval as well as function calling to handle a lot of the heavy lifting that you previously had to do yourself and enable you to build high-quality AI apps. ([View Highlight](https://read.readwise.io/read/01hek4ggzjf7cwrgpa726gahnc))
- A key change introduced by this API is **persistent and infinitely long threads**, which allow developers to hand off thread state management to OpenAI and work around context window constraints. With the Assistants API, you simply add each new message to an existing `thread`. ([View Highlight](https://read.readwise.io/read/01hek4h7a0xy04bhvgh9hx4j0h))
- Assistants also have access to call new tools as needed, including:
  • **Code Interpreter**: writes and runs Python code in a sandboxed execution environment, and can generate graphs and charts, and process files with diverse data and formatting. It allows your assistants to run code iteratively to solve challenging code and math problems, and more.
  • **Retrieval**: augments the assistant with knowledge from outside our models, such as proprietary domain data, product information or documents provided by your users. This means you don’t need to compute and store embeddings for your documents, or implement chunking and search algorithms. The Assistants API optimizes what retrieval technique to use based on our experience building knowledge retrieval in ChatGPT.
  • **Function calling**: enables assistants to invoke functions you define and incorporate the function response in their messages. ([View Highlight](https://read.readwise.io/read/01hek4hmrqyv6ms5ff9hngk5ch))
