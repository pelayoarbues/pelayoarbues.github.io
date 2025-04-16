---
author: [[Chris Riccomini]]
title: 'It''s Time to Merge Analytics and Data Engineering'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb06b7af9-2e96-432f-b24a-392e65d338b4_1024x1024.webp)

## Metadata
- Author: [[Chris Riccomini]]
- Full Title: It's Time to Merge Analytics and Data Engineering
- URL: https://materializedview.io/p/merge-analytics-and-data-engineers

## Highlights
- Data pipelines are commoditized and analytics engineers don't provide enough value. ([View Highlight](https://read.readwise.io/read/01jd388qfrb5h8kzd47kjr1gsp))
- I [posted a Bluesky thread this weekend](https://bsky.app/profile/chris.blue/post/3lb3lprtbr22v) arguing that analytics engineers and data engineers should be folded back into a single role. I decided to make the argument after coming across ([View Highlight](https://read.readwise.io/read/01jd37xzks7ymqw3pxd52x84rn))
- In short, my answer is that analytics—not as an industry or as a technology ecosystem, but *as a discipline*—might not work. The average company may never be able to make better decisions by hiring a team of average analysts. We can [make dashboards](https://benn.substack.com/p/data-is-for-dashboards) and be [operational accountants](https://benn.substack.com/p/the-end-of-our-purple-era). But the fun, exploratory, “valuable” work may always be an indulgent, empty dessert, and never the entrée we want it to be. —
  [Benn Stancil](https://open.substack.com/users/5667744-benn-stancil?utm_source=mentions), [Disband the analytics team](https://benn.substack.com/p/disband-the-analytics-team) ([View Highlight](https://read.readwise.io/read/01jd37ycpbp5446qm03bbmwpg2))
- I’ve [long held](https://bsky.app/profile/archive.chris.blue/post/3l7htj4huw42b) that creating the “analytics engineer” role was a mistake. [dbtLabs says](https://www.getdbt.com/what-is-analytics-engineering), “Analytics engineers provide clean data sets to end users, modeling data in a way that empowers end users to answer their own questions.” I don’t believe that this set of activities is enough value to justify a full headcount; it’s is too limited in scope and too far removed from revenue generation. ([View Highlight](https://read.readwise.io/read/01jd37z6942stt3wyxpmbtdzw2))
- Extracting, transforming, and loading (ETL’ing) data used to be handled by one team: the data warehouse team. But several trends have encouraged a schism in warehouse teams. Some—data engineers—now work on data pipelines (extract and load) while others work on data marts (“clean data sets”, as dbtLabs calls them). ([View Highlight](https://read.readwise.io/read/01jd3808d8z3aj1f2nav2g3tgj))
- In short, data engineers do the E and L, and analytics engineers do the T. Many trends contributed to this bifurcation.
  • We switched from ETL to ELT when we adopted data lake architectures. Dumping garbage into an object store made it easy for data engineers to ignore transformations and gave analytics engineers something to do.
  • Similarly, adopting data integration with Kafka and Kafka Connect greatly expanded the number (and importance) of data pipelines in an organization, which gave the data engineers something to do as well.
  • [Shift-left](https://en.wikipedia.org/wiki/Shift-left_testing) became a data philosophy that encouraged everyone to be their own analyst, which left analysts squeezed.
  • [ZIRP](https://en.wikipedia.org/wiki/Zero_interest-rate_policy) ended, which made CFOs take a hard look at the cost of analyst and data teams, which further squeezed analysts.
  • dbtLabs, [Motherduck](https://motherduck.com), and other [MDS vendors](https://www.moderndatastack.xyz/) were all too willing to create a new role to sell their products, which dovetailed nicely with analyst’s desire to [be engineers and get paid more](https://bsky.app/profile/chad-isenberg.bsky.social/post/3lb42pnf2ms2t).
  • LLMs are replacing analysts in some cases. Screech all you want, but it’s happening. There are dozens of data chatbots now ([Cimba.ai](https://www.cimba.ai/)﹩, [DataChat](https://datachat.ai/), [Julius.ai](https://julius.ai/)), and LLMs write pretty good SQL. ([View Highlight](https://read.readwise.io/read/01jd380k64gkpx578n4qak922w))
- We’re in a new world now, though. ZIRP is gone, most of the connectors that data engineers were working on have now been built, and there are [many](https://fivetran.com) [vendors](https://airbyte.com) [you](https://www.decodable.co/) can pay to run your data pipeline, and chatbots can answer data questions. It’s time to merge data engineers and analytics engineers back into a single data team that’s responsible for E, T, and L. ([View Highlight](https://read.readwise.io/read/01jd3833bgrk796h1ygv3zgmxb))
- I’m happy to see companies and projects showing up to ease this transition. The most notable one is [dltHub](https://dlthub.com/), which adopts [SDLC](https://aws.amazon.com/what-is/sdlc/) best practices for data pipelines much as dbt did for transformations. Tools such as this should make it easier for analytics engineers to take ownership of data pipelines. I’ve also seen several tools like [tabsdata](https://github.com/dbt-labs/dbt-core)﹩ that merge ETL back into a single tool for analytics and data engineers, rather than having both dltHub and dbt. I expect to see a collapse of data engineering and analytics engineering back to a single team in the next few years. ([View Highlight](https://read.readwise.io/read/01jd383bb662w88qw1t2dfwjb3))
