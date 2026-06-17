---
author: "[[Kieran Klaassen / Source Code]]"
title: 'Teach Your AI to Think Like a Senior Engineer'
date: "2026-02-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://every.to/feeds/favicon.ico)

## Metadata
- Author: [[Kieran Klaassen / Source Code]]
- Full Title: Teach Your AI to Think Like a Senior Engineer
- URL: https://every.to/source-code/teach-your-ai-to-think-like-a-senior-engineer-789ba7ca-ca7c-45a1-91fa-4178f59f226f

## Highlights
- I’ve written about why having your [AI coding assistant plan](https://every.to/source-code/stop-coding-and-start-planning) before it codes lets you ship faster than jumping straight to code. It’s my method for making my AI smarter with every feature. ([View Highlight](https://read.readwise.io/read/01kgn1a6cpbn870cd56w115kw8))
- When you’re planning with AI, you’re running parallel research operations—each one a specialized agent gathering different kinds of knowledge. Then you work together: The agents bring findings, you make decisions, and together you combine and distill everything into one coherent plan. ([View Highlight](https://read.readwise.io/read/01kgn1b0mptrpb0tv98czcm7c6))
- I use eight research strategies, depending on the fidelity level, which refers to the degree of difficulty. Fidelity One is quick fixes like one-line changes, obvious bugs, and copy updates. Fidelity Two covers features spanning multiple files with clear scope but non-obvious implementation. Fidelity Three covers major features where you don’t even know what you’re building yet. ([View Highlight](https://read.readwise.io/read/01kgn1nth8kecwqe8a42qrejsh))
- **How to make this compound:** To make sure that this issue wouldn’t happen in the future, I updated my @kieran-rails-reviewer agent—one of the specialized reviewers that automatically checks plans and code as part of my compounding engineering flow. I added to its checklist: “For any background job that calls external APIs—does it handle rate limits? Does it retry? Does it leave users in partial states?” We forgot to retry once. The system won’t let us forgetagain. ([View Highlight](https://read.readwise.io/read/01kgn1ps2vv2c3wy23kbwnh3x8))
- **How to make this compound:** When the agent finds a particularly useful pattern, I have it automatically save the key findings to `docs/*.md` files in my project. For instance, I’ve saved “docs/pay-gem-upgrades.md” for migration patterns and “docs/pricing-research.md” for pricing insights. Next time a similar question comes up, the agent checks these documents first before searching the web. My knowledge base is constantly growing and improving. ([View Highlight](https://read.readwise.io/read/01kgn1qwnak35cwyhwpgjyjn53))
- **Why this compounds:** Every time you update a dependency (a library your code relies on), the knowledge auto-updates. You’re never working with stale information. ([View Highlight](https://read.readwise.io/read/01kgn1se49w0h2s21ey73k54dr))
- You don’t need to build everything from scratch. I’ve open-sourced my planning system on [Every’s Github marketplace](http://github.com/EveryInc/every-marketplace). Install it in Claude Code, and you’ll have working /plan slash command and research agents immediately. You can also [use my plugin](https://github.com/EveryInc/every-marketplace/tree/main) in Claude Code or Droid. ([View Highlight](https://read.readwise.io/read/01kgn1x6ct369895k8418jpem4))
- **Strategy 1: Reproduce and document**
  **What it does:** Attempts to reproduce bugs or issues before planning fixes
  **When to use it:** Fidelity One and Two, especially bug fixes
  **The agent’s job:** Create a step-by-step reproduction guide
  **Prompt:** “Reproduce this bug, don’t fix it, just gather all the logs and info you need.” ([View Highlight](https://read.readwise.io/read/01kgn1ph9as7pcrc9dd0tqspvk))
- **Strategy 2: Ground in best practices**
  **What it does:** [Searches the web](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/best-practices-researcher.md) for how others solved similar problems
  **When to use it:** All fidelities, especially unfamiliar patterns
  **The agent’s job:** Find and summarize relevant blog posts, documentation, and solutions
  **Agent:** “[@agent-best-practices-researcher](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/best-practices-researcher.md)”
  This strategy works for anything where someone else has already solved your problem—things like technical architecture, copywriting patterns, pricing research, or upgrade paths.
  When I needed to upgrade a gem—a [pre-built code library](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/framework-docs-researcher.md) I use—that was two versions behind, I had an agent search: “upgrade path from version X to Y,” “breaking changes between versions,” “common migration issues.” It found the official upgrade guide, plus three blog posts from engineers who’d done the same upgrade and hit edge cases. That research took three minutes and prevented hours of trial-and-error debugging. ([View Highlight](https://read.readwise.io/read/01kgn1qe8f6276snv1k9129tg5))
- **How to make this compound:** I created an “@event-tracking-expert” agent that distills everything about how we do tracking—our helper methods, our event format, when to track versus when not to. Now when it’s planning any feature that needs tracking, that specialist agent runs automatically. I don’t search the codebase from scratch anymore—the expert already knows our patterns. ([View Highlight](https://read.readwise.io/read/01kgn1rx6vsr84qat9wyn5cetc))
- **Strategy 4: Ground in your libraries**
  **What it does:** [Reads source code](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/framework-docs-researcher.md) of installed packages and gems
  **When to use it:** When using fast-moving or poorly documented libraries
  **The agent’s job:** Analyze the source code to understand what’s possible ([View Highlight](https://read.readwise.io/read/01kgn1s46azrsa8ab1ggm8hkzq))
- **Strategy 5: Study git history**
  **What it does:** [Analyzes commit history](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/git-history-analyzer.md) (the log of all past changes to your code) to understand intent
  **When to use it:** Refactors, continuing work, understanding “why”
  **The agent’s job:** Research past decisions and their context ([View Highlight](https://read.readwise.io/read/01kgn1sj04txm22xv6sk0sj1c7))
- **Strategy 6: Vibe prototype for clarity**
  **What it does:** Rapid prototyping in a separate environment to clarify requirements
  **When to use it:** Fidelity Three, UX uncertainty, exploratory work
  **The agent’s job:** Quickly build throwaway versions you can interact with
  **Prompt:** “Create a working prototype, in the style of a mockup using React and Next, grayscale of XYZ” ([View Highlight](https://read.readwise.io/read/01kgn1tce2bb4svt2rvz901c9a))
- **Strategy 7: Synthesize with options**
  **What it does:** Combines all research into one plan showing multiple approaches with tradeoffs
  **When to use it:** End of the research phase, before implementation
  **The agent’s job:** Present 2-3 solution paths with honest pros and cons
  After running strategies 1-6, I have an agent synthesize everything: “Based on all this research, show me three ways to solve this problem. For each approach, tell me: implementation complexity, performance impact, maintenance burden, and which existing patterns it matches.”
  For syncing ([View Highlight](https://read.readwise.io/read/01kgn1tmcd1g7e8fvx1d2rhad1))
- **Strategy 8: Review with style agents**
  **What it does:** Runs the completed plan through specialized reviewers that check for your preferences
  **When to use it:** Final planning step, before implementation
  **The agent’s job:** Catch misalignments with your coding style and architecture preferences
  I have three review agents that run automatically:
  **Simplification agent:** [Flags over-engineering](https://github.com/EveryInc/every-marketplace/blob/main/plugins/compounding-engineering/agents/code-simplicity-reviewer.md). “Do we really need three database tables for this? Could one table with a type field work?” ([View Highlight](https://read.readwise.io/read/01kgn1v9kes1q8g6bc12b5cfw9))
- Before prompting Claude Code or Cursor to build it, spend 15-20 minutes researching:
  1. **Best practices:** How have others solved similar problems? Search the web for blog posts, Stack Overflow discussions, and documentation.
  2. **Your patterns:** How have *you* solved similar problems? Search your existing codebase for comparable features.
  3. **Library capabilities:** What do your tools actually support? If you’re using a specific code library, have AI read its documentation or source code ([View Highlight](https://read.readwise.io/read/01kgn1xe1smwxy0rtrcsafxbny))
- Have AI synthesize this research into a plan showing:
  1. The problem being solved (one clear sentence)
  2. Two or three solution approaches (with honest pros and cons of each)
  3. Which existing code patterns this should match
  4. Any edge cases or security considerations ([View Highlight](https://read.readwise.io/read/01kgn1xq7mbw448dekx3r2svt2))
- **Ship the feature based on the plan,** then compare the final implementation to the original plan. Where did you diverge? Why? What would have made the plan better?
  **Take 10 minutes to codify one learning.** The simplest way: Add it to your CLAUDE.md file. Write one rule: “When doing X type of work, remember to check Y,” or “I prefer approach A over approach B because of reason C.” ([View Highlight](https://read.readwise.io/read/01kgn1xywc9sey79bb5cv5drg4))
