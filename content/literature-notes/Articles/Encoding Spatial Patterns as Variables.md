---
author: "[[Josiah Parry]]"
title: 'Encoding Spatial Patterns as Variables'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Josiah Parry]]
- Full Title: Encoding Spatial Patterns as Variables
- URL: https://josiahparry.com/posts/2024-05-17-moran-eigenvectors

## Highlights
- I’ve begun reading [“Spatial modelling: a comprehensive framework for principal coordinate analysis of neighbour matrices (PCNM)”](https://www.sciencedirect.com/science/article/abs/pii/S0304380006000925) which describes the process of making “Moran Eigenvector Maps.” ([View Highlight](https://read.readwise.io/read/01hyfv5naxshfdg73839z6v32p))
- One of the biggest problems in ecological and social science modelling is that space is often a confounder in models. By this I mean that a lot of phenomena we see are **spatially dependent**. ([View Highlight](https://read.readwise.io/read/01hyfv5rtanhck4mj3qme3pe32))
- patial dependence means that variables or outcomes are strongly linked to where things are. For example, income tends to be spatially dependent. Meaning that high income areas are typically surounded by other high income areas. ([View Highlight](https://read.readwise.io/read/01hyfv62h4xw72pw1ctv9gzv1q))
- When modelling data that exhibit spatial dependence, spatial relationships need to be accounted for. Otherwise, you will often find that model residuals (errors) *also exhibit spatial dependence*. ([View Highlight](https://read.readwise.io/read/01hyfv6hj1zb2552g0h1j4zgth))
- One interesting idea is using principle components analysis to encode geography into numeric variables. Conceptually, the idea is actually rather simple!
  When we do spatial statistics, we create what are called spatial weights matrices. These define which features are related to eachother.
  For example we can identify the neighbors from the famous guerry dataset based on the contiguity ([View Highlight](https://read.readwise.io/read/01hyfv799e82xz5k8spqe5n8kh))
- The spatial weights are an `n x n` square matrix. The idea behind the paper above is that we can encode the spatial relationships in this neighborhood matrix using principle components. ([View Highlight](https://read.readwise.io/read/01hyfv7hy1eszgwr98dd8wnacz))
- The spatial relationships that are embedded by the spatial weights matrix, are now encoded as components from a PCA. This means that we can use each of these components as a univariate measure of space. And, they also exhibit quite interesting patterns of spatial dependence. ([View Highlight](https://read.readwise.io/read/01hyfv8e3vpncjsa7xaqzp8qbt))
