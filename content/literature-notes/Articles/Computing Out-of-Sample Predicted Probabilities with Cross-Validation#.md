---
author: [[cleanlab]]
title: 'Computing Out-of-Sample Predicted Probabilities with Cross-Validation#'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/clos-preview-card.png)

## Metadata
- Author: [[cleanlab]]
- Full Title: Computing Out-of-Sample Predicted Probabilities with Cross-Validation#
- URL: https://docs.cleanlab.ai/stable/tutorials/pred_probs_cross_val.html

## Highlights
- ![Computing Out-of-Sample Predicted Probabilities from K-Fold Cross-Validation](https://raw.githubusercontent.com/cleanlab/assets/master/cleanlab/pred_probs_cross_val.png)
  The diagram above depicts K-fold cross-validation with K = 5. K-fold cross-validation partitions the entire dataset into *K* disjoint subsets of data called *folds*. *K* independent copies of our model are trained, where for each model copy, one fold of the data is held out from its training (the data in this fold may be viewed as a *validation set* for this copy of the model). Each copy of the model has a different validation set for which we can obtain out-of-sample predicted probabilities from this copy of the model. Since each datapoint is held-out from one copy of the model, this process allows us to get out-of-sample predictions for every datapoint! We recommend applying *stratified* cross-validation, which tries to ensure the proportions of data from each class match across different folds. ([View Highlight](https://read.readwise.io/read/01j9tzk452dr9ejkbvx11arca4))
- This method of producing out-of-sample predictions via cross-validation is also referred to as cross-validated prediction, out-of-folds predictions, and K-fold bagging. It can be easily applied to any `sklearn`-compatible model by invoking [cross_val_predict](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html). An additional benefit is that cross-validation produces [significantly superior estimates](https://towardsdatascience.com/5-reasons-why-you-should-use-cross-validation-in-your-data-science-project-8163311a1e79) of how the model will perform on new data. ([View Highlight](https://read.readwise.io/read/01j9tzma1rvdy1x8j2kvp0gk8y))
