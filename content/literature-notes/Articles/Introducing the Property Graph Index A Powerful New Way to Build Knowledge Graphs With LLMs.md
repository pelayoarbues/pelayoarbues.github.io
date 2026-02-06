---
author: "[[llamaindex.ai]]"
title: 'Introducing the Property Graph Index: A Powerful New Way to Build Knowledge Graphs With LLMs'
date: "2026-02-06"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.sanity.io/images/7m9jw85w/production/e8afb8b2b1304f867e0becfc4d5ddbbd9dd94ec1-1784x1044.png)

## Metadata
- Author: [[llamaindex.ai]]
- Full Title: Introducing the Property Graph Index: A Powerful New Way to Build Knowledge Graphs With LLMs
- URL: https://link.alphasignal.ai/1LgaVy

## Highlights
- We're thrilled to announce a new feature in LlamaIndex that expands our knowledge graph capabilities to be more flexible, extendible, and robust. Introducing the Property Graph Index! ([View Highlight](https://read.readwise.io/read/01kgtdczgrskmjtd2kb2r9gkqe))
- The Property Graph Index solves these issues. By using a labeled property graph representation, it enables far richer modeling, storage and querying of your knowledge graph. ([View Highlight](https://read.readwise.io/read/01kgtddjadnte9880j7qffcchm))
- The Property Graph Index offers several ways to extract a knowledge graph from your data, and you can combine as many as you want: ([View Highlight](https://read.readwise.io/read/01kgtde6vttg0qmsbw1yesexzp))
- **1. Schema-Guided Extraction**: Define allowed entity types, relationship types, and their connections in a schema. The LLM will only extract graph data that conforms to this schema. ([View Highlight](https://read.readwise.io/read/01kgtde96dvrm8z6z41n93xnc8))
- **2. Implicit Extraction**: Use LlamaIndex constructs to specify relationships between nodes in your data. The graph will be built based on the `node.relationships` attribute. For example, when running a document through a node parser, the `PREVIOUS`, `NEXT` and `SOURCE` relationships will be captured. ([View Highlight](https://read.readwise.io/read/01kgtdeg2z7eycd68jn06f0xwq))
- **3. Free-Form Extraction**: Let the LLM infer the entities, relationship types and schema directly from your data in a free-form manner. (This is similar to how the `KnowledgeGraphIndex` works today.) ([View Highlight](https://read.readwise.io/read/01kgtdek4372xkkva5q67xdmnk))
- By default, all graph nodes are embedded. While some graph databases support embeddings natively, you can also specify and use any vector store from LlamaIndex on top of your graph database. ([View Highlight](https://read.readwise.io/read/01kgtdenyybz0ydah4spr21d12))
- The Property Graph Index supports a wide variety of querying techniques that can be combined and run concurrently. ([View Highlight](https://read.readwise.io/read/01kgtdes8eecz3qfsyg5s1x8p9))
- **1. Keyword/Synonym-Based Retrieval**: Expand your query into relevant keywords and synonyms and find matching nodes. ([View Highlight](https://read.readwise.io/read/01kgtdevbsvrbxpw5fk57803kz))
- **2. Vector Similarity**: Retrieve nodes based on the similarity of their vector representations to your query. ([View Highlight](https://read.readwise.io/read/01kgtdexvke71c9xkp6aqn53h2))
- **3. Cypher Queries**: Use the expressive Cypher graph query language to specify complex graph patterns and traverse multiple relationships. ([View Highlight](https://read.readwise.io/read/01kgtdezz7w338y0acdy730jn6))
- Under the hood, the Property Graph Index uses a `PropertyGraphStore` abstraction to store and retrieve graph data. You can also use this store directly for lower-level control. ([View Highlight](https://read.readwise.io/read/01kgtdf70c0p0dm40hbfw4bzah))
- Traditional knowledge graph representations like knowledge triples (subject, predicate, object) are limited in expressiveness. They lack the ability to:
  • Assign labels and properties to nodes and relationships
  • Represent text nodes as vector embeddings
  • Perform both vector and symbolic retrieval ([View Highlight](https://read.readwise.io/read/01kgtddg1sn878npay4hxcq98d))
- With Property Graphs, you can:
  • Categorize nodes and relationships into types with associated metadata
  • Treat your graph as a superset of a vector database for hybrid search
  • Express complex queries using the Cypher graph query language
  This makes Property Graphs a powerful and flexible choice for building knowledge graphs with LLMs. ([View Highlight](https://read.readwise.io/read/01kgtde1vem00qewtdnsjqprt3))
