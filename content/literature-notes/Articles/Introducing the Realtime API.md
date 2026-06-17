---
author: "[[openai.com]]"
title: 'Introducing the Realtime API'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://images.ctfassets.net/kftzwdyauwt9/139I6Ga8xl6qTXGPL9lWyc/82838b1ef1a26a4946a27d656de0c806/01_Realtime_API.png?w=1600&h=900&fit=fill)

## Metadata
- Author: [[openai.com]]
- Full Title: Introducing the Realtime API
- URL: https://openai.com/index/introducing-the-realtime-api/

## Highlights
- Today, we're introducing a public beta of the Realtime API, enabling all paid developers to build low-latency, multimodal experiences in their apps. Similar to ChatGPT’s Advanced Voice Mode, the Realtime API supports natural speech-to-speech conversations using the [six preset voices(opens in a new window)](https://platform.openai.com/docs/guides/text-to-speech) already supported in the API. ([View Highlight](https://read.readwise.io/read/01j98ny6a4qne17kqzj8t3ars0))
- We’re also introducing audio input and output in the [Chat Completions API(opens in a new window)](https://platform.openai.com/docs/guides/chat-completions) to support use cases that don’t require the low-latency benefits of the Realtime API. With this update, developers can pass any text or audio inputs into [GPT-4o](https://openai.com/index/hello-gpt-4o/) and have the model respond with their choice of text, audio, or both. ([View Highlight](https://read.readwise.io/read/01j98nycsvqyzjqwckmjw4rrac))
- Previously, to create a similar voice assistant experience, developers had to transcribe audio with an automatic speech recognition model like [Whisper](https://openai.com/index/whisper/), pass the text to a text model for inference or reasoning, and then play the model’s output using a [text-to-speech(opens in a new window)](https://platform.openai.com/docs/guides/text-to-speech) model. This approach often resulted in loss of emotion, emphasis and accents, plus noticeable latency. With the Chat Completions API, developers can handle the entire process with a single API call, though it remains slower than human conversation. The Realtime API improves this by streaming audio inputs and outputs directly, enabling more natural conversational experiences. It can also handle interruptions automatically, much like Advanced Voice Mode in ChatGPT. ([View Highlight](https://read.readwise.io/read/01j98nygrej4c9syvc193pchjq))
- Powering customer support agents, language learning assistants, and more
  As part of our iterative deployment strategy, we’ve been testing the Realtime API with a handful of partners to gather feedback while we build. A couple of promising early use cases include: ([View Highlight](https://read.readwise.io/read/01j98p0ec7czkyxtnfstythfh5))
- The Realtime API uses both text tokens and audio tokens. Text input tokens are priced at $5 per 1M and $20 per 1M output tokens. Audio input is priced at $100 per 1M tokens and output is $200 per 1M tokens. This equates to approximately $0.06 per minute of audio input and $0.24 per minute of audio output. Audio in the Chat Completions API will be the same price. ([View Highlight](https://read.readwise.io/read/01j98p1f2h1wd8seka46697xed))
- The Realtime API uses multiple layers of safety protections to mitigate the risk of API abuse, including automated monitoring and human review of flagged model inputs and outputs. The Realtime API is built on the same version of GPT-4o that powers Advanced Voice Mode in ChatGPT, which we carefully assessed using both automated and human evaluations, including evaluations according to our [Preparedness Framework](https://openai.com/preparedness), detailed in the [GPT-4o System Card](https://openai.com/index/gpt-4o-system-card/#observed-safety-challenges-evaluations-and-mitigations). The Realtime API also leverages the same audio safety infrastructure we built for Advanced Voice Mode, which our testing shows has helped to reduce the potential for harm. ([View Highlight](https://read.readwise.io/read/01j98p1whj6k582tezmsryt468))
- It is against our [usage policies](https://openai.com/policies/usage-policies/) to repurpose or distribute output from our services to spam, mislead, or otherwise harm others – and we actively monitor for potential abuse. Our policies also require developers to make it clear to their users that they are interacting with AI, unless it's obvious from the context. ([View Highlight](https://read.readwise.io/read/01j98p276j27kwbghgx8b9p50m))
- • **More modalities:** To start, the Realtime API will support voice, and we plan to add additional modalities like vision and video over time.
  • **Increased rate limits**: Today the API is rate limited to approximately 100 simultaneous sessions for Tier 5 developers, with lower limits for Tiers 1-4. We will increase these limits over time to support larger deployments.
  • **Official SDK support**: We will integrate support for Realtime API into the OpenAI Python and Node.js SDKs.
  • **Prompt Caching:** We will add support for [Prompt Caching(opens in a new window)](http://platform.openai.com/docs/guides/prompt-caching) so previous conversation turns can be reprocessed at a discount.
  • **Expanded model support**: The Realtime API will also support GPT-4o mini in upcoming versions of that model. ([View Highlight](https://read.readwise.io/read/01j98p2ep6tex7f25hj3be5k78))
