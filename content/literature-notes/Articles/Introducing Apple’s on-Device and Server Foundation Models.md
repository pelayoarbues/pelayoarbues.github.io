---
author: [[Simon Willison]]
title: 'Introducing Apple’s on-Device and Server Foundation Models'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Introducing Apple’s on-Device and Server Foundation Models
- URL: https://simonwillison.net/2024/Jun/11/apples-on-device-and-server-foundation-models/#atom-everything

## Highlights
- Their on-device model is a 3B model that "outperforms larger models including Phi-3-mini, Mistral-7B, and Gemma-7B", while the larger cloud model is comparable to GPT-3.5. ([View Highlight](https://read.readwise.io/read/01j04ev9a3g59xtjqnt7wb72kp))
- The most interesting thing here is the way they apply fine-tuning to the local model to specialize it for different tasks. Apple call these "adapters", and they use LoRA for this - a technique first published [in 2021](https://arxiv.org/abs/2106.09685). This lets them run multiple on-device models based on a shared foundation, specializing in tasks such as summarization and proof-reading. ([View Highlight](https://read.readwise.io/read/01j04etgk18xzvwvxa7xwfm47k))
- The next step we took is compressing the model. We leveraged state-of-the-art quantization techniques to take a 16-bit per parameter model down to an average of less than 4 bits per parameter to fit on Apple Intelligence-supported devices, all while maintaining model quality. ([View Highlight](https://read.readwise.io/read/01j04ev01ft1kf448bv9vcztag))
