---
author: "[[Simon Willison's Weblog]]"
title: 'DeepSeek V4 - Almost on the Frontier, a Fraction of the Price'
date: "2026-04-25"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: DeepSeek V4 - Almost on the Frontier, a Fraction of the Price
- URL: https://simonwillison.net/2026/Apr/24/deepseek-v4/#atom-everything

## Highlights
- Chinese AI lab DeepSeek’s last model release was V3.2 (and V3.2 Speciale) [last December](https://simonwillison.net/2025/Dec/1/deepseek-v32/). They just dropped the first of their hotly anticipated V4 series in the shape of two preview models, [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash). ([View Highlight](https://read.readwise.io/read/01kq20hxdbym0ehnrp9n438h8h))
- Both models are 1 million token context Mixture of Experts. Pro is 1.6T total parameters, 49B active. Flash is 284B total, 13B active. They’re using the standard MIT license. ([View Highlight](https://read.readwise.io/read/01kq20j434ftw0whtjh1qbqa0a))
- I think this makes DeepSeek-V4-Pro the new largest open weights model. It’s larger than Kimi K2.6 (1.1T) and GLM-5.1 (754B) and more than twice the size of DeepSeek V3.2 (685B). ([View Highlight](https://read.readwise.io/read/01kq20jc61tkh8bdabd4tq72v9))
- Pro is 865GB on Hugging Face, Flash is 160GB. I’m hoping that a lightly quantized Flash will run on my 128GB M5 MacBook Pro. It’s *possible* the Pro model may run on it if I can stream just the necessary active experts from disk. ([View Highlight](https://read.readwise.io/read/01kq20jhkkaqkpjh31vr6mtnh5))
- So the pelicans are pretty good, but what’s really notable here is the *cost*. DeepSeek V4 is a very, very inexpensive model. ([View Highlight](https://read.readwise.io/read/01kq20k1wrp02n34pr1v19zmpx))
- Here’s [DeepSeek’s pricing page](https://api-docs.deepseek.com/quick_start/pricing). They’re charging $0.14/million tokens input and $0.28/million tokens output for Flash, and $1.74/million input and $3.48/million output for Pro. ([View Highlight](https://read.readwise.io/read/01kq20k51fw9mj6rxhydhb6n7r))
- DeepSeek-V4-Flash is the cheapest of the small models, beating even OpenAI’s GPT-5.4 Nano. DeepSeek-V4-Pro is the cheapest of the larger frontier models. ([View Highlight](https://read.readwise.io/read/01kq20k9bjcknw0ghj059ds60f))
- In the scenario of 1M-token context, even DeepSeek-V4-Pro, which has a larger number of activated parameters, attains only 27% of the single-token FLOPs (measured in equivalent FP8 FLOPs) and 10% of the KV cache size relative to DeepSeek-V3.2. Furthermore, DeepSeek-V4-Flash, with its smaller number of activated parameters, pushes efficiency even further: in the 1M-token context setting, it achieves only 10% of the single-token FLOPs and 7% of the KV cache size compared with DeepSeek-V3.2. ([View Highlight](https://read.readwise.io/read/01kq20ke0bgpdrm49cbzcbwca6))
- I’m keeping an eye on [huggingface.co/unsloth/models](https://huggingface.co/unsloth/models) as I expect the Unsloth team will have a set of quantized versions out pretty soon. It’s going to be very interesting to see how well that Flash model runs on my own machine. ([View Highlight](https://read.readwise.io/read/01kq20kzbby8qsw4x7enhcdnr3))
