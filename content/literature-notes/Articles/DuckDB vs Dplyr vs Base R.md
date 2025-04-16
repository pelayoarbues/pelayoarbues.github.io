---
author: [[Stephen Turner]]
title: 'DuckDB vs Dplyr vs Base R'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5277de18-0343-4ad1-b719-641106652e39_2100x1500.png)

## Metadata
- Author: [[Stephen Turner]]
- Full Title: DuckDB vs Dplyr vs Base R
- URL: https://blog.stephenturner.us/p/duckdb-vs-dplyr-vs-base-r

## Highlights
- I wanted to see for myself what the fuss was about with DuckDB. [DuckDB](https://duckdb.org/) is an open-source, high-performance, in-process SQL query engine designed specifically for analytical tasks. Often referred to as the “[sqlite for analytics](https://www.youtube.com/watch?v=PFUZlNQIndo)” DuckDB is optimized for OLAP (Online Analytical Processing) workloads — data is organized by columns meaning that the database is optimized for fast reading and large, complex queries that involve filtering, aggregations, and joins. It’s “embedded” in the same sense that sqlite is — it has no external dependencies, no DBMS server to install, setup, and maintain. It doesn’t as a separate process — it runs embedded within a host process, conferring the advantage of high-speed data transfer to and from the database, or in some cases direct querying of the data without actually importing or copying any data at all. Read more at [duckdb.org/why_duckdb](https://duckdb.org/why_duckdb). ([View Highlight](https://read.readwise.io/read/01ja54f8jr7dxh118r4hzs5tpk))
- DuckDB has an R API available (see [docs](https://duckdb.org/docs/api/r.html)). You can install the duckdb package from [CRAN](https://cran.r-project.org/package=duckdb) or [GitHub](https://github.com/duckdb/duckdb-r). Why might you want to use DuckDB in R?
  1. **Large Datasets**: When you have data too large for memory, DuckDB can efficiently query data from disk without needing the entire dataset in memory.
  2. **SQL-Like Queries**: If you’re more comfortable with SQL, DuckDB allows you to run SQL queries directly on your R data frames. You can perform complex operations such as grouping, filtering, joining, and aggregating, using familiar SQL syntax. Again, without ever reading data into memory in R.
  3. **Efficient Analytical Queries**: For workloads involving large aggregations or queries on millions of rows DuckDB can handle large analytical queries while minimizing memory overhead and keeping performance high.
  4. **Stay in R!** Using DuckDB in R lets you use DuckDB for the heavy lifting analytical queries, giving you results back in a table that you can take forward for visualization or further analysis. ([View Highlight](https://read.readwise.io/read/01ja54fyezzvcdmh06vpmwdzvn))
- Data wrangling is the thorny hedge that higher powers have placed in front of the enjoyable task of actually analyzing or visualizing data. Common struggles come from importing data from ill-mannered CSV files, the tedious task of orchestrating efficient data transformation, or the inevitable management of changes to tables. Data wrangling is rife with questionable ad-hoc solutions, which can sometimes even make things worse. The design rationale of DuckDB is to support the task of data wrangling by bringing the best of decades of data management research and best practices to the world of interactive data analysis in R or Python. ([View Highlight](https://read.readwise.io/read/01ja54j1v5407w62s7cq861p55))
