---
author: [[civitai.com]]
title: "Textual Inversion / Embedding Training Guide"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0c2972e0-3d76-4e74-9df1-d6bac892f1f1/width=1200/0c2972e0-3d76-4e74-9df1-d6bac892f1f1.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: Textual Inversion / Embedding Training Guide
- URL: https://civitai.com/articles/3114

## Highlights
- It is very important to use the original 1.5 model for training. With Lora/LyCORIS (and of course Dreambooth) you use in general a good quality (finetuned/merged) model to get better results, but with Embedding you need to use a vanilla model.
  This is already mentioned by many guides but this is also what I have experienced myself. Training on a custom model makes the TI good on that model but way worse on others. ([View Highlight](https://read.readwise.io/read/01hhd07htvmg0r9meqf8w7a8xy))
- Inside the "evagreen" folder I have the standard Kohya structure, so in my case, the folder name is "100_sks woman"
  To be honest the "sks" token in case of embedding is not important as we will be triggering it by the filename anyway. The "100" is more important as it is used in kohya steps/epochs computation. The "woman" is a class token, in the case of a male I would go with "man" or "person" (as I do in Lora/LyCoris)
  Inside that folder are 512x512 images (you can see my Dreambooth training guide/article where the first section is focused on getting and preparing the training data). ([View Highlight](https://read.readwise.io/read/01hhd088trmrggf8sc2xpj7z9h))
- This ignores the caption files. Yes, you do not need to clip/blip your images and prepare the text files! For me, it is a godsend because I do not caption my lycoris/lora trainings (I use the instance/class token)
  My guide is mainly for creating people, if you want to train a style then you most definitely would want to caption your images so this option here should not be used then. ([View Highlight](https://read.readwise.io/read/01hhd08q138q9vw4zrj0c9qf2b))
- Since the images are 512x512 I set this option accordingly.
  As a side note. I prepared a 768x768 dataset and trained it using 768,768. The training took longer and it required more VRAM but then I gave the 512 and 768 models to friends and they were unable to tell me which is which. That means it really does not matter for the SD 1.5 which was mainly trained on 512. ([View Highlight](https://read.readwise.io/read/01hhd09ha281q3318w69ffahw2))
- Since my images are 512x512 already and I use 512,512 there is no need to upscale anything.
  As a general rule - I know certain trainers allow you to train on source images that have varying resolution sizes BUT I prefer to cut the images the way I want.
  Do you remember when 1.4 and 1.5 were frequently (to a varying degree) outputting generations that had faces not fully in the shot? Well, if you have to process millions of source images (LAION) and you need them in specific resolution - you will have to cut them automatically, and guess what, sometimes it will mean a face/off scenario :-)
  Newer models (finetuned) didn't have that problem in general because the datasets were well-curated and those images were all neat.
  To this day I still believe that 80% of the success stems from good datasets. ([View Highlight](https://read.readwise.io/read/01hhd0aaebbcxyycc55rk4tcf3))
- This is the meat. Those are the training parameters.
  If your card does not support AdamW (or has less VRAM) then you can go for "AdamW8bit".
  Those are probably not the BEST parameters, but they are quite good in my opinion. The best that I could come up with. I played with different learning rates, schedulers, and training batch sizes so you don't have to (unless you want to :P). ([View Highlight](https://read.readwise.io/read/01hhd0ap7p3g6wkv1zmfw95f1n))
- During testing, I was saving every 50 but once I got good results I switched it to 200. As you can see in the previous point, I have max_train_steps at 1000 and I consider that the final result and the go to Embedding.
  However, you will get 200, 400, 600, and 800 steps if you keep this parameter. The 800 is fairly good too and perhaps you may want to use it if you desire less of the resemblance for some reason. It is up to you.
  During the testing phase, I went as high as 2000 steps but at 1300 I would be getting some overtraining artifacts from time to time (rarely) and those would increase at 1500, and so on. ([View Highlight](https://read.readwise.io/read/01hhd0azsrad9bex6py1kea0bw))
- So, for me the token_string would be "evagreen", the init word is the same as from the folder structure (woman, man, person) but it seems that the token string is not important since we will be triggering by filename. ([View Highlight](https://read.readwise.io/read/01hhd0b4fpjbpayp0abcf4x8c5))
- Honestly I haven't played with variations here, I just hooked up the official vae. Don't remember the reason for --no_half_vae (was it a default?) ([View Highlight](https://read.readwise.io/read/01hhd0bcz8zgdqd67wrm9r210s))
- This is the filename for the embedding, for me, it would be "evagreen-ti" and this is what I would be using in the prompts: "photo of evagreen-ti".
  I had a discussion with a friend about it and I have tested it, there was no need to make it into some 'sks' or 'ohwx' token or some special variation like 'evgrn' or '3v4gr33n'. You can use the filename just fine and don't worry about anything. ([View Highlight](https://read.readwise.io/read/01hhd0by5j0p4m66r3bd7nrrbx))
- A small background: Dreambooth/Lora/LyCORIS during training add new data so the training improves the trained concepts. The Embeddings on the other hand do not add any new data, what they do is they guide to the trained concept as best as they can.
  This means that if you use a LoRA of person X on a base model that has no idea what person X looks like - you will in general get good results. However if you use the Embedding of person X on a model that does not know what person X looks like, you may have trouble generating that person.
  If the base model does not know how to generate a person similar to person X - the Embedding will not be able to guide the generations toward that person.
  A very simple example would be: someone in Asia made a new model from scratch and used only photos of Asian people. You would not be able to generate photos of white or black people because that model would not know how to do it.
  If you were to make a dreambooth and train a black person - then you would be able to generate that black person because your output model would train the facial features as well as the skin color.
  But if you were to use an Embedding, since that Embedding does not add any new data (for example, skin color data) - it would try to guide to our person as much as possible but the base model would struggle to understand what the black skin color is.
  So, the current base models that we have are much better than vanilla 1.5 and they know a lot more stuff about people (anatomy, etc) in general but also about more people (in particular, famous people).
  This means that the Embeddings are more powerful on those models and can get amazing results there.
  To truly show that this is how Embeddings work, there is a very easy test to do. Pick a photorealistic model and use an embedding of a person. You may get decent results out of the box. But then attach a LoRA or LyCORIS of that person AND DO NOT use the trigger for that lora/lycoris.
  You will see that the results of the Embedding are much better than before. Because the Embedding always knew what we wanted to achieve and now that we have added additional material that gets closer to that goal - the Embedding picks up that new material and generates a closer representation.
  Remember my article about turning it to 11 (by using multiple loras/lycoris of the same person together)? You can turn it to 12 with Embeddings :-)
  I do have a default/suggested settings for mixing my models with those Embeddings and the results are IMHO really great. I will make another article about it rather soon and share a lot of examples there :) ([View Highlight](https://read.readwise.io/read/01hhd0f00cd1mh65f2dpkf9pb5))
- Well, pretty much you add it to the prompt normally. So my evagreen-ti.safetensors would make a "photo of evagreen-ti" prompt. You can of course change weights as with other models so you could go for "photo of (evagreen-ti:0.8)" if you feel like the base effect is too strong.
  As mentioned above, you can combine them. For famous people, you can combine it with a real name - as the base models know at least something if not everything about certain people, so a prompt like "photo of eva green evagreen-ti" could potentially work better if the model knows who Eva Green is.
  And then you can combine it with Loras/Lycoris for example here are some parts from my wildcard prompts:
  sophieturner-ti <lora:lora-small-sophie-turner-v1:0.35> <lora:locon_sophie_v1_from_v1_64_32:0.35> sophie turner,
  emilia clarke emiliaclarke-ti <lora:locon_emiliaclarke_v1_from_v1_64_32:0.3> <lora:lora-small-emilia-clarke-v1:0.3>,
  madonna madonna-ti <lora:locon_madonna_v1_from_v1_64_32:0.25> <lora:lora-small-madonna-v1:0.2>,
  sandra bullock sandrabullock-ti <lora:locon_sandra_v1_from_v1_64_32:0.3> <lora:lora-small-sandra-bullock-v1:0.2>,
  In this case, I'm using default weight of the Embedding and a bit of lora and lycoris (notice that due to the embedding usage - the loras/lycoris are at very low strengths) ([View Highlight](https://read.readwise.io/read/01hhd0fz8ees2cfccnbdtf0j74))
- There is one MAJOR benefit right away that people who use multiple loras in one prompt can already see incoming :)
  For example, if you make a simple prompt of "photo of sks woman <lora:locon_emiliaclarke_v1_from_v1_64_32:1>" or "photo of sks woman <lora:lora-small-emilia-clarke-v1:1>" then everything will be fine (well, the quality might vary).
  If you combine it according to my "Turn it to 11" article then you would get something like this: "photo of sks woman <lora:locon_emiliaclarke_v1_from_v1_64_32:0.7> <lora:lora-small-emilia-clarke-v1:0.7>".
  Please note that we have one prompt but the weights are not used at 1.0 anymore and sum up to 1.4 now. If you put the weights higher and higher - you will experience overtraining artifacts.
  This is not limited to only those models. Once you start adding more and more loras (clothing, positions, poses, backgrounds, items, specialty, etc) you notice that the cohesion of the output image suffers and the likeness of the face goes away.
  There are various loras out there, some are undertrained and some are overtrained. Some loras were trained for an outfit but they also trained the face with it so using it on someone else can break the likeness (thank god for ADetailer in those cases).
  But in general - the more loras you add - the more explosive the combination is and you always have to fight with the weights. Sometimes lowering them keeps the concept in the output but does not negatively impact the rest.
  I view those loras as "flexible". Sometimes you can have up to 8-10 loras in one prompt and it all works perfectly fine but sometimes you get 3 loras and it goes downhill already.
  So, that mentioned MAJOR benefit is the following: you can use the Embedding and lower the weights of the person loras/lycoris which makes room for other additional loras without (or with less) the risk of breaking the output.
  In some cases, the Embedding will be all you need so that leaves the person loras out of the prompt making room for other loras to be added :) ([View Highlight](https://read.readwise.io/read/01hhd0hk6w0nbhp47mp86yy0h3))
