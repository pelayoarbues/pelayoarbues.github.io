---
author: [[rhymes.ai]]
title: 'Aria: First Open Multimodal Native MoE Model'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[rhymes.ai]]
- Full Title: Aria: First Open Multimodal Native MoE Model
- URL: https://rhymes.ai/blog-details/aria-first-open-multimodal-native-moe-model

## Highlights
- • **Multimodal native understanding**:
  • State-of-the-art performance on a wide range of multimodal and language tasks
  • Pre-trained from scratch on a mixture of multimodal and language data
  • **Lightweight and fast:**
  • Fine-grained mixture-of-expert model with 3.9B activated parameters per token
  • Efficient and informative visual encoding of variable image sizes and aspect ratios
  • **Long context window:**
  • Long multimodal context window of 64K tokens, captioning a 256-frame video in 10 seconds
  • **Open**:
  • [Open model weights](https://huggingface.co/rhymes-ai/Aria) 🤗, [code repository](https://github.com/rhymes-ai/Aria) 💻, [technical report](https://arxiv.org/pdf/2410.05993) 📝 for collaborative development.
  • License: Apache 2.0 ([View Highlight](https://read.readwise.io/read/01j9v9q7k21f6fhhx1s6aqgf1f))
- Aria processes text, images, video, and code all at once, without needing separate setups for each type, demonstrating the advantages of a multimodal native model.
  We provide a quantifiable definition for the term **multimodal native**:
  A multimodal native model refers to a single model with strong understanding capabilities across multiple input modalities (e.g., text, code, image, video) that matches or exceeds the modality-specialized models of similar capacities. ([View Highlight](https://read.readwise.io/read/01j9v9trqc4g29pazgphyxjgdw))
- We compared Aria against the best open and closed multimodal native models across established benchmarks, highlighting the following key observations:
  • **Best-in-Class Performance**: Aria is the leading multimodal native model, demonstrating clear advantages over Pixtral-12B and Llama3.2-11B across a range of multimodal, language, and coding tasks.
  • **Competitive Against Proprietary Models**: Aria performs competitively against proprietary models like GPT-4o and Gemini-1.5 on multimodal tasks, including document understanding, chart reading, scene text recognition, and video understanding.
  • **Parameter Efficiency**: Aria is the most parameter-efficient open model. Thanks to the MoE framework, Aria activates only 3.9 billion parameters, compared to the full activation in models like Pixtral-12B and Llama3.2-11B. ([View Highlight](https://read.readwise.io/read/01j9v9ty05bpr149r2vewgfgxb))
- Multimodal data is often complex, involving long sequences that combine visuals and text, like videos with subtitles or long documents. For a model to be effective in real-world applications, it must be capable of understanding and processing such data efficiently.
  Aria excels in this area, demonstrating superior **long multimodal input understanding.** It outperforms larger open models, proving its efficiency and effectiveness despite its size. When compared to proprietary models, Aria surpasses **GPT-4o** mini in long video understanding and outperforms **Gemini-1.5-Flash** in long document understanding. This makes Aria a preferred choice for processing extensive multimodal data in a compute-and-time-efficient manner, delivering faster and more accurate results in real-world scenarios. ([View Highlight](https://read.readwise.io/read/01j9v9vn9b4616xgsnejmbyw2g))
- Aria is highly effective at understanding and following instructions on both multimodal and language inputs, performing better than top open-source models on both MIA-Bench and MT-Bench.
  ![Aria Multimodal Native MoE - An Open Model for ALL Modalities](https://rhymes.ai/images/blog/Aria-intro-10062024/barChartThree.png) ([View Highlight](https://read.readwise.io/read/01j9v9vwnaee2cag42hdrv3w09))
- Aria is pre-trained from scratch using a 4-stage training pipeline, ensuring that the model progressively learns new capabilities while retaining previously acquired knowledge. ([View Highlight](https://read.readwise.io/read/01j9v9w5h7wzca750tjbgj22m4))
- Multimodal Native Reasoning with Vision, Language, Coding Capabilities ([View Highlight](https://read.readwise.io/read/01j9v9wvbgcwjmk08ykqgjdg5y))
- How does the company's profit margin change from year 2020 to 2021? What factors cause such changes? Answer step by step.
  ![Aria Multimodal Native MoE - An Open Model for ALL Modalities](https://rhymes.ai/images/blog/Aria-intro-10062024/income_statement.png) ([View Highlight](https://read.readwise.io/read/01j9v9x3wtk7ndp7jatyxya34h))
- Aria is designed to be developer-friendly, offering extensive support and flexibility. To facilitate development and collaboration, Rhymes AI provides a [**codebase**](https://github.com/rhymes-ai/Aria) that facilitates adoptions of Aria in downstream applications.
  **The codebase features**: ([View Highlight](https://read.readwise.io/read/01j9v9xw2ynj9v0prgpfqq41g3))
