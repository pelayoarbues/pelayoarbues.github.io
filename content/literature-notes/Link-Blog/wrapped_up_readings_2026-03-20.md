---
title: Wrapped-up Readings 2026-03-20
date: 2026-03-20
tags:
  - link-blog
---

I watched Zhipu’s 0.9B GLM-OCR top OmniDocBench and nip at Gemini‑3‑Pro, and it confirmed my bias—echoing Software Gets Personal for Organizations and Teams—that a scalpel at the edge beats a Swiss Army knife in the cloud when the cut is specific. I also see the pennies‑per‑1,000‑pages math making mass automation unavoidable, so I treat governance as product design: cultural permission, trust, and tiered guardrails like BBVA’s custom GPTs and Honda’s encoded Waigaya.

## AI

- ['Software Gets Personal for Organizations and Teams'](https://medium.com/@girardin/software-gets-personal-for-organizations-and-teams-2706b7f3bd22): Generative AI lets non-developers rapidly create personal software, shifting orgs from build/buy to enable. Tools built near the problem serve the long tail, reveal shadow IT signals, and mirror real work. Success needs cultural permission, trust, and tiered governance. BBVA shows scale: thousands of custom GPTs save time, raise quality, spur innovation. Honda encodes its Waigaya culture in agents. Above all, learning, not uniformity, becomes the product.
- ['Zhipu Launches 0.9B Lightweight GLM-OCR: Performance Leads the Market, Processing 1,000 Tasks for Just $0.1'](https://www.aibase.com/news/25178): Zhipu released GLM-OCR, a 0.9B multimodal OCR that tops OmniDocBench V1.5 with 94.6, nearing Gemini-3-Pro. It excels at text, formulas, complex tables (HTML), KIE (JSON), handwriting, code, stamps, and multilingual layouts. It runs fast (1.86 pages/s), supports vLLM/Ollama, and is very cost-effective (~0.2 yuan/million tokens; ~0.5 yuan per 1,000 pages). Built on GLM-V with CogViT, MTP, RL, down-sampling, SwiGLU. Open-sourced with APIs.
