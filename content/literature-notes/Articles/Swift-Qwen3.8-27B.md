---
author: "[[UkisAI]]"
title: 'Swift-Qwen3.8-27B'
date: "2026-09-13"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/7549c1f52bc4442a8fb3c244537946c6.jpg)

## Metadata
- Author: [[UkisAI]]
- Full Title: Swift-Qwen3.8-27B
- URL: https://ukisai.com/news/introducing-swift

## Highlights
- Swift-Qwen3.8-27B
  Swift-Qwen3.8-27B is UkisAI’s reasoning-efficient derivative of Qwen3.8-27B, using up to 58% fewer thinking tokens while maintaining near-identical performance on several tasks. ([View Highlight](https://read.readwise.io/read/01m2d29p1vqc0p6gnqfx47e1yn))
- Training approach
  Reasoning models often repeat checks or revisit answers they have already found. Swift reduces this extra reasoning.
  We identified tokens associated with overthinking in Qwen’s reasoning and penalized their use during training. Swift produces shorter reasoning traces, and we observe fewer overthinking errors in our testing.
  Swift includes a transfer component derived from [BottleCap AI’s ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B). The resulting model uses the standard Qwen3.8 interface and retains text, image, and video support. ([View Highlight](https://read.readwise.io/read/01m2d29rwv8ffepxrbry1wv8tw))
- Reasoning effort
  Qwen3.8 lets users set `reasoning_effort`. We tested medium and low as well as xhigh; Swift uses fewer thinking tokens at all three settings. ([View Highlight](https://read.readwise.io/read/01m2d2a4m9z5h3tm2v5bmhybym))
- Quantized models
  Swift is intended for quantized deployment. We tested mixed-precision W4A16 and AWQ INT4 weights and found that token savings carry over. ([View Highlight](https://read.readwise.io/read/01m2d2ae0t0bt4fjggj3f3avys))
- On AIME, Swift matches or improves accuracy and reduces output-cap failures by 31–33%. GPQA accuracy stays close to the quantized base; IFBench accuracy is slightly lower. ([View Highlight](https://read.readwise.io/read/01m2d2ah7992hjfdxz508v3qna))
