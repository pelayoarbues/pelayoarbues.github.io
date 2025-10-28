---
author: "[[huggingface.co]]"
title: 'Streaming Datasets: 100x More Efficient'
date: "2025-10-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/streaming_datasets/streaming_datasets.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Streaming Datasets: 100x More Efficient
- URL: https://huggingface.co/blog/streaming-datasets

## Highlights
- Loading data, especially at the terabyte scale, is a major pain in any machine learning workflow. We suffered this while training [SmolLM3](https://huggingface.co/blog/smollm3), at one point we had to wait 3 hours before each run to download enough data. ([View Highlight](https://read.readwise.io/read/01k8kkmrgt2znfj0c9qegm0c2f))
- Streaming has always been possible in the `datasets` library, but large scale training with massive datasets remained a challenge. That changes today 🔥. We spent a few months improving the backend, focusing on streaming datasets to make it faster and more efficient. ([View Highlight](https://read.readwise.io/read/01k8kkmw62p29hryy0s1vaz7k3))
- First things first: our changes are backwards compatible. You can still stream any dataset from the Hub with the same simple `streaming=True` flag. It's as easy as ever. 🚀 ([View Highlight](https://read.readwise.io/read/01k8kkn3esx7k2y22w2wfw1wk2))
- Thousands of AI developers around the world use `datasets` daily; they should just get improved performance with zero extra work.
  Streaming was a lifesaver to quickly understand a dataset, but to train models, people were usually downloading the data locally, or using a cloud storage service such as S3. That's what we were doing for training [SmolVLM](https://huggingface.co/blog/smolvlm2), we had all of our data on S3 and were streaming directly from it. ([View Highlight](https://read.readwise.io/read/01k8kkn9ysts56gr2bjdq91sgm))
- We wanted to change that, so we decided to use streaming from the Hub when we were developing [nanoVLM](https://github.com/huggingface/nanoVLM). Soon we found a big issue: our test run generated over 100,000 requests in under a minute, which got our IP blocked by the Hub! 😅 This happened because every DataLoader worker was initializing the dataset independently. As we dug deeper, we found that this creates a storm of redundant requests, many of which are unnecessary. Our changes ultimately reduced startup requests by a factor of 100. In total, our improvements delivered:
  • Data files resolution time: 10x faster
  • Startup requests: Up to 100x more efficient
  • Streaming speed: Up to 2x faster
  • In-flight requests: Up to 2x more efficient ([View Highlight](https://read.readwise.io/read/01k8kkntm4xphyypjps73b35fq))
- **1. Startup⚡️** The initial resolution of data files was creating a ton of requests. We made two major changes:
  • Persistent Data Files Cache: We are now caching the list of data files across all DataLoader workers. The first worker resolves the file list from the Hub. All others workers read directly from this local cache, virtually eliminating startup requests and slashing resolution time. No more request storms!
  • Optimized Resolution Logic: We also minimized the number of API calls required for that initial worker to fetch the file list. We now bundle the necessary requests as efficiently as possible, reducing latency even further. ([View Highlight](https://read.readwise.io/read/01k8kkp1b994637mrp5mqxhkwt))
- **2. Streaming 🏎️** To improve throughput during streaming itself, we've introduced two new features:
  • Prefetching for Parquet: We enabled prefetching for Parquet datasets. This means that while your model is processing the current chunk of data, the datasets library is already fetching the next chunk in the background. This keeps the data pipeline full and ensures your GPU is never left waiting for data.
  • Configurable Buffering: Advanced users can now fine-tune streaming performance for their specific hardware and network setup. We've exposed options to configure the buffer's block size and the prefetch volume, giving you maximum control to optimize I/O. ([View Highlight](https://read.readwise.io/read/01k8kkp67gbkg7w9d7j883hb03))
- Together, these improvements can double your data throughput, allowing you to train faster and more efficiently.
  Hugging Face uses Xet: a dedupe-based storage which enables fast deduped uploads and downloads. Unlike traditional remote storage, data transfers are faster on Xet because duplicated data is only transferred once. For example: uploading a large scale dataset to Hugging Face leverages Xet which accelerates uploads. Once the dataset is uploaded, it can be streamed right away. ([View Highlight](https://read.readwise.io/read/01k8kkpr57v2ndn5banv30xv3n))
- Deduplication for Parquet is enabled through [Parquet Content Defined Chunking (CDC)](https://huggingface.co/blog/parquet-cdc). Thanks to Parquet CDC and Xet deduplication, uploading datasets on Hugging Face is faster than on any traditional remote storage.
  This is supported by our `pyspark_huggingface` package, a Spark Data Source to read/write HF datasets. It includes Parquet CDC and Xet support, accelerating data transfers on HF dramatically ([View Highlight](https://read.readwise.io/read/01k8kkq6x0cd0yxdpvrjtcbmrx))
- Some data file formats are not supported in `datasets`, and sometimes there is a need for more control, so we made it easy to build custom streaming pipelines. This has been battle-tested in the LeRobot library to sample video frames, and in the `WebDataset` library to stream TAR archives.
  We improved the [HfFileSystem](https://huggingface.co/docs/huggingface_hub/guides/hf_file_system) in the `huggingface_hub` library to efficiently read files from remote Hugging Face dataset repositories and stream data: ([View Highlight](https://read.readwise.io/read/01k8kkqe925v092bjvg1d1ny17))
