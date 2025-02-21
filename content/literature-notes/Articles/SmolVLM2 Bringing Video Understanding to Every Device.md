---
author: [[huggingface.co]]
title: "SmolVLM2: Bringing Video Understanding to Every Device"
date: 2025-02-21
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/smolvlm2/banner.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: SmolVLM2: Bringing Video Understanding to Every Device
- URL: https://huggingface.co/blog/smolvlm2

## Highlights
- And then there's our little experiment, the SmolVLM2-256M-Video-Instruct. Think of it as our "what if" project - what if we could push the boundaries of small models even further? Taking inspiration from what [IBM achieved](https://ds4sd.github.io/docling/examples/pictures_description/) with our base [SmolVLM-256M-Instruct](https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct) a few weeks ago, we wanted to see how far we could go with video understanding. While it's more of an experimental release, we're hoping it'll inspire some creative applications and specialized fine-tuning projects. ([View Highlight](https://read.readwise.io/read/01jmkv37kfxfjxt251b6p740cv))
- SmolVLM2 represents a fundamental shift in how we think about video understanding - moving from massive models that require substantial computing resources to efficient models that can run anywhere. Our goal is simple: make video understanding accessible across all devices and use cases, from phones to servers. ([View Highlight](https://read.readwise.io/read/01jmkv1npdxqex1k8mj543770h))
- We are releasing models in three sizes (2.2B, 500M and 256M), MLX ready (Python *and* Swift APIs) from day zero. We've made all models and demos available [in this collection](https://huggingface.co/collections/HuggingFaceTB/smolvlm2-smallest-video-lm-ever-67ab6b5e84bf8aaa60cb17c7). ([View Highlight](https://read.readwise.io/read/01jmkv1qvfh15cybwsy33975r9))
- We are introducing three new models with 256M, 500M and 2.2B parameters. The 2.2B model is the go-to choice for vision and video tasks, while the 500M and 256M models represent **the smallest video language models ever released**. ([View Highlight](https://read.readwise.io/read/01jmkv1xz3132hgawtkdqewbsq))
- While they're small in size, they outperform any existing models per memory consumption. Looking at Video-MME (the go-to scientific benchmark in video), SmolVLM2 joins frontier model families on the 2B range and we lead the pack in the even smaller space. ([View Highlight](https://read.readwise.io/read/01jmkv1zg9wy3mve1wn9y0qfdd))
- Compared with the previous SmolVLM family, our new 2.2B model got better at solving math problems with images, reading text in photos, understanding complex diagrams, and tackling scientific visual questions. This shows in the model performance across different benchmarks: ([View Highlight](https://read.readwise.io/read/01jmkv299h3ersvxvfx1687gjt))
- Our new [SmolVLM2-500M-Video-Instruct](https://huggingface.co/HuggingFaceTB/SmolVLM2-500M-Video-Instruct) model has video capabilities very close to SmolVLM 2.2B, but at a fraction of the size: we're getting the same video understanding capabilities with less than a quarter of the parameters 🤯. ([View Highlight](https://read.readwise.io/read/01jmkv2ppqekswn4b2pfkbeb8b))
- You can fine-tune SmolVLM2 on videos using transformers 🤗 We have fine-tuned 500M variant in Colab on video-caption pairs in [VideoFeedback](https://huggingface.co/datasets/TIGER-Lab/VideoFeedback) dataset for demonstration purposes. Since 500M variant is small, it's better to apply full fine-tuning instead of QLoRA or LoRA, meanwhile you can try to apply QLoRA on cB variant. You can find the fine-tuning notebook [here](https://github.com/huggingface/smollm/blob/main/vision/finetuning/SmolVLM2_Video_FT.ipynb). ([View Highlight](https://read.readwise.io/read/01jmkv568m1rtzn0mvyqpkk51h))
