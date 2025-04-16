---
author: [[AGillySuit]]
title: 'What Exactly to Caption for Flux LoRa Training?'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[AGillySuit]]
- Full Title: What Exactly to Caption for Flux LoRa Training?
- URL: https://www.reddit.com/r/FluxAI/comments/1fcrj3j/what_exactly_to_caption_for_flux_lora_training/

## Highlights
- Flux is kind of a different animal because of the way the model works so anything you read about training, make sure it is in reference to Flux. That being said, it is so new that most people are still learning.
  I can only speak in terms of character Lora's, but in my experience, even with Flux, it is a good idea to be pretty specific with detailing things in the picture that are not "part" of the character. It will simply perform better with prompt adherence than if you are not.The captions should be exactly how you prompt Flux - natural language. Flux is a lot more forgiving with this, but in my experience it is still better to include details. For instance - if you are training a Harley Quinn model, you wouldn't add 'face makeup, etc' because you would want that in your generations, but if you were training a Margot Robbie lora, you would want to add 'wearing face makeup'. That way the model knows that that aspect of the image is not part of the token you are training. But just as a side note, if you were training a Margot Robbie lora, you would never want to use a picture of her in Harley Quinn gear in your dataset.
  Simple things to remember when training a character lora: Use high quality images. Even though you are limiting it to 1024, 768 or 512 resolution (1024*1024 is better no matter what others may say), you want pictures that are in focus, no watermarks, NO FILTERS, etc. Second, give the dataset as many angles as you can. A perfect mix is to have two or three closeup shots straight on, two or three from the left, from the right, and then move to waist up shots, then full body. It is better to have a few different facial expressions included - and describe those in the caption, ie. 'a woman smiling' so the model has an idea what their smile looks like. Also, some with makeup, a few without. Some looking at the camera, some looking to the side. Variation is key is you want a flexible lora. If you train a lora with all bikini pictures, it will be difficult to get a generation without that without prompt work. And finally - as with most things - quality increases with a little more work. Technically you can make a lora with no captioning and a random dataset, but results will absolutely reflect that. Better to spend 15 minutes refining things.
  I have had great results with ai-toolkits settings with 25-30 pictures. I use the llava vision llm to caption them and then do some editing to correct things. I get a useable lora in as little as 500 steps, but the sweet spot is usually around 1750-2000 steps. I will let it go to 2500 or 3000. To be honest, the toughest part is trying to figure out which lora output is the best. From 1200 on, they all look pretty good. I end up keeping a few just so I have options if a generation is coming out wonky. ([View Highlight](https://read.readwise.io/read/01j8jcz0czm71m9sf9q2sy46tz))
- fter 40 LORAs and extensive testing you should take the following approach -
  1. Caption all images with WD14 and LLM natural language to ensure both Clip and T5 information is present.
  2. Train with total number of steps that gives 20-25 repeats of each image.
  3. LR1e-4 with network 64/64
  Prompting in ComfyUI with Dual Clip and T5 prompt node to ensure you provide both to model.
  Euler at 40 steps.
  Captions in general should describe elements you want to prompt in or out and anything else will be become part of the character. ([View Highlight](https://read.readwise.io/read/01j8jczjynz95jfahd0z46v2yt))
