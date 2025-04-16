---
author: "[[Matt Basta]]"
title: 'No sacred masterpieces'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/icons/substack/favicon-32x32.png)

## Metadata
- Author: [[Matt Basta]]
- Full Title: No sacred masterpieces
- URL: https://basta.substack.com/p/no-sacred-masterpieces

## Highlights
- This was a big problem for the business: they needed a way to take two kinds of inputs (data and code) and run the code to produce useful outputs. Or, hopefully useful. Testing a model meant running it, so the iteration cycle was very close to one iteration per day per laptop. ([View Highlight](https://read.readwise.io/read/01hb5qy8ym8zx8sf66w3p5s9js))
- I had thought, naively perhaps, that circular references in Excel simply created an error. But this data scientist showed me that Excel *doesn’t* error on circular references—if the computed value of the cell converges.
  You see, when formulas create a circular reference, Excel will run that computation up to a number of times. If, in those computations, the magnitude of the difference between the most recent and previous computed values for the cell falls below some pre-defined epsilon value (usually a very small number, like 0.00001), Excel will stop recomputing the cell and pretend like it finished successfully. ([View Highlight](https://read.readwise.io/read/01hb5r9p3vxnr95asym8rvwzh1))
- I think his intuition about the complexity and scope were based on bad assumptions about what we were ultimately accomplishing, and it’s a good case study in estimating reasonable project outcomes. It goes to show that the sheer imagined complexity of a possible solution is enough to disqualify it in some folks’ minds, even if it's the best possible outcome. ([View Highlight](https://read.readwise.io/read/01hb5rccbrr5q6k9b8xc7yy8c8))
- On the other hand, we as engineers need to be real with ourselves. Every piece of code you write as an engineer is legacy code. Maybe not right now, but it will be. Someone will take joy in ripping it out someday. Every masterpiece will be gleefully replaced, it’s just a matter of time. ([View Highlight](https://read.readwise.io/read/01hb5rz6xetfazd07t5sqv8eak))
    - Tags: [[favorite]] 
- I often hear fairly junior folks saying things to the effect of “I’m here to grow as an engineer.” Growing as an engineer is mutually exclusive with the longevity of your output as an engineer. “Growing as an engineer” means becoming a better engineer, and becoming a better engineer (directly or indirectly) means getting better at using your skills to create business value. Early in your career, the work you do will likely have far less longevity than the work you do later on, simply because you gain maturity over time and learn to build tools that tend to be useful for longer. ([View Highlight](https://read.readwise.io/read/01hb5s04646037xt5prsmfjzmm))
- Sometimes the business value your work generates comes in the way of technical output. Sometimes it’s how you work with the people around you (collaborating, mentoring, etc.). Sometimes it’s about how you support the rest of the team. There are many ways that business value is created. ([View Highlight](https://read.readwise.io/read/01hb5s0bwq7rxha1ygzcxh3wd6))
- The devops saying “[Cattle, not pets](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/)” is apt here: code (and by proxy, the products built with that code) is cattle. It does a job for you, and when that job is no longer useful, the code is ready to be retired. If you treat the code like a pet for sentimental reasons, you’re working in direct opposition to the interests of the business. ([View Highlight](https://read.readwise.io/read/01hb5s18k2z6jmdmrdqbyq0e39))
- It’s easy to treat a particularly clever or elegant piece of code as a masterpiece. It might very well be a beautiful trinket! But we engineers are not in the business of beautiful trinkets, we’re in the business of outcomes. In the same way that a chef shouldn’t be disappointed that a beautiful plate of food is “destroyed” by a hungry customer eating it, we shouldn’t be disappointed that our beautiful git repos are marked as “Archived” and shuffled off the production kube cluster. ([View Highlight](https://read.readwise.io/read/01hb5s2b7t33rsw8r0v8y5dswg))
- The attitudes that we have towards the things that we make are good indicators of maturity. It’s natural for us to want our work to have staying power and longevity. It’s extremely human to want the validation of our beautiful things being seen and used and recognized; it means we’ve done well. On the other hand, our work being discarded gives us an opportunity to understand what (if anything) we could have done better: ([View Highlight](https://read.readwise.io/read/01hb5s2nsmsg0n16ng7dq743a9))
