---
author: [[Hugging Face - Blog]]
title: "Announcing New Dataset Search Features"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/front/thumbnails/v2-2.png)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: Announcing New Dataset Search Features
- URL: https://huggingface.co/blog/datasets-filters

## Highlights
- At Hugging Face, we are building the Dataset Hub as the place for the community to collaborate on open datasets. So we built tools like Dataset Search and the Dataset Viewer, as well as a rich open source ecosystem of tools. Today we are announcing four new features that will take Dataset Search on the Hub to the next level. ([View Highlight](https://read.readwise.io/read/01j2h4fn3gxgrhhbx2jxyar19n))
- We released a set of filters that allows you to filter datasets that have one or several modalities among this list:
  • Text
  • Image
  • Audio
  • Tabular
  • Time-Series
  • 3D
  • Video
  • Geospatial ([View Highlight](https://read.readwise.io/read/01j2h4fz0qbsvqxb2xgrwc69g9))
- For example, it is possible to look for [datasets that contain both text and image data](https://huggingface.co/datasets?modality=modality:3d&sort=trending) ([View Highlight](https://read.readwise.io/read/01j2h4g5rsmpy437g2he4zs54b))
- We recently released a new feature in the interface to show the number of rows of each dataset: ([View Highlight](https://read.readwise.io/read/01j2h4g9prf0b7c7kbdvyk1e07))
- [![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/datasets-filters/datasets_sizes_in_overview.png)](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/datasets-filters/datasets_sizes_in_overview.png)
  [number of rows of each dataset](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/datasets-filters/datasets_sizes_in_overview.png) ([View Highlight](https://read.readwise.io/read/01j2h4gg6r5xt7g2tegt6ffkx6))
- Following this, it is now possible to search datasets by a number of rows by specifying a minimum and maximum number of rows. This will let you look for datasets of small size to the biggest datasets that exist (for example, the ones used to pretrain LLMs).
  The information about the number of rows is available for all the datasets in [supported formats](https://huggingface.co/docs/hub/datasets-adding#file-formats). Even for the biggest datasets for which the number of rows is not included in the metadata the total number of rows is estimated accurately based on the content of the first 5GB. ([View Highlight](https://read.readwise.io/read/01j2h4gf8qk7tyc6jc6fvvvrdn))
