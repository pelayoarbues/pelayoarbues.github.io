---
author: "[[Simon Willison's Weblog]]"
title: 'Too Many Model Context Protocol Servers and LLM Allocations on the Dance Floor'
date: "2025-08-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Too Many Model Context Protocol Servers and LLM Allocations on the Dance Floor
- URL: https://simonwillison.net/2025/Aug/22/too-many-mcps/#atom-everything

## Highlights
- **[too many model context protocol servers and LLM allocations on the dance floor](https://ghuntley.com/allocations/)**. Useful reminder from Geoffrey Huntley of the infrequently discussed significant token cost of using MCP.
  Geoffrey estimate estimates that the usable context window something like Amp or Cursor is around 176,000 tokens - Claude 4's 200,000 minus around 24,000 for the system prompt for those tools. ([View Highlight](https://read.readwise.io/read/01k3r49zv3j9rkv2k8teb64wnq))
- MCP enthusiasts will frequently add several more, leaving precious few tokens available for solving the actual task... and LLMs are known to perform worse the more irrelevant information has been stuffed into their prompts.
  Thankfully, there is a much more token-efficient way of Interacting with many of these services: existing CLI tools.
  If your coding agent can run terminal commands and you give it access to GitHub's [gh](https://cli.github.com/) tool it gains all of that functionality for a token cost close to zero - because every frontier LLM knows how to use that tool already.
  I've had good experiences building small custom CLI tools specifically for Claude Code and Codex CLI to use. You can even tell them to run `--help` to learn how the tool, which works particularly well if your help text includes usage examples. ([View Highlight](https://read.readwise.io/read/01k3r4aetst2djet28ndhj35qd))
