---
author: "[[Miguel Otero Pedrido]]"
title: 'Run the World''s Best OCR on Your Own Laptop'
date: "2026-04-08"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!64d4!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8a5b08d8-cb8d-4094-9ce8-605b87b3e2cd_1200x630.png)

## Metadata
- Author: [[Miguel Otero Pedrido]]
- Full Title: Run the World's Best OCR on Your Own Laptop
- URL: https://theneuralmaze.substack.com/p/run-the-worlds-best-ocr-on-your-own

## Highlights
- [![](https://substackcdn.com/image/fetch/$s_!kRG7!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F275c35d2-1d2a-4618-92f0-7ccfb0250e50_944x545.png)](https://substackcdn.com/image/fetch/$s_!kRG7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F275c35d2-1d2a-4618-92f0-7ccfb0250e50_944x545.png)
  Link: https://developers.redhat.com/articles/2025/08/08/ollama-vs-vllm-deep-dive-performance-benchmarking#comparison_2__tuned_ollama_versus_vllm ([View Highlight](https://read.readwise.io/read/01knm8kktkf65c4srwv9eenb8q))
- Using vLLM allows you to serve the model via an **OpenAI-compatible** `/v1/chat/completions` API endpoint. When configured properly—such as setting the `max_workers` and `connection_pool_size` appropriately in your SDK configuration to avoid 503 errors—vLLM ensures your pipeline can handle massive parallel OCR requests without crashing under load. ([View Highlight](https://read.readwise.io/read/01knm8ksf4qm6wjcwj9n9q3q4h))
- The Optical Character Recognition (OCR) landscape is vast, but **GLM-OCR stands out as a multimodal model specifically built for complex document understanding**.
  [](https://substackcdn.com/image/fetch/$s_!y75d!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa76d7c68-c4b4-4b0d-a8e5-d8a9660928ff_946x505.png) ([View Highlight](https://read.readwise.io/read/01knm8jhbgf0tnq22b36d1w2cy))
- Developed by Z.ai and based on the GLM-V encoder-decoder architecture, it introduces advanced training techniques like Multi-Token Prediction (MTP) loss and full-task reinforcement learning to drastically improve recognition accuracy. Instead of relying on massive, unwieldy models, GLM-OCR proves that highly focused architectures can dominate specific tasks.
  Despite its incredibly small size of just **0.9 billion parameters**, GLM-OCR achieves a score of **94.62** on **OmniDocBench V1.5**, ranking #1 overall. This small footprint means it can run fully locally on standard consumer devices, like MacBooks or edge devices, without sacrificing capability. ([View Highlight](https://read.readwise.io/read/01knm8jngtrvrhkp69zhmwn6rb))
- It successfully rivals and often outperforms much larger, closed-source models across benchmarks for formula recognition, table extraction, and information extraction.
  [![](https://substackcdn.com/image/fetch/$s_!Qb00!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F82983d95-f5ec-4402-afa3-141e331dc272_1200x711.jpeg)](https://substackcdn.com/image/fetch/$s_!Qb00!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F82983d95-f5ec-4402-afa3-141e331dc272_1200x711.jpeg) ([View Highlight](https://read.readwise.io/read/01knm8jvcrmvp43mzdw6wr1a34))
- The secret to this "small but mighty" performance is its **two-stage pipeline, which pairs the language decoder with the PP-DocLayout-V3 layout detection model**. By first analyzing the document layout and then performing parallel recognition, GLM-OCR maintains robust performance on highly complex real-world scenarios, including code-heavy documents, intricate tables, and documents with rotating or staggered layouts. ([View Highlight](https://read.readwise.io/read/01knm8jz0e99jcfz0y7xy287y0))
- Running models locally with Ollama is perfect for testing, personal use, and CPU-only environments.
  However, as your document parsing needs grow, you must consider the transition **from a local machine to a robust cloud infrastructure**. Cloud deployments allow you to serve the pipeline at scale, making use of time-slicing Kubernetes (k8s) configurations and worker-server deployments for maximum efficiency.
  When moving to a production environment, **the official GLM-OCR documentation strongly recommends transitioning to engines like [vLLM](https://docs.vllm.ai/en/latest/) or [SGLang](https://docs.sglang.io/)**. These frameworks are specifically designed for high-concurrency services and provide significantly better performance and stability when you have access to one or multiple GPUs.
  [](https://substackcdn.com/image/fetch/$s_!kRG7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F275c35d2-1d2a-4618-92f0-7ccfb0250e50_944x545.png) ([View Highlight](https://read.readwise.io/read/01knm8k9wcsemnvm6bvtxehmd8))
- Before deploying, it is crucial to understand the ecosystem that makes local inference so accessible. At the core of this democratization is **[llama.cpp](https://github.com/ggml-org/llama.cpp), a high-performance C++ engine designed to run LLMs on standard hardware with maximum efficiency**.
  > While `llama.cpp` is incredibly powerful, it can require manual compilation and complex command-line arguments to operate.
  This is where **[Ollama](https://ollama.com/)** steps in as the "user interface" and manager. **Ollama acts as a user-friendly wrapper around the llama.cpp backbone**, allowing developers to download models, manage memory, and serve a clean API with simple commands. It handles the underlying complexity, bringing powerful language models to developers who may not be machine learning engineers.
  To achieve this efficiency on local hardware, the engine relies heavily on **quantization** and the **GGUF file format**. Quantization shrinks the size of the model weights—such as using 2-bit (Q2) or 4-bit (Q4) representations instead of standard 16-bit floats—so the model can run on cheaper hardware without losing significant performance. ([View Highlight](https://read.readwise.io/read/01knm8mb9q9wqqw0cv6k6fb4gg))
