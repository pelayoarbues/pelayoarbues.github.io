---
author: "[[anthropic.com]]"
title: 'Customize Claude Code With Plugins'
date: "2025-10-11"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.anthropic.com/api/opengraph-illustration?name=Object%20CodeDocument&backgroundColor=clay)

## Metadata
- Author: [[anthropic.com]]
- Full Title: Customize Claude Code With Plugins
- URL: https://www.anthropic.com/news/claude-code-plugins

## Highlights
- Claude Code now supports plugins: custom collections of slash commands, agents, MCP servers, and hooks that install with a single command. ([View Highlight](https://read.readwise.io/read/01k77q6p0yyb9cgj2dep3fp050))
- Slash commands, agents, MCP servers, and hooks are all extension points you can use to customize your experience with Claude Code. As we've rolled them out, we've seen users build increasingly powerful setups that they want to share with teammates and the broader community. We built plugins to make this easier. ([View Highlight](https://read.readwise.io/read/01k77q6ysrsj5jgxfszrs34v2y))
- Plugins are a lightweight way to package and share any combination of:
  • **Slash commands**: Create custom shortcuts for frequently-used operations
  • **Subagents**: Install purpose-built agents for specialized development tasks
  • **MCP servers**: Connect to tools and data sources through the Model Context Protocol
  • **Hooks**: Customize Claude Code's behavior at key points in its workflow ([View Highlight](https://read.readwise.io/read/01k77q74pmzg3h5bs68300p7z5))
- You can install plugins directly within Claude Code using the `/plugin` command, now in public beta. They’re designed to toggle on and off as needed. Enable them when you need specific capabilities and disable them when you don’t to reduce system prompt context and complexity. ([View Highlight](https://read.readwise.io/read/01k77q7d976t5b4p2mzxtx48x6))
- Moving forward, plugins will be our standard way to bundle and share Claude Code customizations, and we’ll continue to evolve the format as we add more extension points. ([View Highlight](https://read.readwise.io/read/01k77q7ymsbtbqepf0b22gqz6f))
- Use cases
  Plugins help you standardize Claude Code environments around a set of shared best practices. Common plugin use cases include:
  • **Enforcing standards:** Engineering leaders can maintain consistency across their team by using plugins to ensure specific hooks run for code reviews or testing workflows
  • **Supporting users**: Open source maintainers, for example, can provide slash commands that help developers use their packages correctly
  • **Sharing workflows:** Developers who build productivity-boosting workflows—like debugging setups, deployment pipelines, or testing harnesses—can easily share them with others
  • **Connecting tools:** Teams that need to connect internal tools and data sources through MCP servers can use plugins with the same security and configuration protocols to speed up the process
  • **Bundling customizations:** Framework authors or technical leads can package multiple customizations that work together for specific use cases ([View Highlight](https://read.readwise.io/read/01k77q87ttgnjfyp2e4rhv89xk))
- To make it easier to share these customizations, anyone can build and host plugins and create plugin marketplaces—curated collections where other developers can discover and install plugins.
  You can use plugin marketplaces to share plugins with the community, distribute approved plugins across your organization, and build on existing solutions for common development challenges. ([View Highlight](https://read.readwise.io/read/01k77q8m8dtgtyefrrqh18ehds))
- To host a marketplace, all you need is a git repository, GitHub repository, or URL with a properly formatted `.claude-plugin/marketplace.json` file. See our documentation for details.
  To use plugins from a marketplace, run `/plugin marketplace add user-or-org/repo-name`, then browse and install plugins using the `/plugin` menu. ([View Highlight](https://read.readwise.io/read/01k77q8rgeggna75xd6b4erzkt))
- Plugin marketplaces amplify the best practices our community has already developed, and community members are leading the way. For instance, engineer Dan Ávila's [plugin marketplace](https://www.aitmpl.com/plugins) offers plugins for DevOps automation, documentation generation, project management, and testing suites, while engineer Seth Hobson has curated over 80 specialized sub-agents in his [GitHub repository](https://github.com/wshobson/agents), giving developers instant access via plugins. ([View Highlight](https://read.readwise.io/read/01k77q954mpamyjez9ry85s3dv))
- Plugins are now in public beta for all Claude Code users. Install them with the `/plugin` command and they'll work across your terminal and VS Code. ([View Highlight](https://read.readwise.io/read/01k77q9dmrk6hzjwxt5dbpay6v))
