---
author: "[[claude.com]]"
title: 'Self-Hosted Environments for Claude Code'
date: "2026-08-09"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6a74d3f8662b198856f05f49_favicon.ico)

## Metadata
- Author: [[claude.com]]
- Full Title: Self-Hosted Environments for Claude Code
- URL: https://claude.com/blog/run-claude-code-sessions-on-your-own-compute

## Highlights
- Repository checkouts, build artifacts, secrets, and any files a session creates or modifies all stay on infrastructure you provision. ([View Highlight](https://read.readwise.io/read/01kzhm7sk4y3mpt21dse9hqpsz))
- The conversation itself, including prompts, responses, and tool results (which can include code that Claude reads), is sent to Anthropic for inference, and the session transcript is stored so a session can be picked up from any surface. ([View Highlight](https://read.readwise.io/read/01kzhm7y1wbpxhna4mser85pp9))
- **How it works**
  When using self-hosted environments, you deploy a set of [runners](https://code.claude.com/docs/en/self-hosted-environments#key-concepts). These long-lived processes pick up sessions and start a Claude Code process for each [session](https://code.claude.com/docs/en/self-hosted-environments#session-lifecycle). Runners come in two modes. 
  1. **Fixed:** you keep a set number running and sessions are distributed across them. 
  2. **On-demand:** an orchestrator watches for queued sessions, starts a runner as sessions arrive, and stops them when work finishes so capacity tracks demand.
  Runners can serve more than one session, but each session runs in its own checkout, so work stays isolated between developers and accounts. Sessions from every supported surface route to the same environment, so you set it up once and it works wherever your team starts a session. ([View Highlight](https://read.readwise.io/read/01kzhm8fbx4965rf2b5v0rnrhr))
- **Note**: Self-hosted environments differ from [Remote Control](https://code.claude.com/docs/en/remote-control), which lets developers continue sessions running on their own machines from a phone or browser. Sessions using Remote Control end when that machine stops running the session and are tied to the user who ran `claude`, whereas self-hosted environments run sessions on shared infrastructure your platform team operates and can be used by any user. ([View Highlight](https://read.readwise.io/read/01kzhm8tvkyw30926r3hecykhp))
