---
author: [[BioMed Central]]
title: 'The Matthews Correlation Coefficient (MCC) Should Replace the ROC AUC as the Standard Metric for Assessing Binary Classification'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://static-content.springer.com/image/art%3A10.1186%2Fs13040-023-00322-4/MediaObjects/13040_2023_322_Fig1_HTML.png)

## Metadata
- Author: [[BioMed Central]]
- Full Title: The Matthews Correlation Coefficient (MCC) Should Replace the ROC AUC as the Standard Metric for Assessing Binary Classification
- URL: https://biodatamining.biomedcentral.com/articles/10.1186/s13040-023-00322-4

## Highlights
- The ROC AUC, however, has several flaws and drawbacks. This score is generated including predictions that obtained insufficient sensitivity and specificity, and moreover it does not say anything about *positive predictive value* (also known as *precision*) nor negative predictive value (NPV) obtained by the classifier, therefore potentially generating inflated overoptimistic results. Since it is common to include ROC AUC alone without precision and negative predictive value, a researcher might erroneously conclude that their classification was successful. Furthermore, a given point in the ROC space does not identify a single confusion matrix nor a group of matrices sharing the same MCC value. Indeed, a given *(sensitivity, specificity)* pair can cover a broad MCC range, which casts doubts on the reliability of ROC AUC as a performance measure. In contrast, the Matthews correlation coefficient (MCC) generates a high score in its [−1;+1][-1; +1] interval only if the classifier scored a high value for all the four *basic rates* of the confusion matrix: sensitivity, specificity, precision, and negative predictive value. A high MCC (for example, MCC == 0.9), moreover, always corresponds to a high ROC AUC, and not vice versa. In this short study, we explain why the Matthews correlation coefficient should replace the ROC AUC as standard statistic in all the scientific studies involving a binary classification, in all scientific fields. ([View Highlight](https://read.readwise.io/read/01j6rzktptd2sfresfrfbvvaft))
