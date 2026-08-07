---
author: "[[xAI]]"
title: 'Introducing Grok Voice Think Fast 2.0'
date: "2026-08-07"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://x.ai/images/news/grok-voice-think-fast-2.webp)

## Metadata
- Author: [[xAI]]
- Full Title: Introducing Grok Voice Think Fast 2.0
- URL: https://x.ai/news/grok-voice-think-fast-2?utm_source=substack&utm_medium=email

## Highlights
- Today, we're announcing Grok Voice Think Fast 2.0, our next-generation voice model with improved intelligence, transcription accuracy, and conversational capabilities. ([View Highlight](https://read.readwise.io/read/01kzbc3mdcjjb3x7fxxscebgbd))
- Grok Voice Think Fast 2.0 is our most intelligent voice model yet, building on its predecessor with meaningful gains in speech reasoning, conversational ability, and tool use reliability.
  Speech-to-speech benchmark comparison between Grok Voice Think Fast 2.0 and competing models, per Artificial Analysis.
  Benchmark
  Grok Voice Think Fast 2.0 (this release)
  Grok Voice Think Fast 1.0
  GPT-Realtime-2.1 (High)
  Gemini 3.1 Flash (High)
  Overall
  AA Speech-to-Speech Quality Index
  82.9%
  75.7%
  79.1%
  69.5%
  Speech Reasoning
  Big Bench Audio
  97.2%
  97.1%
  96.0%
  96.6%
  Conversational Dynamics
  Full Duplex Bench
  95.1%
  77.8%
  95.7%
  74.3%
  Agentic Performance
  τ-voice Bench
  56.5%
  52.1%
  45.7%
  37.7%
  Speed
  Time to First Audio
  0.70s
  1.25s
  —
  2.98s ([View Highlight](https://read.readwise.io/read/01kzbc3tk7t75g3mm0wryjq01y))
- Grok Voice Think Fast 2.0 outperforms even dedicated, state of the art transcription models when it comes to accuracy. In our evaluation across thousands of short phrases in 24 different languages, we've demonstrated a 1.5–2.0× improvement relative to Deepgram Nova 3 and ElevenLabs Scribe v2, and a 1.4× improvement relative to Grok Voice Think Fast 1.0.
  The gap between Grok Voice Think Fast 2.0 and dedicated speech-to-text models widens to ~10× in noisy settings. We've focused on making Grok Voice Think Fast 2.0 perform exceptionally well in real-world settings, with substantial background noise and telephony compression. ([View Highlight](https://read.readwise.io/read/01kzbc4rg3zcjmvx3qz158yk8h))
- [Reasoning Efficiency](https://x.ai/news/grok-voice-think-fast-2/#reasoning-efficiency)
  Grok Voice Think Fast models have a unique characteristic: they reason through queries while speaking. Reasoning in parallel with speech makes the model substantially smarter than other speech-to-speech models with no impact on latency.
  Grok Voice Think Fast 2.0 has been trained to be very efficient with reasoning tokens relative to its predecessor. In production settings, this means that tool calls are snappier, usually executing before the end of the agent's first sentence. ([View Highlight](https://read.readwise.io/read/01kzbc4w8nk6d8v95a5gb5xc1p))
- [Conversational Capability](https://x.ai/news/grok-voice-think-fast-2/#conversational-capability)
  We've trained Grok Voice Think Fast 2.0 to be a better conversationalist. By using extensive reinforcement learning to push the model towards patterns we see in real human conversation, we've found that broadly the model speaks in shorter sentences, asks one question at a time, and avoids fluff. From the user's perspective, conversations with the agent are simple and fluid, even though the model is often guiding the conversation through complex workflows and thinking several steps ahead behind the scenes. ([View Highlight](https://read.readwise.io/read/01kzbc5136e16azpvtjsbk0gw2))
