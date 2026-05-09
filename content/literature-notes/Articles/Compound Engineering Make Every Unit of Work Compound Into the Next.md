---
author: "[[Every]]"
title: 'Compound Engineering: Make Every Unit of Work Compound Into the Next'
date: "2026-04-01"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://every.to/assets/og/og_cover-5b74f47d1c1a44fc460f3c92c52a4de0e92facdb95fd3ba58d72ffff2df61593.png)

## Metadata
- Author: [[Every]]
- Full Title: Compound Engineering: Make Every Unit of Work Compound Into the Next
- URL: https://every.to/guides/compound-engineering?source=post_button

## Highlights
- We have all been trained to believe certain things about software development. With improvements in AI tools, some of those beliefs are now obstacles. Here are eight of them to unlearn:
  'The code must be written by hand'
  The actual requirement for you to do your job well as a software engineer is simply to write good code, which can be defined as maintainable code that solves the right problem. Who types—a human or an agent—doesn't matter.
  'Every line must be manually reviewed'
  Again, a core requirement to be a good engineer is to write quality code. Manual line-by-line review is one method to get there, but so are automated systems that catch the same issues.
  One reason that developers still find themselves relying on manual review is that they don't trust the results. If you don't trust the results, fix the system, instead of compensating by doing everything yourself.
  'Solutions must originate from the engineer'
  When AI can research approaches, analyze tradeoffs, and recommend options, the engineer's job becomes to add taste—knowing which solution fits this codebase, this team, and this context.
  'Code is the primary artifact'
  A system that produces code is more valuable than any individual piece of code. A single brilliant implementation matters less than a process that consistently produces good implementations.
  'Writing code is the core job function'
  A developer's job is ship value. Code is just one input in that job—planning, reviewing, and teaching the system all count too. Effective compound engineers write less code than before and ship more.
  'First attempts should be good'
  In our experience, first attempts have a 95 percent garbage rate. Second attempts are still 50 percent. This isn't failure—it's the process.
  Expecting perfection on attempt one is like expecting a junior developer to nail a complex feature without context. So make it your goal to get it right the first time. Focus on iterating fast enough that your third attempt lands in less time than attempt one.
  'Code is self-expression'
  Developers subconsciously see AI-assisted development as an attack on their identity. It feels like a blow to the ego.
  But the code was never really yours. It belongs to the team, the product, and the users. Letting go of code as self-expression is liberating. No attachment means you take feedback better, refactor without flinching, and skip the arguments about whether the code is good enough.
  'More typing equals more learning'
  Many developers fear that by not typing it, they are not learning it. However, the reality is that understanding matters more than muscle memory today.
  You learn and build understanding by reviewing, by catching mistakes, and by knowing when the AI is wrong. The developer who reviews 10 AI implementations understands more patterns than the one who hand-typed two.
  Transition challenges
  **Less typing feels like less work.** It isn't. Directing an agent requires more thinking than implementation because you are spending less time on keystrokes and more time thinking about important decisions.
  **Letting go feels risky.** Autonomous execution—handing things over to agents—triggers anxiety in many developers. This fades once they recognize they're not ceding control. Instead, they're encoding it into constraints, conventions, and review processes that scale better than manual oversight.
  **Who built this?** Features shipping without directly writing the code can feel like cheating. But planning, reviewing, and ensuring quality standards is the work. You did the thinking. All the AI did was the writing.
  These reactions indicate a fundamental shift in how work gets done, and they're expected. By talking about them openly at Every, we hope to make it easier for others to speak about their experiences. ([View Highlight](https://read.readwise.io/read/01kn41zb94z3efqky3bz291th6))
- Extract your taste into the system
  Every codebase reflects the taste of the developers who built it, from naming conventions to error handling patterns and testing approaches. That taste usually isn't documented anywhere. It lives in senior engineers' heads and is transferred through code review. This neither scales nor lets others on the team learn.
  The solution is to extract and document these choices. Write these preferences down in CLAUDE.md or AGENTS.md so the agent reads it every session. Build specialized agents for reviewing, testing, and deploying, as well as skills that reflect your taste. Add slash commands that encode your preferred approaches. Point the agent at your existing style guides, architecture docs, and decision records, which all include examples of the way that you like to build.
  Once the AI understands how you like to write code, it'll produce code you actually approve instead of code you have to fix. ([View Highlight](https://read.readwise.io/read/01kn41zkyqa0jnmw41net5vzqm))
- The 50/50 rule
  Previously, I suggested an 80/20 rule for building features: 80 percent of time planning and review, 20 percent on working and compounding. When you look at your broader responsibilities as a developer, you should allocate 50 percent of engineering time to building features, and 50 percent to improving the system—in other words, any work that helps build institutional knowledge rather than shipping something specific.
  In traditional engineering, teams put 90 percent of their time into features and 10 percent into everything else. Work that isn't a feature feels like a distraction—something you do when you have spare time, which you never do. But that \"everything else\" is what makes future features easier: things like creating review agents, documenting patterns, and building test generators. When you treat that work as overhead instead of an investment, the codebase accumulates debt.
  An hour spent creating a review agent saves 10 hours of review over the next year. You can spend time building a test generator that saves weeks of manual test writing. System improvements make work progressively faster and easier, but feature work doesn't. ([View Highlight](https://read.readwise.io/read/01kn41zq4daabmhytj0915f09c))
- Trust the process, build safety nets
  AI assistance doesn't scale if every line requires human review. You need to trust the AI.
  Trust doesn't mean blind faith. It means setting up guardrails such as tests, automatic review, and monitoring that flag issues so you don't have to watch every step.
  When you feel as if you can't trust the output, don't compensate by switching to manually reviewing the code. Add a system that makes that step trustworthy, such as creating a review agent that flags issues. ([View Highlight](https://read.readwise.io/read/01kn41zsp2hx1taz06q08w46p2))
- Make your environment agent-native
  If a developer can see or do something, the agent should be allowed to see or do it too.
  • Running tests
  • Checking production logs
  • Debugging with screenshots
  • Creating pull requests
  Anything that you don't let the agent handle, you have to do yourself manually. The goal should be full environmental parity between human and AI developers. ([View Highlight](https://read.readwise.io/read/01kn41zw862ze1h1548qws70dt))
- Parallelization is your friend
  You used to be the bottleneck because human attention only allows one task at a time. The new bottleneck is compute—how many agents you can run at once.
  Run multiple agents and multiple features at the same time. Perform review, testing, and documentation all at once. When you are stuck on one task, start another, and let agents work while planning the next step. ([View Highlight](https://read.readwise.io/read/01kn41zzq77c089djz9c3ejp6n))
- Plans are the new code
  The plan document is now the most important thing you produce. Instead of coding first and documenting later, as you might have traditionally, start with a plan. This becomes the source of truth your agents use to generate, test, and validate code.
  Having a plan helps capture decisions before they become bugs. Fixing ideas on paper is cheaper than fixing code later. ([View Highlight](https://read.readwise.io/read/01kn4201aap7482eb6rxan4dwx))
- Core principles
  In summary, the beliefs that underpin this new approach to software development are:
  • **Every unit of work makes subsequent work easier.** Code, documentation, and tooling should build on each other and make future work faster, not slower.
  • **Taste belongs in systems, not in review.** Bake your judgment into configuration, schemas, and automated checks. If you don't you'll be spending time manually checking, which does not scale.
  • **Teach the system, don't do the work yourself.** Time spent giving agents more context pays exponential dividends, but time spent typing code only solves the task in front of you.
  • **Build safety nets, not review processes.** The way to build trust in building with AI is by building verification infrastructure, not by gatekeeping manually at every step.
  • **Make environments agent-native.** Structure projects so AI agents can navigate and modify them autonomously.
  • **Apply compound thinking everywhere.** Every artifact—code, docs, tests, prompts—should enable the next iteration to move faster.
  • **Embrace the discomfort of letting go.** When you delegate to AI tools, you have to be okay with imperfect results that scale, rather than perfect results that don't.
  • **Ship more value. Type less code.** Your output should be measured by the number of problems solved, not the number of keystrokes you logged.
  The principles extend beyond engineering to design, research, or even writing—any discipline where codifying taste and context help make future work go faster and easier. The steps are the same: Plan, execute, review, compound. ([View Highlight](https://read.readwise.io/read/01kn4204etwzysb2txvwex91hg))
- The compound engineering loop—plan, work, review, compound—is the process. But how much of that process you allow the AI to own depends on where you are in your familiarity and aptitude with AI. There are five stages against which developers can plot themselves to understand where they sit.
  Most developers who struggle with AI-assisted development don't know where they are on this ladder. They hear about multi-agent review systems and parallel cloud execution, feel overwhelmed, and either give up or try to skip ahead. Skipping stages doesn't work because you will feel uncomfortable and distrustful of the tools. Each rung builds the mental models and habits required for the next. So slow down, figure out where you are, and focus on building from there. ([View Highlight](https://read.readwise.io/read/01kn420a33vamxr3ym1yrmtaf7))
- The stagesStage 0: Manual development
  At this stage, you are writing code line by line without any AI. You perform research via documentation and Stack Overflow. Your debugging process happens through code reading and print statements. Manual development built great software for decades, but sadly it's not fast enough in 2025.
  Stage 1: Chat-based assistance
  At this stage, you are using AI as a smart reference tool, querying ChatGPT, Claude, or Cursor, receiving code snippets, and copy-pasting what's useful. The AI accelerates your research and boilerplate generation, but you are still fully in control, reviewing every line.
  Stage 2: Agentic tools with line-by-line review
  At this stage, agentic tools—AI assistants that can read files and make changes directly—enter the workflow: Claude Code, Cursor Composer, and Copilot Chat. You allow the AI to read files and make changes directly in the codebase based on the context you have provided. You are a gatekeeper, approving or rejecting everything that the agent proposes, which is still a painstaking process.
  Most developers plateau here and don't get to enjoy the upside of handing more over to AI.
  Stage 3: Plan-first, PR-only review
  This is the stage where everything changes. You and AI collaborate on a detailed plan including requirements, approach, and edge cases. Then the developer steps away and allows the AI to implement the plan without supervision. The output is a pull request, which you then review. Finally, you are out of the line level of the code and can catch problems in the PR review instead of babysitting the AI while it builds.
  Compound engineering begins here as each cycle of planning, building, and reviewing teaches the system something that makes the next cycle easier and faster.
  Stage 4: Idea to PR (single machine)
  You provide an idea, and the agent handles everything: codebase research, planning, implementation, test execution, self-review, issue resolution, and PR creation. At this stage, your involvement shrinks to three steps: ideation, PR review, and merge. However, you are still running one thing at a time on your own computer.
  Stage 5: Parallel cloud execution (multiple devices)
  This is the final stage. You move execution to the cloud and run things in parallel. Because you're not tied to a laptop, you can direct your agents from anywhere—a coffee shop, a Panamanian beach, or your phone.
  You kick off three features, three agents work independently, and you review PRs as they finish. If you push it further, you allow agents to start monitoring feedback and proposing fixes without being asked. No longer an individual contributor are you. You're commanding a fleet. ([View Highlight](https://read.readwise.io/read/01kn420hr2cr16a6yt59tgdc5c))
- Even if you don't have a fancy multi-agent review system at your fingertips, you can still get the benefits by asking these three questions before approving any AI output:
  1. **"What was the hardest decision you made here?"** This forces the AI to reveal where the tricky parts are and where it had to make judgment calls.
  2. **"What alternatives did you reject, and why?"** This shows you the options it considered and helps catch if it made a bad choice.
  3. **"What are you least confident about?"** This gets the AI to admit where it might be wrong. LLMs know where their weaknesses are, but you have to ask. ([View Highlight](https://read.readwise.io/read/01kn424kg025vadv66pbqmpw4d))
- Agent-native architecture means giving the agent the same capabilities you have. If the agent can't run tests, you have to run them. If it can't see logs, you have to debug. Every capability you withhold from the AI becomes a task you have to do yourself.
  The agent-native checklist
  To see if you are working in an agent-native way, check your agent's capabilities. Can your agent:
  Development environment
  • Run your application locally
  • Run your test suite
  • Run linters and type checkers
  • Run database migrations
  • Seed development data
  Git operations
  • Create branches
  • Make commits
  • Push to remote
  • Create pull requests
  • Read PR comments
  Debugging
  • View local logs
  • View production logs (read-only)
  • Take screenshots of the UI
  • Inspect network requests
  • Access error tracking (Sentry, etc.) ([View Highlight](https://read.readwise.io/read/01kn424t45mxqsk5nnyfmyxpjp))
