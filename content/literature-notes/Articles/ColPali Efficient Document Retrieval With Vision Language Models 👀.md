---
author: "[[huggingface.co]]"
title: 'ColPali: Efficient Document Retrieval With Vision Language Models 👀'
date: "2025-05-19"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn-thumbnails.huggingface.co/social-thumbnails/blog/manu/colpali.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: ColPali: Efficient Document Retrieval With Vision Language Models 👀
- URL: https://huggingface.co/blog/manu/colpali

## Highlights
- To improve the query answering capabilities of LLMs, it is often best to first search for information online or in external document sets (PDFs), before letting a LLM synthetize a grounded response (RAG). In practice, these retrieval pipelines for PDF documents have a huge impact on performance but are non-trivia ([View Highlight](https://read.readwise.io/read/01jvmkvxmknda4sv8nhswsdmd0))
- • Run Optical Character Recognition (OCR) on scanned PDFs
  • Run Document Layout Detection models to segment pages into paragraphs, figures, titles
  • Reconstruct the structure and the reading order of the page
  • Optionally, use resource intensive specialized models to caption figures, images and tables in natural language
  • Use a chunking strategy to split or merge text passages in a coherent way
  • Use a strong neural embedding model (BGE M3) to map text chunks to a semantically meaningful vector space
  • Store the vector index to be used for future retrieval ([View Highlight](https://read.readwise.io/read/01jvmkw1atqfsdr5bhzdgn6cxs))
- Although tools exist to facilitate this pipeline ([Unstructured](https://github.com/Unstructured-IO/unstructured), [Surya](https://github.com/VikParuchuri/surya)), the whole indexing process can be slow, tends to propagate errors, and struggles to take into account the more visual elements of a page (tables, figures, images but also fonts, etc..). ([View Highlight](https://read.readwise.io/read/01jvmkw8t0xa1d6zhsn5xc64br))
- Our concept ? Just embed the page image directly !
  [![](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/rvRCudun_70rI08NHuU3_.jpeg)](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/rvRCudun_70rI08NHuU3_.jpeg)
  In practice, it’s not as easy as we just made it sound ! Our method, ColPali is enabled by the latest advances in Vision Language Models, notably the PaliGemma model from the Google Zürich team, and leverages multi-vector retrieval through late interaction mechanisms as proposed in ColBERT by Omar Khattab.
  Let’s break it down, with more technical details ! ([View Highlight](https://read.readwise.io/read/01jvmkwfwj7e2e8jg68a2e42m8))
- Many retrieval systems can be broken down into two parts.
  • In the indexing phase, all the documents from the corpus are indexed in an offline fashion.
  • In the querying phase, a user query is matched with a low latency to the pre-computed document index. ([View Highlight](https://read.readwise.io/read/01jvmkwp638412j9cc1ntcht8s))
- Important requirements for efficient retrieval systems are thus (R1) good retrieving performance, (R2) reasonable indexing speeds, (R3) low latency during querying.
  During indexing, standard “bi-encoder” neural retrieval systems first parse documents to extract semantically coherent text passages, then map them to a dense vector space that aims to represent the text’s semantic meaning, and store the resulting “embeddings”. During querying, the query is converted into its dense vector representation and the document passage vectors with the biggest cosine similarity can be retrieved with a low latency. ([View Highlight](https://read.readwise.io/read/01jvmkx6r8cm86pk4rh1kxsysj))
- ![](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/La8vRJ_dtobqs6WQGKTzB.png) ([View Highlight](https://read.readwise.io/read/01jvmkxetem0ky357y4t9kh33y))
- Our method ColPali is a bit different !
  During indexing, we aim to strip away a lot of the complexity by using images (“screenshots”) of the document pages directly. ([View Highlight](https://read.readwise.io/read/01jvmky0bv2w9v3d65zqqc0vz7))
- A Vision LLM (PaliGemma-3B) encodes the image by splitting it into a series of patches, which are fed to a vision transformer (SigLIP-So400m). These patch embeddings are linearly projected and inputted as “soft” tokens to a language model (Gemma 2B), in order to obtain high-quality contextualized patch embeddings in the language model space, which we then project to a lower dimension (D=128) for more efficient storage. We thus construct and store a multi-vector document representation for each page image. ([View Highlight](https://read.readwise.io/read/01jvmky5t1ya0bxeqjydfhaam8))
- During runtime querying, a user query is embedded by the language model, to obtain token embeddings. We are able to run a ColBERT-style “[late interaction](https://arxiv.org/abs/2004.12832)” (LI) operation to efficiently match query tokens to document patches. To compute a LI(query, document) score, for each term in the query, we search for the document patch that has the most similar ColPali representation. We then sum the scores of the most similar patches for all terms of the query, to obtain the final query-document score. Intuitively, this late-interaction operation allows for a rich interaction between all terms of the query and document patches, all the while benefiting from the fast matching and offline computation offloading that more standard (bi-encoder) embedding models enable. ([View Highlight](https://read.readwise.io/read/01jvmkyc8sm24v4csa2jyks0w6))
- Although awesome [benchmarks](https://github.com/embeddings-benchmark/mteb) exist to evaluate text embedding models, we find that in many practical use cases, the prior document ingestion pipeline matters much more than the embedding model itself ! While documents often rely on visual elements to more efficiently convey information to human readers, text-only systems barely tap into these visual cues. To our knowledge, no benchmark evaluates document retrieval methods by considering both textual and visual document features like a human would. ([View Highlight](https://read.readwise.io/read/01jvmkzbf44sxgbyk1aacy1dag))
- To this end, we introduce ViDoRe, the Visual Document Retrieval Benchmark, to assess retrievers on their capacity to retrieve visually rich information in docs, with tasks spanning various topics, modalities (figures, tables, text), and languages ! ([View Highlight](https://read.readwise.io/read/01jvmkzmjqf9e87abk42zpma66))
- We initialize the Vision Language Model backbone using pretrained weights from PaliGemma and randomly initialize the final projection layer. To facilitate training, we add low-rank adapters to the language model attention weights, as well as the linear projection layers. Our training dataset is composed of (query, document image) pairs that we sourced from two main streams. On one hand, we repurposed Visual Question Answering datasets and used the original question as our query, and the associated image as the gold label. To increase the coverage and diversity of the training set, we also collected tens of thousands of permissively licensed PDF documents covering a broad range of topics, and synthetically create relevant queries using the powerful Claude Sonnet Vision model. ([View Highlight](https://read.readwise.io/read/01jvmm0c8datnygwxs4ga7kxk4))
- In total, we gather around 100k pairs, and finetune our model with an in-batch contrastive loss, by attempting to maximize the difference between the matching score of the correct (page, query) pair, and the score of the incorrect pairs. ([View Highlight](https://read.readwise.io/read/01jvmm0ew0etrpsr7a1kk5jdzc))
- On ViDoRe, ColPali outperforms all other evaluated systems, including baselines where a very strong proprietary Vision model (Claude Sonnet) is used to caption all visual elements !
  [![](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/J4VzBZpT-YlyGGEmXCHNQ.png)](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/J4VzBZpT-YlyGGEmXCHNQ.png) ([View Highlight](https://read.readwise.io/read/01jvmm0smbs2m00w9q8w1carpg))
- The difference is particularly stark on the more visually complex benchmark tasks, such as InfographicVQA, ArxivQA, and TabFQuAD representing respectively infographics, figures, and tables. However, text centric documents are also better retrieved by the ColPali model across all evaluated domains and languages, making our approach the overall best performing document-retrieval model on ViDoRe ! ([View Highlight](https://read.readwise.io/read/01jvmm0wr9h0y6vstqxdt0919k))
- Beyond speed and performance, another interesting feature of ColPali, is that it enables visualizing which patches of a document stand out w.r.t. a given query. Here the term `<hour>` matches patches containing words like "hourly" but also the x-axis representing time, showcasing good chart comprehension !
  [![](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/nxeYRnczdecUltN6hp53K.png)](https://cdn-uploads.huggingface.co/production/uploads/60f2e021adf471cbdf8bb660/nxeYRnczdecUltN6hp53K.png) ([View Highlight](https://read.readwise.io/read/01jvmm13q5z7mcr94xfy8az9pp))
