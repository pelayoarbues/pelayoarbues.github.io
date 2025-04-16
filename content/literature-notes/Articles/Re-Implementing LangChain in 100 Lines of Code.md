---
author: [[ColinEberhardt]]
title: "Re-Implementing LangChain in 100 Lines of Code"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://blog.scottlogic.com/ceberhardt/assets/ai.png)

## Metadata
- Author: [[ColinEberhardt]]
- Full Title: Re-Implementing LangChain in 100 Lines of Code
- URL: https://blog.scottlogic.com/2023/05/04/langchain-mini.html

## Highlights
- 530
  [LangChain](https://github.com/hwchase17/langchain) has become a tremendously popular toolkit for building a wide range of LLM-powered applications, including chat, Q&A and document search. In this blogpost I re-implement some of the novel LangChain functionality as a learning exercise, looking at the low-level prompts it uses to create these higher-level capabilities. ([View Highlight](https://read.readwise.io/read/01heqbc1nf1xnxsp1ceqzpvfp3))
- I really enjoyed this process, and learnt a lot about the overall concept of chaining calls to an LLM. I was also quite surprised how simple this all is, especially the core orchestration / reasoning, where you give the model a single example and off it goes …
  However, through building this, it also made me aware of the current weaknesses. The examples I have provided above are all happy paths. I found it was able to answer my questions, and use tools appropriately, most of the time. But it certainly doesn’t work 100% of the time, and when it fails it isn’t always obvious to the user who is interacting with the chat. I did find myself having to tweak the question quite often to achieve the required outcome. ([View Highlight](https://read.readwise.io/read/01heqjeb6zct066c7ka60swm32))
- I have had similar experiences with LangChain itself, sometimes you have to be careful about how you phrase a question to get the desired result. Having an understanding of how it works under-the-hood, really helps explain the unexpected results. For example, sometimes the LLM orchestrator simply decides that it doesn’t need to use a calculator, and can perform a given calculation itself. I’d encourage anyone who is using this tool to gain this understanding. It is an abstraction over carefully engineered prompts, but these are not perfect. To coin Joel Spolsky, this abstraction is a [little leaky](https://en.wikipedia.org/wiki/Leaky_abstraction) in places! ([View Highlight](https://read.readwise.io/read/01heqjew4j3seph355czpna1s4))
