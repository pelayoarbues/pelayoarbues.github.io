---
author: "[[Andrew]]"
title: 'What Is Denoising Strength?'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://stable-diffusion-art.com/wp-content/uploads/2024/01/image-215.png)

## Metadata
- Author: [[Andrew]]
- Full Title: What Is Denoising Strength?
- URL: https://stable-diffusion-art.com/denoising-strength/

## Highlights
- Denoising strength determines how much noise is added to an image before the sampling steps. It is a common setting in image-to-image applications in Stable Diffusion.
  The value of denoising strength ranges from 0 to 1. 0 means no noise is added to the input image. 1 means the input image is completely replaced with noise.
  You can understand denoising strength as the balance between preserving the original image and creating a completely new image.
  The higher the denoising strength, the more the image will change. ([View Highlight](https://read.readwise.io/read/01hmr414zyktp676h7etkvkjcz))
- You should not set the denoising strength too high in inpainting. Otherwise, the generation will be incoherent to the rest of the image.
  There are ways to use a high denoising strength in inpainting:
  • Use an inpainting checkpoint model.
  • Use ControlNet.
  See the [inpainting tutorial](https://stable-diffusion-art.com/inpainting/) for details. ([View Highlight](https://read.readwise.io/read/01hmr41qdsyrpg8jnadnrcesy7))
