---
author: "[[Jesse Vincent]]"
title: 'Superpowers: How I''m Using Coding Agents in October 2025'
date: "2025-10-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.fsck.com/img/me.jpg)

## Metadata
- Author: [[Jesse Vincent]]
- Full Title: Superpowers: How I'm Using Coding Agents in October 2025
- URL: https://blog.fsck.com/2025/10/09/superpowers/

## Highlights
- One of the first skills I taught Superpowers was [How to create skills](https://github.com/obra/Superpowers/blob/main/skills/meta/creating-skills/SKILL.md). That has meant that when I wanted to do something like add `git worktree` workflows to Superpowers, it was a matter of describing how I wanted the workflows to go...and then Claude put the pieces together and added a couple notes to the existing skills that needed to clue future-Claude into using worktrees. ([View Highlight](https://read.readwise.io/read/01k7ytpyadg76y55j8w47j4pbm))
- I've spent the past couple of weeks working on a set of tools to better extract and systematize my processes and to help better steer my agentic buddy. I'd been planning to start to document the system this weekend, but then this morning, Anthropic went and rolled out [a plugin system for claude code](https://docs.claude.com/en/docs/claude-code/plugins). ([View Highlight](https://read.readwise.io/read/01k7ytj49v00bg2raz32rcjfb6))
- If you want to stop reading and play with my new toys, they're self-driving enough that you can. You'll need Claude Code 2.0.13 or so. Fire it up and then run:
  /plugin marketplace add obra/superpowers-marketplace
  /plugin install superpowers@superpowers-marketplace ([View Highlight](https://read.readwise.io/read/01k7ytjg7gt3r1paxk3syqebm1))
- After you quit and restart `claude`, you'll see a new injected prompt:
  <session-start-hook><EXTREMELY_IMPORTANT>
  You have Superpowers.
  **RIGHT NOW, go read**: @/Users/jesse/.claude/plugins/cache/Superpowers/skills/getting-started/SKILL.md
  </EXTREMELY_IMPORTANT></session-start-hook>
  That's the bootstrap that kicks off `Superpowers`. It teaches Claude a couple important things:
  1. You have skills. They give you Superpowers.
  2. Search for skills by running a script and use skills by reading them and doing what they say.
  3. If you have a skill to do something, you *must* use it to do that activity. ([View Highlight](https://read.readwise.io/read/01k7ytjmb0dh3pn9rt49cz9vq5))
- It also bakes in the brainstorm -> plan -> implement workflow I've [already written about](https://blog.fsck.com/2025/10/05/how-im-using-coding-agents-in-september-2025/). The biggest change is that you no longer need to run a command or paste in a prompt. If Claude thinks you're trying to start a project or task, it *should* default into talking through a plan with you before it starts down the path of implementation.
  After you're done brainstorming, if you're in a git repo it automatically creates a worktree for the project and changes to that directory. This means that you can start parallel tasks on the same project that don't clobber each other. ([View Highlight](https://read.readwise.io/read/01k7ytjqwzvy4zqkhstecxxasv))
- It then offers you a choice between:
  1. last month's process (where you'd open a second `claude` session and act as a human PM for the architect and implementer.)
  2. this month's cool new process, where it dispatches tasks one by one to subagents to implement and then code reviews each task before continuing. ([View Highlight](https://read.readwise.io/read/01k7ytjxe04xfme7tqms4zje2v))
- Either way, Claude practices RED/GREEN TDD, writing a failing test, implementing only enough code to make that test pass, and then moving on.
  At the end of the implementation process, Claude will now offer to make a GitHub pull request, merge the worktree back to the source branch locally, or just stop. ([View Highlight](https://read.readwise.io/read/01k7ytk05dnddxahe94ggh7khr))
- Skills are the interesting part. And you're going to be hearing a lot more about them from....just about everybody in the very near future.
  Skills are what give your agents Superpowers.
  The first time they really popped up on my radar was a few weeks ago when Anthropic rolled out improved Office document creation. When the feature rolled out, I went poking around a bit – I asked Claude to tell me all about its new skills. And it was [only too happy to dish](https://claude.ai/share/0fe5a9c0-4e5a-42a1-9df7-c5b7636dad92). ([View Highlight](https://read.readwise.io/read/01k7ytp0mce0jyw18z5ay9sjn6))
- A very cool tech demo I saw a couple Fridays ago talked about how they'd given their custom coding agent the power to self-improve by writing out something that sounded a lot like SKILL.md files. Sam Schillace [wrote about that demo here](https://sundaylettersfromsam.substack.com/p/i-have-seen-the-compounding-teams).
  Sam and [Brian Krabach](https://paradox921.medium.com/) are a couple of the folks behind [Microsoft Amplifier](https://github.com/microsoft/amplifier), an amazing integrated development framework that uses this same pattern of a coding agent that improves itself by writing out markdown docs and writing tools for itself. Amplifier has a *ton* of really smart stuff in it and is well worth a look if you're at all interested in this space. ([View Highlight](https://read.readwise.io/read/01k7ytnqnsxcb0ftytx4jyhwta))
- I haven't published all the skills Claude and I have built, because some of them are a little esoteric and some of the ones I've played with come from telling Claude "Here's my copy of *programming book*. Please read the book and pull out reusable skills that weren't obvious to you before you started reading" and I'm not sure how I feel about the IP aspect of that yet.
  Stop and think about that last workflow a little bit. This is, I think, one of the foundational ideas in how all this works. You can hand a model a book or a document or a codebase and say "Read this. Think about it. Write down the new stuff you learned." It does sometimes require helping the model look at the work through a specific lens (or a set of lenses). But it is insanely powerful. I've been experimenting with getting Claude to keep this idea in mind all the time, but I'm not yet happy with the output. ([View Highlight](https://read.readwise.io/read/01k7ytr3cnyygxjaaa3kc0r4m3))
- As Claude and I build new skills, one of the things I ask it to do is to "test" the skills on a set of subagents to ensure that the skills were comprehensible, complete, and that the subagents would comply with them. (Claude now thinks of this as TDD for skills and *uses* its RED/GREEN TDD skill as part of the skill creation skill.) ([View Highlight](https://read.readwise.io/read/01k7ytrshggzw8tk0swqddmxpf))
- Claude went *hard*. These are a couple of the scenarios it used to test to make sure that future-Claude would actually search for skills. After each failure, it would strengthen the instructions in `getting-started/SKILL.md`. ([View Highlight](https://read.readwise.io/read/01k7ytwnr2xa4spfsv0wk6wfgz))
- It made *sense* to me that the persuasion principles I learned in [Robert Cialdini](https://cialdini.com/)'s [Influence](https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X) would work when applied to LLMs. And I was pleased that they did.
  But then today, I was chatting with [Dan Shapiro](https://danshapiro.com) and he filled me in on what he's been up to lately. He coauthored [a study that put scientific rigor behind proving that Cialdini's principles work on LLMs](https://gail.wharton.upenn.edu/research-and-insights/call-me-a-jerk-persuading-ai/) with Cialdini (and others). ([View Highlight](https://read.readwise.io/read/01k7ytw7p0wg34p7j248fa86sp))
- As we were getting started, I asked Claude to "pressure test" whether the new skills were necessary before writing. Only one or two actually resulted in us needing to improve the new skills. Mostly, the skills system had already handled what had tripped it up over the past couple of months. So that was nice. ([View Highlight](https://read.readwise.io/read/01k7ytxk41v5zxfey043wqx8y1))
- If you want to see what working with Superpowers feels like, [this very long transcript](https://blog.fsck.com/blog/2025/superpowers/superpowers-demo.txt) documents a test run I did of having Claude build a small todo list app. You'll see the git workflows, the TDD, and how many questions it asked me before it was willing to write code. ([View Highlight](https://read.readwise.io/read/01k7yty486xmp4x0dg80qxa688))
- Superpowers are for everybody. Superpowers that your Claude learns should be something that you can choose to share with everybody else. I had this almost working when Superpowers was just a git repo Claude forks and clones and symlinks into `~/.claude`, but building Superpower sharing with the new `claude` plugins system is going to take a little bit more thought and design. Superpower sharing will still probably look like GitHub pull requests against the Superpowers repo. Probably. ([View Highlight](https://read.readwise.io/read/01k7ytz06ahbd4m2js757mzsyh))
- The first is giving Claude access to memories of all its past conversations. All the pieces for that are written. You can find them in the 'remembering-conversations' skill. It duplicates all of `claude`'s transcripts outside of `.claude`, so Anthropic won't automatically delete them after a month. Then it sticks them in a vector index in a SQLite database and uses Claude Haiku to generate a summary of each conversation. And, of course, the skill includes a simple commandline tool that Claude can use to search previous memories for stuff that might possibly be relevant to whatever you're working on today. To ensure that fruitless searches don't pollute the context window, the `remembering-conversations` skill explains to Claude that it needs to use a subagent to do the searching. ([View Highlight](https://read.readwise.io/read/01k7yv05zba3kf4frdgfzneb80))
