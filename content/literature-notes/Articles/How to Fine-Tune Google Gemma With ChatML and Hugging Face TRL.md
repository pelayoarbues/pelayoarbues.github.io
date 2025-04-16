---
author: [[schmidphilipp1995@gmail.com (Philipp Schmid)]]
title: "How to Fine-Tune Google Gemma With ChatML and Hugging Face TRL"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.philschmid.de/static/favicons/apple-touch-icon.png)

## Metadata
- Author: [[schmidphilipp1995@gmail.com (Philipp Schmid)]]
- Full Title: How to Fine-Tune Google Gemma With ChatML and Hugging Face TRL
- URL: https://www.philschmid.de/fine-tune-google-gemma

## Highlights
- Last week, Google released [Gemma](https://huggingface.co/blog/gemma), a new family of state-of-the-art open LLMs. Gemma comes in two sizes: 7B parameters, for efficient deployment and development on consumer-size GPU and TPU and 2B versions for CPU and on-device applications. Both come in base and instruction-tuned variants. ([View Highlight](https://read.readwise.io/read/01hr0e7vtvq9kxknfc0f0y2r3n))
- After the first week it seemed that Gemma is not very friendly to fine-tune using the [ChatML format](https://github.com/MicrosoftDocs/azure-docs/blob/main/articles/ai-services/openai/includes/chat-markup-language.md#working-with-chat-markup-language-chatml), which is adapted and used by the open soruce community, e.g. OpenHermes or Dolphin. I created this blog post to show you how to fine-tune Gemma using ChatML and Hugging Face TRL. ([View Highlight](https://read.readwise.io/read/01hr0e8868h6qdxqxkt0p2k9k5))
- If you are using a GPU with Ampere architecture (e.g. NVIDIA A10G or RTX 4090/3090) or newer you can use Flash attention. Flash Attention is a an method that reorders the attention computation and leverages classical techniques (tiling, recomputation) to significantly speed it up and reduce memory usage from quadratic to linear in sequence length. The TL;DR; accelerates training up to 3x. Learn more at [FlashAttention](https://github.com/Dao-AILab/flash-attention/tree/main). ([View Highlight](https://read.readwise.io/read/01hr0e9xqns268hw77t8nm2n9f))
