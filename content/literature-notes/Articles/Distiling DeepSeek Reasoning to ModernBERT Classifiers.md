---
author: "[[Daniel van Strien]]"
title: 'Distiling DeepSeek Reasoning to ModernBERT Classifiers'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://github.com/davanstrien/blog/raw/refs/heads/main/posts/2025/modern-bert-sythetic-labels/bert-illustration.webp)

## Metadata
- Author: [[Daniel van Strien]]
- Full Title: Distiling DeepSeek Reasoning to ModernBERT Classifiers
- URL: https://danielvanstrien.xyz/posts/2025/deepseek/distil-deepseek-modernbert.html

## Highlights
- tl;dr, how can we use LLMs to generate labels to fine-tune a ModernBERT model?
  It’s fair to say that [DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) has made quite an impact in the last few weeks. It’s a powerful reasoning model that excels at many tasks that require reasoning. One particularly exciting aspect of the release of this model, though, is the distilled versions of the model. These models are much smaller but still retain a lot of the reasoning ability of the larger models. ([View Highlight](https://read.readwise.io/read/01jjsb798sqf06t30fvb1qfame))
- While the interest in reasoning models often focs on use cases like mathematics and coding, there are many other use cases where reasoning can be helpful. One example is classification. Although some classification problems are very simple and mostly require “pattern matching,” there are many other problems where reasoning is needed. This is where a reasoning model could be helpful. ([View Highlight](https://read.readwise.io/read/01jjsb7jb2pafv4r700xsam6vm))
- While the distilled models are fairly small (the smallest is 1.5B), we may still prefer to have an even smaller model for many use cases. If you can remember all the way back to December 2024, the ModernBERT release introduced a new BERT model, which is a good candidate for this kind of efficient classification use case. The main challenge is that in order to train a classifier, we need labeled data. This is where we can use a reasoning model to generate synthetic labels. ([View Highlight](https://read.readwise.io/read/01jjsb7x1kvb4xjnf5n7fpe6dk))
- As the Machine Learning Librarian at Hugging Face, I want to keep track of new datasets being shared on ArXiv. While you can search for “dataset” or “benchmark” in the title or abstract, this returns any papers that mention datasets or benchmarks. I’m only interested in papers that introduce a newly created dataset. ([View Highlight](https://read.readwise.io/read/01jjsb8e351mhhs3wzvmpk2rdf))
- There has been significant growth in the use of LLMs for synthetic data generation over the past couple of years. While we could generate synthetic data, i.e., developing both the “input” and “target” columns, if we already have some data we want to work with, it makes more sense to generate labels. One of the significant challenges with synethic data generation is that the data generated is often not representative of the data we want to use in practice. For generative tasks, this might matter slightly less. Since we’re focused on building classifiers, which we’ll often focus on quite a narrow use case or domain, the data we use to train the model must be representative of the data we want to use in practice. ([View Highlight](https://read.readwise.io/read/01jjsb9zjjyg6yxhxsk4vfs92b))
- We’ll start by using a structured generation approach to generate the labels. This means we’ll define a schema for the model’s output and then use that to generate the labels. I’ve written more about this in a [previous blog post](https://danielvanstrien.xyz/posts/plain-text/synthetic-data-generation/2024-05-03-synethic-data-1.html) but the basic idea is that we define a schema for the output of the model and then use that to generate the labels. This means we don’t have to do a lot of work to parse the output of the model and can be sure we can easily train on the output. ([View Highlight](https://read.readwise.io/read/01jjsbaa1j1s78azay8s9abm9z))
- We define a function to format the data as a prompt. This function takes a dictionary with the title and abstract and formats it as a prompt for the model. ([View Highlight](https://read.readwise.io/read/01jjsbb3yc8vc3f21va6cyz39r))
- One of the powerful features of open source is that it makes it easier to run models in different places. While developing our approach, we can use a smaller version of the model to test it and then switch to a hosted version once we’re happy with it.
  We’ll run the model using [LM Studio](https://lmstudio.ai/). LM Studio is primarily known as a UI for running local LLMs, but it also has a server mode, which we’ll use here. We can interact with the server using the CLI. To start the server, we can run the following command. ([View Highlight](https://read.readwise.io/read/01jjsbbtq5meftpqmpcd7qk4wb))
- Since LM Studio has an OpenAI compatible API, we can use the OpenAI Python client to interact with the server. We just need to set the base URL to the LM Studio server and set the API key to `lm-studio`. ([View Highlight](https://read.readwise.io/read/01jjsbc3d442zqfadjtvg77j9d))
- We can now generate labels for our examples. We’ll use the `format_text_as_prompt` function to format the data as a prompt and then pass it to the model. Since we’re using a structured output, we need to use the `beta.chat.completions` endpoint. We pass in our Pydantic model as the `response_format` argument. ([View Highlight](https://read.readwise.io/read/01jjsbcde1kwvsmvzf0yjtm0rm))
- We’ll wrap this in a function so we can easily use it for a lot of examples. ([View Highlight](https://read.readwise.io/read/01jjsbchtxx8g4p9gadd4q7wvq))
- Before doing a big batch of predictions, let’s run the model on a few examples so we can see how it does. ([View Highlight](https://read.readwise.io/read/01jjsbcmj5sexgtsf2h25anp0d))
- One of the features of the R1 model is that it has “reasoning”, which is delineated by and tags. Since our structured output doesn’t allow for this, let’s try and see how well the model does without it. ([View Highlight](https://read.readwise.io/read/01jjsbd61ex2p577196xszehkk))
- While this is definitely a vibes-based assessment, it does seem like the model does better when it has room to think, so we’ll proceed with this approach. ([View Highlight](https://read.readwise.io/read/01jjsbdh6ng84mf5kbdzmvm2s3))
- We create a function to predict the labels using the hosted model. We’ll use the `stamina` library to retry the request if it fails. ([View Highlight](https://read.readwise.io/read/01jjsbe80183j58713jq9jdj7y))
- We only get a few examples where the output doesn’t match the labels we want. We can filter these out. ([View Highlight](https://read.readwise.io/read/01jjsbep1j8x6x33cbqd71rqkq))
