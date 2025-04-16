---
author: [[Avi Chawla]]
title: 'Feature Discretization'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffcb56fc-d0ef-4031-a2bd-e0a56412947a_3268x2460.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: Feature Discretization
- URL: https://blog.dailydoseofds.com/p/feature-discretization

## Highlights
- During model development, one of the techniques that many don’t experiment with is **feature discretization.** ([View Highlight](https://read.readwise.io/read/01hz3ja0tn98q1ef68ntcwnb3p))
- As the name suggests, the idea behind discretization is to transform a continuous feature into discrete features. ([View Highlight](https://read.readwise.io/read/01hz3ja1qes2nwvm2ayjatj6c3))
- My rationale for using feature discretization has almost always been simple: “**It just makes sense to discretize a feature.**” ([View Highlight](https://read.readwise.io/read/01hz3jac0b7a8nkrp630a0c6ak))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff26e858d-28b0-48bc-a6f7-a3e2bfa9fe02_1966x195.png) ([View Highlight](https://read.readwise.io/read/01hz3jaj01vpyzg24x1gzy4wen))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff26e858d-28b0-48bc-a6f7-a3e2bfa9fe02_1966x195.png) ([View Highlight](https://read.readwise.io/read/01hz3jaj1t0jccea253d93qg5r))
- In many use cases, like understanding spending behavior based on transaction history, such continuous variables are better understood when they are discretized into meaningful groups → youngsters, adults, and seniors. ([View Highlight](https://read.readwise.io/read/01hz3jar8gwwy529r0p74b0wqd))
- This would result in some coefficients for each feature, which would tell us the influence of each feature on the final prediction. ([View Highlight](https://read.readwise.io/read/01hz3jb162arxf270a1h95zb2d))
- But if you think again, in our goal of understanding spending behavior, **are we really interested in learning the correlation between exact age and spending behavior?** ([View Highlight](https://read.readwise.io/read/01hz3jb9m1r0ncnf3hg717cdkc))
- Instead, it makes more sense to learn the correlation between different age groups and spending behavior. ([View Highlight](https://read.readwise.io/read/01hz3jbd5rm96xvr46t0x6xa8w))
- Now that we understand the rationale, there are 2 techniques that are widely preferred. ([View Highlight](https://read.readwise.io/read/01hz3jbqrtw78qghskbj6tg4a2))
- One way of discretizing features involves decomposing a feature into **equally sized bins**. ([View Highlight](https://read.readwise.io/read/01hz3jbsryhpkx5pq2by0vwnh6))
- Another technique involves decomposing a feature into **equal frequency bins:** ([View Highlight](https://read.readwise.io/read/01hz3jbxbyykkp8dn6gmev5ny0))
- After that, the discrete values are one-hot encoded. ([View Highlight](https://read.readwise.io/read/01hz3jc3eqvz7fh3exr4frf410))
- One advantage of feature discretization is that it enables non-linear behavior even though the model is linear. ([View Highlight](https://read.readwise.io/read/01hz3jc6e6qxn7na8hfqhdh1p6))
- This can potentially lead to better accuracy, which is also evident from the image below: ([View Highlight](https://read.readwise.io/read/01hz3jcj9w90vtz5gw026twc5b))
    - Tags: [[favorite]] 
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffcb56fc-d0ef-4031-a2bd-e0a56412947a_3268x2460.png) ([View Highlight](https://read.readwise.io/read/01hz3jcka3ajwt1tkkpk926jh7))
- A linear model with feature discretization results in a:
  • non-linear decision boundary.
  • better test accuracy.
  So, in a way, we get to use a simple linear model but still get to learn non-linear patterns. ([View Highlight](https://read.readwise.io/read/01hz3jcz0e2xjcjr2a26cycjyj))
- Simply put, “signal” refers to the meaningful or valuable information in the data. ([View Highlight](https://read.readwise.io/read/01hz3jd2s4r4j59x8x8qms5x0j))
- Binnng a feature helps us mitigate the influence of minor fluctuations, which are often mere noise. ([View Highlight](https://read.readwise.io/read/01hz3jd4stfw79wmpd5x1m8p4f))
- Before I conclude, do remember that feature discretization with one-hot encoding increases the number of features → thereby increasing the data dimensionality. ([View Highlight](https://read.readwise.io/read/01hz3jd9v33x8fa6sw5k8xzmb9))
- And typically, as we progress towards higher dimensions, data become more easily linearly separable. Thus, feature discretization can lead to overfitting. ([View Highlight](https://read.readwise.io/read/01hz3jdbvet9xxeaaerxr5xkkg))
- To avoid this, **don’t overly discretize all features.** ([View Highlight](https://read.readwise.io/read/01hz3jdh1wbfgse049kdjhwb30))
- Instead, use it when it makes intuitive sense, as we saw earlier. ([View Highlight](https://read.readwise.io/read/01hz3jdjs7pbr5z6x5v6f0fw3x))
- Of course, **its utility can vastly vary from one application to another**, but at times, I have found that:
  • Discretizing geospatial data like latitude and longitude can be useful.
  • Discretizing age/weight-related data can be useful.
  • Features that are typically constrained between a range makes sense, like savings/income (*practically speaking*), etc. ([View Highlight](https://read.readwise.io/read/01hz3jdy37ss5abfbm2nhb4kvq))
