---
author: [[Piotr Migdał]]
title: 'Don''t Use Cosine Similarity Carelessly'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://p.migdal.pl/blog/2025/01/dont-use-cosine-similarity/cartoon-espresso-word2vec.jpg)

## Metadata
- Author: [[Piotr Migdał]]
- Full Title: Don't Use Cosine Similarity Carelessly
- URL: https://news.dataelixir.com/t/t-l-shryujl-jtuylyjttl-y/

## Highlights
- Let's focus on sentence embeddings from Large Language Models (LLMs), as they are one of the most popular use cases for embeddings. Modern LLMs are so powerful at this that they can capture the essence of text without any fine-tuning. In fact, recent research shows these embeddings are almost as revealing as the original text - see Morris et al., [Text Embeddings Reveal (Almost) As Much As Text](https://arxiv.org/abs/2310.06816), (2023) ([View Highlight](https://read.readwise.io/read/01jj958y5ttr31d34fd9xf3rqx))
- Let's look at three sentences:
  • A: *"Python can make you rich."*
  • B: *"Python can make you itch."*
  • C: *"Mastering Python can fill your pockets."*
  If you treated them as raw IDs, there are different strings, with no notion of similarity. Using string similarity ([Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)), A and B differ by 2 characters, while A and C are 21 characters apart. Yet semantically (unless you're allergic to money), A is closer to C than B. ([View Highlight](https://read.readwise.io/read/01jj959j05cecffegv50nf7t5a))
- When comparing vectors, there's a temptingly simple solution that every data scientist reaches for, often without a second thought — cosine similarity:
  Geometrically speaking, it is the cosine of the angle between two vectors. However, I avoid thinking about it this way - we're dealing with spaces of dozens, hundreds, or thousands of dimensions. Our geometric intuition fails us in such high-dimensional spaces, and we shouldn't pretend otherwise. ([View Highlight](https://read.readwise.io/read/01jj95as6bkd73v6v3htjtntjz))
- From a numerical perspective, it is a dot product with normalized vectors. It has some appealing properties:
  • Identical vectors score a perfect 1.
  • Random vectors hover around 0 (there are many dimensions, so it averages out).
  • The result is between -1 and 1.
  Yet, this simplicity is misleading. Just because the values usually fall between 0 and 1 doesn't mean they represent probabilities or any other meaningful metric. The value 0.6 tells little if we have something really similar, or not so much. And while negative values are possible, they rarely indicate semantic opposites — more often, the opposite of something is gibberish. ([View Highlight](https://read.readwise.io/read/01jj95bjva902nzx6twpnerp41))
- In other words, cosine similarity is the duct tape of vector comparisons. Sure, it sticks everything together — images, text, audio, code — but like real duct tape, it's a quick fix that often masks deeper problems rather than solving them. And just as you wouldn't use duct tape to permanently repair a water pipe, you shouldn't blindly trust cosine similarity for all your vector comparison needs. ([View Highlight](https://read.readwise.io/read/01jj95c4axsm933x6afvj0ztzf))
- [Pearson correlation](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient) can be seen as a sequence of three operations:
  • Subtracting means to center the data.
  • Normalizing vectors to unit length.
  • Computing dot products between them.
  When we work with vectors that are both centered (
  ) and normalized (
  ), Pearson correlation, cosine similarity and dot product are the same.
  In practical cases, we don't want to center or normalize vectors during each pairwise comparison - we do it once, and **just use dot product**. In any case, when you are fine with using cosine similarity, you should be as fine with using Pearson correlation (and vice versa). ([View Highlight](https://read.readwise.io/read/01jj95cqe8ht8pgxv9gd12zzrb))
- Using cosine similarity as a training objective for machine learning models is perfectly valid and mathematically sound. As we just seen, it's a combination of two fundamental operations in deep learning: dot product and normalization. The trouble begins when we venture beyond its comfort zone, specifically when:
  • The cost function used in model training isn't cosine similarity (usually it is the case!).
  • The training objective differs from what we actually care about. ([View Highlight](https://read.readwise.io/read/01jj95d8pg21v18mmd60chf1v5))
