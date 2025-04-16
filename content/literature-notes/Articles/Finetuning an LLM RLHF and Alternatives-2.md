---
author: [[Argilla S.L.U.]]
title: 'Finetuning an LLM: RLHF and Alternatives'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.argilla.io/blog/mantisnlp-rlhf/part-3-banner.png)

## Metadata
- Author: [[Argilla S.L.U.]]
- Full Title: Finetuning an LLM: RLHF and Alternatives
- URL: https://argilla.io/blog/mantisnlp-rlhf-part-3/

## Highlights
- The process may seem a little complex, and very data-greedy. Maybe now you understand why it has been depicted as a Shoggoth monster with a cherry on top. Courtesy of twitter.com/anthrupad
  ![Shoggoth with Smiley Face](https://argilla.io/blog/mantisnlp-rlhf/part-1-sloggoth.png)
  However, we start to see some light at the end of the tunnel, as the community starts working on simplifications of the process. Let’s talk about two of the alternatives to RLHF. ([View Highlight](https://read.readwise.io/read/01ha4aab7ynex263ygm6n1p59n))
- [Direct Preference Optimization (DPO)](https://argilla.io/blog/mantisnlp-rlhf-part-3#direct-preference-optimization-dpo)
  In *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*[[1]](https://arxiv.org/abs/2305.18290) the authors introduce a method called **Direct Preference Optimization (DPO)** for achieving precise control over Large-scale unsupervised Language Models (LLMs). As mentioned above, existing methods rely on Reinforcement Learning from Human Feedback (RLHF) are based on training a **Reward Model** and using **Proximal Policy Optimization (PPO)** (as described in our [second](https://argilla.io/blog/mantisnlp-rlhf-part-2) post)**,** to align the LM’s output with human preferences. But this approach is very complex and unstable.
  DPO solves the constrained reward maximization problem by treating it as a classification problem on human preference data. The algorithm is stable, efficient, and computationally lightweight, eliminating the need for reward model fitting, LM sampling, and extensive hyperparameter tuning.
  Unlike existing methods that train a **Reward Model** and then optimizes a **Policy** based on that RM (Reinforcement Learning by Human Feedback using PPO — left of the figure), DPO **directly defines the preference loss as a function of the Policy** (right). In short, it removes the requirement of training first a Reward Model.
  ![Direct Preference Optimization](https://argilla.io/blog/mantisnlp-rlhf/part-3-dpo.png) ([View Highlight](https://read.readwise.io/read/01ha4ae858xyfs712s3ksj4a8f))
- [Direct Preference Optimization (DPO)](https://argilla.io/blog/mantisnlp-rlhf-part-3#direct-preference-optimization-dpo)
  In *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*[[1]](https://arxiv.org/abs/2305.18290) the authors introduce a method called **Direct Preference Optimization (DPO)** for achieving precise control over Large-scale unsupervised Language Models (LLMs). As mentioned above, existing methods rely on Reinforcement Learning from Human Feedback (RLHF) are based on training a **Reward Model** and using **Proximal Policy Optimization (PPO)** (as described in our [second](https://argilla.io/blog/mantisnlp-rlhf-part-2) post)**,** to align the LM’s output with human preferences. But this approach is very complex and unstable.
  DPO solves the constrained reward maximization problem by treating it as a classification problem on human preference data. The algorithm is stable, efficient, and computationally lightweight, eliminating the need for reward model fitting, LM sampling, and extensive hyperparameter tuning.
  Unlike existing methods that train a **Reward Model** and then optimizes a **Policy** based on that RM (Reinforcement Learning by Human Feedback using PPO — left of the figure), DPO **directly defines the preference loss as a function of the Policy** (right). In short, it removes the requirement of training first a Reward Model.
  ![Direct Preference Optimization](https://argilla.io/blog/mantisnlp-rlhf/part-3-dpo.png) ([View Highlight](https://read.readwise.io/read/01hr4kzbsywasp0swpgba9a621))
- In *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*[[1]](https://arxiv.org/abs/2305.18290) the authors introduce a method called **Direct Preference Optimization (DPO)** for achieving precise control over Large-scale unsupervised Language Models (LLMs). As mentioned above, existing methods rely on Reinforcement Learning from Human Feedback (RLHF) are based on training a **Reward Model** and using **Proximal Policy Optimization (PPO)** (as described in our [second](https://argilla.io/blog/mantisnlp-rlhf-part-2) post)**,** to align the LM’s output with human preferences. But this approach is very complex and unstable. ([View Highlight](https://read.readwise.io/read/01ha4adcy3tdkmkm6yn6rxe9f2))
- DPO solves the constrained reward maximization problem by treating it as a classification problem on human preference data. The algorithm is stable, efficient, and computationally lightweight, eliminating the need for reward model fitting, LM sampling, and extensive hyperparameter tuning. ([View Highlight](https://read.readwise.io/read/01ha4adq4hbvhn6g5gp5nj3hye))
- The DPO pipeline has two stages:
  1. Run supervised fine-tuning (SFT) on the dataset(s) of interest.
  2. Run preference learning on the model from step 1, using **Preference Data** (ideally from the same distribution as the SFT examples)
  As you see, **Preference Data** is still required to train the **Policy**. But it gets rid of the complexity of training a Reward Model first to then optimize a LM Policy to then fine-tune a LLM.
  How is that achieved? The idea is using the **very same LLM as a Reward Model.** During fine-tuning time,**DPO** optimizes the policy using a binary cross-entropy objective. It uses the human preference data to determine what responses are preferred and what responses are not. By comparing the model's responses to the preferred ones, it can adjust the policy to improve its performance. ([View Highlight](https://read.readwise.io/read/01hr4m0an8rt9hcj3td6r5rwxz))
- The DPO pipeline has two stages:
  1. Run supervised fine-tuning (SFT) on the dataset(s) of interest.
  2. Run preference learning on the model from step 1, using **Preference Data** (ideally from the same distribution as the SFT examples)
  As you see, **Preference Data** is still required to train the **Policy**. But it gets rid of the complexity of training a Reward Model first to then optimize a LM Policy to then fine-tune a LLM.
  How is that achieved? The idea is using the **very same LLM as a Reward Model.** During fine-tuning time,**DPO** optimizes the policy using a binary cross-entropy objective. It uses the human preference data to determine what responses are preferred and what responses are not. By comparing the model's responses to the preferred ones, it can adjust the policy to improve its performance. ([View Highlight](https://read.readwise.io/read/01ha4agmm1qbf8znetkkrw7ef1))
    - Tags: [[favorite]] 
- In the Chain of Hindsight Aligns Language Models with Feedback [[5]](https://arxiv.org/pdf/2302.02676.pdf) paper another interesting idea is presented, again using the LLM as a means to optimize the Policy. The key idea this time is that humans are capable of learning from rich and detailed feedback in the form of comparisons.
  In this scenario, we use the **Preference Data** to complement the input. The authors use an example with 2 answers in the PD dataset, one is helpful, another is not. The helpful one is added following “A helpful answer:”, and the unhelpful answer too in a similar way, both after the input.
  ![On the left, preference data. On the right, the concatenation of the input, the helpful answer and the unhelpful.](https://argilla.io/blog/mantisnlp-rlhf/part-3-preference.png)
  During training, the model is presented with feedback consisting of the input and the contrastive data (*helpful vs unhelpful, good vs bad*, etc) as we expressed above. The model is conditioned to predict outputs that better match the good alternative. Loss is applied on the corresponding outputs “{a good answer}” and “{a bad answer}”. At inference time, positive feedback “Good:” to instruct the model to generate the desired outputs.
  In conclusion, by applying SFT and PPO on the Human Preference Data in the form of contrastive information, with Chain of Hindsight we can leverage the power of LLM to optimize the Policy without needing to train an external Reward Model. ([View Highlight](https://read.readwise.io/read/01ha4ahcb3d23y63axsbxj1rww))
- In the Chain of Hindsight Aligns Language Models with Feedback [[5]](https://arxiv.org/pdf/2302.02676.pdf) paper another interesting idea is presented, again using the LLM as a means to optimize the Policy. The key idea this time is that humans are capable of learning from rich and detailed feedback in the form of comparisons. ([View Highlight](https://read.readwise.io/read/01ha4ah0vedr0r0tj4jhhbbkvx))
- During training, the model is presented with feedback consisting of the input and the contrastive data (*helpful vs unhelpful, good vs bad*, etc) as we expressed above. The model is conditioned to predict outputs that better match the good alternative. Loss is applied on the corresponding outputs “{a good answer}” and “{a bad answer}”. At inference time, positive feedback “Good:” to instruct the model to generate the desired outputs.
  In conclusion, by applying SFT and PPO on the Human Preference Data in the form of contrastive information, with Chain of Hindsight we can leverage the power of LLM to optimize the Policy without needing to train an external Reward Model. ([View Highlight](https://read.readwise.io/read/01ha4aj18vwqbkxd1p9axg2wwb))
- From the two techniques explained above, we are going to showcase the easy steps of applying Direct Preference optimization to fine-tune a LLM.
  In the following link, you will be able to find the new [DPO Trainer](https://huggingface.co/docs/trl/main/en/dpo_trainer) module, inside the [TRL](https://huggingface.co/docs/trl/main/en/index) (Transformer Reinforcement Learning) library.
  The steps to use the DPO Trainer instead RLHF described in the documentation are the following:
  1. About SFT, they indeed mention that it’s the first requirement, as we commented before(...The first step as always is to train your SFT model, to ensure the data we train on is in-distribution for the DPO algorithm). This is also very important since the data in SFT should be in-distribution, to be able to run DPO (or any other technique).
  2. After, they describe the preference data format. They use [Anthropic/hh-rlhf](https://huggingface.co/datasets/Anthropic/hh-rlhf)’s format, which uses, as mentioned above, a binary classification of accepted-rejected:
  ![Anthropic’s hh-rlhf dataset, renderer in Hugging Face Dataset viewer](https://argilla.io/blog/mantisnlp-rlhf/part-3-dataset.png) ([View Highlight](https://read.readwise.io/read/01ha4ajkh4971emanqrb606k11))
- From the two techniques explained above, we are going to showcase the easy steps of applying Direct Preference optimization to fine-tune a LLM.
  In the following link, you will be able to find the new [DPO Trainer](https://huggingface.co/docs/trl/main/en/dpo_trainer) module, inside the [TRL](https://huggingface.co/docs/trl/main/en/index) (Transformer Reinforcement Learning) library. ([View Highlight](https://read.readwise.io/read/01ha4ajepr1wh5x0nn057c5533))
- The data and consists of three fields:
  1. *prompt*, containing the context inputs.
  2. *chosen*, containing the corresponding chosen responses
  3. *rejected*, containing the rejected answers.
  ![Fields required by DPO](https://argilla.io/blog/mantisnlp-rlhf/part-3-code-data.png)
  Finally, they describe with a few lines of code, how you can configure a **DPOTrainer** class and run the train. Here is what you will need:
  1. *model*, the fine-tuned version of your model (the result from SFT);
  2. *model_ref*, the non-fine-tuned version of the model that's being fine-tuned. Usually it’s the original checkpoint you used before SFT.
  3. *training_args*, same TrainerArguments class object present in transformers library, containing a list of training parameters such as *per_device_train_batch_size, max_steps, gradient_accumulation_steps, learning_rate, evaluation_strategy, output_dir, etc*.
  4. *beta*, temperature parameter for the DPO loss, typically something in the range of 0.1 to 0.5.
  5. *train_dataset*, the preference data in the format described above inside a Dataset class object.
  6. *tokenizer*, the tokenizer instantiated (usually with Autotokenizer) from the *model*.
  ![Syntax of the DPOTrainer in Hugging Face’s trl](https://argilla.io/blog/mantisnlp-rlhf/part-3-code.png) ([View Highlight](https://read.readwise.io/read/01ha4ak48p96j4735g7m9xm5b0))
- fine-tuning a large language model (LLM) for generating text using specific guidelines can be highly useful in various applications. By providing specific guidelines, we can shape the LLM's output to align with our desired objectives, ensuring more accurate and controlled text generation.
  This process has been historically very complex, requiring to train first a Reward Model to then optimize the Policy of the LLM.
  However, recent approaches, such as Direct Policy Optimization (DPO) and Chain of Hindsight (CoH) have shown how you can use Large Language as Reward Models. ([View Highlight](https://read.readwise.io/read/01hr4m3c4jbsrpyvjk1c450m0r))
- fine-tuning a large language model (LLM) for generating text using specific guidelines can be highly useful in various applications. By providing specific guidelines, we can shape the LLM's output to align with our desired objectives, ensuring more accurate and controlled text generation.
  This process has been historically very complex, requiring to train first a Reward Model to then optimize the Policy of the LLM.
  However, recent approaches, such as Direct Policy Optimization (DPO) and Chain of Hindsight (CoH) have shown how you can use Large Language as Reward Models. ([View Highlight](https://read.readwise.io/read/01ha4akh5y75ty4k5x4wa8e4y5))
