---
author: [[Raúl Pérula-Martínez.]]
title: 'LangSmith. A Review of How to Make Interaction With LLM Prompts Easier'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.sngular.com/wp-content/uploads/2023/11/LangSmith-4-scaled.jpg)

## Metadata
- Author: [[Raúl Pérula-Martínez.]]
- Full Title: LangSmith. A Review of How to Make Interaction With LLM Prompts Easier
- URL: https://www.sngular.com/es/langsmith-facilitando-la-interaccion-con-llms/

## Highlights
- LangSmith can be used from the website or you can integrate it into your code, as indicated in the [documentation](https://docs.smith.langchain.com/). Although this documentation could be improved to be more user-friendly to the Prompt Specialists, it can help us get started with the platform. ([View Highlight](https://read.readwise.io/read/01hfvj8az4v42ndw1f28qd7d7d))
- Regarding the creation of **projects** in LangSmith, this is a very simple task and allows you to upload a test dataset to evaluate your prompts. The dataset may have three different formats: key-value format (the default one), chat format (with system-role and user-role inputs), and LLM format (it directly maps the user's questions to the assistant's answers).
  Besides, if you want to create a **dataset** and test it from the tool, LangSmith provides you with the code to run it and the possibility to select some parameters or evaluators to apply to the dataset. ([View Highlight](https://read.readwise.io/read/01hfvj8sxce3k5kr2b9sadr661))
- The **Hub**, on the other hand, is a space for LangSmith users to search, save, share and test their own prompts or those created by the community. It is especially useful for benchmarking. The variety of filters (use cases, type, language, models, etc.) in the search bar makes it easier for the user to find prompts according to different interests. Moreover, the similarity to a repository layout makes it particulary attractive.
  One of the most outstanding features is the **Playground** within each Chat Prompt Template, where we can try prompts from other users. It is interesting that the prompts incorporate a *Readme* file as documentation of the usability of the prompt.
  Likewise, we can check our prompts or create a new one in *My prompts*. Whether we have done a fork from an existing prompt or created a prompt from scratch, one of the actions we can take is to commit the version we are working on. In this way, it will be saved so that it can be registered and reviewed by the community or your working group. ([View Highlight](https://read.readwise.io/read/01hfvj910q3w78gxz6j75xt4s9))
- we can see the **History** of a prompt to trace its runs, which is awesome!
  In the runs we are able to see the template, the variables used, the parameters selected for making the call to the model and the output. And what is more, we can also see the token consumption and the latency of the call. ([View Highlight](https://read.readwise.io/read/01hfvj9c0z7wab1hhcy9atwkh9))
- ven the connection with third-party services is a high-power feature of this tool, it is also limited by the fact that it **depends on the providers**. In this way, only a model from available providers (OpenAI, Azure and Proxy) can be called and only if you have the **credentials**. The version of the model is a limiter, as well as the number of tokens per output, which sometimes forces the segmentation of the call. This fact may cause the loss of context and inconsistent responses. ([View Highlight](https://read.readwise.io/read/01hfvj9xpemdfnd6hvefrmx512))
- The feature of tracing is really powerful, but we cannot trace everything. One of the most pointed out shortcomings of LangSmith is that **it is not possible to track the commits or changes per user within a workgroup**, which is cumbersome for organizations that have several members working at the same time and at the same prompt. Forking is recommended in these cases, but it would still be costly to identify which version corresponds to each user. ([View Highlight](https://read.readwise.io/read/01hfvjac0fr7jxn041q2f9v42x))
- Lastly, but importantly, the **documentation** is rather brief and could be a little bit more intuitive for non-technical people such as Computational Linguists or Prompt Specialists, helping understand the platform in a better way. The less intuitive functionalities come across as you test them and this is something that could be improved. ([View Highlight](https://read.readwise.io/read/01hfvjaepjjhr6acftesmhmv8f))
