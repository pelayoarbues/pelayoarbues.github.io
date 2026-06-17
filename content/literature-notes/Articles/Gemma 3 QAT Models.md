---
author: "[[Simon Willison]]"
title: 'Gemma 3 QAT Models'
date: "2025-04-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Gemma 3 QAT Models
- URL: https://simonwillison.net/2025/Apr/19/gemma-3-qat-models/

## Highlights
- **[Gemma 3 QAT Models](https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/)**. Interesting release from Google, as a follow-up [to Gemma 3](https://simonwillison.net/2025/Mar/12/gemma-3/) from last month:
  > To make Gemma 3 even more accessible, we are announcing new versions optimized with Quantization-Aware Training (QAT) that dramatically reduces memory requirements while maintaining high quality. This enables you to run powerful models like Gemma 3 27B locally on consumer-grade GPUs like the NVIDIA RTX 3090.
  I wasn't previously aware of Quantization-Aware Training but it turns out to be quite an established pattern now, supported in both [Tensorflow](https://www.tensorflow.org/model_optimization/guide/quantization/training) and [PyTorch](https://pytorch.org/blog/quantization-aware-training/).
  Google report model size drops from BF16 to int4 for the following models:
  • Gemma 3 27B: 54GB to 14.1GB
  • Gemma 3 12B: 24GB to 6.6GB
  • Gemma 3 4B: 8GB to 2.6GB
  • Gemma 3 1B: 2GB to 0.5GB ([View Highlight](https://read.readwise.io/read/01jt0qg5v1mn0tmdf1gjjt3bkp))
- They partnered with Ollama, LM Studio, MLX (here's [their collection](https://huggingface.co/collections/mlx-community/gemma-3-qat-68002674cd5afc6f9022a0ae)) and llama.cpp for this release - I'd love to see more AI labs following their example. ([View Highlight](https://read.readwise.io/read/01jt0qgbhe5fpyd2kd9ydqfw02))
- aving spent a while putting it through its paces via [Open WebUI](https://simonwillison.net/2024/Dec/27/open-webui/) and [Tailscale](https://tailscale.com/) to access my laptop from my phone I think this may be my new favorite general-purpose local model. Ollama appears to use 22GB of RAM while the model is running, which leaves plenty on my 64GB machine for other applications.
  I've also tried it via [llm-mlx](https://github.com/simonw/llm-mlx) like this (downloading 16GB):
  llm install llm-mlx
  llm mlx download-model mlx-community/gemma-3-27b-it-qat-4bit
  llm chat -m mlx-community/gemma-3-27b-it-qat-4bit ([View Highlight](https://read.readwise.io/read/01jt0qgnemdxrqc6zrfsar8tga))
