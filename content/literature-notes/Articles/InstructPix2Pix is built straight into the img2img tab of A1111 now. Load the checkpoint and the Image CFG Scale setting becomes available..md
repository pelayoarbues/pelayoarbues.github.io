---
author: "[[reddit.com]]"
title: 'InstructPix2Pix is built straight into the img2img tab of A1111 now. Load the checkpoint and the "Image CFG Scale" setting becomes available.'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[reddit.com]]
- Full Title: InstructPix2Pix is built straight into the img2img tab of A1111 now. Load the checkpoint and the "Image CFG Scale" setting becomes available.
- URL: https://www.reddit.com/r/StableDiffusion/comments/10tjzmf/instructpix2pix_is_built_straight_into_the/

## Highlights
- If you missed the recent discussion about InstructPix2Pix, it's is a model that's been trained to make edits to an image using natural language prompts. Take a look at this page for more information and examples:
  [https://www.timothybrooks.com/instruct-pix2pix](https://www.timothybrooks.com/instruct-pix2pix)
  Edit: Hijacking my most upvoted comment to summarise some of the other information in this thread.
  To use this you need to [update to the latest version of A1111](https://www.reddit.com/r/StableDiffusion/comments/10tjzmf/comment/j78gekz/?utm_source=share&utm_medium=web2x&context=3) and download the **instruct-pix2pix-00-22000.safetensors** file from this page:
  [https://huggingface.co/timbrooks/instruct-pix2pix/tree/main](https://huggingface.co/timbrooks/instruct-pix2pix/tree/main)
  Put the file in the **models\Stable-diffusion** folder alongside your other Stable Diffusion checkpoints.
  Restart the WebUI, select the new model from the checkpoint dropdown at the top of the page and switch to the Img2Img tab.
  There should now be an "Image CFG Scale" setting alongside the "CFG Scale". The "Image CFG Scale" determines how much the result resembles your starting image, so a lower value means a stronger effect - the opposite to the CFG Scale. ([View Highlight](https://read.readwise.io/read/01hcb20248dr3k1frwga7nt7ah))
