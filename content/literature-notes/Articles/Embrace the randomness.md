---
author: [[Philipp Singer]]
title: "Embrace the randomness"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/826415206272204801/B_g7QQ3B_normal.jpg)

## Metadata
- Author: [[Philipp Singer]]
- Full Title: Embrace the randomness
- URL: https://twitter.com/ph_singer/status/1696877654497013835

## Highlights
- When training and fine-tuning deep learning models, there can be significant randomness present in your final checkpoints. Many different random aspects influence the training routine, such as random weight initialization, random batching, or random augmentations. This randomness can particularly manifest itself on smaller data fine-tuning coupled with more unstable validation metrics such as regression tasks. ([View Highlight](https://read.readwise.io/read/01h9nxshwhezfdm9vbpbwbqdd7))
    - Tags: [[favorite]] 
- A natural first thought many practitioners have is to fix all seeds and keep them stable across all local experiments and then in the end put the best experiment into production. When I started a couple years ago delving more heavily into fine-tuning deep learning models and also participating on Kaggle, this was also something I was doing. But over time, I learned that it is actually counterproductive, and it is a way more robust strategy to never fix seeds and keep as much randomness in your experiments. ([View Highlight](https://read.readwise.io/read/01h9nxsmwjrqbzznntbd2kpbjs))
- The main reason is that it allows you to better understand and explore how stable your checkpoints are and how confident you can be that they will perform as expected in the field. Let's say you follow a typical approach of having a holdout validation set and a test set (this could be your unseen production data, a Kaggle public/private leaderboard test set, or even a local holdout test set you rarely look at). You train a model on your train set, evaluate it on the validation set, and you get a local score of 0.85. ([View Highlight](https://read.readwise.io/read/01h9nxt1x003yszwm6a7amvkfg))
- You feel confident and submit your model or put it in production, but suddenly you are seeing scores of 0.75 on the test set. This is the point where you have to question the generalization capabilities of your model. Is the test data just more complex than your validation data, i.e. do you have a non-representative validation set? Is your model bad at generalizing? Are there any other reasons? But actually, many times you can just be lucky/unlucky. By fixing the seed, you got a seed that is lucky on your validation run, but unlucky on your test run, or the other way around. ([View Highlight](https://read.readwise.io/read/01h9nxtt9z46ahnv9qas0pet3z))
- If you now always have all seeds fixed, you might never be able to explore this locally. But if you never fix it, you can get a feeling of this locally. A good strategy is to run the same experiment multiple times, with random seeds. This allows you to better understand the range of scores you can get, with fixed hyperparameters, but just random seeds. Let's assume we rerun our previous experiment three times locally, and now instead of always getting 0.85, we get 0.85, 0.75 and 0.8. This suggests that the models are quite random and the score we got in the test set is within the range we observe locally. ([View Highlight](https://read.readwise.io/read/01h9nxvpf8n5rx2pcqh0dmfq64))
- It might also become apparent, that single seeds are too unstable, and ensembling might become crucial to improve accuracy and reduce randomness. This means averaging multiple seeds and checking the results. In best case, this approaches the upper limit of the individual scores, or even improve them. ([View Highlight](https://read.readwise.io/read/01h9nxwaf1bqwn6b3ywy0rtazz))
- In many such cases, it is even recommended to stick to a single holdout fold (instead of multi k-fold) and run multiple seeds for each experiment you are running. Then you can check the range, as well as the ensemble of multiple seeds. In the end, you would prefer that experiment, that produces the highest ensemble score, if you can afford to deploy such ensembles. Or, those that have the smallest random range, if you want to deploy single seeds. ([View Highlight](https://read.readwise.io/read/01h9nxwn5j0z256gxknfzjx9nv))
- Attached to this post is visualization highlighting the effect of this strategy in a previous Kaggle competition. Each dot in this graph is the local validation score for an ensemble across three random seeds, and the leaderboard/test score of this ensemble. Individual seeds did exhibit significant randomness, and did not lead to a successful and confident validation strategy. ([View Highlight](https://read.readwise.io/read/01h9nxx3p42k8s8trcegc1j410))
- Actually, also some papers and public benchmarks would benefit from better highlighting the randomness involved. Often times it is also hard to judge as an audience if the score reported was just lucky, or actually representative. ([View Highlight](https://read.readwise.io/read/01h9nxxkyjt98m9snbjqar1k20))
- ![](https://pbs.twimg.com/media/F4yDbZFWUAAU9d4.jpg) ([View Highlight](https://read.readwise.io/read/01h9nxxrbf62bbj0wqnef3rnez))
