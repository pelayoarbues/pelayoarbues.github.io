---
author: "[[Personal Agent Protocol]]"
title: 'An Open Protocol for Every Company and Every Personal Agent.'
date: "2026-10-12"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://personalagentprotocol.org/og.png)

## Metadata
- Author: [[Personal Agent Protocol]]
- Full Title: An Open Protocol for Every Company and Every Personal Agent.
- URL: https://personalagentprotocol.org/

## Highlights
- Personal agents can discover participating companies, sign users in, and get things done through APIs, web pages, and company agents. Companies decide how to empower agents and what they can do. ([View Highlight](https://read.readwise.io/read/01m4rh63jncsag6aqn1drr0mad))
- People already hand everyday tasks to personal agents, and many of those tasks end at a company. Today it is all or nothing: the company blocks the agent, or the agent signs in as the person and can do anything they can. As agents do more, both sides waste more effort on this, with companies trying to detect agents and agents trying to avoid detection. That doesn't serve anyone, and we don't think it can last. ([View Highlight](https://read.readwise.io/read/01m4rh6b6as8apbadmrkmzs3wd))
- We think everyone is better off with more choices between those two extremes. So we built **Personal Agent Protocol**, or “Poppy” for short: a shared way for companies to decide what agents can do, and for people to decide what their agent can do for them.
  1. **Blocked**No agents allowed.
  2. **Search rooms**Any agent
  3. After the user signs in
  4. With the user's approval ([View Highlight](https://read.readwise.io/read/01m4rh6r1jap5yxv1tj3wzpxsm))
- Any company can take part, whether it offers a website, APIs, an MCP server, or its own agent. Users bring the personal agent of their choice. ([View Highlight](https://read.readwise.io/read/01m4rh6zkn35td7j0jerv2qt4r))
- Users
  More done with their own agent
  • **Get more done with their personal agent** at every company that supports the protocol.
  • **Sign in directly and control permissions:** users sign in on the company's own page and choose whether their personal agent can view their account, make changes, or both.
  • **Get things done faster** when their personal agent can work with the company directly instead of clicking through its website. ([View Highlight](https://read.readwise.io/read/01m4rh777q354tb6rs7twvyf3b))
- Personal agents
  Faster, simpler access
  • **More efficient access** through the company's APIs or a conversation with its agent, instead of navigating web pages.
  • **One standard protocol** across every participating company, so each new company works the same way.
  • **Sign-in support** even when the user can't share their credentials with the agent: they sign in on the company's own page. ([View Highlight](https://read.readwise.io/read/01m4rh7extktazrn0egqtz9n24))
- Insight and control
  • **Start with what they have:** publish a website, APIs, or agent, and add more over time.
  • **Understand customer behavior across channels,** since each session follows the user through the company's APIs, website, and agent conversations.
  • **Control what agents can and can't do:** which personal agents to allow, how users sign in, and whether agents can view accounts or make changes. ([View Highlight](https://read.readwise.io/read/01m4rh7mdrwebvxzgsextam2nw))
- Personal Agent Protocol covers the complete interface between a personal agent and a company: how the agent finds the company, who it acts for, what it is allowed to do, and how it gets work done through APIs, web pages, or a conversation with the company's agent. A company publishes once, and any personal agent can work with it. The protocol builds on widely used open standards, so teams can implement it with libraries and tools that already exist. ([View Highlight](https://read.readwise.io/read/01m4rh7t23ptmj4vk0chnegnn1))
- A document at `/.well-known/poppy.json` identifies the organization and says how to start sessions and sign in, along with the APIs and company agent it offers. ([View Highlight](https://read.readwise.io/read/01m4rh7zfy0epf0vmn5ndwxjj1))
- The user signs in on the company's own page through standard OAuth and chooses what access to grant. If the company allows it, the personal agent can also sign in for the user with the credentials the company asks for, such as an email and password. ([View Highlight](https://read.readwise.io/read/01m4rh832rknya3rm92qwshrss))
- One session covers API calls, conversations, and web browsing. APIs and conversations use a short-lived session token, a signed JWT. Signing in gives the personal agent lasting access, within the scopes the company allows for that sign-in type, until the user or the company revokes it. ([View Highlight](https://read.readwise.io/read/01m4rh8df5anvtwfdq9qxjdv3q))
- Working together
  How the personal agent and the company interact once connected.
  Companies choose what to offer: OpenAPI, MCP, or web pages, alongside an optional company agent. Each API keeps its own schema. ([View Highlight](https://read.readwise.io/read/01m4rh8gw794feck2d8yhr5jzn))
- Web page access
  A personal agent can browse the company's website in the same session. The agent's browser proves which session it belongs to, and the company sets its own cookie, so it recognizes the user and applies their sign-in permissions on each page.
  The personal agent can talk with the company for the user, or let the user talk with it directly, using text plus structured data. Both sides say whether a person or an AI is speaking, so conversations can adapt to who's participating.
  Discovery, identity, APIs, and conversations are all open to extension. Companies and industries can build on them to add things like payments, push notifications, or interactive elements. ([View Highlight](https://read.readwise.io/read/01m4rh8xsxvx54v6p6n0d1yha1))
- Three everyday tasks
  Each company chooses the interface that fits the task. Follow one task through Atlas, the user's personal agent, and see what the company exposes behind it.
  Atlas finds Manzanita's company agent, asks about a return, and has the user sign in when Manzanita needs to see the order.
  The user wants to return a jacket. Atlas reads poppy.json, a file Manzanita publishes on its website, to learn how to reach Manzanita's own agent. ([View Highlight](https://read.readwise.io/read/01m4rh950528g4mghkvejgdy48))
