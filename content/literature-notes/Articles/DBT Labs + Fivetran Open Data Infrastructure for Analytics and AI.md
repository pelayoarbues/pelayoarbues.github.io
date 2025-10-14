---
author: "[[Tristan Handy]]"
title: 'DBT Labs + Fivetran: Open Data Infrastructure for Analytics and AI'
date: "2025-10-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.sanity.io/images/wl0ndo6t/main/078229e2d49590add65df6a8f263f54c6f0ca308-1920x1280.png?rect=0,136,1920,1008&w=1200&h=630)

## Metadata
- Author: [[Tristan Handy]]
- Full Title: DBT Labs + Fivetran: Open Data Infrastructure for Analytics and AI
- URL: https://www.getdbt.com/blog/dbt-labs-and-fivetran-merge-announcement

## Highlights
- Today we are announcing that we are merging with Fivetran.
  The merged company combines for ~$600 million in ARR with well north of 10,000 customers. The majority of companies who use the cloud for their data infrastructure use one or both of these products already. ([View Highlight](https://read.readwise.io/read/01k7gw2e6mfbdvz271jgvp099y))
- I think it’s fair to say that no two companies in the modern data stack have been more joined at the hip. The products were literally built to be used together. The companies have grown up together, the relationships at all levels of both companies are longstanding, and the respect is mutual. ([View Highlight](https://read.readwise.io/read/01k7gw3bv6a03x038mtv7c4bs5))
- **dbt will still be dbt. Fivetran will still be Fivetran.** We’re not planning to rename either product, not planning any disruptive product changes, we’ll continue to provide the same types of support for the dbt Community, and are aggressively executing against our respective product roadmaps.
  In short: *if you use and love either product today, this merger will be non-disruptive*. ([View Highlight](https://read.readwise.io/read/01k7gw49bk1gm5tmcgnb93x18v))
- From the beginning, dbt and Fivetran have both attempted to make the sometimes-arcane practice of data engineering *simpler*. Fivetran’s integrations have always been push-button: flip a switch and get data, reliably, with low latency. dbt’s opinionated programming model allows less technical data practitioners to author production-grade data pipelines. ([View Highlight](https://read.readwise.io/read/01k7gw5294mjszygwxv175yh98))
- George likes to think about this like electricity: flip a switch, get data. I like to think about it like the Apple ecosystem: it all just works together, no duct tape. We both agree that far too much time is wasted in data engineering toil that creates zero business value, and we’ve built products that make the work of data engineering simpler, more automated, and more accessible. ([View Highlight](https://read.readwise.io/read/01k7gw55jsxjh7dyyp2xc56547))
- Both products have also always been focused on being open and interoperable. That is to say, allowing users to build data pipelines that work with any underlying data platform. Both dbt and Fivetran abstract away the details of the underlying data platform and the cloud it runs on, allowing users greater strategic flexibility with one of your most core IT assets. ([View Highlight](https://read.readwise.io/read/01k7gw5jjgp9fbezn9nayz5fah))
- Many users think of Fivetran as ingestion and dbt as transformation, but both products have grown meaningfully over the last several years and at this point cover a very significant footprint. The combination will form the most complete, most widely-deployed open data infrastructure platform on the market.
  Here’s what it looks like when both products come together:
  ![](https://www.getdbt.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwl0ndo6t%2Fmain%2F982bb0f03c77be352577141e5554d00757132063-1974x1152.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75) ([View Highlight](https://read.readwise.io/read/01k7gw5x5y643qasg8a373pcje))
- This architecture is what we are calling “open data infrastructure.” Open data infrastructure describes an infrastructure that is **pluggable**, relies on **integration via standards**, does not assume the usage of any one particular compute engine, and does not assume that solutions will be duct taped together from many individual products and vendors. It is more integrated than the modern data stack, and it allows for greater user choice than the all-in-one data platforms. ([View Highlight](https://read.readwise.io/read/01k7gw6mtqtx26p8fn0eh00qhv))
- If you are a dbt user, what you will likely want to know is: how does this impact dbt open source projects—most importantly, Core and Fusion? ([View Highlight](https://read.readwise.io/read/01k7gw6yq70f2kchynhbc4r6fy))
- Our collective commitments are as follows:
  • dbt Core and Fusion will both continue to be shipped under their current licenses.
  • We will continue to actively maintain dbt Core.
  • We will continue to support the dbt Community, via Slack, meetups, etc. ([View Highlight](https://read.readwise.io/read/01k7gw760ph2hn4wf51rfg8jz1))
- To give credit where credit is absolutely due: Fivetran has been a long-time contributor to the dbt open source ecosystem, authoring over 100 packages with OSS licenses that are used by thousands of teams. They have 5 full time staff now dedicated to this work. I think that the extent of their contributions here over the years has gone under-appreciated; it’s likely that they have contributed more OSS dbt code than any other organization outside of dbt Labs. ([View Highlight](https://read.readwise.io/read/01k7gw7j4crpyrjpfe74fhh346))
- I know that at least some of you reading this will be concerned that Fivetran’s historical focus on building proprietary software might make its way into the ethos of dbt, but we anticipate quite the opposite. Instead, George and I are excited to bring *more openness to the Fivetran ecosystem* with the combined company. We are already thinking about what existing software can be shipped under an OSS license (connectors? connector development kit?) and what standards we can invest in (or create). ([View Highlight](https://read.readwise.io/read/01k7gw7vcdfsntdqf91wh9yybr))
