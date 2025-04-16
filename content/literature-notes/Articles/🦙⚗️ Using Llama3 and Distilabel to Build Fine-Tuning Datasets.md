---
author: [[Daniel Vila]]
title: "🦙⚗️ Using Llama3 and Distilabel to Build Fine-Tuning Datasets"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://cdn-thumbnails.huggingface.co/social-thumbnails/blog/dvilasuero/synthetic-data-with-llama3-distilabel.png)

## Metadata
- Author: [[Daniel Vila]]
- Full Title: 🦙⚗️ Using Llama3 and Distilabel to Build Fine-Tuning Datasets
- URL: https://huggingface.co/blog/dvilasuero/synthetic-data-with-llama3-distilabel

## Highlights
- At [Argilla](https://github.com/argilla-io/), we have released a series of [impactful open datasets for aligning LLMs](https://huggingface.co/datasets?other=distilabel). Unfortunately, all those datasets used closed models (mostly GPT-4) to perform the AI Feedback (AIF) or LLM-as-Judge step. This step uses an LLM to judge the quality of several responses so they can be used for preference tuning. The reason for using closed models is that the AI feedback step requires a powerful and highly capable model to approximate human preference. The end goal is creating a dataset that can be used to improve OSS models, using alignment methods like DPO, ORPO, or KTO. Now that Llama3 is closing the perfomance gap, we're a step closer to our vision: **fully open data generation pipelines**! ([View Highlight](https://read.readwise.io/read/01hwdens54m2ypgz7hw1eqb6qj))
- To build a high-quality preference dataset from scratch, we need:
  • A **dataset with prompts**: I use [DIBT/10k_prompts_ranked](https://huggingface.co/datasets/DIBT/10k_prompts_ranked). I love this dataset because it contains high-quality prompts, curated by 314 amazing [DIBT](https://huggingface.co/blog/community-datasets) community members! Check out the [Argilla Space](https://huggingface.co/spaces/DIBT/prompt-collective) if you want to look at the data yourself. Personally, I find that spending some minutes looking at the data is the most impactful way to learn about how AI models and methods work!
  • **One or several models to generate responses** to the prompts: I use Llama3 models (8B and 70B instruct versions). Running these models can be costly and require certain skills to deploy them. Luckily, you can use Serverless Inference Endpoints for free!
  • **A model to judge the quality of generated responses**: As mentioned above, this is one of the first examples in the wild using Llama3-70B-Instruct to do this. It won't certainly be the last!
  • **Code to perform and orchestrate the data generation pipeline**: You can develop your own code to define the data preparation, configuration, prompts, inference code, etc. or you can use our shiny new distilabel 1.0 which greatly simplifies this process and comes with all you need to build complex data synthesis and AIF pipelines!
  • **Human feedback**: I use Argilla for this. To me this is the key step and the one that makes distilabel stand out: you can make your dataset available for human experts with a nice, transparent UI. AI generated datasets come with a lot of limitations (all sorts of biases, overly confident ratings, limited reasoning capabilities, and so on). If you want to make a high quality dataset, I highly encourage you to at least spend a few hours verifying the generated data. Even if you have limited resources and want to generate a fully synthetic dataset, **you'll always find ways to improve the data generation pipeline** (see [our work on Notus](https://argilla.io/blog/notus7b) for example). For more critical use cases, this step means you can make the AI dataset available for your pool of experts, before even any money fine-tuning a model. ([View Highlight](https://read.readwise.io/read/01hwdeq2kgq36q880b71rmtd8f))
- The full pipeline with `500` examples takes **less than 30 min to run and costs $0**. Check out the last section to see the full code. ([View Highlight](https://read.readwise.io/read/01hwdessc3r2c706mgh6bacnem))
- This post explains the basics and shows an end to end pipeline. In future posts, I'll compare the results of this pipeline with a GPT-4-turbo Judge to understand how far we are from replacing closed models for AIF datasets. ([View Highlight](https://read.readwise.io/read/01hwdet013t37e56wqg010vgxe))
