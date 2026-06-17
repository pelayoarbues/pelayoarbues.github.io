---
author: "[[Andrew]]"
title: 'Inpainting: A Complete Guide'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://stable-diffusion-art.com/wp-content/uploads/2023/11/cover-inpainting.png)

## Metadata
- Author: [[Andrew]]
- Full Title: Inpainting: A Complete Guide
- URL: https://stable-diffusion-art.com/inpainting/

## Highlights
- How does inpainting work?
  Inpainting is similar to [image-to-image](https://stable-diffusion-art.com/how-to-use-img2img-to-turn-an-amateur-drawing-to-professional-with-stable-diffusion-image-to-image/), where random noise is added to the whole image in the latent space before denoising. But random noise is added only to the masked area in inpainting. ([View Highlight](https://read.readwise.io/read/01hmr5t0jp1rgbk0fmj2p3mr0j))
- Denoising strength
  Denoising strength is the most important setting in inpainting. It controls how much the masked area should change.
  As a rule of thumbnail, too high a value causes the inpainting result to be inconsistent with the rest of the image. (There’s a way to fix it in the later part of this article) Too low a value could result in a blurry result. Setting denoising strength to 0.5 is a good starting point. ([View Highlight](https://read.readwise.io/read/01hmr5tcz2ta25kghmt0aj4w5p))
- Do you wonder why Stable Diffusion is not able to generate the face correctly in the first place? It is because the face is too small. The native resolution of Stable Diffusion v1 is 512×512 pixels. It cannot generate a face not covered by enough pixels.
  The **only masked** option is designed to fix this. It crops out the masked area and uses the whole resolution for that area. It then scales the result back to its original size. It fixes the issues of painting small faces or objects.
  The **whole picture** option takes the input picture and masks as is without cropping.
  The most common use case of the **only masked** option is to regenerate faces in finer detail. It is often at the expense of the consistency of the rest of the image since you crop out the masked area for inpainting. ([View Highlight](https://read.readwise.io/read/01hmr5vs1x4c4d005fps23q10x))
- Masked content
  The **Masked content** option specifies whether you want to change the image of the masked area before inpainting.
  • **Original**: No change.
  • **Fill**: Replace with the average color of the masked area.
  • **Latent noise**: Random noise only.
  • **Latent nothing**: No color or noise (An all-zero latent image)
  **Original** is the most common selection in **masked content**. You may want to use **Fill** when you want something quite different from the original image. **Latent noise** and **Latent nothing** usually end in disasters. ([View Highlight](https://read.readwise.io/read/01hmr5xpxf9ahyk217eazycvm6))
- One of the most powerful ways to use inpainting is to change the content of the masked area. For example, using a technique for generating [consistent faces](https://stable-diffusion-art.com/consistent-face/), I replaced “audrey hepburn” with
  > Ana de Armas, (emma watson:0.5), Liza Soberano
  Now I get a consistent generic face with the look I wanted. ([View Highlight](https://read.readwise.io/read/01hmr5ya8hdvndbfpqrw0sq1q9))
- Do you know there are Stable Diffusion models designed for inpainting? The model is slightly different from the standard Stable Diffusion model. It has 5 additional input channels to the UNet representing the masks and masked images.
  You normally don’t need an inpainting model when fixing a small patch. They are for inpainting big areas. Since changing the [checkpoint model](https://stable-diffusion-art.com/models/) could greatly impact the style, you should use an inpainting model that matches your original model. ([View Highlight](https://read.readwise.io/read/01hmr5za6gvvxcj6mtvb67ky0g))
- The inpainting model can produce a higher global consistency at high denoising strengths. See the images below. I inpainted the lower half of the image with the original and the inpainting models. ( ([View Highlight](https://read.readwise.io/read/01hmr5zgkf0ypbhg4knxnr4968))
- ControlNet Tile allows you to follow the original content closely while using a high denoising strength.
  To use ControlNet Tile, scroll down to the **ControlNet** section in the img2img tab.
  • Enable: Yes
  • Control Type: Tile/Blur
  • Preprocessor: tile_resample
  • Model: control_xxx_sd15_tile
  • ControlNet: Starts with 1. Lower it if you see artifacts.
  You should not use an inpainting checkpoint model with ControlNets because they are usually not trained with it. ([View Highlight](https://read.readwise.io/read/01hmr6054xqbfj52cnecv34bw0))
- Adjust the **downsampling rate** as needed. A higher downsampling rate makes the control image blurrier and will change the image more.
  Using a denoising strength of 1, we can still inpaint the face and preserve details like hairstyle. See below the hairstyle preserves after the face swap. ([View Highlight](https://read.readwise.io/read/01hmr60dxnw19gv7ssppbmc34k))
- Remember the inpainting checkpoint model allows you to use a high denoising strength without losing global consistency? You can achieve the same effect with ControlNet inpainting.
  • Preprocessor: inpaint_only
  • Model: control_xxxx_sd15_inpaint
  The images below are generated using denoising strength to 1. ControlNet inpainting allows you to regenerate the clothing completely without sacrificing global consistency. ([View Highlight](https://read.readwise.io/read/01hmr60xm7f1ynk8g8n1zsnqtf))
