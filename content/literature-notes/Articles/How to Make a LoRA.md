---
author: "[[civitai.com]]"
title: 'How to Make a LoRA'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7cc19989-ec8c-4fb6-9f60-c437f0b1ba5e/width=1200/7cc19989-ec8c-4fb6-9f60-c437f0b1ba5e.jpeg)

## Metadata
- Author: [[civitai.com]]
- Full Title: How to Make a LoRA
- URL: https://civitai.com/articles/1824/how-to-make-a-lora

## Highlights
- Primary images can be your clear, high-resolution pictures. They can be the ones with a rare smile. They are the special ones you want to help get trained in.
  I like to get different angles on the face. Get them smiling. Get the side angle that gives a good view of her jawline and nose. Get her with her mouth open. Get her showing her teeth in an authentic smile. Funny faces are ok, too. You want to capture what's unique and distinctive about her face.
  You want some full-body pictures to go along with the pretty faces. Don't be afraid to put some pictures in that don't feature her face if she's showing off the rest of her figure. Your objective isn't just to train the face, but the whole body.
  Variety helps here.
  If you have a lot of images, don't feel like you need to put them all in there. There's a balancing act between your supporting images (the ones with a lower number of repeats) and the stars of the show. If you feel like it's just more samey stuff, feel free to skip over that picture; you've already got it covered. The good ones will still make you want to include them, even if it's just another supporting image. ([View Highlight](https://read.readwise.io/read/01hc9xyccjatzwdqcvan7gtedq))
- I create an images subfolder, and inside of that, I create two folders:
  1. 5_TriggerWord
  2. 2_TriggerWord
  The 5 and 2 determine how often the image is repeated for each epoch. The TriggerWord is the trigger word for your lora: the girl's name (eg HaileyGrice). ([View Highlight](https://read.readwise.io/read/01hc9xyr9nd36g0pmdrt9f5ge7))
- The objective here is to have your primary images have more influence over the end product than the supporting images. This means that the total number of steps they contribute to training should be higher than the supporting images.
  The supporting images will refine what the primary images carve out.
  For example, when I revisited my Brandy Gordon lora, I saw that she had 164 supporting images and only 58 primaries. I gave the supporting images no repeats (1x) for the primaries I did them 5 times.
  This means that the primaries contributed 58x5 (about 300) steps per epoch, and the supporting images contributed 164 steps per epoch. This gives the primary images about double the influence of the supporting images. ([View Highlight](https://read.readwise.io/read/01hc9xz8z20taae7jy4fttq021))
    - Tags: [[favorite]] 
- You want to make sure that this trigger word is unique. There are some people out there who are creating loras that all share the same trigger word. This is the "[MyClass](https://gamedev.net/forums/topic/673343-myclass-myclass-vs-myclass-new-myclass/)" of lora making. Your trigger word should have some semantic value, and it shouldn't clash with your other loras.
  The trigger word in the folder name is only used if you aren't captioning, so at the end of the day the only really important part is the number before the underscore. ([View Highlight](https://read.readwise.io/read/01hc9xzjddvv7y003rtppmnhjw))
- I wanted her to retain her signature freckles, so I removed "freckles" from the captioning with the intent that they would be included by default when the trigger is used.
  wd14 captioning is not without its drawbacks. It is easy to make, and allows the lora to be flexible, but it will lose some "defaults" you might expect it to have. For example, my Jade Lloyd lora often presents Jade without her signature platinum blonde hair. This is because wd14 tagged it, removing that aspect of her from the trigger. If I didn't do that, her hair would probably default to platinum blonde, but would be harder to change with a prompt. The less you extract, the more inflexible the lora will be.
  When you caption, you should prefix the captions with your trigger word (eg HannahStein). I typically use "photo of HannahStein,". ([View Highlight](https://read.readwise.io/read/01hc9y0kmp77wxa5cbddj4rxqv))
- I think it's a good practice to imbue everything about the girl but the hair into the trigger word. You want to capture her figure, you want to capture her eyes. You want these without having to prompt for them. ([View Highlight](https://read.readwise.io/read/01hc9y164pvc71ypcz9xve4sa7))
- Here are the "Undesired tags" I put into Kohya WD14's captioning tool:
  1girl,solo,breasts,small breasts,lips,brown eyes,dark skin,dark-skinned female,flat chest,blue eyes,green eyes,nose,medium breasts,mole on breast,mole,birthmark,scar,cleavage,ass,large breasts,freckles,grey eyes,mole on body,mole under mouth,teeth,black eyes,thick eyebrows,very dark skin,mole on cheek,mole under eye,mole on neck,collarbone,armpits,navel,forehead
  For undesired tags to take, they must be a comma-separated list of values, with no spaces between the phrases. If you have `, blue eyes`, it won't work. And while she is not a "dark-skinned female", Adriana was, and keeping that tag there isn't going to hurt. My plan is to establish a list of imbuable feature tags to exclude. Depending on the results I have as I continue with this strategy, I may have to revisit some of my favorites. ([View Highlight](https://read.readwise.io/read/01hc9y1s74c5j8yh76eaxrx2dx))
- the day, you want to gradually train your lora over a number of epochs, saving the lora along the way every couple of epochs so that if you do overshoot the mark with your final epoch, you can use a previous epoch. When in doubt, do more than you think you'll need to.
  Shoot for at least 1500 total steps, but take this with a hefty grain of salt. The number of steps is decreased when you increase either the batch size or gradient accumulation and is doubled when using things like flip augmentation.
  You can either overshoot by putting in more epochs than you think you'll need, and simply reviewing them and choosing the one you like, or you can undershoot and then start from there if you feel like it's undercooked by putting your starting point in at *LoRA > Training > Parameters > Basic ... LoRA network weights*. ([View Highlight](https://read.readwise.io/read/01hc9y3cxg1gjxm889fyejg8pp))
- One of the options in the script is "Prompt S/R", which will take a part of your prompt and replace it with something else. Since we specify the lora by filename in the prompt, we can replace the specified version with different versions, and we'll get a grid. ([View Highlight](https://read.readwise.io/read/01hc9y4a522ptta32p6xa23pfn))
- Well, I think you should try to fill your showcase post, which allows for 20 images. You're going to get some loss with bad gens, and you want to exercise your new lora in your favorite checkpoints.
  I usually do 10-20 gens per checkpoint. I might end up with 100 images, and during review I'll often far exceed the mere 20 that can fit into the showcase.
  In such an eventuality, I still give these images their time in the sun by creating a new post to put them in. They'll show up on your lora page, too.
  When I see loras with like 4 showcase images, it's a red flag. If your lora is unable to consistently create usable images, it shouldn't be published anyway. You should shoot for like an 80%+ hit rate. And some checkpoints just won't play well with some loras, so if you think yours is trash, check a couple of other checkpoints before scrapping it. ([View Highlight](https://read.readwise.io/read/01hc9y6t8bh41r74kphj840ad1))
- If you're using Dynamic Prompts, be sure to check "Unlink seed from prompt".
  ![](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/58867fab-8899-49e9-97f0-934bf7f37d16/width=525/58867fab-8899-49e9-97f0-934bf7f37d16.jpeg)
  This will ensure that each checkpoint gets a different dynamic prompt for the same seed (which will be incremented by the batch). If you don't unlink the seed from the prompt, the same prompt will be used against all of your specified checkpoints, reducing the diversity of your images. ([View Highlight](https://read.readwise.io/read/01hc9y7k9dhjme2knej0yqvvpv))
- You won't have everything I do, because I made some of this stuff myself, but here's the prompt I use today:
  showcase:
  - |
  {headshot|{upper|half}-body|close range} of ${girl},
  focus on {smiling|} face,
  {from behind|side view|2::}
  wearing {
  {conservative|victorian|cosplay} clothing
  | a {halter|maxi|sheath|peplum|pencil|t-shirt|Qipao|bell sleeve|long sleeve|empire waist|Handkerchief Hem|pouf|tulle|sweater|silk} dress
  | a <lora:edgPencilDress_MINI:0.8> {pencil_dress|edgpdress}
  | a tennis dress <lora:tennis_dress-1.0:0.8>
  | a maid dress <lora:victorian_maid-1.0:0.8>
  | a {jean|leather|feather|fur-lined} jacket
  | a tshirt and jeans
  | a {star trek|military} uniform
  | a turtleneck
  | leather armor
  | a mage robe
  | camo
  | a pantsuit
  | a thin sweater
  | an elegant evening gown
  | a {__devilkkw/attire/attire_styles*__} kimono
  },
  her {__colors/*__|} hair is styled as __hairstyles/female/*__,
  - |
  ${girl},
  focus on eyes,
  close up on face,
  {smile,|smiling,|huge smile,|grinning,|laughing,|pouting,|3::}
  {wearing jewelry,|}
  {__colors/*__|} hair styled as __hairstyles/female/*__,
  {vignette|ND filter|soft focus|lens flare|desaturated grunge filter|black and white|__promptgeek/lighting__|6::}
  The basic idea here is to get a varied image using the lora. Maybe she's smiling, maybe she isn't. She's wearing some kind of shirt, uniform, or a dress. Her hair is styled in a specific way. ([View Highlight](https://read.readwise.io/read/01hc9ybejpv16spgbqgr3tdpx7))
- It's a qualitative thing. I want the best pictures to influence the training the most, so I give them more steps in each epoch than the supporting pictures.
  Also, if the girl almost never smiles, I put her smiling pictures as a primary. ([View Highlight](https://read.readwise.io/read/01hc9ydm4eztjdzgtkmmwfvzv8))
- Generally speaking, if the picture is clear and presents a good view of her face, it's a candidate for a primary picture. ([View Highlight](https://read.readwise.io/read/01hc9ydx2r23x24n01ytzxwgrp))
    - Tags: [[favorite]] 
- These pictures provide the core. They are the saw that cuts the wood. The supporting images are the sandpaper that smooths out the rough edges left behind, providing more context for what we have emphasized. ([View Highlight](https://read.readwise.io/read/01hc9ydzsy90725y75qjfcy4e9))
