---
author: "[[huggingface.co]]"
title: 'Open-Source AI Cookbook'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/cookbook.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Open-Source AI Cookbook
- URL: https://huggingface.co/learn/cookbook/prompt_tuning_peft

## Highlights
- It’s an Additive Fine-Tuning technique for models. This means that we WILL NOT MODIFY ANY WEIGHTS OF THE ORIGINAL MODEL. You might be wondering, how are we going to perform Fine-Tuning then? Well, we will train additional layers that are added to the model. That’s why it’s called an Additive technique. ([View Highlight](https://read.readwise.io/read/01jhqdzg0q0g5hd536xb55jcwf))
- Considering it’s an Additive technique and its name is Prompt-Tuning, it seems clear that the layers we’re going to add and train are related to the prompt.
  ![Prompt_Tuning_Diagram](https://huggingface.co/datasets/huggingface/cookbook-images/resolve/main/Martra_Figure_5_Prompt_Tuning.jpg) ([View Highlight](https://read.readwise.io/read/01jhqdzkk1z11cpdpg5ayxvfcy))
- We are creating a type of superprompt by enabling a model to enhance a portion of the prompt with its acquired knowledge. However, that particular section of the prompt cannot be translated into natural language. **It’s as if we’ve mastered expressing ourselves in embeddings and generating highly effective prompts.**
  In each training cycle, the only weights that can be modified to minimize the loss function are those integrated into the prompt. ([View Highlight](https://read.readwise.io/read/01jhqdzw5cx33vwy9yyfyt0dc0))
- The primary consequence of this technique is that the number of parameters to train is genuinely small. However, we encounter a second, perhaps more significant consequence, namely that, **since we do not modify the weights of the pretrained model, it does not alter its behavior or forget any information it has previously learned.**
  The training is faster and more cost-effective. Moreover, we can train various models, and during inference time, we only need to load one foundational model along with the new smaller trained models because the weights of the original model have not been altered ([View Highlight](https://read.readwise.io/read/01jhqe03gq1aewc7266592n2rv))
- We are going to train two different models using two datasets, each with just one pre-trained model from the Bloom family. One model will be trained with a dataset of prompts, while the other will use a dataset of inspirational sentences. We will compare the results for the same question from both models before and after training. ([View Highlight](https://read.readwise.io/read/01jhqe0909h8wt91nmexsn7tha))
- As we want to have two different trained models, I will create two distinct prompts.
  The first model will be trained with a dataset containing prompts, and the second one with a dataset of motivational sentences.
  The first model will receive the prompt “I want you to act as a motivational coach.” and the second model will receive “There are two nice things that should matter to you:”
  But first, I’m going to collect some results from the model without Fine-Tuning. ([View Highlight](https://read.readwise.io/read/01jhqe0ppftder9s8k8n9j2rrb))
- In less than 10 minutes (CPU time in a M1 Pro) we trained 2 different models, with two different missions with a same foundational model as a base. ([View Highlight](https://read.readwise.io/read/01jhqe27nses51fceaa4yxznh5))
- Prompt Tuning is an amazing technique that can save us hours of training and a significant amount of money. In the notebook, we have trained two models in just a few minutes, and we can have both models in memory, providing service to different clients.
  If you want to try different combinations and models, the notebook is ready to use another model from the Bloom family.
  You can change the number of epochs to train, the number of virtual tokens, and the model in the third cell. However, there are many configurations to change. If you’re looking for a good exercise, you can replace the random initialization of the virtual tokens with a fixed value. ([View Highlight](https://read.readwise.io/read/01jhqe2dy8we7czqd3k7ndx6aq))
