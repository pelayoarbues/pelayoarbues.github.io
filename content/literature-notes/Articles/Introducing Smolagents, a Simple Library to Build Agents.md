---
author: [[huggingface.co]]
title: 'Introducing Smolagents, a Simple Library to Build Agents'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/beating-gaia/thumbnail.jpeg)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Introducing Smolagents, a Simple Library to Build Agents
- URL: https://huggingface.co/blog/smolagents?__readwiseLocation=

## Highlights
- Today we are launching [`smolagents`](https://github.com/huggingface/smolagents), a very simple library that unlocks agentic capabilities for language models. Here’s a glimpse:
  from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel
  agent = CodeAgent(tools=[DuckDuckGoSearchTool()], model=HfApiModel())
  agent.run("How many seconds would it take for a leopard at full speed to run through Pont des Arts?")
  ![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/smolagents/smolagents.gif)
  [](https://huggingface.co/blog/smolagents/#table-of-contents)Table of Contents
  • [🤔 What are agents?](https://huggingface.co/blog/smolagents/#%F0%9F%A4%94-what-are-agents)
  • [✅ When to use agents / ⛔ when to avoid them](https://huggingface.co/blog/smolagents/#%E2%9C%85-when-to-use-agents--%E2%9B%94-when-to-avoid-them)
  • [Code agents](https://huggingface.co/blog/smolagents/#code-agents)
  • [Introducing *smolagents*: making agents simple 🥳](https://huggingface.co/blog/smolagents/#introducing-smolagents-making-agents-simple-%F0%9F%A5%B3)
  • [Building an agent](https://huggingface.co/blog/smolagents/#building-an-agent)
  • [How strong are open models for agentic workflows?](https://huggingface.co/blog/smolagents/#how-strong-are-open-models-for-agentic-workflows)
  • [Next steps 🚀](https://huggingface.co/blog/smolagents/#next-steps-%F0%9F%9A%80)
  [](https://huggingface.co/blog/smolagents/#🤔-what-are-agents)🤔 What are agents?
  Any efficient system using AI will need to provide LLMs some kind of access to the real world: for instance the possibility to call a search tool to get external information, or to act on certain programs in order to solve a task. In other words, LLMs should have ***agency***. Agentic programs are the gateway to the outside world for LLMs.
  AI Agents are **programs where LLM outputs control the workflow**.
  Any system leveraging LLMs will integrate the LLM outputs into code. The influence of the LLM's input on the code workflow is the level of agency of LLMs in the system.
  Note that with this definition, "agent" is not a discrete, 0 or 1 definition: instead, "agency" evolves on a continuous spectrum, as you give more or less power to the LLM on your workflow.
  The table below illustrates how agency varies across systems:
  Agency Level
  Description
  How that's called
  Example Pattern
  ☆☆☆
  LLM output has no impact on program flow
  Simple processor
  `process_llm_output(llm_response)`
  ★☆☆
  LLM output determines basic control flow
  Router
  `if llm_decision(): path_a() else: path_b()`
  ★★☆
  LLM output determines function execution
  Tool call
  `run_function(llm_chosen_tool, llm_chosen_args)`
  ★★★
  LLM output controls iteration and program continuation
  Multi-step Agent
  `while llm_should_continue(): execute_next_step()`
  ★★★
  One agentic workflow can start another agentic workflow
  Multi-Agent
  `if llm_trigger(): execute_agent()`
  The multi-step agent has this code structure:
  memory = [user_defined_task]
  while llm_should_continue(memory): # this loop is the multi-step part
  action = llm_get_next_action(memory) # this is the tool-calling part
  observations = execute_action(action)
  memory += [action, observations]
  So this system runs in a loop, executing a new action at each step (the action can involve calling some pre-determined *tools* that are just functions), until its observations make it apparent that a satisfactory state has been reached to solve the given task. Here’s an example of how a multi-step agent can solve a simple math question:
  ![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/Agent_ManimCE.gif)
  [](https://huggingface.co/blog/smolagents/#✅-when-to-use-agents--⛔-when-to-avoid-them)✅ When to use agents / ⛔ when to avoid them
  Agents are useful when you need an LLM to determine the workflow of an app. But they’re often overkill. The question is: do I really need flexibility in the workflow to efficiently solve the task at hand? If the pre-determined workflow falls short too often, that means you need more flexibility. Let's take an example: say you're making an app that handles customer requests on a surfing trip website.
  You could know in advance that the requests will belong to either of 2 buckets (based on user choice), and you have a predefined workflow for each of these 2 cases.
  1. Want some knowledge on the trips? ⇒ give them access to a search bar to search your knowledge base
  2. Wants to talk to sales? ⇒ let them type in a contact form.
  If that deterministic workflow fits all queries, by all means just code everything! This will give you a 100% reliable system with no risk of error introduced by letting unpredictable LLMs meddle in your workflow. For the sake of simplicity and robustness, it's advised to regularize towards not using any agentic behaviour.
  But what if the workflow can't be determined that well in advance?
  For instance, a user wants to ask : `"I can come on Monday, but I forgot my passport so risk being delayed to Wednesday, is it possible to take me and my stuff to surf on Tuesday morning, with a cancellation insurance?"` This question hinges on many factors, and probably none of the predetermined criteria above will suffice for this request.
  If the pre-determined workflow falls short too often, that means you need more flexibility.
  That is where an agentic setup helps.
  In the above example, you could just make a multi-step agent that has access to a weather API for weather forecasts, Google Maps API to compute travel distance, an employee availability dashboard and a RAG system on your knowledge base.
  Until recently, computer programs were restricted to pre-determined workflows, trying to handle complexity by piling up if/else switches. They focused on extremely narrow tasks, like "compute the sum of these numbers" or "find the shortest path in this graph". But actually, most real-life tasks, like our trip example above, do not fit in pre-determined workflows. Agentic systems open up the vast world of real-world tasks to programs!
  [](https://huggingface.co/blog/smolagents/#code-agents) ([View Highlight](https://read.readwise.io/read/01jh5mdhr8p7wc9qnw664hcycc))
- In a multi-step agent, at each step, the LLM can write an action, in the form of some calls to external tools. A common format (used by Anthropic, OpenAI, and many others) for writing these actions is generally different shades of "writing actions as a JSON of tools names and arguments to use, which you then parse to know which tool to execute and with which arguments". ([View Highlight](https://read.readwise.io/read/01jh5mgzkkeartf8fw0832yn01))
- [Multiple](https://huggingface.co/papers/2402.01030) [research](https://huggingface.co/papers/2411.01747) [papers](https://huggingface.co/papers/2401.00812) have shown that having the tool calling LLMs in code is much better.
  The reason for this is simply that *we crafted our code languages specifically to be the best possible way to express actions performed by a computer*. If JSON snippets were a better expression, JSON would be the top programming language and programming would be hell on earth. ([View Highlight](https://read.readwise.io/read/01jh5mhatbj8ajqjgy4b3e89yt))
- The figure below, taken from [Executable Code Actions Elicit Better LLM Agents](https://huggingface.co/papers/2402.01030), illustrates some advantages of writing actions in code:
  ![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/code_vs_json_actions.png) ([View Highlight](https://read.readwise.io/read/01jh5mkd2yymk9j2dmbncdfhqq))
- Writing actions in code rather than JSON-like snippets provides better:
  • **Composability:** could you nest JSON actions within each other, or define a set of JSON actions to re-use later, the same way you could just define a python function?
  • **Object management:** how do you store the output of an action like `generate_image` in JSON?
  • **Generality:** code is built to express simply anything you can have a computer do.
  • **Representation in LLM training data:** plenty of quality code actions is already included in LLMs’ training data which means they’re already trained for this! ([View Highlight](https://read.readwise.io/read/01jh5mkw8fnt6y3gn02e0n3z0n))
- We built [`smolagents`](https://github.com/huggingface/smolagents) with these objectives:
  ✨ **Simplicity**: the logic for agents fits in ~thousands lines of code (see [this file](https://github.com/huggingface/smolagents/blob/main/src/smolagents/agents.py)). We kept abstractions to their minimal shape above raw code!
  🧑‍💻 **First-class support for Code Agents**, i.e. agents that write their actions in code (as opposed to "agents being used to write code"). To make it secure, we support executing in sandboxed environments via [E2B](https://e2b.dev/).
  • On top of this [`CodeAgent`](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent) class, we still support the standard [`ToolCallingAgent`](https://huggingface.co/docs/smolagents/reference/agents#smolagents.ToolCallingAgent) that writes actions as JSON/text blobs.
  🤗 **Hub integrations**: you can share and load tools to/from the Hub, and more is to come!
  🌐 **Support for any LLM**: it supports models hosted on the Hub loaded in their `transformers` version or through our inference API, but also supports models from OpenAI, Anthropic and many others via our [LiteLLM](https://www.litellm.ai/) integration.
  [`smolagents`](https://github.com/huggingface/smolagents) is the successor to [`transformers.agents`](https://huggingface.co/blog/agents), and will be replacing it as [`transformers.agents`](https://huggingface.co/blog/agents) gets deprecated in the future. ([View Highlight](https://read.readwise.io/read/01jh5mn9sa244m7r2krrj15jvg))
- To build an agent, you need at least two elements:
  • `tools`: a list of tools the agent has access to
  • `model`: an LLM that will be the engine of your agent. ([View Highlight](https://read.readwise.io/read/01jh5mnfwtgx5wgr2me93cqdxn))
- For the `model`, you can use any LLM, either open models using our `HfApiModel` class, that leverages Hugging Face's free inference API (as shown in the leopard example above), or you can use `LiteLLMModel` to leverage [litellm](https://github.com/BerriAI/litellm) and pick from a list of 100+ different cloud LLMs.
  For the tool, you can just make a function with type hints on inputs and outputs, and docstrings giving descriptions for inputs, and use the `@tool` decorator to make it a tool. ([View Highlight](https://read.readwise.io/read/01jh5mp0d2bwgy68hck1p8a783))
- How strong are open models for agentic workflows?
  We've created [`CodeAgent`](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent) instances with some leading models, and compared them on [this benchmark](https://huggingface.co/datasets/m-ric/agents_medium_benchmark_2) that gathers questions from a few different benchmarks to propose a varied blend of challenges.
  [Find the benchmark here](https://github.com/huggingface/smolagents/blob/main/examples/benchmark.ipynb) for more detail on the agentic setup used, and see a comparison of code agents versus tool calling agents (spoilers: code works better).
  ![benchmark of different models on agentic workflows](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/smolagents/benchmark_code_agents.png)
  This comparison shows that open source models can now take on the best closed models! ([View Highlight](https://read.readwise.io/read/01jh5mqm13stmz38g3xj29tw60))
