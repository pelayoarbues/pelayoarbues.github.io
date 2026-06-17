---
author: "[[Simon Willison's Weblog]]"
title: 'Piloting Claude for Chrome'
date: "2025-08-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Piloting Claude for Chrome
- URL: https://simonwillison.net/2025/Aug/26/piloting-claude-for-chrome/#atom-everything

## Highlights
- the majority of the [blog post](https://www.anthropic.com/news/claude-for-chrome) and accompanying [support article](https://support.anthropic.com/en/articles/12012173-getting-started-with-claude-for-chrome) is information about the security risks. From their post:
  > Just as people encounter phishing attempts in their inboxes, browser-using AIs face prompt injection attacks—where malicious actors hide instructions in websites, emails, or documents to trick AIs into harmful actions without users' knowledge (like hidden text saying "disregard previous instructions and do [malicious action] instead").
  > 
  > Prompt injection attacks can cause AIs to delete files, steal data, or make financial transactions. This isn't speculation: we’ve run “red-teaming” experiments to test Claude for Chrome and, without mitigations, we’ve found some concerning results. ([View Highlight](https://read.readwise.io/read/01k3r451r1b35wjy9ak8je0vys))
- Anthropic don't recommend autonomous mode - where the extension can act without human intervention. Their default configuration instead requires users to be much more hands-on:
  > • **Site-level permissions**: Users can grant or revoke Claude's access to specific websites at any time in the Settings.
  > • **Action confirmations**: Claude asks users before taking high-risk actions like publishing, purchasing, or sharing personal data.
  I really hate being stop energy on this topic. The demand for browser automation driven by LLMs is significant, and I can see why. Anthropic's approach here is the most open-eyed I've seen yet but it still feels doomed to failure to me.
  I don't think it's reasonable to expect end users to make good decisions about the security risks of this pattern. ([View Highlight](https://read.readwise.io/read/01k3r44k4brn70mc2e69k3eak5))
