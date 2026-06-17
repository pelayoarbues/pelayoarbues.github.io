---
author: "[[huggingface.co]]"
title: 'SDXL in 4 Steps With Latent Consistency LoRAs'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/lcm_sdxl/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: SDXL in 4 Steps With Latent Consistency LoRAs
- URL: https://huggingface.co/blog/lcm_lora

## Highlights
- We are delighted to announce a new method that can essentially make Stable Diffusion and SDXL faster, as if they had been distilled using the LCM process! How does it sound to run *any* SDXL model in about 1 second instead of 7 on a 3090, or 10x faster on Mac? Read on for details! ([View Highlight](https://read.readwise.io/read/01hf4488jpyqyvbr9s4dy00gz4))
- So, what’s the trick? For latent consistency distillation, each model needs to be distilled separately. The core idea with LCM LoRA is to train just a small number of adapters, [known as LoRA layers](https://huggingface.co/docs/peft/conceptual_guides/lora), instead of the full model. The resulting LoRAs can then be applied to any fine-tuned version of the model without having to distil them separately ([View Highlight](https://read.readwise.io/read/01hf449hta8tfgrh4fbzxjk1v7))
- Select an available teacher model from the Hub. For example, you can use [SDXL (base)](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0), or any fine-tuned or dreamboothed version you like. ([View Highlight](https://read.readwise.io/read/01hf449p4jxqxqv5mbthtqgb1k))
- [Train a LCM LoRA](https://huggingface.co/blog/lcm_lora#how-to-train-lcm-models-and-loras) on the model. LoRA is a type of performance-efficient fine-tuning, or PEFT, that is much cheaper to accomplish than full model fine-tuning. ([View Highlight](https://read.readwise.io/read/01hf449yps4jn1e5g6t6ppvj4c))
- Use the LoRA with any SDXL diffusion model and the LCM scheduler; bingo! You get high-quality inference in just a few steps. ([View Highlight](https://read.readwise.io/read/01hf44a0grh3rjvjsngptx0p3s))
- Fast inference of Stable Diffusion and SDXL enables new use-cases and workflows. To name a few:
  • **Accessibility**: generative tools can be used effectively by more people, even if they don’t have access to the latest hardware.
  • **Faster iteration**: get more images and multiple variants in a fraction of the time! This is great for artists and researchers; whether for personal or commercial use.
  • Production workloads may be possible on different accelerators, including CPUs.
  • Cheaper image generation services. ([View Highlight](https://read.readwise.io/read/01hf44avsd0p57yp2cs3508nmj))
- To gauge the speed difference we are talking about, generating a single 1024x1024 image on an M1 Mac with SDXL (base) takes about a minute. Using the LCM LoRA, we get great results in just ~6s (4 steps). This is an order of magnitude faster, and not having to wait for results is a game-changer. Using a 4090, we get almost instant response (less than 1s). This unlocks the use of SDXL in applications where real-time events are a requirement. ([View Highlight](https://read.readwise.io/read/01hf44b75x14etwgcpgrm4esct))
- As expected, using just **1** step produces an approximate shape without discernible features and lacking texture. However, results quickly improve, and they are usually very satisfactory in just 4 to 6 steps. Personally, I find the 8-step image in the previous test to be a bit too saturated and “cartoony” for my taste, so I’d probably choose between the ones with 5 and 6 steps in this example. Generation is so fast that you can create a bunch of different variants using just 4 steps, and then select the ones you like and iterate using a couple more steps and refined prompts as necessary.
  [](https://huggingface.co/blog/lcm_lora#guidance-scale-and-negative-prompts) ([View Highlight](https://read.readwise.io/read/01hf44d0fdj87p76cxgc71s9dm))
- Note that in the previous examples we used a `guidance_scale` of `1`, which effectively disables it. This works well for most prompts, and it’s fastest, but ignores negative prompts. You can also explore using negative prompts by providing a guidance scale between `1` and `2` – we found that larger values don’t work. ([View Highlight](https://read.readwise.io/read/01hf44demj83ff1xw20a6vs795))
- As you can see, images in this example are pretty much useless until ~20 steps (second row), and quality still increases niteceably with more steps. The details in the final image are amazing, but it took 50 steps to get there. ([View Highlight](https://read.readwise.io/read/01hf44e2k465wg5vvxxxt4e9yg))
- The integration of LCM in `diffusers` makes it possible to take advantage of many features and workflows that are part of the diffusers toolbox. For example:
  • Out of the box `mps` support for Macs with Apple Silicon.
  • Memory and performance optimizations like flash attention or `torch.compile()`.
  • Additional memory saving strategies for low-RAM environments, including model offload.
  • Workflows like ControlNet or image-to-image.
  • Training and fine-tuning scripts.
  [](https://huggingface.co/blog/lcm_lora#benchmarks) ([View Highlight](https://read.readwise.io/read/01hf44h4jkvhddyh2b3hmkwe5g))
- Using the [diffusers + PEFT integration](https://huggingface.co/docs/diffusers/main/en/tutorials/using_peft_for_inference), you can combine LCM LoRAs with regular SDXL LoRAs, giving them the superpower to run LCM inference in only 4 steps. ([View Highlight](https://read.readwise.io/read/01hf44j0efgyygz79c8vhepgt7))
- How to Train LCM Models and LoRAs
  As part of the `diffusers` release today, we are providing training and fine-tuning scripts developed in collaboration with the LCM team authors. They allow users to:
  • Perform full-model distillation of Stable Diffusion or SDXL models on large datasets such as Laion.
  • Train LCM LoRAs, which is a much easier process. As we've shown in this post, it also makes it possible to run fast inference with Stable Diffusion, without having to go through distillation training. ([View Highlight](https://read.readwise.io/read/01hf44k7s6cx9h0vmnew327fq0))
