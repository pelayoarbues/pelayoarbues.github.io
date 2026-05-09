---
author: "[[Claude API Docs]]"
title: 'Advisor Tool'
date: "2026-05-08"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://platform.claude.com/docs/og?locale=en&path=agents-and-tools/tool-use/advisor-tool)

## Metadata
- Author: [[Claude API Docs]]
- Full Title: Advisor Tool
- URL: https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool

## Highlights
- Advisor tool
  Copy page
  Pair a faster executor model with a higher-intelligence advisor model that provides strategic guidance mid-generation.
  Copy page
  The advisor tool lets a faster, lower-cost **executor model** consult a higher-intelligence **advisor model** mid-generation for strategic guidance. The advisor reads the full conversation, produces a plan or course correction (typically 400 to 700 text tokens, 1,400 to 1,800 tokens total including thinking), and the executor continues with the task.
  This pattern fits long-horizon agentic workloads (coding agents, computer use, multi-step research pipelines) where most turns are mechanical but having an excellent plan is crucial. You get close to advisor-solo quality while the bulk of token generation happens at executor-model rates. ([View Highlight](https://read.readwise.io/read/01kr3j1wfaac919psap05e1xga))
- When to use it
  Early benchmarks show meaningful gains for these configurations:
  • **You currently use Sonnet on complex tasks:** Add Opus as the advisor for a quality lift at similar or lower total cost.
  • **You currently use Haiku and want a step up in intelligence:** Add Opus as the advisor. Expect higher cost than Haiku alone, but lower than switching the executor to a larger model.
  Results are task-dependent. Evaluate on your own workload.
  The advisor is a weaker fit for single-turn Q&A (nothing to plan), pure pass-through model pickers where your users already choose their own cost and quality tradeoff, or workloads where every turn genuinely requires the advisor model's full capability. ([View Highlight](https://read.readwise.io/read/01kr3j1z6y9derqkvm8rczqfe3))
- How it works
  When you add the advisor tool to your `tools` array, the executor model decides when to call it, just like any other tool. When the executor invokes the advisor:
  1. The executor emits a `server_tool_use` block with `name: "advisor"` and an empty `input`. The executor signals timing; the server supplies context.
  2. Anthropic runs a separate inference pass on the advisor model server-side, passing the executor's full transcript. The advisor sees the system prompt, all tool definitions, all prior turns, and all prior tool results.
  3. The advisor's response returns to the executor as an `advisor_tool_result` block.
  4. The executor continues generating, informed by the advice.
  All of this happens inside a single `/v1/messages` request. No extra round trips on your side.
  The advisor itself runs without tools and without context management. Its thinking blocks are dropped before the result returns; only the advice text reaches the executor. ([View Highlight](https://read.readwise.io/read/01kr3j1ppbrvp3mv10vcdjdc12))
