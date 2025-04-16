---
author: "[[Team PyTorch]]"
title: 'Inside the Matrix: Visualizing Matrix Multiplication, Attention and Beyond'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://pytorch.org/assets/images/pytorch-logo.png)

## Metadata
- Author: [[Team PyTorch]]
- Full Title: Inside the Matrix: Visualizing Matrix Multiplication, Attention and Beyond
- URL: https://pytorch.org/blog/inside-the-matrix/?utm_content=265147245&utm_medium=social&utm_source=twitter&hss_channel=tw-776585502606721024

## Highlights
- *Use 3D to visualize matrix multiplication expressions, attention heads with real weights, and more.*
  Matrix multiplications (matmuls) are the building blocks of today’s ML models. This note presents [mm](https://bhosmer.github.io/mm/ref.html), a visualization tool for matmuls and compositions of matmuls. ([View Highlight](https://read.readwise.io/read/01hb855hb27d8rdrhbpsychb9r))
- Because mm uses all three spatial dimensions, it helps build intuition and spark ideas with less cognitive overhead than the usual squares-on-paper idioms, especially (though not only) for visual/spatial thinkers. ([View Highlight](https://read.readwise.io/read/01hb855qh3kb6gxfsj0y652qnr))
- mm is fully interactive, runs [in the browser](https://bhosmer.github.io/mm/) or [notebook iframes](https://colab.research.google.com/drive/1wZIoU20eRWKtRNCW7e5Iugm3MhfaE1f7) and keeps its complete state in the URL, so links are shareable sessions (the screenshots and videos in this note all have links that open the visualizations in the tool). This [reference guide](https://bhosmer.github.io/mm/ref.html) describes all of the available functionality. ([View Highlight](https://read.readwise.io/read/01hb8563kke9j0kef5ghp76rrt))
- Now the computation makes *geometric sense*: each location `i, j` in the result matrix anchors a vector running along the depth dimension `k` in the cube’s interior, where the horizontal plane extending from row `i` in `L` and a vertical plane extending from column `j` in `R` intersect. Along this vector, pairs of `(i, k)` `(k, j)` elements from the left and right arguments meet and are multiplied, and the resulting products are summed along `k` and the result is deposited in location `i, j` of the result. ([View Highlight](https://read.readwise.io/read/01hb859xj0dn2xrd18rzasqk84))
- • **project** two orthogonal matrices into the interior of a cube
  • **multiply** the pair of values at each intersection, forming a grid of products
  • **sum** along the third orthogonal dimension to produce a result matrix. ([View Highlight](https://read.readwise.io/read/01hb85c187kbgs27f99bhsc62c))
- Dot product[](https://pytorch.org/blog/inside-the-matrix?hss_channel=tw-776585502606721024&utm_content=265147245&utm_medium=social&utm_source=twitter#2a-dot-product)
  First, the canonical algorithm - computing each result element by taking the dot product of the corresponding left row and right column. What we see in the animation is the sweep of multiplied value vectors through the cube’s interior, each delivering a summed result at the corresponding position. ([View Highlight](https://read.readwise.io/read/01hb85gn7vfvy2aqyzz3dt8k9n))
- put” or “output” dimensions. (Concretely in the context of this example, this means that the width of `B` is greater than the widths of `A` or `C`.)
  As in the single matmul examples, the floating arrows point towards the result matrix, blue vane coming from the left argument ([View Highlight](https://read.readwise.io/read/01hb865cmdypxmqx183skxp5y9))
