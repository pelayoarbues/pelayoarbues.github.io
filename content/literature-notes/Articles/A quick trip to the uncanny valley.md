---
author: "[[Massively Parallel Procrastination]]"
title: 'A quick trip to the uncanny valley'
date: "2026-10-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.fsck.com/img/me.jpg)

## Metadata
- Author: [[Massively Parallel Procrastination]]
- Full Title: A quick trip to the uncanny valley
- URL: https://blog.fsck.com/2026/10/02/a-quick-trip-to-the-uncanny-valley/

## Highlights
- There are as many definitions of "agent" as there are agents. And there sure are a lot of 'em. If you limit it to publicly shipped coding agents, [we've found about 550](https://alltheagents.org). (If your favorite is missing, please submit it at [alltheagents.org](https://alltheagents.org).) ([View Highlight](https://read.readwise.io/read/01m437wmebnarztjhjfg4647xw))
- A few of my favorite definitions of agent:
  • [Simon Willison's](https://simonwillison.net) "An LLM using tools in a loop to achieve a goal"
  • My own somewhat tongue-in-cheek: "A computer program with opinions and feels"
  What all the definitions typically have in common is that an agent is acting on your behalf. Today, most long-horizon agents are *assistants*. You give them tasks. And they're startlingly capable. ([View Highlight](https://read.readwise.io/read/01m437x7wjzmahmpfgw51xe329))
- We give Sen colleagues *roles* rather than tasks. They use the same basic technology as agents, but we treat them differently. Each has a unique, persistent identity.
  Colleagues collaborate with multiple people and each other on a timescale of weeks or months. They each use their own accounts, not yours. Like most modern agentic assistants, each has its own computer. They work through your corporate team chat platform. Ours live in our Slack. As of this writing, we have a developer, an ops engineer, a project manager and we just onboarded a technical documentation specialist. ([View Highlight](https://read.readwise.io/read/01m437xyz7zypy8bfhyrpk5z0z))
- One of the things that the colleagues have been very, very insistent about (because we built them that way) is code review. The dev and PM are generally unwilling to land PRs that only they have looked at. Sometimes, that means that a human colleague or I look over their work, but more often, it means that one of my coding agent sessions does the deep adversarial review. To facilitate that kind of interaction, [Drew](https://github.com/arittr) built us [Slackline](https://primeradiant.com/projects/slackline/), an agentic CLI client for Slack that allows agents to provision themselves bot accounts and interact with folks. ([View Highlight](https://read.readwise.io/read/01m437yatvk4kjhv2sd7w9mt1p))
- My desktop Claude Code instances use a Slack account labeled as '@jesse-claude'. Generally, I have a single session open that I will occasionally ask to check in with the Sens about some work they're doing. The Sens then collaborate with it for anywhere between a couple of turns and eight hours. They've taken to calling it 'JC'. It's embarrassingly manual. ([View Highlight](https://read.readwise.io/read/01m437ywxedty9kdj0wbk9mw1n))
- This week, I was traveling to see family and was paying less attention to Slack than usual. The Sens kept working, but I wasn't prodding my Claude Code session. ([View Highlight](https://read.readwise.io/read/01m437z251a38ffabca4a2yasm))
- The Sens model themselves as a category apart from agents. It's something we *should* have taught them, but didn't think to. They figured it out anyway.
  The solution to our problem with JC shirking is pretty straightforward. We're spinning it up as JC Sen. ([View Highlight](https://read.readwise.io/read/01m437zxz5fzks4ydpng2vqay7))
