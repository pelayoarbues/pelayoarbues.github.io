---
title: Generating images with your LoRA like a Pro
date: 2023-11-13
tags:
  - permanent-note
  - stablediffusion
  - guide
  - GenAI
---
![Generated using SD15](madmen-inspired.png)

In a previous [post](Training%20a%20LoRa%20of%20your%20face%20with%20Stable%20Diffusion%201.5.md), I explained how to train a LoRA using your own images. I also offered some tips on generating images. However, that was just the tip of the iceberg. 

My friend David noticed that the model struggled to follow certain instructions related to creating the "Mad Men" atmosphere I desired.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">“scene from mad men” that’s how you prompt man! 😂</p>&mdash; David Fernández (@davidfq) <a href="https://twitter.com/davidfq/status/1711684407688384928?ref_src=twsrc%5Etfw">October 10, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">AI is failing, that prompt should have put a scotch in your hand and a Lucky in your lips</p>&mdash; David Fernández (@davidfq) <a href="https://twitter.com/davidfq/status/1711684949244297488?ref_src=twsrc%5Etfw">October 10, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Let's pick up where we left off. Here are the original positive and negative prompts I used:

```
(full body:1.4) of pelarbues man, solo, 1950s candid photo, 1950s office, 1950s office furniture, elegant office suit, scene from mad men, asymmetric face, dark hair, beard, thin, skin pores, focus on face, film grain, volumetric light, shadows, kodak portra 400, <lora:pelarbues:0.7>
```

For negative prompts (elements you don't want to appear), consider something like:

```
(deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb floating limbs (mutated hands and fingers:1.4), disconnected limbs mutation mutated ugly disgusting blurry amputation deformed legs mutilated body (2D) (3D) ((camera)) ((cartoony)) (CGI) ((drawing)) ((lowres)) ((painting)) ((sketchy)) ((The Sims)) (ugly) ((blur)) worst quality low quality normal quality:1.3 lowres
(deformed iris deformed pupils semi-realistic cgi 3d render sketch cartoon drawing anime mutated hands and fingers:1.4)
```

Although the positive prompt is a good start we can enhance it by adding some details. Here are a few suggestions:

- Choose a good model checkpoint. A model won't be able to generate styles it wasn’t trained on. Check out this curated collection of [Photo models](https://civitai.com/collections/101102) for SD1.5.
- Use other LoRAs to improve the quality of generated images. Some LoRAs I use include:
	- [Add More Details - Detail Enhancer / Tweaker](https://civitai.com/models/82098/add-more-details-detail-enhancer-tweaker-lora). This will help include intricate details in your image.
	- [Advanced Enhancer LoRA ](https://civitai.com/models/106717/advanced-enhancer-lora). This allows for different times of lightning and analog, filmish looks.
	-  [epiCRealismHelper](https://civitai.com/models/110334/epicrealismhelper). This can help get better skin details and realism for portrait photography.
	- [epiC35mm Lora](https://civitai.com/models/184260/epic35mm-lora). If you want a more analog style, you can use epiC35mm.
	- [Film Grain Control SD15](https://civitai.com/models/155526/film-grain-control-sd15). This gives your images a grainy look that emulates film photography.
	- [epi\_noiseoffset](https://civitai.com/models/13941/epinoiseoffset). This helps in adding better contrast and darker images.
	- [SDXLrender](https://civitai.com/models/171159/sdxlrender). It allows you to better control SD15. Check this [post](https://civitai.com/articles/2751/how-to-make-sd15-more-easily-controllable) for more information.

- Apply Textual Inversion or embeddings when you want to avoid certain elements in your images. Negative embeddings can be particularly useful, such as bad-hands5 when using Adetailer in the upscale and correction step. Here's a [collection of Embeddings](https://civitai.com/collections/67040) I've found useful.
- Generate images in batches with a random seed and a low number of steps (e.g., 20). When you find a composition you like, use the `Extra` checkbox by the seed and apply a small random variation (0.05 or so). This method can yield similar images to your preferred one, potentially fixing elements you don't like in some variations.
- [VAE RAW to obtain greater detail](https://civitai.com/articles/462). I recommend using difConsistency RAW VAE to achieve increased detail and avoid pastel effects. This method may be useful for professional work with high resolutions but requires further post-processing.
- Use controlnet if you want the image to have a very specific composition. In the image above I used captures of Don and Betty Draper with Canny Controlnet to get an image as close as possible to a scene of Madmen. 
- Use upscalers. My favorites are 4x-Ultrasharp, 4x_foolhardi_Remacri, and 4xFaceUpSharpDAT.

For more tips, check out posts like [[Insights for Intermediates] - How to Craft the Images You Want With A1111](literature-notes/Articles/[Insights%20for%20Intermediates]%20-%20How%20to%20Craft%20the%20Images%20You%20Want%20With%20A1111.md) and  [Simple Workflow That Is Fast and Highly Detailed](literature-notes/Articles/Simple%20Workflow%20That%20Is%20Fast%20and%20Highly%20Detailed.md).

Details for cover image using my LoRA:

```
portrait of pelarbues man, solo, 1950s candid photo, 1950s office, 1950s office furniture, elegant office suit,from mad men, holding a (Bohemia Crystal Quadro Whiskey glass:1.2), asymmetric face, dark hair, light blue eyes, beard, thin, skin pores, focus on face,film grain,volumetric light, shadows, kodak portra 400, <lora:pelarbues:0.7>,  <lora:more_details:1> ,  <lora:AdvancedEnhancer:2>, <lora:Better Portrait Lighting:0.8>, <lora:epiC35mm:1>

Negative prompt: CyberRealistic_Negative-neg (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, deformed legs, mutilated body, (2D), (3D), ((camera)), ((cartoony)), (CGI), ((drawing)), ((lowres)), ((painting)), ((sketchy)), ((The Sims)), (ugly), ((blur)) (worst quality, low quality, normal quality:1.3), lowres, (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4)

Steps: 40, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 938383883, Size: 1536x1024, Model hash: f6e523de7e, Model: fennPhoto_v10, VAE hash: 735e4c3a44, VAE: vae-ft-mse-840000-ema-pruned.safetensors, Denoising strength: 0, Ultimate SD upscale upscaler: 4xFaceUpSharpDAT, Ultimate SD upscale tile_width: 512, Ultimate SD upscale tile_height: 512, Ultimate SD upscale mask_blur: 8, Ultimate SD upscale padding: 32, ADetailer model: face_yolov8n.pt, ADetailer prompt: "portrait of pelarbues man, <lora:pelarbues:1>, <lora:more_details:1> ,  <lora:AdvancedEnhancer:2>, <lora:Better Portrait Lighting:0.8>, <lora:epiC35mm:1>", ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate/erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.3, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer ControlNet model: control_v11p_sd15_inpaint [ebff9138], ADetailer ControlNet module: inpaint_global_harmonious, ADetailer model 2nd: hand_yolov8n.pt, ADetailer prompt 2nd: "hand, good hands, good fingers, <lora:more_details:1> ,  <lora:AdvancedEnhancer:2>, <lora:Better Portrait Lighting:0.8>, <lora:epiC35mm:1>", ADetailer negative prompt 2nd: "bad anatomy, bad fingers, ", ADetailer confidence 2nd: 0.3, ADetailer dilate/erode 2nd: 4, ADetailer mask blur 2nd: 4, ADetailer denoising strength 2nd: 0.4, ADetailer inpaint only masked 2nd: True, ADetailer inpaint padding 2nd: 32, ADetailer version: 23.9.3, ControlNet 0: "Module: canny, Model: control_v11p_sd15_canny [d14c016b], Weight: 1, Resize Mode: Just Resize, Low Vram: False, Processor Res: 512, Threshold A: 100, Threshold B: 200, Guidance Start: 0, Guidance End: 1, Pixel Perfect: True, Control Mode: Balanced", Lora hashes: "AdvancedEnhancer: bd3301b4928d, epiC35mm: 7a3667450b02", TI hashes: "CyberRealistic_Negative-neg: 65f3ea567c04", Version: v1.6.0

```