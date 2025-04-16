---
author: [[Andrew]]
title: "How to Use InstantID to Copy Faces"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://stable-diffusion-art.com/wp-content/uploads/2024/02/instantid_cover.png)

## Metadata
- Author: [[Andrew]]
- Full Title: How to Use InstantID to Copy Faces
- URL: https://stable-diffusion-art.com/instantid/

## Highlights
- [InstantID](https://github.com/InstantID/InstantID) uses [InsightFace](https://github.com/deepinsight/insightface) to detect, crop and extract a face embedding from the reference face. The embedding is then used with the IP-adpater to control image generation. This part is very similar to the [IP-Adapter Face ID](https://stable-diffusion-art.com/ip-adapter/). ([View Highlight](https://read.readwise.io/read/01hpyyn7rx3hnksb8qc86p3fq0))
- To put a face, or anything, in Stable Diffusion, you can train a [checkpoint](https://stable-diffusion-art.com/dreambooth) or a [LoRA](https://stable-diffusion-art.com/train-lora) models. This approach usually gives the best result but it is time-consuming and requires some skill in training models. ([View Highlight](https://read.readwise.io/read/01hpyynrtytqz50p75gnktrrmb))
- Running InstantID requires close to 20 GB of VRAM in my test. If you run into memory issue, you can try the **Low VRAM** setting in ControlNet, and the [SDXL memory optimization](https://stable-diffusion-art.com/speed-up-stable-diffusion/#SDXL_settings) options. ([View Highlight](https://read.readwise.io/read/01hpyyp2tqsh7jrkpvmpjskvkf))
