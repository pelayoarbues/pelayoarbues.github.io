---
author: "[[Simon Willison]]"
title: 'Database Remote-Copy Tool for SQLite'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Database Remote-Copy Tool for SQLite
- URL: https://simonwillison.net/2024/Oct/4/sqlite-rsync/#atom-everything

## Highlights
- ([via](https://lobste.rs/s/2ngsl1/database_remote_copy_tool_for_sqlite)) Neat new SQLite utilities often show up in branches of the SQLite repository. Here's a new one from last month: `sqlite3-rsync`, providing tools for efficiently creating and updating copies of WAL-mode SQLite databases on either the same machine or across remote machines via SSH. ([View Highlight](https://read.readwise.io/read/01j9m7h9088b456sxyjne2d8yw))
- The tool takes full advantage of [SQLite's WAL mode](https://sqlite.org/wal.html) - when you run it you'll get an exact snapshot of the database state as it existed at the moment the copy was initiated, even if the source database continues to apply changes. ([View Highlight](https://read.readwise.io/read/01j9m7h24fvhxhne5p4b7mj3aa))
