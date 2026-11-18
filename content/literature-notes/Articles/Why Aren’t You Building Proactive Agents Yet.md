---
author: "[[LangChain Blog]]"
title: 'Why Aren’t You Building Proactive Agents Yet?'
date: "2026-11-18"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6ae21ba6cf4a24aceb1adef8_proactive-agents-cover-1200x675.png)

## Metadata
- Author: [[LangChain Blog]]
- Full Title: Why Aren’t You Building Proactive Agents Yet?
- URL: https://www.langchain.com/blog/proactive-agents

## Highlights
- We're seeing this happen with proactive agents, where we've noticed that nearly all of your favorite emerging proactive agentic systems are powered by a very simple mechanism: Agent runs as cron tasks, leveraging a more than fifty-year old principle of operating systems for a very modern use case. ([View Highlight](https://read.readwise.io/read/01m7r5esv261njn0qtwkedmes7))
- The future belongs to proactive, always-on, ambient agents. Launches like Muse, Instinct, Dots, Claude Duet, Hone, and more reflect this. ([View Highlight](https://read.readwise.io/read/01m7r5f445c935kvywytqynh3s))
- Crons power a few different capabilities that combine to make these agents proactive, personalized, and [ambient](https://www.langchain.com/blog/introducing-ambient-agents) — that is, they can perform tasks on their own, without being manually instructed. ([View Highlight](https://read.readwise.io/read/01m7r5f8wtywxqk5sapesr9a1y))
- In this blog, we will go through the capabilities that crons unlock, the two core underlying parts you need in order to build agents like this, and then show examples of how you can do this in [Managed Deep Agents](https://app.notion.com/p/Proactive-Agents-406808527b1780d2b7b2e31c5fcf7748?pvs=21). ([View Highlight](https://read.readwise.io/read/01m7r5fg7m5wfw0gp5jsr6g4mr))
- We’ve seen the impact crons can have. Proactivity is the new default for agent behaviour because of the breadth of new functions it unlocks. **More than 70% of Managed Deepagent runs on LangSmith come from scheduled runs** rather than a human typing a message. ([View Highlight](https://read.readwise.io/read/01m7r5fpyf71qdkzwa7sawxyfc))
- **Memory:** A distinctive part of all these agents is that they remember facts about you over longer time horizons. Implementing this partially involves running a background job to condense previous conversations into a denser form of memory. This is colloquially called “dreaming”. Under the hood, this is just a cron that runs on some cadence (e.g. once a day) and updates long-term memory with any learnings from reflecting on the conversations. ([View Highlight](https://read.readwise.io/read/01m7r5jj7sn9qhkdtek37xvayh))
- **Proactiveness**: Part of what makes these agents work is that they initiate communication about an idea that they think you may be interested in. Under the hood, the way that this works is there is some “idea” of what this agent should be accomplishing. ([View Highlight](https://read.readwise.io/read/01m7r5jmw8mdy7bzb125v659xh))
- For a general purpose agent, it may be as simple as being a good assistant: taking steps to anticipate what you need next, like flagging an upcoming deadline, following up on an open thread, or surfacing news related to your work. For specialized agents, like with Hone, the agent is working towards an explicit goal. The cron then runs on some cadence (once an hour) and prompts the agent to explore new actions to progress on its goal. These actions then show up as proactive messages to the user. ([View Highlight](https://read.readwise.io/read/01m7r5jvstncy1zv0akprmf39b))
- **Smart Triage:** There is so much noise in the world. A big use case for always-on agents is to monitor a source of information (Slack, Email, etc) and ping the user with relevant messages. Under the hood, this can be implemented as a cron that runs on a cadence (once every ten minutes) and is prompting an agent to look at an event stream and notify the user of anything of note. ([View Highlight](https://read.readwise.io/read/01m7r5jygcmamqn9288mx9dd09))
- **Follow ups**: Crons aren’t just used in the background. Oftentimes users may ask to be reminded about something at some point. Crons can be used to set a schedule to wake up and remind the user then. ([View Highlight](https://read.readwise.io/read/01m7r5k3mefa5a6skx6ct08enz))
- **Orchestration:** Agent fleets can be managed by a single orchestration agent with the ability to wake itself up in the future. An orchestrator agent can monitor a fleet with crons. It can sleep while waiting for an asynchronous subtask to finish, and wake itself back up again to check in on progress at regular intervals. ([View Highlight](https://read.readwise.io/read/01m7r5k5zjtz55tjrm075qzmga))
- First is a robust cron server. You will need a server that makes it easy for developers to add crons . They should be able to add them with whatever schedule they need, and include a prompt to run as part of that. If the agent needs certain skills or permissions when running, these should be included. If there are a lot of runs at a specific time point, the server should “jitter” them slightly to spread out the load. ([View Highlight](https://read.readwise.io/read/01m7r5kfncq9g53xr36pj2c1ns))
- Second, you need an agent-friendly interface. For actions like follow ups, the agent needs to be able to interact with these reminders. It needs an easy - but governed - way to set up and modify reminders. ([View Highlight](https://read.readwise.io/read/01m7r5khsradf8rpkxvcx1cap3))
