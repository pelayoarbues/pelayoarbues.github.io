---
author: [[etched.com]]
title: "E T C H E D I S M a K I N G T H E B I G G E S T B E T I N a I"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[etched.com]]
- Full Title: E T C H E D I S M a K I N G T H E B I G G E S T B E T I N a I
- URL: https://www.etched.com/announcing-etched

## Highlights
- We’ve spent the past two years building Sohu, the world’s first specialized chip (ASIC) for transformers (the “T” in ChatGPT).
  By burning the transformer architecture into our chip, we can’t run most traditional AI models: the DLRMs powering Instagram ads, protein-folding models like AlphaFold 2, or older image models like Stable Diffusion 2. We can’t run CNNs, RNNs, or LSTMs either.
  But for transformers, Sohu is the fastest chip of all time. It’s not even close. ([View Highlight](https://read.readwise.io/read/01j1825q6516y012baqgvdhfbr))
- ***With over 500,000 tokens per second in Llama 70B throughput, Sohu lets you build products impossible on GPUs.*** Sohu is an order of magnitude faster and cheaper than even NVIDIA’s next-generation Blackwell (GB200) GPUs.
  Today, every state-of-the-art AI model is a transformer: ChatGPT, Sora, Gemini, Stable Diffusion 3, and more. If transformers are replaced by SSMs, RWKV, or any new architecture, our chips will be useless.
  But if we’re right, Sohu will change the world. Here’s why we took this bet. ([View Highlight](https://read.readwise.io/read/01j182637gdats5hkdc3xnft52))
- How? Because Meta used *50,000x* more compute to train Llama 400B (2024 SoTA, smarter than most humans) than OpenAI used on GPT-2 (2019 SoTA).
  By feeding AI models more compute and better data, they get smarter. Scale is the only trick that’s continued to work for decades, and every large AI company (Google, OpenAI / Microsoft, Anthropic / Amazon, etc.) is spending more than *$100* *billion* over the next few years to keep scaling. We are living in the largest infrastructure buildout of all time. ([View Highlight](https://read.readwise.io/read/01j1826yxwx72wjf2x8x9g96hy))
- Santa Clara’s dirty little secret is that GPUs haven’t gotten better, they’ve gotten bigger. **The compute (TFLOPS) per area of the chip has been nearly flat for four years.** ([View Highlight](https://read.readwise.io/read/01j1827s32nkb5asee262p8saq))
- Before transformers took over the world, many companies built flexible AI chips and GPUs to handle the hundreds of various architectures. To name a few:
  • [NVIDIA’s GPUs](https://www.nvidia.com/en-us/data-center/h100/)
  • [Google’s TPUs](https://cloud.google.com/tpu)
  • [Amazon’s](https://aws.amazon.com/machine-learning/inferentia/) [Trainium](https://aws.amazon.com/machine-learning/trainium/)
  • [AMD’s accelerators](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html)
  • [Graphcore’s IPUs](https://www.graphcore.ai/products/ipu)
  • [SambaNova SN Series](https://sambanova.ai/)
  • [Cerebras’s CS-2](https://www.cerebras.net/product-system/)
  • [Groq’s GroqNode](https://groq.com/)
  • [Tenstorrent’s Grayskull](https://tenstorrent.com/)
  • [D-Matrix’s Corsair](https://www.d-matrix.ai/)
  • [Cambricon’s Siyuan](https://www.cambricon.com/)
  • [Intel’s Gaudi](https://habana.ai/products/gaudi/)
  No one has ever built an algorithm-specific AI chip (ASIC). Chip projects cost $50-100M and take years to bring to production. When we started, there was no market.
  Suddenly, that’s changed:
  • **Unprecedented Demand:** Before ChatGPT, the market for transformer inference was ~$50M, and now it’s billions. All big tech companies use transformer models (OpenAI, Google, Amazon, Microsoft, Facebook, etc.).
  • **Convergence on Architecture:** AI models used to change a lot. But since GPT-2, state-of-the-art model architectures have remained nearly identical! OpenAI’s GPT-family, Google’s PaLM, Facebook’s LLaMa, and even Tesla FSD are all transformers. ([View Highlight](https://read.readwise.io/read/01j1828jqe76xfx64sg4555f7g))
- No one has ever built an algorithm-specific AI chip (ASIC). Chip projects cost $50-100M and take years to bring to production. When we started, there was no market.
  Suddenly, that’s changed:
  • **Unprecedented Demand:** Before ChatGPT, the market for transformer inference was ~$50M, and now it’s billions. All big tech companies use transformer models (OpenAI, Google, Amazon, Microsoft, Facebook, etc.).
  • **Convergence on Architecture:** AI models used to change a lot. But since GPT-2, state-of-the-art model architectures have remained nearly identical! OpenAI’s GPT-family, Google’s PaLM, Facebook’s LLaMa, and even Tesla FSD are all transformers. ([View Highlight](https://read.readwise.io/read/01j1829dbkqt2x1w48cvh19f64))
- When models cost $1B+ to train and $10B+ for inference, specialized chips are inevitable. At this scale, a 1% improvement would justify a $50-100M custom chip project.
  In reality, ASICs are orders of magnitude faster than GPUs. When bitcoin miners hit the market in 2014, it became cheaper to throw out GPUs than to use them to mine bitcoin. ([View Highlight](https://read.readwise.io/read/01j1829qnn7jsg8r9z7jsnt7bk))
- Transformers are shockingly similar: tweaks like SwiGLU activations and RoPE encodings are used everywhere: LLMs, embedding models, image inpainting, and video generation.
  While GPT-2 to Llama-3 are state-of-the-art (SoTA) models five years apart, they have nearly identical architectures. The only major difference is *scale.* ([View Highlight](https://read.readwise.io/read/01j182aptmjfby76zxfqw61njv))
- We believe in the hardware lottery: the models that win are the ones that can run the fastest and cheapest on hardware. Transformers are powerful, useful, and profitable enough to dominate every major AI compute market before alternatives are ready:
  • Transformers power every large AI product: from agents to search to chat. AI labs have spent hundreds of millions of dollars in R&D to optimize GPUs for transformers. The current and next-generation state-of-the-art models are transformers.
  • As models scale from $1B to $10B to $100B training runs in the next few years, the risk of testing new architectures skyrockets. Instead of re-testing scaling laws and performance, time is better spent building features on top of transformers, such as multi-token prediction.
  • Today’s software stack is optimized for transformers. Every popular library (TensorRT-LLM, vLLM, Huggingface TGI, etc.) has special kernels for running transformer models on GPUs. Many features built on top of transformers aren’t easily supported in alternatives (ex. speculative decoding, tree search).
  • Tomorrow’s hardware stack will be optimized for transformers. NVIDIA’s GB200s have special support for transformers (TransformerEngine). ASICs like Sohu entering the market mark the point of no return. Transformer killers will need to run on GPUs faster than transformers run on Sohu. If that happens, we’ll build an ASIC for that too! ([View Highlight](https://read.readwise.io/read/01j182b4z31zh05y8rqej05v4v))
- Sohu is the world’s first transformer ASIC. **One 8xSohu server replaces 160 H100 GPUs.**
  ![](https://cdn.prod.website-files.com/6570a6bdf377183fb173431e/667a83673ceb04007fc51a1c_Sohu%20Performance%20(1).png)
  By specializing, Sohu gets unprecedented performance. One 8xSohu server can serve over 500,000 Llama 70B tokens per second.
  Benchmarks are for Llama-3 70B in FP8 precision: no sparsity, 8x model parallel, 2048 input/128 output lengths. 
  8xH100s calculated with TensorRT-LLM 0.10.08 (latest version), 8xGB200 figures are estimated. 
  Sohu only supports transformer inference, whether Llama and Stable Diffusion 3. Sohu supports all of today’s models (Google, Meta, Microsoft, OpenAI, Anthropic, etc.) and can handle tweaks to future models.
  Because Sohu can only run one algorithm, the *vast* majority of control flow logic can be removed, allowing it to have many more math blocks. As a result, Sohu boasts over 90% FLOPS utilization (compared to ~30% on a GPU[7](https://etched-dev.webflow.io/announcing-etched#footnotes) with TRT-LLM). ([View Highlight](https://read.readwise.io/read/01j182bdt9kb82vsyq374c6d1b))
- The NVIDIA H200 has 989 TFLOPS of FP16/BF16 compute without sparsity[9](https://www.etched.com/announcing-etched#footnotes). This is state-of-the-art (more than even Google’s new Trillium chip), and the GB200 launching in 2025 has only 25% more compute (1,250 TFLOPS per die[10](https://www.etched.com/announcing-etched#footnotes)).
  Since the vast majority of a GPU’s area is devoted to programmability, specializing on transformers lets you fit far more compute. You can prove this to yourself from first principles: ([View Highlight](https://read.readwise.io/read/01j182cz7t065p1yah5yghehsp))
- It takes 10,000 transistors to build a single FP16/BF16/FP8 multiply-add circuit, the building block for all matrix math. The H100 SXM has 528 tensor cores, and each has `4 × 8 × 16` FMA circuits[11](https://www.etched.com/announcing-etched#footnotes). Multiplying tells us the H100 has 2.7 billion transistors dedicated to tensor cores.
  **But an H100 has 80 billion transistors**[**12**](https://www.etched.com/announcing-etched#footnotes)**! This means only 3.3% of the transistors on an H100 GPU are used for matrix multiplication!**
  This is a deliberate design decision by NVIDIA and other flexible AI chips. If you want to support all kinds of models (CNNs, LSTMs, SSMs, and others), you can’t do much better than this.
  By only running transformers, we can fit way more FLOPS on our chip without resorting to lower precisions or sparsity. ([View Highlight](https://read.readwise.io/read/01j182dame16m88z3js52vhypt))
- I
  s
  n
  ’
  t
  i
  n
  f
  e
  r
  e
  n
  c
  e
  b
  o
  t
  t
  l
  e
  n
  e
  c
  k
  e
  d
  o
  n
  m
  e
  m
  o
  r
  y
  b
  a
  n
  d
  w
  i
  d
  t
  h
  ,
  n
  o
  t
  c
  o
  m
  p
  u
  t
  e
  ?
  Actually, for modern models like Llama-3, no!
  Let’s use NVIDIA and AMD’s standard benchmark[13](https://www.etched.com/announcing-etched#footnotes): 2048 input tokens and 128 output tokens. Most AI products have much longer prompts than completions (even a new Claude chat has 1,000+ tokens in the system prompt).
  On GPUs and on Sohu, inference is run in **batches**. Each batch loads all of the model weights once, and re-uses them across every token in the batch. Generally, LLM inputs are compute-bound, and LLM outputs are memory-bound. When we combine input and output tokens with continuous batching, the workload becomes *very* compute bound[14](https://www.etched.com/announcing-etched#footnotes). ([View Highlight](https://read.readwise.io/read/01j182efscctwg03w64mye8vc7))
- We can scale up the same trick to run Llama-3-70B with 2048 input tokens and 128 output tokens. Have each batch consist of 2048 input tokens for one sequence, and 127 output tokens for 127 different sequences.
  If we do this, each batch will require about `(2048 + 127) × 70B params × 2 bytes per param = 304 TFLOPs`, while only needing to load `70B params × 2 bytes per param = 140 GB` of model weights and about `127 × 64 × 8 × 128 × (2048 + 127) × 2 × 2 = 72GB` of KV cache weights. That’s far more compute than memory bandwidth: an H200 would need **6.8 PFLOPS** of compute in order to max out its memory bandwidth. And that’s at 100% utilization - if utilization was 30%, you’d need 3x more.
  Since Sohu has so much compute with very high utilization, we can run *enormous* throughputs without bottlenecking on memory bandwidth. ([View Highlight](https://read.readwise.io/read/01j182fsxykshzvzmy2r4qhcx6))
- On GPUs and TPUs, software is a nightmare. Handling arbitrary CUDA and PyTorch code requires an incredibly complicated compiler. Third-party AI chips (AMD, Intel, AWS, etc.) have together spent billions on software to little avail.
  But since Sohu only runs transformers, we only need to write software for transformers!
  Most companies running open-source or internal models use a transformer-specific inference library like TensorRT-LLM, vLLM, or HuggingFace’s TGI. These frameworks are very rigid - while you can tweak model hyperparameters, changing the underlying model code is not really supported. But this is fine - since all transformer models are so similar (even text/image/video ones), tweaking the hyperparameters is all you really need.
  While this supports 95% of AI companies, the largest AI labs go custom. They have teams of engineers hand-tuning GPU kernels to squeeze out slightly more utilization, reverse engineering things like which registers have the lowest latency to each tensor core.
  With Etched, you don’t need to reverse engineer anymore - our software, from drivers to kernels to the serving stack, will be open source. If you want to implement a custom transformer layer, your kernel wizards are free to do so. ([View Highlight](https://read.readwise.io/read/01j182h61w5k2qvs4t7h9txqnh))
- What would happen if AI models get 20x faster and cheaper overnight?
  Today, Gemini takes over 60 seconds to answer a question about a video[16](https://www.etched.com/announcing-etched#footnotes). Coding agents cost more than software engineers and take hours to finish tasks. Video models generate one frame per second[17](https://www.etched.com/announcing-etched#footnotes), and even OpenAI ran out of GPU capacity when ChatGPT signups hit 10M users, just 0.15% of the world.
  We aren’t on track to fix it - even if we do keep making GPUs bigger, at a rate of 2.5x every two years, it will take a **decade to make video generation real-time**. ([View Highlight](https://read.readwise.io/read/01j182j6be312n5z77nh2t4sfr))
