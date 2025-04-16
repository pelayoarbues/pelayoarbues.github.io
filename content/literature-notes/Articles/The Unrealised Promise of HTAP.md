---
author: [[David Jayatillake]]
title: "The Unrealised Promise of HTAP"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://images.unsplash.com/photo-1518369623551-510c7b3c9f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHwzN3x8Y29sdW1ucyUyMGFuZCUyMHJvd3N8ZW58MHx8fHwxNzI0NDIyMTM5fDA&ixlib=rb-4.0.3&q=80&w=1080)

## Metadata
- Author: [[David Jayatillake]]
- Full Title: The Unrealised Promise of HTAP
- URL: https://davidsj.substack.com/p/the-unrealised-promise-of-htap

## Highlights
- Hybrid transactional/analytical processing (HTAP) is a data architecture that joins online transactional processing (OLTP) and online analytical processing (OLAP) workloads, allowing one system to support both processing sets. Read on as we take a deeper look into what HTAP does.[1](https://davidsj.substack.com/p/the-unrealised-promise-of-htap/#footnote-1) ([View Highlight](https://read.readwise.io/read/01j60s850qyws12ahsmxftbf1z))
- Elimination of ETL - you don’t need to move your data from OLTP to OLAP databases, you can use the same database for both. It is very costly to copy data from an OLTP database to an OLAP one and keep it in sync. It also simplifies architecture - normally an orchestrator, ELT tool and a transformation tool are needed to manage the synchronisation of data between OLTP and OLAP. With HTAP, it’s possible that just the database is needed. ([View Highlight](https://read.readwise.io/read/01j60s8qmbk7tx7kephk9naj74))
- Avoiding duplication of data - having an OLAP copy of your OLTP data introduces redundant data. Most OLTP databases already have a replica, so this is then a third copy. ([View Highlight](https://read.readwise.io/read/01j60s94chexmx12j8j4yvweft))
- Security - as we’ve seen [recently](https://davidsj.substack.com/p/apathy-torpor-and-treachery), there seems to be less care over access to OLAP data stores, than OLTP, which can lead to a legal risk from data breaches. If you store your data once then it only needs to have security policy applied to this one store. ([View Highlight](https://read.readwise.io/read/01j60s9mmmkm2mbqzem4x63tc9))
- Freshness - data is naturally fresher for OLAP queries, as they are using the same data store: for some operational use cases this is necessary. ([View Highlight](https://read.readwise.io/read/01j60s9zfcr8s2aw0kccwem0p5))
- Increasingly, Data Products need OLAP queries for production - having to use a different database to handle OLAP queries adds complexity to delivery for the reasons above and more. It would be better if a data product could use a HTAP database and have consistency of results between OLTP and OLAP queries. ([View Highlight](https://read.readwise.io/read/01j60sa6fdqrw2tg5mrye1z4ev))
- This dream of HTAP has been difficult to realise, primarily because OLTP and OLAP engines work differently. Modern OLAP engines are great at operations over columns and configure their storage this way too, but they aren’t as good at single record operations. The opposite is true for OLTP, so it’s been hard to get one engine and storage type to do both well. ([View Highlight](https://read.readwise.io/read/01j60safzr5p50ghzz015rr1ac))
