---
author: "[[Min Choi]]"
title: 'Gemini Decisions API: Fast, Calibrated Multimodal Decisions'
date: "2026-11-11"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini__decisions__blog-header_2784x1566.width-1300.png)

## Metadata
- Author: [[Min Choi]]
- Full Title: Gemini Decisions API: Fast, Calibrated Multimodal Decisions
- URL: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/

## Highlights
- Today, we’re introducing the Gemini Decisions API, a new endpoint for fast, closed-set decisions powered by our new Gemini Decision 1 model (gemini-decision-1), available through the [Gemini API](https://aistudio.google.com/docs/decisions-api) in [Google AI Studio](https://aistudio.google.com/apps/bundled/gemini-decisions-api-playground?fullscreenApplet=true).
  The Decisions API gives you purpose-built primitives for bounded choices like tool selection, policy checks, model routing, and context grading. You can pass one multimodal input across text, images, audio, video, and PDFs (up to 256K tokens) along with up to 1,000 independent questions. Rather than generating answer text token by token, Gemini Decision 1 scores your candidate options in a single forward pass, returning probabilities and confidence scores in 150-250 ms end-to-end latency at $0.10 per 1M input tokens with zero output tokens billed. ([View Highlight](https://read.readwise.io/read/01m764n7f1ak0r2p6bx2dt2txk))
- Gemini Decision 1 scores options without token-by-token decoding, keeping median latency 50-100 ms of model compute (150-250 ms end-to-end), across multimodal inputs and contexts up to 16K tokens, remaining nearly flat from 1 to 100 questions per request. With zero output tokens billed, Gemini Decision 1 with the Decisions API is nearly 5x cheaper across the shared benchmark suite than Gemini 3.5 Flash-Lite with the Interactions API. ([View Highlight](https://read.readwise.io/read/01m764nwe96y7qgfm00czqfxm1))
- Native multimodal evaluation across three decision types in one pass
  Built on Gemini’s native multimodal architecture, Gemini Decision 1 can process text, images, audio, video, and PDFs directly in a single forward pass. You can combine modalities in one shared input, such as pairing a call recording with account metadata or a scanned PDF claim with damage photos, and tune resolution on image and video inputs to control visual detail and token cost.
  You can evaluate multiple questions against that shared input in a single request, mixing yes/no checks, multiple choice, and rubric scores. Every answer includes a confidence score (from 0 to 1) so your code can route ambiguous cases to a fallback or human reviewer:
  • **noul (Yes/No):** Estimates the probability that a yes/no condition holds, with optional true and false description criteria.
  • **choice (Multiple Choice):** Selects from 2 to 255 choices, returning the winner and normalized probabilities for every candidate.
  • **score (Ordered Rubric):** Grades inputs across an ordered rubric (starting at 0), returning a continuous weighted score and per-level probabilities. ([View Highlight](https://read.readwise.io/read/01m764p3w5d775mfasfw1qhcr7))
- How teams are building with the Decisions API
  Teams across Google are already using the Decisions API as a low-latency control plane, shipping features simply by defining options rather than training custom classifiers or waiting on generative calls:
  • **Dynamic model routing in Gemini Notebook:** Gemini Notebook uses the Decisions API as a real-time router to instantly direct incoming queries to the optimal model tier and thinking level for each request. The Decisions API classifies intent in milliseconds to serve everyday queries with up to 40% lower latency while reserving deep reasoning models for complex tasks.
  • **Rapid design iteration in Stitch:** The new [rapid canvas experiment in Stitch](https://stitch.withgoogle.com/rapid) uses the Decisions API to generate playable wireframes of a product flow in seconds and to apply edits made by voice or tap almost instantly. When the flow feels right, one click hands the screens off to the full Stitch experience for deeper design polish.
  • **Emoji selection in CC:** CC from Google Labs uses the Decisions API to pick the right emoji reaction from a palette of more than 200 options in a fraction of a second, so reactions appear instantly without adding latency.
  • **Safety layer for MCP tools in Search**: Google Search uses the Decision API to detect adversarial behavior and content against adversarial evals with high efficacy within the latency envelope. ([View Highlight](https://read.readwise.io/read/01m764pkxc872tk91aah0fbh6z))
- Start building today
  Gemini Decision 1 is priced at $0.10 per 1M input tokens and $0 for output tokens, with an API no-cost tier you can use in [Google AI Studio](https://aistudio.google.com/apps/bundled/gemini-decisions-api-playground?fullscreenApplet=true) for prototyping. Your shared `input` is billed once per request no matter how many questions you evaluate (each question adds only its own instruction and criteria tokens). There are no output-token charges, variable thinking-token bills, or separate audio transcription and OCR costs. ([View Highlight](https://read.readwise.io/read/01m764q89a9ej3y6z2kpz8mxcv))
