---
author: "[[raw-githubusercontent-com.translate.goog]]"
title: 'Please Refer to [About Training Data preparation](./train_README-ja.md).'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[raw-githubusercontent-com.translate.goog]]
- Full Title: Please Refer to [About Training Data preparation](./train_README-ja.md).
- URL: https://raw-githubusercontent-com.translate.goog/kohya-ss/sd-scripts/main/docs/train_network_README-ja.md?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=es&_x_tr_pto=wapp

## Highlights
- It seems best to specify a learning rate of `1e-4` to `1e-3`, which is higher than normal DreamBooth or fine tuning. ([View Highlight](https://read.readwise.io/read/01hbxgr4nhdjpkm4089cqj36qn))
- --network_dim` * Specify the LoRA RANK (e.g. ``--networkdim=4``). If omitted, it will be 4. The greater the number, the more expressive power there will be, but the memory and time required for learning will also increase. It also doesn't seem to be a good idea to increase the number blindly. ([View Highlight](https://read.readwise.io/read/01hbxgrp7nnhy9w4nh7r63qecr))
- `--network_alpha` * Specify the ``alpha`` value to prevent underflow and ensure stable learning. Default is 1. Specifying the same value as ``network_dim`` will result in the same behavior as in previous versions. ([View Highlight](https://read.readwise.io/read/01hbxgrw515ntgbwxanfyav7kw))
- * Specify the number of processes for reading data. Having a large number of processes allows for faster data loading and more efficient use of the GPU, but it also consumes main memory. The default is "the smaller of `8` or `Number of CPU concurrently executing threads - 1`", so if you don't have enough main memory or the GPU usage rate is about 90% or more, use `2` while looking at those numbers. Or lower it to about `1`. ([View Highlight](https://read.readwise.io/read/01hbxgsck546sn4zxbac82pvd3))
- * `--network_weights` * Load the learned LoRA weights before learning and additionally learn from them. ([View Highlight](https://read.readwise.io/read/01hbxgsnqfsqfz4zvnrbdjz4c6))
- `--network_train_unet_only` * Only LoRA modules related to U-Net are enabled. It may be a good idea to specify this using fine tuning learning. ([View Highlight](https://read.readwise.io/read/01hbxgt3jx3n86tjz72bhpbe3v))
- DyLoRA model files after training are compatible with LoRA. Also, you can extract LoRA of multiple dims below the specified dim(rank) from the model file. ([View Highlight](https://read.readwise.io/read/01hbxh59akeda7pzp8p1g0mqzs))
