---
author: "[[unsloth.ai]]"
title: '💜Qwen3.5 - How to Run Locally Guide'
date: "2026-02-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F2815821428-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FHpyELzcNe0topgVLGCZY%252Fsites%252Fsite_mXXTe%252Fsocialpreview%252FOeFDVbzp4cgwaId7PbvL%252Funsloth%2520docs%2520pic.png%3Falt%3Dmedia%26token%3Df34a6bcc-db15-449a-bc2d-e0e8f52fe953&width=1200&height=630&sign=b1ca68fa&sv=2)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: 💜Qwen3.5 - How to Run Locally Guide
- URL: https://share.google/cVQncipiwmhEAgrfR

## Highlights
- Qwen3.5 is Alibaba’s new model family, including Qwen3.5-**35B**-A3B, **27B**, **122B**-A10B and **397B**-A17B. The multimodal hybrid reasoning LLMs deliver the strongest performances for their sizes. They support **256K context** across 201 languages, have **thinking** and **non-**thinking modes, and excel in agentic coding, vision, chat, and long-context tasks. The 35B and 27B models work on a 21GB Mac / RAM device. See all [GGUFs here](https://huggingface.co/collections/unsloth/qwen35). ([View Highlight](https://read.readwise.io/read/01kjjzrwv5spfj0pasbvb8h39p))
- For best performance, make sure your total available memory (VRAM + system RAM) exceeds the size of the quantized model file you’re downloading. If it doesn’t, llama.cpp can still run via SSD/HDD offloading, but inference will be slower. ([View Highlight](https://read.readwise.io/read/01kjjzwtrm3vgjjj20bs26cmnc))
- Between **27B** and **35B-A3B**, use 27B if you want slightly more accurate results and can't fit in your device. Go for 35B-A3B if you want much faster inference. ([View Highlight](https://read.readwise.io/read/01kjjzwxmt03v0j93k3heyem3w))
- `presence_penalty = 0.0 to 2.0` default this is off, but to reduce repetitions, you can use this, however using a higher value may result in **slight decrease in performance** ([View Highlight](https://read.readwise.io/read/01kjjzx45r99c4d807xawbx8ka))
