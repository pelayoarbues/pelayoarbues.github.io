---
author: "[[Anthropic]]"
title: 'Building Agents: When to Fold Subagents Into Your Main Agent Loop'
date: "2026-11-03"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://claude.com/es/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop/opengraph-image/og)

## Metadata
- Author: [[Anthropic]]
- Full Title: Building Agents: When to Fold Subagents Into Your Main Agent Loop
- URL: https://claude.com/es/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Highlights
- When building agents in Claude Platform, using fewer subagents in favor of progressively disclosed context and tools can improve quality while reducing cost and latency. Here’s when and how to migrate. ([View Highlight](https://read.readwise.io/read/01m6h4y20jwfqxdmxckbnkmwsn))
- If you’ve built an agent in Claude Platform that includes multiple subagents, see which may make sense to fold into the main agent loop using our [migration kit](https://github.com/anthropics/single-agent-loop-kit). It runs a guided workflow to identify your patterns, evaluate alternatives, and verify the best approach. It includes a demo that you can try on a mock system before running on your agent. ([View Highlight](https://read.readwise.io/read/01m6h4y7hcwkvmpg9mf9qyevc5))
- Subagents – agents with their own context window, tools, and instructions, [orchestrated by a coordinator](https://claude.com/resources/articles/multi-agent-coordination-patterns) – are a core component of agent design. They are effective at verification, parallel work, and modular permissioning. We use them in many of our own agents that we build using Claude Platform, for example our [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system). ([View Highlight](https://read.readwise.io/read/01m6h4ydjd3fn43nrm6parkkp5))
- However, recently the Applied AI team has found a pattern of enterprise agent deployments that have benefited from folding routers, planners, and domain subagents into the main agent loop. In [our comparisons across several enterprise deployments](https://claude.com/resources/articles/the-anatomy-of-effective-commerce-agents#:~:text=In%20our%20comparisons%20across%20several%20enterprise%20deployments,latency%20per%20task), [a single agent with skills](https://claude.com/resources/articles/building-agents-with-skills-equipping-agents-for-specialized-work) frequently outperformed both the one-prompt-for-everything design and the subagent design on quality, and often at a lower cost and latency per task. ([View Highlight](https://read.readwise.io/read/01m6h4yky20t0ate1vj0b6swrq))
- For example, one company found the dozen of specialist subagents within its customer-facing agent made a consistent on-brand experience difficult to maintain and added latency that hurt the user experience.
  We also often see proposed agent designs that follow a familiar progression: an intent classifier, a fixed multi-step reasoning pipeline, user-segment buckets, separate recommendation branches, and a multi-agent orchestrator on top.
  In these cases feedback is often that most of this structure was doing work the model no longer needed done for it, and that one clear system prompt, 4-5 thin data tools, and firm output guardrails would cover most of the use case. ([View Highlight](https://read.readwise.io/read/01m6h4yvjjcvjzahppjcbfk8nc))
- To be clear, subagents still have their place, including at the research frontier. Use them when:
  • A single agent loop hits measurable performance degradation from context bloat, or
  • Multiple tasks need to be tackled in parallel with fresh context windows that can be discarded once the task is done, or
  • A single agent struggles to select appropriate tools or there are conflicting instructions in the system prompt. ([View Highlight](https://read.readwise.io/read/01m6h4z48rmszwye7ckee7fp68))
- But too often we see enterprises give each team or problem type its own subagent, with the agent architecture becoming a copy of their org chart (Conway’s law at work).
  This post explains when to consider folding subagents into your main agent loop with best practices we’ve learned from building agents in large organizations. ([View Highlight](https://read.readwise.io/read/01m6h4z7f3hhxza1wqdjp6kyrg))
