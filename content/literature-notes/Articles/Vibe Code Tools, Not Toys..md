---
author: [[Ramiro Aznar]]
title: "Vibe Code Tools, Not Toys."
date: 2025-03-31
tags: 
- articles
- literature-note
---
![rw-book-cover](https://tinybird-blog.ghost.io/content/images/2025/03/opengraph-1742850428134-1.png)

## Metadata
- Author: [[Ramiro Aznar]]
- Full Title: Vibe Code Tools, Not Toys.
- URL: https://www.tinybird.co/blog-posts/vibe-code-tools-not-toys

## Highlights
- This command automatically generates Tinybird data files that define the data sources and endpoints that would become my anomaly detection system. Here, for example, is the raw data source Tinybird created to hold all the satellite image collection information. ([View Highlight](https://read.readwise.io/read/01jqpaff6pp9nkpcss64433kp0))
- In my previous role at Planet, [I built the data infrastructure to capture metrics for satellite imaging collection](https://www.speedwins.tech/posts/planet-with-ramiro-aznar) for the largest fleet of Earth Observation satellites in the world. At the time I worked there, Planet operated roughly 200 EO satellites taking 3 million images and downlinking 25TB of data every day, creating and selling data products based on that data. In my first role, I was tasked with designing a system that would alert us to any issues with image collection. This was a critical, albeit internal, use case. Imagery was our revenue. If it went down, our product would fail. ([View Highlight](https://read.readwise.io/read/01jqpacees00m0fevbd8k073dt))
- 5 years ago, this is how I did it.
  Then: Python scripts, SQL, and dbt
  My first job was to get data from internal APIs and other telemetry systems. I put everything in the company's existing cloud relational database, which was relatively easy. But then I had to make sense of it. To do that, I needed a system to transform table rows into [metrics such as collection latency, coverage, and fulfillment for any image our customers ordered us to take](https://www.adventofdata.com/geospatial-metrics/). ([View Highlight](https://read.readwise.io/read/01jqpacrt79y8y7rxcj5zz2fwx))
- All that was left to do was deploy it to the cloud with `tb deploy --cloud`, and the anomaly detection API was live.
  Four commands, two prompts, and one functional anomaly detection API that, in my past life, took me weeks, if not months, to build. This is the way.
  All that's left is to vibe code a Next.js app or some other app to visualize and alert. I won't show you how to do that. There are a million examples on Twitter. ([View Highlight](https://read.readwise.io/read/01jqpafzkd12ctrcmq3d39mrxh))
- So, I started scripting data pipelines in Python alongside SQL files, running the executions with cronjobs. I was happy with my code, but the complexity began to grow, and a Frankenstein was born.
  I discovered scheduled queries in my relational cloud database, and while it seemed easy to use and manage, I didn't migrate to it. The lack of version control was a no go for me. Then, dbt came to the rescue. Our team started using dbt and was able to organize and manage data pipelines using software development workflows such as CI/CD and version control. ([View Highlight](https://read.readwise.io/read/01jqpadhgvwyv9587y99dpan44))
- At that moment, we started exposing our metrics to internal teams, and we quickly realized the need for a proper Anomaly Detection System. While researching approaches, [I stumbled upon an insightful Tinybird blog post that helped me develop some foundational queries](https://www.tinybird.co/blog-posts/anomaly-detection). These queries were applied to all our metrics. Using dbt’s macros and OS packages, a lot of copy and paste, and many, many CTEs, we ended up with a decent anomaly detection system. Of course, we then had to think about how to display those metrics through dashboards and an alerting system, but that is a story for another time. ([View Highlight](https://read.readwise.io/read/01jqpadz7z9fc7mzphy47van45))
- So, the long story short? I spent many months creating a complex data pipeline, combining my expertise in geospatial data, data engineering, Python, SQL, dbt, and more to create a bit of a Frankenstein internal tool. Did it work? Yes. But it also took a long time to build and perfect, and in the end, it wasn't even something core to our product, our revenue generator. ([View Highlight](https://read.readwise.io/read/01jqpae60e5hgfrqx165yafjj8))
- Now: prompting
  Around the time I left Planet and joined Tinybird, I had just started using smart autocompletes and copilots in my IDE. That was a glimpse of what was coming: The era of prompt engineering and AI. ([View Highlight](https://read.readwise.io/read/01jqpaednn4x3ra6dtgb0m24v0))
- Prompting, (which I guess everyone now calls "vibe coding"), is how you tab your way to a functional product really quickly. Of course, vibe coding isn't perfect, and many are discovering some… [problems](https://x.com/forgebitz/status/1903111698459902187) with the approach.
  The net of it is that vibe coding is great for toys, but not so great for prod. As I look online, I see a lot of people vibe coding toys: games, clone apps, etc. But recently, I discovered a better and more impactful use for vibe coding: building internal tooling. ([View Highlight](https://read.readwise.io/read/01jqpaekngje4b5f3sgx961k08))
- With the advent of AI-assisted IDEs, I decided to reimplement my [anomaly detection system](https://www.tinybird.co/blog-posts/real-time-anomaly-detection). How long might it take to rebuild it using modern tools and AI? The short answer: a day.
  Instead of spending weeks configuring multiple tools, I achieved a working prototype in a single day using [Tinybird](https://www.tinybird.co/docs/v2) with a few simple prompts. ([View Highlight](https://read.readwise.io/read/01jqpaetx6dqb8kajfm0newr71))
