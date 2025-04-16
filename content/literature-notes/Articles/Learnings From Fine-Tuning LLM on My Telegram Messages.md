---
author: "[[asmirnov.xyz]]"
title: 'Learnings From Fine-Tuning LLM on My Telegram Messages'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[asmirnov.xyz]]
- Full Title: Learnings From Fine-Tuning LLM on My Telegram Messages
- URL: https://asmirnov.xyz/doppelganger

## Highlights
- According to the [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard), one of the top smaller models (≤13B parameters) is [Mistral 7B](https://huggingface.co/mistralai/Mistral-7B-v0.1). It even outperforms [Llama 2 13B](https://huggingface.co/meta-llama/Llama-2-13b-hf). Now, the question is whether [LoRA](https://arxiv.org/abs/2106.09685) is sufficient or if full fine-tuning is necessary. Various comparisons [[1]](https://asmirnov.xyz/doppelganger#fn1) [[2]](https://asmirnov.xyz/doppelganger#fn2) suggests that LoRA is a bit worse than full fine-tuning but still fine most of the time. ([View Highlight](https://read.readwise.io/read/01hgbg9w1hwm885w05sw2xa3rk))
- I will test models by having chats in two ways. First, the model will pretend to be me and I will be chatting with myself from the perspective of my different friends. Then, I’ll chat as myself while the model acts as my friends. My conversation starter will always be the same 2 messages: “hey” and “what’s up?” (in Russian, “прив” and “как дела?”). Generated phrases and persons as the model acts who from will be **highlighted**. All conversations initially will be held in Russian and may be accessed by clicking on the ‘original’ details button. For testing I will be using [oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui). ([View Highlight](https://read.readwise.io/read/01hgbgd3be1m45tj3mjrgreg9n))
- LoRA offers a low-effort approach in terms of both the training pipeline and hardware requirements. It trains around 1% of the total weights. I chose a 1024 sequence length and a batch size of 8. The training, which consumed 20GB of VRAM on an RTX 3090, took three epochs and lasted for 5.5 hours. For this, I used [vast.ai](https://vast.ai/), where the GPU cost was $0.362 per hour, totaling $2 for the entire training, excluding time spent on experiments and bug fixes ([View Highlight](https://read.readwise.io/read/01hgbgecm64e0yw5tdncww9ktb))
- Full fine-tuning is more challenging due to the need for multi-GPU training. Popular methods include either [ZeRO & DeepSpeed](https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/) [[3]](https://asmirnov.xyz/doppelganger#fn3) or [FSDP](https://engineering.fb.com/2021/07/15/open-source/fsdp/) [[4]](https://asmirnov.xyz/doppelganger#fn4), with FSDP essentially being a ZeRO3 [[5]](https://asmirnov.xyz/doppelganger#fn5). I decided to go with FSDP.
  While implementing the training pipeline, I referred to the [Stanford Alpaca fine-tuning code](https://github.com/tatsu-lab/stanford_alpaca/) and [Anton Bacaj’s Mistral fine-tuning code](https://github.com/abacaj/fine-tune-mistral/).
  Using a half-precision FSDP full shard with a 1024 sequence length and a micro batch size of 2 required 63GB of VRAM on each of the eight A100 80 GB GPUs. The training, lasting three epochs, took just 20 minutes. The total cost for the VM was $8.88 per hour, resulting in $3, not including the time for experiments and bug fixes. ([View Highlight](https://read.readwise.io/read/01hgbgfp2j3gnmf3rs3pxf79ax))
