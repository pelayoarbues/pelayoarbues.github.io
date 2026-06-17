---
author: "[[deepcogito.com]]"
title: 'Cogito V1 Preview Introducing IDA as a Path to General Superintelligence'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://deep-cogito-website.vercel.app/OGImage_CogitoV1Preview.png)

## Metadata
- Author: [[deepcogito.com]]
- Full Title: Cogito V1 Preview Introducing IDA as a Path to General Superintelligence
- URL: https://www.deepcogito.com/research/cogito-v1-preview

## Highlights
- We are releasing the strongest LLMs of sizes **3B, 8B, 14B, 32B** and **70B** under open license. Each model outperforms the best available open models of the same size, including counterparts from LLaMA, DeepSeek, and Qwen, across most standard benchmarks. In particular, the 70B model also outperforms the newly released Llama 4 109B MoE model. ([View Highlight](https://read.readwise.io/read/01jrdydncmvzfhtp38v3b5x9jc))
- The LLMs are trained using **Iterated Distillation and Amplification (IDA)** - a scalable and efficient alignment strategy for general superintelligence using iterative self-improvement. ([View Highlight](https://read.readwise.io/read/01jrdydqp4gpf0hg36ycs8zsry))
- AlphaGo, followed by many other game-playing AIs, demonstrated that AI systems can achieve superhuman performance in narrow domains. When we study these superintelligent systems, we find two key ingredients enabled this breakthrough:
  • Advanced Reasoning: The capacity to derive significantly improved solutions with increased compute.
  • Iterative Self-Improvement: The capacity to refine intelligence in a manner not strictly bounded by an external overseer's capabilities. ([View Highlight](https://read.readwise.io/read/01jrdye4q73zz72wh5tr8mtna9))
- ecent research in LLMs has made significant progress in reasoning capabilities. However, current LLM training paradigms inherently limit intelligence to the capabilities of their overseers:
  • Smaller models inherit the upper bound of intelligence from the larger models they're distilled from.
  • The largest models, typically trained on human-curated data, remain constrained by human overseers' intellectual capabilities. ([View Highlight](https://read.readwise.io/read/01jrdyebsd6066f9crhjcjc8xx))
- Although improved reasoning alone may bring us closer to Artificial General Intelligence (AGI), achieving general superintelligence requires surpassing these inherent overseer limitations. ([View Highlight](https://read.readwise.io/read/01jrdyet203kanedhprjf81xt0))
- We train LLMs through **Iterated Distillation and Amplification (IDA)** ([1](https://arxiv.org/pdf/1810.08575), [2](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616)) - an alignment strategy which is not upper bounded by overseer intelligence.
  Concretely, each iteration involves the following steps:
  • Step 1 (Amplification) - Creating higher intelligence capabilities via subroutines that usually involve more computation.2
  • Step 2 (Distillation) - Distilling the higher intelligence back to the model's parameters to internalize the amplified capability. ([View Highlight](https://read.readwise.io/read/01jrdyf790s5dvv5tstdpw3pyn))
- We use more computation to let the model arrive at a better solution, and then distill the expensive thinking process to the model's own parameters. As the LLM improves in intelligence, the thinking process itself becomes more powerful. ([View Highlight](https://read.readwise.io/read/01jrdyfg5dn6c6r00779tmbfy0))
- By repeating these two steps, each cycle builds upon the progress of the previous iteration. This iterative framework creates a positive feedback loop in which the model's capabilities are increasingly determined by computational resources and the efficacy of the amplification-distillation process, rather than by the original overseer's limitations. ([View Highlight](https://read.readwise.io/read/01jrdyfq3arcx4s2cr1n07fvt9))
- Our initial experiments indicate that this approach can systematically improve model performance and generalize to most tasks.3 In addition, IDA is both more efficient time-wise, and more scalable, than other popular approaches like RLHF and distillation from larger models. ([View Highlight](https://read.readwise.io/read/01jrdyfx0m043t5qjyg3qqq0sz))
- We are releasing early checkpoints of models in sizes **3B, 8B, 14B, 32B** and **70B** trained using this methodology, starting from pretrained Llama / Qwen base checkpoints.
  • The models are optimized for coding, function calling, and agentic use cases.
  • Each model can function in a standard mode as well as a reasoning mode.
  • Unlike most reasoning models, we have not optimized for very long reasoning chains.4
  We expect to release larger models (MoEs of sizes **109B, 400B, 671B**) as well as updated checkpoints in the coming weeks / months. ([View Highlight](https://read.readwise.io/read/01jrdygmn16trwcjwtrc1ge908))
