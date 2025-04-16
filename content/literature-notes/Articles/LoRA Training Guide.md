---
author: [[rentry.org]]
title: "LoRA Training Guide"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://s8d2.turboimg.net/sp/e2ed3eb8853d349d05716f8031fbd584/hdg0.5x.png?5203)

## Metadata
- Author: [[rentry.org]]
- Full Title: LoRA Training Guide
- URL: https://rentry.org/lora_train

## Highlights
- A great explanation of LoRA can be found here: [https://github.com/cloneofsimo/lora](https://github.com/cloneofsimo/lora), but if you don't want to really read into it, here is the cliff notes version:
  • LoRA are basically an embedding that applies like a hypernetwork with decently close to dreambooth quality.
  • They train *fast* and can be used to train on all different aspects of a data set (character, concept, style).
  • LoRAs are extremely small (8MB, or even below!) dreambooth models and can be dynamically loaded. ([View Highlight](https://read.readwise.io/read/01hbgq8zyhwy0h8qz8yzsx8402))
- Generally you want to have anywhere from 50-150 images for your dataset. The best way to gather this dataset is to look through the various Boorus that exist on the internet. You can do this manually, or you can use one of the tools that exist for this purpose. ([View Highlight](https://read.readwise.io/read/01hbgqaa8j5m8vyfc8wqfgzfgd))
- • Caption file generation can be **automated** using the WD1.4 Tagger extension in WebUI.
  • Alternatively, you can do it by scraping from boorus along with images.
  • It's up to you which method you want to use, but automated tagging has become extremely accurate with WD1.4 Tagger, and it won't append metadata tags like `Translation Request` that you want to remove later. ([View Highlight](https://read.readwise.io/read/01hbgqb18jgj562d4e0rbppfaa))
- If you were training a character, you should remove the character name or series as well as any of the defining traits of said character (Hair (Color/Style), Eye Color, Distinct Facial/Body Features, Etc.) In this way, the style or character becomes implicit to other tags. Generally, if you have pruned tags, you also want to add an "activation" tag which will absorb all of that information that was offset by removing those tags. ([View Highlight](https://read.readwise.io/read/01hbgqv6w6p65cce7bs5q0dts7))
- Training will generally replace one tag's result with another. Consider training against many pictures of a character wearing a `red_dress`.Over time your training will guide the tag to closer resemble the `red_dress` in your images instead of the base model. If this behaviour is undesirable it is possible to replace the tag with some other tag, for example `zyxdress` instead of `red_dress` ([View Highlight](https://read.readwise.io/read/01hbgqw7jj07g6hyt0vma1jwkq))
- prune eye colors since they almost never change ([View Highlight](https://read.readwise.io/read/01hbgqzya42xrqkah0320k6sbn))
- usually prune hair color ([View Highlight](https://read.readwise.io/read/01hbgr00sxqe6qfwcqh5b9w2rm))
- keep hair styles, but typically i prune hair length unless the character has alts with different lengths ([View Highlight](https://read.readwise.io/read/01hbgr05ajmswwxf1ze5t5sh2w))
- - if i really like a character, i may also go in and add expressions (embarrassed, flustered, naughty face, parted lips, etc) and image composition (from side, upper body, cowboy shot). ([View Highlight](https://read.readwise.io/read/01hbgr0j69bnsw27ea8pszhr1j))
- Just goes to show that you can still get good LoRA without the pruning, but pruning will more often than not increase the quality of the final output. ([View Highlight](https://read.readwise.io/read/01hbgqzdm214dctpjvfbgsp4qg))
- It's possible to reduce the size of an already trained LoRA by resizing it. ([View Highlight](https://read.readwise.io/read/01hbgr1rf4vd9tkc4bga2b6qxk))
