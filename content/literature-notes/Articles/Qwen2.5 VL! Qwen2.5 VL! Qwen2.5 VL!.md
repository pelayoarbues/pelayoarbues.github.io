---
author: [[Qwen Team]]
title: "Qwen2.5 VL! Qwen2.5 VL! Qwen2.5 VL!"
date: 2025-01-28
tags: 
- articles
- literature-note
---
![rw-book-cover](https://qwenlm.github.io/%3Clink%20or%20path%20of%20image%20for%20opengraph,%20twitter-cards%3E)

## Metadata
- Author: [[Qwen Team]]
- Full Title: Qwen2.5 VL! Qwen2.5 VL! Qwen2.5 VL!
- URL: https://qwenlm.github.io/blog/qwen2.5-vl/

## Highlights
- We release **Qwen2.5-VL**, the new flagship vision-language model of Qwen and also a significant leap from the previous Qwen2-VL. ([View Highlight](https://read.readwise.io/read/01jjp6p419kytmsm5h2wfvjt16))
- The key features include:
  • **Understand things visually**: Qwen2.5-VL is not only proficient in recognizing common objects such as flowers, birds, fish, and insects, but it is highly capable of analyzing texts, charts, icons, graphics, and layouts within images.
  • **Being agentic**: Qwen2.5-VL directly plays as a visual agent that can reason and dynamically direct tools, which is capable of computer use and phone use.
  • **Understanding long videos and capturing events**: Qwen2.5-VL can comprehend videos of over 1 hour, and this time it has a new ability of capturing event by pinpointing the relevant video segments.
  • **Capable of visual localization in different formats**: Qwen2.5-VL can accurately localize objects in an image by generating bounding boxes or points, and it can provide stable JSON outputs for coordinates and attributes.
  • **Generating structured outputs**: for data like scans of invoices, forms, tables, etc. Qwen2.5-VL supports structured outputs of their contents, benefiting usages in finance, commerce, etc. ([View Highlight](https://read.readwise.io/read/01jjp6pareysw3z7gw5xasr0vc))
- We evaluate our models with the SOTA models as well as the best models of similar model sizes. In terms of the flagship model Qwen2.5-VL-72B-Instruct, it achieves competitive performance in a series of benchmarks covering domains and tasks, inlcuding college-level problems, math, document understanding, general question answering, math, video understanding, and visual agent. Notably, Qwen2.5-VL achieves significant advantages in understanding documents and diagrams, and it is capable of playing as a visual agent without task-specific finetuning. ([View Highlight](https://read.readwise.io/read/01jjp6q4c582rrewwc60aphq14))
- In terms of smaller models, Qwen2.5-VL-7B-Instruct outperforms GPT-4o-mini in a number of tasks, and Qwen2.5-VL-3B, which is a solution for edge AI, even outperforms the 7B model of our previous version Qwen2-VL ([View Highlight](https://read.readwise.io/read/01jjp6qbebcvq139624wxm90gx))
- 1. World-wide Image Recognition[#](https://qwenlm.github.io/blog/qwen2.5-vl/#1-world-wide-image-recognition)
  Qwen2.5-VL has significantly enhanced its general image recognition capabilities, expanding the categories of images to an ultra-large number. It not only includes plants, animals, landmarks of famous mountains and rivers, but also IPs from film and TV series, as well as a wide variety of products. ([View Highlight](https://read.readwise.io/read/01jjp6qhmy1rf4mqz2vfdgaajc))
- Qwen2.5-VL utilizes bounding boxes and point-based representations for grounding, enabling hierarchical positioning and standardized JSON output. This enhanced localization capability serves as a foundation for visual reasoning. ([View Highlight](https://read.readwise.io/read/01jjp6qrg0drspc42c9gbmagmx))
- Qwen2.5-VL has upgraded its OCR recognition capabilities to a new level, with enhanced multi-scenario, multi-language and multi-orientation text recognition and text localization performance. Furthermore, it has been significantly enhanced in information extraction to meet the growing digitalized and intelligent demands in areas such as qualification review and financial business. ([View Highlight](https://read.readwise.io/read/01jjp6r4gqnx1st92wcbt24sa9))
- Qwen2.5-VL has designed a unique document parsing format called QwenVL HTML format, which extracts layout information based on HTML. QwenVL HTML can perform document parsing in various scenarios, such as magazines, research papers, web pages, and even mobile screenshots. ([View Highlight](https://read.readwise.io/read/01jjp6rdhf9efenxwhxb588nmm))
- Qwen2.5-VL’s video comprehension capabilities have been comprehensively upgraded. In terms of temporal processing, we have introduced dynamic frame rate (FPS) training and absolute time encoding technology. As a result, the model can not only support the understanding of ultra-long videos on an hourly scale but also achieve second-level event localization. It is capable of accurately comprehending content from long videos spanning hours, searching for specific events within videos, and summarizing key points from different time segments. This allows users to quickly and efficiently extract crucial information embedded in the videos. ([View Highlight](https://read.readwise.io/read/01jjp6rr40ckvp8q1hjbpvbx53))
- In the spatial dimension, Qwen2.5-VL not only dynamically converts images of different sizes into tokens of varying lengths but also directly represents coordinates such as detection boxes and points using the actual size scale of the image, without performing traditional coordinate normalization. This allows the model to directly learn the scale of the images. In the temporal dimension, dynamic FPS (Frames Per Second) training and absolute time encoding have been introduced, aligning mRoPE ids directly with the speed of time. This enables the model to learn the pace of time through the intervals of temporal dimension ids.
  ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5-VL/qwen2.5vl_arc.jpeg) ([View Highlight](https://read.readwise.io/read/01jjp6x4zbvgrpezb7zc7gkea3))
- • **More Concise and Efficient Visual Encoder**
  The visual encoder plays a crucial role in multimodal large models. We trained a native dynamic resolution ViT from scratch, including stages for CLIP, vision-language model alignment, and end-to-end training. To address the issue of load imbalance in ViT during the training and testing phases of multimodal large models, we introduced Window Attention to effectively reduce the computational load on the ViT side. In our ViT setup, only four layers are Full Attention layers, while the rest use Window Attention. The maximum window size is 8x8, and regions smaller than 8x8 do not require padding; instead, they retain their original scale, ensuring that the model maintains native resolution. Additionally, to simplify the overall network structure, we made the ViT architecture more consistent with LLMs by adopting RMSNorm and SwiGLU structures. ([View Highlight](https://read.readwise.io/read/01jjp73e649030by0t4fw5fc1f))
