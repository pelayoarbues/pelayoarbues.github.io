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
