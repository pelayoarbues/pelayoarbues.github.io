---
author: [[rentry.org]]
title: "Rough FAQ for 東方Project AI"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://i.imgur.com/AbCsLEx.png)

## Metadata
- Author: [[rentry.org]]
- Full Title: Rough FAQ for 東方Project AI
- URL: https://rentry.org/tohoaifaq#opinionated-lora-guide-for-colab

## Highlights
- Both LoRA and TI serve as an extension for your model, essentially. 
  The most common usage for them is to be able to prompt for things that your model doesn't quite get on its own, like characters or artist styles.
  One is not necessarily better than the other, but LoRA are easier to make and potentially more powerful, so you'll probably be seeing more of LoRA than TIs (Textual Inversion embeddings).
  Hypernetworks are yet another beast and have fallen out of grace a tad.
  Here's a comparison: 
  ![](https://i.imgur.com/Jqn1tWv.jpg) ([View Highlight](https://read.readwise.io/read/01hbezdgvdqgdnt94h12y1sr2g))
- Q: What's a vae?[](https://rentry.org/tohoaifaq#q-whats-a-vae)
  Your images looking desaturated? The preview looks way more vibrant than the final product?
  You're missing or not using a proper vae - make sure it's selected in the settings. 
  Vae is basically a way to improve accuracy and some details - models already come with some sort of built-in vae, but using an external one is often beneficial. 
  The most common ones are the kl-f8-anime2 vae and the Anything vae. 
  Another great one is the blessed vae which is a slightly less saturated version of the kl-f8-anime2 vae. ([View Highlight](https://read.readwise.io/read/01hbeze8jmh96gqwz0xn9ahn31))
- I got a very good image but just one slight thing is wrong...[](https://rentry.org/tohoaifaq#q-i-got-a-very-good-image-but-just-one-slight-thing-is-wrong)
  Your options here are inpainting, which can yield good results, especially coupled with editing the picture in an image editor, or seed variation.
  For seed variation: 
  Setting the same parameters as you did for your previous picture, select the Extra checkbox next to the seed and then try generating with a variation strength of 0.01 to 0.1 - it's a simple way to create similar pictures with small details changed, you might luck into a good one. 
  At values above 0.1 the picture might have more significant changes.
  Another cool trick is: 
  If you leave your prompt mostly unchanged you can mess with the tag weights without disturbing the image composition too much, like decreasing blue hair down to (blue hair:0.6). 
  You can also append tags at the very end of your prompt, since the order of the tags in your prompt matters. ([View Highlight](https://read.readwise.io/read/01hbezh97h8bygr7jyvhx1zbt8))
- This particular syntax is called prompt editing. This will make the model start generating the first thing then swap to the other thing. 
  If the number is a float below 1 - that's step percentage. If it's an int above - that's the step number.
  `[hatsune miku:cat:0.2]` will start trying to generate a cat after 20% of total steps. 
  `[hatsune miku:cat:15]` will start trying to generate a cat after 15 steps. 
  `[hatsune miku:10]` will start trying to add a miku after 10 steps. 
  `[hatsune miku::10]` will remove the miku tag after 10 steps.
  `[cat|dog]` is similar to that but will swap between these every step. ([View Highlight](https://read.readwise.io/read/01hbezkszyn724rrw0r83tb8z5))
- These are a sampler parameter and essentially a precision parameter, ENSD is usually set to 31337 and Clip Skip to 2, for anime models based off of SD1.5 and NAI. 
  Both are values found to match NAI generations the closest - it's just how the NAI-based models work and it has become the de-facto standard. 
  Clip Skip doesn't affect SD2.1 models. 
  Eta Noise Seed Delta can be set in Settings > Sampler parameters 
  Clip Skip should be visible near the top of your WebUI page, otherwise it's in Settings > Stable Diffusion ([View Highlight](https://read.readwise.io/read/01hbg393x87asx1st28402h05p))
- If you want a higher quality LoRA you should most likely comb over the tags manually, look for wrong tags and remove them. ([View Highlight](https://read.readwise.io/read/01hbgpjjkhzgckey2db3x4gemd))
    - Tags: [[favorite]] 
- test your LoRA. 
  Test each epoch if you don't have a potato, I often run an XYZ grid with all the epochs at 0.25, 0.5, 0.75, 1 strength. 
  Test if it's possible to dress up your girl in clothes she doesn't wear 'canonically', test if the LoRA doesn't affect the style, test how much does it affect the image in general - it's best if it doesn't change the generation other than the girl too much. 
  Test if it's... visibly fucked in any other ways. 
  If it looks visibly fucked it probably means it's overcooked - test earlier epochs and if all are FUBAR, retrain with lower unet. 
  If it doesn't affect the image enough, test higher epoch and if they are all insufficient - retrain with higher unet. 
  If the image is some cursed shit you might have mistyped a value somewhere or something beyond our control got fucked up. ([View Highlight](https://read.readwise.io/read/01hbr011n6x4nqb8yxmkcba7nh))
- Style LoRA are similar to characters but a few things - you don't need to train the text encoder in my opinion, and it's better to set unet lower, try 1e-4, and let it simmer, 4k steps should be more than enough again but you might as well bump the number of epochs by a few - it'll only take a few more minutes to train anyway. ([View Highlight](https://read.readwise.io/read/01hbgqcxf7jcw819fm43am81x9))
- First, network dimensions and alpha, those control how much can your model theoretically learn, they also affect filesize. 
  But bigger doesn't mean better in this case, as with higher dimensions they might also learn things they're not supposed to easier. 
  128dim and 128 alpha are the unfortunate defaults that got kinda popular, but they're very much an overkill for most stuff.
  Unet and Text Encoder learning rates are how fast do they learn stuff - setting it too high will cause it to learn useless stuff and fry fast, while setting it too low might cause the LoRA to have no effect, or have to be cooked for a much longer time. ([View Highlight](https://read.readwise.io/read/01hbgqdgwpzyqgs1q1wdws00ym))
