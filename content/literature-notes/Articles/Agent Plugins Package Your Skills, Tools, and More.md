---
author: "[[Kevin Hou]]"
title: 'Agent Plugins Package Your Skills, Tools, and More'
date: "2026-08-09"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/agent-plugins-meta-1234x802.2e16d0ba.fill-1200x600.jpg)

## Metadata
- Author: [[Kevin Hou]]
- Full Title: Agent Plugins Package Your Skills, Tools, and More
- URL: https://developers.googleblog.com/agent-plugins-package-your-skills-tools-and-more/

## Highlights
- [Agent Plugins 1.0.0](https://agent-plugins.org/specification) is an open, vendor-neutral specification for packaging Agent Skills and MCP servers into portable plugins. It was published by a TSC of Core Maintainers from Amazon, Cursor, Microsoft, OpenAI, and Vercel. Google is joining that group as a Core Maintainer, represented by Kevin Hou, and we're starting to build support into our own products. ([View Highlight](https://read.readwise.io/read/01kzhhf69yms47cv4f43kecf9r))
- You wrote a skill. You wrote a script or an MCP server to go with your skill. Together they do one useful thing well — they know how to query your reporting database and how to turn the results into the weekly summary your team actually reads.
  Then you try to ship it to a second client.
  The skill is fine. The MCP server is fine. But the wrapper around them is not: the directory layout is different, the manifest wants different top-level metadata, the MCP configuration uses a different shape and infers transports differently. So you fork the package, maintain two copies of components that were never different in the first place, and watch them drift. ([View Highlight](https://read.readwise.io/read/01kzhhfdwtnt523wve0etrzpph))
- ![](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/agent-plugins-figure-fork-and-drift.original.jpg) ([View Highlight](https://read.readwise.io/read/01kzhhgbvtqhxmb054e84m2kn4))
- The core problem isn't the components. It's the manifest. ([View Highlight](https://read.readwise.io/read/01kzhhgrdj7xgs2rb521371xrt))
- [Agent Skills](https://agent-plugins.org/) already gives agents reusable instructions and resources. [MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) already connects agents to tools and services. Both are portable on their own. What has not been portable is the box you put them in — and that box is the thing every client had to invent for itself.
  Plugin authors shouldn't have to choose between reaching every client and using what makes each client good. They should get both: one predictable structure for the parts that are genuinely the same, and room for each client to keep innovating on the parts that aren't.
  This is why we're joining the Agent Plugins as core maintainers, and starting to integrate into our products. ([View Highlight](https://read.readwise.io/read/01kzhhh817gwn2ps8ycyswgqz9))
- Everything else is found at a fixed location. Skills live in `skills/`, one subdirectory each, in the format the Agent Skills specification already defines. MCP servers are declared in `mcp.json`, with an explicit type on every entry. A client never has to guess a transport from the shape of a config object, it will work on stdio, Streamable HTTP, or legacy HTTP+SSE. ([View Highlight](https://read.readwise.io/read/01kzhhj3rj8yk0g0eqjwphme4z))
- Notice what `plugin.json` cannot do. It cannot relocate components, and it cannot declare them inline. There is no discovery path to configure and no precedence order to learn. If `skills/` isn't there, the client loads what is there and moves on. A `mcp.json` server that fails to start doesn't take the plugin's skills down with it — the client skips that entry, keeps loading, and reports the failure. Independent components fail independently. ([View Highlight](https://read.readwise.io/read/01kzhhk8ykvenn4d121r5fzq8y))
- That last reverse-domain directory is the escape hatch. `com.example.client/` is an extension namespace owned entirely by one client, for hooks, agents, commands, or anything else that client wants to add. Clients that don't recognize it ignore it. The portable core stays small because the non-portable parts have somewhere legitimate to go. ([View Highlight](https://read.readwise.io/read/01kzhhkkx6dxnr6cdhmd3dhn8y))
- Before you reach for a plugin, ask whether you need one. If you're shipping a single MCP server to a single client, `mcp.json` on its own is still the simpler answer. If you have a single skill, you don’t need a plugin. Agent Plugins earns its keep when you have components that belong together and need to travel together. ([View Highlight](https://read.readwise.io/read/01kzhhmcc22ta4k4jy5z7j6gna))
- ![](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/agent-plugins-figure-not-every-skill.original.jpg) ([View Highlight](https://read.readwise.io/read/01kzhhmn40w44p6rdnngsdq18b))
- ![](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/agent-plugins-figure-not-every-skill.original.jpg) ([View Highlight](https://read.readwise.io/read/01kzhhmn76kqqzf2pdnsx6x90c))
- Agent Plugins v1 is a package format and nothing more. It defines no install mechanism, no distribution protocol, no permission model, no sandboxing requirements, no trust or provenance verification, and no user experience. Those are named openly in the project's [future considerations](https://github.com/agentplugins/agent-plugins-spec/blob/main/FUTURE_CONSIDERATIONS.md), not quietly omitted. ([View Highlight](https://read.readwise.io/read/01kzhhn4ewcpphcet6m4wyvj72))
- This is the right call. Installation, policy, enterprise controls, and approval UX are quite different across clients like an IDE, a CLI, and a managed enterprise platform. Each agentic application has genuinely different obligations to their users. ([View Highlight](https://read.readwise.io/read/01kzhhn9h0raxpkh3a7333trgm))
- Packaging is one job. Discovering and getting a plugin to a user is a different job, and it's worth being precise about which layer does what. ([View Highlight](https://read.readwise.io/read/01kzhhndqzaez1k7yn2zhrdh2e))
- • **Find it —** [**Agentic Resource Discovery**](https://agenticresourcediscovery.org/)**.** An open discovery protocol that lets a client ask "what is available for this task?" and get back matching resources. ARD already treats a Plugin as a first-class agentic resource type, alongside agents, MCP servers, and Skills. It sits entirely before invocation.
  • **Describe it —** [**AI Catalog**](https://github.com/Agent-Card/ai-catalog)**.** The entry format ARD indexes. A [proposed change](https://github.com/Agent-Card/ai-catalog/pull/93) registers `application/agent-plugins+json` as a known type, so a catalog entry can point at a `plugin.json` the way an existing entry points at an agent card or `mcp.json`.
  • **Package it — Agent Plugins.** One directory, fixed locations, portable across clients.
  • **Run it — MCP and Agent Skills.** The execution contracts that were already portable. ([View Highlight](https://read.readwise.io/read/01kzhhnkxeyc9b0bg50bgy63g1))
- Each layer is independently useful and independently adoptable. You can publish a plugin with no catalog entry, catalog a resource that isn't a plugin, and run skills with no plugin at all. Adopting one never obligates you to the next.
  ![](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/agent-plugins-figure-ecosystem-layers.original.jpg) ([View Highlight](https://read.readwise.io/read/01kzhhqtpd2camz653s6rngegq))
- Build one. Create a directory, add a `plugin.json` with a name, write a quick “hello world” instruction to `skills/greet/SKILL.md.` That's a valid plugin, and it takes about a minute. ([View Highlight](https://read.readwise.io/read/01kzhhr2rczbgt05524gthw3gn))
- Packaging is unglamorous infrastructure, and unglamorous infrastructure is exactly the kind of thing that should be shared rather than reinvented five times. Agent Plugins is deliberately small in scope, does one thing well, and is open and interoperable; that's why we're backing it. ([View Highlight](https://read.readwise.io/read/01kzhhratx1nd7tsj1mkxfm2cs))
