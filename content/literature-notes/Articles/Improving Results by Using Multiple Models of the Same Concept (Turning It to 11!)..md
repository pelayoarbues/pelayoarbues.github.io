---
author: "[[civitai.com]]"
title: 'Improving Results by Using Multiple Models of the Same Concept (Turning It to 11!).'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/807edca0-c540-42e5-adb8-d0cdaf4aaacf/width=1200/807edca0-c540-42e5-adb8-d0cdaf4aaacf.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: Improving Results by Using Multiple Models of the Same Concept (Turning It to 11!).
- URL: https://civitai.com/articles/1721/improving-results-by-using-multiple-models-of-the-same-concept-turning-it-to-11

## Highlights
- s you know, I was always saying that when it comes to the best quality (understood as the best likeness that can be represented by the subject) the rank is as follows:
  1. Dreambooth, has the best quality but also has the biggest size (which is a problem for many people)
  2. LyCORIS, second best - the quality is still great but a tad bit worse than what Dreambooth can do. However, the size is very small so it is actually a great compromise (and you can use it with other base models)
  3. LoRA, third place - still can have a good quality, but does not keep as many details about character as LyCORIS/Dreambooth can, therefore the looks are more stylized (less photoreal) but also this makes them more flexible
  4. Textual Inversion, as the last spot - since those do not add new information, just guide the trained model on how to reach what we want - this can work quite well sometimes but fail miserably in other cases. The size is the smallest, however. ([View Highlight](https://read.readwise.io/read/01hvgw29fr7pvspve786weyv97))
- 0. Mixing LoRA with LyCORIS. Well, according to me and some friends that tested this concept - the feedback is unanimous - the quality is even BETTER than other techniques! ([View Highlight](https://read.readwise.io/read/01hvgw2fz8esttz5vngqw07dpf))
- So, what is this all about? It is quite simple, actually.
  When you want to reproduce a likeness of some person - we will just use both LoRA and LyCORIS models trained on that person and we will play with weights.
  For example, if you use only a LyCORIS, you most likely set the weight of that model to something between 0.8 and 1.0 (but usually probably 1.0).
  So what we will do instead is we will load LyCORIS and a LoRA of the same person and as a baseline, we will pick 0.7 for both models (which sums up to 1.4 which is on the higher end of what we set for a single model).
  You should already notice that with those two models together - the likeness is better and the frequency of good output increases.
  With LyCORIS alone I would get a "perfect/really good" output every 4 or 5 tries but a "good enough" every second time pretty much.
  With this method, I feel like I'm hitting the "perfect" every 3rd one even but the other two in between are better than "good enough". ([View Highlight](https://read.readwise.io/read/01hvgw3naq24jr07chrnkcqrg1))
- Pretty much the 0.7 for both models is a good baseline, but each case (person) is specific so you should actually try out different combinations.
  MOREOVER, if you have more than 2 models of the same person - you can include them, and the potential to get the perfect resemblance rises!
  With three models together I usually go with 0.5 for all (perhaps one at 0.45) so the summed weight is in the ballpark of 1.45-1.5
  With four I'm getting the best results at around 0.4 for each (so, 1.6 total sum weight). ([View Highlight](https://read.readwise.io/read/01hvgw3v9hvpnr0zx6tcyrgcdy))
- Ok, so what to mix and how?
  Well, for me it started with mixing various LyCORIS of the same person but trained on different datasets and other settings.
  I've noticed that mixing various LyCORIS grants me better results than increasing the weight of a single LyCORIS.
  Including more models of the same person (or even a concept!) with lower weights (but summed to a higher total) seems to bring up the "true" essence of a given person.
  This is how I understand what happens, it may be wrong but nonetheless, the results seem to confirm my assumptions. Seems like adding models on top of each other amplifies the shared part of those models.
  When you see a model of someone - you can usually figure out who it is because some unique characteristics are visible. With those models loaded on top of each other, it seems like that shared part gets amplified.
  If you have a single model and you start at 1.0 and then you try to bring the weight up, the whole model is amplified, and sometimes you get some nice results but at some point, it will collapse.
  So, with multiple models of the same concept, the weights are below 1.0 for each, but the shared concept is trained in all of those so that part gets amplified.
  However, it went into 11 when I started including LoRA models in the mix as well.
  In my understanding this actually makes sense. LyCORIS focuses on details while LoRA focused on the overall concept. This is why LyCORIS stuff like wrinkles, moles, and other stuff gets sometimes enhanced too much, but in LoRAS we get an overall likeness but without the intricate details.
  And then when we mix them both together we can get incredible results. We get the general feel of the person from LoRA and get the finer details from the LyCORIS. This works exceptionally well for older people.
  Also, the beautiful thing is that you can change the weights and guide the outputs, if you feel like the specific details are too high, you decrease the weight of the LyCORIS and increase the weight of LoRA. ([View Highlight](https://read.readwise.io/read/01hvgw50xsrmgnzctj5qw7atdn))
