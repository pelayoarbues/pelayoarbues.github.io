---
author: [[Pedram Navid]]
title: "The Rise of the Data Platform Engineer"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69a5a08c-a212-4bf1-bd66-8599b617b7e5_3008x2000.jpeg)

## Metadata
- Author: [[Pedram Navid]]
- Full Title: The Rise of the Data Platform Engineer
- URL: https://databased.pedramnavid.com/p/the-rise-of-the-data-platform-engineer

## Highlights
- In the late 2010s, when I was first advancing my career, the rise of the Data Scientist was everywhere. It was once the sexiest job of the 21st century, but like all inflationary things, the bubble popped and soon it was relegated from A Status Job to Yet Another Crummy Job (YACJ) ([View Highlight](https://read.readwise.io/read/01jj20609kac59ncpcha6f5t2s))
- Soon, companies realized that a team of 20 Data Scientists couldn’t be effective with access to good data, and the role of the Data Engineer was brought to the forefront. Data Engineers would be responsible for the ingestion and transformation of data and the platform that enables data scientists, while the data scientists would become consumers of that data. ([View Highlight](https://read.readwise.io/read/01jj20678q852nedqh3pe8yhj8))
- While on paper this seemed like a great division of labor, engineers famously [do not want to write ETL pipelines](https://multithreaded.stitchfix.com/blog/2016/03/16/engineers-shouldnt-write-etl/). So far back as 2016 Jeff Magnusson at Stitch Fix suggested that engineers build platforms, services, and frameworks and not ETL pipelines. ([View Highlight](https://read.readwise.io/read/01jj206f8nea4611a0p71c4024))
- Back in 2016, Hadoop clusters were still status quo. Spark and the JVM were the best we had. Scala was cool. What soon changed wasn’t that data scientists and data engineers ended up listening to Jeff, but a new breed of software was born. Cloud Data Warehouses were just becoming a natural replacement for the existing data systems. Instead of requiring a team of dedicated infrastructure engineers to scale your data requirements, you just need a dedicated credit card. ([View Highlight](https://read.readwise.io/read/01jj206pybzwdpze41tm7nbdyg))
    - Tags: [[favorite]] 
- Instead of tasking data scientists with writing ETL pipelines, we gave that task to Fivetran Stitch and other cloud providers. The birth of the Modern Data Stack was just around the corner with Snowflake’s IPO in 2020. ([View Highlight](https://read.readwise.io/read/01jj206xzsbh59rt5ysmstsyfq))
- Meanwhile, Data Scientists sat unhappy that they were using their PhDs to create dashboards. Consultants were picking up the slack until a little company called Fishtown Analytics open-sourced a tool they were using for transforming data in the warehouse. dbt was born and exploded in popularity, giving rise to the Analytics Engineer role. This role supplanted the Data Scientist, and soon the Data Scientists were freed of the chains of answering Yet Another Stakeholder Question (YASQ) and were able to move on to more important work, like **Creating Flashcards,** [founding startups](https://www.generalfolders.com/), and [getting into fights on Twitter](https://x.com/ylecun/status/1797270661192155427?lang=en). ([View Highlight](https://read.readwise.io/read/01jj207hekkyptdgmgpnsnbgg4))
- Data Engineers, however, kept writing ETL pipelines. Sure, you could pay Fivetran to sync your Salesforce data, and maybe Stripe had a native Snowflake connector, but there was no escaping the long tail of data needs. Cost constraints meant that more and more companies were looking to bring some of the offloaded work back in-house. It was harder and harder to justify spending your pennies on every row that changed in a database. ([View Highlight](https://read.readwise.io/read/01jj207s80xtbzx2hqx2wb237v))
- As the dust settled, and interest rates rose, and VCs got bored of data and moved on to data, we finally moved toward some sense of normalcy in data. Instead of hot takes, the data people continued to do the work it took the help make a business operate. We came to terms with the fact that Data Work is often just Blue Collar Work. ([View Highlight](https://read.readwise.io/read/01jj2088af16zddwqprvdsa4nx))
- Instead of hiring 20 data scientists and asking them to ‘find insights’, we had smaller more focused teams that worked against delivering actual value to different lines of business. From building data models that made it easier to self-serve using modern BI tools, to creating recommendation models or predicting churn, the bread-and-butter stuff continued. ([View Highlight](https://read.readwise.io/read/01jj208q1725pdh58tjtrn78f0))
- I believe we’ve passed the trough of disillusionment and are entering the plateau of productivity. We’ve made a lot of progress in the last ten to fifteen years in data. The tooling is better than it has ever been, and it’s possible to do so much more with much less. DuckDB on a laptop is replacing MS Access on a corporate desktop. This is a **good** thing. ([View Highlight](https://read.readwise.io/read/01jj2093xbck8mj3zggpy3nftr))
- With that rise of productivity among data professionals of all kinds, from ML Engineers to Analytics Engineers, to Data Scientists and beyond, pressure is starting to build on Data Engineers.
  There are two ways to react to that pressure. The easiest is to hire more data engineers to support your business, but we are fortunate that we live in a high-interest rate era.
  High interest rates cure all ailments. ([View Highlight](https://read.readwise.io/read/01jj209rzf204wac43cd1qwdng))
- Instead, Data Engineers are coming back to the original sin of Data Engineering, building bespoke custom pipelines for your downstream consumers, and they’re solving it the same way we were trying to solve it 10 years ago: building platforms, frameworks, and services.
  Part of the problem, I think, is the title Data Engineer simply beckons you to build pipelines. The next evolution of the role is more akin to a Data Platform Engineer.
  This is someone who is tasked not with building ETL pipelines, but with making it possible for their various consumers to build any pipeline they need without having to resort to a complex higher language.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7ba08047-1348-4024-9afa-a980a54ef16b_1200x671.jpeg)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7ba08047-1348-4024-9afa-a980a54ef16b_1200x671.jpeg) ([View Highlight](https://read.readwise.io/read/01jj20afyhy8qgsmp4btv1qa65))
- What I like the most about this is that it finally gives Data Engineers something to look forward to. Career progression for Data Engineers often felt like it was simply bigger data and more complex pipelines, but most Data Engineers I know prefer software engineering to data analysis, and pipeline building is by its very nature closer to data analysis than building software. ([View Highlight](https://read.readwise.io/read/01jj226xrxtjf9ca4cewye6bf9))
