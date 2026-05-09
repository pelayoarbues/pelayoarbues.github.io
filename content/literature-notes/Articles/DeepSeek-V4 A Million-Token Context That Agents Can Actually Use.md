---
author: "[[Hugging Face - Blog]]"
title: 'DeepSeek-V4: A Million-Token Context That Agents Can Actually Use'
date: "2026-04-25"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/front/thumbnails/blog.png)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: DeepSeek-V4: A Million-Token Context That Agents Can Actually Use
- URL: https://huggingface.co/blog/deepseekv4

## Highlights
- DeepSeek released V4 today. Two MoE checkpoints are on the Hub: DeepSeek-V4-Pro at 1.6T total parameters with 49B active, and DeepSeek-V4-Flash at 284B total with 13B active. Both have a 1M-token context window. The benchmark numbers are competitive, but not SOTA. It doesn't matter. The real innovation is how DeepSeek v4 is designed for efficient large context length support, and hence as one of the best candidates for agentic tasks. ([View Highlight](https://read.readwise.io/read/01kq21qbyxfn2cra4rm7y8zj40))
- Focusing on long running agentic workloads. Running a frontier open model as an agent today breaks in predictable ways. The model stops. You reprompt. The trace blows past the context budget, or the KV cache fills the GPU, or tool-call round trips degrade halfway through a long task. **V4 is built to fix these known failures**, and point the way for the community to follow. ([View Highlight](https://read.readwise.io/read/01kq21qp7czna456s17g7m86pf))
- This post covers three things: what the architecture does differently to make long-context inference cheap, the agent-specific post-training decisions that compound on top of it, and some takeaways from the paper that help reason about these changes. ([View Highlight](https://read.readwise.io/read/01kq21qz3j66hb5z1fap9g5w90))
- A 1M context window is just capacity, not performance. Whether you can use it depends on the cost of every forward pass at that depth. For an agent running a long tool-use trajectory (a SWE-bench task, a multi-step browse session, a terminal session with hundreds of commands), every tool result is appended to the context, and every subsequent token pays the full attention cost against everything that came before. ([View Highlight](https://read.readwise.io/read/01kq21r681ndb9hw43rpq9m12f))
- Two numbers matter: single-token inference FLOPs and KV cache size. Both grow with sequence length. At 1M tokens, DeepSeek-V4-Pro requires 27% of single-token inference FLOPs compared with DeepSeek-V3.2, so it runs faster on the same hardware. It also uses 10% of the KV cache memory. V4-Flash drops these numbers even further: 10% of the FLOPs and 7% of the KV cache. ([View Highlight](https://read.readwise.io/read/01kq21rgqfm4x10ykhxddmga08))
- The efficiency gain comes from splitting attention into two mechanisms and interleaving them across layers.
  **Compressed Sparse Attention (CSA)** compresses KV entries by 4x along the sequence dimension using softmax-gated pooling with a learned positional bias. A lightning indexer (FP4, ReLU-scored multi-head dot product) picks the top-k compressed blocks per query. It inherits the sparse-selection idea from DeepSeek Sparse Attention in V3.2, but runs it over blocks that are already 4x shorter than the original sequence. The indexer's search space shrinks with it. ([View Highlight](https://read.readwise.io/read/01kq21s3a1f7brn3m8s2vxf4v6))
- **Heavily Compressed Attention (HCA)** compresses KV entries by 128x and drops the sparse selection. Every query attends densely to every compressed block. The compressed sequence is short enough that dense attention is cheap.
  [![](https://huggingface.co/buckets/burtenshaw/deepseek-v4-figures/resolve/v4_fig4_hca.png)](https://huggingface.co/buckets/burtenshaw/deepseek-v4-figures/resolve/v4_fig4_hca.png) ([View Highlight](https://read.readwise.io/read/01kq21sesynab4srrj0zzqp9w2))
- V4 preserves reasoning content across user message boundaries when the conversation contains tool calls. The model retains the complete reasoning history across all rounds, including across user turns. This allows a coherent, cumulative chain of thought over long-horizon agent tasks. For conversational use without tools, the old behavior is preserved: reasoning is flushed on each turn to keep context concise.
  [](https://huggingface.co/buckets/burtenshaw/deepseek-v4-figures/resolve/v4_fig7_thinking.png) ([View Highlight](https://read.readwise.io/read/01kq21v23pw96k6tdxc0z9prhe))
- V4 introduces a `|DSML|` special token and an XML-based tool-call format. The XML format reduces escaping failures compared to JSON-in-string tool calls, a common failure mode when models emit nested quoted content.
  The schema separates string parameters (passed as-is with `string="true"`) from structured parameters (passed as JSON with `string="false"`). This removes a class of parsing errors around numbers and booleans that JSON tool-call formats routinely hit.
  The agent behavior was trained with RL against real tool environments. The paper describes the sandbox infrastructure built for that purpose. DeepSeek Elastic Compute (DSec) is a Rust platform that exposes four execution substrates behind one Python SDK: function calls, containers, microVMs (Firecracker), and full VMs (QEMU). A single cluster runs hundreds of thousands of concurrent sandboxes.
  Three DSec features matter for agent training: fast image loading via layered 3FS storage (so RL rollouts do not wait on container startup), preemption-safe trajectory replay (so interrupted training steps resume without re-running tool calls), and a uniform API across substrates (so training harnesses target function calls or full VMs without rewriting). These infrastructure decisions underpin the agent benchmark scores. ([View Highlight](https://read.readwise.io/read/01kq21vrw9z9vm9ryrh8nzq0kd))
