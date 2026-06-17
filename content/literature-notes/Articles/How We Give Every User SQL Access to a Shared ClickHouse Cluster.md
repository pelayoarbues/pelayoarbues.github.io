---
author: "[[Matt Aitken]]"
title: 'How We Give Every User SQL Access to a Shared ClickHouse Cluster'
date: "2026-03-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://trigger.dev/blog/how-trql-works/how-trql-works.png)

## Metadata
- Author: [[Matt Aitken]]
- Full Title: How We Give Every User SQL Access to a Shared ClickHouse Cluster
- URL: https://trigger.dev/blog/how-trql-works?mkt_tok=MjM4LUZQQy0zMTcAAAGgpejw6Yh3uayXB1aVI1KENlhNgg_umsHljbMB12R574AAjgzxb4QrhSveFLVXvdYN_ALfhpsNF6SOn-SlCB8HWmx5hlwa6Via40ydVMKEDw

## Highlights
- How do you let users write arbitrary SQL against a shared multi-tenant analytical database without exposing other tenants' data or letting a rogue query take down the cluster?
  That's the problem we needed to solve for [Query & Dashboards](https://trigger.dev/changelog/query-and-dashboards). The answer is TRQL (Trigger Query Language), a SQL-style language that compiles to secure, tenant-isolated [ClickHouse](https://clickhouse.com/) queries. Users write familiar SQL. TRQL handles the security, the abstraction, and the translation. ([View Highlight](https://read.readwise.io/read/01kmb5hxr8b4w40yrqx9z0w3nk))
- This post is a deep dive into how it all works. We'll cover the language design, the compilation pipeline, the schema system, and the features that make TRQL more than just a SQL passthrough. ([View Highlight](https://read.readwise.io/read/01kmb5j8fhacjxxk77ybb86dpb))
- A DSL (domain-specific language) is a language designed for a particular problem domain. CSS is a DSL for styling. SQL is a DSL for querying databases. TRQL is a DSL for querying Trigger.dev data. ([View Highlight](https://read.readwise.io/read/01kmb5jpmysq3w1nxh64fkkdy0))
- We could have exposed raw ClickHouse SQL directly. But there are three reasons we didn't:
  **1. The language itself is a security boundary.** By defining our own grammar, we control exactly what operations are possible. `INSERT`, `UPDATE`, `DELETE`, `DROP`, and any ClickHouse function we haven't explicitly allowed simply don't exist in the language. This isn't validation that rejects dangerous queries; the parser physically cannot produce them. We cover this in more detail in the ANTLR section below.
  **2. Tenant isolation must be compiler-enforced, not user-trusted.** In a multi-tenant system, every query must be scoped to the requesting organization. If we relied on users including `WHERE organization_id = '...'` in their queries, a missing filter would leak data across tenants. TRQL injects these filters automatically during compilation. There's no way to opt out.
  **3. Internal database details should be hidden.** Our ClickHouse tables have names like `trigger_dev.task_runs_v2` and columns like `cost_in_cents` and `base_cost_in_cents`. Users shouldn't need to know any of that. TRQL lets them write `SELECT total_cost FROM runs` while the compiler handles the translation.
  **4. We need features that don't exist in ClickHouse.** Virtual columns, automatic time bucketing, value transforms, and rendering metadata are all things we've built into TRQL's schema layer. A raw SQL passthrough couldn't provide any of this. ([View Highlight](https://read.readwise.io/read/01kmb5k6es5gz8mwv64h2z4x3r))
- eir Python implementation but evolved significantly during development to handle our specific use cases. ([View Highlight](https://read.readwise.io/read/01kmb5kq6qp296a2zennn2csne))
- Before we get into the language itself, it helps to understand the target. We chose ClickHouse as the analytical backend because it excels at exactly this kind of workload:
  • **Columnar storage**: Queries only read the columns they need, so a query selecting `status` and `total_cost` doesn't touch `output`, `error`, or any other column
  • **Incredible performance**: Handles billions of rows with sub-second query times for typical aggregations
  • **Rich SQL**: JSON extraction, complex aggregations, percentile functions, text search, and more
  • **Battle-tested**: Used by Cloudflare, Uber, eBay, and many others at scale ([View Highlight](https://read.readwise.io/read/01kmb69mv0we5vtdsp9pxk2xsj))
- TRQL is parsed using [ANTLR](https://www.antlr.org/), a parser generator that takes a formal grammar definition and produces a lexer and a parser. The lexer breaks the raw query text into tokens (keywords, identifiers, operators, string literals). The parser takes those tokens and arranges them into a structured tree based on the grammar rules. You write the grammar, ANTLR generates the code for both. ([View Highlight](https://read.readwise.io/read/01kmb69v2rzvrm9gcp4dk6p5h7))
- Our ANTLR grammar targets TypeScript and produces a full abstract syntax tree (AST) for each query. The AST is a structured tree representation of the query that the compiler can inspect, validate, and transform. Every subsequent step in the pipeline operates on this AST rather than on raw text.
  For example, the query `SELECT task_identifier, SUM(total_cost) FROM runs WHERE status = 'Failed'` produces this tree:
  Each node in the tree is something the compiler can reason about. It can check that `runs` is a valid table, that `task_identifier` and `total_cost` exist on that table, that `SUM` is an allowed function, and that `'Failed'` is a valid value for the `status` column. ([View Highlight](https://read.readwise.io/read/01kmb6a665s6n22918tpqezd7v))
- Once parsed, the AST goes through a series of transformations before it becomes executable ClickHouse SQL. Here's each step:
  1. **Parse**: The TRQL query is parsed into an AST using ANTLR. Only constructs that exist in the grammar can make it this far. Anything else is a syntax error.
  2. **Schema validation**: We walk the AST and check every identifier against the table schemas. Does the table exist? Do all the referenced columns exist on that table? Are the functions valid? Are the argument types correct? If you write `WHERE status = 123` but `status` is a string column with allowed values, this step catches it.
  3. **Tenant isolation**: We inject tenant-specific filters into the `WHERE` clause. At a minimum, every query gets an `organization_id` filter. Depending on the query scope, we also add `project_id` and `environment_id` filters. These are added to the AST itself, so they're baked into the query structure before any SQL is generated. Without this step, any user could read any other organization's data.
  4. **Time restrictions**: We add time bounds to prevent unbounded scans. Without this, a simple `SELECT * FROM runs` would attempt to scan the entire table history. The maximum queryable time range varies by plan on Trigger.dev Cloud.
  5. **Parameterize values**: All literal values in the query (strings, numbers, dates) are extracted from the AST and replaced with named parameters like `{tsql_val_0: String}`. The actual values are passed separately to ClickHouse rather than being interpolated into the SQL string. Combined with the grammar restrictions from the parsing step, this means the generated ClickHouse SQL is always structurally safe.
  6. **Generate ClickHouse SQL**: The transformed AST is "printed" into ClickHouse-compatible SQL. This is where virtual columns are expanded to their real expressions, table names are translated, and TRQL-specific functions are compiled to their ClickHouse equivalents.
  7. **Execute**: The generated SQL is executed against ClickHouse in read-only mode. On Trigger.dev Cloud, queries run against a dedicated read-only replica to avoid impacting write performance.
  8. **Return results**: Results come back in JSON format, along with column metadata that tells the UI how to render each value. ([View Highlight](https://read.readwise.io/read/01kmb6b2j6xv1pcqjdmx9d2drw))
- For example, the query `SELECT task_identifier, SUM(total_cost) FROM runs WHERE status = 'Failed'` produces this tree:
  ` SelectStatement ├── SelectList │ ├── SelectListItem │ │ └── ColumnReference: task_identifier │ └── SelectListItem │ └── AggregateFunctionCall: SUM │ └── ColumnReference: total_cost ├── FromClause │ └── TableReference: runs └── WhereClause └── ComparisonExpression (=) ├── ColumnReference: status └── StringLiteral: 'Failed' ` ([View Highlight](https://read.readwise.io/read/01kmb6dhhy37kwdqvgh07de7z9))
- Here's a simple TRQL query that finds the cost of each task:
  ` SELECT task_identifier, SUM(total_cost) AS cost FROM runs GROUP BY task_identifier ` ([View Highlight](https://read.readwise.io/read/01kmb6e1bwxv4xf8571rmhypgm))
- Virtual columns
  Some of the most useful columns in TRQL don't exist in ClickHouse at all. They're defined as expressions that the compiler expands during query generation.
  `total_cost` is a good example. In ClickHouse, costs are stored as two separate integer columns: `cost_in_cents` (compute cost) and `base_cost_in_cents` (invocation cost). The schema defines `total_cost` as:
  ` total_cost: { name: "total_cost", expression: "(cost_in_cents + base_cost_in_cents) / 100.0", // ... } ` ([View Highlight](https://read.readwise.io/read/01kmb6f3b7qprcrvrbze9bdpjz))
