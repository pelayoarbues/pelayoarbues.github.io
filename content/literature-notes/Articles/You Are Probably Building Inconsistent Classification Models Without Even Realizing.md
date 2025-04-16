---
author: [[Daily Dose of Data Science]]
title: "You Are Probably Building Inconsistent Classification Models Without Even Realizing"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.dailydoseofds.com/content/images/size/w1200/2024/02/ordinal_labels.png)

## Metadata
- Author: [[Daily Dose of Data Science]]
- Full Title: You Are Probably Building Inconsistent Classification Models Without Even Realizing
- URL: https://www.dailydoseofds.com/you-are-probably-building-inconsistent-classification-models-without-even-realizing/

## Highlights
- While cross-entropy is undoubtedly one of the most used loss functions for training multiclass classification models, it is not entirely suitable in certain situations. ([View Highlight](https://read.readwise.io/read/01jcvfx303r29wn0973naaes8z))
- More specifically, in many real-world classification tasks, the class labels often possess a relative ordering between them. ([View Highlight](https://read.readwise.io/read/01jcvfx4703c47r267ztykw5q2))
- ![](https://www.dailydoseofds.com/content/images/2024/02/image-100.png) ([View Highlight](https://read.readwise.io/read/01jcvfx65553hw97g28tf30xj3))
- ![](https://www.dailydoseofds.com/content/images/2024/02/image-100.png) ([View Highlight](https://read.readwise.io/read/01jcvfx66ze9090a8wzgq8dmxw))
- For instance, consider an age detection task where the goal is to predict the age group of individuals based on facial features: ([View Highlight](https://read.readwise.io/read/01jcvfx83e7jt926712cd6pche))
- In such a scenario, the class labels typically represent age ranges or groups, such as `child`, `teenager`, `young adult`, `middle-aged`, and `senior`. These age groups inherently possess an ordered relationship, where `child` precedes `teenager`, `teenager` precedes `young adult` and so on. ([View Highlight](https://read.readwise.io/read/01jcvfxdhcmqdhbpq29cwffbjf))
- Traditional classification approaches, such as cross-entropy loss, treat each `age group` as a separate and independent category. Thus, they fail to capture the underlying ordinal relationships between the age groups. ([View Highlight](https://read.readwise.io/read/01jcvfxknxvn520sszem09cq9j))
- Consequently, the model might struggle to differentiate between adjacent age groups, leading to suboptimal performance and classifier ranking inconsistencies. ([View Highlight](https://read.readwise.io/read/01jcvfxpcvssnfs8vg9yh1enc4))
- By "ranking inconsistencies," we mean those situations where the predicted probabilities assigned to adjacent age groups do not align with their natural ordering. ([View Highlight](https://read.readwise.io/read/01jcvfxwp1jyhvyyhnwdcqfavv))
- For example, if the model predicts a lower probability for the `child` age group than for the `teenager` age group, despite the fact that `teenager` logically follows `child` in the age hierarchy, this would constitute a ranking inconsistency. ([View Highlight](https://read.readwise.io/read/01jcvfxzger4amt2ggcwaenjyf))
- We could also interpret it in this way that, say, the true label for an input sample is `young adult`. Then in that case, we would want our classifier to highlight that the input sample is "at least a child", "at least a teenager", and "at least a young adult". ([View Highlight](https://read.readwise.io/read/01jcvfy5xnekvzere5ne0yq9ym))
- However, these inconsistencies are largely observed when we use cross-entropy loss. They arise due to the lack of explicit consideration for the ordinal relationships between age groups in traditional classification approaches. ([View Highlight](https://read.readwise.io/read/01jcvfybec4894sdk8vr647bmw))
- Since cross-entropy loss treats each age group as a separate category with no inherent order, the model may struggle to learn and generalize the correct progression of age. ([View Highlight](https://read.readwise.io/read/01jcvfyeps06czh3qnndxx49ex))
- As a result, the model may exhibit inconsistent ranking behavior, where it assigns higher probabilities to age groups that logically should have lower precedence according to the age hierarchy. ([View Highlight](https://read.readwise.io/read/01jcvfytcvhxhx9nxgv2cdt9rj))
- This inconsistency not only undermines the interpretability of the model but also compromises its predictive accuracy, especially in scenarios where precise age estimation is crucial. ([View Highlight](https://read.readwise.io/read/01jcvfz42ptcsesrzp90hz3hzw))
- Here, we must note that ordinal classification techniques are not limited to age but are applicable across a wide range of domains where class labels exhibit inherent ordering. ([View Highlight](https://read.readwise.io/read/01jcvfz8rr8d76f01fmyav03j4))
    - Tags: [[favorite]] 
- **Product Reviews:** In sentiment analysis of product reviews, sentiment labels such as `excellent`, `good`, `average`, `poor`, and `terrible` represent an ordered ranking of the overall sentiment expressed in the reviews. ([View Highlight](https://read.readwise.io/read/01jcvfzhjrtezdejf9zg5p4n8k))
- **Economic Indicators:** In economic forecasting, indicators such as `strong growth`, `moderate growth`, `stagnation`, `recession`, and `depression` represent an ordered ranking of economic conditions. ([View Highlight](https://read.readwise.io/read/01jcvfzk5a6qvfdkmvpzrh3d8b))
- **Risk Assessment:** Risk assessment models may categorize risks into ordered levels such as `low risk`, `medium risk`, and `high risk`, based on the likelihood and impact of potential events. ([View Highlight](https://read.readwise.io/read/01jcvfzm9vx19q0g4ny5pqpqep))
- **Education Grading:** In educational assessment, students' performance levels are often categorized based on grades, such as `A`, `B`, `C`, `D`, and `F`. These grades represent an ordered ranking from highest to lowest performance. ([View Highlight](https://read.readwise.io/read/01jcvfznrmkftjqwp9enk653ca))
- However, as discussed above, commonly used loss functions like multi-category cross-entropy do not explicitly capture this ordinal information. ([View Highlight](https://read.readwise.io/read/01jcvfzxdsg04hram5zxjvwjbz))
- More formally, the model is trained such that it learns a ranking rule that maps a data point xx to an ordered set yy, where each element yi∈yyi∈y represents a class or category, and the order of these elements reflects the ordinal relationship between them. ([View Highlight](https://read.readwise.io/read/01jcvg024mef695ywr3w2zbvs6))
- In ordinal classification, the focus shifts from simply assigning data points to discrete classes to understanding and respecting the relative order or hierarchy present in the classes. ([View Highlight](https://read.readwise.io/read/01jcvg0500tdbzxxbxv5s13srd))
- As discussed above, this is particularly important in tasks where the classes exhibit a natural progression or ranking, such as age groups, severity levels, or performance categories. ([View Highlight](https://read.readwise.io/read/01jcvg06rdqk2z6bc1qf8rjxbw))
- The goal of ordinal classification is twofold:
  • first, to accurately predict the class labels for each data point,
  • and second, to ensure that these predictions adhere to the inherent order or ranking of the classes. ([View Highlight](https://read.readwise.io/read/01jcvg0v9pbeszte2e98a1pxjj))
