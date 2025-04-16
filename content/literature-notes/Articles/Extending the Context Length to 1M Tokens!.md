---
author: [[Qwen Team]]
title: "Extending the Context Length to 1M Tokens!"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](http://qwenlm.github.io/%3Clink%20or%20path%20of%20image%20for%20opengraph,%20twitter-cards%3E)

## Metadata
- Author: [[Qwen Team]]
- Full Title: Extending the Context Length to 1M Tokens!
- URL: https://qwenlm.github.io/blog/qwen2.5-turbo/

## Highlights
- **Longer Context Support**: We have extended the model’s context length from 128k to **1M**, which is approximately **1 million English words or 1.5 million Chinese characters**, equivalent to 10 full-length novels, 150 hours of speech transcripts, or 30,000 lines of code. The model achieves **100%** accuracy in the 1M length Passkey Retrieval task and scores **93.1** on the long text evaluation benchmark RULER, surpassing GPT-4’s 91.6 and GLM4-9B-1M’s 89.9. Additionally, the model maintains very strong competitiveness in short sequence capabilities, on par with GPT-4o-mini. ([View Highlight](https://read.readwise.io/read/01jd0e5j5cmnaxh8jr25jq2qe5))
- **Faster Inference Speed**: Using sparse attention mechanisms, we successfully reduced the time to first token for processing a context of 1M tokens from 4.9 minutes to 68 seconds, **achieving a 4.3x speedup**. ([View Highlight](https://read.readwise.io/read/01jd0e5ktx3f86zwr27szp3hy2))
- **Lower Cost**: The price remains ¥0.3 / 1M tokens. At the same cost, Qwen2.5-Turbo can process **3.6 times the number of tokens** as GPT-4o-mini. ([View Highlight](https://read.readwise.io/read/01jd0e5mv49c2m23sctjg1nc3t))
- ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5-Turbo/cover_en.png) ([View Highlight](https://read.readwise.io/read/01jd0e5nxfhmrdgjyd8e82xa3x))
- In addition to performance improvements in tasks of long context, we are also concerned about the model’s performance in tasks of short context. The existing context length extension methods often lead to significant performance degradation when processing short texts. Therefore, we have paid special attention to this issue when building Qwen2.5-Turbo, ensuring that the extension of context length almost does not affect the ability of short text understanding. ([View Highlight](https://read.readwise.io/read/01jd0e6adshx0x8wkmzw1msbba))
- Results on short text benchmarks show that Qwen2.5-Turbo significantly surpasses previous open-source models with a context length of 1M tokens in most tasks; compared to GPT-4o-mini and Qwen2.5-14B-Instruct models, Qwen2.5-Turbo achieves similar performance in short text tasks while supporting 8 times the context length. ([View Highlight](https://read.readwise.io/read/01jd0e6ea8qjvgh94q9nts89q8))
- We tested the TTFT (time to first token) for inputs of different lengths. On the sequences of 1M tokens, we used sparse attention to compress the computation of the attention by about 12.5 times, achieving a speedup of 3.2 to 4.3 times under different hardware configurations. ([View Highlight](https://read.readwise.io/read/01jd0e6sfp535w48f3fnm6m7kc))
- While we are pleased to finally extend the context of Qwen2.5-Turbo to 1M tokens, we also recognize that the current model does not always perform satisfactorily when solving long sequence tasks in real applications. There are many unresolved challenges, such as the model’s performance being more unstable in long sequence tasks, and the cost of inference making it difficult to use larger models. However, we will actively explore further alignment of human preferences in long sequences, optimize inference efficiency to reduce computation time, and attempt to launch larger and stronger long-context models. We look forward to sharing new progress in developing long-context models with you soon, so stay tuned! ([View Highlight](https://read.readwise.io/read/01jd0e6x20858qtbmwctbck6m8))
