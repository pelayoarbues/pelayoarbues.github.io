---
author: "[[Fly]]"
title: 'You Should Write an Agent'
date: "2025-11-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://fly.io/blog/everyone-write-an-agent/assets/agents-cover.webp)

## Metadata
- Author: [[Fly]]
- Full Title: You Should Write an Agent
- URL: https://fly.io/blog/everyone-write-an-agent/?utm_source=tldrnewsletter

## Highlights
- Agents are the most surprising programming experience I’ve had in my career. Not because I’m awed by the magnitude of their powers — I like them, but I don’t like-like them. It’s because of how easy it was to get one up on its legs, and how much I learned doing that. ([View Highlight](https://read.readwise.io/read/01k9zky8bvsvpysqyvxp07dtdy))
- A subtler thing to notice: we just had a multi-turn conversation with an LLM. To do that, we remembered everything we said, and everything the LLM said back, and played it back with every LLM call. The LLM itself is a stateless black box. The conversation we’re having is an illusion we cast, on ourselves. ([View Highlight](https://read.readwise.io/read/01ka0gs9s4vcxg9hs2eh6e733s))
- The 15 lines of code we just wrote, a lot of practitioners wouldn’t call an “agent”. [An According To Simon “agent”](https://simonwillison.net/2025/Sep/18/agents/) is (1) an LLM running in a loop that (2) uses tools. We’ve only satisfied one predicate. ([View Highlight](https://read.readwise.io/read/01ka0gsjp4bfk6pqpknb5xs7nx))
- Did you notice where I wrote the loop in this agent to go find and ping multiple Google properties? Yeah, neither did I. All we did is give the LLM permission to ping stuff, and it figured out the rest. ([View Highlight](https://read.readwise.io/read/01ka0gx6bpj6hjmdj994dcbemz))
- **What happened here:** since a big part of my point here is that an agent loop is incredibly simple, and that all you need is the LLM call API, it’s worth taking a beat to understand how the tool call actually worked. Every time we `call` the LLM, we’re posting a list of available tools. When our prompt causes the agent to think a tool call is warranted, it spits out a special response, telling our Python loop code to generate a tool response and `call` it in. That’s all `handle_tools` is doing. ([View Highlight](https://read.readwise.io/read/01ka0gxhvd5p6psn2zc2ytwrs0))
- You can see now how hyperfixated people are on Claude Code and Cursor. They’re fine, even good. But here’s the thing: you couldn’t replicate Claude Sonnet 4.5 on your own. Claude Code, though? The TUI agent? Completely in your grasp. Build your own light saber. Give it 19 spinning blades if you like. And stop using [coding agents as database clients](https://simonwillison.net/2025/Aug/9/). ([View Highlight](https://read.readwise.io/read/01ka0gz6jy82e26a9wcdpx3vsv))
- Another thing to notice: we didn’t need MCP at all. That’s because MCP isn’t a fundamental enabling technology. The amount of coverage it gets is frustrating. It’s barely a technology at all. MCP is just a plugin interface for Claude Code and Cursor, a way of getting your own tools into code you don’t control. Write your own agent. Be a programmer. Deal in APIs, not plugins. ([View Highlight](https://read.readwise.io/read/01ka0gzde7x79xzcgzkpwyy7f6))
- When you read a security horror story about MCP your first question should be why MCP showed up at all. By helping you dragoon a naive, single-context-window coding agent into doing customer service queries, MCP saved you a couple dozen lines of code, tops, while robbing you of any ability to finesse your agent architecture. ([View Highlight](https://read.readwise.io/read/01ka0h000xgz58drqj2c0c9vkj))
- Security for LLMs is complicated and I’m not pretending otherwise. You can trivially build an agent with segregated contexts, each with specific tools. That makes LLM security interesting. But I’m a vulnerability researcher. It’s reasonable to back away slowly from anything I call “interesting”. ([View Highlight](https://read.readwise.io/read/01ka0h0g1b6r9qwmt8ww9se3kt))
- Similar problems come up outside of security and they’re fascinating. Some early adopters of agents became bearish on tools, because one context window bristling with tool descriptions doesn’t leave enough token space left to get work done. But why would you need to do that in the first place? ([View Highlight](https://read.readwise.io/read/01ka0h0wytwtwafec1xycgwzcd))
- So, just like you, I rolled my eyes when “Prompt Engineering” turned into “Context Engineering”. Then I wrote an agent. Turns out: context engineering is a straightforwardly legible programming problem. ([View Highlight](https://read.readwise.io/read/01ka0h1t5rkjray1zkqdzpy9q7))
- Each input you feed in, each output you save, each tool you describe, and each tool output eats tokens (that is: takes up space in the array of strings you keep to pretend you’re having a conversation with a stateless black box). ([View Highlight](https://read.readwise.io/read/01ka0h4a4x68cd68mtnf4as1v1))
- Take “sub-agents”. People make a huge deal out of Claude Code’s sub-agents, but you can see now how trivial they are to implement: just a new context array, another `call` to the model. Give each `call` different tools. Make sub-agents talk to each other, summarize each other, collate and aggregate. Build tree structures out of them. Feed them back through the LLM to summarize them as a form of on-the-fly compression, whatever you like. ([View Highlight](https://read.readwise.io/read/01ka0h53j0ax980hp4skwcrghp))
- You can think all of this is ridiculous because LLMs are just stochastic parrots that hallucinate and plagiarize. But what you can’t do is make fun of “Context Engineering”. If Context Engineering was an [Advent of Code problem](https://adventofcode.com/), it’d occur mid-December. It’s programming. ([View Highlight](https://read.readwise.io/read/01ka0h5xgywf9q0991w849eqg0))
- Agent designs implicate a bunch of open software engineering problems:
  • How to balance unpredictability against structured programming without killing the agent’s ability to problem-solve; in other words, titrating in just the right amount of nondeterminism.
  • How best to connect agents to ground truth so they can’t lie to themselves about having solved a problem to early-exit their loops.
  • How to connect agents (which, again, are really just arrays of strings with a JSON configuration blob tacked on) to do multi-stage operation, and what the most reliable intermediate forms are (JSON blobs? SQL databases? Markdown summaries) for interchange between them
  • How to allocate tokens and contain costs ([View Highlight](https://read.readwise.io/read/01ka0h6y062spnzacyjb9xz75m))
