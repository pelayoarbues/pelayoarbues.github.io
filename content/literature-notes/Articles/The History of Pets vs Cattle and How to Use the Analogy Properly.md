---
author: [[Randy Bias]]
title: 'The History of Pets vs Cattle and How to Use the Analogy Properly'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](http://cloudscaling.com/assets/images/cloudscaling_logo.png)

## Metadata
- Author: [[Randy Bias]]
- Full Title: The History of Pets vs Cattle and How to Use the Analogy Properly
- URL: https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/

## Highlights
- , I put pets vs cattle in the context of cloud, and second I emphasized the disposability of cattle and the uniqueness of pets. This was much more important than whether you scale-up or scale-out. Those are, I believe, side effects, of how you view a server. If you view a server (whether metal, virtualized, or containerized) as inherently something that can be destroyed and replaced at any time, then it’s a member of the herd. If, however, you view a server (or a pair of servers attempting to appear as a single unit) as indispensable, then it’s a pet. ([View Highlight](https://read.readwise.io/read/01hb6wv8q7xybqt91fz2nngts6))
- In the old way of doing things, we treat our servers like pets, for example Bob the mail server. If Bob goes down, it’s all hands on deck. The CEO can’t get his email and it’s the end of the world. In the new way, servers are numbered, like cattle in a herd. For example, www001 to www100. When one server goes down, it’s taken out back, shot, and replaced on the line. ([View Highlight](https://read.readwise.io/read/01hb6wtzwf90mf978g10rre0hy))
- Pets
  > Servers or server pairs that are treated as indispensable or unique systems that can never be down. Typically they are manually built, managed, and “hand fed”. Examples include mainframes, solitary servers, HA loadbalancers/firewalls (active/active or active/passive), database systems designed as master/slave (active/passive), and so on. ([View Highlight](https://read.readwise.io/read/01hb6ww9v6vqz1rqnar3jx6zc9))
- Cattle
  > Arrays of more than two servers, that are built using automated tools, and are designed for failure, where no one, two, or even three servers are irreplaceable. Typically, during failure events no human intervention is required as the array exhibits attributes of “routing around failures” by restarting failed servers or replicating data through strategies like triple replication or erasure coding. Examples include web server arrays, multi-master datastores such as Cassandra clusters, multiple racks of gear put together in clusters, and just about anything that is load-balanced and multi-master. ([View Highlight](https://read.readwise.io/read/01hb6wwk0dryncxg81hpsdhr6d))
