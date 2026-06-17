---
author: "[[Jaber Jaber]]"
title: 'LLMs Can Now Write GPU Kernels That Beat torch.compile'
date: "2026-03-03"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/introducing-forge.webp)

## Metadata
- Author: [[Jaber Jaber]]
- Full Title: LLMs Can Now Write GPU Kernels That Beat torch.compile
- URL: https://www.rightnowai.co/blog/llms-write-gpu-kernels-beat-torch-compile

## Highlights
- Six months ago, if you asked me whether an LLM could write a CUDA kernel that actually beats PyTorch's compiler, I would have said no. The optimization space is too complex. Too many hardware details. Too easy to write something that compiles but runs slower than the baseline. ([View Highlight](https://read.readwise.io/read/01kjsxr1943xyyw1z9w7exaaa6))
- I was wrong.
  We're now seeing multi-agent systems that take your PyTorch code and spit out CUDA or Triton kernels with 2x to 14x speedups over `torch.compile(mode='max-autotune-no-cudagraphs')`. Not on toy benchmarks. On real models like Llama-3.1-8B, Whisper, and Stable Diffusion.
  This post breaks down how this works, what the research says, and why I think swarm-based approaches like [Forge](https://www.rightnowai.co/forge) are the future of kernel optimization. ([View Highlight](https://read.readwise.io/read/01kjsxr52h8x1pxzrtybjwjjhr))
- PyTorch 2.0 introduced torch.compile, and it's genuinely impressive. You add one line of code and get 2x to 5x speedups on many models. Under the hood, TorchDynamo captures your computation graph and TorchInductor generates Triton kernels that fuse operations together. ([View Highlight](https://read.readwise.io/read/01kjsxr8931v6w5edt6egkmnrc))
- But torch.compile has hard limits.
  **First, graph breaks.** Whenever your model has dynamic control flow or unsupported operations, the compiler gives up and falls back to eager mode. Each break is a missed optimization opportunity.
  **Second, and more importantly, compilers cannot invent algorithms.** FlashAttention gets 3x to 10x speedups by computing attention in a fundamentally different way. It uses online softmax to avoid materializing the full N-squared attention matrix. No compiler will ever discover this on its own. It's an algorithmic insight, not a fusion pattern.
  **Third, hardware-specific tricks** like H100 warp specialization and TMA require manual tuning that general compilers don't attempt.
  This is why companies like Meta still employ kernel engineers. There's a massive gap between what compilers produce and what's actually possible. ([View Highlight](https://read.readwise.io/read/01kjsxrak2hmhr6xp7014fbm4p))
- KernelBench: Finally, a Real Benchmark
  Stanford's Scaling Intelligence Lab released KernelBench in December 2024, and it's now the standard way to evaluate LLM kernel generation. The benchmark has 250 tasks across four difficulty levels:
  • **Level 1:** Single operations like convolutions and matrix multiplies (100 tasks)
  • **Level 2:** Fused operations like conv + bias + ReLU (100 tasks)
  • **Level 3:** Full model architectures like MobileNet and MiniGPT (50 tasks)
  • **Level 4:** HuggingFace model optimization (20 aspirational tasks)
  The metric that matters is called "fast_p": the percentage of tasks where the generated kernel is both correct AND faster than the PyTorch baseline. ([View Highlight](https://read.readwise.io/read/01kjsxrkdrd10kh582yhvgf6ak))
- The research on multi-agent code generation is pretty convincing at this point.
  AgentCoder (2024) showed that separating code generation and test verification across specialized agents achieves 96.3% pass@1 on HumanEval. That's near ceiling performance. MapCoder achieved state-of-the-art results using four agents that mimic the human programming cycle: retrieval, planning, coding, and debugging.
  For kernel generation specifically, STARK demonstrated that multi-agent systems using Claude Sonnet could hit 100% success rate on KernelBench Level 1 with up to 3x speedups. Single-agent approaches couldn't match this. ([View Highlight](https://read.readwise.io/read/01kjsxrspr8bxcabrs5g56s3rf))
- The pattern that keeps working is what researchers call **"coder-judge"** or **"generator-verifier"**. One agent writes code, another agent checks it. This separation matters because generation and verification require different skills.
  There's also strong evidence for inference-time scaling. The paper "Scaling LLM Test-Time Compute Optimally" from ICLR 2025 showed that throwing more compute at test time can be more effective than scaling model parameters. The relationship is log-linear: double your test-time compute, get consistent improvements in output quality.
  AlphaCode 2 takes this to the extreme. It samples up to a million candidates per problem, filters out 95% that fail basic checks, clusters the rest by runtime behavior, and uses a scoring model to pick the best. This got them to the 85th percentile on Codeforces. ([View Highlight](https://read.readwise.io/read/01kjsxry0cazd9g9pqgtvca27e))
- The conceptual roots of AI-generated optimized code go back to two DeepMind papers.
  **AlphaDev** (Nature, June 2023) used reinforcement learning and Monte Carlo Tree Search to discover assembly-level sorting algorithms that were up to 70% faster for small sequences than human-written code. These algorithms got merged into the LLVM libc++ standard library. They're now called trillions of times daily. That's the first time RL-discovered algorithms shipped in a major production library. ([View Highlight](https://read.readwise.io/read/01kjsxs1g4a5gmwh2xdrseyb56))
- **FunSearch** (Nature, December 2023) paired an LLM with island-based evolutionary search. The language model proposes mutations, and the evolutionary algorithm handles selection and population management. This combo achieved the first improvement in 20 years to the cap set problem in combinatorics.
  The FunSearch approach directly inspired systems like Meta's KernelEvolve, which uses similar LLM + evolutionary dynamics for kernel optimization. ([View Highlight](https://read.readwise.io/read/01kjsxs376p0c2hrvw9hg3ywhk))
- Meta has the most mature production deployment of LLM-assisted kernel generation. Their KernelEvolve system is detailed in a 2025 paper, and the results are impressive:
  • Works across NVIDIA GPUs, AMD GPUs, and Meta's custom MTIA accelerators
  • Achieves 1.25x to 17x speedups across Meta's LLMs and recommendation systems
  • Deployed for hundreds of models serving billions of users daily
  • Uses a self-improving state machine with tree search and a persistent knowledge base
  Meta also released KernelLLM, an 8B parameter model fine-tuned specifically for Triton kernel generation. Despite being much smaller than frontier models, it matches their performance on KernelBench Level 1. Training took only about 192 GPU hours.
  One stat that surprised me: Triton has overtaken CUDA as the dominant kernel programming model at Meta. They have over 8,000 Triton kernels in production. ([View Highlight](https://read.readwise.io/read/01kjsxs9t0pt6bkyfd5tcn6zc2))
- [Forge](https://www.rightnowai.co/forge) takes the multi-agent approach and scales it to 32 parallel coder-judge pairs. Each pair explores a different region of the optimization space: tensor core utilization, memory coalescing, register blocking, shared memory tiling, kernel fusion patterns.
  Architecture
  [Forge](https://www.rightnowai.co/forge) Multi-Agent Swarm
  PyTorch Model Input
  ↓
  Pattern RAG
  1,711 CUTLASS + 113 Triton patterns
  ↓
  32× Coder-Judge Agent Pairs
  C
  ↓
  J
  C
  ↓
  J
  C
  ↓
  J
  C
  ↓
  J
  C
  ↓
  J
  C
  ↓
  J
  ...
  MAP-Elites + Island Model
  ↓
  Dedup→Compile→Test→Bench
  ↓
  Optimized CUDA/Triton
  2× to 14× faster
  [Learn more about Forge →](https://www.rightnowai.co/forge)
  Forge system architecture: multi-agent swarm with evolutionary optimization.
  The agents compete to find the best kernel configuration. Most will get stuck in local minima (suboptimal but stable configurations). A few will find the global optimum. You keep the winners. ([View Highlight](https://read.readwise.io/read/01kjsxsev19v61md2nfkvzfhq6))
- The system uses **MAP-Elites**, which is a quality-diversity algorithm that maintains an archive of solutions across different behavioral characteristics. Instead of just keeping the single best kernel, you keep the best kernel for each combination of traits (memory-bound vs compute-bound, different block sizes, etc). This diversity helps avoid getting trapped in local optima.
  There's also retrieval-augmented generation from a database of 1,711 CUTLASS patterns and 113 Triton patterns. The agents don't start from scratch. They pull relevant code snippets and optimization strategies from a curated knowledge base. ([View Highlight](https://read.readwise.io/read/01kjsxssb90my1czz3q29vgwy4))
- The Cautionary Tale
  I should mention Sakana AI's "AI CUDA Engineer" project. They initially claimed 10x to 100x speedups, which would have been incredible. But they later discovered the models were reward hacking. Instead of finding genuine optimizations, the LLMs found ways to exploit the benchmark measurement without actually making kernels faster.
  This highlights why verification matters so much. You need robust correctness checks and real performance measurement on actual hardware. LLMs are very good at finding shortcuts. [Forge](https://www.rightnowai.co/forge) addresses this with a tiered evaluation pipeline: Dedup, Compile, Test, then Benchmark on real GPUs. ([View Highlight](https://read.readwise.io/read/01kjsxswchhr1xt9cgkt77ntsr))
- The research is converging on a few clear principles:
  1. **One-shot generation doesn't work for kernels.** You need iterative refinement with execution feedback.
  1. **Multi-agent systems outperform single agents.** Separating generation and verification helps.
  1. **Inference-time scaling is real.** More test-time compute reliably improves results.
  1. **The gap between torch.compile and hand-optimized kernels is 2x to 10x** for critical operations. This gap creates the economic incentive for these systems. ([View Highlight](https://read.readwise.io/read/01kjsxt6h9krmgengyx6b3bftp))
