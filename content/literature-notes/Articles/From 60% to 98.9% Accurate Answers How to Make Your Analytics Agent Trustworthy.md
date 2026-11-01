---
author: "[[Alejandro Rojas López]]"
title: 'From 60% to 98.9% Accurate Answers: How to Make Your Analytics Agent Trustworthy'
date: "2026-11-01"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!K9G-!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F82e4fba9-3193-4c22-a159-411e56fad4c2_883x497.png)

## Metadata
- Author: [[Alejandro Rojas López]]
- Full Title: From 60% to 98.9% Accurate Answers: How to Make Your Analytics Agent Trustworthy
- URL: https://getthedataoffer.substack.com/p/from-60-to-989-accurate-answers-how

## Highlights
- I recently rolled out an analytics agent that allows internal users to ask questions about the business in plain English and get back results based on the data stored in the data warehouse. ([View Highlight](https://read.readwise.io/read/01m6c0css0gw9c1t60x4dgwe8z))
- When I initially connected the agent to the data to showcase it to the data team it did not do a great job at answering basic questions, but we did not have a baseline about how accurate answers were, we decided to build a way to measure it and make incremental fixes to improve accuracy. ([View Highlight](https://read.readwise.io/read/01m6c0cvtp18nhdmvvhndqtp2f))
- TLDR; our baseline started at 60% and improved to 98.6% after a few days, this post explains step by step how to get there ([View Highlight](https://read.readwise.io/read/01m6c0czwptn924dbvwpkw6y4d))
- Before putting the analytics agent in front of real internal users, I wanted to get a straight answer to a simple question: can people trust what the agent is returning? ([View Highlight](https://read.readwise.io/read/01m6c0d1perx7naa6q54w2g7t3))
- An agent that is wrong a high percentage of the times is worse than no agent at all, because wrong answers are hard to spot unless the person has lots of domain knowledge and the right expected ballpark for the question asked, given that the majority of people using the agent are not technical and are not familiar with the underlying data model giving them those details won’t help. ([View Highlight](https://read.readwise.io/read/01m6c0d570zqkz5w9f0c70409k))
- An agentic eval is a repeatable check that runs your agent on a set of inputs and scores the output against what a good answer looks like. Think of it as a test suite for a system whose behavior you cannot read from code and that is not deterministic ([View Highlight](https://read.readwise.io/read/01m6c0d9tmzpayvt6gwz9h5khm))
- **Our core company KPIs**: This set was taking on what we already reported and common follow up questions from past business review meetings on changes on those metrics ([View Highlight](https://read.readwise.io/read/01m6c0dcs23a6hr5ctn476fhxz))
- **Recent ad-hoc questions from our support channels:** we kept the messy real world phrasing, with ambiguous terms and implicit context, that no one writes in a spec ([View Highlight](https://read.readwise.io/read/01m6c0dfdaq17r2p3km73dzrge))
- **Recent reported issues with the data model**: when we got feedback or asked about which table to use to answer a question because the data model was not clear ([View Highlight](https://read.readwise.io/read/01m6c0dggnk6kntbh2jt2c6ga7))
- • LLM-based agents are non-deterministic, ask the same question twice and you may get different ansers
  • Analytics agents are generally multi-turn, you ask an initial question and you follow up with more to dig deeper and get to the root cause
  • Internal user may use business jargon or language that may not be present in the data model
  • **Edge cases**: Data might not be there to answer the question or the data may be affected by incidents in the source
  • Questions may not be well scoped, ambiguos or clear in the first go
  • Not only accuracy is important, but how it got there as well (cost, time to answer, steps and tool calls used, consistency etc)
  • Running the full eval set with every change is too expensive ([View Highlight](https://read.readwise.io/read/01m6c0dskjmgevm878t74dmtmv))
- Give evals **some level of determinism** (for example, fix the time frame for a time in the past) so that it is easier to compare with real figures ([View Highlight](https://read.readwise.io/read/01m6c0e3h5kaa93jx3pct8s59w))
- **Include single turn and multi-turn evals** so that the agent is able to exercise asking follow up questions when ambiguos answers are asked and flag context management or caching issues ([View Highlight](https://read.readwise.io/read/01m6c0e5e3cvnn2ychwn4fv8kc))
- Include cases that asked about **data that was missing and where the data exists but is unclear,** this help evaluate that edge cases get exercised and verified ([View Highlight](https://read.readwise.io/read/01m6c0e8c2n91htg4bmact8r9q))
- Get **an LLM to grade answers** (LLM as judge), the judge model is different from the model evaluated and should return yes/no answer ([View Highlight](https://read.readwise.io/read/01m6c0e9pkm8amepdt2cpxpznt))
- • Trajectory was left for debugging purposes but not evaluation, getting an accurate answer is more important than how the agent got there (with a couple of small exceptions, for example, filling tickets when data is missing is a requirement rather than a nice to have, I want to ensure it happens)
  • Run the full set of evals daily and a sample on CI
  • Each eval should be run multiple times to measure consistency of answers ([View Highlight](https://read.readwise.io/read/01m6c0eb1jzcr728ck719573bj))
- **Restrict the agent to data that is trustworthy**: Only the datasets that are used day to day to answer questions or plot dashboards, these are battled tested and have a lot of visibility, everything else was removed. This makes it less likely for the agent to pick a testing dataset or one that was ad-hoc done ([View Highlight](https://read.readwise.io/read/01m6c0esv778r1nph79vw0sgms))
- **Give profiling and data transformation tools**: equip your data agent with this tools to flag untrusted datasets and understand how data is flowing from raw data to metric ([View Highlight](https://read.readwise.io/read/01m6c0ewatcxy4sanhwjsz9019))
- Create **a business glossary** with metric definition and common business terms, acronyms and synonyms and give the agent access to it. This removes ambiguity and helps the agent choose the right data source right away. ([View Highlight](https://read.readwise.io/read/01m6c0eyq317e00h4b4fec1k45))
- Writing **better descriptions for tables and columns as well as following good naming conventions for those,** a column called amt_2 with no description makes the agent guess and more likely to pick the wrong ones for answering questions. Think about including, grain of the table, what it can be used for (and what it can’t be used for), how to leverage the dataset to query it including real world example queries. ([View Highlight](https://read.readwise.io/read/01m6c0f3basv3rdqnsrp310pkb))
- Agentic evals high level article from [Yesha Shah](https://open.substack.com/users/333543049-yesha-shah?utm_source=mentions), this was a great inspiration for this article (Link [here](https://yeshas93.substack.com/p/agentic-evals-a-software-engineers)) ([View Highlight](https://read.readwise.io/read/01m6c0fgtsqp9q5cwt6vnrt0e1))
- • **Measure before you ship.** Without a score, you cannot tell whether a change helped.
  • **Treat evals as non-deterministic from the start.** Run cases multiple times and look at rates, not single results.
  • **Track cost and latency, not only accuracy.** A more accurate agent that is slow and expensive could be considered a regression
  • **Fix the context, not just the prompt.** Trusted data, clear descriptions, and a shared glossary did more for us than any clever instruction.
  • **Turn every failure into a test.** That is how a suite becomes a safety net.
  • **Test edge cases.** A good agent knows when to hand a question to the data team instead of guessing.
  • **Keep some questions out of your tuning.** Otherwise a better score may only mean the agent learned the test. ([View Highlight](https://read.readwise.io/read/01m6c0gbfs7pp365mkrzzg4v01))
- This helped move accuracy from 60% to 98.6% by getting better at measuring and then fixing what the measurements showed. But this is not a one-off project. The data model keeps evolving, and new metrics are added, giving the business more visibility into its data is an ongoing process as the product evolves. Every one of those changes means adapting eval cases: new metrics need new cases, changed definitions need updated expectations, and requires the team to keep checking that the answers stay accurate as the data moves underneath the agent. ([View Highlight](https://read.readwise.io/read/01m6c0gd60hkp0adj0pys4xqb4))
