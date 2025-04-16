---
author: [[Tom Moertel]]
title: 'Sampling with SQL'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[Tom Moertel]]
- Full Title: Sampling with SQL
- URL: https://blog.moertel.com/posts/2024-08-23-sampling-with-sql.html

## Highlights
- ampling is one of the most powerful tools you can wield to extract meaning from large datasets. It lets you reduce a massive pile of data into a small yet representative dataset that’s fast and easy to use.
  If you know how to take samples using SQL, the ubiquitous query language, you’ll be able to take samples anywhere. No dataset will be beyond your reach! ([View Highlight](https://read.readwise.io/read/01j9rh2mj74anq47gc3t4ket9w))
- In this post, we’ll look at some clever algorithms for taking samples. These algorithms are fast and easily translated into SQL.
  First, however, I’ll note that many database systems have some built-in support for taking samples. For example, some SQL dialects support a `TABLESAMPLE` clause. If your system has built-in support—and it does what you need—using it will usually be your best option. ([View Highlight](https://read.readwise.io/read/01j9rh2syfgg6k2wy9aqh9wmcs))
- Often, though, the built-in support is limited to simple cases. Let’s consider some realistic scenarios that are more challenging:
  • We want to be able to take samples *with* and *without* replacement.
  • We want to take *weighted* samples in which each item in the input dataset is selected with probability in proportion to its corresponding weight.
  • We want to support the full range of weights we might expect to see in a FAANG-sized dataset, say between 0 to 1020 for frequency distributions (e.g., clicks or impressions or RPC events) and between 0 to 1 with values as small as 10−20 for normalized probability distributions. In other words, weights are non-negative numbers, possibly very large or very small.
  • We want to take deterministic samples. This property lets us take repeatable samples and, in some cases, helps query planners produce faster queries. ([View Highlight](https://read.readwise.io/read/01j9rh31qmb4nnb8x6y1rvecrc))
