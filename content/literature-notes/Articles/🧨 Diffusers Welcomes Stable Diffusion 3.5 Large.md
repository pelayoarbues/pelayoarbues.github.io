---
author: "[[Hugging Face - Blog]]"
title: '🧨 Diffusers Welcomes Stable Diffusion 3.5 Large'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/favicon.ico)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: 🧨 Diffusers Welcomes Stable Diffusion 3.5 Large
- URL: https://huggingface.co/blog/sd3-5

## Highlights
- The transformer architecture of SD3.5 (large) is very similar to SD3 (medium), with the following changes:
  • QK normalization: For training large transformer models, [QK normalization](https://research.google/blog/scaling-vision-transformers-to-22-billion-parameters/) has now become a standard, and SD3.5 Large is no exception.
  • Dual attention layers: Instead of using single attention layers for each stream of modality in the MMDiT blocks, SD3.5 uses double attention layers.
  The rest of the details in terms of the text encoders, VAE, and noise scheduler stay exactly the same as in SD3 Medium. For more on SD3, we recommend checking out the [original pape](https://arxiv.org/abs/2403.03206) ([View Highlight](https://read.readwise.io/read/01jaxhnpe42e7bt0g7pywk6807))
- The following snippet will download the 8B parameter version of SD3.5 in `torch.bfloat16` precision. This is the format used in the original checkpoint published by Stability AI, and is the recommended way to run inference. ([View Highlight](https://read.readwise.io/read/01jaxhp64x2158tg1yge7nmqy3))
- The release also comes with a **“timestep-distilled”** model that eliminates classifier-free guidance and lets us generate images in fewer steps (typically in 4-8 steps). ([View Highlight](https://read.readwise.io/read/01jaxhp32gn7xj58q7phgps4hw))
- All the examples shown in our [SD3 blog post](https://huggingface.co/blog/sd3) and the [official Diffusers documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/stable_diffusion/stable_diffusion_3) should already work with SD3.5. In particular, both of those resources dive deep into optimizing the memory requirements to run inference. Since SD3.5 Large is significantly larger than SD3 Medium, memory optimization becomes crucial to allow inference on consumer interfaces. ([View Highlight](https://read.readwise.io/read/01jaxhp90bdt24bkfk1xp4k4j2))
- Thanks to libraries like `bitsandbytes` and `peft`, it is possible to fine-tune large models like SD3.5 Large on consumer GPU cards having 24GBs of VRAM. It is already possible to leverage our existing [SD3 training script](https://huggingface.co/blog/sd3#dreambooth-and-lora-fine-tuning) for training LoRAs. The below training command already works: ([View Highlight](https://read.readwise.io/read/01jaxhpp8xvfw6c43vm4wfxbgy))
