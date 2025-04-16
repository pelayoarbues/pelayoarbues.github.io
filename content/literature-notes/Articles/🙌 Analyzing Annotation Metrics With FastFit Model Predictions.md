---
author: [[Argilla]]
title: '🙌 Analyzing Annotation Metrics With FastFit Model Predictions'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://docs.argilla.io/en/latest/_static/images/og-doc.png)

## Metadata
- Author: [[Argilla]]
- Full Title: 🙌 Analyzing Annotation Metrics With FastFit Model Predictions
- URL: https://docs.argilla.io/en/latest/tutorials_and_integrations/tutorials/feedback/training-fastfit-agreement.html

## Highlights
- n this tutorial, we will train an intent multi-class classifier using the [FastFit](https://github.com/IBM/fastfit) library for few-shot classification. Then, we will make some predictions and evaluate the model. Finally, we will simulate the annotation process with Argilla and calculate some of the most well-known annotation metrics.
  These are the steps we will follow:
  1. Prepare the dataset
  2. Train the model with FastFit
  3. Make predictions and add them to Argilla
  4. Evaluate the annotation performance
  • Accuracy, precision, recall, F1 score with *argilla*
  • Confusion matrix with *sklearn*, *seaborn* and *matplotlib*
  • Krippendorff’s alpha with *argilla*
  • Cohen’s kappa with *sklearn*
  • Fleiss’ kappa with *statsmodels* ([View Highlight](https://read.readwise.io/read/01j047cvb065xtq7xdjjkkcb8c))
- [FastFit](https://github.com/IBM/fastfit) is a library that allows you to train a multi-class classifier with few-shot learning. It is based on the [transformers](https://huggingface.co/transformers/) library and uses a pre-trained model to fine-tune it on a small dataset. This is particularly useful when you have a small dataset and you want to train a model quickly. However, [SetFit](https://github.com/huggingface/setfit) is another well-know library that also allows few-shot learning with Sentence Transformers.
  So, why using one and not the other? Based on this [article](https://medium.com/@meetgandhi586/comparing-setfit-fastfit-and-semantic-router-finding-the-best-nlp-chatbot-intent-detection-d8161a7ad117), where the author compares FastFit, SetFit, and Semantic Router, we can determine some distinctions.
  **Aspect**
  **FastFit**
  **SetFit**
  **Accuracy**
  High, but may sacrifice accuracy for speed
  Consistently high
  **Training Speed**
  Fast
  Slow
  **Inference Speed**
  Slow
  Fast
  **Deployment**
  Easy, minimal expertise needed
  Requires knowledge of transformers
  **Dataset Handling**
  Struggles with highly complex datasets
  Can be fine-tuned for various datasets
  **Computational Costs**
  Lower
  Higher
  In this tutorial, we will focus on FastFit, but you can also try SetFit and compare the results. To know how to use SetFit, you can check this [tutorial](https://docs.argilla.io/en/latest/tutorials_and_integrations/tutorials/feedback/training-fastfit-agreement.html/labelling-feedback-setfit.html). ([View Highlight](https://read.readwise.io/read/01j047dajsvgr0w8pfqpmackdg))
- First, we will prepare the dataset to train the intent classifier, which is responsible for accurately labeling natural language utterances with predefined intents. [FastFit](https://github.com/IBM/fastfit) is particularly effective for few-shot, multi-class classification, especially in scenarios with many semantically similar classes. Therefore, we have chosen to use the [contemmcm/clinc150](https://huggingface.co/datasets/contemmcm/clinc150) dataset from Hugging Face. This dataset includes 151 intent classes, making it well-suited for our needs. ([View Highlight](https://read.readwise.io/read/01j047e6mzydzx95t0gd4s0ajn))
- Since this is few-shot learning, we don’t need to use all the examples in the training set. Therefore, we will utilize the `sample_dataset` method from FastFit to select 10 examples per class (since FastFit is faster to train, we can afford to include more samples without worrying about significantly increased training times). Additionally, we will rename the `val` split to `validation` to comply with FastFit requirements. ([View Highlight](https://read.readwise.io/read/01j047eh630e7ybcdxpe5mq45d))
- As we mentioned, [FastFit](https://github.com/IBM/fastfit) is a library for few-shot learning that can be used to train a model with a few examples per class. In addition, they created the [FewMany benchmark](https://arxiv.org/html/2404.12365v1) for multi-class classification.
  In this case, we have chosen to use the [sentence-transformers/paraphrase-mpnet-base-v2](https://huggingface.co/sentence-transformers/paraphrase-mpnet-base-v2) model to train the intent classifier due to its size and performance. However, you can explore other models available on Hugging Face and find the most appropriate one by consulting the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard). Most of the arguments set in the `FastFitTrainer` are the default values, but you can change them according to your needs. ([View Highlight](https://read.readwise.io/read/01j047exex1gf36w3jkpea615w))
- The standard annotation process involves adding records to the dataset with the text to be annotated and the predicted labels along with their scores as suggestions to assist the annotators. However, for this tutorial and to simulate the annotation process, we will also add responses. Specifically, we will add three responses for each record: one with the correct label, one with a random label (either the correct one or a different one), and one with the predicted label. ([View Highlight](https://read.readwise.io/read/01j047fpn63z0kjya1s8xznytj))
- we trained an intent classifier using FastFit, made predictions, and simulated the annotation process with Argilla. Annotator 1’s responses were based on the true labels, annotator 2 alternated between true and incorrect labels, and annotator 3’s responses were based on the predicted labels. Then, we calculated the annotation metrics, including accuracy, precision, recall, F1 score, Krippendorff’s alpha, Cohen’s kappa, and Fleiss’ kappa. We also visualized the confusion matrix to understand the annotation performance better. These metrics showcased a great performance and agreement of annotators 1 and 3, while the overall agreement was moderate due to annotator 2’s responses. ([View Highlight](https://read.readwise.io/read/01j047g1yv71wdza4wm6txcatg))
