---
author: [[Avi Chawla]]
title: 'The Motivation Behind Using KernelPCA Over PCA for Dimensionality Reduction'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substack-post-media.s3.amazonaws.com/public/images/3117bf57-0cd1-458d-b47f-6bbba9cd3332_2944x2752.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: The Motivation Behind Using KernelPCA Over PCA for Dimensionality Reduction
- URL: https://www.blog.dailydoseofds.com/p/the-motivation-behind-using-kernelpca

## Highlights
- During dimensionality reduction, principal component analysis (PCA) tries to find a low-dimensional **linear** subspace that the given data conforms to. ([View Highlight](https://read.readwise.io/read/01hpmmh10p0q6eky4js3dz4ewq))
- It’s pretty clear from the above visual that there is a linear subspace along which the data could be represented while retaining maximum data variance. This is shown below: ([View Highlight](https://read.readwise.io/read/01hpmmhbt283rga54ktk39vqe5))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1897d47d-85fc-471a-aec4-8f4413ead9e2_2846x1370.png) ([View Highlight](https://read.readwise.io/read/01hpmmj9y8ehcstj7aweqd1ped))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1897d47d-85fc-471a-aec4-8f4413ead9e2_2846x1370.png) ([View Highlight](https://read.readwise.io/read/01hpmmj9z5zeahsptgxsf081kg))
- The above curve is a continuous non-linear and low-dimensional subspace that we could represent our data given along. ([View Highlight](https://read.readwise.io/read/01hpmmjg5rypgadz99mhq3m5t2))
- The problem is that PCA cannot determine this subspace because the data points are non-aligned along a straight line. ([View Highlight](https://read.readwise.io/read/01hpmmjjkdf0sfrkpv7xh37bs9))
- Nonetheless, if we consider the above non-linear data, don’t you think there’s still some intuition telling us that this dataset can be reduced to one dimension **if we can capture this non-linear curve**. ([View Highlight](https://read.readwise.io/read/01hpmmjqabbq9nzzyp8b7dx062))
- Project the data to another high-dimensional space using a **kernel function**, where the data becomes linearly representable. Sklearn provides a KernelPCA wrapper, supporting many popularly used kernel functions. ([View Highlight](https://read.readwise.io/read/01hpmmk2gkp73399nv4j5nbcaf))
- Apply the standard PCA algorithm to the transformed data. ([View Highlight](https://read.readwise.io/read/01hpmmk9evvce6pmdjmfq91wqy))
- As shown below, even though the data is non-linear, PCA still produces a linear subspace for projection:
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff017f093-2b34-4242-9d3e-309ece0be9e5_3078x1397.png)
  However, KernelPCA produces a non-linear subspace:
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F362a47de-3214-4e93-97ba-7cb2d0b9a21b_2943x1262.png) ([View Highlight](https://read.readwise.io/read/01hpmmkt13pn83x09v8sy8dqcx))
- The catch is the run time.
  Please note that the run time of PCA is already cubically related to the number of dimensions.
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1bb6f4ed-ac67-42ac-ab82-b05257a1cfeb_1664x300.png)
  KernelPCA involves the kernel trick, which is quadratically related to the number of data points (`n`). ([View Highlight](https://read.readwise.io/read/01hpmmmhkf3dfnt76bs7mr9z1r))
