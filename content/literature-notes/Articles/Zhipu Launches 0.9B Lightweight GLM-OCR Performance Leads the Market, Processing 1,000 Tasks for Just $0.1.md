---
author: "[[AIbase]]"
title: 'Zhipu Launches 0.9B Lightweight GLM-OCR: Performance Leads the Market, Processing 1,000 Tasks for Just $0.1'
date: "2026-03-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[AIbase]]
- Full Title: Zhipu Launches 0.9B Lightweight GLM-OCR: Performance Leads the Market, Processing 1,000 Tasks for Just $0.1
- URL: https://www.aibase.com/news/25178

## Highlights
- Core Performance: SOTA Performance with Small Size
  Despite its parameter scale being only 0.9B, GLM-OCR performs surprisingly well. In the authoritative document parsing ranking **OmniDocBench V1.5**, it topped with an impressive score of **94.6**, with its performance approaching that of the general large model Gemini-3-Pro. It has achieved SOTA (industry-leading) results in text recognition, mathematical formula derivation, complex table parsing, and key information extraction (KIE).
  ![QQ20260203-085726.png](https://upload.chinaz.com/2026/0203/6390570589082983545871136.png "QQ20260203-085726.png") ([View Highlight](https://read.readwise.io/read/01kkv5v6700p9ay02n2psemba2))
- • **Complex Tables:** Supports merged cells and multi-level headers, directly outputting standard HTML code.
  • **Structured Extraction:** Intelligently recognizes cards, tickets, and documents, outputting standard JSON format.
  • **Handwriting and Code:** Perfectly compatible with handwritten formulas in education and research, as well as code screenshots from programmers.
  • **Special Markings:** Demonstrates high capability in stamp recognition and multilingual mixed layout processing. ([View Highlight](https://read.readwise.io/read/01kkv5vaa29xhffwxs36db875y))
- Extreme Efficiency: Faster Inference, Lower Cost
  In terms of efficiency and cost control, GLM-OCR demonstrates strong commercial competitiveness:
  • **Ultra-fast Inference:** PDF processing throughput reaches **1.86 pages/second**, significantly better than similar models; supports mainstream deployment methods such as vLLM and Ollama.
  • **Outstanding Cost-effectiveness:** API price is as low as **0.2 yuan per million Tokens**. Compared to traditional OCR solutions, the cost is only 1/10, and processing 1,000 A4 scanned pages costs about 0.5 yuan. ([View Highlight](https://read.readwise.io/read/01kkv5vefetfaqqysaz838kdab))
- Technical Insights: Multimodal Architecture and Reinforcement Learning
  GLM-OCR inherits the architecture from the GLM-V series and integrates the self-developed **CogViT visual encoder**. By introducing **Multi-Tokens Prediction Loss (MTP)** and full-task reinforcement learning, the model's generalization ability in complex layouts has been significantly improved. Its unique four-times down-sampling strategy and SwiGLU mechanism ensure efficient fusion of visual information and language decoder.
  Currently, GLM-OCR has been open-sourced on GitHub and Hugging Face, and the Zhipu Open Platform has also launched the related API and discount packages. ([View Highlight](https://read.readwise.io/read/01kkv5vj61cakj2z4ykrv7ja30))
