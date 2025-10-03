---
author: "[[Thinking Machines Lab]]"
title: 'Announcing Tinker'
date: "2025-10-02"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://thinkingmachines.ai/blog/announcing-tinker/images/tinker-cover-social.png)

## Metadata
- Author: [[Thinking Machines Lab]]
- Full Title: Announcing Tinker
- URL: https://thinkingmachines.ai/blog/announcing-tinker/

## Highlights
- Today, we are launching [Tinker](https://thinkingmachines.ai/tinker), a flexible API for fine-tuning language models. It empowers researchers and hackers to experiment with models by giving them control over the algorithms and data while we handle the complexity of distributed training. Tinker advances our mission of enabling more people to do research on cutting-edge models and customize them to their needs. ([View Highlight](https://read.readwise.io/read/01k6k4p7bxscevc6bc9aak9z5f))
- Tinker lets you fine-tune a range of large and small open-weight models, including large mixture-of-experts models such as Qwen-235B-A22B. Switching from a small model to a large one is as simple as changing a single string in your Python code. ([View Highlight](https://read.readwise.io/read/01k6k4pd704sakdv10gtabkwh9))
- Tinker is a managed service that runs on our internal clusters and training infrastructure. We handle scheduling, resource allocation, and failure recovery. This allows you to get small or large runs started immediately, without worrying about managing infrastructure. We use LoRA so that we can share the same pool of compute between multiple training runs, lowering costs. ([View Highlight](https://read.readwise.io/read/01k6k4phcaec01sneg8xxas87f))
- Tinker’s API gives you low-level primitives like `forward_backward` and `sample`, which can be used to express most common post-training methods. Even so, achieving good results requires getting many details right. That’s why we’re releasing an open-source library, the [Tinker Cookbook](http://github.com/thinking-machines-lab/tinker-cookbook), with modern implementations of post-training methods that run on top of the Tinker API. ([View Highlight](https://read.readwise.io/read/01k6k4pq5jwnd4449egxzyfbmk))
- Tinker is now in private beta for researchers and developers. ([View Highlight](https://read.readwise.io/read/01k6k4pvtbsh1rcweqn6qm268y))
- Tinker will be free to start. We will introduce usage-based pricing in the coming weeks. ([View Highlight](https://read.readwise.io/read/01k6k4q0k2dzmq1mwnccrsv31q))
