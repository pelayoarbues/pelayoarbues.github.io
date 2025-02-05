---
author: [[anthropic.com]]
title: "Building Effective Agents"
date: 2025-02-05
tags: 
- articles
- literature-note
---
![rw-book-cover](https://cdn.sanity.io/images/4zrzovbb/website/b05cf65de663b0b93909dee5071c73b273a3cef3-2560x1344.png)

## Metadata
- Author: [[anthropic.com]]
- Full Title: Building Effective Agents
- URL: https://www.anthropic.com/research/building-effective-agents

## Highlights
- Over the past year, we've worked with dozens of teams building large language model (LLM) agents across industries. Consistently, the most successful implementations weren't using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns. ([View Highlight](https://read.readwise.io/read/01jkardaazycq42x2abx2360rs))
- "Agent" can be defined in several ways. Some customers define agents as fully autonomous systems that operate independently over extended periods, using various tools to accomplish complex tasks. Others use the term to describe more prescriptive implementations that follow predefined workflows. At Anthropic, we categorize all these variations as **agentic systems**, but draw an important architectural distinction between **workflows** and **agents**:
  • **Workflows** are systems where LLMs and tools are orchestrated through predefined code paths.
  • **Agents**, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks. ([View Highlight](https://read.readwise.io/read/01jkardmwcph2ysan9jrt5j6v0))
- When (and when not) to use agents
  When building applications with LLMs, we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all. Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense. ([View Highlight](https://read.readwise.io/read/01jkare5tg8gq3kgpr1m4c4hhx))
- When more complexity is warranted, workflows offer predictability and consistency for well-defined tasks, whereas agents are the better option when flexibility and model-driven decision-making are needed at scale. For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough. ([View Highlight](https://read.readwise.io/read/01jkareed000cx9awj668v96hp))
- There are many frameworks that make agentic systems easier to implement, including:
  • [LangGraph](https://langchain-ai.github.io/langgraph/) from LangChain;
  • Amazon Bedrock's [AI Agent framework](https://aws.amazon.com/bedrock/agents/);
  • [Rivet](https://rivet.ironcladapp.com/), a drag and drop GUI LLM workflow builder; and
  • [Vellum](https://www.vellum.ai/), another GUI tool for building and testing complex workflows.
  These frameworks make it easy to get started by simplifying standard low-level tasks like calling LLMs, defining and parsing tools, and chaining calls together. However, they often create extra layers of abstraction that can obscure the underlying prompts ​​and responses, making them harder to debug. They can also make it tempting to add complexity when a simpler setup would suffice. ([View Highlight](https://read.readwise.io/read/01jkarf1rbp3fz0f7mer8ct9jv))
- We suggest that developers start by using LLM APIs directly: many patterns can be implemented in a few lines of code. If you do use a framework, ensure you understand the underlying code. Incorrect assumptions about what's under the hood are a common source of customer error. ([View Highlight](https://read.readwise.io/read/01jkarf7jbzzkybdwds2xp3s8p))
- Building blocks, workflows, and agents
  In this section, we’ll explore the common patterns for agentic systems we’ve seen in production. We'll start with our foundational building block—the augmented LLM—and progressively increase complexity, from simple compositional workflows to autonomous agents. ([View Highlight](https://read.readwise.io/read/01jkargnmps0mp46e830gbyky5))
- Building block: The augmented LLM
  The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory. Our current models can actively use these capabilities—generating their own search queries, selecting appropriate tools, and determining what information to retain.
  ![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd3083d3f40bb2b6f477901cc9a240738d3dd1371-2401x1000.png&w=3840&q=75)
  The augmented LLM
  We recommend focusing on two key aspects of the implementation: tailoring these capabilities to your specific use case and ensuring they provide an easy, well-documented interface for your LLM. While there are many ways to implement these augmentations, one approach is through our recently released [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol), which allows developers to integrate with a growing ecosystem of third-party tools with a simple [client implementation](https://modelcontextprotocol.io/tutorials/building-a-client#building-mcp-clients). ([View Highlight](https://read.readwise.io/read/01jkarhb0e04awjnnqszmvy8wt))
