---
author: [[mistral.ai]]
title: "Mistral OCR"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://cms.mistral.ai/assets/060bdeb1-fbff-419c-b2ae-b32b5e441864)

## Metadata
- Author: [[mistral.ai]]
- Full Title: Mistral OCR
- URL: https://mistral.ai/fr/news/mistral-ocr

## Highlights
- Today, we’re at the precipice of the next big leap—to unlock the collective intelligence of all digitized information. Approximately [90%](https://resources.data.gov/glossary/unstructured-data/) of the world’s organizational data is stored as documents, and to harness this potential, we are introducing [Mistral OCR](https://docs.mistral.ai/capabilities/document/).
  Mistral OCR is an Optical Character Recognition API that sets a new standard in document understanding. Unlike other models, Mistral OCR comprehends each element of documents—media, text, tables, equations—with unprecedented accuracy and cognition. It takes images and PDFs as input and extracts content in an ordered interleaved text and images. ([View Highlight](https://read.readwise.io/read/01jp5ezttc58wwbzzztq2xg888))
- As a result, Mistral OCR is an ideal model to use in combination with a RAG system taking multimodal documents (such as slides or complex PDFs) as input. ([View Highlight](https://read.readwise.io/read/01jp5ezzm3tsda9djqwswcejjs))
- We have made Mistral OCR as the default model for document understanding across millions of users on Le Chat, and are releasing the API *mistral-ocr-latest* at 1000 pages / $ (and approximately double the pages per dollar with batch inference). The API is available today on our developer suite [la Plateforme](http://console.mistral.ai), and coming soon to our cloud and inference partners, as well as on-premises. ([View Highlight](https://read.readwise.io/read/01jp5f02a0gvak06zzzzjxfy95))
- Mistral OCR excels in understanding complex document elements, including interleaved imagery, mathematical expressions, tables, and advanced layouts such as LaTeX formatting. The model enables deeper understanding of rich documents such as scientific papers with charts, graphs, equations and figures.
  Below is an example of the model extracting text as well as imagery from a given PDF into a markdown file. You can access the notebook [here](https://colab.research.google.com/drive/11NdqWVwC_TtJyKT6cmuap4l9SryAeeVt?usp=sharing). ([View Highlight](https://read.readwise.io/read/01jp5f0cn0m983kkjz8yt1je5k))
- Mistral OCR has consistently outperformed other leading OCR models in rigorous benchmark tests. Its superior accuracy across multiple aspects of document analysis is illustrated below. We extract embedded images from documents along with text. The other LLMs compared below, do not have that capability. For a fair comparison, we evaluate them on our internal “text-only” test-set containing various publication papers, and PDFs from the web; below:
  Model
  Overall
  Math
  Multilingual
  Scanned
  Tables
  Google Document AI
  83.42
  80.29
  86.42
  92.77
  78.16
  Azure OCR
  89.52
  85.72
  87.52
  94.65
  89.52
  Gemini-1.5-Flash-002
  90.23
  89.11
  86.76
  94.87
  90.48
  Gemini-1.5-Pro-002
  89.92
  88.48
  86.33
  96.15
  89.71
  Gemini-2.0-Flash-001
  88.69
  84.18
  85.80
  95.11
  91.46
  GPT-4o-2024-11-20
  89.77
  87.55
  86.00
  94.58
  91.70
  Mistral OCR 2503
  94.89
  94.29
  89.55
  98.96
  96.12 ([View Highlight](https://read.readwise.io/read/01jp5f162aa1a715rb3rjjv3er))
- Since Mistral’s founding, we have aspired to serve the world with our models, and consequently strived for multilingual capabilities across our offerings. Mistral OCR takes this to a new level, being able to parse, understand, and transcribe thousands of scripts, fonts, and languages across all continents. This versatility is crucial for both global organizations that handle documents from diverse linguistic backgrounds, as well as hyperlocal businesses serving niche markets. ([View Highlight](https://read.readwise.io/read/01jp5f1952qjw83eb911x42y8g))
- Being lighter weight than most models in the category, Mistral OCR performs significantly faster than its peers, processing up to 2000 pages per minute on a single node. The ability to rapidly process documents ensures continuous learning and improvement even for high-throughput environments. ([View Highlight](https://read.readwise.io/read/01jp5f1e5xrqcckfpp7b45fnpm))
- Doc-as-prompt, structured output
  Mistral OCR also introduces the use of documents as prompts, enabling more powerful and precise instructions. This capability allows users to extract specific information from documents and format it in structured outputs, such as JSON. Users can chain extracted outputs into downstream function calls and build agents.
  Available to self-host on a selective basis
  For organizations with stringent data privacy requirements, Mistral OCR offers a self-hosting option. This ensures that sensitive or classified information remains secure within your own infrastructure, providing compliance with regulatory and security standards. If you would like to explore self-deployment with us, please [let us know](https://mistral.ai/). ([View Highlight](https://read.readwise.io/read/01jp5f1qjp7hgyjnnb5tjzfe23))
