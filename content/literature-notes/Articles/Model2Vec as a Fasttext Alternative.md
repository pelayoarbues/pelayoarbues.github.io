---
author: "[[Minish Blog & Documentation]]"
title: 'Model2Vec as a Fasttext Alternative'
date: "2025-07-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://minish.mintlify.app/mintlify-assets/_next/image?url=%2Fapi%2Fog%3Fdivision%3DDocumentation%26title%3DModel2Vec%2Bas%2Ba%2Bfasttext%2Balternative%26logoLight%3Dhttps%253A%252F%252Fmintlify.s3.us-west-1.amazonaws.com%252Fminish%252Flogo%252Fminish_logo_lighter.png%26logoDark%3Dhttps%253A%252F%252Fmintlify.s3.us-west-1.amazonaws.com%252Fminish%252Flogo%252Fminish_logo_lighter.png%26primaryColor%3D%252316A34A%26lightColor%3D%252315803D%26darkColor%3D%252315803D%26backgroundLight%3D%2523e6e4da%26backgroundDark%3D%25231a1a1a&w=1200&q=100)

## Metadata
- Author: [[Minish Blog & Documentation]]
- Full Title: Model2Vec as a Fasttext Alternative
- URL: https://minish.ai/blog/2025-07-28-fasttext

## Highlights
- Model2Vec is typically viewed as a fast alternative to a sentence transformer. There’s a good reason for that, because:
  1. Model2Vec models are distilled versions of sentence transformers
  2. Model2Vec models are drop-in replacements for sentence transformers
  Having said that, a better comparison would actually be Meta’s [fasttext](https://fasttext.cc/). Like Model2Vec, fasttext can be used to create static vectors, and can also be used to create classifiers using a set of static vectors as a starting point. In this short blog post, we’ll show that off-the-shelf Model2Vec models are much better than fasttext classifiers and word vectors. So, if you’re currently using fasttext somewhere, consider a comparison to Model2Vec! ([View Highlight](https://read.readwise.io/read/01k182aztp443z99a2z935jym1))
- o test the classification efficacy of Model2Vec in comparison to fasttext, we ran experiments on 15 datasets from the [setfit organization on Hugging Face](https://huggingface.co/SetFit). We initialized the fasttext classifier using the `wiki-news-300d-1M-subword.vec` vectors we got [here](https://fasttext.cc/docs/en/english-vectors.html), and used the nltk `word_tokenize` function as a tokenizer. The Model2Vec model was initialized from [`minishlab/potion-base-32m`](https://huggingface.co/minishlab/potion-base-32M). All models were trained with sensible defaults. We optimized the tokenization for the fasttext model. ([View Highlight](https://read.readwise.io/read/01k182bvet70hvhpz8c1jhrd0b))
- Fasttext models train faster than Model2Vec models. Note that this just concerns the actual training of the supervised classifier; we don’t include any pretraining time. One observation is that Model2Vec models tend to train for a bit too long. Also, the training time is less than a minute for both approaches ([View Highlight](https://read.readwise.io/read/01k182cbfe2e8e09kxfwgdzw8m))
- Model2Vec processes about 14.6k samples per second, while fasttext processes about 3.6k. This with the caveat that the inference time of both approaches is difficult to compare, since almost all of the time for both models is actually spent in the tokenizer. Disabling any preprocessing for fasttext makes it faster than Model2Vec (3.6k -> 25k (!) samples/second), albeit with a hit to performance (79.5 -> 78.5 average score). This underscores one of the painful issues of older NLP approaches, which is that preprocessing/tokenization matters a lot, and that it is difficult to find alignment between your tokenization and models found online. ([View Highlight](https://read.readwise.io/read/01k182cj199bbky3hr1neh5ze5))
- The trained Model2Vec model is only 130 MB on disk, while the fasttext model is substantially larger at 2.1 gigabytes. Note, however, that both Model2Vec and fasttext can be compressed through quantization. ([View Highlight](https://read.readwise.io/read/01k182cqebsyv51nrrscs3gjwg))
- fasttext vectors can also be used as word2vec embeddings. As such, we can test how well they work on the [Massive Text Embedding Benchmark (MTEB)](https://huggingface.co/spaces/mteb/leaderboard) as a zero shot embedding approach, comparing directly with a Model2Vec model. Following the above, we use the nltk `word_tokenize` function to tokenize text going into fasttext, and also normalize all the output vectors to unit length. We perform no additional preprocessing for Model2Vec. Because running MTEB can take a long time, we don’t run all subsets. We use the [original MTEB benchmark](https://huggingface.co/spaces/mteb/leaderboard). ([View Highlight](https://read.readwise.io/read/01k182ctwgptczsr7rsy6ncabs))
- [
  ](https://minish.ai/blog/2025-07-28-fasttext/#results)
  ResultsIt’s honestly not looking too good for fasttext. Model2Vec blows it out of the water at all tasks, excluding WordSim, which is a set of word similarity tasks. ([View Highlight](https://read.readwise.io/read/01k182ddqgwsy3sx2xce3bgv0b))
- The only task on which fasttext performs well is `Wordsim`, which is a collection of lexical similarity tasks. This is interesting, because these kinds of datasets were popular around the time fasttext, GloVe, word2vec, and other static methods were initially created. So this could be one of the reasons these vectors work well: methods are developed with reference to the evaluation data that is available at the time of development. ([View Highlight](https://read.readwise.io/read/01k182dgypcaeymaxabherbpbp))
