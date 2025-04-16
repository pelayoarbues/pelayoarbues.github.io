---
author: [[Jay Alammar]]
title: 'The Illustrated DeepSeek-R1'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F623a9dbf-c76e-438c-ba69-43ae9613ebbe_2930x1496.png)

## Metadata
- Author: [[Jay Alammar]]
- Full Title: The Illustrated DeepSeek-R1
- URL: https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1?triedRedirect=true

## Highlights
- How LLMs are trained
  Just like most existing LLMs, DeepSeek-R1 generates one token at a time, except it excels at solving math and reasoning problems because it is able to spend more time processing a problem through the process of generating thinking tokens that explain its chain of thought.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5280089e-8989-45d7-8194-93396b25557d_613x152.gif)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5280089e-8989-45d7-8194-93396b25557d_613x152.gif) ([View Highlight](https://read.readwise.io/read/01jjv5maa9kcbq7q3xwqjdk8zf))
- the general recipe of creating a high-quality LLM over three steps:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa354473-6ae0-4ae7-a20c-e858c804d6c4_1600x477.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa354473-6ae0-4ae7-a20c-e858c804d6c4_1600x477.png)
  1) The language modeling step where we train the model to predict the next word using a massive amount of web data. This step results in a base model.
  2) a supervised fine-tuning step that makes the model more useful in following instructions and answering questions. This step results in an instruction tuned model or a supervised fine -tuning / SFT model.
  3) and finally a preference tuning step which further polishes its behaviors and aligns to human preferences, resulting in the final preference-tuned LLM which you interact with on playgrounds and apps. ([View Highlight](https://read.readwise.io/read/01jjv5mv8k7r5ew4ymqzpzcw7q))
- DeepSeek-R1 follows this general recipe. The details of that first step come from a [previous paper for the DeepSeek-V3 model](https://arxiv.org/pdf/2412.19437v1). R1 uses the *base* model (not the final DeepSeek-v3 model) from that previous paper, and still goes through an SFT and preference tuning steps, but the details of how it does them are what's different.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc66dff5b-8332-4696-b484-b2ddb029b78c_854x234.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc66dff5b-8332-4696-b484-b2ddb029b78c_854x234.png) ([View Highlight](https://read.readwise.io/read/01jjv5nsavq9t34rh1nepjwfyt))
- There are three special things to highlight in the R1 creation process.
  1- Long chains of reasoning SFT Data
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26136780-897d-4f64-b1e5-45936b6078dd_854x434.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26136780-897d-4f64-b1e5-45936b6078dd_854x434.png)
  This is a large number of long chain-of-thought reasoning examples (600,000 of them). These are very hard to come by and very expensive to label with humans at this scale. Which is why the process to create them is the second special thing to highlight ([View Highlight](https://read.readwise.io/read/01jjv5p705fgwy28p8wtfajj3a))
- 2- An interim high-quality reasoning LLM (but worse at non-reasoning tasks).
  This data is created by a precursor to R1, an unnamed sibling which specializes in reasoning. This sibling is inspired by a third model called *R1-Zero* (that we’ll discuss shortly). It is significant not because it’s a great LLM to use, but because creating it required so little labeled data alongside large-scale reinforcement learning resulting in a model that excels at solving reasoning problems.
  The outputs of this unnamed specialist reasoning model can then be used to train a more general model that can also do other, non-reasoning tasks, to the level users expect from an LLM.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4caea6a5-52a1-4651-8c71-4586c0637f3e_924x427.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4caea6a5-52a1-4651-8c71-4586c0637f3e_924x427.png) ([View Highlight](https://read.readwise.io/read/01jjv5q5f5c2k4qg0msdd6qtzc))
- 3- Creating reasoning models with large-scale reinforcement learning (RL)
  This happens in two steps:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45ca8c84-6eb6-4879-ab53-035174b17ce1_1620x700.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45ca8c84-6eb6-4879-ab53-035174b17ce1_1620x700.png)
  **3.1 Large-Scale Reasoning-Oriented Reinforcement Learning (R1-Zero)**
  Here, RL is used to create the interim reasoning model. The model is then used to generate the SFT reasoning examples. But what makes creating this model possible is an earlier experiment creating an earlier model called *DeepSeek-R1-Zero*.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69b9f117-caa3-42fd-a949-dc6433990d26_1526x506.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69b9f117-caa3-42fd-a949-dc6433990d26_1526x506.png) ([View Highlight](https://read.readwise.io/read/01jjv5qnrknvby6gs62kt7p5zm))
- R1-Zero is special because it is able to excel at reasoning tasks without having a labeled SFT training set. Its training goes directly from a pre-trained base model through a RL training process (no SFT step). It does this so well that it’s competitive with o1.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b5c964f-b654-49b2-ab5a-5618b256ef99_1588x418.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b5c964f-b654-49b2-ab5a-5618b256ef99_1588x418.png)
  This is significant because data has always been the fuel for ML model capability. How can this model depart from that history? This points to two things:
  1- Modern base models have crossed a certain threshold of quality and capability (this base model was trained on 14.8 trillion high-quality tokens).
  2- Reasoning problems, in contrast to general chat or writing requests, can be automatically verified or labeled. Let’s show this with an example. ([View Highlight](https://read.readwise.io/read/01jjv5s0nwtze3kz2zd9x95003))
- Example: Automatic Verification of a Reasoning Problem
  This can be a prompt/question that is a part of this RL training step:
  > Write python code that takes a list of numbers, returns them in a sorted order, but also adds 42 at the start.
  A question like this lends itself to many ways of automatic verification. Say we present this this to the model being trained, and it generates a completion:
  • A software linter can check if the completion is proper python code or not
  • We can execute the python code to see if it even runs
  • Other modern coding LLMs can create unit tests to verify the desired behavior (without being reasoning experts themselves).
  • We can go even one step further and measure execution time and make the training process prefer more performant solutions over other solutions — even if they’re correct python programs that solve the issue.
  We can present a question like this to the model in a training step, and generate multiple possible solutions.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8edd9db2-a071-4bba-9d14-bbdb076d6355_798x444.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8edd9db2-a071-4bba-9d14-bbdb076d6355_798x444.png) ([View Highlight](https://read.readwise.io/read/01jjv5ssstcmap9rsfk5n2rvnj))
- We can automatically check (with no human intervention) and see that the first completion is not even code. The second one is code, but is not python code. The third is a possible solution, but fails the unit tests, and the forth is a correct solution.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f9645a0-b1fb-4753-942c-583504297c25_972x517.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f9645a0-b1fb-4753-942c-583504297c25_972x517.png)
  These are all signals that can be directly used to improve the model. This is of course done over many examples (in mini-batches) and over successive training steps.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b595e04-bd57-4f78-8c9b-ab37797e9b66_955x543.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b595e04-bd57-4f78-8c9b-ab37797e9b66_955x543.png) ([View Highlight](https://read.readwise.io/read/01jjv5td9jskt5rr36db7spap9))
- These reward signals and model updates are how the model continues improving on tasks over the RL training process as seen in Figure 2 from the paper.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe48af6fa-8956-44b0-84cf-915e607f3b5e_1546x884.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe48af6fa-8956-44b0-84cf-915e607f3b5e_1546x884.png)
  Corresponding with the improvement of this capability is the length of the generated response, where the model generates more thinking tokens to process the problem.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd2b7d78-62ac-408c-8bd7-e14053bb8a46_1518x912.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd2b7d78-62ac-408c-8bd7-e14053bb8a46_1518x912.png) ([View Highlight](https://read.readwise.io/read/01jjv5tp81sev0hhda87hvvdz6))
- This process is useful, but the R1-Zero model, despite scoring high on these reasoning problems, confronts other issues that make it less usable than desired.
  > Although DeepSeek-R1-Zero exhibits strong reasoning capabilities and autonomously develops unexpected and powerful reasoning behaviors, it faces several issues. For instance, DeepSeek-R1-Zero struggles with challenges like poor readability, and language mixing. ([View Highlight](https://read.readwise.io/read/01jjv5v413dxts03z52sk2ypj7))
- R1 is meant to be a more usable model. So instead of relying completely on the RL process, it is used in two places as we’ve mentioned earlier in this section:
  1- creating an interim reasoning model to generate SFT data points
  2- Training the R1 model to improve on reasoning and non-reasoning problems (using other types of verifiers)
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45ca8c84-6eb6-4879-ab53-035174b17ce1_1620x700.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45ca8c84-6eb6-4879-ab53-035174b17ce1_1620x700.png) ([View Highlight](https://read.readwise.io/read/01jjv5vbq9j2684dacrej8h728))
- Creating SFT reasoning data with the interim reasoning model
  To make the interim reasoning model more useful, it goes through an supervised fine-tuning (SFT) training step on a few thousand examples of reasoning problems (some of which are generated and filtered from R1-Zero). The paper refers to this as cold start data”
  > **2.3.1. Cold Start** 
  > Unlike DeepSeek-R1-Zero, to prevent the early unstable cold start phase of RL training from the base model, for DeepSeek-R1 we construct and collect a small amount of long CoT data to fine-tune the model as the initial RL actor. To collect such data, we have explored several approaches: using few-shot prompting with a long CoT as an example, directly prompting models to generate detailed answers with reflection and verification, gathering DeepSeek-R1- Zero outputs in a readable format, and refining the results through post-processing by human annotators.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a89a9a0-c08f-430d-b135-7f012c2810ba_1824x586.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a89a9a0-c08f-430d-b135-7f012c2810ba_1824x586.png) ([View Highlight](https://read.readwise.io/read/01jjv65sqakyv7xpygtxvyev5d))
- But wait, if we have this data, then why are we relying on the RL process? It’s because of the scale of the data. This dataset might be 5,000 examples (which is possible to source), but to train R1, 600,000 examples were needed. This interim model bridges that gap and allows to synthetically generate that extremely valuable data.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F857e61c8-03e7-4bc7-bcbe-ca182f60a70e_3300x1170.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F857e61c8-03e7-4bc7-bcbe-ca182f60a70e_3300x1170.png) ([View Highlight](https://read.readwise.io/read/01jjv66534pmj6b6bpvbm1hgbk))
- If you’re new to the concept of Supervised Fine-Tuning (SFT), that is the process that presents the model with training examples in the form of prompt and correct completion. This figure from chapter 12 shows a couple of SFT training examples:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b630dbc-aaa4-4c27-804b-542055b0f298_2264x1324.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b630dbc-aaa4-4c27-804b-542055b0f298_2264x1324.png) ([View Highlight](https://read.readwise.io/read/01jjv66jkv259ear5qqj7z0prn))
- This enables R1 to excel at reasoning as well as other non-reasoning tasks. The process is similar to the the RL process we’ve seen before. But since it extends to non-reasoning applications, it utilizes a helpfulnes and a safety reward model (not unlike the Llama models) for prompts that belong to these applications.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0e5f9acf-b4ca-4ec4-9731-4845c8fc5515_902x394.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0e5f9acf-b4ca-4ec4-9731-4845c8fc5515_902x394.png) ([View Highlight](https://read.readwise.io/read/01jjv675p8s05yxa4ant5tpc5a))
- DeepSeek-R1 is a stack of [Transformer](https://jalammar.github.io/illustrated-transformer/) decoder blocks. It’s made up 61 of them. The first three are dense, but the rest are mixture-of-experts layers (See my co-author Maarten’s incredible intro guide here: [A Visual Guide to Mixture of Experts (MoE)](https://substack.com/home/post/p-148217245)).
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F199f326e-9a8d-4a95-8574-4778d5b7657b_538x413.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F199f326e-9a8d-4a95-8574-4778d5b7657b_538x413.png)
  In terms of model dimension size and other hyperparameters, they look like this:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ee664ae-a544-4e19-a145-0ae87acc43fa_916x481.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ee664ae-a544-4e19-a145-0ae87acc43fa_916x481.png) ([View Highlight](https://read.readwise.io/read/01jjv67nx0jk7000s1416kf380))
- With this, you should now have the main intuitions to wrap your head around the DeepSeek-R1 model. ([View Highlight](https://read.readwise.io/read/01jjv683fb8pjjdvswcb95qyxp))
