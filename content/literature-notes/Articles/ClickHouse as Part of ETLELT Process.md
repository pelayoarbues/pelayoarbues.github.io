---
author: "[[Nikolai Potapov]]"
title: 'ClickHouse as Part of ETL/ELT Process'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*oD1bF9ljXln39pBGrKR3iA.jpeg)

## Metadata
- Author: [[Nikolai Potapov]]
- Full Title: ClickHouse as Part of ETL/ELT Process
- URL: https://blog.devgenius.io/clickhouse-as-part-of-etl-elt-process-7ef1edf2ae7c

## Highlights
- When working with data, we often perform various manipulations on it. The process of extraction, transformation, and loading is known as ETL, and if we transform after loading, it’s called ELT. Of course, we not only want to efficiently store data for analytics but also process it efficiently. This is where a column-oriented database management system for online analytical processing, such as ClickHouse, can help. However, ClickHouse not only excels at aggregating large amounts of data and computing complex metrics in fractions of a second but also has the ability to extract data from various sources and load it, opening up a multitude of possibilities. In this short article, I will share my thoughts on this matter. ([View Highlight](https://read.readwise.io/read/01j12py19627z3t8ae46ndkqwf))
- This functionality can be utilized for transformations and simplifying the codebase. Parameterized views are similar to regular views, but they can be created with parameters that can be passed when called upon. Since these views are stored in ClickHouse, they can be directly used in your code within SQL queries. Additionally, you can automate your routine analytics queries by only changing the parameter, which will accelerate your data exploration and relieve your team from writing repetitive queries. ([View Highlight](https://read.readwise.io/read/01j12py9tveyrb1vwbc7r0y3tg))
- This functionality can be used not only for transformation but also for data loading within the database. Materialized views in ClickHouse are implemented more like insertion triggers with the ability to store data. That is, after inserting a new batch of data into the source table, a trigger is activated, which moves this batch of data according to the SELECT queries of your view into the target table. For example, as part of the data cleansing process or for more complex transformations depending on your business needs. ([View Highlight](https://read.readwise.io/read/01j12pz46p2ygezj54e5n2cj64))
- ClickHouse also offers various integration capabilities with external sources. These are built-in features that can help you read/write data from another database, table, or data warehouse. When considering this from the perspective of building an ETL process, it involves data extraction and loading. Although it’s worth noting that for most sources, only a read mode is implemented, meaning extraction only. Database Engines allow connecting to databases on a remote server, and currently, this is only implemented for PostgreSQL, MySQL, and SQLite. Accordingly, Table Engines implement interaction at the level of tables or file paths (S3, Delta Lake etc). Table Functions provide a tabular interface only for reading from special sources. All integrations have been divided into three levels of support: Core integrations, Partner integrations, Community integrations. ([View Highlight](https://read.readwise.io/read/01j12q05bj9ytv4bm6kewppaja))
