---
author: "[[huggingface.co]]"
title: 'License to Call: Introducing Transformers Agents 2.0'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/agents/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: License to Call: Introducing Transformers Agents 2.0
- URL: https://huggingface.co/blog/agents

## Highlights
- One approach to overcome this weakness is to create an **agent**, which is just a program driven by an LLM. The agent is empowered by **tools** to help it perform actions. When the agent needs a specific skill to solve a particular problem, it relies on an appropriate tool from its toolbox. ([View Highlight](https://read.readwise.io/read/01hxv0bdkdx9ecr066htpe1kxs))
- Building agent workflows is complex, and we feel these systems need a lot of clarity and modularity. We launched Transformers Agents one year ago, and we’re doubling down on our core design goals.
  Our framework strives for:
  • **Clarity through simplicity:** we reduce abstractions to the minimum. Simple error logs and accessible attributes let you easily inspect what’s happening and give you more clarity.
  • **Modularity:** We prefer to propose building blocks rather than full, complex feature sets. You are free to choose whatever building blocks are best for your project.
  • For instance, since any agent system is just a vehicle powered by an LLM engine, we decided to conceptually separate the two, which lets you create any agent type from any underlying LLM.
  On top of that, we have **sharing features** that let you build on the shoulders of giants!
  [](https://huggingface.co/blog/agents#main-elements) ([View Highlight](https://read.readwise.io/read/01hxv0bqk0vsw7ezkpzzvrkngf))
- `Tool`: this is the class that lets you use a tool or implement a new one. It is composed mainly of a callable forward `method` that executes the tool action, and a set of a few essential attributes: `name`, `descriptions`, `inputs` and `output_type`. These attributes are used to dynamically generate a usage manual for the tool and insert it into the LLM’s prompt. ([View Highlight](https://read.readwise.io/read/01hxv0c0080zkjvq2ea8we11rg))
- `Toolbox`: It's a set of tools that are provided to an agent as resources to solve a particular task. For performance reasons, tools in a toolbox are already instantiated and ready to go. This is because some tools take time to initialize, so it’s usually better to re-use an existing toolbox and just swap one tool, rather than re-building a set of tools from scratch at each agent initialization. ([View Highlight](https://read.readwise.io/read/01hxv0c3qqs2a3nvv5r1e48rr2))
- `CodeAgent`: a very simple agent that generates its actions as one single blob of Python code. It will not be able to iterate on previous observations. ([View Highlight](https://read.readwise.io/read/01hxv0ce4b08qjgd3qxg7c1ydt))
- `ReactAgent`: ReAct agents follow a cycle of Thought ⇒ Action ⇒ Observation until they’ve solve the task. We propose two classes of ReactAgent:
  • `ReactCodeAgent` generates its actions as python blobs.
  • `ReactJsonAgent` generates its actions as JSON blobs. ([View Highlight](https://read.readwise.io/read/01hxv0cg611mgcd9m233smpbna))
- How do agents work under the hood?
  In essence, what an agent does is “allowing an LLM to use tools”. Agents have a key `agent.run()` method that:
  • Provides information about tool usage to your LLM in a **specific prompt**. This way, the LLM can select tools to run to solve the task.
  • **Parses** the tool calls from the LLM output (can be via code, JSON format, or any other format).
  • **Executes** the calls.
  • If the agent is designed to iterate on previous outputs, it **keeps a memory** with previous tool calls and observations. This memory can be more or less fine-grained depending on how long-term you want it to be. ([View Highlight](https://read.readwise.io/read/01hxv0cr2xf6nzt0b4whcyevnk))
- ![graph of agent workflows](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/agents/agent_single_multistep.png) ([View Highlight](https://read.readwise.io/read/01hxv0d538tff1dwd6j7zzkd3s))
- Quick definition: Retrieval-Augmented-Generation (RAG) is “using an LLM to answer a user query, but basing the answer on information retrieved from a knowledge base”. It has many advantages over using a vanilla or fine-tuned LLM: to name a few, it allows to ground the answer on true facts and reduce confabulations, it allows to provide the LLM with domain-specific knowledge, and it allows fine-grained control of access to information from the knowledge base.
  Let’s say we want to perform RAG, and some parameters must be dynamically generated. For example, depending on the user query we could want to restrict the search to specific subsets of the knowledge base, or we could want to adjust the number of documents retrieved. The difficulty is: how to dynamically adjust these parameters based on the user query? ([View Highlight](https://read.readwise.io/read/01hxv0e3n0sj88r9qz7h9fm8zh))
- The agent will need these arguments upon initialization:
  • *`tools`*: a list of tools that the agent will be able to call.
  • *`llm_engine`*: the LLM that powers the agent.
  Our `llm_engine` must be a callable that takes as input a list of [messages](https://huggingface.co/docs/transformers/main/chat_templating) and returns text. It also needs to accept a `stop_sequences` argument that indicates when to stop its generation. For convenience, we directly use the `HfEngine` class provided in the package to get a LLM engine that calls our [Inference API](https://huggingface.co/docs/api-inference/en/index). ([View Highlight](https://read.readwise.io/read/01hxv0fwzpv3zebr87smvb85v5))
- Since we initialized the agent as a `ReactJsonAgent`, it has been automatically given a default system prompt that tells the LLM engine to process step-by-step and generate tool calls as JSON blobs (you could replace this prompt template with your own as needed).
  Then when its `.run()` method is launched, the agent takes care of calling the LLM engine, parsing the tool call JSON blobs and executing these tool calls, all in a loop that ends only when the final answer is provided. ([View Highlight](https://read.readwise.io/read/01hxv0h1rmhcjz1jqmz36amwhk))
- In this example, we want to build an agent and test it on the GAIA benchmark ([Mialon et al. 2023](https://huggingface.co/papers/2311.12983)). GAIA is an extremely difficult benchmark, with most questions requiring several steps of reasoning using different tools. A specifically difficult requirement is to have a powerful web browser, able to navigate to pages with specific constraints: discovering pages using the website’s inner navigation, selecting specific articles in time...
  Web browsing requires diving deeper into subpages and scrolling through lots of text tokens that will not be necessary for the higher-level task-solving. We assign the web-browsing sub-tasks to a specialized web surfer agent. We provide it with some tools to browse the web and a specific prompt (check the repo to find specific implementations). ([View Highlight](https://read.readwise.io/read/01hxv0hcpgx7g97t42dmtdt09s))
