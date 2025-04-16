---
author: [[Panda Smith]]
title: "Build a Search Engine, Not a Vector DB"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://blog.elicit.com/content/images/2023/12/Mosaic-Artwork-Embossed.webp)

## Metadata
- Author: [[Panda Smith]]
- Full Title: Build a Search Engine, Not a Vector DB
- URL: https://blog.elicit.com/search-vs-vector-db/

## Highlights
- Many vector databases frame their basic utility as solving the problem of language models lacking long term memory, or the fact that you can’t place all of the context for a question into your prompt. ([View Highlight](https://read.readwise.io/read/01hj69z91rx5kmygjj0fsfszk5))
- However, vector search is ultimately just a particular kind of search*.* Giving your LLM access to a database it can write to and search across is very useful, but it’s ultimately best conceptualized as giving an agent access to a search engine, versus actually “having more memory”. ([View Highlight](https://read.readwise.io/read/01hj69zkyebd9qqkrnd53jm8zf))
- Ultimately though, I found that approach to be a dead-end. The crux is that while vector search is better along some axes than traditional search, it's not magic. Just like regular search, you'll end up with irrelevant or missing documents in your results. Language models, just like humans, can only work with what they have and [those irrelevant documents will likely mislead them](https://arxiv.org/abs/2302.00093?ref=blog.elicit.com). ([View Highlight](https://read.readwise.io/read/01hj6a0bnzr739c9p3crdrpva9))
    - Tags: [[favorite]] 
- If you want to make a good RAG tool that uses your documentation, you should start by making a search engine over those documents that would be good enough for a human to use themselves. This is likely something your organization has considered before, and if it doesn’t exist it’s because building a good search engine has traditionally been a significant undertaking. ([View Highlight](https://read.readwise.io/read/01hj6a0ggx2jwwfkx22dhcm9fh))
- Embeddings, for all that they aren’t a magic wand, are still pretty amazing. High-quality embedding search will have a lower false negative rate than keyword search, and combining the two results in much better performance than any pure fulltext search (Google has been doing this for years with [BERT](https://blog.google/products/search/search-language-understanding-bert/?ref=blog.elicit.com)). However, both embeddings themselves and the tools needed to use them in large-scale search, have improved by leaps and bounds. There are plenty of battle-tested databases that let you combine keyword and vector search, and I highly recommend using one of these (at Elicit we use [Vespa](https://vespa.ai/?ref=blog.elicit.com), but vector databases like Chroma now often support this as well). ([View Highlight](https://read.readwise.io/read/01hj6a1jvc42ajr7vtpsxypbn5))
- Once you’ve improved your overall search by blending embeddings with more traditional methods, you get to the fun stuff. A savvy human trying to find information via a search engine knows how to structure their query in order to ensure they find relevant information ([Google-fu used to be a powerful art form](https://supple.com.au/tools/google-advance-search-operators/?ref=blog.elicit.com)), language models can do the same. If your model wants to find “what’s the latest news on malaria vaccines,” you could have a language model construct a query that includes a date filter. There is a ton of low hanging fruit here, and after that an almost endless amount of tweaking that can be done to result in incredible quality search. Like in many other cases, similar things were **possible** in the world before LLMs, but they took a lot of specialized skill and effort. Now you can get competitive performance with a few hours of your time and some compute. ([View Highlight](https://read.readwise.io/read/01hj6a63m76z4zw3kcrv85wt4h))
    - Tags: [[favorite]] 
- The final stage in the traditional search pipeline is re-ranking. It used to be the case that to do re-ranking you would [train a relevancy model](https://www.kdd.org/kdd2016/papers/files/adf0361-yinA.pdf?ref=blog.elicit.com) on signals like which items a user clicks on for a given search results page, and then use that model to sort your top results. If you’re not a whole team structured around building a search engine, this isn’t a viable problem to tackle. Now with language models, you can provide some details on a query:result pair to a model and get a relevancy score that will [beat out all but the best purpose-built systems](https://arxiv.org/abs/2311.07994?ref=blog.elicit.com). ([View Highlight](https://read.readwise.io/read/01hj6a6mj2w5fbw0zcj5ahhbr1))
- Ultimately, recent advancements in AI make it much easier to build cutting-edge search, using orders of magnitude less effort than once required. Because of that, the return on sitting down and seriously building good search is extremely high. ([View Highlight](https://read.readwise.io/read/01hj6a6xd5h8vz6whw3jrkd1yg))
- You’ve built a nice search engine using the above techniques, now it’s time to deploy it. Unfortunately, language models don’t let you avoid the other half of building a search engine: evaluating it.
  Specifically, this means being able to answer questions like:
  • “When is doing a search appropriate?”
  • “When you do a search, what content are you actually trying to locate?”
  • “How high does that content rank in your results?”
  Answering any of those questions requires building evaluation and monitoring infrastructure that you can use to iterate on your search pipeline and know whether the changes you make are improvement ([View Highlight](https://read.readwise.io/read/01hj6a7eyxpx853q5vnw4j4rs6))
