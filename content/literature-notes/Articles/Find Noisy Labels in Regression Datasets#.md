---
author: [[cleanlab]]
title: 'Find Noisy Labels in Regression Datasets#'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://raw.githubusercontent.com/cleanlab/assets/master/cleanlab/clos-preview-card.png)

## Metadata
- Author: [[cleanlab]]
- Full Title: Find Noisy Labels in Regression Datasets#
- URL: https://docs.cleanlab.ai/stable/tutorials/regression.html

## Highlights
- We’ll first demonstrate regression with noisy labels via the `CleanLearning` class that can wrap any scikit-learn compatible regression model you have. `CleanLearning` uses your model to estimate label issues (i.e. noisy `y`-values) and train a more robust version of the same model when the original data contains noisy labels. ([View Highlight](https://read.readwise.io/read/01j9tz6chvtbv5jvwjs6m8jc9g))
- ere we define a `CleanLearning` object with a histogram-based gradient boosting model (sklearn version of XGBoost) and use the `find_label_issues` method to find potential errors in our dataset’s numeric label column. Any other sklearn-compatible regression model could be used, such as `LinearRegression` or `RandomForestRegressor` (or you can easily wrap arbitrary custom models to be compatible with the sklearn API). ([View Highlight](https://read.readwise.io/read/01j9tz6gqvxe4yxa26sh1yc093))
- `CleanLearning` internally fits multiple copies of our regression model via cross-validation and bootstrapping in order to compute predictions and uncertainty estimates for the dataset. These are used to identify label issues (i.e. likely corrupted `y`-values).
  This method returns a Dataframe containing a label quality score (between 0 and 1) for each example in your dataset. Lower scores indicate examples more likely to be mislabeled with an erroneous `y` value. The Dataframe also contains a boolean column specifying whether or not each example is identified to have a label issue (indicating its `y`-value appears potentially corrupted). ([View Highlight](https://read.readwise.io/read/01j9tz6qtag4vky810appyev88))
- Fixing the label issues manually may be time-consuming, but cleanlab can filter these noisy examples and train a model on the remaining clean data for you automatically. ([View Highlight](https://read.readwise.io/read/01j9tz8kqjs0njyj1g620drv4q))
- Now that we have a baseline, let’s check if using `CleanLearning` improves our test accuracy.
  `CleanLearning` provides a wrapper that can be applied to any scikit-learn compatible model. The resulting model object can be used in the same manner, but it will now train more robustly if the data has noisy labels. ([View Highlight](https://read.readwise.io/read/01j9tz8v8fnpa1nsf07j6khyn2))
- The `CleanLearning` workflow above requires a sklearn-compatible model. If your model or data format is not compatible with the requirements for using `CleanLearning`, you can instead run [cross-validation on your regression model to get out-of-sample predictions](https://docs.cleanlab.ai/stable/tutorials/pred_probs_cross_val.html), and then use the `Datalab` audit to estimate label quality scores for each example in your dataset. ([View Highlight](https://read.readwise.io/read/01j9tzbntdd1s6tfa2sn00thbh))
