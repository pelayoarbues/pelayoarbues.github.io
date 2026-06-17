---
author: "[[Peter Sobot]]"
title: 'Introducing Voyager: Spotify’s New Nearest-Neighbor Search Library'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://storage.googleapis.com/production-eng/1/2023/10/0225-Voyager-Blog-Header-1200x630-1.png)

## Metadata
- Author: [[Peter Sobot]]
- Full Title: Introducing Voyager: Spotify’s New Nearest-Neighbor Search Library
- URL: https://engineering.atspotify.com/2023/10/introducing-voyager-spotifys-new-nearest-neighbor-search-library/

## Highlights
- For the past decade, Spotify has used approximate nearest-neighbor search technology to power our personalization, recommendation, and search systems. ([View Highlight](https://read.readwise.io/read/01j2e247sg9r6z30rqc6vdpm1s))
- These technologies allow engineers and researchers to build systems that recommend similar items (like similar tracks, artists, or albums) without needing to run slow and expensive machine learning algorithms in real time. ([View Highlight](https://read.readwise.io/read/01j2e24cr2mmpg339ztea1sy6j))
- Spotify led the pack by building and open sourcing [Annoy](https://github.com/spotify/annoy), our hugely popular nearest-neighbor search library, back in 2013. Since then, Annoy has served us extremely well, powering features like Discover Weekly, Home, and countless others. ([View Highlight](https://read.readwise.io/read/01j2e24hv6r4p4f4mg733hp91k))
- he state of the art in nearest-neighbor search has advanced considerably. Annoy is now solidly [in the middle of the pack](http://ann-benchmarks.com/), and there are systems out there that can produce results **twice** as accurate in the same amount of time or similar-quality results in ***one-tenth*** the time. ([View Highlight](https://read.readwise.io/read/01j2e24r85cpz3jrazqg1bycmx))
- In addition to technical advances, the nearest-neighbor search ecosystem is growing quickly: many vendors offer nearest-neighbor search as part of their database offerings (Weaviate, Pinecone, Vespa, Chromadb), and many traditional database engines are also adding support for vector-based search (e.g., [pgvector](https://github.com/pgvector/pgvector) in PostgreSQL). ([View Highlight](https://read.readwise.io/read/01j2e2537q047sse7n6b0dc0jg))
- While accuracy and speed are two major factors in comparing nearest-neighbor technologies, others are important to Spotify’s engineers:
  • **Flexibility:** Each application of nearest-neighbor search has different needs and constraints. Being able to customize every part of the search algorithm is incredibly useful as it can allow a balance to be struck among maximum performance, maximum throughput, minimum latency, and minimum cost.
  • **Statelessness:** Many of Spotify’s systems use nearest-neighbor search in memory, enabling stateless deployments (via Kubernetes) and almost entirely removing the maintenance and cost burden of maintaining a stateful database cluster.
  • **Language support:** Backend and data engineers at Spotify prefer to deploy production systems on JVM-based languages, like Java and Scala, to maximize performance — while many machine learning use cases operate with Python. Many of the newer nearest-neighbor technologies have poor support for languages other than Python, or they provide client libraries for many languages but require running a database process alongside the deployment.
  • **Cost:** The most advanced nearest-neighbor algorithms are incredibly fast and produce extremely high-quality output. But to do so, they often require large amounts of memory. For most use cases, extreme accuracy can be sacrificed for a significant decrease in cost. ([View Highlight](https://read.readwise.io/read/01j2e25angpj1aaa420834aq0e))
- Since 2018, many teams across Spotify have been experimenting with an open source library for nearest-neighbor search called [hnswlib](https://github.com/nmslib/hnswlib) (pronounced “h-n-s-w lib”). This library offers a tenfold speed increase over Annoy, and it was very useful as we scaled up to use cases that required higher-dimensional embeddings. ([View Highlight](https://read.readwise.io/read/01j2e25pnnvb40brbkps9kcbn8))
- However, as we deployed it at scale, we identified a significant number of changes we wanted to make to hnswlib. These changes included modifications to its on-disk data format and its API and substantial architectural changes to make the codebase easier to maintain. Changes like this break backward compatibility, which is very hard to do when a software package has lots of users — and hnswlib already has more than 700,000 downloads every month. ([View Highlight](https://read.readwise.io/read/01j2e25wnxxf7b2j9qty5rm0x1))
- To work around this issue, we decided to build a new package entirely. We call it **[Voyager](https://spotify.github.io/voyager/)** — because it *searches* through vector *space*s, just like NASA’s Voyager space probes. ([View Highlight](https://read.readwise.io/read/01j2e2631yrc7rbh926r1npffs))
- Voyager is a new nearest-neighbor search library based on hnswlib, intended to succeed Annoy as Spotify’s recommended nearest-neighbor search library for production use. Voyager combines the increased accuracy and speed from HNSW with well-tested, well-documented, and production-ready bindings for both Java and Python. ([View Highlight](https://read.readwise.io/read/01j2e266n6c2z3e2y4p2x0c2yy))
- Voyager’s philosophy is to offer a rock-solid, stable, production-ready library that allows anybody to add nearest-neighbor index lookup to their application, in Python or Java. Its features include:
  • More than **10 times the speed of Annoy** (at the same recall) or up to **50% more accuracy** (at the same speed)
  • Up to **4 times less memory usage** than Annoy (thanks to E4M3 8-bit floating point)
  • **Fully multithreaded** index creation and querying
  • Fully supported **Python and Java** bindings with identical interfaces
  • Production-ready, **fault-tolerant index files** with corruption detection
  • Google Cloud Platform–compatible stream-based I/O (stream indices from Google Cloud Services!)
  • Built-in support for **string-based identifiers** (i.e., query by URI)
  • 16 times less memory usage versus hnswlib at index creation time
  • **Dependency-free install:** only NumPy (any version) in Python, and **no** Java dependencies
  • MacOS, Windows, and Linux support for both x86 and arm64 CPUs.
  • Full Python and Java documentation ([View Highlight](https://read.readwise.io/read/01j2e26c8m63k03ksddhpqjjj2))
