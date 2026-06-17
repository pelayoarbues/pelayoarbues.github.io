---
title: Multi AI agent systems with CrewAI
date: 2024-10-21
tags:
  - literature-note
  - course
  - agents
  - AI
---
![](literature-notes/Courses/attachments/crewai.png)

I’ve just completed [Multi AI Agent Systems with crewAI - DeepLearning.AI](https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai/), and it’s a course I can’t recommend highly enough. Even if you’re not planning to build a multi-agent system—or don’t consider yourself a technical expert—it has something valuable to offer. The course simplifies AI’s complex patterns and helps you identify future use cases, making it a great entry point for anyone curious about AI’s potential.

One of the standout aspects is its introduction to mental models for working with agents. If you’ve used tools like ChatGPT, you’ll appreciate the course’s emphasis on roles, tasks, and collaboration. In a typical chat interaction, it’s you and the model refining responses together. With multi-agent systems, though, that collaboration shifts to agents working together, sometimes with human input, creating a more dynamic process.

For those interested in experimenting with multi-agent systems, the course offers a particularly useful mental model: designing an AI system is like managing a team. Just as in team management, you begin by setting clear goals, defining roles, and assigning tasks to each agent. Success then depends on providing these agents with the right tools and framework. This perspective made the course both engaging and practical, grounding complex AI concepts in a familiar, real-world context.

You can check my notes on the course below.

## AI Agents

Through interactions, you can improve the quality of outputs from LLMs. For example, you might ask for a copy of a service, find it too verbose, then ask for a summary, and finally adapt it for LinkedIn or Instagram. However, this approach requires you to stay in the loop with the LLM until you reach a satisfactory result.

AI agents could reduce this burden. An agent is created when an LLM can reflect on questions and answers, improving autonomously. Beyond that, an agent can use tools to interact with the external world, such as calling an API or gathering new data points.

In multi-agent systems, you have multiple agents where one agent may have a task but can delegate parts to another agent, producing a more refined output. The benefit of multi-agents is specialization; for instance, one agent could be a researcher, and another a skilled writer. Each agent could use different LLMs, and you might even have fine-tuned models for specific agents.

![](literature-notes/Courses/attachments/delegate.png)

CrewAI is both a framework and a platform. It breaks down concepts into simple structures, provides patterns for building these systems, offers tools and skills ready to be used by agents, and gives you a model to create custom tools for agents. Additionally, it provides a platform to bring these agents into production.

## Create Agents to Research and Write an Article

Initial building blocks in CrewAI:
- Agents
- Tasks
- Crews

In the example, there are three agents: a planner, a writer, and an editor. Agents perform better when they role-play, aligning with our expectations. You can enable agents to delegate work and to work verbosely.

Next, you create tasks for each agent. You provide a description, specify the expected output, and assign an agent to the task. The expected output option enforces the final result format.

The crew combines agents and tasks so they operate as a unit. You provide a list of agents and tasks, and by default, a crew operates sequentially, so task order matters. However, you can also run tasks in parallel or with different hierarchies. Focus on goals and expectations. One agent can handle multiple tasks, and both tasks and agents should be granular.

## Key Elements of AI Agents

What makes a great agent?
1. **Role Playing**: This makes a huge difference; the agent needs context on the goal. Use keywords that reinforce roles, goals, and backstory.
2. **Focus**: This isn’t about context windows. Mixing too much information may confuse the LLM, increasing hallucinations. Complex tasks should not rely on single agents.
3. **Tools**: Provide essential tools for agents, just as you would for new team members.
4. **Cooperation**: Agents should collaborate, balancing ideas through conversation, feedback, and task delegation for improved outcomes.
5. **Guardrails**: AI applications involve fuzzy inputs, transformations, and outputs. CrewAI includes guardrails to prevent agents from getting stuck, hallucinating, or derailing.
6. **Memory**: Memory enables agents to remember their actions. Short-term memory is used during task execution, shared among agents for intermediate information. Long-term memory is stored after task completion and can enhance future tasks, leading to self-improving agents. Entity memory remembers details about people and organizations.

## Multi-Agent Customer Support Automation

Customer support automation is a prime use case with high potential.

- **First Agent**: Senior support representative, friendly and helpful.
- **Second Agent**: Support QA specialist, fact-checking the first agent and delegating back if necessary. If an issue arises, this agent returns the work to the first agent.

**Role Playing**: Each agent has a defined role, goal, and backstory.  
**Focus**: Agents stay in character, enhancing performance.  
**Cooperation**: The QA agent can delegate tasks back to the support agent. The instructor recommends always incorporating a QA agent to handle undesirable behavior at inference time.

It’s important to note that delegation isn’t hardcoded; we rely on the LLM to make good decisions.

**Tools Package**: Includes internet search, retrieval-augmented generation (RAG), and website scraping. Tools can be assigned at different levels:
- **Agent Level**: The agent can use the tool(s) across tasks.
- **Task Level**: The agent uses the tool(s) only for a specific task.

Using memory with CrewAI is straightforward; simply enable a flag when creating the crew.

## Mental Framework for Agent Creation

A helpful framework for agent creation is to think like a manager. Managers focus on goals and the processes to achieve them. When building multi-agent systems, consider what kinds of people you would need to hire to accomplish the goal. This thought process helps define agents, tasks, and tools. Also, use descriptive keywords, such as “senior copywriter” instead of “writer.”

Recap:
- Agents self-improve using memory.
- Guardrails prevent agents from going down rabbit holes.
- Agents strive to reach an answer (avoiding infinite loops).
- Focus:
  - Narrowly defined tasks
  - Specific agent roles and objectives
  - Limited set of tools per agent

## Key Elements of Agent Tools

Sales is another excellent use case for multi-agent systems. Tools allow agents to move beyond internal processing and interact with the external world.

What makes a great tool?
- **Versatile**: Accepts various requests, possibly taking fuzzy inputs and providing structured outputs like JSON or API calls.
- **Fault Tolerant**: If an agent sends incorrect data, the tool should fail gracefully, allowing the agent to retry with an error message.
- **Caching**: Caching is essential to enhance usability. For tools involving web searches or API calls, caching avoids redundant requests, saves time, and stays within rate limits. CrewAI implements cross-agent caching.

Examples of tools:
- Internet search
- Website scraping
- Database connection
- API calls
- Notifications

## Tools for a Customer Outreach Campaign

- **Agent 1**: Sales representative identifying high-value leads matching the ideal customer profile.
- **Agent 2**: Lead sales representative creating personalized, compelling communications.

Tools:
- **Directory Read Tool**: Reads directories.
- **File Read Tool**
- **Search Tool**

Custom tool example: In this case, a sentiment analysis tool.

Tasks:
- **Lead Profiling Task**: Uses directory read, file read, and search tools.
- **Personalized Outreach Task**: Crafts a customized campaign.

In the example, the lead-nurturing agent makes an error by trying to load a file from the internet, failing, then realizing it should only load files from the file system. The instructor emphasizes the importance of exception handling, which should be coded or managed by built-in frameworks like CrewAI.

## Key Elements of Well-Defined Tasks

The manager framework involves defining the goal, roles, backstory, and tasks. When delegating to a new team member, especially a junior, you clarify the processes and tasks to achieve the goal.

Tasks should include:
- Clear description and expectations
- Context setting
- Callback options
- Task-specific tools that override agent tools
- Human input before task completion
- Asynchronous execution
- Output formats like pydantic, JSON, or files
- Parallel task execution

## Automate Event Planning

The most interesting part is using pydantic to transform LLM’s fuzzy outputs into strongly typed objects, converting them to JSON files. Additionally, the `human_input` option allows agents to ask for user feedback before finalizing. Asynchronous execution enables agents to work in parallel with marketing tasks.

![Asynchronous execution](literature-notes/Courses/attachments/asynchronous.png)

## Multi-Agent Collaboration

Multi-agent systems excel when agents collaborate. Consider assembling the team like a manager would with humans.

Financial analysis is another multi-agent use case. The arrangement of agents varies by task. For example, in sequential tasks, each agent passes its output to the next, though context might fade over time. Processes can be:
- Sequential
- Hierarchical, with a manager aggregating agent outputs
- Collaborative, where agents work in parallel

Agents can also ask each other questions, even with a managing agent overseeing them.

## Multi-Agent Collaboration for Financial Analysis

The team includes data analyst, trading strategy developer, trade advisor, and risk advisor agents.

CrewAI’s library includes a “process” method that supports hierarchical management. Currently, CrewAI creates the manager automatically, but future versions will allow greater customization.

## Build a Crew to Tailor Job Applications

Agents look at job postings and tailor resumes for applications.

**Goal**: Maximize the applicant’s chances of landing an interview.  
**Process**: Learn job requirements, match them to the applicant's skills, reshape the resume, rewrite with appropriate language, and prepare interview talking points.

Agents:
- Tech job researcher
- Personal profiler for engineers
- Resume strategist for engineers
- Engineer interview preparer

## Next Steps with AI Agent Systems

Suggested next steps:
- CrewAI agents documentation, including a CrewAI assistant
- CrewAI videos on YouTube
- Paper: [ChatDev: Communicative Agents for Software Development](https://arxiv.org/abs/2307.07924)