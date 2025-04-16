---
author: "[[Simon Willison]]"
title: 'Gemini 1.5 Flash-8b Is Now Production Ready'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Gemini 1.5 Flash-8b Is Now Production Ready
- URL: https://simonwillison.net/2024/Oct/3/gemini-15-flash-8b/#atom-everything

## Highlights
- Gemini 1.5 Flash-8B is "a smaller and faster variant of 1.5 Flash" - and is now released to production, at half the price of the 1.5 Flash model.
  It's really, really cheap:
  • $0.0375 per 1 million tokens on prompts <128K
  • $0.15 per 1 million tokens on prompts >128K
  • $0.01 per 1 million tokens on cached prompts <128K
  I believe images are still charged at a flat rate of 258 tokens, which I think means a single non-cached image with Flash should cost 0.00097 cents - a number so tiny I'm doubting if I got the calculation right.
  OpenAI's cheapest model remains GPT-4o mini, at $0.150/1M input - though that drops to half of that for reused prompt prefixes thanks to their new prompt caching feature (and by half again if you use batches - Gemini also offer half-off for batched requests).
  Anthropic's cheapest model is still Claude 3 Haiku at $0.25/M, though that drops to $0.03/M for cached tokens (if you configure them correctly). ([View Highlight](https://read.readwise.io/read/01j9ma72m1gvdst27sk5aj3eqp))
