---
author: "[[openai.com]]"
title: 'What Makes a Great ChatGPT App'
date: "2025-11-26"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://developers.openai.com/images/blog/apps-blog-visual.png)

## Metadata
- Author: [[openai.com]]
- Full Title: What Makes a Great ChatGPT App
- URL: https://developers.openai.com/blog/what-makes-a-great-chatgpt-app

## Highlights
- This post builds on that launch with practical guidance for developers, PMs, and designers on how to choose the right use case and design an app that’s actually useful once it’s live. ([View Highlight](https://read.readwise.io/read/01kazmhq51hkcfzde9vxx9e0mg))
- When teams build their first ChatGPT app, the starting point is often:
  *“We already have a product. Let’s bring it into ChatGPT.”*
  This often starts with taking an existing web or mobile experience — screens, menus, flows — and trying to reshape it for chat. It’s a reasonable instinct; for years, “software” has meant pages, navigation, and UI scaffolding.
  However, building apps for ChatGPT is a different environment. Users aren’t “opening” your app and starting on the home page. They’re having a conversation about something and the model decides when to bring an app into that conversation. They’re entering at a point in time. ([View Highlight](https://read.readwise.io/read/01kazmm0pwevkst05tbg43p4mz))
- Outside of ChatGPT, your app is often the destination. Users:
  1. Tap your icon
  2. Enter your environment
  3. Learn your navigation and UI patterns
  Most product decisions flow from that assumption: “We own the screen.” You can invest heavily in layout, onboarding, and information architecture because users are committing to your space. ([View Highlight](https://read.readwise.io/read/01kazmmf9xe0rg6gp8jny92jd3))
- Inside ChatGPT, your app plays a different role:
  • It’s a **capability** the model can call - for both context and visual engagement.
  • It shows up **inside** an ongoing conversation.
  • It’s one of several tools the model may orchestrate. ([View Highlight](https://read.readwise.io/read/01kazmmkgrgg2she8dn3x892sb))
- **ChatGPT app is a set of well defined tools that can perform tasks, trigger interactions, or access data.**
  This has a few implications:
  • You don’t need to port every feature.
  • You don’t need a full navigation hierarchy.
  • You *do* need a clear, compact API: a handful of operations that are easy to invoke and easy to build on.
  You can think of it this way: your ChatGPT app is a toolkit the model reaches for when the user runs into a specific type of problem. The more precisely that toolkit is defined, the easier it is to use in the flow of conversation. ([View Highlight](https://read.readwise.io/read/01kazmmwygh2p9g3mj38yn7caj))
- **1) New things to know**
  You bring new context to ChatGPT
  • Live prices, availability, inventory
  • Internal metrics, logs, analytics
  • Specialized, subscription-gated, or niche datasets
  • User-specific data (accounts, history, preferences, entitlements)
  • Sensor data, live video streams
  In practice, this often means bridging into systems where data is correct, current, and permissioned. The app becomes the “eyes and ears” of the model in your domain, letting it answer questions with more authority than generic text training ever could. ([View Highlight](https://read.readwise.io/read/01kazmnza2tak29fntxzpf55bt))
- **2) New things to *do***
  You let ChatGPT take actions on the user’s behalf:
  • Create or update records in internal tools
  • Send messages, tickets, approvals, notifications
  • Schedule, book, order, or configure things
  • Trigger workflows (deploy, escalate, sync data)
  • Play interactive games (apply rules, advance turns, track state)
  • Take actions in the physical world (IoT, robotics control, etc.)
  Here, the app is less a source of truth and more a pair of hands. It takes the model’s intent and turns it into concrete changes in the systems your team already lives in—or, in the case of games, concrete changes in the game state that make the experience feel consistent and fair. This is where ChatGPT shifts from a chatbot to an agent in a meaningful way. ([View Highlight](https://read.readwise.io/read/01kazmp2r9h9412ry06wvyvhcb))
- **3) Better ways to show**
  An app can help ChatGPT present information in a GUI, that makes it more digestible or more actionable:
  • Shortlists, comparisons, rankings
  • Tables, timelines, charts
  • Role-specific or decision-specific summaries
  • Visual or structured views of game state (boards, inventories, scores) ([View Highlight](https://read.readwise.io/read/01kazmp97ny4m3y6zvw3vyeezm))
- This is especially valuable when users are making choices or trade-offs. Apps can give the model a language for structure: widgets that have columns, rows, scores, and visuals that match how people actually decide—or, in games, how they understand “where they are” in the world.
  If an app doesn’t clearly move the needle on at least one of **know/do/show**, it tends to feel like a thin wrapper around what the base model already does. Users may not complain explicitly, but its a missed opportunity to provide more meaningful value to the user, whether the app is meant for work or play. ([View Highlight](https://read.readwise.io/read/01kazmpjxjr8tzt1vwygx9ea0m))
- Answer with the Zillow app
  With the Zillow App, the user has full access to the model, plus the ability to search live property listings, filter by criteria, and view rich property details — all without leaving the chat. ([View Highlight](https://read.readwise.io/read/01kazmr5fcskp54prd8dgx9az0))
- The value here is you still get rich context from the model, and also an enriched chat layer that can dynamically interact with your intent. Want to ask it for homes in a specific region? The model invokes the tool on the Zillow MCP server and re-renders the UI layer. ([View Highlight](https://read.readwise.io/read/01kazmqzpv691jygb2gs32eh2t))
- A common first thought is to list all of your product’s features and ask, “How do we bring these into ChatGPT?”
  On paper, that sounds thorough. In practice, it usually produces a large, fuzzy surface area that’s hard for the model to navigate and hard for users to understand. If you struggle to summarize what the app does in one sentence, the model too will have a harder time understanding it. ([View Highlight](https://read.readwise.io/read/01kazv4tsfz5avynjqy1t7kqnp))
- • **List the core jobs-to-be-done -** Identify the specific tasks or outcomes users are trying to accomplish that your product helps make possible. These are the reasons your product exists in the first place. Starting here keeps you anchored in user outcomes instead of feature checklists. 
  Examples:
  • Help someone choose a home.
  • Empower ideas into polished presentations.
  • Translate intent into a delightful discovery experience.
  • Turn raw data into a clear, shareable report. ([View Highlight](https://read.readwise.io/read/01kazv4ya17ynkc3awzhce134m))
- For each job, ask:
  “Where does the base ChatGPT experience fall short without us?”
  Common answers:
  • It can’t see live or private data.
  • It can’t take real actions in our systems.
  • It can’t easily produce the structured or visual output users need. ([View Highlight](https://read.readwise.io/read/01kazv50nnk4za0fqhs63brw6b))
- • This is where your unique value starts to show up. You’re no longer thinking “What can we technically expose?” but “Where are we uniquely helpful?” ([View Highlight](https://read.readwise.io/read/01kazv53njt67ms825526a9brn))
- • Turn those gaps into a handful of **clearly named operations**. For example:
  • `search_properties` – return a structured list of candidate homes.
  • `explain_metric_change` – fetch relevant data and summarize likely drivers.
  • `generate_campaign_variants` – create multiple ad variants with metadata.
  • `create_support_ticket` – open a ticket and return a summary + link. ([View Highlight](https://read.readwise.io/read/01kazv55kzzpw5rn7zwthkepqx))
- These operations are:
  • Concrete enough for the model to choose confidently
  • Simple enough to mix with other steps in a conversation
  • Directly tied to value, not to your entire product map
  Another way to think about this: if someone on your team asked, “What are the three things we absolutely need this app to do well?” those should map almost one-to-one to your product’s capabilities.
  For example, the Canva app in ChatGPT can generate an entire presentation draft and the user can enter full screen mode that matches user expectations for navigating a slide deck, but deeper slide-by-slide editing still happens in the full Canva editor. ([View Highlight](https://read.readwise.io/read/01kazv5e8gyzt2gh7qfx55nm68))
- **a) Vague intent**
  > Help me figure out where to live.
  A good app response will:
  • Use any context already in the thread.
  • Ask one or two clarifying questions at most, if needed.
  • Produce something concrete quickly — for example, a few example cities with short explanations.
  The user should feel like progress has started, not like they’ve been dropped into a multi-step onboarding flow. If they have to answer five questions before seeing anything useful, many will simply stop. ([View Highlight](https://read.readwise.io/read/01kazv5r5m8vw7f76bqaqwd304))
- **Specific intent**
  > Find 3-bedroom homes in Seattle under $1.2M near well-rated elementary schools.
  Here, the app shouldn’t ask the user to repeat themselves. It should:
  • Parse the query.
  • Call the right capabilities.
  • Return a focused set of results with useful structure.
  You can still offer refinements (“Do you care more about commute or school rating?”), but they should feel like optional tuning, not required setup. ([View Highlight](https://read.readwise.io/read/01kazv5z76366a098e3zan95rk))
- **No brand awareness**
  You can’t assume the user knows who you are.
  Your first meaningful response should:
  • Explain your role in one line (“I pull live listings and school ratings so you can compare options.”)
  • Deliver useful output right away.
  • Offer a clear next step (“Ask me to narrow by commute, neighborhood, or budget.”)
  Think of it as a cold start problem: you’re introducing *what* you are, *why* you’re helpful, and *how* to use you — all inside one or two messages. ([View Highlight](https://read.readwise.io/read/01kazv6h3embf3hrt29a2hnnxv))
- You’re designing for two audiences:
  • The human in the chat
  • The model runtime that decides when and how to call your app
  Most teams are comfortable thinking about the first. The second is newer. But if the model can’t understand what your app does or how to use it, your human-facing experience won’t get many chances to run. ([View Highlight](https://read.readwise.io/read/01kazv70995wyj2s5xdfmfn58v))
- There’s a third dimension that matters just as much: **what user data flows through your app when the model calls it.** Good app design isn’t just about clear capabilities, it’s about being disciplined in *what* you ask for and *how* you use it.
  • **Clear, descriptive actions and parameters:** Make it obvious when your app is relevant and how to call it. Use straightforward names (`search_jobs`, `get_rate_quote`, `create_ticket`) and spell out which params are required vs. optional and how to format them. Ambiguity is a tax on routing.
  • **Privacy by design:** Only require fields you truly need. Avoid “blob” params that scoop up extra context. Prefer minimal, structured inputs over “just send the whole conversation.”
  • **Predictable, structured outputs:** Keep schemas stable; include IDs and clear field names. Pair a brief summary (“Three options that match your budget and commute time”) with a machine-friendly list (`[{id, address, price, commute_minutes, school_rating, url}, …]`). This lets the model talk naturally while keeping precise handles on data.
  • **Be intentional about what you do *not* return:** Skip sensitive internals “just in case.” Keep tokens/secrets out of user-visible paths. Redact or aggregate when full fidelity isn’t necessary.
  • **Be explicit about what you collect and why:** Ask for the minimum to do the job. When you need something sensitive (e.g., account access), say why in one sentence. Design actions and schemas so it’s obvious what’s being sent where. ([View Highlight](https://read.readwise.io/read/01kazv744qdcg4c12g73hv7phh))
- In a real ChatGPT session, your app is rarely the only one in play. The model might call on multiple apps in the same conversation.
  From the user’s perspective, it’s one flow. From your perspective, it’s a reminder that you’re part of an ecosystem, not a sealed product. ([View Highlight](https://read.readwise.io/read/01kazv7rn3ngtf7abw5md4ccn8))
