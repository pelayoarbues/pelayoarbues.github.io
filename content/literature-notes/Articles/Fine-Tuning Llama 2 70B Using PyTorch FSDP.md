---
author: [[Hugging Face - Blog]]
title: "Fine-Tuning Llama 2 70B Using PyTorch FSDP"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/front/thumbnails/v2-2.png)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: Fine-Tuning Llama 2 70B Using PyTorch FSDP
- URL: https://huggingface.co/blog/ram-efficient-pytorch-fsdp

## Highlights
- Fully Sharded Data Parallelism (FSDP) is a paradigm in which the optimizer states, gradients and parameters are sharded across devices. During the forward pass, each FSDP unit performs an *all-gather operation* to get the complete weights, computation is performed followed by discarding the shards from other devices. After the forward pass, the loss is computed followed by the backward pass. In the backward pass, each FSDP unit performs an all-gather operation to get the complete weights, with computation performed to get the local gradients. These local gradients are averaged and sharded across the devices via a *reduce-scatter operation* so that each device can update the parameters of its shard. For more information on what PyTorch FSDP is, please refer to this blog post: [Accelerate Large Model Training using PyTorch Fully Sharded Data Parallel](https://huggingface.co/blog/pytorch-fsdp). ([View Highlight](https://read.readwise.io/read/01ha87jwshht5ga41vb6afsye8))
- Fully Sharded Data Parallelism (FSDP) is a paradigm in which the optimizer states, gradients and parameters are sharded across devices. During the forward pass, each FSDP unit performs an *all-gather operation* to get the complete weights, computation is performed followed by discarding the shards from other devices. After the forward pass, the loss is computed followed by the backward pass. In the backward pass, each FSDP unit performs an all-gather operation to get the complete weights, with computation performed to get the local gradients. These local gradients are averaged and sharded across the devices via a *reduce-scatter operation* so that each device can update the parameters of its shard. For more information on what PyTorch FSDP is, please refer to this blog post: [Accelerate Large Model Training using PyTorch Fully Sharded Data Parallel](https://huggingface.co/blog/pytorch-fsdp). ([View Highlight](https://read.readwise.io/read/01ha87jz3y66ejhxs7x4483qw0))
- Fully Sharded Data Parallelism (FSDP) is a paradigm in which the optimizer states, gradients and parameters are sharded across devices. During the forward pass, each FSDP unit performs an *all-gather operation* to get the complete weights, computation is performed followed by discarding the shards from other devices. After the forward pass, the loss is computed followed by the backward pass. In the backward pass, each FSDP unit performs an all-gather operation to get the complete weights, with computation performed to get the local gradients. These local gradients are averaged and sharded across the devices via a *reduce-scatter operation* so that each device can update the parameters of its shard. For more information on what PyTorch FSDP is, please refer to this blog post: [Accelerate Large Model Training using PyTorch Fully Sharded Data Parallel](https://huggingface.co/blog/pytorch-fsdp). ([View Highlight](https://read.readwise.io/read/01ha87k1m2wx85wqag3402j590))
