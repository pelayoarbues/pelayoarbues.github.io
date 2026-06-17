---
author: "[[claude.com]]"
title: 'Code Review for Claude Code'
date: "2026-03-10"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69ab5ab658058fa295ce9e6b_og_code-review.jpg)

## Metadata
- Author: [[claude.com]]
- Full Title: Code Review for Claude Code
- URL: http://claude.com/blog/code-review

## Highlights
- Today we're introducing Code Review, which dispatches a team of agents on every PR to catch the bugs that skims miss, built for depth, not speed. It's the system we run on nearly every PR at Anthropic. Now in research preview for Team and Enterprise. ([View Highlight](https://read.readwise.io/read/01kkbhca8x36z35ae5fj9z91gt))
- Code output per Anthropic engineer has grown 200% in the last year. Code review has become a bottleneck, and we hear the same from customers every week. They tell us developers are stretched thin, and many PRs get skims rather than deep reads. ([View Highlight](https://read.readwise.io/read/01kkbhcm8mc1v1qwftk6kmk1t2))
- We needed a reviewer we could trust on every PR. Code Review is the result: deep, multi-agent reviews that catch bugs human reviewers often miss themselves. It's a more thorough (and more expensive) option than our existing [Claude Code GitHub Action](https://code.claude.com/docs/en/github-actions), which remains open source and available.
  We run Code Review on nearly every PR at Anthropic. Before, 16% of PRs got substantive review comments. Now 54% do. It won't approve PRs — that's still a human call — but it closes the gap so reviewers can actually cover what's shipping. ([View Highlight](https://read.readwise.io/read/01kkbhd5xjngcm9pcfrzz095b6))
- When a PR is opened, Code Review dispatches a team of agents. The agents look for bugs in parallel, verify bugs to filter out false positives, and rank bugs by severity. The result lands on the PR as a single high-signal overview comment, plus in-line comments for specific bugs.
  Reviews scale with the PR. Large or complex changes get more agents and a deeper read; trivial ones get a lightweight pass. Based on our testing, the average review takes around 20 minutes. ([View Highlight](https://read.readwise.io/read/01kkbhdj45ayh4rqw3ywgfwvrp))
- We've been running Code Review internally for months: on large PRs (over 1,000 lines changed), 84% get findings, averaging 7.5 issues. On small PRs under 50 lines, that drops to 31%, averaging 0.5 issues. Engineers largely agree with what it surfaces: less than 1% of findings are marked incorrect.
  In one case, a one-line change to a production service looked routine and was the kind of diff that normally gets a quick approval. But Code Review flagged it as critical. The change would have broken authentication for the service, a failure mode that’s easy to read past in the diff but obvious once pointed out. It was fixed before merge, and the engineer shared afterwards that they wouldn't have caught it on their own. ([View Highlight](https://read.readwise.io/read/01kkbhdt73xcv0m8f3bx158tfx))
- Code Review optimizes for depth and is more expensive than lighter-weight solutions like the [Claude Code GitHub Action](https://code.claude.com/docs/en/github-actions). Reviews are billed on token usage and generally average $15–25, scaling with PR size and complexity. 
  Admins have many ways to control spend and usage:
  • **Monthly organization caps**: Define total monthly spend across all reviews
  • **Repository-level control**: Enable reviews only on the repositories you choose
  • **Analytics dashboard**: Track PRs reviewed, acceptance rate, and total review costs ([View Highlight](https://read.readwise.io/read/01kkbhf1yhkmryxagtaprn4kcf))
