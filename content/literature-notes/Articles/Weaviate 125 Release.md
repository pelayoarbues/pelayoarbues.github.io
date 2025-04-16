---
author: [[Blog]]
title: "Weaviate 125 Release"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://weaviate.io/assets/images/hero-4815a9ea04f765f7b14bfea585839f20.png)

## Metadata
- Author: [[Blog]]
- Full Title: Weaviate 125 Release
- URL: https://weaviate.io/blog/weaviate-1-25-release

## Highlights
- ![](https://weaviate.io/assets/images/dynamic-f5d063988078ec68d0f3d7428139d909.png) ([View Highlight](https://read.readwise.io/read/01hz3gn8hc5m495mchw5pnr3v2))
- With version 1.25 we’re announcing an integration with OctoAI which will make it even easier for users to access many open source embedding and language models such as Llama3-70b, Mixtral-8x22b and more. ([View Highlight](https://read.readwise.io/read/01hz3gphaf44sfdwmpgbfht9vh))
- We are releasing two integrations: text2vec-octoai and generative-octoai that integrate Weaviate and the OctoAI service. OctoAI provides hosted inference services for embedding models and large language models. ([View Highlight](https://read.readwise.io/read/01hz3gpp0vfdqz0xkgdxhmpksp))
- The multi2vec-palm integration model is an update to v1.24 that lets you use Google’s hosted embedding models to embed multimodal data. ([View Highlight](https://read.readwise.io/read/01hz3gptgad65102khxetnpn8n))
- Prior to the release of this model if users wanted to embed multimodal data they’d have to self-host the embedding model on their own compute but with multi2vec-palm building multimodal applications is easier than ever. ([View Highlight](https://read.readwise.io/read/01hz3gq1pqy852zbkng54b1wg2))
- Using Google’s [multimodal embedding model](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings) you can now embed text, images and videos all into the same vector space and perform cross-modal retrieval! ([View Highlight](https://read.readwise.io/read/01hz3gq4pqyfa0580fwc5hpck7))
- Standalone vector searches use the [`nearText`](https://weaviate.io/developers/weaviate/search/similarity#search-with-text) and [`nearVector`](https://weaviate.io/developers/weaviate/search/similarity#search-with-a-vector) similarity operators to fine tune search results. Since [hybrid search](https://weaviate.io/developers/weaviate/search/hybrid) combines the strengths of vector search and keyword search, many of you asked for this feature in hybrid search too. It's here! The 1.25 release adds the [similarity operators](https://weaviate.io/developers/weaviate/search/hybrid#vector-similarity-search) to the vector component of hybrid search. ([View Highlight](https://read.readwise.io/read/01hz3grb91x42vf4dhqemgjamj))
