---
author: "[[unsloth.ai]]"
title: '🐳DeepSeek-Ocr-2: How to Run & Fine-Tune'
date: "2026-01-27"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F2815821428-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FHpyELzcNe0topgVLGCZY%252Fsites%252Fsite_mXXTe%252Fsocialpreview%252FOeFDVbzp4cgwaId7PbvL%252Funsloth%2520docs%2520pic.png%3Falt%3Dmedia%26token%3Df34a6bcc-db15-449a-bc2d-e0e8f52fe953&width=1200&height=630&sign=b1ca68fa&sv=2)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: 🐳DeepSeek-Ocr-2: How to Run & Fine-Tune
- URL: https://unsloth.ai/docs/models/deepseek-ocr-2

## Highlights
- **DeepSeek-OCR 2** is the new 3B-parameter model for SOTA vision and document understanding released on Jan 27, 2026 by DeepSeek. The model focuses on image-to-text with stronger visual reasoning, not just text extraction.
  DeepSeek-OCR 2 introduces DeepEncoder V2, which enables the model to 'see' an image in the same logcal order as a human.
  Unlike traditional vision LLMs that scan images in a fixed grid (top-left → bottom-right), DeepEncoder V2 builds a global understanding first, then learns a human-like reading order—what to attend to first, next, and so on. This boosts OCR on complex layouts by better following columns, linking labels to values, reading tables coherently, and handling mixed text + structure. ([View Highlight](https://read.readwise.io/read/01kfzrxn9crw72gm9xa8n4mjse))
- Benchmarks for DeepSeek-OCR 2 model are derived from the official research paper.
  **Table 1:** Comprehensive evaluation of document reading on OmniDocBench v1.5. V-token𝑚𝑎𝑥 represents the maximum number of visual tokens used per page in this benchmark. R-order denotes reading order. Except for DeepSeek OCR and DeepSeek OCR 2, all other model results in this table are sourced from the OmniDocBench repository. ([View Highlight](https://read.readwise.io/read/01kfzrybegntr4qww5qjca4vj9))
