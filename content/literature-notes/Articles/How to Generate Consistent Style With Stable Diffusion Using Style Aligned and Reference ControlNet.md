---
author: [[Andrew]]
title: 'How to Generate Consistent Style With Stable Diffusion Using Style Aligned and Reference ControlNet'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://stable-diffusion-art.com/wp-content/uploads/2024/06/consistent-style-cover.png)

## Metadata
- Author: [[Andrew]]
- Full Title: How to Generate Consistent Style With Stable Diffusion Using Style Aligned and Reference ControlNet
- URL: https://stable-diffusion-art.com/consistent-style/

## Highlights
- Generating images with a consistent style is a valuable technique in Stable Diffusion for creative works like logos or book illustrations. This article provides step-by-step guides for creating them in Stable Diffusion. ([View Highlight](https://read.readwise.io/read/01j1tdwk2yb0kwa9b2440tgbzc))
- • Consistent style with **Style Aligned** (AUTOMATIC1111 and ComfyUI)
  • Consistent style with **ControlNet Reference** (AUTOMATIC1111)
  • The implementation difference between AUTOMATIC1111 and ComfyUI
  • How to use them in AUTOMATIC1111 and ComfyUI ([View Highlight](https://read.readwise.io/read/01j1tdx2ezcc85nfpaps47rja3))
- [Style Aligned](https://arxiv.org/abs/2312.02133) **shares attention** across a batch of images to render similar styles. Let’s go through how it works.
  Stable Diffusion models use the [attention](https://stable-diffusion-art.com/how-stable-diffusion-work/#Cross-attention) mechanism to control image generation. There are two types of attention in Stable Diffusion.
  • **Cross Attention**: Attention between the prompt and the image. This is how the prompt steers image generation during sampling.
  • **Self-Attention**: An image’s regions interact with each other to ensure quality and consistency. ([View Highlight](https://read.readwise.io/read/01j1tdxn2wyj761ewyjfmb8vdw))
- **Style Aligned lets images in the same batch share information during self-attention**. Three important quantities of attention are **query (Q), key (K)**, and **value (V)**. In self-attention, they are all derived from the latent image. (In cross-attention, the query is derived from the prompt.)
  ![](https://stable-diffusion-art.com/wp-content/uploads/2024/06/image-30-1024x820.png) ([View Highlight](https://read.readwise.io/read/01j1tdxw87krf73j058b7cs1wr))
- Style Aligned injects the style of a reference image by adjusting the queries and keys of the target images to have the mean and variance as the reference. This technique is called [Adaptive Instance Normalization](https://arxiv.org/abs/1703.06868) (AdaIN) and is widely used in style transfer. The images also share the keys and values. ([View Highlight](https://read.readwise.io/read/01j1tdz7nq2wvyn5fx5twpnzsx))
- The choice of where to apply AdaIN and attention sharing is quite specific. As we will see later, it doesn’t matter that much. Applying AdaIN and sharing in different ways achieves similar results. ([View Highlight](https://read.readwise.io/read/01j1tdzawyn1bea5srqrnwg3dj))
- Although both AUTOMATIC1111 and ComfyUI claim to support Style Align, their implementations differ. ([View Highlight](https://read.readwise.io/read/01j1tdzw5ckcdw9femtp3mhp51))
- In AUTOMATIC1111, the Style Align option in [ControlNet](https://stable-diffusion-art.com/controlnet/) is NOT the Stye Align described in the paper. It is a simplified version that the paper’s authors called **fully shared attention**. It simply joins the queries, keys, and values of the images together in cross-attention. In other words, it allows the images’ regions in the same batch to interact during sampling. ([View Highlight](https://read.readwise.io/read/01j1te04pnvggs42xmz1v9rd30))
- As we will see, this approach is not ideal because too much information is shared across the images, causing the images to lose their uniqueness.
  However, not all is lost. The reference ControlNet provides a similar function. Three variants are available:
  Reference method
  Attention hack
  Group normalization hack
  Reference_only
  Yes
  No
  Reference_adain
  No
  Yes
  Reference_adain+attn
  Yes
  Yes ([View Highlight](https://read.readwise.io/read/01j1te0ggg4q04h1yr62w9dq0h))
- The **attention hack** adds the **query** of the reference image into the self-attention process.
  ![](https://stable-diffusion-art.com/wp-content/uploads/2024/06/image-31.png) ([View Highlight](https://read.readwise.io/read/01j1te0qcxqrm4sfdxwyt258mw))
- The **group normalization** **hack** injects the distribution of the reference image to the target images in the [group normalization](https://arxiv.org/abs/1803.08494) layer. It predates Style Aligned and uses the same AdaIN operation to inject style but into a different layer.
  ![](https://stable-diffusion-art.com/wp-content/uploads/2024/06/image-32.png) ([View Highlight](https://read.readwise.io/read/01j1te13yy290aq97gvn1f8h3y))
- Consistent style in ComfyUI
  The [style_aligned_comfy](https://github.com/brianfitzgerald/style_aligned_comfy) implements a self-attention mechanism with a shared query and key. It is faithful to the paper’s method. In addition, it has options to perform A1111’s group normalization hack through the shared_norm option. ([View Highlight](https://read.readwise.io/read/01j1te1bv3kjrbg9nw26by21fd))
