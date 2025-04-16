---
author: [[Simon Willison]]
title: "My Binary Vector Search Is Better Than Your FP32 Vectors"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: My Binary Vector Search Is Better Than Your FP32 Vectors
- URL: https://simonwillison.net/2024/Mar/26/binary-vector-search/#atom-everything

## Highlights
- Different embedding models have different lengths, but they tend to be hundreds up to low thousands of numbers. If each float is 32 bits that’s 4 bytes per float, which can add up to a lot of memory if you have millions of embedding vectors to compare. ([View Highlight](https://read.readwise.io/read/01ht2x5j0yrcrcnvc67bxa4p7p))
- If you look at those numbers you’ll note that they are all pretty small positive or negative numbers, close to 0. ([View Highlight](https://read.readwise.io/read/01ht2x5rhmggjygg61w505jq2j))
- Binary vector search is a trick where you take that sequence of floating point numbers and turn it into a binary vector—just a list of 1s and 0s, where you store a 1 if the corresponding float was greater than 0 and a 0 otherwise. ([View Highlight](https://read.readwise.io/read/01ht2x5v9p4rchn9j7m6x1gsjj))
- Incredibly, it looks like the cosine distance between these 0 and 1 vectors captures much of the semantic relevant meaning present in the distance between the much more accurate vectors. This means you can use 1/32th of the space and still get useful results! ([View Highlight](https://read.readwise.io/read/01ht2x6a6e7j89mmcvgfca6jey))
- Ce Gao here suggests a further optimization: use the binary vectors for a fast brute-force lookup of the top 200 matches, then run a more expensive re-ranking against those filtered values using the full floating point vectors. ([View Highlight](https://read.readwise.io/read/01ht2x6pf8nsk952ffaejs5ntk))
