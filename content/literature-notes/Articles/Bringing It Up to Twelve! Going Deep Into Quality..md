---
author: "[[civitai.com]]"
title: 'Bringing It Up to Twelve! Going Deep Into Quality.'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/f9276d76-769f-4e2f-93bc-67ad8fdb9068/width=1200/f9276d76-769f-4e2f-93bc-67ad8fdb9068.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: Bringing It Up to Twelve! Going Deep Into Quality.
- URL: https://civitai.com/articles/3527

## Highlights
- So, once I found out and confirmed with many people that combining models of the same concept brings up the quality I focused on exploring this idea further. ([View Highlight](https://read.readwise.io/read/01hm9tkh6nj5s04456agq1pb8m))
- As you know I ventured also in the LoRA and later Embeddings territory. Initially, I was using purely solo LyCORIS models but during the time of the first article, I started mixing them to see what would be the result and was quite frankly stunned. ([View Highlight](https://read.readwise.io/read/01hm9tr14m3f8cgscd205m8bwn))
- The results were pretty much better all over the board - not only I was achieving better likeness but also the results were more consistent.
  I think the consistency had a better boost because in some cases I wasn't getting the best likeness but I was getting pretty much the same face all the time. ([View Highlight](https://read.readwise.io/read/01hm9trabt7x4erjbgm8q7d5n1))
- For those who want to skip the first article, the jist is: I was merging 2 LyCORIS at 0.65-0.7 weight each (around 1.5 sum), three LyCORIS at around 0.5 (again 1.5 sum) or even four at around 0.3 - 0.35 (sum of 1.2 - 1.4). ([View Highlight](https://read.readwise.io/read/01hm9trkt1bh1n1z0833apj554))
- LoRAs are usually more stylized - they capture the likeness of a person but in a less photorealistic sense than a LyCORIS does. LyCORIS seems to get all the wrinkles, moles, and pores of the skin (sometimes even too much, as it was a frequent complaint of some). ([View Highlight](https://read.readwise.io/read/01hm9ts6ej1sfn7aqgvx5csg40))
- But by mixing LoRA and LyCORIS we get the best of both worlds, we keep the likeness and the consistency and by playing with weights we can add or lose some wrinkles/pores depending on our needs. Do we want to make someone younger? We add some tokens about the age but also increase the weight of the LoRA instead of LyCORIS. ([View Highlight](https://read.readwise.io/read/01hm9tsmk3kn6t3xpszqcfes6z))
- I started experimenting with mixing all three together and the results were also spectacular. To be fair - you can get a really great likeness with just the LoRA/LyCORIS combination but adding Embeddings seems to be an easy win. ([View Highlight](https://read.readwise.io/read/01hm9ttm853khcm7c4rdapgwmt))
- alicia vikander <lora:lora-small-alicia-vikander-v1:0.2> <lora:locon_aliciavikander_v1_from_v1_64_32:0.4> aliciavikander-ti ([View Highlight](https://read.readwise.io/read/01hm9ttx010cywy4egj2fmbwsg))
- I am also mainly testing on Serenity (originally v1 and later v2) but other photorealistic models work fine as well. The default ratios are however based on Serenity (version v2 was additionally fine-tuned on many celebrity datasets). ([View Highlight](https://read.readwise.io/read/01hm9tvwad2yhxt1n9whhwjkem))
- If you want to check other models, especially those that are less photorealistic - you should probably give more weight to LoRA/LyCORIS (and/or decrease weight on the embedding). ([View Highlight](https://read.readwise.io/read/01hm9tw2ydd8nhvzz8nebd36bd))
- But there is a third reason. If you experimented with multiple loras then you know that adding more and more tends to introduce some weird artifacts. Even with only my models, if you get closer to the sum of 2 or go beyond - you will experience overtraining symptoms. ([View Highlight](https://read.readwise.io/read/01hm9tzfp4qjr7ytp5rwyvy6nj))
- This is because you cannot add more and more loras infinitely. At some point, the whole thing will just collapse. You most likely have seen loras that are overtrained by default and you need to use them at very low weights otherwise they introduce too many artifacts or override stuff you do not want to change. ([View Highlight](https://read.readwise.io/read/01hm9tzsv1fd3m9g6e5c0ymdc8))
- Some Loras work fine on their own but when you start adding other loras - they become unusable.
  Here is where Embeddings shine: because you combine the Embeddings with other models, those other models require way lower weight strength (from 1.5 down to 0.6 in most of my examples). This means we make room for other, more difficult loras :) ([View Highlight](https://read.readwise.io/read/01hm9v048p4kafnxbxhkr00jna))
    - Tags: [[favorite]] 
- To quickly summarize: using multiple models of the same concept improves the quality twofold: brings the likeness closer and makes the outputs more consistent. ([View Highlight](https://read.readwise.io/read/01hm9v0b3d8hwp6z7ygfnc07vd))
- 1) Use some kind of upscaling with denoise. For A1111 it will be in most cases hi.res.fix (but there is also a script called loopback scaler which I hear is pretty great!)
  Remember to increase the denoise the further away the person is and decrease it if the person is rather close.
  2) Use ADetailer or inpainting (ADetailer is pretty much automatic inpainting). I love ADetailer as you can control quite a lot in there and get really good results with it. Remember that it is not always required and sometimes it is better not to use it. It will come with the experience.
  3) ControlNet - this will help you if the models are fixated on the faces and you want different scenes/positions.
  4) You can increase the base resolution a bit. We were taught that SD 1.5 is best at around 512 (and usually 512x768 or something like that). Well, on some models that were finetuned and/or merged with many other models - you can try a bit more without worrying about double heads.
  Using Serenity I was able to generate even 700x1000 without upscaling and although I had sometimes doubled heads or very long necks - I was getting good images 80% of the time (and remember that the time to get those is way shorter than getting high.res.fix) ([View Highlight](https://read.readwise.io/read/01hm9v1p0yyhmka7s5q8c1vv4n))
- 1) Eyes.
  Originally people were using tokens like "perfect eyes", and "good iris" in positives and something like "bad eyes", and "deformed eyes" in negatives. That had little to no effect (I would even say it was more of a placebo).
  Then we got the VAE and it worked wonders with the eyes (the quality was definitely improved). But we weren't there yet.
  So, some people (including myself) made models specifically for the eyes. I made the Lora/LyCORIS named "Perfect Eyes" and I am really happy that those are still quite popular :)
  Initially, my suggestion was to use it in the base prompt with a lower weight (and it does work). And when ADetailer came up - to increase the weight there. ([View Highlight](https://read.readwise.io/read/01hm9v2kfegw7k9m3nkdxtmwbv))
- There is an ADetailer model specifically for the eyes: mediapipe_face_mesh_eyes_only
  You would add it as an additional ADetailer model (besides the models that correct the face, hands, and whatnot) and use it in the positives:
  "photo of perfecteyes eyes <lora:locon_perfecteyes_v1_from_v1_64_32:0.7> , perfect eyes"
  and this in negatives: "BadDream, (UnrealisticDream:1.2), realisticvision-negative-embedding, badIrisNeg"
  If you prefer Lora instead of LyCORIS - that is perfectly fine (or you could even try Loras from other people, but I use mine and they work really great :P)
  As for the negatives, the first three are the default combo negatives used in many photorealistic models. But the important one is the last one: "badIrisNeg" - it is available on civitai and it does indeed help a bit. ([View Highlight](https://read.readwise.io/read/01hm9v36dmc8ghrjyza261ftvd))
- 2) Skin Conditioner Slider -> [https://civitai.com/models/167525](https://civitai.com/models/167525)
  I usually run with 0.3 ( <lora:skin_slider_v2_1_FACE:0.3> ) but sometimes I increase it slightly. It makes the skin texture less plastic. Adds a lot of details to it. ([View Highlight](https://read.readwise.io/read/01hm9v3fj019msjx9t09s7rpc9))
- 3) Detail Tweaker -> [https://civitai.com/models/58390](https://civitai.com/models/58390)
  My default is to go with 0.7 (<lora:add_detail:0.7>) but I tend to play with it sometimes. it really does bring the details up (or down, depending on weight) which not only includes the person but also the clothing and the background. Everything. ([View Highlight](https://read.readwise.io/read/01hm9v3kr0789ymx8bn1brmdtr))
- 4) Default negatives: BadDream, (UnrealisticDream:1.2), realisticvision-negative-embedding
  I picked it from some famous photorealistic model and once I tested it - I never went back. Those really do make magic happen. I rarely go without them! ([View Highlight](https://read.readwise.io/read/01hm9v4202t8np7n77zx67fkfe))
