---
author: "[[https://github.com/antinomyhq/forge]]"
title: 'AI Agent Best Practices: 12 Lessons from AI Pair Programming for Developers'
date: "2025-09-01"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://forgecode.dev/images/blog/ai-pair-programmer.png)

## Metadata
- Author: [[https://github.com/antinomyhq/forge]]
- Full Title: AI Agent Best Practices: 12 Lessons from AI Pair Programming for Developers
- URL: https://forgecode.dev/blog/ai-agent-best-practices/

## Highlights
- **Planning & Process:**
  • Write a plan first, let AI critique it before coding
  • Use edit-test loops: write failing test → AI fixes → repeat
  • Commit small, frequent changes for readable diffs ([View Highlight](https://read.readwise.io/read/01k42azcfck5fnhdtkdxt6y87y))
- **Prompt Engineering:**
  • Keep prompts short and specific context bloat kills accuracy
  • Ask for step-by-step reasoning before code
  • Use file references (@path/file.rs:42-88) not code dumps ([View Highlight](https://read.readwise.io/read/01k42azk8fmz1625qzmnaqb2gf))
- **Context Management:**
  • Re-index your project after major changes to avoid hallucinations
  • Use tools like gitingest.com for codebase summaries
  • Use Context7 MCP to stay synced with latest documentation
  • Treat AI output like junior dev PRs review everything ([View Highlight](https://read.readwise.io/read/01k42azs46m0tnw7efr212dt6q))
- **What Doesn't Work:**
  • Dumping entire codebases into prompts
  • Expecting AI to understand implicit requirements
  • Trusting AI with security-critical code without review ([View Highlight](https://read.readwise.io/read/01k42azwr1y0sg55t919kmwbf7))
- 1. Start With a Written Plan (Seriously, Do This First)[​](https://forgecode.dev/blog/ai-agent-best-practices/#1-start-with-a-written-plan-seriously-do-this-first)
  Ask your AI to draft a **Markdown plan** of the feature you're building. Then make it better:
  1. **Ask clarifying questions** about edge cases
  2. **Have it critique its own plan** for gaps
  3. **Regenerate an improved version**
  Save the final plan as `instructions.md` and reference it in every prompt. This single step eliminates 80% of "the AI got confused halfway through" moments. ([View Highlight](https://read.readwise.io/read/01k42b01mmxy3ahe4ab46m067v))
- 2. Master the Edit-Test Loop[​](https://forgecode.dev/blog/ai-agent-best-practices/#2-master-the-edit-test-loop)
  This is TDD but with an AI doing the implementation:
  1. **Ask AI to write a failing test** that captures exactly what you want
  2. **Review the test yourself** - make sure it tests the right behavior
  3. **Then tell the AI: "Make this test pass"**
  4. **Let the AI iterate** - it can run tests and fix failures automatically
  The key is reviewing the test before implementation. A bad test will lead to code that passes the wrong requirements. ([View Highlight](https://read.readwise.io/read/01k42b0c08wrdfd0t1jrg5x00f))
- 3. Demand Step-by-Step Reasoning[​](https://forgecode.dev/blog/ai-agent-best-practices/#3-demand-step-by-step-reasoning)
  Add this to your prompts:
  Explain your approach step-by-step before writing any code.
  You'll catch wrong assumptions before they become wrong code. AI models that think out loud make fewer stupid mistakes. ([View Highlight](https://read.readwise.io/read/01k42b0hhkp37sct2hrtfhsnqe))
- 4. Stop Dumping Context, Start Curating It[​](https://forgecode.dev/blog/ai-agent-best-practices/#4-stop-dumping-context-start-curating-it)
  Large projects break AI attention. Here's how to fix it:
  Use gitingest.com for Codebase Summaries[​](https://forgecode.dev/blog/ai-agent-best-practices/#use-gitingestcom-for-codebase-summaries)
  1. Go to gitingest.com
  2. Enter your repo URL (or replace "github.com" with "gitingest.com" in any GitHub URL)
  3. Download the generated text summary
  4. Reference this instead of copy-pasting files
  **Instead of:** Pasting 10 files into your prompt 
  **Do this:** "See attached codebase_summary.txt for project structure" ([View Highlight](https://read.readwise.io/read/01k42b0sgh9btjx4kg89dzbtn7))
- For Documentation: Use Context7 MCP or Alternatives for Live Docs[​](https://forgecode.dev/blog/ai-agent-best-practices/#for-documentation-use-context7-mcp-or-alternatives-for-live-docs)
  Context7 MCP keeps AI synced with the latest documentation by presenting the "Most Current Page" of your docs.
  **When to use:** When your docs change frequently, reference the MCP connection rather than pasting outdated snippets each time. ([View Highlight](https://read.readwise.io/read/01k42b10nz3c4z2702hd16xhrn))
- 5. Version Control Is Your Safety Net[​](https://forgecode.dev/blog/ai-agent-best-practices/#5-version-control-is-your-safety-net)
  • **Commit granularly** with `git add -p` so diffs stay readable
  • **Never let uncommitted changes pile up**: clean git state makes it easier to isolate AI-introduced bugs and rollback cleanly
  • **Use meaningful commit messages**: they help AI understand change context ([View Highlight](https://read.readwise.io/read/01k42b16d8838hdtabrzpr7q3x))
- 6. Keep Prompts Laser-Focused[​](https://forgecode.dev/blog/ai-agent-best-practices/#6-keep-prompts-laser-focused)
  **Bad:** "Here's my entire codebase. Why doesn't authentication work?"
  **Good:** "`@src/auth.rs` line 85 panics on `None` when JWT is malformed. Fix this and add proper error handling."
  Specific problems get specific solutions. Vague problems get hallucinations.
  Use your code’s terminology in prompts: reference the exact identifiers from your codebase, not generic business terms. For example, call `createOrder()` and `processRefund()` instead of 'place order' or 'issue refund', or use `UserEntity` rather than 'account'. This precision helps the AI apply the correct abstractions and avoids mismatches between your domain language and code. ([View Highlight](https://read.readwise.io/read/01k42b1bqt9xwqp8bcdh4yedq6))
- . Re-Index After Big Changes[​](https://forgecode.dev/blog/ai-agent-best-practices/#7-re-index-after-big-changes)
  If you're using AI tools with project indexing, rebuild the index after major refactors. Out-of-date indexes are why AI "can't find" functions that definitely exist.
  Most tools auto-index, but force a refresh when things seem off. ([View Highlight](https://read.readwise.io/read/01k42b1ewtjg4ccheejj4m29w8))
- 8. Use File References, Not Copy-Paste[​](https://forgecode.dev/blog/ai-agent-best-practices/#8-use-file-references-not-copy-paste)
  Most AI editors support references like `@src/database.rs`. Use them instead of pasting code blocks.
  **Benefits:**
  • AI sees the current file state, not a stale snapshot
  • Smaller token usage = better accuracy
  • Less prompt clutter
  **Note:** Syntax varies by tool ([Forge](https://github.com/antinomyhq/forge) uses `@`, some use `#`, etc.) ([View Highlight](https://read.readwise.io/read/01k42b1h3t65e46wqvaczwhg3d))
- 9. Let AI Write Tests, But You Write the Specs[​](https://forgecode.dev/blog/ai-agent-best-practices/#9-let-ai-write-tests-but-you-write-the-specs)
  Tell the AI exactly what to test:
  For the new `validate_email` function, write tests for:- Valid email formats (basic cases)- Invalid formats (no @, multiple @, empty string)- Edge cases (very long domains, unicode characters)- Return value format (should be Result<(), ValidationError>)
  AI is good at generating test boilerplate once you specify the cases. ([View Highlight](https://read.readwise.io/read/01k42b21jqk8yte1qf1nc07g6g))
- 10. Debug with Diagnostic Reports[​](https://forgecode.dev/blog/ai-agent-best-practices/#10-debug-with-diagnostic-reports)
  When stuck, ask for a systematic breakdown:
  Generate a diagnostic report:1. List all files modified in our last session2. Explain the role of each file in the current feature3. Identify why the current error is occurring4. Propose 3 different debugging approaches
  This forces the AI to think systematically instead of guess-and-check. ([View Highlight](https://read.readwise.io/read/01k42b24xgzxvdce6b3ymrek63))
- 11. Set Clear Style Guidelines[​](https://forgecode.dev/blog/ai-agent-best-practices/#11-set-clear-style-guidelines)
  Give your AI a brief system prompt:
  Consistent rules = consistent code quality. ([View Highlight](https://read.readwise.io/read/01k42b2bzdmgppskyacm4zhk9v))
- 12. Review Everything Like a Senior Engineer[​](https://forgecode.dev/blog/ai-agent-best-practices/#12-review-everything-like-a-senior-engineer)
  Treat every AI change like a junior developer's PR:
  **Security Review:**
  • Check for injection vulnerabilities
  • Verify input validation
  • Look for hardcoded secrets
  **Performance Review:**
  • Watch for N+1 queries
  • Check algorithm complexity
  • Look for unnecessary allocations
  **Correctness Review:**
  • Test edge cases manually
  • Verify error handling
  • Check for off-by-one errors
  The AI is smart but not wise. Your experience matters. ([View Highlight](https://read.readwise.io/read/01k42b2hc58523gct402q4bfx5))
- What Doesn't Work (Learn From My Mistakes)[​](https://forgecode.dev/blog/ai-agent-best-practices/#what-doesnt-work-learn-from-my-mistakes)
  There's no perfect prompt that makes AI never make mistakes. Better workflows beat better prompts.
  AI can't infer requirements you haven't stated. "Make it production-ready" means nothing without specifics.
  AI is great at implementing your design but terrible at high-level system design. You architect, AI implements.
  Ignoring Domain-Specific Context[​](https://forgecode.dev/blog/ai-agent-best-practices/#ignoring-domain-specific-context)
  AI doesn't know your business logic, deployment constraints, or team conventions unless you tell it. ([View Highlight](https://read.readwise.io/read/01k42b2trksec7ys1w4d8bbwsb))
- Controversial Take: AI Pair Programming Is Better Than Human Pair Programming[​](https://forgecode.dev/blog/ai-agent-best-practices/#controversial-take-ai-pair-programming-is-better-than-human-pair-programming)
  **For most implementation tasks.**
  AI doesn't get tired, doesn't have ego, doesn't argue about code style, and doesn't judge your googling habits. It's like having a junior developer with infinite patience and perfect memory.
  But it also doesn't catch logic errors, doesn't understand business context, and doesn't push back on bad ideas. You still need humans for the hard stuff. ([View Highlight](https://read.readwise.io/read/01k42b2zbxkb97y3rmk7e9tkwk))
- Final Reality Check[​](https://forgecode.dev/blog/ai-agent-best-practices/#final-reality-check)
  AI coding tools can significantly boost productivity, but only if you use them systematically. The engineers seeing massive gains aren't using magic prompts they're using disciplined workflows.
  Plan first, test everything, review like your production system depends on it (because it does), and remember: the AI is your intern, not your architect.
  The future of coding isn't human vs AI it's humans with AI vs humans without it. Choose your side wisely. ([View Highlight](https://read.readwise.io/read/01k42b323b6da8r4qtsx5en315))
