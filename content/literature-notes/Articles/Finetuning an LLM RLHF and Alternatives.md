---
author: "[[Argilla S.L.U.]]"
title: 'Finetuning an LLM: RLHF and Alternatives'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.argilla.io/blog/mantisnlp-rlhf/part-2-banner.png)

## Metadata
- Author: [[Argilla S.L.U.]]
- Full Title: Finetuning an LLM: RLHF and Alternatives
- URL: https://argilla.io/blog/mantisnlp-rlhf-part-2/

## Highlights
- Unfortunately, **SFT** alone is often insufficient for refining the large language models to meet specific requirements.
  With it, you can complement the lack of information you may have in pretrained LLM, change the style, structure, teach to answer differently to different outputs.
  However, there will always be multiple ways you can answer a question. State-of-the-art conversational models, such as ChatGPT, have been traditionally requiring an additional step called **Reinforcement Learning by Human Feedback (RLHF).** ([View Highlight](https://read.readwise.io/read/01ha49v0926z04jbskxptnpk9e))
- Unfortunately, **SFT** alone is often insufficient for refining the large language models to meet specific requirements.
  With it, you can complement the lack of information you may have in pretrained LLM, change the style, structure, teach to answer differently to different outputs.
  However, there will always be multiple ways you can answer a question. State-of-the-art conversational models, such as ChatGPT, have been traditionally requiring an additional step called **Reinforcement Learning by Human Feedback (RLHF).** ([View Highlight](https://read.readwise.io/read/01hr4krn4sn2rq6s1yf7k467br))
- Reinforcement learning is a paradigm in which an agent learns to make decisions by receiving feedback from its environment. In the context of language models, this feedback is provided by human reviewers who assess and rate the model's responses. By leveraging human expertise and judgments, reinforcement learning facilitates the iterative improvement of the model's performance and fine-tunes its responses. ([View Highlight](https://read.readwise.io/read/01ha49v84mfxstxphsa6adrshb))
- Reinforcement learning is a paradigm in which an agent learns to make decisions by receiving feedback from its environment. In the context of language models, this feedback is provided by human reviewers who assess and rate the model's responses. By leveraging human expertise and judgments, reinforcement learning facilitates the iterative improvement of the model's performance and fine-tunes its responses.
  The process of reinforcement learning by human feedback involves several important steps:
  1. **Guidelines** are defined to guarantee unique criteria when deciding what is a good and a bad answer to an input.
  2. A **Reward Model (RM)** should be trained, which will evaluate each of the responses in terms of accuracy, relevance, and adherence to guidelines.
  3. To train the RM, some prompts are selected and sent to human reviewers. We call them **Preference Data (PD)**
  4. The reviewers then interact with the model and manually evaluate and rate the corresponding outputs.
  5. The collected feedback, in the form of ratings or rankings, is used to train the RM.
  6. With the RM trained, we can train a **Policy Optimizer**, a required component which will guide the fine-tuning of the LLM.
  7. We fine-tune the LLM with Policy Optimization.
  8. This iterative feedback loop allows the model to gradually learn from human guidance and refine its behavior accordingly. ([View Highlight](https://read.readwise.io/read/01hr4ksgc97a56qyxc5px2pv7a))
- The process of reinforcement learning by human feedback involves several important steps:
  1. **Guidelines** are defined to guarantee unique criteria when deciding what is a good and a bad answer to an input.
  2. A **Reward Model (RM)** should be trained, which will evaluate each of the responses in terms of accuracy, relevance, and adherence to guidelines.
  3. To train the RM, some prompts are selected and sent to human reviewers. We call them **Preference Data (PD)**
  4. The reviewers then interact with the model and manually evaluate and rate the corresponding outputs.
  5. The collected feedback, in the form of ratings or rankings, is used to train the RM.
  6. With the RM trained, we can train a **Policy Optimizer**, a required component which will guide the fine-tuning of the LLM.
  7. We fine-tune the LLM with Policy Optimization.
  8. This iterative feedback loop allows the model to gradually learn from human guidance and refine its behavior accordingly. ([View Highlight](https://read.readwise.io/read/01ha49w5ypwn275bmx302ckc55))
- [Preference Data](https://argilla.io/blog/mantisnlp-rlhf-part-2#preference-data)
  The main requirement at this point is having **Preference Data (PD)**. Preference Data is a collection of options / alternatives to a prompt, which can be sent to a group of Annotators and/or Subject Matter Experts (SME) so that they rate it, given some annotation guidelines, from the best to the worst. ([View Highlight](https://read.readwise.io/read/01hr4ksty4vazgmn8cd5bxme0p))
- The main requirement at this point is having **Preference Data (PD)**. Preference Data is a collection of options / alternatives to a prompt, which can be sent to a group of Annotators and/or Subject Matter Experts (SME) so that they rate it, given some annotation guidelines, from the best to the worst.
  Several approaches have been used to create the Preference Data.
  1. For selecting the best prompts, you can either have a predefined set of them, have a predefined template and generate some on the fly, and or combine/those with random prompts from a database, for example.
  2. For selecting the answers, you can send the prompt to one specific version of the model (the last one you have fine-tuned) or to different checkpoints. Decide how many answers you want to rank: you can use just 2 and have a binary ranking schema of best-worst or have your annotators ranking from 1 to 5, as an example.
  3. Always define first the Annotation Guidelines for the different ranking levels, to minimize individual interpretations and standardize the answers. ([View Highlight](https://read.readwise.io/read/01ha49wzt41765nncsr86pemxy))
- Several approaches have been used to create the Preference Data.
  1. For selecting the best prompts, you can either have a predefined set of them, have a predefined template and generate some on the fly, and or combine/those with random prompts from a database, for example.
  2. For selecting the answers, you can send the prompt to one specific version of the model (the last one you have fine-tuned) or to different checkpoints. Decide how many answers you want to rank: you can use just 2 and have a binary ranking schema of best-worst or have your annotators ranking from 1 to 5, as an example.
  3. Always define first the Annotation Guidelines for the different ranking levels, to minimize individual interpretations and standardize the answers. ([View Highlight](https://read.readwise.io/read/01hr4kt7k3nsagvdskk73bjxa1))
- This is what the [OpenAI Summarization Preference Data](https://huggingface.co/datasets/openai/summarize_from_feedback) looks like (again, using Hugging Face Dataset viewer): given **1 prompt** (left, a summarization task on an article), you have **N answers** (right, the summaries) with a ranking/score (in this case there are several axes/metrics, like accuracy, coverage, etc. being the final aggregated metric called ‘*overall’*)
  ![On the left, an article. On the right, a summary ranked by an Annotator on different axes.](https://argilla.io/blog/mantisnlp-rlhf/part-2-code.png)
  After collecting a dataset of prompts and answers (the **Preference Data - PD**), you can already send them to your Annotators for a review. ([View Highlight](https://read.readwise.io/read/01ha4a4h6rzvadrxr5n1f3zwd3))
- Preference data implies ranking outputs from best to worst, as mentioned above. Argilla introduced `RankingQuestion` in version 1.12.0 to the `FeedbackDataset`s that can be used for this kind of ranking.
  As a quick recap, `FeedbackDataset`s in Argilla require both a list of fields and a list of questions so that the annotators can provide answers to those. In this case, to rank the answers for a dataset as the one mentioned above, we would need the following:
  • `TextField`s to define both the prompts and the answers generated for those prompts.
  • `RankingQuestion` to ask the annotators to rank the responses for a given prompt from best to worst, following the pre-defined annotation guidelines.
  Translated to code, it would look like this:
  ![How to prepare Preference Data in Argilla](https://argilla.io/blog/mantisnlp-rlhf/part-2-dataset.png) ([View Highlight](https://read.readwise.io/read/01ha4a4vx1m99m0kvey705ve9r))
- Preference data implies ranking outputs from best to worst, as mentioned above. Argilla introduced `RankingQuestion` in version 1.12.0 to the `FeedbackDataset`s that can be used for this kind of ranking.
  As a quick recap, `FeedbackDataset`s in Argilla require both a list of fields and a list of questions so that the annotators can provide answers to those. In this case, to rank the answers for a dataset as the one mentioned above, we would need the following:
  • `TextField`s to define both the prompts and the answers generated for those prompts.
  • `RankingQuestion` to ask the annotators to rank the responses for a given prompt from best to worst, following the pre-defined annotation guidelines. ([View Highlight](https://read.readwise.io/read/01hr4kv938jahh1tw7bvwy4rad))
- Running the above in Argilla, would generate the following dataset in the Argilla UI, ready for the annotators to start ranking the answers to a collection of prompts, to later on be collected to train/fine-tune a Reinforcement Learning model based on Preference Data.
  ![Argilla’s UI rendering the preference ranking coded above](https://argilla.io/blog/mantisnlp-rlhf/part-2-ui.png) ([View Highlight](https://read.readwise.io/read/01ha4a542mk9z4sk8nhyfqc0rj))
- Preference Data can contain several alternatives to be ranked from 0 to N. ChatGPT used 4 alternatives ranked from A to D (see figure below). However, simplified methodologies, as Direct Preference Optimization, will just require a binary classification of *chosen vs rejected*. With that, you could set up Argilla to just show, for example, two responses (*Response-1* and *Reponse-2*) and choose the best as *Chosen* and the least preferred as *Rejected.* ([View Highlight](https://read.readwise.io/read/01ha4a5pct2s224gkyrve8kp0s))
- Preference Data can contain several alternatives to be ranked from 0 to N. ChatGPT used 4 alternatives ranked from A to D (see figure below). However, simplified methodologies, as Direct Preference Optimization, will just require a binary classification of *chosen vs rejected*. With that, you could set up Argilla to just show, for example, two responses (*Response-1* and *Reponse-2*) and choose the best as *Chosen* and the least preferred as *Rejected.* ([View Highlight](https://read.readwise.io/read/01hr4kvvcnbmtjhsfy05qqxhgz))
- So far we have seen we need 2 datasets to get our LLM-based chatbot working: the Instruction Data for fine-tuning and the Preference Data for Reinforcement Learning. Let’s clarify the differences:
  • The **Instruction Data** is used in the fine-tuning step, and consists of prompts and expected answers which aim to improve or correct the way an LLM generates text based on a prompt. You may even want to train the model on a generation of a new type of content, for example, a piece of advertisement, SEO content, a report, etc - and the model may not have been trained to do that! That is where Instruction Data comes into play, and consists of rows with **1 prompt and 1 generated example** to it.
  • The **Preference Data** is used to train a Policy (see next section). Basically, here you are not teaching the model anymore to write specific emails, or reports, or any content of your needs. You are training a Policy Model to make the model distinguish, given N acceptable answers to a prompt, which are better than others. Usually Preference Data is a collection of 1 prompt and N answers to that prompt, to then be ranked for a group of Annotators or Subject Matter Experts.
  This is how [ChatGPT](https://openai.com/blog/chatgpt) depicts it:
  ![Instruction data vs Preference Data, inspired by ChatGPT methodology schema](https://argilla.io/blog/mantisnlp-rlhf/part-2-preference.png) ([View Highlight](https://read.readwise.io/read/01ha4a6mx995gd19aw93c0bqvw))
- RLHF adds a big complexity to the process of training your custom LLM. In summary of what we described above. This is the picture which summarizes everything you need to do:
  ![Optimizing a Policy using TRL](https://argilla.io/blog/mantisnlp-rlhf/part-2-policy.png)
  In summary, it requires the following artifacts:
  1. **Annotation Guidelines** to define what is a good or a bad answer.
  2. **Preference Data:** Selecting prompts for Human Labellers. Generating the outputs for evaluators.
  3. A **Reward Model (RM)**;
  4. A **Policy**, optimized with the data from the **RM**;
  It’s evident the process is complex and very expensive in terms of human and computational resources. But there are alternatives that combine the fine-tuning of the model (SFT) with the Reward Modeling, simplifying the process a lot. ([View Highlight](https://read.readwise.io/read/01ha4a935n0r5jghk335hnt7n2))
