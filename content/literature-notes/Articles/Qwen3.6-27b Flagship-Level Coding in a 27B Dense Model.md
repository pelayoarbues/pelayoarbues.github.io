---
author: "[[Qwen Team]]"
title: 'Qwen3.6-27b: Flagship-Level Coding in a 27B Dense Model'
date: "2026-04-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://img.alicdn.com/imgextra/i1/O1CN013ltlI61OTOnTStXfj_!!6000000001706-55-tps-330-327.svg)

## Metadata
- Author: [[Qwen Team]]
- Full Title: Qwen3.6-27b: Flagship-Level Coding in a 27B Dense Model
- URL: https://qwen.ai/blog?id=qwen3.6-27b

## Highlights
- Following the launch of [Qwen3.6-Plus](https://qwen.ai/blog?id=qwen3.6) and [Qwen3.6-35B-A3B](https://qwen.ai/blog?id=qwen3.6-35b-a3b), we are excited to open-source **Qwen3.6-27B** — a dense 27-billion-parameter multimodal model at the scale the community has been asking for most. Still supporting both multimodal thinking and non-thinking modes, Qwen3.6-27B delivers flagship-level agentic coding performance, **surpassing the previous-generation open-source flagship Qwen3.5-397B-A17B** (397B total / 17B active MoE) across all major coding benchmarks. As a dense architecture, it is straightforward to deploy without MoE routing complexity, making it an ideal choice for developers who need top-tier coding capabilities at a practical, widely-deployable scale. Qwen3.6-27B is now live on Qwen Studio, available through our API, and released as open weights for the community. ([View Highlight](https://read.readwise.io/read/01kpv00czq73cg2an65stqr702))
- ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.6/Figures/qwen3.6_27b_score.png) ([View Highlight](https://read.readwise.io/read/01kpv00zwdkz6dbjvn1dsdm71m))
- ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.6/Figures/qwen3.6_27b_score.png) ([View Highlight](https://read.readwise.io/read/01kpv00zwyc679h4gay62zg801))
- ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.6/Figures/qwen3.6_27b_score.png) ([View Highlight](https://read.readwise.io/read/01kpv010pg9mtmb6cb596h2n2b))
- ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.6/Figures/qwen3.6_27b_score.png) ([View Highlight](https://read.readwise.io/read/01kpv010ytxm3zh4k4cw0861bc))
- Below we present comprehensive evaluations of Qwen3.6-27B against both dense and MoE baselines, including our previous-generation open-source flagship Qwen3.5-397B-A17B. Qwen3.6-27B delivers remarkable improvements across agentic coding benchmarks, surpassing models with up to 15x its total parameter count. ([View Highlight](https://read.readwise.io/read/01kpv012seyqtph1a90ds2khb4))
- Qwen3.6-27B achieves a breakthrough in agentic coding for dense models. With only 27B parameters, it outperforms the Qwen3.5-397B-A17B (397B total / 17B active) on every major coding benchmark — including SWE-bench Verified (77.2 vs. 76.2), SWE-bench Pro (53.5 vs. 50.9), Terminal-Bench 2.0 (59.3 vs. 52.5), and SkillsBench (48.2 vs. 30.0). It also surpasses all peer-scale dense models by a wide margin. On reasoning tasks, Qwen3.6-27B achieves 87.8 on GPQA Diamond, competitive with models several times its size. ([View Highlight](https://read.readwise.io/read/01kpv014a0ytr2yqrw6zdbky55))
- Qwen3.6-27B is natively multimodal, supporting both vision-language thinking and non-thinking modes in a single unified checkpoint — the same as Qwen3.6-35B-A3B. It handles images and video alongside text, enabling multimodal reasoning, document understanding, and visual question answering. ([View Highlight](https://read.readwise.io/read/01kpv02n6x0fhz64zs55qqv7pr))
- The model can be seamlessly integrated with popular third-party coding assistants, including OpenClaw, Claude Code, and Qwen Code, to streamline development workflows and enable efficient, context-aware coding experiences. ([View Highlight](https://read.readwise.io/read/01kpv030b32qa2anyq91z7h2v2))
- Qwen3.6-27B features excellent agentic coding capabilities and can be seamlessly integrated into popular third-party coding assistants, including OpenClaw, Claude Code, and Qwen Code. ([View Highlight](https://read.readwise.io/read/01kpv038kxt2xgrrdb5fdmae84))
- **Qwen3.6-27B** is a fully open-source dense model (27B parameters), featuring:
  • flagship-level agentic coding that surpasses Qwen3.5-397B-A17B
  • strong text and multimodal reasoning ability ([View Highlight](https://read.readwise.io/read/01kpv00ypzq6h6zzzvjep1jpzb))

