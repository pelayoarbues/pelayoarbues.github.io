---
author: "[[Jiachen Zhu]]"
title: 'Transformers without Normalization'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://news.ycombinator.com/y18.svg)

## Metadata
- Author: [[Jiachen Zhu]]
- Full Title: Transformers without Normalization
- URL: https://jiachenzhu.github.io/DyT/

## Highlights
- Normalization layers are ubiquitous in modern neural networks and have long been considered essential. This work demonstrates that Transformers without normalization can achieve the same or better performance using a remarkably simple technique. We introduce Dynamic Tanh (DyT), an element-wise operation DyT(x)=tanh⁡(αx), as a drop-in replacement for normalization layers in Transformers ([View Highlight](https://read.readwise.io/read/01jpjad7q4ek7kytare73b0g6d))
- DyT is inspired by the observation that layer normalization in Transformers often produces tanh-like, S-shaped input-output mappings. By incorporating DyT, Transformers without normalization can match or exceed the performance of their normalized counterparts, mostly without hyperparameter tuning. We validate the effectiveness of Transformers with DyT across diverse settings, ranging from recognition to generation, supervised to self-supervised learning, and computer vision to language models. These findings challenge the conventional understanding that normalization layers are indispensable in modern neural networks, and offer new insights into their role in deep networks. ([View Highlight](https://read.readwise.io/read/01jpjadmh9eh61hrqn7mxgqbvq))
- Layer Normalization Behaves Like Scaled Tanh Function
  Our analysis shows that layer normalization (LN) in Transformers generates input-output mappings that closely resemble scaled tanh functions. In the earlier layers, these mappings are mostly linear. However, in deeper layers, they take on distinct S-shaped curves characteristic of tanh functions.
  ![](https://jiachenzhu.github.io/DyT/webpage_assets/figures/inout_vit.png)
  Input-output relationships in ViT normalization layers
  ![](https://jiachenzhu.github.io/DyT/webpage_assets/figures/inout_w2v.png)
  Input-output relationships in wav2vec 2.0 normalization layers
  ![](https://jiachenzhu.github.io/DyT/webpage_assets/figures/inout_dit.png)
  Output vs. input of selected LN layers in Vision Transformer (ViT), wav2vec 2.0 (a Transformer model for speech), and Diffusion Transformer (DiT). We plot the input/output values of four LN layers in each model. The S-shaped curves highly ([View Highlight](https://read.readwise.io/read/01jpjady5zfhkmd7pzjvscm9e6))
- We present a comprehensive evaluation of DyT across a diverse range of architectures and tasks, highlighting its effectiveness and generalizability. Our experiments cover supervised learning in vision (**ViT** and **ConvNeXt**), self-supervised learning in vision (**MAE** and **DINO**), diffusion models (**DiT**), large language models (**LLaMA**), self-supervised learning in speech (**wav2vec 2.0**), and DNA sequence modeling (**HyenaDNA** and **Caduceus**). In every case, Transformers with DyT achieves similar or better performance than their normalized counterparts. For detailed results and comparisons, please refer to our paper. ([View Highlight](https://read.readwise.io/read/01jpjae6eb9qm69g8ms3f04qb5))
