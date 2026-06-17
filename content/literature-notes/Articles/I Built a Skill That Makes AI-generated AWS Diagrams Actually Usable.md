---
author: "[[Alexey Vidanov]]"
title: 'I Built a Skill That Makes AI-generated AWS Diagrams Actually Usable'
date: "2026-05-25"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcr0lvhxhjm29zf4i10v1.png)

## Metadata
- Author: [[Alexey Vidanov]]
- Full Title: I Built a Skill That Makes AI-generated AWS Diagrams Actually Usable
- URL: https://dev.to/aws-builders/i-built-a-skill-that-makes-ai-generated-aws-diagrams-actually-usable-43ep

## Highlights
- Every AWS architecture diagram I generated with AI needed 20–30 minutes of manual cleanup. Colored backgrounds on group boxes, broken icons, inconsistent flow direction, edge labels overlapping services. At that point, I might as well have drawn it from scratch. ([View Highlight](https://read.readwise.io/read/01ksg8b5nt49wm76jwshf9gdbk))
- I wanted a draft I could hand to a client the same day. So I built a skill (a markdown file with rules and reference data) that teaches the AI my specific layout and styling rules. It works in both Claude Code and Kiro CLI. No runtime dependencies, no MCP server. ([View Highlight](https://read.readwise.io/read/01ksg8b7mw1rzdzkrt357546jx))
- What was wrong with raw generation
  Claude Code and Kiro CLI can produce draw.io XML out of the box. The output opens in draw.io. But "opens" and "looks professional" are different things.
  Here's what raw generation actually produces:
  [![](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy5qef7bzfnydpq0s1a5y.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy5qef7bzfnydpq0s1a5y.png)
  **Colored backgrounds on groups.** AWS Cloud boxes had blue fills, VPC boxes had green fills. Real AWS diagrams use transparent groups with just a border. ([View Highlight](https://read.readwise.io/read/01ksg8bhh46n33bm1wj7njvc5a))
- **Inconsistent flow direction.** Sometimes left-to-right, sometimes top-to-bottom, sometimes random. No two diagrams followed the same convention.
  **Icon pattern confusion.** draw.io has two icon patterns with opposite `strokeColor` rules. In my generations, the AI mixed them up roughly one in four times, producing empty colored squares. The repo calls this out as the single biggest cause of broken icons in AI-generated diagrams.
  **Edge labels on top of icons.** Orthogonal routing with no explicit exit/entry points meant lines went through other services.
  **No spacing discipline.** Icons crammed together with 50px gaps, or scattered across a huge canvas with no rhythm.
  Each one is a 30-second fix on its own. Doing all of them on every diagram adds up to that 20–30 minute tax. ([View Highlight](https://read.readwise.io/read/01ksg8bssxrvttg104ze7frxxe))
- The two-pattern rule
  draw.io's AWS library (`mxgraph.aws4.*`) has two icon types that require opposite styling:
  Service-level: strokeColor=#ffffff (white, required)
  Resource-level: strokeColor=none (required)
  Mix these up and you get empty squares or invisible glyphs. The icon names look interchangeable but they're not. I extracted all 270+ names from draw.io's source code (`Sidebar-AWS4.js`) and documented which pattern each one uses. ([View Highlight](https://read.readwise.io/read/01ksg8c14v4g0zzf7299m5b7nc))
- Five rounds of refinement
  The first version got icons right but layouts were still mediocre. Each round came from opening the generated diagram in draw.io and noting what I'd manually fix, then encoding that fix as a rule.
  **Round 1: Icons.** Extracted 270+ icon names, documented the two patterns, added a "never guess, always look up" rule.
  **Round 2: Layout.** Increased spacing from 150px to 220px horizontal. Added explicit exit/entry points on edges. Removed edge labels that were redundant with icon labels.
  **Round 3: Edge routing.** Changed from `rounded=0` to `rounded=1` (sharp corners to smooth curves). Added explicit `exitX/exitY/entryX/entryY` for vertical connections. This stopped lines from routing through other icons.
  **Rounds 4 and 5** were about restraint and structure. The AI was labeling every edge with obvious things, "Write" on an AWS Lambda to Amazon DynamoDB connection, so I added a "when NOT to label" rule and a 1–2 word cap. Then a title block, a full-canvas background rectangle for clean PNG export, and an audience-mode toggle (technical vs non-technical) to control detail level.
  After five rounds, the skill enforces: left-to-right flow with 220px+ horizontal spacing, no colored backgrounds on any group container, verified icon names only (from 8 category reference files), and explicit edge routing so lines don't cross icons. ([View Highlight](https://read.readwise.io/read/01ksg8c8734yg8w12gecx23bpe))
- What's next
  The current output is good. Not perfect. I still adjust things manually. The next step is multiple diagram styles for the same architecture: a technical view for engineers, a simplified view for business stakeholders. Same system, different audience, different drawing.
  Try it on your next architecture review. If the generated diagram needs fixes I haven't covered, [open an issue](https://github.com/vidanov/aws-architecture-diagram-skill/issues). The skill improves from real usage, not theory. ([View Highlight](https://read.readwise.io/read/01ksg8d6agbh89w2tw1jahvpjd))
