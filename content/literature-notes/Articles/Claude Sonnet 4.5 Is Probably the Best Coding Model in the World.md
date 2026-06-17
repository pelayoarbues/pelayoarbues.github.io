---
author: "[[Simon Willison's Weblog]]"
title: 'Claude Sonnet 4.5 Is Probably the "Best Coding Model in the World"'
date: "2025-09-30"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Claude Sonnet 4.5 Is Probably the "Best Coding Model in the World"
- URL: https://simonwillison.net/2025/Sep/29/claude-sonnet-4-5/#atom-everything

## Highlights
- Anthropic gave me access to a preview version of a “new model” over the weekend which turned out to be Sonnet 4.5. My initial impressions were that it felt like a better model for code than GPT-5-Codex, which has been my preferred coding model since [it launched a few weeks ago](https://simonwillison.net/2025/Sep/23/gpt-5-codex/). This space moves *so fast*—Gemini 3 is rumored to land soon so who knows how long Sonnet 4.5 will continue to hold the “best coding model” crown. ([View Highlight](https://read.readwise.io/read/01k6beaxhmwptjrqacb9bdata3))
- Anthropic gave me access to a preview version of a “new model” over the weekend which turned out to be Sonnet 4.5. My initial impressions were that it felt like a better model for code than GPT-5-Codex, which has been my preferred coding model since [it launched a few weeks ago](https://simonwillison.net/2025/Sep/23/gpt-5-codex/). This space moves *so fast*—Gemini 3 is rumored to land soon so who knows how long Sonnet 4.5 will continue to hold the “best coding model” crown. ([View Highlight](https://read.readwise.io/read/01k6beaxkvba81fzd3kr8mx0ep))
- The [claude.ai](https://claude.ai/) web interface (not yet the Claude iPhone native app) recently added the ability for Claude to write and then directly execute code in a sandboxed server environment, using Python and Node.js. I [wrote about that in detail](https://simonwillison.net/2025/Sep/9/claude-code-interpreter/) three weeks ago. ([View Highlight](https://read.readwise.io/read/01k6bebdy5k14bcp6g9v4agk8w))
- The [claude.ai](https://claude.ai/) web interface (not yet the Claude iPhone native app) recently added the ability for Claude to write and then directly execute code in a sandboxed server environment, using Python and Node.js. I [wrote about that in detail](https://simonwillison.net/2025/Sep/9/claude-code-interpreter/) three weeks ago. ([View Highlight](https://read.readwise.io/read/01k6bebe0a9agv2njad6dgf4d2))
- Anthropic’s implementation of this code interpreter pattern is more powerful than ChatGPT’s equivalent because it can directly clone code from GitHub and install software packages from NPM and PyPI. ([View Highlight](https://read.readwise.io/read/01k6bebnhjtpbj6fd553x0yf00))
- Anthropic’s implementation of this code interpreter pattern is more powerful than ChatGPT’s equivalent because it can directly clone code from GitHub and install software packages from NPM and PyPI. ([View Highlight](https://read.readwise.io/read/01k6bebnkgwhnew6d71hmpsyye))
- Sonnet 4.5 *absolutely shines* at using this tool! ([View Highlight](https://read.readwise.io/read/01k6beby2cfe25fpgjvvj5pfpf))
- Sonnet 4.5 *absolutely shines* at using this tool! ([View Highlight](https://read.readwise.io/read/01k6beby5fqn5cary8ypkzeeew))
- I released [llm-anthropic 0.19](https://github.com/simonw/llm-anthropic/releases/tag/0.19) adding support for the new model. Then I ran my classic pelican benchmark, first [with thinking turned on](https://gist.github.com/simonw/52a5bb478fa743daede12d97173cb817): ([View Highlight](https://read.readwise.io/read/01k6bect0cws22k2wkc3w06zvr))
- I released [llm-anthropic 0.19](https://github.com/simonw/llm-anthropic/releases/tag/0.19) adding support for the new model. Then I ran my classic pelican benchmark, first [with thinking turned on](https://gist.github.com/simonw/52a5bb478fa743daede12d97173cb817): ([View Highlight](https://read.readwise.io/read/01k6bect2h09q28376p92tpkpz))
- These are pretty good—they are recognizably pelicans!—though not quite as good [as GPT-5-Codex](https://simonwillison.net/2025/Sep/23/gpt-5-codex/) which is better at drawing bicycles. ([View Highlight](https://read.readwise.io/read/01k6beczyrqz9g40ebvyan121k))
- These are pretty good—they are recognizably pelicans!—though not quite as good [as GPT-5-Codex](https://simonwillison.net/2025/Sep/23/gpt-5-codex/) which is better at drawing bicycles. ([View Highlight](https://read.readwise.io/read/01k6bed00yw2z99z79wafxqnc2))
- Anthropic also shipped a [new Claude Code VS Code extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) today, plus a big upgrade to the Claude Code terminal app. Plus they rebranded their confusingly named Claude Code SDK to the [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) instead, emphasizing that it’s a tool for building agents beyond just customizing the existing Claude Code product. That’s available for both [TypeScript](https://docs.claude.com/en/api/agent-sdk/typescript) and [Python](https://docs.claude.com/en/api/agent-sdk/python). ([View Highlight](https://read.readwise.io/read/01k6bedmks1tbh8psfht54hjj1))
- Anthropic also shipped a [new Claude Code VS Code extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) today, plus a big upgrade to the Claude Code terminal app. Plus they rebranded their confusingly named Claude Code SDK to the [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) instead, emphasizing that it’s a tool for building agents beyond just customizing the existing Claude Code product. That’s available for both [TypeScript](https://docs.claude.com/en/api/agent-sdk/typescript) and [Python](https://docs.claude.com/en/api/agent-sdk/python). ([View Highlight](https://read.readwise.io/read/01k6bedmqp00sdf58jj9j36s6c))
