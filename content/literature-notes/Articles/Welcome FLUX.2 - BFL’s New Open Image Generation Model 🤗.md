---
author: "[[Linoy Tsaban]]"
title: 'Welcome FLUX.2 - BFL’s New Open Image Generation Model 🤗'
date: "2025-11-26"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/flux2/thumbnail.png)

## Metadata
- Author: [[Linoy Tsaban]]
- Full Title: Welcome FLUX.2 - BFL’s New Open Image Generation Model 🤗
- URL: https://huggingface.co/blog/flux-2

## Highlights
- [![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/flux2_blog/teaser_generation.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/flux2_blog/teaser_generation.png)
  FLUX.2 can be used for both **image-guided** and **text-guided** image generation. Furthermore, it can take multiple images as reference inputs, while producing the final output image. Below, we briefly discuss the key changes introduced in FLUX.2. ([View Highlight](https://read.readwise.io/read/01kb0a5akj253teajnec7qx1s4))
- First, instead of two text encoders as in Flux.1, it uses a single text encoder — [Mistral Small 3.1](https://mistral.ai/news/mistral-small-3-1). Using a single text encoder greatly simplifies the process of computing prompt embeddings. The pipeline allows for a `max_sequence_length` of 512. ([View Highlight](https://read.readwise.io/read/01kb0a5k8vz5vs7w2h3kq7v0pv))
- FLUX.2 follows the same general [multimodel diffusion transformer](https://arxiv.org/pdf/2403.03206) (MM-DiT) + parallel [DiT](https://arxiv.org/pdf/2212.09748) architecture as Flux.1. As a refresher, MM-DiT blocks first process the image latents and conditioning text in separate streams, only joining the two together for the attention operation, and are thus referred to as “double-stream” blocks. The parallel blocks then operate on the concatenated image and text streams and can be regarded as “single-stream” blocks. ([View Highlight](https://read.readwise.io/read/01kb0a5qaxw8ygmpefasb9decw))
- The key DiT changes from Flux.1 to FLUX.2 are as follows:
  1. Time and guidance information (in the form of [AdaLayerNorm-Zero](https://arxiv.org/pdf/2212.09748) modulation parameters) is shared across all double-stream and single-stream transformer blocks, respectively, rather than having individual modulation parameters for each block as in Flux.1.
  2. None of the layers in the model use `bias` parameters. In particular, neither the attention nor feedforward (FF) sub-blocks of either transformer block use `bias` parameters in any of their layers.
  3. In Flux.1, the single-stream transformer blocks fused the attention output projection with the FF output projection. FLUX.2 single-stream blocks also fuse the attention QKV projections with the FF input projection, creating a [fully parallel transformer block](https://arxiv.org/pdf/2302.05442): ([View Highlight](https://read.readwise.io/read/01kb0a5xy9yqqdgewqadh6gq3q))
- Note that compared to the `ViT-22B` block depicted above, FLUX.2 uses a [SwiGLU](https://arxiv.org/abs/2002.05202)-style MLP activation rather than a GELU activation (and also doesn’t use `bias` parameters). ([View Highlight](https://read.readwise.io/read/01kb0a6rwf27p5a76pwvjpvfb2))
- 1. A larger proportion of the transformer blocks in FLUX.2 are single-stream blocks (`8` double-stream blocks to `48` single-stream blocks, compared to `19`/`38` for Flux.1). This also means that single-stream blocks make up a larger proportion of the DiT parameters: `Flux.1[dev]-12B` has ~54% of its total parameters in the double-stream blocks, whereas `FLUX.2[dev]-32B` has ~24% of its parameters in the double-stream blocks (and ~73% in the single-stream blocks).
  • A new Autoencoder
  • Better way to incorporate resolution-dependent timestep schedules ([View Highlight](https://read.readwise.io/read/01kb0a6vrprywpjsa469kw92ec))
- The above code snippet was tested on an H100, and it isn’t sufficient to run inference on it without CPU offloading. With CPU offloading enabled, this setup takes ~62GB to run. ([View Highlight](https://read.readwise.io/read/01kb0a7bcd4chdzcqk5dkeyq3f))
- FLUX.2 supports using multiple images as inputs, allowing you to use up to 10 images. However, keep in mind that each additional image will require more VRAM. You can reference the images by index (e.g., image 1, image 2) or by natural language (e.g., the kangaroo, the turtle). For optimal results, the best approach is to use a combination of both methods. ([View Highlight](https://read.readwise.io/read/01kb0a7mz4d5xrr5fd7dy5carh))
- Being both a text-to-image and an image-to-image model, FLUX.2 makes the perfect fine-tuning candidate for many use-cases! However, as inference alone takes more than 80GB of VRAM, LoRA fine-tuning is even more challenging to run on consumer GPUs. To squeeze in as much memory saving as we can, we utilize some of the inference optimizations described above for training as well, together with shared memory saving techniques, to substantially reduce memory consumption. To train it, you can use either the diffusers code below or [Ostris' AI Toolkit](https://github.com/ostris/ai-toolkit). ([View Highlight](https://read.readwise.io/read/01kb0a82qek8hymzrzxje84p2c))
