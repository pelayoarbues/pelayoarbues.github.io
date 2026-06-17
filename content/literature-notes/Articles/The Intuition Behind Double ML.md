---
author: "[[Aaron Pickering]]"
title: 'The Intuition Behind Double ML'
date: "2026-03-12"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://i0.wp.com/aaron-pickering.com/wp-content/uploads/2026/02/confounding.png?fit=1200%2C800&ssl=1)

## Metadata
- Author: [[Aaron Pickering]]
- Full Title: The Intuition Behind Double ML
- URL: https://aaron-pickering.com/2026/02/06/the-intuition-behind-double-ml/

## Highlights
- [Double Machine Learning](https://arxiv.org/abs/1608.00060) (DML or DoubleML) is one of the most powerful, modern techniques in data science & machine learning. However, I often find treatments of the subject a little convoluted, with writers reaching for math or using very particular domain vocabulary. In this article I’m going to drop the math, avoid all the jargon and instead try to give you an intuition for the technique and why it’s useful. ([View Highlight](https://read.readwise.io/read/01kkhzw0v8aaprmrsh9318jy48))
- This diagram is called a DAG (directed acyclic graph) by practitioners but that’s not really important. This diagram shows how each variable drives (causes) the other. ([View Highlight](https://read.readwise.io/read/01kkhzy34ey40p48ywfshpnpzg))
- Think back to our example. Our hypothetical company sizes it’s marketing spend based on the season. In the low season, they pump money into marketing and in the high season let things run, aiming to smooth things across the year. This means that when the sales are naturally low, the marketing spend is high! And our rookie analyst might interpret this to mean that high marketing spend **causes** low sales. Many people use the trite phrase “correlation does not equal causation” in these situations. But really, we can do better than that. ([View Highlight](https://read.readwise.io/read/01kkhzy4z5h0etv2b76tmpj6rn))
- So, that’s where these DAG diagrams come into play. We draw the diagram to make explicit the relationships and we note that the season impacts sales directly and via the marketing spend too. The effects are tangled up. We need to make an adjustment that separates the effects, and so we want to get rid of that season bubble. ([View Highlight](https://read.readwise.io/read/01kkhzyd7nnz1tcpy9cybpcjss))
- Well, not so fast! Let’s remember our DAG. We know that season causes marketing and sales, and we have that triangle in the graph. We need to get rid of the season bubble using DML. For real problems you can use a proper DML package but let’s just do this manual for illustration. ([View Highlight](https://read.readwise.io/read/01kkhzzp4s8txwth4nwstqjszb))
- If your model says marketing hurts sales, or that price increases boost demand, or anything else that just feels wrong — it might not be the data lying to you. It might just be the confounders in the background biasing your effects. ([View Highlight](https://read.readwise.io/read/01kkj024bbsmr243vsbrqpzj0q))
- Let’s say you’re trying to figure out how much marketing drives sales for your product. You’re quite sure that the marketing is somewhat effective – in the low season you pump marketing budget into your various channels and the sales appear to pick up. Things look promising but how good is the return on investment? You’ve got data on your marketing spend, sales, and maybe a few other variables. You run a regression: sales as a function of marketing spend, expecting a nice positive effect. You ***know*** that increased spending and discounts produces more sales. This should be easy.
  ***Instead, you get a negative coefficient***. It’s telling you that spending more on marketing actually *reduces* sales. ([View Highlight](https://read.readwise.io/read/01kkhzxa4k67r1cr58dsm6xkk4))
- Here’s what’s probably going on: **your treatment is confounded**. I promised no jargon, so let me rephrase that. Something is influencing (driving/causing) both the marketing spend and the sales, leading to a flipped (or biased) effect. Let me draw a diagram to illustrate
  ![](https://aaron-pickering.com/wp-content/uploads/2025/04/image-1.png) ([View Highlight](https://read.readwise.io/read/01kkhzxvnp2j8zfmc69sshpdv2))
- At a high level, Double ML does something very simple. Instead of trying to estimate the marketing effect directly, it first asks two easier questions:
  • Given the season (or anything else), how much marketing would we expect? 
  • Given the season, how many sales would we expect, even without marketing?
  In other words, it learns what “normal” looks like. Once it has those two predictions of “normal”, it subtracts them from the original data to get only the left overs. The abnormal or the unusual.
  In other words:
  • the part of marketing spend that isn’t explained by season
  • the part of sales that isn’t explained by season ([View Highlight](https://read.readwise.io/read/01kkhzytsyx5tva8bg61vf1ksb))
- Yep! High season has similar sales to the low season, relatively even across the year. Now, let’s use a simple scatterplot to see the impact of marketing:
  ![](https://aaron-pickering.com/wp-content/uploads/2026/02/image-1.png) ([View Highlight](https://read.readwise.io/read/01kkhzzdk9xqaj8fbz9w1z7vjk))
- First, we find the expected marketing spend for each season:
  # First stage: marketing ~ season
  df['season_num'] = df["season"].map({"low": 0, "high": 1})
  model_marketing = LinearRegression().fit(df[['season_num']], df['marketing'])
  marketing_pred = model_marketing.predict(df[['season_num']])
  marketing_residual = df['marketing'].to_numpy() - marketing_pred ([View Highlight](https://read.readwise.io/read/01kkj0079ee2r50t0knksj7cyg))
- Then we find the expected sales for each season:
  # First stage: sales ~ season
  model_sales = LinearRegression().fit(df[['season_num']], df['sales'])
  sales_pred = model_sales.predict(df[['season_num']])
  sales_residual = df['sales'].to_numpy() - sales_pred ([View Highlight](https://read.readwise.io/read/01kkj00atcaadt1cnd0453m897))
    - Note: Q: How would you call this method in econometrics?
      A: This is known as Double Machine Learning (DoubleML) or the orthogonal/debiased machine learning approach for causal parameter estimation; in classical econometrics it’s equivalent to using residual-on-residual (Frisch–Waugh–Lovell style) regression or partialling out confounders to obtain an unbiased treatment effect.
- **Estimated Effect of Marketing = 0.09 
  Actual Effect of Marketing = 0.1**
  Perfect!
  > ***Technical Note:** a regression with sales ~ marketing + season will also suffice in this simple case. This is where the topic gets complicated; confounders, controls, non-linearities, interactions, mediators, colliders. I highly recommend [Causal Inference for the Brave and True](https://matheusfacure.github.io/python-causality-handbook/22-Debiased-Orthogonal-Machine-Learning.html), the free e-book, as an excellent entry point to further learning.* ([View Highlight](https://read.readwise.io/read/01kkj01zaetzq6cgzdz0mpxgx3))
