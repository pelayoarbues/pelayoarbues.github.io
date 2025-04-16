---
author: [[Avi Chawla]]
title: "A Lesser-Known Detail of Dropout"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0af18fda-a5aa-4d65-91e0-742f7ea83170_2484x1220.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: A Lesser-Known Detail of Dropout
- URL: https://blog.dailydoseofds.com/p/a-lesser-known-detail-of-dropout

## Highlights
- Here’s what most resources/tutorials mention about Dropout:
  • *Zero out neurons randomly in a neural network. This is done to regularize the network.*
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F969ff57d-569b-4e8d-aaea-185606b9bb42_3497x1303.png)
  • *Dropout is only applied during training, and which neuron activations to zero out (or drop) is decided using a Bernoulli distribution:*
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb375d89-ab10-4b10-806c-134df2690bdb_1996x736.png)
  “`p`” is the dropout probability specified in, say, PyTorch → `nn.Dropout(p)`.
  * * *
  Of course, these details are correct.
  But **this is just 50% of how Dropout works**. ([View Highlight](https://read.readwise.io/read/01j9m75sqhm37e8tdq2ghsfa1n))
- How Dropout actually works?
  To begin, we must note that Dropout is only applied during training, but not during the inference/evaluation stage:
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F67fd4e25-6c1a-4d4a-9070-181c3c65d34a_3197x1440.png)
  Now, consider that a neuron’s input is computed using 100 neurons in the previous hidden layer:
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95076d03-7cf2-41f4-9fc3-2e694e1d87bd_1401x719.png) ([View Highlight](https://read.readwise.io/read/01j9m77e8gwy39w2byvv700h0m))
- **During training, the average neuron inputs are significantly lower than those received during inference.**
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F420c3f68-78c4-4dec-902e-4d7e04cd7754_3651x1555.png) ([View Highlight](https://read.readwise.io/read/01j9m799ebh4aweyxhqf5109eg))
- More formally, using Dropout significantly affects the scale of the activations.
  However, it is desired that the neurons throughout the model must receive the roughly same mean (or expected value) of activations during training and inference.
  **To address this, Dropout performs one additional step.**
  This idea is to **scale the remaining active inputs** during training.
  The simplest way to do this is by scaling all activations during training by a factor of `1/(1-p)`, where `p` is the dropout rate.
  For instance, using this technique on the neuron input of 60, we get the following (recall that we set `p=40%`):
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F65825e57-2954-4d30-895d-317d6db60263_2450x501.png)
  As depicted above, scaling the neuron input brings it to the desired range, which makes training and inference stages coherent for the network. ([View Highlight](https://read.readwise.io/read/01j9m79ppr9ys9t63ymmgzdaf1))
