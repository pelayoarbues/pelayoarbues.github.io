---
author: "[[Adrian Brudaru]]"
title: 'From Pandas to Production: How We Built DLT as the Right ELT Tool for Normies'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://storage.googleapis.com/dlt-blog-images/i-am-normal.png)

## Metadata
- Author: [[Adrian Brudaru]]
- Full Title: From Pandas to Production: How We Built DLT as the Right ELT Tool for Normies
- URL: https://dlthub.com/docs/blog/pandas-to-production

## Highlights
- Normies: Problem solvers with antipathy for black boxes, gratuitous complexity and external dependencies[​](https://dlthub.com/docs/blog/pandas-to-production#normies-problem-solvers-with-antipathy-for-black-boxes-gratuitous-complexity-and-external-dependencies)
  At Normconf, "normie" participants often embodied the three fundamental psychological needs identified in Self-Determination Theory: autonomy, competence, and relatedness.
  They talked about how they autonomously solved all kinds of problems, related on the pains and gains of their roles, and showed off their competence across the board, in solving problems.
  What they did, was what I also did as a data engineer: We start from a business problem, and work back through what needs to be done to understand and solve it.
  By very definition, Normie is someone not very specialised at one thing or another, and in our field, even data engineers are jacks of all trades.
  What undermines the Normie mission are things that clash with the basic needs, from uncustomisable products, to vendors that add bottlenecks and unreliable dependencies. ([View Highlight](https://read.readwise.io/read/01j1pn2xt3z21ckkcgampvjrt6))
- I saw an acute friction between data engineers and Python-first analysts, mostly around the fact that data engineers easily become a bottleneck and data scientists are forced to pick up the slack. And of course, this causes other issues that might further complicate the life of the data engineer, while still not being a good solution for the data consumers. ([View Highlight](https://read.readwise.io/read/01j1pn3dz27457g22zgy1hce2k))
- We finally launched dlt mid 2023 to the general public. Our initial community was mostly data engineers who had been using dlt without docs, managing from reading code. As we hoped a lot of “normies” are using dlt, too! ([View Highlight](https://read.readwise.io/read/01j1pn57xwg5scepz8anty71mv))
- In the early days of dlt we talked to Sebastian Ramirez from FastAPI who told us that he spends 2/3 of his FastAPI time writing documentation.
  In this vein, from the beginning docs were very important to us and we quickly adopted our own [docs standard](https://www.writethedocs.org/videos/eu/2017/the-four-kinds-of-documentation-and-why-you-need-to-understand-what-they-are-daniele-procida/).
  However, when we originally launched dlt, we found that different user types, especially Normies, expect different things from our docs, and because we asked for feedback, they told us. ([View Highlight](https://read.readwise.io/read/01j1pn5mth53qnetj0wjfr89h1))
- The docs helper has been running for a year and we currently see around **300 questions per day.** Comparing this to other communities that do AI support on Slack, that’s almost 2 orders of magnitude difference in question volume by community size. ([View Highlight](https://read.readwise.io/read/01j1pn67evx3rcth21m0k437xs))
