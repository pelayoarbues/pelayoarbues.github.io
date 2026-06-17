---
author: "[[Ali Soleymani]]"
title: 'Grid Search and Random Search Are Outdated. This Approach Outperforms Both.'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*3QLqTrLwYf9dJYYni4D1BQ.png)

## Metadata
- Author: [[Ali Soleymani]]
- Full Title: Grid Search and Random Search Are Outdated. This Approach Outperforms Both.
- Document Note: This article discusses the drawbacks of Grid Search and Random Search in scikit-learn and suggests Bayesian Search as a better alternative. Bayesian Search uses Bayesian statistics to estimate the distribution of the best hyperparameters for the model, and can gradually converge on the optimal set of hyperparameters resulting in better performance on the test set. It can also search a continuous search space, which can provide better results than Grid or Random Search. Additionally, Bayesian Search can achieve the same results as Grid Search in much less time.
- URL: https://medium.com/@ali.soleymani.co/stop-using-grid-search-or-random-search-for-hyperparameter-tuning-c2468a2ff887

## Highlights
- Bayesian Optimization uses Bayesian statistics to estimate the distribution of the best hyperparameters for the model instead of just using grid search or random search. During the tuning process, the algorithm updates its beliefs about the distribution of the best hyperparameters based on each hyperparameter's observed impact on the model's performance. This allows it to gradually converge on the optimal set of hyperparameters, resulting in better performance on the test set. ([View Highlight](https://read.readwise.io/read/01gvp1fyb571mr2mw69vmqvknx))
