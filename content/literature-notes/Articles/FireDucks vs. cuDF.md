---
author: "[[Avi Chawla]]"
title: 'FireDucks vs. cuDF'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-video.s3.amazonaws.com%2Fvideo_upload%2Fpost%2F156742494%2Fcfb7b49b-0c1c-43e0-9211-316e86aaf342%2Ftranscoded-00001.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: FireDucks vs. cuDF
- URL: https://blog.dailydoseofds.com/p/fireducks-vs-cudf

## Highlights
- While Pandas is the most popular DataFrame library, it is terribly slow.
  • It only uses a single CPU core.
  • It has bulky DataFrames.
  • It eagerly executes code, which prevents any possible optimization.
  **[FireDucks](https://fireducks-dev.github.io/)** is a highly optimized, drop-in replacement for Pandas with the same API.
  You just need to change one line of code → 𝐢𝐦𝐩𝐨𝐫𝐭 𝗳𝗶𝗿𝗲𝗱𝘂𝗰𝗸𝘀.𝐩𝐚𝐧𝐝𝐚𝐬 𝐚𝐬 𝐩𝐝 ([View Highlight](https://read.readwise.io/read/01jkqne9h2qf5a4zsm0x38x7a3))
- As you can tell, FireDucks is even faster than cuDF in this case.
  That said, the query in the above experiment loads all columns of the two parquet files.
  When I optimized it manually by only loading the required columns, the run-time dropped to:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b05e10a-05a6-4c1a-aed9-dfcd95ee2932_1220x844.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b05e10a-05a6-4c1a-aed9-dfcd95ee2932_1220x844.png)
  • Pandas: 14 seconds (from 48 seconds)
  • FireDucks: 0.8 seconds (from 0.8 seconds) [**same as before**]
  • cuDF: 0.9 seconds (from 2.6 seconds)
  This shows that the **[FireDucks](https://fireducks-dev.github.io/)**’ compiler does the same optimization automatically, which one has to explicitly do in cuDF and Pandas. ([View Highlight](https://read.readwise.io/read/01jkqnfcjc8npabss6ms9hsftj))
