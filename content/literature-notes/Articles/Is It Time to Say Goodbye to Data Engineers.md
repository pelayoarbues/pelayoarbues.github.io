---
author: "[[SeattleDataGuy]]"
title: 'Is It Time to Say Goodbye to Data Engineers?'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbf0be093-775e-4c0b-916d-fee805f1a6e1_2304x1728.png)

## Metadata
- Author: [[SeattleDataGuy]]
- Full Title: Is It Time to Say Goodbye to Data Engineers?
- URL: https://seattledataguy.substack.com/p/is-it-time-to-say-goodbye-to-data

## Highlights
- Today, we are going to dive into an issue I’ve noticed that seems to oscillate in the data world every few years. That is the removal of data engineers. After all, we tend to get in the way and slow things down, right? ([View Highlight](https://read.readwise.io/read/01jkqh5bhw2t90bgdm004903x8))
- [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3b6895e6-3557-49c7-a893-489f28c3938b_1024x768.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3b6895e6-3557-49c7-a893-489f28c3938b_1024x768.png)
  Ever since tools like SSIS came onto the scene, vendors and business leaders have been on a mission to remove what they see as the biggest roadblock to data-driven decision-making: data engineers.
  Or their counterparts—DBAs, ETL Developers, and Data Architects. ([View Highlight](https://read.readwise.io/read/01jkqh5xaj1yrc1fgj6n8s47q9))
- To some extent, I get why the idea is appealing. When a leader requests a report, a software engineer wants to modify an application table, or a data scientist wants to explore a new dataset, who’s the one slowing down the project?
  The *data engineers.*
  With their rules. Their governance. Their insistence on building robust, scalable data pipelines instead of quick fixes.
  They really slow down the workflow!
  So, sure, from that perspective, I understand the desire to move faster. But before you go all-in on the “let’s remove the data engineers” strategy—or if you're currently fighting a business leader who’s hellbent on it—let’s take a look at what actually happens when companies try to cut out data engineering. Spoiler alert: it rarely ends well. ([View Highlight](https://read.readwise.io/read/01jkqh6zd82hex6yt0ce4c6tbk))
- [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbf0be093-775e-4c0b-916d-fee805f1a6e1_2304x1728.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbf0be093-775e-4c0b-916d-fee805f1a6e1_2304x1728.png)
  I’ve walked into multiple projects where data engineers were cut from the equation, and I’ve heard of plenty of horror stories about similar situations. At first, it seems like a win. The short-term goal is moving fast. ([View Highlight](https://read.readwise.io/read/01jkqh7ecekn6htx3j3f1qhbgw))
- Before long, your [data warehouse](https://www.youtube.com/watch?v=FxpRL0m9BcA&t=12s) ([Snowflake](https://www.youtube.com/watch?v=njttWa08pwo&t=491s) or whatever you’re using) is cluttered with an endless mess of tables, views, dashboards, and other artifacts that all tell slightly different stories. There’s no standardization, no governance, and no one treating data like a product.
  Eventually, someone—probably an overwhelmed analyst or a frustrated executive—suggests bringing in more structure. More governance. More control.
  And just like that, the pendulum swings in the other direction and the cycle repeats. ([View Highlight](https://read.readwise.io/read/01jkqh82dz9z1whffctxta7qry))
- Airbnb went through this where as they put it:
  > For several years, Airbnb did not have an official Data Engineer role. Most data engineering work was done by data scientists and software engineers who were recruited under a variety of different monikers. - ***[Data Quality at Airbnb](https://medium.com/airbnb-engineering/data-quality-at-airbnb-e582465f3ef7)***
  This worked great at first because it was fast, but eventually they ran into issues around:
  • [Data quality](https://seattledataguy.substack.com/p/how-and-why-we-need-to-implement?utm_source=publication-search)
  • [Ownership](https://seattledataguy.substack.com/p/thinking-like-an-owner-elevating?utm_source=publication-search)
  • Standards
  • [Governance](https://estuary.dev/data-governance/?utm_source=SeattleDataGuy&utm_medium=social&utm_campaign=SeattleDataGuy)
  The truth is that, speed alone isn’t the answer to your data accessibility challenges. ([View Highlight](https://read.readwise.io/read/01jkqh8d0pv6ghxvqrvjx6yea4))
- If your data strategy is built on nothing more than [unstructured data](https://www.theseattledataguy.com/what-is-unstructured-data-a-guide-to-storage-processing-and-analysis/) [swamps](https://www.reddit.com/r/dataengineering/comments/wklueu/so_today_i_learned_data_swamps_exist_anyone_ever/?rdt=32903), CSVs dumped into Azure Blob Storage, and a tangle of Python and [SQL](https://seattledataguy.substack.com/p/back-to-the-basics-with-sql-understanding?utm_source=publication-search) scripts, it’s only a matter of time before it all collapses.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2ea2835-a761-42e1-a801-fe489e4df7c9_1030x1336.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2ea2835-a761-42e1-a801-fe489e4df7c9_1030x1336.png) ([View Highlight](https://read.readwise.io/read/01jkqh8r4fk0tdyedhn8hzyy1g))
