---
author: "[[OpenAI]]"
title: 'Introducing GPT-Live | OpenAI'
date: "2026-07-13"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://images.ctfassets.net/kftzwdyauwt9/54glGpDpS58mKdx6Y3GobW/6ea5121851a36b8cf0505a96be2de994/bidi-art-card_16_9__1_.png?w=1600&h=900&fit=fill)

## Metadata
- Author: [[OpenAI]]
- Full Title: Introducing GPT-Live | OpenAI
- URL: https://openai.com/index/introducing-gpt-live/?utm_source=substack&utm_medium=email

## Highlights
- GPT‑Live is built on a full-duplex architecture, meaning it can listen and speak at the same time. During conversations, GPT‑Live can show it’s paying attention with phrases like “mhmm” or “yeah”, engage in quick back-and-forth, or just stay quiet when you need a moment to think. The result is a voice experience that is refreshingly easy to talk to.
  GPT‑Live is also our smartest voice model yet. For questions that require web search, deeper reasoning, or more complex work, it delegates to our latest frontier model behind the scenes and brings the result back into the conversation when it’s ready. While it works, GPT‑Live can keep talking with you and maintain the flow of conversation. At launch, GPT‑Live will use GPT‑5.5 in the background. As we release new frontier models, we’ll continuously update the model used by GPT‑Live.
  These advances power a new ChatGPT Voice experience that is more intelligent and natural to use. Over time, we believe this research will also unlock the ability to use voice for increasingly complex, longer-running, and more agentic work. ([View Highlight](https://read.readwise.io/read/01kxed32qt6ghh5nc0k1tnvhfy))
- Previous approaches
  Older generations of voice AI systems brought us closer to that vision, but with important tradeoffs.
  Cascaded voice systems
  Cascaded voice systems rely on a series of models acting one after another to process each turn. The [original ChatGPT Voice](https://openai.com/index/chatgpt-can-now-see-hear-and-speak/) chained three models together: a speech-to-text model to transcribe your speech, a large language model to produce a response, and a text-to-speech model to convert it back into speech. This approach enabled us to talk to frontier AI models for the first time, but the complexity came at a cost: information could be lost across models, and responses were slow and stilted. ([View Highlight](https://read.readwise.io/read/01kxed3cvzs4vd095kjydhxw67))
- Turn-based voice models
  Turn-based voice models like [ChatGPT Advanced Voice Mode](https://openai.com/index/hello-gpt-4o/) processed and generated audio within a single model, reducing latency and making conversations smoother — but they still operated through discrete turns. The model had to wait for the user to stop speaking before responding, resulting in rigid back-and-forth. In addition, because turn detection is based on silence, even a brief pause or background noise could be mistaken for the end of turn — causing the model to interrupt at unnatural times. ([View Highlight](https://read.readwise.io/read/01kxed4233n4sdg497kc9yhm9p))
- Our new approach
  **GPT‑Live** addresses these limitations through two architectural changes.
  Continuous interaction
  First, we built GPT‑Live for continuous interaction using a full-duplex architecture**.** Instead of processing a sequence of separate messages, GPT‑Live continuously processes input while generating output. The model can therefore make interaction decisions many times per second: whether to speak, continue listening, pause, interrupt, or invoke a tool.
  This allows the model to engage in more natural back-and-forth, maintain a better sense of time, and even perform live translation. ([View Highlight](https://read.readwise.io/read/01kxed49z0yrrb3har266pph57))
- Delegation for deeper work
  Second, we decoupled GPT‑Live — which handles continuous interaction — from deeper work. When a question requires search, reasoning, or more agentic capabilities, GPT‑Live can delegate the task to another model like GPT‑5.5. This allows it to keep the conversation going, even as it handles multiple tasks in the background.
  This architectural change also allows GPT‑Live to continuously use the latest models and agents, combining frontier intelligence with natural interaction. ([View Highlight](https://read.readwise.io/read/01kxed4q91c7b8h6rm5ztp0nxn))
