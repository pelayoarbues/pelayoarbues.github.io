---
author: [[ClickHouse]]
title: 'Training Machine Learning Models With ClickHouse and Featureform'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://clickhouse.com/uploads/training_models_clickhouse_featureform_d294abd5b2.png)

## Metadata
- Author: [[ClickHouse]]
- Full Title: Training Machine Learning Models With ClickHouse and Featureform
- URL: https://clickhouse.com/blog/training-machine-learning-models-with-clickhouse-and-featureform

## Highlights
- This post demonstrates how data in ClickHouse can be used to train models through a feature store. As part of this, we also show how the common tasks that data scientists and engineers need to perform when exploring a dataset and preparing features can be achieved in seconds with ClickHouse over potentially petabyte datasets with SQL. To assist with feature creation, we use the open-source feature store Featureform, for which ClickHouse was recently integrated. ([View Highlight](https://read.readwise.io/read/01hz5sccne30tr58q9v990k1n9))
- We use the term "feature" throughout this post. As a reminder, a feature is some property of an entity that has predictive power for a Machine Learning (ML) model. An entity, in this sense, is a collection of features as well as a class or label representing a real-world concept. The features should, if of sufficient quality and if such a relationship exists, be helpful in predicting the entity's class. For example, a bank transaction could be considered an entity. This may contain features such as the amount transacted and purchase/seller involved, with the class describing whether the transaction was fraudulent. ([View Highlight](https://read.readwise.io/read/01hz5sd0gv4cwe8fk8y26emd8e))
- In the case of structured data, we can consider a feature to be a column - from either a table or result set. We use the terms interchangeably here, but it's worth remembering that features usually require some prior data engineering steps and data transformation logic before they are available for use. ([View Highlight](https://read.readwise.io/read/01hz5sdd3dtf1g8pcq8b8nxqy5))
- In summary, a feature store is a centralized hub for storing, processing, and accessing commonly used features for model training, inference, and evaluation. This abstraction provides convenience features such as versioning, access management, and automatically translating the definition of features to SQL statements. ([View Highlight](https://read.readwise.io/read/01hz5sdh2vx0mdxbhervzth6s6))
- The main value here is improving collaboration and reusability of features, which in turn reduces model iteration time. By abstracting the complexity of data engineering from data scientists and only exposing versioned high-quality features through an API, model reliability and quality may be improved. ([View Highlight](https://read.readwise.io/read/01hz5sdncmvtgkqr1m8tss07gb))
- Prior to any model being trained, data must first be analyzed to understand its characteristics, distributions, and relationships. This process of evaluation and understanding becomes an iterative one, resulting in a series of ad-hoc queries that often aggregate and compute metrics across the dataset. Data scientists performing this task demand query responsiveness in order to iterate quickly (along with other factors such as cost-efficiency and accuracy). Raw data is rarely clean and well-formed and thus must be transformed prior to being used to train models. All of these tasks require a **transformation and query engine** that can ideally scale and is not memory-bound. ([View Highlight](https://read.readwise.io/read/01hz5seztsqvgp42nqs8n2azaq))
- The **offline store** holds features resulting from the transformations, serving them to models during training. These features are typically grouped as entities and associated with a label (the target prediction). Usually, models need to consume these features selectively, either iteratively or through aggregations, potentially multiple times and in random order. Models often require more than one feature, requiring features to be grouped together in a "feature group" - usually by an entity ID and time dimension. This requires the offline store to be able to deliver the correct version of a feature and label for a specific point in time. This "point-in-time correctness" is often fundamental to models, which need to be trained incrementally. ([View Highlight](https://read.readwise.io/read/01hz5sf9q7y988yag3j4z9050t))
