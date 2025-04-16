---
author: [[Nikos Vaggalis]]
title: "Valkey's Expanding Ecosystem"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Nikos Vaggalis]]
- Full Title: Valkey's Expanding Ecosystem
- URL: https://www.i-programmer.info/news/84-database/17540-valkeys-expanding-ecosystem.html

## Highlights
- Valkey is an open-source in-memory NoSQL data store that was forked from Redis earlier this year [when Redis changed its licensing terms](https://www.i-programmer.info/news/84-database/17085-redis-changes-license-rival-fork-launched.html). ([View Highlight](https://read.readwise.io/read/01jaq12wpeyg8edeenc6j78d9n))
- t is already showing greater potential than Redis. Why?
  Because Valkey is tweaked for performance:
  • Asynchronous I/O Threading: Enables parallel processing of commands and I/O operations, maximizing throughput and minimizing bottlenecks. 
  • Intelligent Core Utilization: Distributes I/O tasks across multiple cores based on realtime usage, reducing idle time and improving energy efficiency. 
  • Command Batching: Optimizes memory access patterns by prefetching frequently accessed data to minimize CPU cache misses, reducing memory accesses required for dictionary operations. ([View Highlight](https://read.readwise.io/read/01jaq132yv6gsqd42zs7xv7kp4))
- t takes care of replication:
  • By introducing a dual-channel replication scheme, allowing the RDB and the replica backlog to be transferred simultaneously, accelerating synchronization.
  It is observable:
  • It introduces a comprehensive per-slot metrics infrastructure, providing detailed visibility into the performance and resource usage of individual slots. This granular data helps inform decisions about resource allocation, load balancing, and performance optimization. ([View Highlight](https://read.readwise.io/read/01jaq139ghdaa42b8xs7qcvkhm))
- And finally it is true open source, released under the Berkeley Software Distribution (BSD) three-clause license. In fact, it was [Redis changing its license](https://www.i-programmer.info/news/84-database/17085-redis-changes-license-rival-fork-launched.html) that was the the pain point that prompted the Linux Foundation to kick off the Valkey project. That is, Redis version 7. 4 onwards will be dual-licensed under the Redis Source Available License (RSALv2) and Server Side Public License (SSPLv1) which both collide with the true nature open source software. Therefore Valkey began life as the fork of Redis, with the added improvements of course that render it a high-performance key-value data store that supports a variety of workloads such as caching, session stores, leaderboards, and message queues. ([View Highlight](https://read.readwise.io/read/01jaq13nsc6pa3h75bj37takds))
- Hence, it didn't take long for vendors to add peripheral support for Valkey. Amazon recently announced Valkey GLIDE, an open source client library that supports all Valkey commands. It is implemented using a core driver framework, written in Rust, but comes multi-with language specific extensions. In this release, Valkey GLIDE is available for Python, Java and Node. js. Support for GO is actively under development, with plans to include more programming languages in the future. ([View Highlight](https://read.readwise.io/read/01jaq13xv8s2ndf2z426bxn6w2))
