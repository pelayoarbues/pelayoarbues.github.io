---
author: "[[Avi Chawla]]"
title: 'Scale ML Models to Billions of Parameters'
date: "2025-07-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!hOW_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F07b732ae-f9d4-4e45-b85c-882826b33179_1456x1173.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: Scale ML Models to Billions of Parameters
- URL: https://blog.dailydoseofds.com/p/scale-ml-models-to-billions-of-parameters

## Highlights
- Lately, we have been using **[Lightning Fabric](https://lightning.ai/docs/fabric/stable/)**, which brings together:
  • The flexibility of PyTorch.
  • And distributed training features that PyTorch Lightning provides.
  You only need to make 4 minor changes to your existing PyTorch code to easily scale it to the largest billion-parameter models/LLMs. ([View Highlight](https://read.readwise.io/read/01jz94w6768bm90sfbfbcnp2mf))
- While creating the Fabric object above, you can specify:
  • the accelerator and the number of devices
  • the parallelism strategy to use
  • the floating point precision, etc.
  Next, configure the model, the optimizer, and the dataloader ([View Highlight](https://read.readwise.io/read/01jz94wfmjd426hy0ye16xjdsr))
