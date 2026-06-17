---
author: "[[huggingface.co]]"
title: 'nanoVLM: The Simplest Repository to Train Your VLM in Pure PyTorch'
date: "2025-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/nanovlm/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: nanoVLM: The Simplest Repository to Train Your VLM in Pure PyTorch
- URL: https://huggingface.co/blog/nanovlm

## Highlights
- [**nanoVLM**](https://github.com/huggingface/nanoVLM) is the *simplest* way to get started with **training** your very own Vision Language Model (VLM) using pure PyTorch. It is lightweight *toolkit* which allows you to launch a VLM training on a [free tier colab notebook](https://colab.research.google.com/github/huggingface/nanoVLM/blob/main/nanoVLM.ipynb). ([View Highlight](https://read.readwise.io/read/01jvskhrdcpceq91jjccx1v5fa))
- At its heart, nanoVLM is a **toolkit** that helps you build and train a model that can understand both images and text, and then generate text based on that. The beauty of nanoVLM lies in its *simplicity*. The entire codebase is intentionally kept *minimal* and *readable*, making it perfect for beginners or anyone who wants to peek under the hood of VLMs without getting overwhelmed. ([View Highlight](https://read.readwise.io/read/01jvskhxayn1pvgh4hkje44ygn))
- As the name suggests, a Vision Language Model (VLM) is a multi-modal model that processes two modalities: vision and text. These models typically take images and/or text as input and generate text as output. ([View Highlight](https://read.readwise.io/read/01jvskjcz5272g974gkd1whvzf))
- Generating text (output) conditioned on the understanding of images and texts (inputs) is a powerful paradigm. It enables a wide range of applications, from image captioning and object detection to answering questions about visual content (as shown in the table below). One thing to note is that nanoVLM focuses only on Visual Question Answering as the training objective. ([View Highlight](https://read.readwise.io/read/01jvskjkjtj4myx7cnxs2fyw1v))
- We model nanoVLM after two well known and widely used architectures. Our vision backbone (`models/vision_transformer.py`) is the standard vision transformer, more specifically Google’s [SigLIP](https://huggingface.co/docs/transformers/en/model_doc/siglip) vision encoder. Our language backbone follows the [Llama 3](https://huggingface.co/docs/transformers/en/model_doc/llama3) architecture. ([View Highlight](https://read.readwise.io/read/01jvskkc5bnd72g8bdrzymk8dt))
- The vision and text modalities are *aligned* using a Modality Projection module. This module takes the image embeddings produced by the vision backbone as input, and transforms them into embeddings compatible with the text embeddings from the embedding layer of the language model. These embeddings are then concatenated and fed into the language decoder. The Modality Projection module consists of a pixel shuffle operation followed by a linear layer. ([View Highlight](https://read.readwise.io/read/01jvskkpja3v3302zp0q32mw50))
- [Pixel shuffle](https://huggingface.co/papers/1609.05158) reduces the number of image tokens, which helps reduce computational cost and speeds up training, especially for transformer-based language decoders which are sensitive to input length. The figure below demonstrates the concept.
  [![diagram of pixel shuffle](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/nanovlm/pixel-shuffle.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/nanovlm/pixel-shuffle.png) ([View Highlight](https://read.readwise.io/read/01jvskmqrecbh2q46gr7wt48dp))
- All the files are very lightweight and well documented. We highly encourage you to check them out individually to get a better understanding of the implementation details (`models/xxx.py`)
  While training, we use the following pre-trained backbone weights:
  1. Vision backbone: [`google/siglip-base-patch16-224`](https://huggingface.co/google/siglip-base-patch16-224)
  2. Language backbone: [`HuggingFaceTB/SmolLM2-135M`](https://huggingface.co/HuggingFaceTB/SmolLM2-135M) ([View Highlight](https://read.readwise.io/read/01jvskn5r43pdvtxr57t0hrv33))
- efore anything else, the script loads two configuration classes from `models/config.py`:
  • `TrainConfig`: Configuration parameters useful for training, like learning rates, checkpoint paths, etc.
  • `VLMConfig`: The configuration parameters used to initialize the VLM, like hidden dimensions, number of attention heads, etc. ([View Highlight](https://read.readwise.io/read/01jvskx9j68e34wben4mhr1evj))
- At the heart of the data pipeline is the `get_dataloaders` function. It:
  • Loads datasets via Hugging Face’s `load_dataset` API.
  • Combines and shuffles multiple datasets (if provided).
  • Applies a train/val split via indexing.
  • Wraps them in custom datasets (`VQADataset`, `MMStarDataset`) and collators (`VQACollator`, `MMStarCollator`). ([View Highlight](https://read.readwise.io/read/01jvskxf2b0zrkmvma3nrxeywk))
- **Model Initialization**
  The model is built via the `VisionLanguageModel` class. If you're resuming from a checkpoint, it’s as easy as: ([View Highlight](https://read.readwise.io/read/01jvskxr2fs0mavej3ktzsgjkb))
- Because the modality projector (`MP`) is freshly initialized while the backbones are pre-trained, the optimizer is split into two parameter groups, each with its own learning rate:
  • A higher LR for the MP
  • A smaller LR for the encoder/decoder stack
  This balance ensures the MP learns quickly while preserving knowledge in the vision and language backbones. ([View Highlight](https://read.readwise.io/read/01jvsky20sc2y71dr7m75kbe5j))
- This part is fairly standard but thoughtfully structured:
  • Mixed precision is used with `torch.autocast` to improve performance.
  • A cosine learning rate schedule with linear warmup is implemented via `get_lr`.
  • Token throughput (tokens/sec) is logged per batch for performance monitoring.
  Every 250 steps (configurable), the model is evaluated on the validation and `MMStar` test datasets. If accuracy improves, the model is checkpointed. ([View Highlight](https://read.readwise.io/read/01jvsky6n0z6v9f3zw74zzr94d))
- Using nanoVLM as the toolkit, we have trained a [model and published it to Hub](https://huggingface.co/lusxvr/nanoVLM-222M). We have used the `google/siglip-base-patch16-224` and `HuggingFaceTB/SmolLM2-135M` as backbones. The model was trained this for ~6h on a single H100 GPU on ~1.7M samples of the [cauldron](https://huggingface.co/datasets/HuggingFaceM4/the_cauldron).
  This model isn't intended to compete with SoTA models, but rather to demystify the components and training process of VLMs. ([View Highlight](https://read.readwise.io/read/01jvskyzjxbh5vgjfp42kjww9r))
- In this blog post, we walked through what VLMs are, explored the architecture choices that power nanoVLM, and unpacked the training and inference workflows in detail.
  By keeping the codebase lightweight and readable, nanoVLM aims to serve as both a learning tool and a foundation you can build upon. Whether you’re looking to understand how multi-modal inputs are aligned, or you want to train a VLM on your own dataset, this repository gives you a head start. ([View Highlight](https://read.readwise.io/read/01jvskzejk6qaaff424rb6m7f4))
