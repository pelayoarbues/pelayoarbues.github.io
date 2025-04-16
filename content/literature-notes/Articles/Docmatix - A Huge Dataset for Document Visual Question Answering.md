---
author: [[huggingface.co]]
title: 'Docmatix - A Huge Dataset for Document Visual Question Answering'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/183_docmatix/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Docmatix - A Huge Dataset for Document Visual Question Answering
- URL: https://huggingface.co/blog/docmatix

## Highlights
- we are releasing [Docmatix - a huge dataset for Document Visual Question Answering](https://huggingface.co/datasets/HuggingFaceM4/Docmatix) (DocVQA) that is 100s of times larger than previously available. Ablations using this dataset for fine-tuning Florence-2 show a 20% increase in performance on DocVQA. ([View Highlight](https://read.readwise.io/read/01j35dxy8dfqmjshcg32pgv6m3))
- We first had the idea to create Docmatix when we developed [The Cauldron](https://huggingface.co/datasets/HuggingFaceM4/the_cauldron), an extensive collection of 50 datasets for the fine-tuning of Vision-Language Model (VLM), and [Idefics2](https://huggingface.co/blog/idefics2) in particular. Through this process, we identified a significant gap in the availability of large-scale Document Visual Question Answering (DocVQA) datasets. The primary dataset we relied on for Idefics2 was DocVQA, which contains 10,000 images and 39,000 question-answer (Q/A) pairs. Fine-tuning on this and other datasets, open-sourced models still maintain a large gap in performance to closed-source ones. To address this limitation, we are excited to introduce Docmatix, a DocVQA dataset featuring 2.4 million images and 9.5 million Q/A pairs derived from 1.3 million PDF documents. ([View Highlight](https://read.readwise.io/read/01j35dy93avfxe0j4f2en0fkkf))
- After processing the first small batch of the dataset, we performed several ablation studies to optimize the prompts. We aimed to generate around four pairs of Q/A per page. Too many pairs indicate a large overlap between them, while too few pairs suggest a lack of detail. Additionally, we aimed for answers to be human-like, avoiding excessively short or long responses. We also prioritized diversity in the questions, ensuring minimal repetition. I ([View Highlight](https://read.readwise.io/read/01j35dypn6frt16nc35hyw46bx))
