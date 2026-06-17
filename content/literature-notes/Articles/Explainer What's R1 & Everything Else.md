---
author: "[[Tim Kellogg]]"
title: 'Explainer: What''s R1 & Everything Else?'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.pixabay.com/photo/2022/07/18/11/12/statue-7329573_1280.jpg)

## Metadata
- Author: [[Tim Kellogg]]
- Full Title: Explainer: What's R1 & Everything Else?
- URL: https://timkellogg.me/blog/2025/01/25/r1

## Highlights
- Is AI making you dizzy? A lot of industry insiders [are feeling the same](https://x.com/emollick/status/1883248352034521281). R1 just came out a few days ago out of nowhere, and then there’s o1 and o3, but no o2. Gosh! It’s hard to know what’s going on. This post aims to be a guide for recent AI develoments. ([View Highlight](https://read.readwise.io/read/01jjp6bct7qkh5vv167aa67dzc))
- Reasoning models are able to “think” before respoding. LLMs think by generating tokens. So we’ve training models to generate a ton of tokens in hopes that they stumble into the right answer. The thing is, [it works](https://arxiv.org/abs/2408.00724v2). ([View Highlight](https://read.readwise.io/read/01jjp6dcptyppy3z5catq1wr0b))
- AI Agents are defined by two things:
  1. **Autonomy** (agency) to make decisions and complete a task
  2. Ability to **interact** with the outside world ([View Highlight](https://read.readwise.io/read/01jjp6dm1031dn4v1hb3fxyqdw))
- LLMs & reasoning models alone only generate tokens and therefore have no ability to do either of these things. They need **software** in order to make decisions real and give it interaction abilities.
  Agents are a **system of AIs**. They’re models tied together with software to autonomously interact with the world. Maybe hardware too. ([View Highlight](https://read.readwise.io/read/01jjp6dqxxgv1vdk1x53cfzrdx))
- Reasoning models get conflated with agents because currently, ***reasoning is the bottleneck***. We need reasoning to plan tasks, supervise, validate, and generally be smart. We can’t have agents without reasoning, but there will likely be some new challenge once we saturate reasoning benchmarks. ([View Highlight](https://read.readwise.io/read/01jjp6e7k15ca4ydjgw0fbjj40))
- Agents will run for hours or days, maybe 24/7. That’s the nature of acting autonomously. As such, costs add up. As it stands, R1 costs about **30x less** than o1 and achieves similar performance. ([View Highlight](https://read.readwise.io/read/01jjp6e9fwdpx62mthrerzzzsz))
- Why R1 Is Important
  It’s cheap, open source, and has validated what OpenAI is doing with o1 & o3.
  There had been some predictions made about how o1 works, based on public documentation, and the R1 public paper corroborates all of this almost entirely. So, **we know how o1 is scaling** into o3, o4, …
  It’s also open source, and that means the entire world can run with their ideas. Just notice the condensed timeline in the last week, of people re-creating R1 (some claim for $30). Innovation happens when you can iterate quickly and cheaply, and R1 has triggered such an environment. ([View Highlight](https://read.readwise.io/read/01jjp6f4n3vmr5pw7jmvw82390))
- Most important, R1 **shut down** some very complex ideas (like [DPO](https://arxiv.org/abs/2305.18290) & [MCTS](https://builtin.com/machine-learning/monte-carlo-tree-search)) and showed that the path forward is simple, basic RL. ([View Highlight](https://read.readwise.io/read/01jjp6f5xxtff81ckbwvfce42t))
- When GPT-4 hit, there were these dumb scaling laws. Increase data & compute, and you simply get a better model (the [pretraining scaling laws](https://medium.com/@biradarmithilesh/introduction-to-llms-and-the-generative-ai-part-2-llm-pre-training-and-scaling-laws-275a0306c9e2)). These are gone. They’re not dead, per se, but we ran into some bumps with getting access to data but discovered new scaling laws. ([View Highlight](https://read.readwise.io/read/01jjp6fgkehjk20qhf145n9vj1))
- This is about **reasoning models**, like o1 & R1. [The longer they think, the better they perform.](https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute)
  It wasn’t, however, clear how exactly one should perform *more computation* in order to achieve better results. The naive assumption was that [Chain of Thought (CoT)](https://www.promptingguide.ai/techniques/cot) could work; you just train the model to do CoT. The trouble with that is finding the fastest path to the answer. [Entropix](https://timkellogg.me/blog/2024/10/10/entropix) was one idea, use the model’s internal signals to find the most efficient path. Also things like [Monte Carlo Tree Search (MCTS)](https://builtin.com/machine-learning/monte-carlo-tree-search) , where you generate many paths but only take one. There were several others.
  It turns out **CoT is best**. R1 is just doing simple, single-line chain of thought trained by RL (maybe [entropix](https://timkellogg.me/blog/2024/10/10/entropix) was on to something?). Safe to assume o1 is doing the same. ([View Highlight](https://read.readwise.io/read/01jjp6ga3h739e5c3gxy52nfzz))
- The first signal was GPT-4-turbo, and then GPT-4o, and the Claude series, and all other LLMs. They were all getting smaller and cheaper throughout ‘24.
  If generating more tokens is your path to reasoning, then lower latency is what you need. Smaller models compute faster (fewer calculations to make), and thus smaller = smarter. ([View Highlight](https://read.readwise.io/read/01jjp6gq0ecmb93qptp22pjk0k))
- R1 used [GRPO (Group Rewards Policy Optimization)](https://bsky.app/profile/timkellogg.me/post/3lgb7jatrks24) to teach the model to do CoT at inference time. It’s just dumb reinforcement learning (RL) with nothing complicated. No complicated verifiers, no external LLMs needed. Just RL with basic reward functions for accuracy & format.
  [R1-Zero](https://huggingface.co/deepseek-ai/DeepSeek-R1-Zero) is a version of R1 from DeepSeek that only does GRPO and nothing else. It’s more accurate than R1, but it hops between various languages like English & Chinese at will, which makes it sub-optimal for it’s human users (who aren’t typically polyglots). ([View Highlight](https://read.readwise.io/read/01jjp6h2523v4xb02fq2ts6cb2))
- *Why does R1-zero jump between languages? [My thought](https://bsky.app/profile/timkellogg.me/post/3lgfvtakxg224) is that different languages express different kinds of concepts more effectively. e.g. the whole “what’s the german word for [paragraph of text]?” meme.*
  Today (Jan 25, ‘25), [someone demonstrated](https://bsky.app/profile/timkellogg.me/post/3lgll2ojkbc2g) that *any reinforcement learning* would work. They tried [GRPO](https://bsky.app/profile/timkellogg.me/post/3lgb7jatrks24), [PPO](https://arxiv.org/abs/1707.06347), and [PRIME](https://github.com/PRIME-RL/PRIME); they all work just fine. And it turns out that the magic number is 1.5B. If the model is bigger than 1.5B, the inference scaling behavior will spontaneously emerge regardless of which RL approach you use. ([View Highlight](https://read.readwise.io/read/01jjp6hh0e8phphm5g1vb9mv3n))
- R1 distilled from previous checkpoints of itself.
  Distillation is when one teacher model generates training data for a student model. Typically it’s assumed that the teacher is a bigger model than the student. R1 used previous checkpoints of the same model to generate training data for Supervised Fine Tuning (SFT). They iterate between SFT & RL to improve the model. ([View Highlight](https://read.readwise.io/read/01jjp6j1emdm2rftg34p58x699))
- A long time ago (9 days), there was a prediction that GPT5 exists and that GPT4o is just a distillation of it. [This article](https://www.thealgorithmicbridge.com/p/this-rumor-about-gpt-5-changes-everything?r=2cpkgh&utm_medium=ios&triedRedirect=true) theorized that OpenAI and Anthropic have found a cycle to keep creating every greater models by training big models and then distilling, and then using the distilled model to create a larger model. I’d say that the R1 paper largely confirms that that’s possible (and thus likely to be what’s happening). ([View Highlight](https://read.readwise.io/read/01jjp6jgdaj61awxx8kgty5pnk))
- Evidence suggests that the student can [exceed the teacher](https://bsky.app/profile/timkellogg.me/post/3lfwwlosbus2f) during distilation. It’s unclear how much of this is actually happening. The intuition is that distillation is able to help the student find the signal and more quickly converge. [Model collapse](https://www.nature.com/articles/s41586-024-07566-y) is still top of mind, but it seems to have been a mostly needless fear. Model collapse is certainly always possible, but it’s by no means guaranteed and there are even ways to go the opposite way and have the student exceed the teacher. ([View Highlight](https://read.readwise.io/read/01jjp6jnxtdnnq78kp7fpey27m))
- *I coined that term, distealing, unauthorized distillation of models. Go ahead, use it, it’s a fun word.*
  Software is political now and AI is at the center. AI seems to be factored into just about every political axis. Most intersting is China vs. USA.
  Strategies:
  • USA: heavily funded, pour money onto the AI fire as fast as possible
  • China: under repressive export controls, pour smarter engineers & researchers into finding cheaper solutions
  • Europe: regulate or open source AI, either is fine ([View Highlight](https://read.readwise.io/read/01jjp6kfb5bzt1yr6t0n96p8be))
