---
author: [[quansight.org]]
title: 'The Polars vs Pandas Difference Nobody Is Talking About'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://labs-qce3gh3dh-quansight.vercel.app/posts/dataframe-group-by/featured.jpg)

## Metadata
- Author: [[quansight.org]]
- Full Title: The Polars vs Pandas Difference Nobody Is Talking About
- URL: https://labs.quansight.org/blog/dataframe-group-by

## Highlights
- There was quite some talk of Polars - some people even gathered together for a Polars-themed dinner! It's certainly nice to see people talking about it, and the focus tends to be on features such as:
  • lazy execution
  • Rust
  • consistent handling of null values
  • multithreading
  • query optimisation ([View Highlight](https://read.readwise.io/read/01je20vyvjbr5dyw7akymy2b2f))
- Yet there's one innovation which barely ever gets a mention: non-elementary group-by aggregations. ([View Highlight](https://read.readwise.io/read/01je20w1jdbd8j9qd3bdz23zcr))
- for such a simple task as this one, the pandas API is quite nice. All we had to do was:
  1. select which columns we're grouping by
  2. select the column(s) we want to aggregate
  3. specify an elementary aggregation function
  Let's try something else: "find the maximum value of 'views', where 'sales' is greater than its mean, per 'id'".
  Unfortunately, the pandas API has no way to express this, meaning that no library which copies the pandas API can truly optimise such an operation in the general case. ([View Highlight](https://read.readwise.io/read/01je20x5e6jv4ah2etxexsphm0))
- You might be wondering whether we can just do the following:
  `df.groupby('id').apply( lambda df: df[df['sales'] > df['sales'].mean()]['views'].max() `
  However, that uses a Python `lambda` function and so is generally going to be inefficient.
  Another solution one might come up with is this one:
  `df[df['sales'] > df.groupby('id')['sales'].transform('mean')].groupby('id')['views'].max() `
  It's not as bad as the `apply` solution above, but it still looks overly complicated and requires two group-bys.
  There's actually a third solution, which:
  • relies on `GroupBy` caching its groups
  • performs in-place mutation of the original dataframe
  • uses the fact that `'max'` skips over missing values
  Realistically, few users would come up with it (most would jump straight to `apply`), but for completeness, we present it:
  `gb = df.groupby("id") mask = df["sales"] > gb["sales"].transform("mean") df["result"] = df["views"].where(mask) gb["result"].max()` ([View Highlight](https://read.readwise.io/read/01je20xpxjwvgrn7a2d32q5jap))
- The Polars API lets us pass [expressions](https://docs.pola.rs/user-guide/expressions/) to `GroupBy.agg`. So long as you can express your aggregation as an expression, you can use it in a group-by setting. In this case, we can express "the maximum value of 'views' where 'sales' is greater than its mean" as
  `pl.col('views').filter(pl.col('sales') > pl.mean('sales')).max() `
  Then, all we need to do is pass this expression to `GroupBy.agg`:
  `df.group_by('id').agg( pl.col('views').filter(pl.col('sales') > pl.mean('sales')).max() `
  Wonderful! Like this, we can express the operation cleanly and without hacks, meaning that any dataframe implementation which follows the Polars API has the possibility to evaluate this efficiently. ([View Highlight](https://read.readwise.io/read/01je20y5w01kwdxgp82wcgx8zh))
    - Tags: [[favorite]] 
- pandas is a wonderful tool which solves a lot of real problems for a lot of real people. However, when new dataframe libraries insist on copying its API, they are stunting their own potential. If an API doesn't allow for an operation to be expressed and users end up using `apply` with custom Python lambda functions, then no amount of acceleration is going to make up for that. ([View Highlight](https://read.readwise.io/read/01je20ypsnmapv5wv88b9x9bd9))
- > came for the speed, but stayed for the syntax
  is a common refrain among Polars users. ([View Highlight](https://read.readwise.io/read/01je20zcs4by1rcdsk611aztwc))
