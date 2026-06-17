---
author: "[[Edwin Lisowski]]"
title: 'What Every AI Engineer Should Know About A2A, MCP & ACP'
date: "2025-05-13"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*bWg9FT2_smxDuWwntjFWVg.png)

## Metadata
- Author: [[Edwin Lisowski]]
- Full Title: What Every AI Engineer Should Know About A2A, MCP & ACP
- URL: https://medium.com/@elisowski/what-every-ai-engineer-should-know-about-a2a-mcp-acp-8335a210a742

## Highlights
- **Contextual Data Injection** 
  MCP lets you pull in external resources — like files, database rows, or API responses — right into the prompt or working memory. All of it comes through a standardized interface, so your LLM can stay lightweight and clean. ([View Highlight](https://read.readwise.io/read/01jv2wtcxt0drcbhadrr76502e))
- **Function Routing & Invocation** 
  MCP also lets models call tools dynamically. You can register capabilities like `searchCustomerData` or `generateReport`, and the LLM can invoke them on demand. It’s like giving your AI access to a toolbox, but without hardwiring the tools into the model itself. ([View Highlight](https://read.readwise.io/read/01jv2wthbf5vx2b00mvnsgmyd2))
- **Prompt Orchestration** 
  Rather than stuffing your prompt with every possible detail, MCP helps assemble just the context that matters. Think modular, on-the-fly prompt construction — smarter context, fewer tokens, better outputs. ([View Highlight](https://read.readwise.io/read/01jv2wv21w74eqveqkhs7hqhah))
- Implementation Characteristics
  • Operates over HTTP(S) with JSON-based capability descriptors
  • Designed to be model-agnostic — any LLM with a compatible runtime can leverage MCP-compliant servers
  • Compatible with API gateways and enterprise authentication standards (e.g., OAuth2, mTLS) ([View Highlight](https://read.readwise.io/read/01jv2wv85ph6cbtcfmh0pknata))
- Engineering Use Cases
  ➀ **LLM integrations for internal APIs:** Enable secure, read-only or interactive access to structured business data without exposing raw endpoints.
  ➁ **Enterprise agents:** Equip autonomous agents with runtime context from tools like Salesforce, SAP, or internal knowledge bases.
  ➂ **Dynamic prompt construction:** Tailor prompts based on user session, system state, or task pipeline logic ([View Highlight](https://read.readwise.io/read/01jv2wvn7mytwqzwcww1wdk04f))
- [The Agent Communication Protocol (ACP) is an open standard originally proposed by BeeAI and IBM](https://github.com/orgs/i-am-bee/discussions/284) to enable structured communication, discovery, and coordination between AI agents operating in the same local or edge environment. ([View Highlight](https://read.readwise.io/read/01jv2ww41n8hsm0k0mdw7m4f6r))
- Unlike cloud-oriented protocols such as A2A or context-routing protocols like MCP, ACP is designed for local-first, real-time agent orchestration with minimal network overhead and tight integration across agents deployedc within a shared runtime. ([View Highlight](https://read.readwise.io/read/01jv2ww6gsjw3nr5at0fth43ms))
- ACP defines a decentralized agent environment in which:
  • Each agent advertises its identity, capabilities, and state using a local broadcast/discovery layer.
  • Agents communicate through event-driven messaging, often using a local bus or IPC (inter-process communication) system.
  • A runtime controller (optional) can orchestrate agent behavior, aggregate telemetry, and enforce execution policies.
  ACP agents typically operate as lightweight, stateless services or containers with a shared communication substrate. ([View Highlight](https://read.readwise.io/read/01jv2wwvvtjzgta1j8qsacnnjx))
- Implementation Characteristics
  • Designed for low-latency environments (e.g., local orchestration, robotics, offline edge AI)
  • Can be implemented over gRPC, ZeroMQ, or custom runtime buses
  • Emphasizes local sovereignty — no cloud dependency or external service registration required
  • Supports capability typing and semantic descriptors for automated task routing ([View Highlight](https://read.readwise.io/read/01jv2wxq3wcjfpwfq81235g4cx))
- Implementation Characteristics
  • Designed for low-latency environments (e.g., local orchestration, robotics, offline edge AI)
  • Can be implemented over gRPC, ZeroMQ, or custom runtime buses
  • Emphasizes local sovereignty — no cloud dependency or external service registration required
  • Supports capability typing and semantic descriptors for automated task routing
  Engineering Use ([View Highlight](https://read.readwise.io/read/01jv2wxbg70s7a6tjx8e74hfk3))
- Engineering Use Cases
  ➀ **Multi-agent orchestration on edge devices** (e.g., drones, IoT clusters, or robotic fleets)
  ➁ **Local-first LLM systems** coordinating model invocations, sensor inputs, and action execution
  ➂ **Autonomous runtime environments** where agents must coordinate without centralized cloud infrastructure ([View Highlight](https://read.readwise.io/read/01jv2x0bys0zcy09qpnpan9j1d))
- In short, ACP offers a runtime-local protocol layer for modular AI systems — prioritizing low-latency coordination, resilience, and composability. It’s a natural fit for privacy-sensitive, autonomous, or edge-first deployments where cloud-first protocols are impractical. ([View Highlight](https://read.readwise.io/read/01jv2x0d1eqab95cwgyn5bhkm3))
- [The Agent-to-Agent (A2A) Protocol, introduced by Google,](https://github.com/google/A2A) is a cross-platform specification for enabling AI agents to communicate, collaborate, and delegate tasks across heterogeneous systems. ([View Highlight](https://read.readwise.io/read/01jv2x0jr3hw7ps9qt77gmec3w))
- Unlike ACP’s local-first focus or MCP’s tool integration layer, A2A addresses horizontal interoperability — standardizing how agents from different vendors or runtimes can exchange capabilities and coordinate workflows over the open web. ([View Highlight](https://read.readwise.io/read/01jv2x0wh4x6xwc1eqkx15b6m4))
- A2A defines a HTTP-based communication model where agents are treated as interoperable services. Each agent exposes an “Agent Card” — a machine-readable JSON descriptor detailing its identity, capabilities, endpoints, and authentication requirements.
  Agents use this information to:
  • Discover each other programmatically
  • Negotiate tasks and roles
  • Exchange messages, data, and streaming updates
  A2A is transport-layer agnostic in principle, but currently specifies JSON-RPC 2.0 over HTTPS as its core mechanism for interaction. ([View Highlight](https://read.readwise.io/read/01jv2x18f6w8ds85b1m80nqebj))
- Core Components
  **Agent Cards 
  **JSON documents describing an agent’s capabilities, endpoints, supported message types, auth methods, and runtime metadata.
  **A2A Client/Server Interface 
  **Each agent may function as a client (task initiator), a server (task executor), or both, enabling dynamic task routing and negotiation.
  **Message & Artifact Exchange** 
  Supports multipart tasks with context, streaming output (via SSE), and persistent artifacts (e.g., files, knowledge chunks).
  **User Experience Negotiation** 
  Agents can adapt message format, content granularity, and visualization to match downstream agent capabilities. ([View Highlight](https://read.readwise.io/read/01jv2x1hjhc0tzz93p7ej32nry))
- Security Architecture
  • OAuth 2.0 and API key-based authorization
  • Capability-scoped endpoints — agents only expose functions required for declared interactions
  • Agents can operate in “opaque” mode — hiding internal logic while revealing callable services ([View Highlight](https://read.readwise.io/read/01jv2x2b2gx2k13q54d5c4n5zr))
- Implementation Characteristics
  • Web-native by design: built on HTTP, JSON-RPC, and standard web security
  • Model-agnostic: works with any agent system (LLM or otherwise) that implements the protocol
  • Supports **task streaming** and multi-turn collaboration with lightweight payloads ([View Highlight](https://read.readwise.io/read/01jv2x2m4vkcbfvbqsx25v8yzb))
- Engineering Use Cases
  ➀ **Cross-platform agent ecosystems** where agents from different teams or vendors need to interoperate securely
  ➁ **Distributed agent orchestration** in cloud-native AI environments (e.g., Vertex AI, LangChain, HuggingFace Agents)
  ➂ **Multi-agent collaboration frameworks**, such as enterprise AI workflows that span multiple systems (e.g., CRM, HR, IT agents) ([View Highlight](https://read.readwise.io/read/01jv2x2reqbt5fxnsh0p3dx7bc))
- ![](https://miro.medium.com/v2/resize:fit:700/1*TU0BHEiLmZZ-a2brrGQ1xw.png) ([View Highlight](https://read.readwise.io/read/01jv2x2tjxp06tpnpd420n02nn))
- ![](https://miro.medium.com/v2/resize:fit:700/1*TU0BHEiLmZZ-a2brrGQ1xw.png) ([View Highlight](https://read.readwise.io/read/01jv2x2tmp63qdxkb9rm2qckym))
- A2A + MCP
  A2A and MCP aren’t fighting each other — they’re solving totally different parts of the agentic AI puzzle, and they actually fit together pretty nicely.
  ![](https://miro.medium.com/v2/resize:fit:700/1*bWg9FT2_smxDuWwntjFWVg.png) ([View Highlight](https://read.readwise.io/read/01jv2x3hpyxk3t9gsy4crn0yv2))
- Think of MCP as the protocol that lets AI agents plug into the world. It gives them access to files, APIs, databases — basically, all the structured context they need to do something useful. Whether it’s pulling real-time sales data or generating a custom report, MCP handles the connection to tools and data. ([View Highlight](https://read.readwise.io/read/01jv2x3q6ark8m3erbvahve9bs))
- Now layer on A2A. This is where agents start collaborating. A2A gives them a shared language and set of rules to discover each other, delegate tasks, and negotiate how they’ll work together — even if they’re built by different vendors or running on different platforms. ([View Highlight](https://read.readwise.io/read/01jv2x3s7bnjzntkcks77ahss0))
- So here’s a simple way to think about it: 
  ⟢ MCP connects AI to tools. 
  ⟢ A2A connects AI to other AI.
  > Together, they form a strong modular base for building smart, collaborative systems. ([View Highlight](https://read.readwise.io/read/01jv2x3x7003kv3734desxw7rm))
- Then there’s ACP, which takes a different approach altogether. It’s all about local-first agent coordination — no cloud required. Instead of using HTTP and web-based discovery, ACP enables agents to find and talk to each other right inside a shared runtime. ([View Highlight](https://read.readwise.io/read/01jv2x43ytx8025phak5ypmx4b))
- This is perfect for situations where:
  • You have limited bandwidth or need low-latency (like in robotics or on-device assistants),
  • Privacy matters and you want to keep everything offline,
  • Or you’re deploying in environments cut off from the internet (e.g., factory floors, edge nodes).
  > ACP isn’t trying to compete with A2A — it just fills a different niche. But in some setups, especially in tightly controlled environments, ACP might replace A2A entirely, because it skips the overhead of web-native protocols and just gets the job done locally. ([View Highlight](https://read.readwise.io/read/01jv2x4cce3vs5feksabseg3dm))
- **Best case?** We see convergence. Imagine a unified agent platform where A2A handles the back-and-forth between agents, MCP manages access to tools and data, and ACP-style runtimes plug in for edge or offline scenarios. Everything just works, and developers can build on top without worrying which protocol is doing what behind the scenes. ([View Highlight](https://read.readwise.io/read/01jv2x4gd0x44xfxkscnrexv3b))
- **Worst case?** Things fragment. Different vendors push their own flavors of A2A or MCP, and we end up with a mess — like the early days of web services, when nothing talked to anything else without a lot of glue code. ([View Highlight](https://read.readwise.io/read/01jv2x4mwg3cykt7cpt35pxys9))
- **The middle ground?** Open-source tools and middleware could save the day. These projects would sit between agents and protocols, abstracting the differences and giving devs a clean, unified API — while translating under the hood depending on where and how your agents run. ([View Highlight](https://read.readwise.io/read/01jv2x4q6xcs40862qwcjmgvch))
- In short: we’re early. But how we build and adopt these standards now will shape whether AI agents become a cohesive ecosystem — or a patchwork of silos. ([View Highlight](https://read.readwise.io/read/01jv2x4v00jfxt87wefm4npw1s))
