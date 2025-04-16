---
author: [[huggingface.co]]
title: 'Using LoRA for Efficient Stable Diffusion Fine-Tuning'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/lora/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Using LoRA for Efficient Stable Diffusion Fine-Tuning
- URL: https://huggingface.co/blog/lora

## Highlights
- LoRA proposes to freeze pre-trained model weights and inject trainable layers (*rank-decomposition matrices*) in each transformer block. This greatly reduces the number of trainable parameters and GPU memory requirements since gradients don't need to be computed for most model weights. ([View Highlight](https://read.readwise.io/read/01hb96d6n6epaz6qbw1n11kc36))
- The researchers found that by focusing on the Transformer attention blocks of large-language models, fine-tuning quality with LoRA was on par with full model fine-tuning while being much faster and requiring less compute. ([View Highlight](https://read.readwise.io/read/01hb96ddq1r8v6w6k8sm9643ra))
- In the case of Stable Diffusion fine-tuning, LoRA can be applied to the cross-attention layers that relate the image representations with the prompts that describe them. ([View Highlight](https://read.readwise.io/read/01hb96e1pypbjt13tsncn6xvyh))
