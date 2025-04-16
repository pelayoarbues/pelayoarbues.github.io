---
author: "[[Faire Data Team]]"
title: 'Advancing Product Categorization With Vision Language Models: The Power of Fine-Tuned LLaVA'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*WfusNZYu8SPF5DzbxQxaGg.png)

## Metadata
- Author: [[Faire Data Team]]
- Full Title: Advancing Product Categorization With Vision Language Models: The Power of Fine-Tuned LLaVA
- URL: https://craft.faire.com/advancing-product-categorization-with-vision-language-models-the-power-of-fine-tuned-llava-2f4bf024a102

## Highlights
- To achieve better product categorization, the Faire Data team specifically fine-tuned the [LLaVA](https://llava-vl.github.io/) model, an open-source vision language model with state-of-the-art performance in various benchmarks. The model was trained on millions of products that our operations team has manually audited in the past.
  Our fine-tuning setup
  The model was set up to generate the most likely product type based on the product title, product description, brand name, brand description, and the hero product image. Each field is optional, and the model can still function accurately when only text or image data is available. Below is an example of our fine-tuning setup: ([View Highlight](https://read.readwise.io/read/01j8hy3qx7bsmebsecy5rw313b))
- To assess the impact of data and model composition on model performance, we trained an array of models with different datasets and configurations.
  • **Datasets:** We compared models trained on unaudited data with those trained on manually-audited data. The unaudited data came from existing products, allowing us to use a large volume from the existing database. However, as previously discussed, about 15% of this data is mis-categorized, introducing noise into model training.
  • **Models:** We tested both the LLaVA-7b and LLaVA-13b models.
  In each training instance, we split the data into training and evaluation sets based on predefined brand-level splits. This approach prevents intra-brand leakage into evaluations, as products from the same brand might share characteristics indicative of taxonomy prediction. Additionally, we randomly masked one of the product fields with a 5% probability to account for scenarios where some fields may not be populated at product creation time. This technique enhances the model’s robustness and improves its performance when only text or image data is available. ([View Highlight](https://read.readwise.io/read/01j8hy41cr8fg1b6ras4j73sc8))
- The table below summarizes the results of the different models. Key points include:
  • All LLaVA-based models significantly outperformed the existing production model based on KNN and CLIP embeddings.
  • Models trained on audited data outperformed those trained on unaudited data, underscoring the importance of data labeling for establishing high-quality ground truth data.
  • Increasing the number of training samples and the model size both contributed to improved model performance. The best model, based on LLaVA-13b, achieved 95% accuracy. ([View Highlight](https://read.readwise.io/read/01j8hy4846xp7k5z0k2kt2q7tn))
