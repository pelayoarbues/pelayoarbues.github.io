---
author: [[Avi Chawla]]
title: 'Clean ML Datasets With Cleanlab'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd8f2f7a-d29a-442a-b0cb-386f91984c66_1456x1290.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: Clean ML Datasets With Cleanlab
- URL: https://blog.dailydoseofds.com/p/clean-ml-datasets-with-cleanlab

## Highlights
- was found that ImageNet had over 100k mislabeled images.
  Real-world datasets are messy.
  They often come with noisy labels, missing values, and outliers that can severely degrade your model’s performance.
  No sophisticated ML algorithms can compensate for poor-quality or mislabeled data. ([View Highlight](https://read.readwise.io/read/01jb04zs73sgem7j4rr750dnyf))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0707beaa-65ef-46ed-bbfc-4aa710f3408b_2430x1276.png) ([View Highlight](https://read.readwise.io/read/01jb04zw7zkcft1zkvd1ygs9b8))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0707beaa-65ef-46ed-bbfc-4aa710f3408b_2430x1276.png) ([View Highlight](https://read.readwise.io/read/01jb04zwacq4ce84c567b4hhfa))
- Researchers from MIT developed **[Cleanlab](https://docs.cleanlab.ai/stable/index.html)**, which is an open-source library that cleans your data in just a few lines of code. ([View Highlight](https://read.readwise.io/read/01jb04zzdchyjpjwj9bd32a677))
- As shown in the image above, **[Cleanlab](https://docs.cleanlab.ai/stable/index.html)** can flag errors in any type of data (text, image, tabular, audio), like:
  • out-of-distribution samples
  • outliers
  • label issues
  • duplicates, etc.
  All it takes is just four lines of code:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff0f9a072-f6ec-4263-88fb-21b48dee7716_2760x1064.png)
  ](https://docs.cleanlab.ai/stable/index.html)
  • Import the package.
  • Pass the dataset and specify the label column.
  • Find issues by passing the embedding matrix and the probabilities predicted by the model.
  • Finally, generate the report!
  Done!
  It will generate a report like the one shown above.
  This way, you can easily clean your datasets for training accurate ML models. ([View Highlight](https://read.readwise.io/read/01jb050g4pa87ztpcra15ghb4x))
