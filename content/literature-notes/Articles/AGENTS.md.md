---
author: "[[agents.md]]"
title: 'AGENTS.md'
date: "2025-08-27"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://agents.md/og.png)

## Metadata
- Author: [[agents.md]]
- Full Title: AGENTS.md
- URL: https://agents.md/

## Highlights
- README.md files are for humans: quick starts, project descriptions, and contribution guidelines.
  AGENTS.md complements this by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren’t relevant to human contributors.
  We intentionally kept it separate to:
  Give agents a clear, predictable place for instructions.
  Keep READMEs concise and focused on human contributors.
  Provide precise, agent-focused guidance that complements existing README and docs.
  Rather than introducing another proprietary file, we chose a name and format that could work for anyone. If you’re building or using coding agents and find this helpful, feel free to adopt it. ([View Highlight](https://read.readwise.io/read/01k3p2ghbp29rjr8xr3eqkffgr))
- 1. Add AGENTS.md
  Create an AGENTS.md file at the root of the repository. Most coding agents can even scaffold one for you if you ask nicely.
  2. Cover what matters
  Add sections that help an agent work effectively with your project. Popular choices:
  • Project overview
  • Build and test commands
  • Code style guidelines
  • Testing instructions
  • Security considerations
  3. Add extra instructions
  Commit messages or pull request guidelines, security gotchas, large datasets, deployment steps: anything you’d tell a new teammate belongs here too.
  4. Large monorepo? Use nested AGENTS.md files for subprojects
  Place another AGENTS.md inside each package. Agents automatically read the nearest file in the directory tree, so the closest one takes precedence and every subproject can ship tailored instructions. For example, at time of writing the main OpenAI repo has 88 AGENTS.md files. ([View Highlight](https://read.readwise.io/read/01k3p2hf0ktyv67jgd88ztaewe))
