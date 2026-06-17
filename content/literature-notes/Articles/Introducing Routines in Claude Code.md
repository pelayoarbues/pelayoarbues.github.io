---
author: "[[claude.com]]"
title: 'Introducing Routines in Claude Code'
date: "2026-04-15"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/68c469d23594abeb9ab6ee48_og-claude-generic.jpg)

## Metadata
- Author: [[claude.com]]
- Full Title: Introducing Routines in Claude Code
- URL: https://claude.com/blog/introducing-routines-in-claude-code

## Highlights
- Today, we're introducing routines in Claude Code in research preview. A routine is a Claude Code automation you configure once — including a prompt, repo, and connectors — and then run on a schedule, from an API call, or in response to an event. Routines run on [Claude Code’s web infrastructure](https://code.claude.com/docs/en/claude-code-on-the-web), so nothing depends on your laptop being open. ([View Highlight](https://read.readwise.io/read/01kp8p36b3eyynhp6vpy4xk38q))
- Developers already use Claude Code to automate the software development cycle, but until now, they've managed cron jobs, infrastructure, and additional tooling like MCP servers themselves. Routines ship with access to your repos and your [connectors](https://claude.com/connectors), so you can package up automations and set them to run on a schedule or trigger. ([View Highlight](https://read.readwise.io/read/01kp8p3h7cg4sf3ecnvp1e4c3b))
- You can also configure routines to be triggered by API calls. Every routine gets its own endpoint and auth token. POST a message, get back a session URL. Wire Claude Code into your alerting, your deploy hooks, your internal tools—anywhere you can make an HTTP request: ([View Highlight](https://read.readwise.io/read/01kp8p3xdpmcj9v3ha7r3jzcp2))
- Give Claude Code a prompt and a cadence (hourly, nightly, or weekly) and it runs on that schedule:
  Every night at 2am: pull the top bug from Linear, attempt a fix, and open a draft PR. ([View Highlight](https://read.readwise.io/read/01kp8p3sfe018m77vebh82r38j))
- Subscribe a routine to automatically kick off in response to GitHub repository events. Claude will create a new session for every PR matching your filters and run your routine. ([View Highlight](https://read.readwise.io/read/01kp8p46m068bdrqy28z08s2h1))
- Claude opens one session per PR and will continue to feed updates from that PR to the session, so it can address follow-ups like comments and CI failures.
  We plan to expand webhook-based routines to trigger from more event sources in the future. ([View Highlight](https://read.readwise.io/read/01kp8p4b252rtr9kwbfjyksef9))
- Scheduled routines
  • Backlog management: triage new issues nightly, label, assign, and post a summary to Slack
  • Docs drift: scan merged PRs weekly, flag docs that reference changed APIs, and open update PRs ([View Highlight](https://read.readwise.io/read/01kp8p4emyebc7631s0hxps8xe))
- API routines
  • Deploy verification: your CD pipeline posts after each deploy, Claude runs smoke checks against the new build, scans error logs for regressions, and posts a go/no-go to the release channel
  • Alert triage: point Datadog at the routine's endpoint, Claude pulls the trace, correlates it with recent deployments, and has a draft fix waiting before on-call opens the page
  • Feedback resolution: a docs feedback widget or internal dashboard posts the report, Claude opens a session against the repo with the issue in context, and drafts the change ([View Highlight](https://read.readwise.io/read/01kp8p4k59xp13j99cvk3t04ad))
- GitHub routines
  • Library port: every PR merged to a Python SDK triggers a routine that ports the change to the parallel Go SDK, and opens a matching PR
  • Bespoke code review: on PR opened, run your team's own checklist across security and performance, leaving inline comments before a human reviewer looks ([View Highlight](https://read.readwise.io/read/01kp8p4rjxrn0e4mv3zmhb35yf))
- Routines are available today for Claude Code users on Pro, Max, Team, and Enterprise plans with [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web?__readwiseLocation=#who-can-use-claude-code-on-the-web) enabled. Head to [claude.ai/code](http://claude.ai/redirect/claudeai.v1.97985232-619e-45fd-8d97-bb7392883f9f/code) to create your first routine, or type /schedule in the CLI.
  Routines draw down subscription usage limits in the same way as interactive sessions. In addition, routines have daily limits: Pro users can run up to 5 routines per day, Max users can run up to 15 routines per day, and Team and Enterprise users can run up to 25 routines per day. You can run extra routines beyond these limits with extra usage. [See the docs](http://code.claude.com/docs/en/routines?__readwiseLocation=) for more information. ([View Highlight](https://read.readwise.io/read/01kp8q36kg9jqxt0757zxzg1be))
