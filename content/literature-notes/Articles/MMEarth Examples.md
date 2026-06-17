---
author: "[[vishalned.github.io]]"
title: 'MMEarth Examples'
date: "2025-07-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://vishalned.github.io/mmearth/static/images/banner2.png)

## Metadata
- Author: [[vishalned.github.io]]
- Full Title: MMEarth Examples
- URL: https://vishalned.github.io/mmearth/

## Highlights
- The volume of unlabelled Earth observation (EO) data is huge, but many important applications lack labelled training data. However, EO data offers the unique opportunity to pair data from different modalities and sensors automatically based on geographic location and time, at virtually no human labor cost. We seize this opportunity to create MMEarth, a diverse multi-modal pretraining dataset at global scale. Using this new corpus of 1.2 million locations, we propose a Multi-Pretext Masked Autoencoder (MP-MAE) approach to learn general-purpose representations for optical satellite images. ([View Highlight](https://read.readwise.io/read/01k1aw7w3shwpemfhy787hg5k3))
- Our approach builds on the ConvNeXt V2 architecture, a fully convolutional masked autoencoder (MAE). Drawing upon a suite of multi-modal pretext tasks, we demonstrate that our MP-MAE approach outperforms both MAEs pretrained on ImageNet and MAEs pretrained on domain-specific satellite images. This is shown on several downstream tasks including image classification and semantic segmentation. We find that pretraining with multi-modal pretext tasks notably improves the linear probing performance compared to pretraining on optical satellite images only. This also leads to better label efficiency and parameter efficiency which are crucial aspects in global scale applications. ([View Highlight](https://read.readwise.io/read/01k1aw84xx4paj2521w6n56t75))
- MMEarth covers data from **1.2 million locations sampled globally**, making the optical image count similar to ImageNet-1K. At each location, data from **12 aligned modalities** were collected and grouped into pixel-level and image-level modalities. ([View Highlight](https://read.readwise.io/read/01k1aw88gvb6wfxwq0555sm1x6))
- MMEarth was **sampled uniformly across 14 biomes** (e.g., Mangroves, Temperate Conifer Forests, Tundra, etc.). To increase diversity, we considered data from **four years 2017–2020**. Furthermore, we ensured that time-critical modalities were collected around the Sentinel-2 observation date, which serves as the reference. ([View Highlight](https://read.readwise.io/read/01k1aw8ew43zsyn9pz9jvz41kp))
- The **six pixel-level modalities** represent raster data of size 128 × 128 pixels which capture 1.28 km × 1.28 km on the ground (e.g., Sentinel-2, Sentinel-1, Aster DEM, Dynamic World, and ESA World Cover). The remaining **six image-level modalities** represent scalar values for each location (e.g., Biome, Ecoregion, ERA5 temperature, ERA5 precipitation, Geolocation, and Sentinel-2 observation date). ([View Highlight](https://read.readwise.io/read/01k1aw8jg63gjgbda7fn5863fe))
- Our Multi-Pretext Masked Autoencoder (MP-MAE) model, builds on masked image modelling with the ConvNeXt V2 architecture. ConvNeXt V2 is a fully convolutional masked autoencoder (MAE) that uses sparse convolutions to predict the masked pixels of an image. ([View Highlight](https://read.readwise.io/read/01k1aw8qh931s86gpysks8gd8g))
- MP-MAE extends ConvNeXt V2 by adding a task-specific decoder for each pretext task. The general-purpose representation is learned by combining the losses of all pretext tasks. ([View Highlight](https://read.readwise.io/read/01k1aw99z1yjtprhsxdazwmgba))
- ![MMEarth Model](https://vishalned.github.io/mmearth/static/images/model2.jpg) ([View Highlight](https://read.readwise.io/read/01k1aw966qv1zhg6j3qy5bxng5))
- Our main results can be summarized as:
  1. Domain specific pretraining improves representations (i.e. pretraining on optical satellite images). Multi-spectral input images improve over RGB channels.
  2. Multi-modal pretext tasks improve representations for Sentinel-2 images - especially for linear probing as well as in low-data scenarios.
  3. Our MP-MAE compares favourably to prior work on SSL for Earth observation data - even with a small encoder. ([View Highlight](https://read.readwise.io/read/01k1aw9txhe6q61da1aa9kmex1))
