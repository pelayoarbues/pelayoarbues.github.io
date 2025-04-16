---
author: "[[Avi Chawla]]"
title: 'MLE vs. EM — What’s the Difference?'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0ba5c804-c48c-4e4e-bf2b-3af42438af81_3228x3462.jpeg)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: MLE vs. EM — What’s the Difference?
- URL: https://www.blog.dailydoseofds.com/p/mle-vs-em-whats-the-difference

## Highlights
- MLE starts with a **labeled dataset** and aims to determine the parameters of the statistical model we are trying to fit. ([View Highlight](https://read.readwise.io/read/01hnr8hwg1tdfmvypdd823sesx))
- Start by assuming a data generation process. Simply put, this data generation process reflects our belief about the distribution of the output label (`y`), given the input (`X`). ([View Highlight](https://read.readwise.io/read/01hnr8n1rhsymqx54xqgf77tr6))
- Next, we define the likelihood of observing the data. As each observation is independent, the likelihood of observing the entire data is the same as the product of observing individual observations: ([View Highlight](https://read.readwise.io/read/01hnr8n7yz9efvjdyyz4y3rmgy))
    - Tags: [[favorite]] 
- The likelihood function above depends on parameter values (θ). Our objective is to determine those specific parameter values that maximize the likelihood function. We do this as follows: ([View Highlight](https://read.readwise.io/read/01hnr8np5x72cr37ckw90aeeyj))
- EM is an iterative optimization technique to estimate the parameters of statistical models. It is particularly useful when we have an unobserved (or hidden) label. ([View Highlight](https://read.readwise.io/read/01hnr8ppbzqxdhyr4mf1w49e6s))
- As depicted above, we assume that the data was generated from multiple distributions (a mixture). However, the observed/complete data does not contain that information. ([View Highlight](https://read.readwise.io/read/01hnr8pz35rzh2qc3g05gfmyvf))
- In other words, the observed dataset does not have information about whether a specific row was generated from distribution 1 or distribution 2. ([View Highlight](https://read.readwise.io/read/01hnr8q1fb9bndp81dce77327m))
- **follows:**
  • Make a guess about the initial parameters (θ).
  • **Expectation (E) step:** Compute the posterior probabilities of the unobserved label (let’s call it ‘`z`’) using the above parameters.
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa82535a0-d18e-4505-91de-a513cc5e8b28_255x139.png) ([View Highlight](https://read.readwise.io/read/01hnr8qcqg8dq6axtqxtzv4b8b))
- **Maximization (M) step**: So now we have a likelihood function to work with. Maximizing it with respect to the parameters will give us a new estimate for the parameters (θ`). ([View Highlight](https://read.readwise.io/read/01hnr8qqyf76rs3xj90nz49jww))
- The point is that in **expectation maximization**, we repeatedly iterate between the E and the M steps until the parameters converge. ([View Highlight](https://read.readwise.io/read/01hnr8qw32zm896vnppen2xes8))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0ba5c804-c48c-4e4e-bf2b-3af42438af81_3228x3462.jpeg) ([View Highlight](https://read.readwise.io/read/01hnr8r56hs0mhcjdvx7tpp26q))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0ba5c804-c48c-4e4e-bf2b-3af42438af81_3228x3462.jpeg) ([View Highlight](https://read.readwise.io/read/01hnr8r57xffrya7qfc10tgpqt))
