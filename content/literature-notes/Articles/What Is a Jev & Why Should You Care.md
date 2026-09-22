---
author: "[[Vin Vashishta]]"
title: 'What Is a Jev & Why Should You Care?'
date: "2026-09-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!TtLa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8f54500-16e3-4594-b924-50b75eb1122d_828x428.avif)

## Metadata
- Author: [[Vin Vashishta]]
- Full Title: What Is a Jev & Why Should You Care?
- URL: https://vinvashishta.substack.com/p/what-is-a-jev-and-why-should-you

## Highlights
- Jev is a masterclass in productizing research and taking that product to market to optimize adoption. [Jev is an agent support tool from TypeSafe AI](https://docs.typesafe.ai/introduction) that took over social media this weekend. It’s built to make small, structured decisions inside a larger agentic harness or software platform. Its architecture makes it faster and much less expensive than LLMs for a range of decision types. ([View Highlight](https://read.readwise.io/read/01m32s2wezzwxd8bdavv15v1f3))
- Everything about Jev is a play on words. Jev is short for Jevons and references Jevons’ paradox: usage climbs as cost drops. The marketing is clever, and it is working. 13% of Vercel’s paid AI Gateway teams used Jev within the first 24 hours of its release. It has really captured builders’ imaginations, and there is obvious utility. ([View Highlight](https://read.readwise.io/read/01m32s3x0bk3wvccfpmmkw5cea))
- But I haven’t seen anyone explain the bigger picture. The implementations that are going viral only scratch the surface of what Jev was built to do. TypeSafe AI built Jev to showcase their System One model capabilities. They are a category of models that expose simple-seeming primitives. ([View Highlight](https://read.readwise.io/read/01m32s47a3a477ygww0spsnwyj))
- They take a state and questions about the state as input. It predicts the answers. They call it “a classifier attached to a transformer.” Said simply, you supply the information and define the possible answers. Jev’s model returns a choice, score, and/or probability set that software or agents can act on. In my [Harness, Loop, and Graph series](https://vinvashishta.substack.com/p/harness-loop-and-graph-a-simple-explanation), I explained why letting the LLM make open-ended decisions results in low reliability. Jev is a clean way to prevent that from happening, making it a valuable addition to early-maturity agentic harnesses. ([View Highlight](https://read.readwise.io/read/01m32s4nx62bpn1bst56hmtav3))
- In my framework’s early maturity phases, I rely on lightweight taxonomies to support decision-making. Jev uses its System One models to do the same things. Both approaches require some information, but handle the reality that you often don’t get enough information for an agent to act reliably with LLMs alone. The special thing about Jev is how well its classifier generalizes to a wide range of decision domains. ([View Highlight](https://read.readwise.io/read/01m32s50bnzkja90q909f3x4nf))
- Jev supports three question types: multiple choice that returns probabilities and confidence for each choice (RIP your multiple-choice tests, professor), score that rates answers against a rubric, and noul (binary or yes/no). You can evaluate multiple questions against the same state or initial question. ([View Highlight](https://read.readwise.io/read/01m32s5cbvmqxz4te30k3y4c67))
- The pattern has legs, and Jev demonstrates a solid approach to multiple agentic challenges. This is where I don’t see enough coverage, so in this article, I will get deeper into why what you’re seeing in early applications isn’t all that TypeSafe AI is building for. ([View Highlight](https://read.readwise.io/read/01m32s6h8ap3t7y71j1hrb7asv))
- [TypeSafe AI’s founder, Diogo Almeida](https://x.com/CompleteSkeptic/status/2099925682726002904), left OpenAI to build in a direction that OpenAI wasn’t interested in at the time. He researched and engineered methods behind instruction-following models. His thesis is that automating long-chain workflows requires models that are architected to return decisions that a downstream software or agentic platform can act on. ([View Highlight](https://read.readwise.io/read/01m32sk9dvfayz4j82b6z2hj9t))
