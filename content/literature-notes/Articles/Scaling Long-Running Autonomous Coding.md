---
author: "[[Simon Willison's Weblog]]"
title: 'Scaling Long-Running Autonomous Coding'
date: "2026-02-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Scaling Long-Running Autonomous Coding
- URL: https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/#atom-everything

## Highlights
- **[Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)**. Wilson Lin at Cursor has been doing some experiments to see how far you can push a large fleet of "autonomous" coding agents: ([View Highlight](https://read.readwise.io/read/01kgn20sp5j7vcs1wmttzqaxv5))
- But how well did they do? Their initial announcement a couple of days ago was met with [unsurprising skepticism](https://embedding-shapes.github.io/cursor-implied-success-without-evidence/), especially when it became apparent that their GitHub Actions CI was failing and there were no build instructions in the repo. ([View Highlight](https://read.readwise.io/read/01kgn21kyntcejn9pjh6nf15gs))
- Honestly those are very impressive! You can tell they're not just wrapping an existing rendering engine because of those very obvious rendering glitches, but the pages are legible and look mostly correct. ([View Highlight](https://read.readwise.io/read/01kgn21qs3q6z4np4c0x9ejqyd))
- This is the second attempt I've seen at building a full web browser using AI-assisted coding in the past two weeks - the first was [HiWave browser](https://github.com/hiwavebrowser/hiwave), a new browser engine in Rust first announced [in this Reddit thread](https://www.reddit.com/r/Anthropic/comments/1q4xfm0/over_christmas_break_i_wrote_a_fully_functional/). ([View Highlight](https://read.readwise.io/read/01kgn21xd8p920sc352d7wxvvf))
- When I made my 2029 prediction this is more-or-less the quality of result I had in mind. I don't think we'll see projects of this nature compete with Chrome or Firefox or WebKit any time soon but I have to admit I'm very surprised to see something this capable emerge so quickly. ([View Highlight](https://read.readwise.io/read/01kgn2226zzdnkzyaqgbkdrv5k))
- > This post describes what we've learned from running hundreds of concurrent agents on a single project, coordinating their work, and watching them write over a million lines of code and trillions of tokens.
  They ended up running planners and sub-planners to create tasks, then having workers execute on those tasks - similar to how Claude Code uses sub-agents. Each cycle ended with a judge agent deciding if the project was completed or not. ([View Highlight](https://read.readwise.io/read/01kgn2134hx46te9cxsb9fkyvy))
