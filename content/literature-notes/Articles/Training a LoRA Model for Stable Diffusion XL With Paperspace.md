---
author: [[James Skelton]]
title: "Training a LoRA Model for Stable Diffusion XL With Paperspace"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://blog.paperspace.com/content/images/2023/04/Group-142.jpg)

## Metadata
- Author: [[James Skelton]]
- Full Title: Training a LoRA Model for Stable Diffusion XL With Paperspace
- URL: https://blog.paperspace.com/training-a-lora-model-for-stable-diffusion-xl-with-paperspace/

## Highlights
- et's make a quick list of all the characteristics we are looking for in the image dataset for a Stable Diffusion LoRA:
  • Single subject or style: things are going to be much more difficult if there are multiple entities present in the training images. Focus on a single subject featured in different ways for the best results
  • Different angles: it is critical that the subject is represented from different angles in the inputted training images. This will ensure that the LoRA doesn't functionally overtrain on a single perspective of the subject. This massively inhibits the models final flexibilility
  • Settings: if the subject is always in the same setting, i.e. backgrounds, clothing, etc., these features will be carried into the LoRA results. Be wary of datasets comprised of images all taken in a single session. Alternatively, a totally blank background seems to work nearly as well as varying them
  • Lighting: the least important trait to keep in mind, though still relevant, consider using different sorts of lighting for your different images. This will make it easier to place your subject in different places throughout the generated images ([View Highlight](https://read.readwise.io/read/01hbeyq6weqqwy3864qnm9z743))
