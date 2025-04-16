---
author: [[NVIDIA ADLR]]
title: 'NVLM: Open Frontier-Class Multimodal LLMs'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[NVIDIA ADLR]]
- Full Title: NVLM: Open Frontier-Class Multimodal LLMs
- URL: https://research.nvidia.com/labs/adlr/NVLM-1/

## Highlights
- NVLM: Open Frontier-Class Multimodal LLMs
  **Published:** September 17, 2024
  [Paper](https://arxiv.org/abs/2409.11402)    [Model Weights 🤗](https://huggingface.co/nvidia/NVLM-D-72B)    Training Code in Megatron-Core (coming soon)Author: Wenliang Dai*, Nayeon Lee*, Boxin Wang*, Zhuolin Yang*, Zihan Liu, Jon Barker, Tuomas Rintamaki, Mohammad Shoeybi, Bryan Catanzaro, Wei Ping*Posted: Wei PingOverview
  We introduce [NVLM 1.0](https://arxiv.org/abs/2409.11402), a family of frontier-class multimodal large language models (LLMs) that achieve state-of-the-art results on vision-language tasks, rivaling the leading proprietary models (e.g., GPT-4o) and open-access models (e.g., Llama 3-V 405B and InternVL 2). Remarkably, after multimodal training, NVLM 1.0 shows improved accuracy on text-only tasks over its LLM backbone. We are open-sourcing the model weights and training code in Megatron-Core for the community.
  ![](https://research.nvidia.com/labs/adlr/NVLM-1/images/nvlm-1/overview-v7.png)
  We compare NVLM 1.0 to leading proprietary and open-access multimodal LLMs in above Table. Note that the model weights for *Llama 3-V have not been released yet. The results demonstrate that NVLM 1.0 achieves performance on par with leading models across both vision-language and text-only tasks. Specifically, our 72B model has achieved the highest OCRBench and VQAv2 so far. Our NVLM outperforms or on par with GPT-4o on all key benchmarks including MathVista, OCRBench, ChartQA and DocVQA, except MMMU. Importantly, we compare multimodal LLM to its backbone LLM on text-only tasks. Llama 3-V 70B and 405B show no degradation in text-only tasks, as their LLM backbones are frozen during multimodal training. The leading InternVL 2 model shows significant degradation on text-only bechmarks, including MMLU, GSM8K, MATH and HumanEval. In contrast, our NVLM-1.0 72B model demonstrates significant improvements over its text backbone on text-only math and coding benchmarks, with average accuracy increasing by 4.3 points after multimodal training. The results show the multimodal NVLM-1.0 72B, which outperforms Gemini 1.5 Pro, is also highly compelling at solving text-only tasks (e.g., math, coding, reasoning).
  Qualitative Study
  We provide some qualitative samples in the following.
  ![](https://research.nvidia.com/labs/adlr/NVLM-1/images/nvlm-1/jensen_v3.png) NVLM-1.0-D 72B model demonstrates good instruction-following capability. Based on the instructions, it appropriately controls the target generation’s length. It can also generate a very high-quality, detailed description of the provided image.
  ![](https://research.nvidia.com/labs/adlr/NVLM-1/images/nvlm-1/qualitative_examples_sec6v11.png)
  Our NVLM-D-1.0-72B demonstrates versatile capabilities in various multimodal tasks by jointly utilizing OCR, reasoning, localization, common sense, world knowledge, and coding ability. For instance, our model can understand the humor behind the “abstract vs. paper” meme in example (a) by performing OCR to recognize the text labels for each image and using reasoning to grasp why juxtaposing “the abstract” — labeled with a fierce-looking lynx — and “the paper” — labeled with a domestic cat — is humorous. NVLM accurately performs localization to effectively answer locationsensitive questions, such as “What is the difference between the left, middle, and right objects in the image?” in example (b). NVLM is capable of performing mathematical reasoning and coding based on visual information, such as tables and handwritten pseudocode, as illustrated in example (d) and (e). ([View Highlight](https://read.readwise.io/read/01j9kk1hngmsqh3cq5pgrsq50q))
- Here are the key technical highlights of our work:
  • In terms of model design, we perform a comprehensive comparison between decoder-only multimodal LLMs (e.g., LLaVA) and cross-attention-based models (e.g., Flamingo). Based on the strengths and weaknesses of both approaches, we propose a novel architecture that enhances both training efficiency and multimodal reasoning capabilities.
  • Furthermore, we introduce a 1-D tile-tagging design for tile-based dynamic high-resolution images, which significantly boosts performance on multimodal reasoning and OCR-related tasks.
  • Regarding training data, we meticulously curate and provide detailed information on our multimodal pretraining and supervised fine-tuning datasets. Our findings indicate that dataset quality and task diversity are more important than scale, even during the pretraining phase, across all architectures.
  • Notably, we develop production-grade multimodality for the NVLM-1.0 models, enabling them to excel in vision-language tasks while maintaining and even improving text-only performance compared to their LLM backbones. To achieve this, we craft and integrate a high-quality text-only dataset into multimodal training, alongside a substantial amount of multimodal math and reasoning data, leading to enhanced math and coding capabilities across modalities. ([View Highlight](https://read.readwise.io/read/01j9kk3h6a7vt4eykpa6rav85r))
- We introduce [NVLM 1.0](https://arxiv.org/abs/2409.11402), a family of frontier-class multimodal large language models (LLMs) that achieve state-of-the-art results on vision-language tasks, rivaling the leading proprietary models (e.g., GPT-4o) and open-access models (e.g., Llama 3-V 405B and InternVL 2). Remarkably, after multimodal training, NVLM 1.0 shows improved accuracy on text-only tasks over its LLM backbone. We are open-sourcing the model weights and training code in Megatron-Core for the community. ([View Highlight](https://read.readwise.io/read/01j9sfwntfk4xx2wbp5f0khpgy))
