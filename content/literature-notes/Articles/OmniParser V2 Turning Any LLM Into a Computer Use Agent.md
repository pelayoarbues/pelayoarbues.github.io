---
author: "[[Microsoft Research]]"
title: 'OmniParser V2: Turning Any LLM Into a Computer Use Agent'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.microsoft.com/en-us/research/uploads/prod/2025/02/header_bar.png)

## Metadata
- Author: [[Microsoft Research]]
- Full Title: OmniParser V2: Turning Any LLM Into a Computer Use Agent
- URL: https://www.microsoft.com/en-us/research/articles/omniparser-v2-turning-any-llm-into-a-computer-use-agent/

## Highlights
- Graphic User interface (GUI) automation requires agents with the ability to understand and interact with user screens. However, using general purpose LLM models to serve as GUI agents faces several challenges: 1) reliably identifying interactable icons within the user interface, and 2) understanding the semantics of various elements in a screenshot and accurately associating the intended action with the corresponding region on the screen. OmniParser closes this gap by ‘tokenizing’ UI screenshots from pixel spaces into structured elements in the screenshot that are interpretable by LLMs. This enables the LLMs to do retrieval based next action prediction given a set of parsed interactable elements. ([View Highlight](https://read.readwise.io/read/01jmc3aez1j5p7n2re9yd4cm58))
- OmniParser V2 takes this capability to the next level. Compared to its [predecessor (opens in new tab)](https://www.microsoft.com/en-us/research/articles/omniparser-for-pure-vision-based-gui-agent/), it achieves higher accuracy in detecting smaller interactable elements and faster inference, making it a useful tool for GUI automation. In particular, OmniParser V2 is trained with a larger set of interactive element detection data and icon functional caption data. By decreasing the image size of the icon caption model, OmniParser V2 reduces the latency by 60% compared to the previous version. Notably, Omniparser+GPT-4o achieves state-of-the-art average accuracy of 39.6 on a recently released grounding benchmark [ScreenSpot Pro (opens in new tab)](https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding), which features high resolution screen and tiny target icons. This is a substantially improvement on GPT-4o’s original score of 0.8. ([View Highlight](https://read.readwise.io/read/01jmc3ahg3eymez2j66qc2eefx))
- To enable faster experimentation with different agent settings, we created OmniTool, a dockerized Windows system that incorporates a suite of essential tools for agents. Out of the box, we enable OmniParser to be used with a variety of state-of-the-art LLMs: OpenAI (4o/o1/o3-mini), DeepSeek (R1), Qwen (2.5VL) and Anthropic (Sonnet) combining the screen understanding, grounding, action planning and execution steps. ([View Highlight](https://read.readwise.io/read/01jmc3ay664nzayrp936v74nja))
