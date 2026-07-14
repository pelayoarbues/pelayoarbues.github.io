---
author: "[[Chris Alexiuk]]"
title: 'NVIDIA Nemotron 3 Ultra Powers Faster, More Efficient Reasoning for Long-Running Agents | NVIDIA Technical Blog'
date: "2026-07-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/Nemotron-3-Ultra.webp)

## Metadata
- Author: [[Chris Alexiuk]]
- Full Title: NVIDIA Nemotron 3 Ultra Powers Faster, More Efficient Reasoning for Long-Running Agents | NVIDIA Technical Blog
- URL: https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/

## Highlights
- Single-turn chatbots are evolving into long-running [agents](https://www.nvidia.com/en-us/glossary/ai-agents/) that can reason, maintain context, use tools, and run efficiently across many turns to complete complex workflows.
  However, these [multi-agent](https://www.nvidia.com/en-us/glossary/multi-agent-systems/) workflows cause token counts to grow quickly. Agents plan, call tools, invoke sub-agents, receive information, and then pass history, outputs, and [reasoning](https://www.nvidia.com/en-us/glossary/ai-reasoning/) steps back into the model continuously. As tasks run longer, this constant communication increases costs and the risk of goal drift.
  Developers can solve this using a system of models: [frontier reasoning models](https://www.nvidia.com/en-us/glossary/frontier-models/) for orchestration and complex planning, and efficient models for high-volume execution, validation, and tool calling.
  NVIDIA is releasing NVIDIA Nemotron 3 Ultra, an open model built to help long-running agents complete tasks faster while lowering cost. ([View Highlight](https://read.readwise.io/read/01kxgax27ge7cz1spngtraw64c))
- Nemotron 3 Ultra for agent orchestration[](https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/#nemotron_3_ultra_for_agent_orchestration)
  Nemotron 3 Ultra is a 550B-parameter Mixture-of-Experts model with 55B active parameters, built for frontier reasoning and orchestration in agentic systems. 
  Within any agent workflow, most calls are routine, but a critical subset demands deeper reasoning. Nemotron 3 Ultra is built to handle these hard calls: sustaining architectural decisions across coding sessions, synthesizing contradictory evidence across hundreds of research sources, or verifying chip designs across thousands of constraints. ([View Highlight](https://read.readwise.io/read/01kxgax6xw6w8s0fjztjraz0yh))
- Nemotron 3 Ultra is also fast. It achieves 5x higher throughput compared to other open models in its class, enabling long-running agents to complete tasks faster and more efficiently. 
  ![The chart shows frontier open models on an accuracy v. output speed benchmark from Artificial Analysis. Nemotoron 3 Ultra is 5x faster and the only model in the most attractive quadrant.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/5x-Inference-1.webp)
  ![The chart shows frontier open models on an accuracy v. output speed benchmark from Artificial Analysis. Nemotoron 3 Ultra is 5x faster and the only model in the most attractive quadrant.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/5x-Inference-1.webp) ([View Highlight](https://read.readwise.io/read/01kxgaxapkr1kqmae2x6sa4b67))
- Nemotron 3 Ultra is also built for efficiency. In experiments on the SWE-bench and Terminal bench 2.0, it completed benchmarks using fewer total tokens and fewer tokens per turn than comparable models. This lowers the cost for agentic tasks by up to 30%.
  ![The chart plots Pareto curves of open models on Accuracy v. Cost to Task Completion. Nemotron 3 Ultra delivers 30% cost savings to complete SWE Bench verified benchmark.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/Cost-Completion.webp)
  ![The chart plots Pareto curves of open models on Accuracy v. Cost to Task Completion. Nemotron 3 Ultra delivers 30% cost savings to complete SWE Bench verified benchmark.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/Cost-Completion.webp) ([View Highlight](https://read.readwise.io/read/01kxgaxg142fkypkffkaf9w2q0))
- Breakthroughs powering Nemotron 3 Ultra [](https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/#breakthroughs_powering_nemotron_3_ultra )
  To mitigate the typical efficiency-accuracy tradeoffs for high-capacity reasoning models, the Nemotron models introduce architectural innovations:
  **Post-trained for agent harness** 
  Nemotron Ultra is post-trained to deliver consistent accuracy across top harnesses. The model is trained using the NVIDIA [NeMo RL](https://github.com/nvidia-nemo/rl) and [Gym](https://github.com/NVIDIA-NeMo/gym) open libraries with one of the largest suites of long-running, task-solving, tool-using datasets in the world.  
  Ultra is optimized for agent-led open harnesses, not just single-turn chat, and is designed to work within workflows where agents plan, call tools, read observations, delegate to sub-agents, validate outputs, and recover from errors across many turns. ([View Highlight](https://read.readwise.io/read/01kxgaxyfv0ky94dg4nmt2nyaa))
- **Hybrid Mamba transformer** 
  Mamba layers improve sequence efficiency for long-context workloads, while Transformer layers preserve precise recall when agents need to retrieve specific facts from large context windows. ([View Highlight](https://read.readwise.io/read/01kxgay32neeve32xf8jp486ve))
- **NVFP4 precision** 
  The same NVFP4 checkpoint runs on NVIDIA Hopper, NVIDIA Blackwell, and Ampere GPUs. Developers can use one checkpoint across all NVIDIA GPU architectures thanks to specialized NVFP4 quantization kernels. NVFP4 also delivers up to 5x higher throughput per GPU at the same interactivity compared to BF16 on Blackwell.
  **LatentMoE** 
  LatentMoE supports more efficient expert routing, enabling the model to handle workflows spanning reasoning, code generation, tool calls, and domain-specific logic.
  **Multi-token prediction** 
  Multi-token prediction (MTP) helps reduce generation time by predicting multiple future tokens in a single forward pass, improving throughput for long outputs and multi-turn workflows. ([View Highlight](https://read.readwise.io/read/01kxgay71mtdvr2vyb4r2mzz8n))
- Nemotron 3 Ultra adds Multi-Teacher On-Policy Distillation[](https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/#nemotron_3_ultra_adds_multi-teacher_on-policy_distillation)
  Multi-Teacher On-Policy Distillation (MOPD) is a training method in which Ultra learns from multiple specialized teacher models while generating its own attempts during training. More than 10 specialized teacher models are trained, each with its own domain-specific training pipeline. Each teacher scores the model in its area of expertise, helping Ultra improve reasoning across domains more efficiently.
  ![The image describes the phases, and specific teacher and checkpoint interaction used for Nemotron 3 Ultra MOPD phase.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/MOPD.webp)
  ![The image describes the phases, and specific teacher and checkpoint interaction used for Nemotron 3 Ultra MOPD phase.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/MOPD.webp)
  *Figure 4. A visual guide to MOPD and the specific flow used for Nemotron 3 Ultra*
  During MOPD, the student model generates rollouts across domains and receives dense reward signals from the corresponding teacher models. To maximize efficiency, MOPD runs asynchronously, with student rollout generation, teacher scoring, and student optimization fully pipelined. ([View Highlight](https://read.readwise.io/read/01kxgayd6w1vt1nef1y6c4bkeg))
- MOPD is also iterative. After producing an MOPD-trained checkpoint, new rounds of teacher training are initialized from the updated student model, and the improvements are merged into the next MOPD stage. 
  This co-evolution between students and teachers enables continuous capability improvement and progressively stronger specialization across domains. Users can try [MOPD recipes](https://github.com/NVIDIA-NeMo/RL/blob/ultra-v3/docs/guides/nemotron-3-ultra.md) through NeMo-RL, the library that trained the Ultra model. ([View Highlight](https://read.readwise.io/read/01kxgayg1wrsaxv9xv3f0mrng2))
- Training data for stronger agent reasoning[](https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/#training_data_for_stronger_agent_reasoning)
  As with all Nemotron open model launches, much of the training data pipeline is released as permissively as possible. For partners in enterprise and sovereign AI development, training data transparency and provenance matter as much as capability.
  **Domain-specific pre-training data** 
  Building on a 10T token pre-training foundation, Nemotron 3 Ultra adds 212B new tokens targeting three high-value domain gaps:
  • **4B tokens** of synthetic legal data, increasing the proxy LegalBench average from 64.6% to 74.7%
  • **35B tokens** of synthesized Wiki-based data, boosting proxy SimpleQA from 40.2% to 50.2%
  • **173B refreshed GitHub tokens** through Sept. 30, 2025 ([View Highlight](https://read.readwise.io/read/01kxgayn63axm1h9jvp7dg6f27))
- **Post-training data and RL environments**
  This launch is also releasing 10M new SFT samples, 1M new RL tasks across multiple domains, and 15 net-new RL environments, bringing the cumulative Nemotron open data totals to 50M SFT samples, 2M RL tasks, and 55 RL environments.
  The result is SWEBench Verified scores between 65% and 70.4% across Pi, OpenHands, Hermes, OpenCode, and Mini SWE Agent—consistent performance regardless of which framework you deploy. ([View Highlight](https://read.readwise.io/read/01kxgaypqz6g82mcnt8y8nktcc))
- Nemotron 3 Ultra can be fine-tuned using LoRA, SFT, and reinforcement learning using the NVIDIA [NeMo libraries](https://github.com/NVIDIA-NeMo). Developers can get started with the following recipes.
  Nemotron 3 Ultra Recipes:
  • SFT LoRA: NeMo Automodel ([H100 Recipe](https://github.com/NVIDIA-NeMo/Automodel/blob/main/examples/llm_finetune/nemotron/nemotron_ultra_v3_hellaswag_peft.yaml), [GB200 Recipe)](https://github.com/NVIDIA-NeMo/Automodel/blob/main/examples/llm_finetune/nemotron/nemotron_ultra_v3_hellaswag_peft_gb200.yaml)
  • Full SFT: NeMo Megatron Bridge [Recipes](https://github.com/NVIDIA-NeMo/Megatron-Bridge/tree/nemotron_3_ultra/examples/models/nemotron/nemotron_3/ultra)
  • Reinforcement Learning: NeMo RL [GRPO recipe](https://github.com/NVIDIA-NeMo/RL/blob/ultra-v3/docs/guides/nemotron-3-ultra.md), [GRPO LoRA recipe](https://github.com/NVIDIA-NeMo/Nemotron/tree/main/usage-cookbook/Nemotron-3-Ultra), [MOPD recipe](https://github.com/NVIDIA-NeMo/RL/blob/ultra-v3/docs/guides/nemotron-3-ultra.md)
  **Deployment**
  Deploy Nemotron Ultra using [Dynamo Recipes](https://github.com/ai-dynamo/dynamo/tree/main/recipes/nemotron-3-ultra), for KV-aware routing, multi-token prediction (MTP), and disaggregated prefill/decode. ([View Highlight](https://read.readwise.io/read/01kxgayys3614jm3wb4ykhrnft))
