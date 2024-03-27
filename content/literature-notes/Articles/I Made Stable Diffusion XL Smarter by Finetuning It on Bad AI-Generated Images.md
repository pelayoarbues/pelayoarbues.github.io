---
author: [[minimaxir.com]]
title: "I Made Stable Diffusion XL Smarter by Finetuning It on Bad AI-Generated Images"
date: 2023-11-08
tags: 
- articles
- literature-note
---
![rw-book-cover](https://minimaxir.com/2023/08/stable-diffusion-xl-wrong/featured.webp)

## Metadata
- Author: [[minimaxir.com]]
- Full Title: I Made Stable Diffusion XL Smarter by Finetuning It on Bad AI-Generated Images
- URL: https://minimaxir.com/2023/08/stable-diffusion-xl-wrong/

## Highlights
- Training Stable Diffusion itself, even the smaller models, requires many expensive GPUs training for hours. That’s where [LoRAs](https://github.com/microsoft/LoRA) come in: instead, a small adapter to the visual model is trained, which can be done on a single cheap GPU in 10 minutes, and the quality of the final model + LoRA is comparable to a full finetune (colloquially, when people refer to finetuning Stable Diffusion, it usually means creating a LoRA). Trained LoRAs are a discrete small binary file, making them easy to share with others or on repositories such as [Civitai](https://civitai.com). A minor weakness with LoRAs is that you can only have one active at a time: it’s possible to merge multiple LoRAs to get the benefits of all of them but it’s a delicate science. ([View Highlight](https://read.readwise.io/read/01heqkd329gzpt8gkjtm8b2c8r))
- Before Stable Diffusion LoRAs became more widespread, there was [textual inversion](https://arxiv.org/abs/2208.01618), which allows the text encoder to learn a concept, but it takes hours to train and the results can be unwieldy. In a [previous post](https://minimaxir.com/2022/09/stable-diffusion-ugly-sonic/), I trained a textual inversion on the memetic [Ugly Sonic](https://knowyourmeme.com/memes/ugly-sonic), as he was not in Stable Diffusion’s source dataset and therefore he would be unique. The generation results were mixed. ([View Highlight](https://read.readwise.io/read/01heqkde2pkcgzree5bb97fbdz))
- I figured training a LoRA on Ugly Sonic would be a good test case for SDXL’s potential. Fortunately, Hugging Face provides a [train_dreambooth_lora_sdxl.py script](https://github.com/huggingface/diffusers/tree/main/examples/dreambooth) for training a LoRA using the SDXL base model which works out of the box although I tweaked the parameters a bit. The generated Ugly Sonic images from the [trained LoRA](https://huggingface.co/minimaxir/sdxl-ugly-sonic-lora) are much better and more coherent over a variety of prompts, to put it mildly. ([View Highlight](https://read.readwise.io/read/01heqkdtz2m9csbt6hskh0q3sc))
- With that success, I decided to redo [another textual inversion experiment](https://minimaxir.com/2022/11/stable-diffusion-negative-prompt/) by instead training a LoRA on heavily distorted, garbage images conditioned on `wrong` as a prompt in the hopes that the LoRA could then use `wrong` as a “negative prompt” and steer away from such images to generate less-distorted images. I [wrote a Jupyter Notebook](https://github.com/minimaxir/sdxl-experiments/blob/main/wrong_image_generator.ipynb) to create synthetic “wrong” images using SDXL itself, this time using a variety of prompt weightings to get more distinct examples of types of bad images, such as `blurry` and `bad hands`. Ironically, we need to use SDXL to create high resolution low quality images. ([View Highlight](https://read.readwise.io/read/01heqkedpe06hd8dx7qbj03asd))
- I trained and loaded [the LoRA](https://huggingface.co/minimaxir/sdxl-wrong-lora) into Stable Diffusion XL base model (the refiner does not need a LoRA) and wrote a comparison [Jupyter Notebook](https://colab.research.google.com/github/minimaxir/sdxl-experiments/blob/main/sdxl_wrong_comparison.ipynb) to compare the results with a given prompt from:
  • The base + refiner pipeline with no LoRA. (our baseline)
  • The pipeline with no LoRA using `wrong` as the negative prompt (to ensure that there isn’t a placebo effect)
  • The pipeline **with the LoRA** using `wrong` as the negative prompt (our target result) ([View Highlight](https://read.readwise.io/read/01heqkfdmvmegeq26yt1w0edjs))
- The `wrong` prompt on the base model adds some foliage and depth to the forest image, but the LoRA adds a lot more: more robust lighting and shadows, more detailed foliage, and changes the perspective of the wolf to look at the camera which is more interesting.
  We can get a different perspective of the wolf with similar photo composition by adding “extreme closeup” to the prompt and reusing the same seed. ([View Highlight](https://read.readwise.io/read/01heqkfv15dx8t2339v0hbbxm7))
- In this case, the LoRA has far better texture, vibrance, and sharpness than the others. But it’s notable that just adding a `wrong` prompt changes the perspective.
  Another good test case is food photography, especially weird food photography like I [generated with DALL-E 2](https://minimaxir.com/2022/07/food-photography-ai/). Can SDXL + the `wrong` LoRA handle [non-Euclidian](https://en.wikipedia.org/wiki/Non-Euclidean_geometry) hamburgers with some prompt weighting to ensure they’re weird? ([View Highlight](https://read.readwise.io/read/01heqkg4ftj821gn6yz8jjy4mw))
- The answer is that it can’t, even after multiple prompt engineering attempts. However, this result is still interesting: the base SDXL appears to have taken the “alien” part of the prompt more literally than expected (and gave it a cute bun hat!) but the LoRA better understands the spirit of the prompt by creating an “alien” burger that humans would have difficulty eating, plus shinier presentation aesthetics. ([View Highlight](https://read.readwise.io/read/01heqkhq5fe5f8p7w61yh89smn))
- A notable improvement with Stable Diffusion 2.0 was text legibility. Can SDXL and the `wrong` LoRA make text even more readable, such as text-dense newspaper covers? ([View Highlight](https://read.readwise.io/read/01heqkhywq4dswjhwg6j9b259f))
- ext legibility is definitely improved since Stable Diffusion 2.0 but appears to be the same in all cases. What’s notable with the LoRA is that it has improved cover typesetting: the page layout is more “modern” with a variety of article layouts, and headlines have proper relative font weighting. Meanwhile, the base model even with the `wrong` negative prompt has a boring layout and is on aged brown paper for some reason. ([View Highlight](https://read.readwise.io/read/01heqkjer184a185ejfnp62360))
- Look at Taylor’s right arm: in the default SDXL, it’s extremely unrealistic and actually made *worse* when adding `wrong`, but in the LoRA it’s fixed! Color grading with the LoRA is much better, with her jacket being more distinctly white instead of a yellowish white. Don’t look closely at her hands in any of them though: creating people with SDXL 1.0 is still tricky and unreliable! ([View Highlight](https://read.readwise.io/read/01heqkkmfb9a63ye1qgbjm7ea4))
- ’m actually not 100% sure what’s going on here. I thought that the `wrong` LoRA trick would just improve the quality and clarity of the generated image, but it appears the LoRA is *making SDXL behave smarter* and more faithful to the spirit of the prompt. At a technical level, the negative prompt sets the area of the latent space where the diffusion process starts; this area is the same for both the base model using the `wrong` negative prompt and the LoRA which uses the `wrong` negative prompt. My intuition is that the LoRA reshapes this undesirable area of the vast highdimensional latent space to be more similar to the starting area, so it’s unlikely normal generation will hit it and therefore be improved. ([View Highlight](https://read.readwise.io/read/01heqkmp13g7h1ymk860kmyrsg))
- Training on SDXL on bad images in order to improve it is technically a form of [Reinforcement Learning from Human Feedback](https://openai.com/research/learning-from-human-preferences) (RLHF): the [same technique](https://openai.com/research/instruction-following) used to make ChatGPT as powerful as it is. While OpenAI uses reinforcement learning to improve the model from positive user interactions and implicitly reducing negative behavior, here I use *negative* user interactions (i.e. selecting knowingly bad images) to implicitly increase positive behavior. But with Dreambooth LoRAs, you don’t nearly need as much input data as large language models do. ([View Highlight](https://read.readwise.io/read/01heqkn2mssb7dhj1m8n25m3y3))
- There’s still a lot of room for development for “negative LoRAs”: my synthetic dataset generation parameters could be much improved and the LoRA could be trained for longer. But I’m very happy with the results so far, and will be eager to test more with negative LoRAs such as merging with other LoRAs to see if it can enhance them (especially a `wrong` LoRA + Ugly Sonic LoRA!) ([View Highlight](https://read.readwise.io/read/01heqknc2vb3mt2fbs5mmsb6me))