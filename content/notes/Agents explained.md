---
title: Agents explained
date: 2024-06-08
tags:
  - permanent-note
  - LLMs
  - agents
---
![A 16:9 image of an autonomous agent depicted as a sculpture in the style of Magdalena Abakanowicz. The sculpture has a humanoid shape with an abstract, textured surface, resembling the rough, organic forms characteristic of Abakanowicz's work. The figure stands in a contemplative pose, with a complex, woven appearance made of materials that suggest a blend of metal and natural fibers. The background is simple and neutral to highlight the sculpture, with subtle lighting that casts gentle shadows, emphasizing the textures and details of the figure. Created with Dalle3](agent.webp)

>[!quote]
 > "Agentic just means LLMs that can call functions." - Hamel Husain

The newfound ability of Large Language Models (LLMs) to interact with APIs and other functions has sparked a wave of excitement around agentic workflows. I've noticed a trend where any automation that converts natural language queries into function calls is being labeled as an 'Agent' as stated in the quote above. This kind of over-simplification of emerging technologies often leads to confusion, excessive hype, and unrealistic expectations.

To clarify, an agent is a specialized Large Language Model that acts as a problem solver in a specific domain. It understands the user's query within the given context and knows how to interact with different tools to take action and solve the problem. 

Let's delve deeper into some of these characteristics:
- Domain-specific: A single agent usually operates within a particular domain. This could be as broad as tasks related to an entire company or industry sector. The current trend leans towards specialized agents for specific domains, but we might see more generalist agents in the future.
- Understands query and context: The agent receives the query and context in plain language. The LLM acts as the processing unit, breaking down complex problems into manageable tasks while considering available tools and provided context. Context may include system prompts defining general behavior or previous interactions between the user and the agent. Agents can also reflect on past interactions to refine their behavior.
- Tool handling: Agents can communicate with various tools and know how to interact with them through API requests, data retrieval from proprietary sources, or even user interface usage.
- Action: Agents execute actions by calling APIs, AI models, or following different steps. They then provide responses to users that often involve extensive output parsing.

It's crucial to remember that there's always a user delegating the problem to the agent. This user could be a human seeking help to solve an issue or a meta-agent. A meta-agent is another LLM that acts like an orchestra conductor, understanding broader user queries. This meta-agent possesses the same characteristics mentioned above but knows which agents are under its command rather than how to call tools, enabling it to plan and execute accordingly.

The recursive pattern here is noteworthy as it's driving much of the current hype. With Multi Agent architecture, you could solve complex workflows similar to those typically addressed within companies through collaboration between specialized roles and functional departments. [Swarms](https://swarms.apac.ai/en/latest/) and [Agency Swarm](https://vrsen.github.io/agency-swarm/) are just two examples of platforms to build swarm of agents.

If you need a more technical introduction to Agents, I highly recommend reading Lilian Weng's post on [LLM Powered Autonomous Agents](literature-notes/Articles/LLM%20Powered%20Autonomous%20Agents.md) or the paper on [Emerging AI Agent Architectures](literature-notes/Articles/The%20Landscape%20of%20Emerging%20AI%20Agent%20Architectures%20for%20Reasoning,%20Planning,%20and%20Tool%20Calling%20A%20Survey.md).

>[!note]
>According to the definition provided in this post, traditional automation tools like Zapier or Ifttt shouldn't be termed 'agents' since they primarily use if else clauses for programming. However, they have recently started integrating LLM agents into traditional automated flows.
