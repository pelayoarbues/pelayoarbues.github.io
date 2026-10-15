---
author: "[[NVIDIA Technical Blog]]"
title: 'NVIDIA Nemotron 3.5 Super VL Powers Specialized Agents With Multimodal Reasoning | NVIDIA Technical Blog'
date: "2026-10-15"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/2c86723c4a5c4ef5b63bceb44bd2cd05.jpg)

## Metadata
- Author: [[NVIDIA Technical Blog]]
- Full Title: NVIDIA Nemotron 3.5 Super VL Powers Specialized Agents With Multimodal Reasoning | NVIDIA Technical Blog
- URL: https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/?ncid=so-twit-170075

## Highlights
- Always-on agents are taking on longer, more complex enterprise workflows. A single request can involve reading a document, checking information across sources, following company policy, and calling several tools.
  NVIDIA Nemotron 3.5 Super VL is an open, customizable multimodal model for these specialized workflows. Its 120B-parameter [mixture-of-experts (MoE)](https://www.nvidia.com/en-us/glossary/mixture-of-experts/) architecture activates 12B parameters per token, balancing model capacity with inference efficiency. ([View Highlight](https://read.readwise.io/read/01m5040pkp37ecgqk06mpgw55z))
- On a single GPU, this model delivers up to 5x higher throughput for agentic tasks compared to other [open models](https://www.nvidia.com/en-us/glossary/open-models/) in its size category.
  ![Scatter plot comparing Artificial Analysis Intelligence Index scores and output speed for open-weight models with 100K input tokens. Nemotron 3.5 Super VL exceeds 600 output tokens per second; the chart marks a 5x speed comparison with Inkling Small.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/10/nemotron-super-vl-figure-1-updated.webp)
  ![Scatter plot comparing Artificial Analysis Intelligence Index scores and output speed for open-weight models with 100K input tokens. Nemotron 3.5 Super VL exceeds 600 output tokens per second; the chart marks a 5x speed comparison with Inkling Small.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/10/nemotron-super-vl-figure-1-updated.webp)
  *Figure 1. Nemotron 3.5 Super VL delivers over 600 TPS on Artificial Analysis Intelligence Index agentic tasks on the Baseten endpoint* ([View Highlight](https://read.readwise.io/read/01m50417fv2ghh65xxz8w0naav))
- The model combines reasoning, instruction following, and tool use with text, image, document, and video understanding. By combining these capabilities into one model, teams can handle text and visual tasks without deploying separate text and [vision-language models](https://www.nvidia.com/en-us/glossary/vision-language-models/) or passing task context between them.
  Developers can post-train Nemotron 3.5 Super VL with [NVIDIA NeMo](https://www.nvidia.com/en-us/ai-data-science/products/nemo/get-started/) using their own data, tools, policies, and workflows. This post explains how to use that foundation to build specialized enterprise agents and describes the training and inference techniques that power it. ([View Highlight](https://read.readwise.io/read/01m5041ambj5fkd62kxdtg4swj))
