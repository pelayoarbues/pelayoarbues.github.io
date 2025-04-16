---
author: [[huggingface.co]]
title: "Introducing Idefics2: A Powerful 8B Vision-Language Model for the Community"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/idefics/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Introducing Idefics2: A Powerful 8B Vision-Language Model for the Community
- URL: https://huggingface.co/blog/idefics2

## Highlights
- We are excited to release [Idefics2](https://huggingface.co/blog/HuggingFaceM4/idefics2-8b), a general multimodal model that takes as input arbitrary sequences of texts and images, and generates text responses. It can answer questions about images, describe visual content, create stories grounded in multiple images, extract information from documents, and perform basic arithmetic operations. 
  Idefics2 improves upon [Idefics1](https://huggingface.co/blog/idefics): with 8B parameters, an open license (Apache 2.0), and enhanced OCR (Optical Character Recognition) capabilities, Idefics2 is a strong foundation for the community working on multimodality. Its performance on Visual Question Answering benchmarks is top of its class size, and competes with much larger models such as [LLava-Next-34B](https://huggingface.co/liuhaotian/llava-v1.6-34b) and [MM1-30B-chat](https://huggingface.co/papers/2403.09611). 
  Idefics2 is also integrated in 🤗 Transformers from the get-go and therefore is straightforward to finetune for many multimodal applications. You can try out the [models](https://huggingface.co/HuggingFaceM4/idefics2-8b) on the Hub right now! ([View Highlight](https://read.readwise.io/read/01hvhkvcr2fjaqq2d1a98mkrtq))
- Idefics2 was trained on a mixture of openly available datasets for the pretraining: Interleaved webdocuments (Wikipedia,[OBELICS](https://huggingface.co/datasets/HuggingFaceM4/OBELICS)), image-caption pairs (Public Multimodal Dataset, LAION-COCO), OCR data ([PDFA (en)](https://huggingface.co/datasets/pixparse/pdfa-eng-wds), [IDL](https://huggingface.co/datasets/pixparse/idl-wds) and [Rendered-text](https://huggingface.co/datasets/wendlerc/RenderedText), and image-to-code data ([WebSight](https://huggingface.co/datasets/HuggingFaceM4/WebSight))). 
  The [interactive visualization](https://atlas.nomic.ai/map/f2fba2aa-3647-4f49-a0f3-9347daeee499/ee4a84bd-f125-4bcc-a683-1b4e231cb10f) allows exploring the OBELICS dataset. 
  Following common practices in the foundation model community, we further train the base model on task-oriented data. However, these data are often in disparate formats, and scattered in various places. Gathering them is a barrier for the community. To address that problem, we are releasing the multimodal instruction fine-tuning dataset we've been cooking: *[The Cauldron](https://huggingface.co/datasets/HuggingFaceM4/the_cauldron)*, an open compilation of **50** manually-curated datasets formatted for multi-turn conversations. We instruction fine-tuned Idefics2 on the concatenation of The Cauldron and various text-only instruction fine-tuning datasets. ([View Highlight](https://read.readwise.io/read/01hvhkwhswxdzec5fa3hwy5ctr))
- We significantly enhanced OCR abilities by integrating data that requires the model to transcribe text in an image or a document. We also improved abilities in answering questions on charts, figures, and documents with appropriate training data. ([View Highlight](https://read.readwise.io/read/01hvhkxdxcmj3k9hcz4rpeb6vq))
- We departed from the Idefics1's architecture (gated cross-attentions) and simplified the integration of visual features into the language backbone. The images are fed to the vision encoder followed by a learned Perceiver pooling and a MLP modality projection. That pooled sequence is then concatenated with the text embeddings to obtain an (interleaved) sequence of image(s) and text(s). ([View Highlight](https://read.readwise.io/read/01hvhkxm1v0rqhj6psn1v3aaj0))
- The model is built on top of two pre-trained models: [Mistral-7B-v0.1](https://huggingface.co/mistralai/Mistral-7B-v0.1) and [siglip-so400m-patch14-384](https://huggingface.co/google/siglip-so400m-patch14-384). Both of them have been released under Apache-2.0 license. We release Idefics2 weights under an Apache-2.0 license as well. ([View Highlight](https://read.readwise.io/read/01hvhky8k7j8nvqzadtat50vt3))
