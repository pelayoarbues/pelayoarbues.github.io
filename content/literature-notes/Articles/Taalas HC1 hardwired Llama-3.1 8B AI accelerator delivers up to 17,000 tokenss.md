---
author: "[[Jean-Luc Aufranc]]"
title: 'Taalas HC1 hardwired Llama-3.1 8B AI accelerator delivers up to 17,000 tokens/s'
date: "2026-02-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/Taalas-HC1-hardwired-AI-accelerator.jpg)

## Metadata
- Author: [[Jean-Luc Aufranc]]
- Full Title: Taalas HC1 hardwired Llama-3.1 8B AI accelerator delivers up to 17,000 tokens/s
- URL: https://www.cnx-software.com/2026/02/22/taalas-hc1-hardwired-llama-3-1-8b-ai-accelerator-delivers-up-to-17000-tokens-s/

## Highlights
- The Taalas HC1 is about 10x faster than the Cerebras chip, costs 20x less to build, and consumes 10x less power. The main downside is that it only works with the model hardwired into the hardware, currently Llama-3.1 8B, although we’re told it “retains flexibility through configurable context window size and support for fine-tuning via low-rank adapters (LoRAs)”.
  [](https://www.cnx-software.com/wp-content/uploads/2026/02/Taalas-HC1-hard-wired-AI-accelerator-vs-NVIDIA-H200.webp) ([View Highlight](https://read.readwise.io/read/01kjk4yczx1qwgh49ftgbej9fz))
- Hardware accelerators usually come with memory on one side and compute on the other. Both operate at different speeds, and the memory bandwidth is usually the bottleneck for Large Language Models. Taalas technology unifies storage and compute on a single chip, at DRAM-level density, to massively increase the performance and reduce power consumption. ([View Highlight](https://read.readwise.io/read/01kjk4y9jfax3bjmbqb0mqgbvx))
- Ultra-fast inference can be useful on servers where multiple users access accelerators, and in robots using voice interaction. I noticed the latter when reviewing the [SunFounder Fusion HAT+](https://www.cnx-software.com/2026/02/01/fusion-hat-review-adding-ai-voice-and-servo-motor-control-to-raspberry-pi-5-for-robotics-smart-home-and-education/) where the prompt was sent to an LLM service (Gemini AI), which replies at a specific tokens/s rate before the text-to-speech engine takes over. It creates delays, and the conversation does not feel natural due to the lag. When I first started writing this post, I assumed the Taalas-HC1 could be used for robotics, but considering it’s designed for 2.5kW servers, we’re not quite there yet… The HC1 chip is manufactured using TSMC’s 6nm process, measures| 815mm2, and features 53 billion transistors. ([View Highlight](https://read.readwise.io/read/01kjk4y6hw86msm42fdbj3xhgw))
- The company set up an [online chatbot demo](https://chatjimmy.ai/), so anybody can try it, and it’s indeed super fast. It reported 19.997 tokens/s when I asked “what is 2+2?”, but more typical questions like “Why is the sky blue?”, or “what do you know about CNX Software?” were processed at about 15K/16K. I tried to abuse it a little bit by asking it to write a 100-page book about the meaning of life, but instead, I got an outline if a 14-chapter book, generated in 0.064s at 15,651 tokens/s. Note that it’s an 8 billion parameter model, so answers are not always correct.
  The company is now working on a second mid-sized reasoning LLM, still based on the HC1 silicon, that will launch in Q2. Further down the road, the second-generation silicon platform (HC2) will enable higher density and even faster execution, and deployments should start by the end of the year. More details can be found in [the announcement](https://taalas.com/the-path-to-ubiquitous-ai/). ([View Highlight](https://read.readwise.io/read/01kjk4ynmb1s9gnsj4qm4abpv5))
