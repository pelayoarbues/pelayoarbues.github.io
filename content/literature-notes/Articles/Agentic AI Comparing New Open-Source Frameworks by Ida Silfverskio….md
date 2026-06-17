---
author: "[[archive.ph]]"
title: 'Agentic AI: Comparing New Open-Source Frameworks | by Ida Silfverskiö…'
date: "2025-04-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://d4vc8w17m14xa9.archive.ph/7bdjM/a12d226145e21ae6880ae28ea8dbbbbc217cf3f3/scr.png)

## Metadata
- Author: [[archive.ph]]
- Full Title: Agentic AI: Comparing New Open-Source Frameworks | by Ida Silfverskiö…
- URL: https://archive.ph/7bdjM

## Highlights
- The focus will be on **LangGraph**, **Agno**, **SmolAgents**, **Mastra**, **Pydantic AI**, and **Atomic Agents**. We’ll also compare them to **CrewAI** and **AutoGen**.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/e1fd65703721e8ff22858b37a131ac254af87b55.webp)
  How we can compare the different frameworks | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7d0vex0h3syfmk7rgtcyx))
- Agentic AI
  Agentic AI is basically about building systems around LLMs so they can have accurate knowledge, access to data, and the ability to act. You can think of it as using natural language to automate processes and tasks. ([View Highlight](https://read.readwise.io/read/01jsy7dvsb5a1atp59nqgezh2r))
- Using natural language processing in automation isn’t new — we’ve used NLP for years to extract and process data. What’s new is the amount of freedom we can now give language models, allowing them to handle ambiguity and make decisions dynamically.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/67d4ca55c64dfdcb2e46e1d28819844f76026682.webp)
  Routing dynamically with natural language — LLMs can interpret ambiguity | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7e57emhg36khd1rxxjjgw))
- But just because LLMs can understand language doesn’t mean they have agency — or even understand the task you’re trying to automate. That’s why there’s a lot of engineering involved in building reliable systems. ([View Highlight](https://read.readwise.io/read/01jsy7h0rdhskpg8r5mst14qdh))
- At their core, agentic frameworks help you with prompt engineering and routing data to and from the LLMs— but they also offer additional abstractions that make it easier to get started.
  If you were to build a system from scratch where an LLM should use different APIs — tools — you’d define that in the system prompt. Then you’d request that the LLM returns its response along with the tool it wants to call, so the system can parse and execute the API call.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/8738be52975f3964072abb55c97654b337f8b656.webp) ([View Highlight](https://read.readwise.io/read/01jsy7ha3zm1nr4n2hzgdmatqm))
- So basically, we’re talking about prompt engineering — which forms the foundation of any framework.
  The framework usually helps in two ways: it structures the prompt properly to make sure the LLM responds in the right format, and then parses the response to route it to the correct tool — or API, document or what have you.
  When we set up knowledge, a framework might help with chunking documents, embedding them and storing them. This gets added to the prompt as context, similar to how we build standard RAG systems. ([View Highlight](https://read.readwise.io/read/01jsy7npdgc5teh36crb3fa541))
- A framework can also help with things like error handling, structured outputs, validation, observability, deployment — and generally help you organize your code so you can build more complex systems, like multi-agent setups.
  Still, a lot of people feel that using a full framework is overkill.
  The issue is: if the LLM doesn’t use the tool correctly or something breaks, the abstraction becomes a pain because you can’t debug it easily. This can also be a problem if you switch models — the system prompt might have been tailored for one and not transfer well to others. ([View Highlight](https://read.readwise.io/read/01jsy7nvf1haysy6pqj4vd8hfx))
- That’s why some developers end up rewriting parts of a framework —such as `create_react_agent` in LangGraph — to get better control.
  Some frameworks are lighter, some heavier and offer additional features, but there’s community around them to help you get started. And once you learn one (including how it works under the hood), it becomes easier to pick up others. ([View Highlight](https://read.readwise.io/read/01jsy7pcxnaqy5qxf6cazesn0b))
- **CrewAI** is a very high-abstraction framework that lets you build agent systems quickly by hiding low-level details. **AutoGen** focuses on autonomous, asynchronous agent collaboration, where agents have the freedom to collaborate as they see fit — which may make it more suited for testing and research.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/40e17889d79458f83a0cda5880d09ad8b005b913.webp)
  The popular and more mainstream libraries | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7qk7mw5bk4sccswxq7zad))
- **LangGraph** is still a fairly well-known system but deserves to be highlighted as one of the main frameworks for developers. It uses a graph-based approach where you build nodes and connect them via agents. Compared to the other two, it gives you stricter engineering control over workflows and doesn’t assume agents should have much agency. ([View Highlight](https://read.readwise.io/read/01jsy7r00d5q0pw0901jfd2f5c))
- It should be noted that many feel that LangGraph is overly complicated in its abstractions and difficult to debug. The idea is that it has a steep learning curve but once you learn the fundamentals it should get easier. ([View Highlight](https://read.readwise.io/read/01jsy7r81qknx2ks0vkhg4xq1a))
- The next one is **Agno** (previously Phi-Data) which focuses on providing a very good developer experience. It also has one of the cleanest documentations I’ve seen. It’s very plug-and-play, helping you get started quickly with a lot of built-in features, organized into logical, clean abstractions that make sense. ([View Highlight](https://read.readwise.io/read/01jsy7rj507mn4g6vefp2hbmz0))
- **SmolAgents** is a very bare-bones framework that introduces an agent — CodingAgent — which routes data via code rather than JSON. It also gives you direct access to the entire Hugging Face model library out of the box.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/0dcafc7577c72198253c0e2bd60d4af3d528e9dc.webp)
  Code agents route data with code rather than JSON (as most others do) | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7rz1w22tsg83qskc9r46h))
- **PydanticAI** builds on Pydantic with minimal abstraction, offering a bare-bones framework that’s highly transparent. It’s great when you need strict type safety and predictable, validated outputs, for fine-grained control, making it easier to debug. ([View Highlight](https://read.readwise.io/read/01jsy7s6xwssz1c17cxhy9tb7q))
- **Atomic Agents** is developed by an individual agent builder and uses schema-driven building blocks you connect like Lego, with a strong focus on structure and control. It was built in response to the lack of alternatives that worked well in practice. ([View Highlight](https://read.readwise.io/read/01jsy7sh0cv85p08nbr78k63tb))
- **Mastra**, created by the team behind Gatsby, is a JavaScript framework built for frontend developers to easily build agents within their own ecosystem.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/ec5dcc0306962d57a6cebc7b3d7aa18fb8c06005.webp)
  The less mainstream frameworks and when released | Image by autho ([View Highlight](https://read.readwise.io/read/01jsy7tcj17n7mf9y7gabx7ex5))
- **Most open-source frameworks are more or less model agnostic**. This means they’re built to support various providers. However, as mentioned earlier, each framework has its own structure for system prompts — and that structure may work better with some models than others. ([View Highlight](https://read.readwise.io/read/01jsy7vkkadx4t4e76fssvszs0))
- **All agentic frameworks support tooling**, since tools are essential for building systems that can act. They also make it easy to define your own custom tools through simple abstractions. Today, most frameworks support MCP, either officially or through community solutions.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/73918235eeda6e597182199b5763b09a1eae32c7.webp)
  Fun illustration on what they usually always have | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7vw4sxncymd9z6wa6qxyh))
- It’s important to understand that not all models are built for function calling, which is necessary for using tools. To figure out which models are best suited as the base LLM, you can check **Hugging Face’s agent** [**leaderboard**](https://archive.ph/o/7bdjM/https://huggingface.co/blog/pratikbhavsar/agent-leaderboard)**.**
  To enable agents to retain short-term memory between LLM calls, **all frameworks make use of state**. State helps the LLM remember what was said in earlier steps or parts of the conversation.
  Most frameworks also offer **simple options to set up RAG** with different databases to provide the agent with knowledge.
  Finally, nearly all frameworks support **asynchronous calls, structured outputs, streaming, and the ability to add observability.** ([View Highlight](https://read.readwise.io/read/01jsy7wbava6xdn24amsjrj3dd))
- As said previously, short-term memory (state) is always included — without it, you can’t build a system that uses tools. However, l**ong-term memory is trickier to implement**, and this is where frameworks differ. Some offer built-in solutions, while others you’ll have to connect other solutions on your own. ([View Highlight](https://read.readwise.io/read/01jsy7x60aa6axs5xth5rbr8rd))
- ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/16b98d6a287b32ddd58faa2b2a7c6cc156f912fe.webp)
  See the github repo section [here](https://archive.ph/o/7bdjM/https://github.com/ilsilfverskiold/Awesome-LLM-Resources-List/blob/main/README.md%23agentic-frameworks-core-capabilities) and the full list of features [here](https://archive.ph/o/7bdjM/https://docs.google.com/spreadsheets/d/1zjcww1w0vARZz9Z6GDxNMp-PKyg7iRyNYAnDo59HjzI/edit?usp=sharing) | Image by author ([View Highlight](https://read.readwise.io/read/01jsy7x97f8xzdsj9nr0v21604))
- **Frameworks also vary in how they handle multi-agent capabilities.** Multi-agent systems allow you to build collaborative or hierarchical setups with teams of agents connected via supervisors.
  Most frameworks recommend keeping agents focused — a narrow scope with a limited set of tools. That means you’ll likely need to build out teams of agents to handle complex workflows. All frameworks let you build one team, but some get complicated when scaling into multi-hierarchical systems with multiple layers. ([View Highlight](https://read.readwise.io/read/01jsy7zx4hrgkrd6hfvgyz8rzk))
- **This is where LangGraph stands out** — you can build out nodes, connect them to various supervisors, and visualize how different teams interact. **It’s clearly the most flexible when building multi-agent systems at scale.**
  **Agno recently added support for teams**, both collaborative and hierarchical, but there aren’t many examples yet for more complex, multi-hierarchical setups. ([View Highlight](https://read.readwise.io/read/01jsy80843qqyjk7kcjmsf1s6x))
- **SmolAgents lets you connect agents to a supervisor but can get complex as the system grows.** It reminds me of CrewAI in how it structures agent teams. Mastra is similar in that sense.
  With PydanticAI and Atomic Agents, you’ll need to manually chain your agent teams, so orchestration falls on you. ([View Highlight](https://read.readwise.io/read/01jsy80f2m142gjb0txvkeff12))
- I’d say Mastra, CrewAI, and to some extent Agno are built to be plug and play.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/a0f5e124fe23a1be20b7e9a20be4f33f64939bd3.webp)
  High vs low abstraction for various frameworks | Image by author ([View Highlight](https://read.readwise.io/read/01jsy81m9xm9kg9xwf73r7gk0s))
- **LangGraph** also has a good amount of abstraction, but it uses a graph-based system where you manually connect nodes. That gives you more control but also means you have to set up and manage every connection yourself, which comes with a **steeper learning curve.** ([View Highlight](https://read.readwise.io/read/01jsy81sefyx4b6x15zhmv4rye))
- Then we have the low-level abstraction frameworks like PydanticAI, SmolAgents, and Atomic Agents.
  **These make it a point to be transparent, but you often have to build out the orchestration yourself.** This gives you full control and helps with debugging — but it also increases time to build. ([View Highlight](https://read.readwise.io/read/01jsy824fkbqtt9tzcbg4045wn))
- Another point of difference is how much agency the framework assumes the agent should have. **Some are built on the idea that LLMs should be smart enough to figure out how to complete the task on their own.** Others lean toward tight control — giving agents one job and guiding them step by step. ([View Highlight](https://read.readwise.io/read/01jsy82f6rdeczrze2k5zm5nd0))
- **AutoGen and SmolAgents fall into the first camp. The rest lean more towards control.**
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/7fa3670517e3f167bc1356e41434b79708df8024.webp)
  High vs low agency for various frameworks | Image by author ([View Highlight](https://read.readwise.io/read/01jsy82tqxfy77fmcgeq7kn9y1))
- There’s something to consider here: when developers build frameworks that focus on tight control, it’s often because they haven’t found a way to let agents work on their own yet — at least not reliably.
  This space is also starting to look more and more like engineering. ([View Highlight](https://read.readwise.io/read/01jsy83c2q41eck75z7vjxmq94))
- If you’re going to build these systems, you do need to understand how to code. The real question is how much the frameworks differ in terms of how technical you need to be.
  ![](https://d4vc8w17m14xa9.archive.ph/7bdjM/e79cca4024df3081b9228774509a0fcc6a9c3ea9.webp)
  Experience level needed to build for various frameworks | Image by author
  If you’re less experienced, going with CrewAI, Agno, or Mastra might be a good idea. ([View Highlight](https://read.readwise.io/read/01jsy83r8t81p08asp7ftfngyz))
- SmolAgents is also pretty straightforward for simple use cases. ([View Highlight](https://read.readwise.io/read/01jsy83vppxqn80ajk1ddkstby))
- As for PydanticAI, Atomic Agents, and LangGraph — you’ll be writing a lot more of the logic yourself. Though to be fair, it’s always possible to build an agent to help you structure your code correctly as well. ([View Highlight](https://read.readwise.io/read/01jsy84682061xt4415mnm5cnm))
- Lastly, it’s worth mentioning **the developer experience across these frameworks.**
  From what I’ve seen, most developers find CrewAI and AutoGen tricky to debug. SmolAgents’ CodeAgent introduces a novel approach where agents output code to route data — a cool idea, but it doesn’t always work as intended. ([View Highlight](https://read.readwise.io/read/01jsy84ken4nwj5et7sekedzjw))
- LangGraph, especially when paired with LangChain, comes with a steep learning curve and some confusing abstractions that you may end up having to break apart and rebuild.
  PydanticAI and Atomic Agents are generally liked by developers, but they do require you to build the orchestration yourself.
  Agno and Mastra are solid choices, but you might run into issues like looping calls that can be hard to debug. ([View Highlight](https://read.readwise.io/read/01jsy84vsf0kv3e3f6a1pzt6vy))
