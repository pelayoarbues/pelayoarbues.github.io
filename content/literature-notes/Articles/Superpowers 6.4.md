---
author: "[[Massively Parallel Procrastination]]"
title: 'Superpowers 6.4'
date: "2026-09-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.fsck.com/img/me.jpg)

## Metadata
- Author: [[Massively Parallel Procrastination]]
- Full Title: Superpowers 6.4
- URL: https://blog.fsck.com/2026/09/21/superpowers-6.4/

## Highlights
- We've done some work on `brainstorming` and `writing-plans` to help steer your agents away from skipping steps or doing significant unrequested work. ([View Highlight](https://read.readwise.io/read/01m32s0zvenj80w6pehyw403k6))
- Superpowers offers two plan execution styles. One is "Subagent-Driven Development", which uses the primary agent session as an orchestrator, dispatching all implementation and test tasks to right-sized subagents with limited context and limited mandates. The other is "Native (inline) Execution", which dates to the earliest days of Superpowers. It was originally intended for a human-in-the-loop flow where you acted as a go-between for two agentic sessions. ([View Highlight](https://read.readwise.io/read/01m32s0xsjnhcz6hp82qa4jen8))
- As the frontier models have improved, they've gotten better at executing work inline without getting distracted or losing the plot. Superpowers 6.4 reinvents Native Execution (the `executing-plans` skill) for today's more capable models. ([View Highlight](https://read.readwise.io/read/01m32s0tz9c2bfd8xrxmgn4z42))
- We've been running extensive evals comparing Subagent-Driven Development, Native Execution and "bare metal" implementations with Claude Code. With a frontier model, Native Execution is about twice as fast and half as expensive as Subagent-Driven Development. Building without Superpowers gets you results faster and cheaper, but in our testing, even with Astra and Fable, builds without Superpowers implementation skills are significantly buggier than builds using Superpowers. We are, of course, working hard to make Superpowers faster and cheaper to use. We're currently testing out some fairly big changes to the planning skills that we hope to debut soon. ([View Highlight](https://read.readwise.io/read/01m32s14q2cvysk3txwnecn1sx))
- 6.4 also introduces a new `diagnosing-superpowers` skill, which you can use when a session has done something you didn't expect. It knows how to dig into your coding agent's history to understand what Superpowers was doing and can help you put together a good bug report. ([View Highlight](https://read.readwise.io/read/01m32s1qt5k97ffj5kg5srh9sc))
- We've done a little bit of work to tune the code reviewer prompts to apply a bit more "what would a reasonable person think?" judgment. This should help overzealous models calm down and converge rather than work themselves into aggressive review loops. ([View Highlight](https://read.readwise.io/read/01m32s25nttt2x2a94hpkh2m6y))
