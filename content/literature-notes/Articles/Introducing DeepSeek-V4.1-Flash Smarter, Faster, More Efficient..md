---
author: "[[deepseek.com]]"
title: 'Introducing DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient.'
date: "2026-09-10"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.deepseek.com/images/blog/deepseek-v4-1-flash/cover.webp)

## Metadata
- Author: [[deepseek.com]]
- Full Title: Introducing DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient.
- URL: https://www.deepseek.com/en/news/deepseek-v4-1-flash/

## Highlights
- [](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf)
  • Introducing the smallest model in our new architecture family, with native visual understanding.
  • Designed for greater capability, faster inference, higher throughput, and scaling to larger models.
  ![DeepSeek-V4.1-Flash agentic benchmark comparison](https://www.deepseek.com/images/blog/deepseek-v4-1-flash/agentic-benchmark.png) ([View Highlight](https://read.readwise.io/read/01m263dm6tejzantwvhe8cs584))
- Smaller KV cache. Bigger savings.
  Compared with the previous generation, V4.1-Flash’s KV cache needs just:
  • 1/4 the HBM
  • 1/8 the SSD storage
  Cache-hit charges often account for a large share of agent costs. Compressing the cache cuts those costs significantly.
  ![DeepSeek KV cache size across model generations](https://www.deepseek.com/images/blog/deepseek-v4-1-flash/kv-cache.png) ([View Highlight](https://read.readwise.io/read/01m263cv6wsk9gcw4h7nmjmcyx))
- V4.1-Flash is now live on the DeepSeek API with native multimodal support.
  Set your model to deepseek-flash.
  • V4-Flash & V4-Flash-Vision-Exp are retired. For compatibility, deepseek-v4-flash and deepseek-v4-flash-vision-exp temporarily route to V4.1-Flash.
  • Tests by multiple parties put V4.1-Flash ahead of V4-Pro on performance, cost, speed & total runtime. We’re phasing out V4-Pro.
  • Starting at 04:00 UTC on Sept 14, 2026, all deepseek-v4-pro requests will route to V4.1-Flash at V4.1-Flash rates. This will continue until V4.1-Pro launches.
  Official partners WorkBuddy (including CodeBuddy) & OpenCode now fully support V4.1-Flash. Try it today! ([View Highlight](https://read.readwise.io/read/01m263czwpbkpx0spmh9mn604q))
- More efficient architecture. Lower API prices.
  V4.1-Flash lets us serve more users at a lower cost. We’re passing the savings on to you.
  • Peak/off-peak pricing continues to balance demand.
  • Off-peak rates are 50% of peak rates. Schedule flexible workloads off-peak to save.
  • New pricing takes effect at 04:00 UTC on Sept 10, 2026.
  ![DeepSeek-V4.1-Flash API pricing](https://www.deepseek.com/images/blog/deepseek-v4-1-flash/pricing-en.jpg) ([View Highlight](https://read.readwise.io/read/01m263d9kg1rs0281y4k99573g))
