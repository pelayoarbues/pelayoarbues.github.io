---
author: [[civitai.com]]
title: "Simple Workflow That Is Fast and Highly Detailed"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/971aa068-1e2f-4943-b2e1-1bc11f81025f/width=1200/971aa068-1e2f-4943-b2e1-1bc11f81025f.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: Simple Workflow That Is Fast and Highly Detailed
- URL: https://civitai.com/articles/561/simple-workflow-that-is-fast-and-highly-detailed

## Highlights
- I like to generate images with high resolution and detail, but the problem is that with my graphics card the process becomes eternal. That's why I never generate high-resolution images from txt2img.
  In txt2img, I generate low-quality, low-resolution images, then move them to img2img. Although it might seem logical, most people either spend too much time on txt2img or settle for the first image. ([View Highlight](https://read.readwise.io/read/01heq6s7s6wst18ha6x986g6f2))
- For this reason, I generate them at 320x480 o 344x512. For the sampler, I always use DPM++2M Karras and 20 steps. For Batch size, I usually use 6, as it's very fast with this resolution. (In my case, 6 images in 8-9 seconds).
  But it's not just about the time, since I could increase the size, but from the tests I have conducted, I prefer not to make it larger since in img2img at 0.5 denoising offers me better results. ([View Highlight](https://read.readwise.io/read/01heq6ses6bt7bqmmrrpabjqs1))
- I usually generate many more images until I get the one I like or am looking for, as the generation is extremely fast. ([View Highlight](https://read.readwise.io/read/01heq6skad4gsrbqrhh9ms7fzx))
- This is a clear example when I want more detail, as it's not always like this. For this reason, I use the "[Dynamic Thresholding (CFG Scale Fix)](https://github.com/mcmonkeyprojects/sd-dynamic-thresholding)" plugin, which allows me to significantly increase the CFG, obtaining a better response from the prompt and also with more detail. ([View Highlight](https://read.readwise.io/read/01heq6tfbr74p4wtgm83x96fwc))
- We move it to img2img using the button below the selected image.
  In img2img, in my case I use styles, so I add [<lora:difConsistency_photo:0.5>](https://civitai.com/models/87376/difconsistency-photo-pack), and [<lora:difConsistency_detail:0.75>](https://civitai.com/models/87378/difconsistency-detail-pack).
  In Negative, you can add whatever you consider necessary. I usually use [difConsistency_negative](https://civitai.com/models/87375/difconsistency-negative-pack) or some generic prompt like "(monochrome) (bad hands) (disfigured) (grain) (Deformed) (poorly drawn) (mutilated) (lowres) (deformed) (dark) (lowpoly) (CG) (3d) (blurry) (duplicate) (watermark) (label) (signature) (frames) (text), (nsfw:1.3) (nude:1.3) (nacked:1.3)".
  The configuration is the same; 2M Karras, 20 steps. But with the size 768x1280, and "Denoising Strength" at 0.5. I usually use between 0.4 and 0.6. Make sure the Seed is set to -1. ([View Highlight](https://read.readwise.io/read/01heq6v1yxc6cbt3ea0zw85awy))
- If you want more detail or definition, you can also include the "[Dynamic Thresholding (CFG Scale Fix)](https://github.com/mcmonkeyprojects/sd-dynamic-thresholding)" plugin, as we used before. In this case, due to the resolution, you can increase the CFG to 60 and Mimic CFG Scale to 30. ([View Highlight](https://read.readwise.io/read/01heq6vwagf6twrjyjmda40q2n))
