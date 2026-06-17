---
author: "[[langfuse.com]]"
title: 'Tracing'
date: "2026-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://langfuse.com/api/og?title=Tracing&description=Understand+what+tracing+is%2C+how+traces+are+structured%2C+and+why+they+are+the+foundation+of+LLM+observability.&section=Academy)

## Metadata
- Author: [[langfuse.com]]
- Full Title: Tracing
- URL: https://langfuse.com/academy/tracing

## Highlights
- Traditional software is largely deterministic, executions follow a pre-defined format. For LLM applications that's not the case. Agent executions can be messy, we are dealing with emergent behaviour with rich and unexpected inputs and outputs, and execution order. You need something else to follow your agent's behavior: [traces](https://langfuse.com/docs/observability/overview).
  A trace is a structured record of what your application did for a single request: which steps it took, what data it saw, what it produced. ([View Highlight](https://read.readwise.io/read/01ks3da3f34mykxm2gdh94cvvb))
- Tracing is central to the entire improvement loop. Every other step — reviewing, building datasets, running experiments, evaluating — operates on traces. ([View Highlight](https://read.readwise.io/read/01ks3daaj2vd78eh3s7esy85xe))
- [The anatomy of a trace](https://langfuse.com/academy/tracing/#the-anatomy-of-a-trace)
  A trace can be as complex or as simple as your application requires, but all traces share the same basic structure. It's composed of a set of [observations](https://langfuse.com/docs/observability/data-model) that map out the path your agent took. ([View Highlight](https://read.readwise.io/read/01ks3dah0kd1j62w59aw2mr4ys))
- [Hierarchy](https://langfuse.com/academy/tracing/#hierarchy)
  A trace has a hierarchical tree structure. Nested inside are observations that can contain other observations, forming a parent-child structure that mirrors the actual execution of your AI application. ([View Highlight](https://read.readwise.io/read/01ks3ddcmgsy4p5kevw3yrpng5))
- [Observation data](https://langfuse.com/academy/tracing/#observation-data)
  **Input and output.** Every observation can have an input and an output. Most of the time it will have both; in some specific cases it might only have one of the two. It's important for interpretability that you set an input and/or output that makes sense for the type of action happening in that observation. ([View Highlight](https://read.readwise.io/read/01ks3ddt2m25krmhe643am9jzs))
- **Observation types.** In order to make it easy to differentiate between operations, you'll see different [types of observations](https://langfuse.com/docs/observability/features/observation-types). Each type of observation is used to capture different kinds of interactions of an agent.
  Action of an agent
  Observation type
  Typical observation input/output
  A call to a language model
  `generation`
  Full prompt or message history as input, the completion as output, plus metadata like the model name and token counts
  A step that fetches information from an external source
  `retriever`
  Query and the returned documents
  An invocation of a tool or function by an agent
  `tool`
  Which tool was called, the arguments, and the return value
  General processes
  `span`
  Highly dependent on the use case
  Observation types make it easier to read traces and to filter. In a trace with 20 observations, being able to quickly spot the LLM calls saves time. ([View Highlight](https://read.readwise.io/read/01ks3de0q1zf957qgzr2byytam))
- [Cost, latency, token usage](https://langfuse.com/academy/tracing/#cost-latency-token-usage)
  Beyond input and output, there are a few attributes on observations that are table stakes in any LLM application: cost, latency, and [token usage](https://langfuse.com/docs/observability/features/token-and-cost-tracking). These are recorded per observation and aggregated at the trace level. ([View Highlight](https://read.readwise.io/read/01ks3de6yttj10xg2s4k3svk6w))
- [Traces vs sessions](https://langfuse.com/academy/tracing/#traces-vs-sessions)
  Most of the time you would not see an entire agent's lifecycle execution in one trace. Traces can be grouped into [sessions](https://langfuse.com/docs/observability/features/sessions). But where do you draw the line between a trace and a session? ([View Highlight](https://read.readwise.io/read/01ks3dee502112cbacn6jnf40y))
- A general rule of thumb is: **one trace corresponds to one invocation of your system**, typically one API call or one agent execution. A session then groups multiple traces together, for example all the turns in a multi-turn conversation. ([View Highlight](https://read.readwise.io/read/01ks3der8224ak80hazjfqed6g))
- [Where to start](https://langfuse.com/academy/tracing/#where-to-start)
  If you're just getting started, focus on instrumenting one real workflow end to end before trying to cover every possible path.
  1. [Set up tracing](https://langfuse.com/docs/observability/get-started) for one important request path in your application.
  2. Make sure each observation captures useful input, output, and metadata for the step it represents.
  3. Review a handful of real traces manually to confirm that the structure is easy to follow and useful for debugging. ([View Highlight](https://read.readwise.io/read/01ks3df6f3p7md4fnc208kttrf))
