---
author: "[[langfuse.com]]"
title: 'Error analysis'
date: "2026-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/og)

## Metadata
- Author: [[langfuse.com]]
- Full Title: Error analysis
- URL: https://langfuse.com/academy/monitoring/error-analysis

## Highlights
- [Error analysis](https://langfuse.com/academy/monitoring/error-analysis/#error-analysis)
  LLM app failures are usually domain-specific. A RAG system retrieves the wrong section of a document, a support bot misses a follow-up, an agent picks the wrong tool. The tone doesn't match what you expect in your specific context. While evaluator libraries can be a good starting point, you will find the deep insights into failure modes by reading actual traces of your system. ([View Highlight](https://read.readwise.io/read/01ks3dj125r6njjjrxyejwq6p8))
- [What error analysis is](https://langfuse.com/academy/monitoring/error-analysis/#what-error-analysis-is)
  Error analysis is a structured way to do that reading. The mechanic is borrowed from qualitative research: you read first, name what's broken in your own words, and let failure categories emerge from those notes rather than checking each trace against a predefined list. The output is a failure taxonomy that fits your application, paired with failure rates that tell you which categories matter most. ([View Highlight](https://read.readwise.io/read/01ks3dja1bd90pcpez94rafvcq))
- The process is five steps:
  1. **Gather traces.** Pull a representative sample from production traffic, a dataset, or experiment outputs.
  2. **Open coding.** Read each trace and write a free-text note about the first thing that went wrong. No predefined categories yet — let the failures define themselves.
  3. **Cluster.** Group similar observations into named failure categories. An LLM can draft a taxonomy from your notes; you refine the names and split anything that conflates two root causes.
  4. **Label and measure.** Tag every trace in the sample against the taxonomy and compute failure rates per category — qualitative reading turns into a chart.
  5. **Decide and act.** For each category, choose between a prompt or code fix, an evaluator that catches it on future traces, or monitoring for now.
  You walk away with a prioritized list of decisions tied to your actual data: what to change today, what to measure going forward, and what to keep watching. ([View Highlight](https://read.readwise.io/read/01ks3djw1qy4y7ga6swtetg6nf))
- [When to run it](https://langfuse.com/academy/monitoring/error-analysis/#when-to-run-it)
  • **Before designing evaluators** - so your traces define what's worth measuring, not generic criteria like "helpfulness."
  • **After a prompt rewrite, model swap, or new feature** - failure distributions shift, and new categories show up.
  • **When [monitoring](https://langfuse.com/academy/monitoring) surfaces a pattern** - a drop in scores, recurring complaints, an unusual cluster of low-confidence responses.
  • **While iterating locally** - a small dataset of representative inputs is enough; you don't need production traffic to start.
  • **As a recurring practice** - the first taxonomy is never the final one. Re-run each round as your app evolves. ([View Highlight](https://read.readwise.io/read/01ks3dk12vjb0pe493ga6g0wz6))
- [What you get out of it](https://langfuse.com/academy/monitoring/error-analysis/#what-you-get-out-of-it)
  **A taxonomy specific to your app.** Generic metrics rarely match what's actually failing. Categories you find by reading your own traces do.
  **A split between fix-once bugs and recurring patterns.** Some failures are obvious prompt issues you fix once and move on. Others need an evaluator to catch the next time they happen. Error analysis sorts each into the right bucket, so you don't build evaluators for problems a prompt change would have solved.
  **A measurable baseline.** Once traces are labeled, failure rates per category turn vague intuition ("the bot seems worse since the last prompt update") into something you can chart and watch shift as you ship changes. ([View Highlight](https://read.readwise.io/read/01ks3dk99r3bztzp91nsjvqtzc))
