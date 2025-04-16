---
author: [[eugeneyan]]
title: "Mechanisms for Effective Machine Learning Projects"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://eugeneyan.com/assets/og_image/mechanism.jpeg)

## Metadata
- Author: [[eugeneyan]]
- Full Title: Mechanisms for Effective Machine Learning Projects
- URL: https://news.dataelixir.com/t/t-l-fjhbuy-jtuylyjttl-h/

## Highlights
- If your team is like most teams I’ve been on, you have 2 - 3 problems for every available person. Thus, each member works on 1 or 2 problems simultaneously, with some folks taking 3 or more. And because everyone’s so busy, we barely have time to check in on each other’s projects outside of standup, planning, retrospective, etc. ([View Highlight](https://read.readwise.io/read/01gwvajrxp0fxx6qf7hgvyc85j))
- One solution is to **have a pilot and copilot for each project.** The pilot is the main project owner and is in charge of its success (or failure). They own and delegate the work as required though they’re usually responsible for the bulk of design and critical code paths. ([View Highlight](https://read.readwise.io/read/01gwvajxzqg06hsykqaq6x6ev6))
- **The copilot helps the pilot stay on track, identify critical flaws, and call out blindspots.** This includes periodic check-ins, reviewing document drafts and prototypes, and being a mandatory code reviewer. For example, the copilot should challenge the pilot if the proposed design doesn’t solve the business problem, or if the train-validation split is invalid. To be able to spot these issues, the copilot typically has experience in the problem space, or has more experience in general, similar to how senior engineers guide juniors. ([View Highlight](https://read.readwise.io/read/01gwvajzk3yrpmtfw69ncvzz9d))
- Pilots and copilots don’t have to be from the same job family. As an applied scientist, I often partner with an engineer who helps with infrastructure, observability, CI/CD, etc. If both scientist and engineer are sufficiently experienced, they can double up as each other’s copilot. As they review each other’s work, knowledge transfer occurs organically and they learn to be effective copilots for other engineers or scientists in future projects. ([View Highlight](https://read.readwise.io/read/01gwvak5qae5jbxtkssr1kr0t3))
- For a literature review, I **read papers relevant to the problem**. I’m biased towards [solutions that have been applied in industry](https://github.com/eugeneyan/applied-ml) though more academic papers have also been helpful. ([View Highlight](https://read.readwise.io/read/01gwvakrb4geqwj1a1qe4jf94k))
- How the problem was framed: If it’s fraud detection, is it framed as a classification problem (fraud vs. no fraud) or regression problem (quantum of fraud)? Or is it framed as an [anomaly detection problem to be solved via unsupervised learning](https://eugeneyan.com/writing/notes-from-sparkai-summit-application-specific/#preventing-abuse-via-unsupervised-learning-24-june)? ([View Highlight](https://read.readwise.io/read/01gwvakvvnvs0750xk3kayxw1z))
- How input data was processed: How was data excluded, preprocessed, and rebalanced? How were labels defined? Was a [third neural class](https://eugeneyan.com/writing/search-query-matching/#neutral-third-class) added? How were labels augmented, perhaps via [hard mining](https://eugeneyan.com/writing/search-query-matching/#hard-mining)? ([View Highlight](https://read.readwise.io/read/01gwvakxk3m74n9gwg1vpgpebb))
- How the model was evaluated offline: How was the training and validation set created? What offline evaluation metrics did they use? How did they [improve the correlation between offline and online evaluation metrics](https://eugeneyan.com/writing/recsys2022/#offline-online-correlation)? ([View Highlight](https://read.readwise.io/read/01gwvakyxd9szzcgpkks1hwtya))
- Input data and features: Am I using data that would not be available during inference? For example, if I’m [predicting hospitalization costs during pre-admission](https://eugeneyan.com/speaking/machine-learning-in-healthcare/), am I peeking into the future and using features such as length of hospitalization? If so, it’s a data leak as we won’t know the length of stay in advance and it’s highly correlated with hospitalization cost. ([View Highlight](https://read.readwise.io/read/01gwvam9x2eqk1vyzmgskz3he2))
- Offline evaluation: If we’re building a forecast model, are we splitting data by time or just randomly? The former ensures we don’t learn on future data while the latter is invalid. (Most production uses cases should have data split by time.) ([View Highlight](https://read.readwise.io/read/01gwvamcrvjva0s28vjm30kjzm))
- . Timeboxing for machine learning projects can be challenging, because compared to engineering projects, the work is relatively ill-defined. Furthermore, a large part of the work is research and experimentation which unfortunately leads to many a dead end. ([View Highlight](https://read.readwise.io/read/01gwvamxw9g7j5ad41n3ycrs8r))
- But it’s because of these challenges that timeboxing is effective—**how much effort should we invest before pivoting?** In most industry settings, we don’t have limitless resources to pursue a problem for years. ([View Highlight](https://read.readwise.io/read/01gwvamn6ax191qyk94c2yxbwp))
