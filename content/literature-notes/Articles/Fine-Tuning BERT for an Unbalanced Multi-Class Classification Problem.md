---
author: [[dataroots.io]]
title: 'Fine-Tuning BERT for an Unbalanced Multi-Class Classification Problem'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://dataroots.io/api/social-preview?title=&description=Fine-tuning%20BERT%20for%20an%20unbalanced%20multi-class%20classification%20problem&subdescription=by%20Antoine%20Caytan&width=1200&height=630&previewImgUrl=&backgroundImgUrl=https%3A%2F%2Fdataroots.ghost.io%2Fcontent%2Fimages%2F2023%2F06%2FDALL-E-Word-Embeddings.png)

## Metadata
- Author: [[dataroots.io]]
- Full Title: Fine-Tuning BERT for an Unbalanced Multi-Class Classification Problem
- URL: https://dataroots.io/blog/incident-team-prediction

## Highlights
- BERT is a deep learning based natural language processing model that is capable of capturing complex semantic information using **multi-headed attention** and **bidirectional training**. BERT is also capable of being **fine-tuned** for specific natural language processing tasks. Thus, by using BERT to solve a text classification problem within the company in question, it will be possible to **learn the company's specific jargon**. For example, if the company uses specific technical terms or acronyms, the model can be trained to understand and use these terms in its predictions. This can help improve the accuracy of the model by using data that is more relevant to the business.
  More specifically, in our case we will use the **bert_uncased** version in its classification version. It has a specific **classification architecture** that will allows us to directly fine-tune the model for a multi-class problem. ([View Highlight](https://read.readwise.io/read/01hp2671sf11ty4yn84h99ch0p))
- A first important factor to consider in preprocessing labels is the **occurrence of the different labels**. Often, the labels can be highly **unbalanced**, meaning that some labels appear much more frequently than others. This can cause problems for the model to learn, as rare labels may not have enough data for the model to find meaningful patterns.
  A second factor is the **complexity of the problem**. When dealing with a large number of labels, the computational complexity of the model can increase significantly. ([View Highlight](https://read.readwise.io/read/01hp2682xtg2nst8qskggq951g))
- As mentioned earlier, achieving optimal training performance may require **further balancing of the training dataset**. To do so, the number of incidents in the training dataset is adjusted by equalising the number of incidents associated with each team. More precisely, we will take as a reference **the number of incidents of the team with the fewest**. ([View Highlight](https://read.readwise.io/read/01hp269egmtg9g6gfryqvvj7hq))
