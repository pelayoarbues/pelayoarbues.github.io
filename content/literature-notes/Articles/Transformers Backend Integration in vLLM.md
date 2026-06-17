---
author: "[[The Hugging Face Team]]"
title: 'Transformers Backend Integration in vLLM'
date: "2025-07-24"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.vllm.ai/assets/figures/transformers-backend/transformers-backend.png)

## Metadata
- Author: [[The Hugging Face Team]]
- Full Title: Transformers Backend Integration in vLLM

## Highlights
- The [Hugging Face Transformers library](https://huggingface.co/docs/transformers/main/en/index) offers a flexible, unified interface to a vast ecosystem of model architectures. From research to fine-tuning on custom dataset, transformers is the go-to toolkit for all.
  But when it comes to *deploying* these models at scale, inference speed and efficiency often take center stage. Enter [vLLM](https://docs.vllm.ai/en/latest/), a library engineered for high-throughput inference, pulling models from the Hugging Face Hub and optimizing them for production-ready performance.
  A recent addition to the vLLM codebase enables leveraging transformers as a backend to run models. vLLM will therefore optimize throughput/latency on top of existing transformers architectures. In this post, we’ll explore how vLLM leverages the transformers backend to combine **flexibility** with **efficiency**, enabling you to deploy state-of-the-art models faster and smarter. ([View Highlight](https://read.readwise.io/read/01jshsb00tzfyftef14tj36r3z))
- vLLM with the transformers backend now supports **Vision Language Models**. When user adds `model_impl="transformers"`, the correct class for text-only and multimodality will be deduced and loaded. ([View Highlight](https://read.readwise.io/read/01k0xsbf13dxn8xm4vx7fnvwy2))
- vLLM’s inference is noticeably faster and more resource-efficient, especially under load. For example, it can handle thousands of requests per second with lower GPU memory usage. ([View Highlight](https://read.readwise.io/read/01jshsbktg66t7ekwzm29dcjb5))
- Beyond raw performance, vLLM offers an OpenAI-compatible API, making it a drop-in replacement for external services. Launch a server: ([View Highlight](https://read.readwise.io/read/01jshsbsnws0dw21xgem3p4hr4))
- The transformers library is optimized for contributions and [addition of new models](https://huggingface.co/docs/transformers/en/add_new_model). Adding a new model to vLLM on the other hand is a little [more involved](https://docs.vllm.ai/en/latest/contributing/model/index.html).
  In the **ideal world**, we would be able to use the new model in vLLM as soon as it is added to transformers. With the integration of the transformers backend, we step towards that ideal world.
  Here is the [official documentation](https://docs.vllm.ai/en/latest/models/supported_models.html#remote-code) on how to make your transformers model compatible with vLLM for the integration to kick in. We followed this and made `modeling_gpt2.py` compatible with the integration! You can follow the changes in this [transformers pull request](https://github.com/huggingface/transformers/pull/36934). ([View Highlight](https://read.readwise.io/read/01jshsc6sccn1tbpd4ybrqva24))
- This backend acts as a **bridge**, marrying transformers’ plug-and-play flexibility with vLLM’s inference prowess. You get the best of both worlds: rapid prototyping with transformers and optimized deployment with vLLM. ([View Highlight](https://read.readwise.io/read/01jshscjdh47vfd21n14b10we0))
