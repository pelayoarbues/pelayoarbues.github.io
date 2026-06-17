---
author: "[[Hugging Face - Blog]]"
title: 'SigLIP 2: A Better Multilingual Vision Language Encoder'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/favicon.ico)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: SigLIP 2: A Better Multilingual Vision Language Encoder
- URL: https://huggingface.co/blog/siglip2

## Highlights
- Today Google releases a new and better family of *multilingual* vision-language encoders, [SigLIP 2](https://huggingface.co/collections/google/siglip2-67b5dcef38c175486e240107). The authors have extended the training objective of SigLIP (*sigmoid loss*) with additional objectives for improved semantic understanding, localization, and dense features. ([View Highlight](https://read.readwise.io/read/01jmkvy349df0ght5aadbfxnfp))
- SigLIP 2 models **outperform** the older SigLIP ones *at all model scales* in core capabilities, including zero-shot classification, image-text retrieval, and transfer performance when extracting visual representations for Vision-Language Models (VLMs). ([View Highlight](https://read.readwise.io/read/01jmkvy7eqhbtmq0npw1538t23))
- Vision encoders are simple - they take an image, encode it into a representation, and that representation is used for downstream tasks like classification, object detection, image segmentation, and more vision tasks. Researchers are always in pursuit of visual representations that are **dense**, **locality-aware**, and **semantically rich**. ([View Highlight](https://read.readwise.io/read/01jmkvyaset1gya5xcvpavqa42))
- [CLIP](https://huggingface.co/docs/transformers/en/model_doc/clip) and [ALIGN](https://huggingface.co/docs/transformers/en/model_doc/align) are the first examples of image encoders and text encoders aligned together through joint training. This approach opened new ways to train vision models. [SigLIP](https://huggingface.co/docs/transformers/en/model_doc/siglip) took it further, replacing CLIP's *contrastive loss* with *sigmoid loss* for even better encoders. ([View Highlight](https://read.readwise.io/read/01jmkvyk02szgaa4k0x1c1jb19))
- The takeaway? With smarter training objectives, we keep building vision encoders that are more structured, fine-grained, and powerful. SigLIP 2 is just that, a bunch of really interesting and smart training objectives applied on top of that of SigLIP's to provide better and stronger vision language encoders. ([View Highlight](https://read.readwise.io/read/01jmkvyn3rg63pqt5ge2sz8bg2))
- We will try something new with this blog post. Rather than stating what is new and where to find it, we will go through a little exercise together. We start off with SigLIP and then brainstorm a series of questions (prefixed with 🤔) and answers (a new heading) to gradually cover all the updates in SigLIP 2. Sounds good? ([View Highlight](https://read.readwise.io/read/01jmkvyqxmgt6n0xs6s5zm631r))
- Add a decoder (it’s that simple)
  Let’s add a decoder to the mix. Now we have an image encoder, a text encoder, and a *text decoder*. The text decoder will have three objectives:
  1. Predict a holistic image caption
  2. Predict bounding box coordinates given captions describing *specific* image regions
  3. Predict region-specific caption given bounding box coordinates
  The decoder provides an additional signal to the vision encoder, making it location-aware. This marks the first improvement to the training recipe in SigLIP 2. ([View Highlight](https://read.readwise.io/read/01jmkvz1revk4y9xk8rcecsws6))
- **Question 2: How do we improve fine-grained local semantics of the image representation?**
  Self-distillation with Global-Local loss and Masked Prediction
  To improve fine-grained local semantics in image representation, we introduce two key training objectives, Global-Local Loss, and Masked Prediction Loss. Taking inspiration from self-supervised learning literature, we use *self-distillation*. We can use a model as a teacher, and the same model as a student. Upon each iteration the teacher will be the moving average of the student's parameters.
  1. **Global-Local Loss**: The student network gets a partial (local) view of the training image, and is trained to match the teacher’s representation, derived from the full image.
  2. **Masked Prediction Loss**: 50% of the embedded image patches in the student network are masked with mask tokens. The student needs to match the features of the teacher at masked locations. ([View Highlight](https://read.readwise.io/read/01jmkw07r6z3pbesbard715rwv))
- These objectives teach the vision encoder to be spatially aware and improve its local semantics. The authors add this loss only after **80%** of the training is done with the sigmoid and decoder loss. This is done in order to save compute (additional losses are pretty expensive) and to not negatively affect the encoders. ([View Highlight](https://read.readwise.io/read/01jmkw0aqcb6mbmdt4w74z5yq0))
- **🤔 Question 3: How to adapt models to different resolutions?**
  Adapting to different resolutions
  It is a known fact that image models can be very sensitive to varying resolutions and aspect ratios. Here we can leverage two distinct methodologies to adapt these models on different resolutions and patch sizes.
  1. **Fixed resolution variant**: Taking the checkpoints from 95% training, we can resize the positional embeddings and the patch embeddings and then continue training for a requested (potentially larger) resolution.
  2. **Dynamic resolution variant**: Taking inspiration from [FlexiViT](https://huggingface.co/papers/2212.08013), which uses inputs with different sequence lengths, and [NaViT](https://huggingface.co/papers/2307.06304), which adheres to the native aspect ratios, we can create **NaFlex** variants. This is interesting because we can use a single model for OCR (little aspect ratio distortion) and document understanding (appropriate resolution). ([View Highlight](https://read.readwise.io/read/01jmkw0g1cycw54rt5kqexs7jc))
- Zero-shot Classification
  Here we use the handy `pipeline` API to showcase zero-shot classification capabilities for SigLIP 2.
  Let’s visualize the outputs.
  [![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/sg2-blog/zero-shot.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/sg2-blog/zero-shot.png) ([View Highlight](https://read.readwise.io/read/01jmkw0rv70r7z9wxtaz0ff742))
- Using the encoder for VLMs
  Vision encoders aligned to textual information have become increasingly vital in the development of **Vision Language Models** (VLMs). A common approach to building VLMs involves combining a pretrained vision encoder with a pretrained LLM, and training them together using multimodal data across a diverse set of vision-language tasks.
  One standout example of a VLM leveraging the SigLIP family of vision encoders is **PaliGemma**. One can dive deeper into PaliGemma's capabilities in this [PaliGemma](https://huggingface.co/blog/paligemma) blog post. Building on this foundation, the recently introduced [PaliGemma 2](https://huggingface.co/blog/paligemma2) takes it a step further by integrating SigLIP with the advanced Gemma 2 LLM. It would be really exciting to swap out SigLIP with SigLIP 2 in a PaliGemma like setting and see how that model fares. ([View Highlight](https://read.readwise.io/read/01jmkw19xh20avaesfce7ch0yz))
