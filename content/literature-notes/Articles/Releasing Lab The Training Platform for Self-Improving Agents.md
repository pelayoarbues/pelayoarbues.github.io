---
author: "[[primeintellect.ai]]"
title: 'Releasing Lab: The Training Platform for Self-Improving Agents'
date: "2026-05-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://primeintellect.ai/blog/lab-is-open-thumbnail.png?v=lab-is-open)

## Metadata
- Author: [[primeintellect.ai]]
- Full Title: Releasing Lab: The Training Platform for Self-Improving Agents
- URL: https://www.primeintellect.ai/blog/lab-is-open

## Highlights
- Releasing Lab: the training platform for self-improving agents
  Today, Lab is out of beta and generally available to everyone.
  Lab is our training platform for self-improving agents. It brings the full loop for agentic model improvement into one place: specify tasks, define a harness, evaluate models, train on reward signals, inspect rollouts, deploy adapters, and run inference.
  You bring the task. Lab handles the training stack. ([View Highlight](https://read.readwise.io/read/01ks2235j3k5z9ajk9nc0tnxs3))
- We launched Lab in beta earlier this year on one premise: every AI company should be able to own its model-to-product optimization loop. Since then, hundreds of researchers, startups, and frontier teams have run more than 10,000 training jobs on the platform — math, code, browsers, games, customer support, long-horizon agents, and a handful of enterprise workflows we hadn't seen before. They built environments we hadn't thought of, and trained models we wouldn't have known how to spec. ([View Highlight](https://read.readwise.io/read/01ks2239c9pajnjdvdqwp3ssr6))
- Environments Are the Unit of Improvement
  Lab is built around environments. An environment packages everything required to run a model on a task and evaluate its performance:
  • a set of tasks, including data, tools, and simulators
  • a harness for the model, with sandboxes, context management, and custom programs
  • reward metrics that define success criteria
  This is the key abstraction behind Lab. Environments can be used interchangeably for local development, hosted evaluations, synthetic data generation, prompt optimization, and reinforcement learning.
  An environment can be a math benchmark, a code repair task, a browser workflow, a game, a customer-support simulation, an internal business process, or a long-horizon research agent.
  Bring your own harness. Turn your data into training tasks. Define your own success criteria. Deploy self-improving agents. ([View Highlight](https://read.readwise.io/read/01ks223kx441zjg6f4rk8xcych))
- Lab spins up a dedicated orchestrator for your run, drives rollouts through your environment, scores trajectories with your rubric, and trains a LoRA adapter with our open-source [`prime-rl`](https://github.com/PrimeIntellect-ai/prime-rl) trainer. Inference workers update as training progresses, so rollouts always come from the latest weights.
  The architecture is multi-tenant across training and inference, which is what lets us price runs per token rather than per cluster-hour. You pay for the tokens that actually move the model — not for GPU time you reserved and didn't use.
  For GA, Hosted Training launches with 14 models from NVIDIA, OpenAI, Meta, and Qwen, between 1B and 70B parameters. The lineup spans dense and MoE architectures, reasoning and non-reasoning modes, text and image modalities. More providers and larger models are landing over the coming weeks. ([View Highlight](https://read.readwise.io/read/01ks2241h3v07s902xf1ktwgbk))
- Evaluate, Train, Inspect, Deploy
  Training is only useful if it fits into an iteration loop. Lab connects each stage.
  Start with a baseline evaluation. Run your environment against a base model using Prime Inference or any OpenAI-compatible endpoint. Inspect per-sample outputs, reward curves, and rubric breakdowns.
  Then train. Hosted Training streams logs, metrics, reward distributions, rollout samples, checkpoints, and adapter status back to the platform. You can monitor from the dashboard or from the terminal: ([View Highlight](https://read.readwise.io/read/01ks224h6nbjk7k6x6y3gkptmd))
- Your adapter becomes available through an OpenAI-compatible API, using the same application code and SDKs you already use.
  This is the loop Lab is built for: evaluate the current model, collect reward signal from real tasks, train a better adapter, deploy it, and repeat. ([View Highlight](https://read.readwise.io/read/01ks224mkqzqfd6wn4v5g68f06))
- From Beta to GA
  During beta, hundreds of users tested Lab and ran more than 10,000 training runs across research, benchmarks, games, coding environments, browser tasks, and enterprise workflows.
  We also worked directly with leading enterprises and technology companies on the same question: how do you turn production work into a self-improvement flywheel?
  The answer is not a generic fine-tuning job. It is a repeatable loop around your own data, tools, tasks, and reward signals. Lab gives teams the infrastructure to run that loop without rebuilding the platform stack first. ([View Highlight](https://read.readwise.io/read/01ks224tfkkgm6c8k19q65ptng))
- What Comes Next
  Over the coming weeks, we will showcase training workflows, research directions, and real-world applications that Lab unlocks: browser and computer-use agents, long-horizon coding tasks, online evaluations, multimodal environments, prompt optimization, model distillation, and enterprise production loops.
  We will also invite the community to participate directly in collaborative research efforts on the platform. Lab is part of our broader mission to build the Open Superintelligence Stack: open infrastructure, open environments, open models, and accessible training systems for the people building with them. ([View Highlight](https://read.readwise.io/read/01ks2250jacwg7ww2nw13m5aae))
