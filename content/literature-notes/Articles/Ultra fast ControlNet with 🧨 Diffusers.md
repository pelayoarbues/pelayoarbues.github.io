---
author: [[huggingface.co]]
title: "Ultra fast ControlNet with 🧨 Diffusers"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/controlnet/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Ultra fast ControlNet with 🧨 Diffusers
- URL: https://huggingface.co/blog/controlnet

## Highlights
- ControlNet provides a minimal interface allowing users to customize the generation process up to a great extent. With [ControlNet](https://huggingface.co/docs/diffusers/main/en/api/pipelines/stable_diffusion/controlnet), users can easily condition the generation with different spatial contexts such as a depth map, a segmentation map, a scribble, keypoints, and so on! ([View Highlight](https://read.readwise.io/read/01hcwzg62dmw7pcvfwhs87qcwd))
- ControlNet was introduced in [Adding Conditional Control to Text-to-Image Diffusion Models](https://arxiv.org/abs/2302.05543) by Lvmin Zhang and Maneesh Agrawala. It introduces a framework that allows for supporting various spatial contexts that can serve as additional conditionings to Diffusion models such as Stable Diffusion. ([View Highlight](https://read.readwise.io/read/01hcwzhmebxb1cesv8040f77n8))
- Training ControlNet is comprised of the following steps:
  1. Cloning the pre-trained parameters of a Diffusion model, such as Stable Diffusion's latent UNet, (referred to as “trainable copy”) while also maintaining the pre-trained parameters separately (”locked copy”). It is done so that the locked parameter copy can preserve the vast knowledge learned from a large dataset, whereas the trainable copy is employed to learn task-specific aspects.
  2. The trainable and locked copies of the parameters are connected via “zero convolution” layers (see [here](https://github.com/lllyasviel/ControlNet#controlnet) for more information) which are optimized as a part of the ControlNet framework. This is a training trick to preserve the semantics already learned by frozen model as the new conditions are trained.
  Pictorially, training a ControlNet looks like so:
  ![](https://github.com/lllyasviel/ControlNet/raw/main/github_page/sd.png)
  *The diagram is taken from [here](https://github.com/lllyasviel/ControlNet/blob/main/github_page/sd.png).* ([View Highlight](https://read.readwise.io/read/01hcwzjgdsghq8kaarjhvaqmk3))
- Every new type of conditioning requires training a new copy of ControlNet weights. The paper proposed 8 different conditioning models that are all [supported](https://huggingface.co/lllyasviel?search=controlnet) in Diffusers! ([View Highlight](https://read.readwise.io/read/01hcwzmenwxkf6sgvd3reykvbt))
- For inference, both the pre-trained diffusion models weights as well as the trained ControlNet weights are needed. For example, using [Stable Diffusion v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5) with a ControlNet checkpoint require roughly 700 million more parameters compared to just using the original Stable Diffusion model, which makes ControlNet a bit more memory-expensive for inference. ([View Highlight](https://read.readwise.io/read/01hcwznhy83qf3tsxz5k07v075))
- Because the pre-trained diffusion models are locked during training, one only needs to switch out the ControlNet parameters when using a different conditioning. This makes it fairly simple to deploy multiple ControlNet weights in one application as we will see below. ([View Highlight](https://read.readwise.io/read/01hcwzp5zp0tc8wchfasmajp0w))
- We will explore different use cases with the `StableDiffusionControlNetPipeline` in this blog post. The first ControlNet model we are going to walk through is the [Canny model](https://huggingface.co/runwayml/stable-diffusion-v1-5) - this is one of the most popular models that generated some of the amazing images you are libely seeing on the internet. ([View Highlight](https://read.readwise.io/read/01hcwzprzm1z1w0q27wx499nbs))
- Instead of using Stable Diffusion's default [PNDMScheduler](https://huggingface.co/docs/diffusers/main/en/api/schedulers/pndm), we use one of the currently fastest diffusion model schedulers, called [UniPCMultistepScheduler](https://huggingface.co/docs/diffusers/main/en/api/schedulers/unipc). Choosing an improved scheduler can drastically reduce inference time - in our case we are able to reduce the number of inference steps from 50 to 20 while more or less keeping the same image generation quality. More information regarding schedulers can be found [here](https://huggingface.co/docs/diffusers/main/en/using-diffusers/schedulers). ([View Highlight](https://read.readwise.io/read/01hcwzs033dy58kj6sf4bnn8t7))
- Remember that during inference diffusion models, such as Stable Diffusion require not just one but multiple model components that are run sequentially. In the case of Stable Diffusion with ControlNet, we first use the CLIP text encoder, then the diffusion model unet and control net, then the VAE decoder and finally run a safety checker. Most components are only run once during the diffusion process and are thus not required to occupy GPU memory all the time. By enabling smart model offloading, we make sure that each component is only loaded into GPU when it's needed so that we can significantly save memory consumption without significantly slowing down infenence. ([View Highlight](https://read.readwise.io/read/01hcwzt0hrnphw8g1zm6kfdg4g))
- Finally, we want to take full advantage of the amazing [FlashAttention/xformers](https://github.com/facebookresearch/xformers) attention layer acceleration, so let's enable this! If this command does not work for you, you might not have `xformers` correctly installed. In this case, you can just skip the following line of code. ([View Highlight](https://read.readwise.io/read/01hcwztcrp9w3yz620nxkxe8r9))
