---
author: "[[civitai.com]]"
title: 'VAE RAW to Obtain Greater Detail'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/391ea021-ddf3-4531-af6e-5df33345d66f/width=1200/391ea021-ddf3-4531-af6e-5df33345d66f.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: VAE RAW to Obtain Greater Detail
- URL: https://civitai.com/articles/462

## Highlights
- Just like in photography, when you capture an overexposed or underexposed photo, the dark or bright areas become unrecoverable, resulting in a loss of detail.
  That's why photographers use the histogram to avoid such loss, even if the photo lacks the desired saturation and contrast, as those adjustments can be made during post-processing. ([View Highlight](https://read.readwise.io/read/01heq63ht04q30yg6chwmmd56c))
- From my perspective, the best VAE is vae-ft-mse-84000-pruned, based on which increased luminosity has been applied to prevent the dark areas from becoming too intense. It's simple yet technically effective. ([View Highlight](https://read.readwise.io/read/01heq645efvq2j791qp9ext73r))
- When using difConsistency_raw_vae and having less intense black levels, it will apply greater detail to smaller areas. Additionally, due to its lower saturation, the colors avoid the pastel effect. ([View Highlight](https://read.readwise.io/read/01heq64pvmqzpybdebcg78csv1))
- Now we need to focus on the details that we have been able to preserve. To do this, if we increase the output of vae-ft-mse-84000-pruned, we can verify what was mentioned earlier. ([View Highlight](https://read.readwise.io/read/01heq656n01a32vw86jw6tfnt6))
- While with RAW VAE, we can observe a significant amount of detail, both in terms of saturation and in dark and light tones. ([View Highlight](https://read.readwise.io/read/01heq65g0rrprpk07awfyffrkk))
- As you can see, the result is similar but with much more detail. And the generation speed in Stable Diffusion remains the same. ([View Highlight](https://read.readwise.io/read/01heq6691ep906asf4n966p0dh))
- Probably not for 95% of cases. The difference is not significant, and it requires further post-processing. However, for more professional work, it may be useful to achieve greater detail, especially with high resolutions.
  It has been an experiment, but since it's working well for me, I'm sharing it. Give it a try and judge for yourself. ([View Highlight](https://read.readwise.io/read/01heq66h5qfdn1s7hepch07w3d))
- For those who want to gain some detail and reduce the intensity of the black levels, you can use a new "LOW" version. The result is not as aggressive and requires less retouching. However, it doesn't provide much additional detail. The "MEDIUM" version is an intermediate option that may not be as useful. ([View Highlight](https://read.readwise.io/read/01heq67b8vdhxkbhyb58hn4s4a))
