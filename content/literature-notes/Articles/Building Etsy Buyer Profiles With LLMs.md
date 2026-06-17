---
author: "[[etsy.com]]"
title: 'Building Etsy Buyer Profiles With LLMs'
date: "2025-11-05"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://i.etsystatic.com/inv/4e389d/5818035700/inv_fullxfull.5818035700_j3xfsldk.jpg?version=0)

## Metadata
- Author: [[etsy.com]]
- Full Title: Building Etsy Buyer Profiles With LLMs
- URL: https://www.etsy.com/codeascraft/building-etsy-buyer-profiles-with-llms

## Highlights
- we explored enhancing our personalization by leveraging large language models (LLMs) to create detailed buyer profiles based on buyers’ browsing and purchasing behaviors. We strive towards privacy by design and build these exploratory models with buyer privacy in mind. While this work is still in experimentation, we’re excited to share our early efforts and what we’ve learned. ([View Highlight](https://read.readwise.io/read/01k99psrjnps8g9x5fvz2vdcq1))
- Understanding Buyer Profiles
  Buyer profiles anonymously capture nuanced interests for each user, like preferred styles and product categories. For example, do they tend to prefer minimalist styles? Do they mostly shop for home decor, or jewelry? They also offer insight into specific shopping missions a buyer may be on, like finding the perfect fall sweater. These profiles help us better understand our users, making the Etsy experience feel tailored to each individual buyer. ([View Highlight](https://read.readwise.io/read/01k99psy4sw4hpqd951dp93e71))
- Our process begins by retrieving user activity data and listing information from internal sources like our feature store and BigQuery. This includes users’ recent searches, item views, purchases, and favorites.
  ![](https://i.etsystatic.com/inv/d90c38/7167110206/inv_fullxfull.7167110206_rvsp064p.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pt3sw7jvvzc6h6hncv61h))
- nce we have the users’ session data with interactions, we then prompt the LLM to interpret this data and generate structured buyer profiles.
  ![](https://i.etsystatic.com/inv/ec98a6/7167223046/inv_fullxfull.7167223046_f1d4hdhg.jpg?version=0)
  Buyer profile data structure
  In the case that the LLM does not have enough supporting data to infer a user's categorical interests (i.e. these interests would also not be obvious to a human looking at this user's interactions), these fields and the confidence hashmap can be empty. ([View Highlight](https://read.readwise.io/read/01k99pv7gfb4rta9kwa2wqdyd6))
- The LLM will always include an explanation and any observed interests in the explanation section of the buyer profile.
  ![](https://i.etsystatic.com/inv/3289ad/7167112652/inv_fullxfull.7167112652_4veuwows.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pvb8v0c0dyztpfgwdth4s))
- Bringing Personalization to Scale
  Initially, using this method to generate profiles for our roughly 90 million buyers would have been exceedingly costly and taken weeks to update. We optimized this by:
  • Shifting our listings data source from API endpoints to BigQuery tables that are clustered and partitioned for efficient querying.
  • Decreasing the volume of input tokens. Initially, we were including about 2 years of session data. Now, we’ve reduced this to just the last 9 months. The 9 month timeframe also allowed us to lighten the prompt corrections (and cached input tokens) by reducing the weight of holiday shopping.
  • Increasing LLM and BigQuery batch sizes for data processing.
  • Introducing parallel processing with managed concurrency to avoid request rate limits.
  • Scaling up computational resources for session data retrieval and LLM processing tasks. ([View Highlight](https://read.readwise.io/read/01k99pvpkjkq90y0v5s4vzmw4d))
- These improvements reduced buyer profile generation time dramatically — from 21 days down to 3 days for 10 million users. Cost management was also crucial. By adjusting the prompt to get high quality results with a smaller model, we significantly lowered the cost and made large-scale personalization economically feasible. Through these various cost management techniques, we were able to reduce the estimated cost by 94% per million users. ([View Highlight](https://read.readwise.io/read/01k99pw0ajqgdnkxbj8bj6v1ys))
- Additionally, to scale and schedule buyer profile refreshes, we used Airflow as an orchestration tool. By batching and staggering tasks by user_id, we parallelize some tasks while avoiding too many concurrent requests on BigQuery & OpenAI APIs (as visualized in this Directed Acyclic Graph).
  ![](https://i.etsystatic.com/inv/4c215d/7215106915/inv_fullxfull.7215106915_9syjqngx.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pw7mh9sp1r6757yakxk57))
- Query Rewriting
  Query rewriting is the process of transforming a user’s submitted search query on the backend to better represent their intent to the underlying search systems. We already use query rewriting for different use cases at Etsy. It can correct spelling, add specifics to ambiguous queries, adjust niche terminology, or complete incomplete queries (where the user accidentally pressed enter before they finished writing their query).
  To further personalize Etsy’s search experience, we explored enriching search queries with predicted interests from buyer profiles. For instance, a simple query like "cool posters" becomes "cool posters + hippie|boho|vintage|nature," significantly boosting relevance. ([View Highlight](https://read.readwise.io/read/01k99pwft0907376yw17wm5e6e))
- Search results without personalization
  ![](https://i.etsystatic.com/inv/8042d1/7215156101/inv_fullxfull.7215156101_i7tyi5gw.jpg?version=0)
  Search results with personalization using example buyer profile
  ![](https://i.etsystatic.com/inv/57f38c/7215157261/inv_fullxfull.7215157261_3eozeu9r.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pwyxp5w41h65cjya953xz))
- On the Etsy website, “refinement pills” work as an interactive query reformulation. When a user clicks on an option, the path will be prefixed to the user’s query and a new search will be executed. A mix of different types of refinement pills are generated: single pills (just one word) and grouped pills (a dropdown of options). With buyer profiles, we can present high-confidence buyer interests as clickable filters or refinement pills in the search interface, enabling users to effortlessly refine their searches based on predicted preferences.
  Refinement pills without personalization
  ![](https://i.etsystatic.com/inv/0065d9/7215158991/inv_fullxfull.7215158991_4vahuj39.jpg?version=0)
  Refinement pills with personalization using example buyer profile
  ![](https://i.etsystatic.com/inv/c6eec8/7167281650/inv_fullxfull.7167281650_ovxaywx2.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pxbamkx7v0tzvseymwpgc))
- Validating Profile Accuracy
  As we work to roll out buyer profile-based personalization, understanding the accuracy of our predictions is crucial. Through systematic experimentation, we're working to establish how well our LLM-generated profiles reflect actual user interests and shopping behaviors.
  Key Accuracy Metrics
  • Click-through Rate (CTR) Lift: Comparing CTR on personalized search results versus baseline helps us quantify immediate engagement improvements
  • Conversion Rate Impact: Tracking purchase rates from personalized searches reveals whether we're surfacing items users actually want to buy
  • Refinement Pill Engagement: Monitoring clicks on suggested refinement pills helps measure how well we've predicted user interests
  • Search Query Reformulation Success: Analyzing subsequent user actions after query rewriting indicates whether our enrichments align with user intent ([View Highlight](https://read.readwise.io/read/01k99pxzz5505phxm29sgapy3e))
- Profile Refresh Strategy
  We'll work to maintain profile accuracy through several methods:
  • Dynamically refreshing timing based on user activity levels. These include the number and frequency of recent interactions. For example, does the user click on the refinement pills proposed? Are the personalized items viewed?
  • Detecting interest drift when search patterns change significantly
  • Taking into account seasonal considerations, such as the winter holiday shopping season
  • Monitoring performance degradation signals when personalization effectiveness drops below thresholds of engagement listed above ([View Highlight](https://read.readwise.io/read/01k99pyage22z4c16htp8q88wt))
- The Cold Start User Problem
  To extend this personalized experience to new users who lack extensive session data, we experimented with "inheritance profiles" using collaborative filtering. By matching early interaction signals (like brief session data or initial search terms) to existing profiles of similar users, we could predict interests for new users earlier in their relationship with Etsy.
  This user-based collaborative filtering approach would allow us to have profiles for as many users as possible, even those with minimal behavioral data. Below is a diagram for a sample new user who might inherit aspects of a similar profile as the one above, based on just a few searches.
  ![](https://i.etsystatic.com/inv/ef8f8c/7215162515/inv_fullxfull.7215162515_o2x0riwx.jpg?version=0) ([View Highlight](https://read.readwise.io/read/01k99pyk6nn7fjsxkx8czrvrgk))
- Conclusion
  As we continue to refine these profiles and expand their applications across the Etsy marketplace, we're excited about the possibilities, from more intuitive search experiences to discovery features that surface hidden gems aligned with each buyer's unique tastes.
  With nearly 90 million active buyers and over 100 million listings, the challenge of personalization at Etsy's scale is immense, but that's exactly what makes it worth solving. Every improvement we make impacts millions of shopping journeys, helping buyers discover that perfect vintage find, custom wedding gift, or miniature dragon they didn't even know they were looking for. ([View Highlight](https://read.readwise.io/read/01k99pyzga7s32frt0cwjhj2j3))
