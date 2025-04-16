---
author: "[[linkedin.com]]"
title: 'Musings on Building a Generative AI Product'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/1714047701372)

## Metadata
- Author: [[linkedin.com]]
- Full Title: Musings on Building a Generative AI Product
- URL: https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product

## Highlights
- Here’s what happens in the background:
  1. **Pick the right agent**: This is where your journey begins. Our system takes your question and decides which AI agent is best equipped to handle it. In this case, it recognizes your interest in accessibility within tech companies and routes your query to an AI agent specialized in general knowledge seeking questions.
  2. **Gather information**: It’s time for some legwork. The AI agent calls a combination of internal APIs & Bing, searching for specific examples and case studies that highlight how accessibility in design has contributed to business value in tech. We are creating a dossier to ground our response.
  3. **Craft a response**: With the necessary information in hand, the agent can now write a response. It filters and synthesizes the data into a coherent, informative answer, providing you with clear examples of how accessibility initiatives have driven business value for tech companies. To avoid generating a wall of text and make the experience more interactive, internal APIs are invoked to decorate the response with attachments like article links, or profiles of people mentioned in the post.
  You might follow up with “How do I pivot my career towards this area?”, and we’d repeat the process but now routing you to a career and job AI agent. With just a few clicks you can go deep on any topic, get actionable insights or find your next big opportunity. ([View Highlight](https://read.readwise.io/read/01hx7jng7d80796hcqr65jz3m6))
- ![Diagram of a simplified pipeline for handling user queries](https://media.licdn.com/dms/image/D4D08AQGiEQzcSAQWTg/croft-frontend-shrinkToFit1024/0/1713366934678?e=2147483647&v=beta&t=8RYN9Dm6ELUG3-jgN76QJl62KePcaOl4sQ84qR-sE0I)
  Figure 1: Simplified pipeline for handling user queries. KSA stands for “Knowledge Share Agent”, one of the dozens of agents that can handle user queries
  Some of you might’ve noticed from the explanation above that our pipeline follows what’s known as Retrieval Augmented Generation (RAG), which is a common design pattern with generative AI systems. Building the pipeline was surprisingly less of a headache than we anticipated. In just a few days we had the basic framework up and running:
  • **Routing**: decides if the query is in scope or not, and which AI agent to forward it to. Examples of agents are: job assessment, company understanding, takeaways for posts, etc.
  • **Retrieval**: recall-oriented step where the AI agent decides which services to call and how (e.g. LinkedIn People Search, Bing API, etc.).
  • **Generation**: precision-oriented step that sieves through the noisy data retrieved, filters it and produces the final response. ([View Highlight](https://read.readwise.io/read/01hx7jnx9k28ze84rm7kck516v))
- ![Diagram of a simplified pipeline for handling user queries](https://media.licdn.com/dms/image/D4D08AQGiEQzcSAQWTg/croft-frontend-shrinkToFit1024/0/1713366934678?e=2147483647&v=beta&t=8RYN9Dm6ELUG3-jgN76QJl62KePcaOl4sQ84qR-sE0I)
  Figure 1: Simplified pipeline for handling user queries. KSA stands for “Knowledge Share Agent”, one of the dozens of agents that can handle user queries ([View Highlight](https://read.readwise.io/read/01hx7jxxy5c9eme9cfcknc125q))
- Some of you might’ve noticed from the explanation above that our pipeline follows what’s known as Retrieval Augmented Generation (RAG), which is a common design pattern with generative AI systems. Building the pipeline was surprisingly less of a headache than we anticipated. In just a few days we had the basic framework up and running:
  • **Routing**: decides if the query is in scope or not, and which AI agent to forward it to. Examples of agents are: job assessment, company understanding, takeaways for posts, etc.
  • **Retrieval**: recall-oriented step where the AI agent decides which services to call and how (e.g. LinkedIn People Search, Bing API, etc.).
  • **Generation**: precision-oriented step that sieves through the noisy data retrieved, filters it and produces the final response. ([View Highlight](https://read.readwise.io/read/01hx7jy4zrv0ff8940rae60w25))
- Tuning ‘routing’ and ‘retrieval’ felt more natural given their classification nature: we built dev sets and fitted them with prompt engineering and in-house models. Now, generation, that was a different story. It followed the 80/20 rule; getting it 80% was fast, but that last 20% took most of our work. When the expectation from your product is that 99%+ of your answers should be great, even using the most advanced models available still requires a lot of work and creativity to gain every 1%. ([View Highlight](https://read.readwise.io/read/01hx7jpa7xx4cy7xjkaqjq8etf))
- **What worked for us**:
  • Fixed 3-step pipeline
  • Small models for routing/retrieval, bigger models for generation
  • Embedding-Based Retrieval (EBR) powered by an in-memory database as our 'poor man's fine-tuning' to inject response examples directly into our prompts
  • Per-step specific evaluation pipelines, particularly for routing/retrieval ([View Highlight](https://read.readwise.io/read/01hx7jpgbyhx47vftwy8k2b5ag))
- We wanted to move fast across multiple teams and hence decided to split tasks into independent agents (i.e., AI agents) developed by different people: general knowledge, job assessment, post takeaways, etc.
  However, this approach introduces a significant compromise. By parallelizing tasks, we gained in terms of speed, but it came at the cost of fragmentation. Maintaining a uniform user experience became challenging when subsequent interactions with an assistant might be managed by varied models, prompts, or tools. ([View Highlight](https://read.readwise.io/read/01hx7jpy6cjahw4sxpg2q0qj0m))
- • A small ‘horizontal’ engineering pod that handled common components and focused on the holistic experience. This included:
  • The service hosting the product
  • Tooling for evaluation/testing
  • Global prompt templates that were consumed by all verticals (e.g. agent’s global identity, conversation history, jailbreak defense, etc.)
  • Shared UX components for our iOS/Android/Web clients
  • A server driven UI framework for releasing new UI changes without client code changes or releases.
  • Several ‘vertical’ engineering pods with autonomy on their agents, examples:
  • Personalized post summarization
  • Job fit assessment
  • Interview tips ([View Highlight](https://read.readwise.io/read/01hx7jq5c38r7xzmpfemeqk11g))
- ***Developing guidelines*** was the first hurdle. Let’s take Job Assessment as an example: clicking “Assess my fit for this job” and getting “You are a terrible fit” isn’t very useful. We want it to be factual but also empathetic. Some members may be contemplating a career change into fields where they currently do not have a strong fit, and need help understanding what are the gaps and next steps. Ensuring these details were consistent was key for the uniformity of our annotator scores. ([View Highlight](https://read.readwise.io/read/01hx7jsmpzy95ft6ja54k7rwm6))
- ***Scaling annotation*** was the second step. Initially everyone in the team chimed in (product, eng, design, etc.), but we knew we needed a more principled approach with consistent and diverse annotators. Our internal linguist team built tooling and processes by which we could *evaluate up to 500 daily conversations* and get metrics around: overall quality score, hallucination rate, Responsible AI violation, coherence, style, etc. This became our main signpost to understand trends, iterate on prompts & ensure we were ready to go live. ([View Highlight](https://read.readwise.io/read/01hx7jsq1acx8tv2z9cn69j8xf))
- ***Automatic evaluation*** is the holy grail, but still a work in progress. Without it, engineers are left with eye-balling results and testing on a limited set of examples, and having a 1+ day delay to know metrics. We are building model-based evaluators to estimate the above metrics & allow for much faster experimentation, and had some success on hallucination detection (but it wasn’t easy!). ([View Highlight](https://read.readwise.io/read/01hx7jt1xnc8qsr270tqg46c51))
- ![Diagram of the evaluation steps we perform](https://media.licdn.com/dms/image/D4D08AQHcPxFxm_rcqA/croft-frontend-shrinkToFit1024/0/1713367233275?e=2147483647&v=beta&t=XtIBaRpD45P-a2xunUJdJ3ATeeUjcKXyBBN4IzWVGlA)
  Figure 2: Evaluation steps we perform. Engineers perform fast, coarse evaluations to get directional metrics. Annotators give more granular feedback but have a ~1 day turnaround. Members are the final judges and give us scale, but some metrics can take 3+ days for a single change ([View Highlight](https://read.readwise.io/read/01hx7jtd7jkpxdr58f4a70m7cx))
- • A human (and hence LLM) friendly description of what the API does, and when to use it.
  • The configuration to call the RPC API (Endpoint, input schema, output schema etc.)
  • The LLM friendly input and output schema
  • Primitive typed (String/Boolean/Number) values
  • JSON schema style input and output schema descriptions
  • The business logic to map between LLM friendly schemas and actual RPC schemas. ([View Highlight](https://read.readwise.io/read/01hx7jtwpfvsd1fcacqkjhyzvf))
- Skills like this enable the LLM to do various things relevant to our product like view profiles, search articles/people/jobs/companies and even query internal analytics systems. The same technique is also used for calling non-LinkedIn APIs like Bing search and news.
  ![Diagram of the system calling internal APIs using skills](https://media.licdn.com/dms/image/D4D08AQEk4m362iK1NA/croft-frontend-shrinkToFit1024/0/1713367413597?e=2147483647&v=beta&t=5BDVZjoX4vJPIXcRnU-03vGpcXquJL8O3sp_I1_haB0)
  Figure 3: Calling internal APIs using skills ([View Highlight](https://read.readwise.io/read/01hx7jv0026hfvw6ce0qs4zj7q))
- We write prompts that ask the LLM to decide what skill to use to solve a particular job (skill selection via planning), and then also output the parameters to invoke the skill with (function call). Since the parameters to the call have to match the input schema, we ask the LLM to output them in a structured manner. Most LLMs are trained on YAML and JSON for structured output. We picked YAML because it is less verbose, and hence consumes fewer tokens than JSON. 
  One of the challenges we ran into was that while about ~90% of the time, the LLM responses contained the parameters in the right format, ~10% of the time the LLM would make mistakes and often output data that was invalid as per the schema supplied, or worse not even valid YAML. These mistakes, while being trivial for a human to spot, caused the code parsing them to barf. ~10% was a high enough number for us to not ignore trivially, and hence we set out to fix this problem. 
  A standard way to fix this problem is to detect it and then re-prompt the LLM to ask it to correct its mistakes with some additional guidance. While this technique works, it adds a non-trivial amount of latency and also consumes precious GPU capacity due to the additional LLM call. To circumvent these limitations, we ended up writing an in-house defensive YAML parser. 
  Through an analysis of various payloads, we determined common mistakes made by the LLM, and wrote code to detect and patch these appropriately before parsing. We also modified our prompts to inject hints around some of these common mistakes, to improve the accuracy of our patching. We were ultimately able to reduce occurrences of these errors to ~0.01%. ([View Highlight](https://read.readwise.io/read/01hx7jvc2aqekb6cz9swnwze8n))
- The team achieved 80% of the basic experience we were aiming to provide within the first month and then spent an additional four months attempting to surpass 95% completion of our full experience - as we worked diligently to refine, tweak and improve various aspects. We underestimated the challenge of detecting and mitigating hallucinations, as well as the rate at which quality scores improved—initially shooting up, then quickly plateauing. 
  For product experiences that tolerate such a level of errors, building with generative AI is refreshingly straightforward. But it also creates unattainable expectations, the initial pace created a false sense of ‘almost there,’ which became discouraging as the rate of improvement slowed significantly for each subsequent 1% gain. 
  Building the assistant felt like a departure from more ‘principled’ ML, and more akin to tweaking rules in expert systems. So while our evaluation became more and more sophisticated, our ‘training’ was mostly prompt engineering which was more of [an art than a science](https://www.microsoft.com/en-us/research/blog/the-power-of-prompting/). ([View Highlight](https://read.readwise.io/read/01hx7jw83fjjb3x8wg5hjw9h03))
- • **Throughput vs Latency**: when running large generative models, it’s often the case that TimeToFirstToken (TTFT) & TimeBetweenTokens (TBT) increase with utilization. In the case of TBT it can sometimes be linear. It’s not uncommon to get 2x/3x the TokensPerSecond (TPS) if you are willing to sacrifice both of those metrics, but we initially had to bound them pretty tight. ([View Highlight](https://read.readwise.io/read/01hx7jwf5xd2te9cxb137vy17r))
- **End to end streaming**: a full answer might take minutes to complete, so we make all our requests stream to reduce perceived latency. What’s more, we actually stream within our pipeline end to end. For example the LLM response deciding which APIs to call is progressively parsed and we *fire API calls as soon as parameters are ready*, without waiting for the full LLM response. The final synthesized response is also streamed all the way to the client using our [realtime messaging infrastructure](https://www.linkedin.com/blog/engineering/archive/instant-messaging-at-linkedin-scaling-to-hundreds-of-thousands-) with incremental processing for things like trust/Responsible AI classification. ([View Highlight](https://read.readwise.io/read/01hx7jwn2c0w0s54425961wn3b))
