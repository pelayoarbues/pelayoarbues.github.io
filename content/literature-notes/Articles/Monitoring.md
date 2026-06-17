---
author: "[[langfuse.com]]"
title: 'Monitoring'
date: "2026-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://langfuse.com/api/og?title=Monitoring&description=How+to+make+sense+of+your+traces+through+metrics+tracking%2C+signal+detection%2C+and+quality+evaluation.&section=Academy)

## Metadata
- Author: [[langfuse.com]]
- Full Title: Monitoring
- URL: https://langfuse.com/academy/monitoring

## Highlights
- [How monitoring fits into the loop](https://langfuse.com/academy/monitoring/#how-monitoring-fits-into-the-loop)
  [Tracing](https://langfuse.com/academy/tracing) provides a complete record of what your LLM app is doing — every request, every model call, every tool use. Monitoring is how you make sense of that data. It gives you two things: a continuous view of how your system performs over time, and a way to surface the specific traces worth investigating — errors, user behavior patterns, and cases where something went unexpectedly wrong. Together, they shift you from having data to actually understanding your system well enough to improve it. ([View Highlight](https://read.readwise.io/read/01ks3dfvbv9jg5f56p4g9n50mq))
- [Metrics and signals](https://langfuse.com/academy/monitoring/#metrics-and-signals)
  It helps to separate monitoring into two distinct activities, because they answer different questions.
  **Aggregate metrics tracking** tells you whether things are getting better or worse over time. Cost, latency, evaluation scores — these become trends you can watch and reason about. Did that prompt change last Tuesday improve anything? Is quality drifting as usage grows?
  **Signal detection** tells you where to look right now. It surfaces individual traces that are worth investigating — an error, a cluster of retries, a user abandoning mid-conversation. The signal is only useful because it's attached to the specific trace that triggered it. That trace is your starting point for understanding what went wrong. ([View Highlight](https://read.readwise.io/read/01ks3dg0a6gb09pkepzs8fjqkw))
- [Where metrics and signals come from](https://langfuse.com/academy/monitoring/#where-metrics-and-signals-come-from)
  Both aggregate metrics and signal detection depend on fields attached to observations. A lot of what you need is already there once you instrument properly: latency, token-derived cost, model and route metadata, tool outcomes, and errors typically flow from your client and provider APIs without extra wiring.
  Beyond the built-in fields, you add evaluation — user feedback (explicit ratings or implicit signals like session abandonment), human annotation, and LLM-as-a-judge scores — by annotating traces manually or running automated evaluators. That data feeds into aggregate charts for tracking trends over time, and into signal rules so individual traces surface when something crosses a threshold you care about. ([View Highlight](https://read.readwise.io/read/01ks3dg9yh39swpmbm59gbgwc9))
- [Explicit and implicit user feedback](https://langfuse.com/academy/monitoring/#user-feedback)
  User feedback is one of the richest sources of signal, but it comes in two forms with different tradeoffs.
  **Explicit feedback** is direct: a thumbs up or down, a star rating, a comment left by the user. The signal is unambiguous, but response rates are low and skewed — dissatisfied users respond more often than satisfied ones.
  **Implicit feedback** is derived from behavior: whether a user retried a query, disagreed with the system, copied a response, accepted a suggestion, or abandoned a conversation midway. It requires no user effort and generates high-volume data, but the signals are indirect and need interpretation. These can be surfaced using automated evaluators. ([View Highlight](https://read.readwise.io/read/01ks3dh28g2f3e5g6wrwjm5e8r))
- Both register as scores, so they feed into the same dashboards, trend charts, and signal rules as your other evaluation data. To figure out which feedback signals are worth turning into automated evaluators in the first place, see our deeper dive into [Error analysis](https://langfuse.com/academy/monitoring/error-analysis). ([View Highlight](https://read.readwise.io/read/01ks3dhatpp5s66xp9g9dbd5w5))
- [Where to start](https://langfuse.com/academy/monitoring/#where-to-start)
  Start small and build your monitoring setup from real traces rather than abstract ideas about what might matter.
  1. **Start by looking at your data manually.** Read through traces and notice what kinds of things keep appearing. You can't set up useful monitoring before you know what you're looking for.
  2. **Use [error analysis](https://langfuse.com/academy/monitoring/error-analysis) to surface what's worth tracking.** Error analysis gives you a structured way to find patterns across your traces, the kinds of recurring issues worth turning into automated evaluators you can run continuously.
  3. **Think about how your specific application shows failure.** Application-specific implicit signals — a user disagreeing in a support chat, a correction in a process automation flow — are often more actionable than generic scores, and they surface issues without manual labeling.
  4. **Treat it as an iterative process.** A working monitoring setup isn't something you configure once and leave. Usage patterns shift, models get updated, new failure modes emerge. Keep refining your setup so you can cut through the noise and stay focused on what actually matters. ([View Highlight](https://read.readwise.io/read/01ks3dhjq0z8163qgc6a1znv1h))
