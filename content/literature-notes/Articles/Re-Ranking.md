---
author: "[[Google for Developers]]"
title: 'Re-Ranking'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.gstatic.com/devrel-devsite/prod/v032f5e834ea07ceb506abc7629b7ff47ac48c72d9122b91b2cecfd4022841b1c/developers/images/opengraph/white.png)

## Metadata
- Author: [[Google for Developers]]
- Full Title: Re-Ranking
- URL: https://developers.google.com/machine-learning/recommendation/dnn/re-ranking?hl=en

## Highlights
- In the final stage of a recommendation system, the system can re-rank the candidates to consider additional criteria or constraints. One re-ranking approach is to use filters that remove some candidates. ([View Highlight](https://read.readwise.io/read/01hf3z132y8sv46rf5ak7cbz7k))
- Another re-ranking approach is to manually transform the score returned by the ranker. ([View Highlight](https://read.readwise.io/read/01hf3z17nj59x8pnbcctcn0fzp))
- This section briefly discusses freshness, diversity, and fairness. These factors are among many that can help improve your recommendation system. Some of these factors often require modifying different stages of the process. Each section offers solutions that you might apply individually or collectively. ([View Highlight](https://read.readwise.io/read/01hf3z1c6v7ye0wvqdac33k8zq))
- Freshness
  Most recommendation systems aim to incorporate the latest usage information, such as current user history and the newest items. Keeping the model fresh helps the model make good recommendations. ([View Highlight](https://read.readwise.io/read/01hf3z1f4pf6pmz3v6xd40d6r6))
- Re-run training as often as possible to learn on the latest training data. We recommend warm-starting the training so that the model does not have to re-learn from scratch. Warm-starting can significantly reduce training time. For example, in matrix factorization, warm-start the embeddings for items that were present in the previous instance of the model. ([View Highlight](https://read.readwise.io/read/01hf3z1tb91fk3b5wfs0gtpnk8))
- Create an "average" user to represent new users in matrix factorization models. You don't need the same embedding for each user—you can create clusters of users based on user features. ([View Highlight](https://read.readwise.io/read/01hf3z1wtvejnsmwyxwtrwwxfx))
- Use a DNN such as a softmax model or two-tower model. Since the model takes feature vectors as input, it can be run on a query or item that was not seen during training. ([View Highlight](https://read.readwise.io/read/01hf3z20z41abw80jkctdpz3yk))
- Add document age as a feature. For example, YouTube can add a video's age or the time of its last viewing as a feature. ([View Highlight](https://read.readwise.io/read/01hf3z2318w7rczspfe5v398g1))
- If the system always recommend items that are "closest" to the query embedding, the candidates tend to be very similar to each other. This lack of diversity can cause a bad or boring user experience. For example, if YouTube just recommends videos very similar to the video the user is currently watching, such as nothing but owl videos (as shown in the illustration), the user will likely lose interest quickly.
  Solutions
  • Train multiple candidate generators using different sources.
  • Train multiple rankers using different objective functions.
  • Re-rank items based on genre or other metadata to ensure diversity. ([View Highlight](https://read.readwise.io/read/01hf3z2nm7ac8f01vsjkp8e5mf))
