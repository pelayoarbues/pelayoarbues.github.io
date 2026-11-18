---
author: "[[LangChain Blog]]"
title: 'Goal Engineering: How to Design Goals'
date: "2026-11-18"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6af667f57ac0e019ab9e0159_Goal%20Engineering.png)

## Metadata
- Author: [[LangChain Blog]]
- Full Title: Goal Engineering: How to Design Goals
- URL: https://www.langchain.com/blog/goal-engineering

## Highlights
- The scope of tasks that agents can take on has increased drastically over the past few years. They have gone from simple text generation to tool calling and decision making to executing full tasks. The future of agents is them taking on open ended goals and driving towards completion of those goals. Launches like that of [Hone](https://x.com/hone/status/2108218574926176490?s=20) give us a glimpse into that future. ([View Highlight](https://read.readwise.io/read/01m7r5m73ehz94w3e4vfc0zhnb))
- In this world, designing the scope of agents is crucial. Point them in the wrong direction, and you’ll get a lot of wasted tokens. A key part of the Hone agent set up is defining metrics for them to optimize. ([View Highlight](https://read.readwise.io/read/01m7r5mafetmrdfkdef4jw674g))
- As we’ve worked on similar styles of agents, we’ve realized something about designing the scope for agents: you want to design the scope of an agent such that it makes it as easy as possible to give feedback as the agent operates within that scope. ([View Highlight](https://read.readwise.io/read/01m7r5mdvs875pva5219h1gxnn))
- When agents mess up, a big reason they mess up is lack of right context. In order to fix this, you need to give the agent the right context. There are different types of context. Some types of context are things like access to the right documents or APIs - that is relatively easy to fix. The trickiest context to give the agent is context that is not written down anywhere already. This context needs to be given to the agent as feedback from a human expert. ([View Highlight](https://read.readwise.io/read/01m7r65ch99nm49cat82qdysb7))
- This is especially important as agents expand beyond doing verifiable tasks and start taking on subjective work alongside humans within an organization. For example, if you want an agent to help optimize a business metric (like improving your ads to optimize marketing performance), there are so many nuances beyond just factual context that you want to govern how the agent behaves. You probably have a certain taste around what sounds and looks good. You have opinions about how provocative or out-there your brand can be. An agent that can’t effectively get feedback to learn these things quickly becomes useless. ([View Highlight](https://read.readwise.io/read/01m7r65gtt881sc0rh1r75jg1t))
- ![](https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6af66c061f44e08747451fa2_Outdated%20agent.png) ([View Highlight](https://read.readwise.io/read/01m7r65kjgw23cwq2wh175h7f5))
- If the scope of your agent makes it really easy to give lots of high quality feedback on the agent’s work, that will help you immensely in building an agent that can reliably pursue a long-horizon goal. ([View Highlight](https://read.readwise.io/read/01m7r65sxp3wj4xvdm36w9d61a))
- A related learning is that you want to invest a lot in an intuitive and delightful UX for *reviewing* agent work. The bottleneck for agents performing is often them learning from feedback. Therefore, you should seek to optimize ease and quality of feedback collection! Investing in a clear UX for that is a worthwhile investment. ([View Highlight](https://read.readwise.io/read/01m7r65vwmre3mdvv8ajvr8eed))
