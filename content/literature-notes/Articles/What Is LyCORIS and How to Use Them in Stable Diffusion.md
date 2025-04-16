---
author: "[[Andrew]]"
title: 'What Is LyCORIS and How to Use Them in Stable Diffusion'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://stable-diffusion-art.com/wp-content/uploads/2023/08/cover-06845-2269075082-capitals-girlwith-a-sailor-red-capred-and-black-color-clothes-anime-key-visual-full-body-portrait-character-concept-art-comman.png)

## Metadata
- Author: [[Andrew]]
- Full Title: What Is LyCORIS and How to Use Them in Stable Diffusion
- URL: https://stable-diffusion-art.com/lycoris/

## Highlights
- LyCORIS and LoRA models aim to make minor adjustments to a Stable Diffusion model using a small file. Both modify the U-Net through matrix decomposition, but their approaches differ.
  LoRA is the original method. LyCORIS is a collection of LoRA-like methods. They are LoCon, LoHa, LoKR, and DyLoRA. ([View Highlight](https://read.readwise.io/read/01hbez1cc50hb7189wn68y8m7a))
- A **LoRA** model modifies the cross-attention layer of the U-Net. But the weights are stored efficiently.
  Instead of storing whole matrices, it approximates a large matrix with two smaller matrices with a low rank, typically much smaller than the dimensions of the original matrix. The benefit of doing this is fewer parameters. For example, if the original matrix is 1,000 by 2,000, you need 2,000,000 parameters. But using a rank of 10, LoRA only needs 1,000 x 10 + 2,000 x 10 = 30,000 parameters. This is more than 60 times smaller. ([View Highlight](https://read.readwise.io/read/01hbez1p7swcfz5zwbgc9ehcfa))
- That’s why LoRA models are so small. LoRA only stores the **weight difference** to the checkpoint model and only modifies the cross-attention layers of the U-Net of the checkpoint model. ([View Highlight](https://read.readwise.io/read/01hbez251bn970vvgcavvmbgaf))
- **LoHa** (LoRA with Hadamard Product representation) is another LyCORIS method. It is inspired by [FedPara](https://arxiv.org/abs/2108.06098), a federal learning method. LoHa has nothing to do with federal learning. It only uses its low-rank approximation method. ([View Highlight](https://read.readwise.io/read/01hbez2x94vh6fvf01yv16kxf4))
- LoHA decomposes a large matrix into FOUR low-rank matrices. It is similar to LoRA, except it contains two LoRAs and combines them by [Hadamard Product](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)) (bitwise multiplication).
  It has the advantage of having fewer parameters, like LoRA, while still being theoretically more expressive. ([View Highlight](https://read.readwise.io/read/01hbez30j1f13h7jarf9n8pne2))
- LyCORIS is typically more expressive than LoRA. They can change the checkpoint model more.
  [This model](https://civitai.com/models/14525?modelVersionId=17106) conveniently offers a LoRA and a LyCORIS (Locon) version. The LyCORIS version captures more fine details when using the same training images. ([View Highlight](https://read.readwise.io/read/01hbez3w9z8c5a1r42hp8fk8hp))
