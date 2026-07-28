---
author: "[[Feyn]]"
title: 'FeyNoBg: A SOTA Model for Background Removal'
date: "2026-07-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://usefeyn.com/blog/feynobg/feynobg-cover.png)

## Metadata
- Author: [[Feyn]]
- Full Title: FeyNoBg: A SOTA Model for Background Removal
- URL: https://usefeyn.com/blog/feynobg/

## Highlights
- We’re introducing FeyNoBg, a state-of-the-art model for automatic background removal. **Across eight benchmarks, it posts the best published S-measure on four and comes within 2% of the leader on the rest.** ([View Highlight](https://read.readwise.io/read/01kync3tx3d6g8m7j177evnhj7))
- In your computer, images are stored as grids of pixels. The goal of a background removal algorithm is to predict an opacity value for each pixel such that background pixels become transparent, foreground pixels remain opaque, and boundary pixels become translucent. ([View Highlight](https://read.readwise.io/read/01kync4aee49rj5ajy75v31prh))
- Producing this opacity map requires two skills. First, the model has to separate the foreground from the background. When the subject stands against a plain backdrop, this can be done easily by comparing colors. However, in low contrast, crowded, or camouflaged images, the model has to use shape, texture, and context to recognize which pixels form the subject. ([View Highlight](https://read.readwise.io/read/01kync4fy367rzrn0j7q1efdpq))
- Second, the model has to trace the foreground’s boundary. In simple images, a sharp change in color or texture provides a strong edge signal. But real boundaries are more difficult. Hair, fur, thin wires, and motion blur can blend foreground and background elements together. The model has to measure how much of an edge pixel belongs to the subject and set its opacity accordingly. This is called image matting. ([View Highlight](https://read.readwise.io/read/01kync4rq8ac6s4eavwpr4sdna))
- Generally, these skills are taught with different kinds of focused data. This creates a failure point. A poor training mix can produce unbalanced models where improvements in one skill come at the expense of the other. Outputs either miss parts of the subject or lack clean edges. ([View Highlight](https://read.readwise.io/read/01kync4ycstjmgy9j3hsr5qpgf))
- Real images are complex and require deftness in foreground recognition and boundary precision. This was our key insight when training FeyNoBg. ([View Highlight](https://read.readwise.io/read/01kync4zfnj0svx65v62xvjxjy))
- We chose BiRefNet as the foundation for FeyNoBg, as its architecture already matched our goal. BiRefNet gives two parts of the model complementary responsibilities. Its localization module finds the foreground, while its reconstruction module traces the subject’s boundary. ([View Highlight](https://read.readwise.io/read/01kync559gd8mscw9vepvs9r1j))
- The model starts by passing the input image through a feature extractor that runs in four stages. Early stages capture local details. Later stages combine the gathered details into broader image representations called feature maps. The localization module uses these maps to find the subject, while the reconstruction module uses them to recover its boundary. ([View Highlight](https://read.readwise.io/read/01kync58hxvm2tf8h5v6cmffts))
- The third stage of the feature extractor has the hardest job. It sees enough of the image to reason about the whole subject while retaining the spatial detail needed to represent its shape. Both localization and boundary reconstruction depend heavily on the feature map produced here. ([View Highlight](https://read.readwise.io/read/01kync5f27drttzh05dxyacmvz))
- Given the rich image representation this stage holds, we expected that adding more depth here would help the model retain information better and thus improve performance. Accordingly, we expanded the third stage from 18 to 24 blocks. This grew the model modestly from 222M parameters to 263M. ([View Highlight](https://read.readwise.io/read/01kync5mshdkbetr1hx1rxb7f8))
- Combining the datasets introduced two problems. First, they varied greatly in size. Without limits, the largest sources would dominate training and cause the same specialization we saw before. Consequently, we capped each source to 4,000 images and then shuffled them together. ([View Highlight](https://read.readwise.io/read/01kync6a22hfy2btcyafztt9yj))
- Second, the datasets used different annotations. Segmentation datasets provided foreground masks, while matting datasets provided alpha mattes. We converted both into binary foreground masks so every image shared the same training target. ([View Highlight](https://read.readwise.io/read/01kync6b0hpfk7781fkrv3h4z4))
- The NoBg Library
  Image matting models are usually released as isolated repositories. Comparing models or fine-tuning one requires writing several adapters before any experiments can begin. This setup can quickly become too messy and frustrating to do good work in.
  To solve this, we created NoBg. It is a Python library that provides a consistent interface to run and train background removal models. We used it ourselves to train FeyNoBg.
  To encourage more development in this field, we are releasing NoBg in the open source. You can use it to run FeyNoBg, or train your own model. ([View Highlight](https://read.readwise.io/read/01kync79qptdp8dy8bghbevfy6))
