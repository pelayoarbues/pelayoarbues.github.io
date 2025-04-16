---
author: "[[Vasanthkumar Velayudham |]]"
title: 'Learning Path to Build LLM Based Solutions — for Practioning Data Scientists'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:750/1*bcWretvLzZNTIQjBN0nXsQ.jpeg)

## Metadata
- Author: [[Vasanthkumar Velayudham |]]
- Full Title: Learning Path to Build LLM Based Solutions — for Practioning Data Scientists
- URL: https://heartbeat.comet.ml/learning-path-to-build-llm-based-solutions-for-practioning-data-scientists-f72d5035fd21?source=rss----680eee12c50d---4

## Highlights
- Open-source LLMs, especially for data scientists, give a broader scope to learn and apply new things. The best resource to monitor the current status of open source LLMS is Hugging Face Open LLM Leaderboard, where the open source LLMs are ranked based on various evaluations. ([View Highlight](https://read.readwise.io/read/01hpmkr0998rjfkb3kc7f2ex05))
- This is the most basic and widely applicable one. Here, we primarily work with proprietary LLMs such as ChatGPT. This is about learning the best way to compose the prompt messages so LLMs would give you the most appropriate answer. ([View Highlight](https://read.readwise.io/read/01hpmkrabg2pp58rtgj5sj7275))
- Langchain is a framework built to interface LLM solutions with other technologies. Say you have a use case that requires you to feed the input from your database to LLM models — then you would need Langchain for integration. Langchain is very comprehensive, and its applications are evolving rapidly. ([View Highlight](https://read.readwise.io/read/01hpmkrd62p6j1h2j9ttcwtykp))
- LLM fine-tuning is one of the exciting areas where we curate the dataset specific to our needs and tune the LLM models built by the providers. This has a broad scope of learning for data scientists, and it's necessary to have a good grasp of the following concepts to excel here. ([View Highlight](https://read.readwise.io/read/01hpmkrk605a61xzn2sanfd08j))
- ***→ Hugging Face Text Generation Pipeline:*** Hugging Face has become synonymous with large models, and they have built amazing libraries to aid the fine-tuning of pre-trained models. ([View Highlight](https://read.readwise.io/read/01hpmkrqxb4jkg1qtqhxfv0b8g))
- Also, please note that LLM models are causal language models that generate responses by predicting the best words to complete the sentence. So, it is essential to have a good grasp of training a causal language model from scratch, and the article below is beneficial: ([View Highlight](https://read.readwise.io/read/01hpmkrtnnmeedqkaxx7s2pc85))
- → ***PEFT, LORA, QLora concepts***: Fine-tuning LLM models is not as straightforward as 'transfer learning' that we do with other models. Since we must deal with parameters in the billions scale, we must employ a more sophisticated process based on PEFT (Parameter Efficient Fine Tuning) concepts. ([View Highlight](https://read.readwise.io/read/01hpmkrzctn02rb39zqz419jq8))
- → ***Quantization:*** Quantization helps fine-tune massive LLMs on a single GPU without compromising performance. Again, Hugging Face has published excellent articles to understand the nuances of quantization in detail, as listed below: ([View Highlight](https://read.readwise.io/read/01hpmks84h4yz4kwgrxm07j191))
- → ***Instruction Dataset***: To fine-tune LLMs properly, we require high-quality datasets in an instructional format. ([View Highlight](https://read.readwise.io/read/01hpmksdgx2ycxt0yfh9sjq51v))
- If you observe the Open LLMs Llama, Falcon, etc — they release two versions of models, such as the base version and the instruct version. ([View Highlight](https://read.readwise.io/read/01hpmkt3sry1xvbb7g5rv93bh9))
- The base version is trained on an open corpus of massive text at an internet scale, and usually, it will be trained for multiple months in a GPU farm. These base version models are foundational to building the LLMs toward specific needs. ([View Highlight](https://read.readwise.io/read/01hpmkt6c72xscp5j8tcafp7bp))
- Instruct versions are the ones that are built using base versions with high-quality instructional datasets, where quality presides over quantity. We can build high-performance instruct models with the instructional dataset containing even ~20K records. ([View Highlight](https://read.readwise.io/read/01hpmktcg286zfff9xeywz0b3x))
- So, to fine-tune the model for our business use case — we need to curate high-quality datasets in the Alpaca format. ([View Highlight](https://read.readwise.io/read/01hpmktrv61eg5hqj1z0d63p47))
- Also, please note that for fine-tuning, base versions are recommended. ([View Highlight](https://read.readwise.io/read/01hpmktwczz0xwe6v7y1h5b0cx))
- Here, we leverage the foundational models and build the RAG solution, where LLM models respond by summarizing the information associated with the query from your content. ([View Highlight](https://read.readwise.io/read/01hpmkv1zwe3e2njzamk9hw6zv))
