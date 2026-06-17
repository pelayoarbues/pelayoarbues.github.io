---
author: "[[Xiangpeng's blog]]"
title: 'Stop Building Systems for Agents'
date: "2026-02-03"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.xiangpeng.systems/posts/stop-building-agent-systems/scale.png)

## Metadata
- Author: [[Xiangpeng's blog]]
- Full Title: Stop Building Systems for Agents
- URL: https://blog.xiangpeng.systems/posts/stop-building-agent-systems/?utm_source=tldrnewsletter

## Highlights
- Everyone knows today’s systems are sub-optimal for agents. They waste context, confuse models with unstructured output, and prioritize vision-based human interaction over text-based LLMs.
  So we desperately need to build agent systems that treat LLMs as first-class citizens. I’m sure you can generate a hundred papers or spawn a hundred startups in this direction.
  This approach surely works, but it is not fundamental: if humans can live with it, LLMs **can eventually** catch up. Maybe next month, maybe next year, but eventually LLMs can easily do what humans can do, and then your mission-critical agent-native system becomes a nice-to-have.
  In the LLM era, we need to ask not what humans can do for LLMs, but what LLMs can do for humans.
  So what is the fundamental challenge here? **The velocity at which a human can take responsibility for an agent’s actions.** ([View Highlight](https://read.readwise.io/read/01kghz1x6ckmt5c7the1a0x95r))
- ![](https://blog.xiangpeng.systems/posts/stop-building-agent-systems/scale.png)
  In human society, every functional system relies on an accountability chain. When things break, we need a person to blame, and to fix it.
  For the last few decades, we maintained a subtle balance where the velocity of building systems roughly equals the velocity of accountability.
  LLMs changed this by making it 1000x faster to write code, but our ability to hold accountability for a system barely changed.
  This creates a perfect [accountability sink](https://en.wikipedia.org/wiki/The_Unaccountability_Machine). When a vibe-system fails, we can only hope LLMs will fix it by themselves, they are unaccountable. But unaccountable systems are useless, and will eventually collapse.
  Most LLM-vibed systems look fancy at first, but without a human owning their behavior, they are useless at best, and burdensome to society at worst. ([View Highlight](https://read.readwise.io/read/01kghz3jcggzbvsrvqfpwhabq9))
- **Axiom:** AI systems, no matter how capable, must be held accountable by a human.
  Therefore, the real bottleneck of agent adoption is the **Time to Accountability**: how quickly can a human operator understand, diagnose, and own the system’s behavior? ([View Highlight](https://read.readwise.io/read/01kghz3pn7g7dbs82hhb2samew))
- The “Happen-to-Work” Foundation[](https://blog.xiangpeng.systems/posts/stop-building-agent-systems/#the-happen-to-work-foundation)
  (Un)Surprisingly, this bottleneck has almost nothing to do with AI.
  You join a new team. How long does it take for you to be held accountable for a production system? It happens when you can observe the system interactions, reproduce regressions and failures, and explain what’s going on.
  You may think, isn’t this what we have been preparing for? Hasn’t computer science been working on this for decades? Isn’t this a solved problem? ([View Highlight](https://read.readwise.io/read/01kghz44gezc0nmsp4k34sep52))
- We lack the infrastructure to understand systems from a third-party perspective; instead, the wisdom is hidden in the brain of the engineer who built it. **From a user’s perspective, every thing just happens-to-work.**
  When we compile software, it just happens-to-compile. We hope we are using the right compiler version, compiling the right dependencies, executing in the correct parallel order, and persisting files without corrupting data (in fact, we don’t even know if the data is corrupted or persisted).
  When we issue a database transaction, it just happens-to-work. We hope the data transferred from disk returns in a deterministic order, that transactions respect isolation levels, and that our access controls actually work. ([View Highlight](https://read.readwise.io/read/01kghz4ce1cgmygt4wk96sbgpj))
- LLM Agents Shake Our Fragile Foundation[](https://blog.xiangpeng.systems/posts/stop-building-agent-systems/#llm-agents-shake-our-fragile-foundation)
  How could it be that our modern society is based on something so fragile that almost nobody understands? You might ask.
  The answer is simple: we only spent minimal effort to make it work most of the time. When rare edge cases happen, we just retry and hope they don’t appear. No one is able to reproduce a rare production bug, no one is able to fully explain why performance jitters, and no one is able to fully understand how sub-systems interact.
  It has been fine, you may argue. But no, it’s not fine. As LLMs elevate humanity to the next level, what used to be ok is no longer ok.
  We’re now capable of operating tremendously more systems; tremendous amounts of work will be cheaply digitalized, and a tremendous number of tasks will be cheaply performed by LLMs. When the scale grows 1000 times, our fragile foundation becomes the problem. ([View Highlight](https://read.readwise.io/read/01kghz4jpxxqj8dvdf0mmfgc97))
- So what defines an agent-native system? They are human-centric:
  1. Radically observable.
  2. Radically deterministic.
  **Radically observable** means we must see exactly how the system performs: who invokes a system call, how threads interleave, which function writes to a memory address, etc. We should act like a glass box—observing system behavior from all levels of the stack. If performance regresses, we should see the exact reason, whether the CPU core is overheating or the SSD firmware is garbage collecting.
  **Radically deterministic** means that given the same input, the program produces *exactly* the same output (randomness is controlled via seeds). This applies not only to a single function, but to the entire multi-threaded, distributed system. Threads must interleave in exactly the same way, hash tables must iterate in exactly the same order, and environmental noise (like noisy neighbors) must never alter the software’s execution. ([View Highlight](https://read.readwise.io/read/01kghz1hj46j7xy0q2ckvdrq37))
