---
title: I am cooking again
date: 2026-03-22
tags:
  - permanent-note
  - AI
  - workflow
---
I am [back to software development](notes/Dont%20get%20too%20rusty.md). And it is all thanks to AI code assistants. My schedule is packed with [meetings](notes/The%2010x%20Manager.md), which means that until now I mainly built [prototypes](notes/Make'em%20talk%20with%20prototypes.md), test frameworks, and did things that were not very urgent or critical.

Then life happened. In November, one of my team members had to leave the company because of a personal problem. He came back in March, but it was unexpected and it affected one of the projects I had planned for him at the end of December.

We have been building a project that allows users to find [inspiring real estate images](https://www.idealista.it/news/inspiration). My team was responsible for designing and evaluating the AI models behind it. Since it involves images, the plan was to use LVMs as judges and eyeball evaluations in the first phases. So what I expected [we would contribute](notes/Context%20Engineering.md) was a simple app to check the LVMs evaluations and compute a few performance metrics.

It was not much, but the [team](notes/Pride%20of%20my%20team.md) is already stretched across multiple projects. I am helping coordinate this one, so I had all the info and context needed to solve it myself. I had been using Claude Code along with [obra/superpowers](https://github.com/obra/superpowers/tree/main) for building prototypes. This time felt different.

This time I had to ship code under real pressure. I had a clear deadline and my code would be used on an ongoing project. Nothing too scary considering I worked as an [individual contributor for years](mocs/Bio.md), but I had to do the job while jumping between meetings and devoting [deep work to strategic thinking](notes/Headspace%20for%20managers.md) on present and future issues.

The result? I developed a full solution in a week while attending all my meetings. I put extra effort into the design, but all the implementation was done by Claude Code using mostly Opus 4.6 and Sonnet 4.6. I had a clear vision of what the app should do, so I was able to correct and steer back when it failed. Yes, it failed sometimes. It miscounted good and bad results. It messed up some of the metrics, displaying wrong and misleading numbers. That is why you cannot just trust the output, you need to check the code and make sure it returns what you expect.

It seems I am not the only [manager](https://gist.github.com/dcramer/c0a673da13a24f7e315535c1cb57dcae) going back to pushing code to production. Going back to actively working as an Individual Contributor was both useful for the team and [fun for me](notes/Energy%20Management%20Confession.md). I hope I can do it more often, not just writing personal tools for my daily work, but actually shipping things that matter.
