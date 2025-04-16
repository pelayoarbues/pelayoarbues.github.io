---
author: [[skrub]]
title: "Feature Interpretation With the GapEncoder"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://skrub-data.github.io/stable/_static/skrub.svg)

## Metadata
- Author: [[skrub]]
- Full Title: Feature Interpretation With the GapEncoder
- URL: https://skrub-data.org/stable/auto_examples/02_feature_interpretation_with_gapencoder.html#sphx-glr-auto-examples-02-feature-interpretation-with-gapencoder-py

## Highlights
- In this notebook, we will explore the output and inner workings of the [`GapEncoder`](https://skrub-data.org/stable/reference/generated/skrub.GapEncoder.html#skrub.GapEncoder), one of the [high cardinality categorical encoders](https://inria.hal.science/hal-02171256v4) provided by skrub. ([View Highlight](https://read.readwise.io/read/01jb03tktn8wd2c654hff0a6f4))
- Dirty data, as opposed to clean, are all non-curated categorical columns with variations such as typos, abbreviations, duplications, alternate naming conventions etc. ([View Highlight](https://read.readwise.io/read/01jb03tvj7pvf4pjfxndchc5rw))
- Then, we create an instance of the [`GapEncoder`](https://skrub-data.org/stable/reference/generated/skrub.GapEncoder.html#skrub.GapEncoder) with 10 components. This means that the encoder will attempt to extract 10 latent topics from the input data: ([View Highlight](https://read.readwise.io/read/01jb03v03s0rfkjthzae2yy5z7))
- The [`GapEncoder`](https://skrub-data.org/stable/reference/generated/skrub.GapEncoder.html#skrub.GapEncoder) can be understood as a continuous encoding on a set of latent topics estimated from the data. The latent topics are built by capturing combinations of substrings that frequently co-occur, and encoded vectors correspond to their activations. To interpret these latent topics, we select for each of them a few labels from the input data with the highest activations. In the example below we select 3 labels to summarize each topic. ([View Highlight](https://read.readwise.io/read/01jb03v3hp5kehtshvqvkwgeyg))
