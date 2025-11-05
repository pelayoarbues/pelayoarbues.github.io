---
author: "[[unsloth.ai]]"
title: '🐳DeepSeek-Ocr: Run & Fine-Tune'
date: "2025-11-05"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://docs.unsloth.ai/~gitbook/image?url=https%3A%2F%2F2815821428-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FHpyELzcNe0topgVLGCZY%252Fsites%252Fsite_mXXTe%252Fsocialpreview%252FOeFDVbzp4cgwaId7PbvL%252Funsloth%2520docs%2520pic.png%3Falt%3Dmedia%26token%3Df34a6bcc-db15-449a-bc2d-e0e8f52fe953&width=1200&height=630&sign=3e009e0f&sv=2)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: 🐳DeepSeek-Ocr: Run & Fine-Tune
- URL: https://docs.unsloth.ai/new/deepseek-ocr

## Highlights
- **DeepSeek-OCR** is a 3B-parameter vision model for OCR and document understanding. It uses *context optical compression* to convert 2D layouts into vision tokens, enabling efficient long-context processing. ([View Highlight](https://read.readwise.io/read/01k9a9g8dqe58qk5mfhphdhptt))
- You can fine-tune DeepSeek-OCR to enhance its vision or language performance. In our Unsloth [**free fine-tuning notebook**](https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/Deepseek_OCR_(3B).ipynb), we demonstrated a [88.26% improvement](https://docs.unsloth.ai/new/deepseek-ocr-run-and-fine-tune#fine-tuning-deepseek-ocr) for language understanding. ([View Highlight](https://read.readwise.io/read/01k9a9ge1d0jfncn4ttgexb13v))
- Fine-tuning DeepSeek-OCR on a 200K sample Persian dataset resulted in substantial gains in Persian text detection and understanding. We evaluated the base model against our fine-tuned version on 200 Persian transcript samples, observing an **88.26% absolute improvement** in Character Error Rate (CER). After only 60 training steps (batch size = 8), the mean CER decreased from **149.07%** to a mean of **60.81%**. This means the fine-tuned model is **57%** more accurate at understanding Persian. ([View Highlight](https://read.readwise.io/read/01k9a9gr8xj6246kwxmz10atd4))
