---
author: "[[Unsloth - Unslow finetuning for AI & LLMs]]"
title: 'Llama-3 8B 1xL4 24GB -63% VRAM'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://unsloth.ai/cgi/image/llama3_landscape_xFJDqXxCsQbSm5H9ebcxV.png?width=16&quality=100&format=raw)

## Metadata
- Author: [[Unsloth - Unslow finetuning for AI & LLMs]]
- Full Title: Llama-3 8B 1xL4 24GB -63% VRAM
- URL: https://unsloth.ai/blog/llama3

## Highlights
- By using Unsloth’s latest long context support, Llama-3 70b can now easily fit on a 48GB GPU card, allowing you to finetune on ~7K context lengths, whilst HF + FA2 might allow you to finetune lengths of 2 or even OOM.
  On a A100 80GB SXM machine, Unsloth allows 6x longer context lengths with only +1.9% overhead, allowing you finetune on 48K sequence lengths vs 7.5K lengths. We can see below the VRAM vs context length data we experimentally gathered, showing the stark advantage of using Unsloth vs HF + FA2 for long context finetuning.In all our experiments, we used QLoRA with a rank of 32 and applied LoRA adapters to all linear linears (q, k, v, o, gate, up, down). We used a batch size of 1, and repeated data to make it fit to the maximum context window. ([View Highlight](https://read.readwise.io/read/01hwct2dk5yw27dxx9w819nn30))
- Essentially if one uses these untrained tokens (like using the instruct template for the base model), then gradients will be NaN. As first noticed by [Geronimo](https://twitter.com/Geronimo_AI), one has to simply set these untrained tokens to be the mean vector.
  However, from our investigations, you cannot simply set the mean, since it’s biased. You must first set these untrained tokens to 0 (bfloat16 will cause these vectors to not be 0 but rather 1e-23), then sum them, and then divide them by the number of trained tokens (n total tokens minus n untrained). We found 287 untrained tokens in total.
  Unsloth’s new release now automatically fixes this for you during finetuning. ([View Highlight](https://read.readwise.io/read/01hwct2ye4ax5ke6e7vdkfsdw6))
