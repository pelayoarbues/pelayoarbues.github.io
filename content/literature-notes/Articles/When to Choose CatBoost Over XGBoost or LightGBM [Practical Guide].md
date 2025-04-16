---
author: [[Brain John]]
title: 'When to Choose CatBoost Over XGBoost or LightGBM [Practical Guide]'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://neptune.ai/wp-content/uploads/2022/07/blog_feature_image_011644_8_0_8_7.jpg)

## Metadata
- Author: [[Brain John]]
- Full Title: When to Choose CatBoost Over XGBoost or LightGBM [Practical Guide]
- URL: https://neptune.ai/blog/when-to-choose-catboost-over-xgboost-or-lightgbm

## Highlights
- In 1988, Micheal Kearns, in his paper [Thoughts on Hypothesis Boosting](https://www.cis.upenn.edu/~mkearns/papers/boostnote.pdf), presented the idea of whether a relatively poor hypothesis can be converted to very good hypotheses. In essence, whether a weak learner can be modified to become better. Since then, there have been multiple successful applications of the technique to develop some powerful boosting algorithms. ([View Highlight](https://read.readwise.io/read/01hs11hm1s416wwjnv7kptn4db))
- This technique involves training learners based upon minimizing the differential loss function of a weak learner using a gradient descent optimization process, in contrast to tweaking the weights of the training instances like Adaptive Boosting (Adaboost). Hence there is an equal distribution of weights to all the learners. Gradient boosting uses decision trees connected in series as weak learners. Due to its sequential architecture, it is a stage-wise additive model, where decision trees are added one at a time, and existing decision trees are not changed.  
  Gradient boosting is primarily used to reduce the bias error of the model. Based on the bias-variance tradeoff, it is a greedy algorithm that can overfit a training dataset quickly. However, this overfitting can be controlled by shrinkage, tree constraint, regularization, and stochastic gradient boosting. ([View Highlight](https://read.readwise.io/read/01hs11jvreatrg4yk86qgvkg7h))
- 1. **Symmetric trees**: CatBoost builds symmetric (balanced) trees, unlike XGBoost and LightGBM. In every step, leaves from the previous tree are split using the same condition. The feature-split pair that accounts for the lowest loss is selected and used for all the level’s nodes. This balanced tree architecture aids in efficient CPU implementation, decreases prediction time, makes swift model appliers, and controls overfitting as the structure serves as regularization. 
  ![Symmetric trees](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_7.png?resize=851%2C311&ssl=1)
  *Asymmetric tree vs symmetric tree | Source: Author*
  2. **Ordered boosting:**  Classic boosting algorithms are prone to overfitting on small/noisy datasets due to a problem known as prediction shift. When calculating the gradient estimate of a data instance, these algorithms use the same data instances that the model was built with, thus having no chances of experiencing unseen data. CatBoost, on the other hand, uses the concept of ordered boosting, a permutation-driven approach to train model on a subset of data while calculating residuals on another subset, thus preventing target leakage and overfitting.  
  3. **Native feature support:** CatBoost supports all kinds of features be it numeric, categorical, or text and saves time and effort of preprocessing. ([View Highlight](https://read.readwise.io/read/01hs11kavkgsye19t70d9pw7cw))
- CatBoost handles numeric features like other tree-based algorithms, i.e. by selecting the best possible split based on the information gain. ([View Highlight](https://read.readwise.io/read/01hs11nd81pdj6wdqnwzy9gtq8))
- CatBoost provides the various native strategies to handle categorical variables: 
  • **One-hot encoding**: By default, CatBoost represents all binary(two-category) features with one-hot encoding. This strategy can be extended to features with **N** number categories by changing the training parameter  ***one_hot_max_size*** *=* ***N.***  CatBoost handles one-hot encoding by specifying the categorical features and categories to yield better, faster, and quality results.
  • **Statistics based on category:** CatBoost applies target encoding with random permutation to handle categorical features. This strategy can be very efficient for high cardinality columns as it creates just a new feature to account for the category encoding. The addition of random permutation to the encoding strategy is to prevent overfitting due to data leakage and feature bias. You can read about this in detail [here](https://catboost.ai/en/docs/concepts/algorithm-main-stages_cat-to-numberic).
  • **Greedy search for combination:** CatBoost also automatically combines categorical features, most times two or three. To keep possible combinations limited, CatBoost does not enumerate through all the combinations but rather some of the best, using statistics like category frequency. So, for each tree split, CatBoost adds all categorical features (and their combinations) already used for previous splits in the current tree with all categorical features in the dataset. ([View Highlight](https://read.readwise.io/read/01hs11pj5axrgbqdrfjafxh5s2))
- CatBoost also handles text features (containing regular text) by providing inherent text preprocessing using Bag-of-Words (BoW), Naive-Bayes, and BM-25 (for multiclass) to extract words from text data, create dictionaries (letter, words, grams), and transform them into numeric features. This text transformation is fast, customizable, production-ready, and can be used with other libraries too, including Neural networks. ([View Highlight](https://read.readwise.io/read/01hs11qf7gxg9a2e98p6ed2c5s))
- 4. **Ranking:** Ranking techniques are applied majorly to search engines to solve search relevancy problems. Ranking can be broadly done under three objective functions: [Pointwise, Pairwise, and Listwise](https://medium.com/@nikhilbd/pointwise-vs-pairwise-vs-listwise-learning-to-rank-80a8fe8fadfd). The difference on a high level of these three objective functions is the number of instances under consideration at the time of training your model.
  CatBoost has a ranking mode – [CatBoostRanking](https://catboost.ai/docs/concepts/loss-functions-ranking) just like [XGBoost ranker](https://xgboost.readthedocs.io/en/stable/python/python_api.html) and [LightGBM ranke](https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html)r, however, it provides many more powerful variations than XGBoost and LightGBM. The variations are:
  • Ranking (YetiRank, YetiRankPairwise)
  • Pairwise (PairLogit, PairLogitPairwise)
  • Ranking + Classification (QueryCrossEntropy)
  • Ranking + Regression (QueryRMSE)
  • Select top 1 candidate (QuerySoftMax) ([View Highlight](https://read.readwise.io/read/01hs11qrn5y2djjncs2ybznpz6))
- **Speed**: CatBoost provides scalability by supporting [multi-server distributed GPUs](https://docs.neptune.ai/how-to-guides/neptune-api/distributed-computing) (enabling multiple hosts for accelerated learning) and accommodating older GPUs. It has set some CPU and GPU training speed benchmarks on large datasets like [Epsilon](https://catboost.ai/en/docs/concepts/python-reference_datasets_epsilon) and [Higgs](https://catboost.ai/en/docs/concepts/python-reference_datasets_higgs). Its prediction time came out to be faster than XGBoost and LightGBM; this is extremely important for low latency environments. ([View Highlight](https://read.readwise.io/read/01hs11s140df792y54d6g3svsp))
- • **PredictionValuesChange:** This shows how much, on average, the prediction changes over the feature value changes. The bigger the average values of prediction changes due to features, the higher the importance. Feature importance values are normalized to avoid negation, and all features’ importances are equal to 100. It is easy to compute but can lead to misleading results for ranking problems.
  ![Feature Importance based on PredictionValuesChange](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_14.png?ssl=1) ([View Highlight](https://read.readwise.io/read/01hs11svgxz5n9xwe80n3j3ghm))
- • **LossFunctionChange:** This is a heavy computing technique that gets feature importance by taking the difference between the loss function of a model, including a given feature, and the model without that feature. The higher the difference, the more the feature is important.
  ![Feature Importance based on LossFunctionChange](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_3.png?ssl=1) ([View Highlight](https://read.readwise.io/read/01hs11sxrkya5rhztws2jp5g2c))
- • **InternalFeatureImportance:** This technique calculates values for each input feature and various combinations using the split values in the node on the path symmetric tree leaves. 
  ![Pairwise feature importance](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_1.png?ssl=1) ([View Highlight](https://read.readwise.io/read/01hs11t074862e74avvs0nxfxv))
- • **SHAP:** CatBoost uses [**SHAP**](https://github.com/slundberg/shap) (SHapley Additive exPlanations) to break a prediction value into contributions from each feature. It calculates feature importance by measuring the impact of a feature on a single prediction value compared to the baseline prediction. This technique provides visual explanations of features that make the most impact on your model’s decision-making. SHAP can be applied in two ways:
  Per data instance 
  ![First prediction explanation (Waterfall plot)](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_22.png?ssl=1) ([View Highlight](https://read.readwise.io/read/01hs11t6x4njw5phqan4j2ry1d))
- The above visualization shows the features pushing the model output from the base value (the average model output over the training dataset) to the model output. The red features are the ones pushing the prediction higher, while the blue features push the prediction lower. This concept can be visualized using the force plot.
  ![First prediction explanation (Force plot)](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_21.png?ssl=1)
  *First prediction explanation (Force plot) | Source: Author* ([View Highlight](https://read.readwise.io/read/01hs12tqfph4qrtz8czxy3950p))
- This is another unique feature that CatBoost has integrated into its recent version. This functionality provides calculated and plotted feature-specific statistics and visualizes how CatBoost is splitting the data for each feature. More specifically, the statistics are:
  • Mean target value for each bin (bins groups continuous feature) or category (supported currently for only One-Hot Encoded features).
  • Mean prediction value for each bin
  • Number of data instances (object) in each bin
  • Predictions for various feature values
  ![Statistics of feature](https://i0.wp.com/neptune.ai/wp-content/uploads/2022/10/When-to-Choose-CatBoost-Over-XGBoost-or-LightGBM-Practical-Guide_20.png?resize=822%2C407&ssl=1) ([View Highlight](https://read.readwise.io/read/01hs12tyqgd1d0pcpybktwgmgc))
- CatBoost parameters 
  CatBoost has common training parameters with XGBoost and LightGBM but provides a much flexible interface for parameter tuning. ([View Highlight](https://read.readwise.io/read/01hs12vwkxgcnd1zxkaraah6h0))
- **Overfitting detector:** CatBoost’s algorithm structure inhibits gradient boosting biases and overfitting. In addition, CatBoost has an overfitting detector that can stop training earlier than the training parameters dictate if overfitting occurs. CatBoost implements overfitting detection using two strategies:
  • Iter: Consider the overfitted model and stop training after the specified number of iterations using the iteration with the optimal metric value. This strategy uses the early_stopping_rounds parameter like other gradient boosting algorithms like LightGBM and XGBoost. 
  • IncToDec: Ignore the overfitting detector when the threshold is reached and continue learning for the specified number of iterations after the iteration with the optimal metric value. The overfitting detector is activated by setting “od_type” in the parameters to produce more generalized models. ([View Highlight](https://read.readwise.io/read/01hs12waypvr4rd61xj0r8sm0j))
- **Missing value support**: CatBoost provides three inherent missing values strategies for processing missing values:
  • “Forbidden”: Missing values are interpreted as an error as they are not supported.
  • “Min”: Missing values are processed as the minimum value(less than all other values) for the feature under observation. 
  • “Max”: Missing values are processed as the maximum value(greater than all other values) for the feature under observation. CatBoost only has missing values imputation for numerical values only and the default mode in Min. ([View Highlight](https://read.readwise.io/read/01hs12wjmj32mcfznwes786ta8))
- • **CatBoost viewer**: In addition to the CatBoost model analysis tool, CatBoost has a [standalone executable application](https://github.com/catboost/catboost-viewer) for plotting charts with different training statistics in a browser.
  • **Cross-validation**: CatBoost allows to perform cross-validation on the given dataset. In cross-validation mode, the training data is split into folds of learning and evaluation. ([View Highlight](https://read.readwise.io/read/01hs12wtewy04p128z361tqa9m))
- • CatBoost had the fastest prediction time without categorical support, consequently increasing substantially with categorical support. 
  • CatBoost also had the best score for the AUC metric (the higher the AUC score, the better the model’s performance at distinguishing between the classes) for the test data. 
  • XGBoost had the lowest ROC-AUC Score with default settings and a relatively longer training time than LightGBM, however, its prediction time was fast (second-fastest time in the respective default setting runs).
  • LightGBM outperformed every other model in training time. ([View Highlight](https://read.readwise.io/read/01hs12xqv1q2zkk1evn9d2tdxa))
- • CatBoost still retained the fastest prediction time and best performance score with categorical feature support. CatBoost’s internal identification of categorical data allows it to yield the slowest training time. 
  • Despite the hyperparameter tuning, the difference between the default and tuned results are not that much and it also highlights the fact that CatBoost’s default settings yield a great result. 
  • XGBoost performance increased with tuned settings, however, it produced the fourth-best AUC-ROC score and the training time and prediction time got worse.
  • LightGBM still had the fastest training time as well as the fastest parameter tuning time. However, CatBoost will make a great choice if you are willing to make the tradeoff of performance over faster training time. ([View Highlight](https://read.readwise.io/read/01hs12ycqx76sqjtp739qqbgh5))
- CatBoost’s algorithmic design might be similar to the “older” generation of GBDT models, however, it has some key attributes such as: 
  • ranking objective function
  • native categorical features preprocessing
  • model analysis
  • fastest prediction time 
  CatBoost also provides significant performance potential as it performs remarkably well with default parameters, significantly improving performance when tuned.  This article aimed to help you in making a decision about when to choose CatBoost over LightGBM or XGBoost by talking about these crucial features and the advantages they offer. I hope now you have a good idea about this and the next time you are faced with such a choice, you will be able to make an informed decision. ([View Highlight](https://read.readwise.io/read/01hs12yrvp3gd8n1t4mjwms8ch))
    - Tags: [[favorite]] 
