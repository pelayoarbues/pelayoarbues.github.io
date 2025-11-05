---
author: "[[Amazon Web Services]]"
title: 'Amazon Nova Multimodal Embeddings: State-of-the-Art Embedding Model for Agentic RAG and Semantic Search'
date: "2025-11-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2025/10/27/Nova-feat-img-2025.png)

## Metadata
- Author: [[Amazon Web Services]]
- Full Title: Amazon Nova Multimodal Embeddings: State-of-the-Art Embedding Model for Agentic RAG and Semantic Search
- URL: https://aws.amazon.com/blogs/aws/amazon-nova-multimodal-embeddings-now-available-in-amazon-bedrock/

## Highlights
- Today, we’re introducing [Amazon Nova Multimodal Embeddings](https://aws.amazon.com/ai/generative-ai/nova/), a state-of-the-art multimodal embedding model for agentic [retrieval-augmented generation (RAG)](https://aws.amazon.com/what-is/retrieval-augmented-generation/) and semantic search applications, available in [Amazon Bedrock](https://aws.amazon.com/bedrock/). It is the first unified embedding model that supports text, documents, images, video, and audio through a single model to enable crossmodal retrieval with leading accuracy. ([View Highlight](https://read.readwise.io/read/01k97st8rzzmf953zffbxk0fyc))
- Embedding models convert textual, visual, and audio inputs into numerical representations called [embeddings](https://aws.amazon.com/what-is/embeddings-in-machine-learning/). These embeddings capture the meaning of the input in a way that AI systems can compare, search, and analyze, powering use cases such as semantic search and RAG. ([View Highlight](https://read.readwise.io/read/01k97sthdkecnm3tgh9s0jprmf))
- **Evaluating Amazon Nova Multimodal Embeddings performance 
  **We evaluated the model on a broad range of benchmarks, and it delivers leading accuracy out-of-the-box as described in the following table.
  [![](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2025/10/28/nova-multimodal-embeddings-benchmarks-with-notes-1024x642.png)](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2025/10/28/nova-multimodal-embeddings-benchmarks-with-notes.png) ([View Highlight](https://read.readwise.io/read/01k97sv4rrna5qaw19ahyrw8y6))
- Nova Multimodal Embeddings supports a context length of up to 8K tokens, text in up to 200 languages, and accepts inputs via synchronous and asynchronous APIs. Additionally, it supports segmentation (also known as “chunking”) to partition long-form text, video, or audio content into manageable segments, generating embeddings for each portion. Lastly, the model oﬀers four output embedding dimensions, trained using [Matryoshka Representation Learning (MRL)](https://arxiv.org/abs/2205.13147) that enables low-latency end-to-end retrieval with minimal accuracy changes. ([View Highlight](https://read.readwise.io/read/01k97svb37t80fsk32pwmkpthh))
- Nova Multimodal Embeddings offers four output dimension options: 3,072, 1,024, 384, and 256. Larger dimensions provide more detailed representations but require more storage and computation. Smaller dimensions offer a practical balance between retrieval performance and resource efficiency. This flexibility helps you optimize for your specific application and cost requirements. ([View Highlight](https://read.readwise.io/read/01k97svta7x1z8jzrg8jcfe4sx))
