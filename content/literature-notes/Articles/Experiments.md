---
author: "[[langfuse.com]]"
title: 'Experiments'
date: "2026-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://langfuse.com/api/og?title=Experiments&description=How+to+use+experiments+to+systematically+improve+your+LLM+application+by+isolating+variables+and+comparing+outputs.&section=Academy)

## Metadata
- Author: [[langfuse.com]]
- Full Title: Experiments
- URL: https://langfuse.com/academy/experiments

## Highlights
- [How experiments fit into the loop](https://langfuse.com/academy/experiments/#how-experiments-fit-into-the-loop)
  To systematically understand and improve how your system behaves, you need a way to isolate cause and effect. That's what experiments give you. You pick a variable or a set of variables, run your dataset through two versions of your system, and compare what comes out. The result tells you whether a change actually helped, and by how much. To understand by how much, you also need to evaluate your experiment outputs ([see Evaluate](https://langfuse.com/academy/evaluate)). This section covers the systematic experimentation part before evaluation. ([View Highlight](https://read.readwise.io/read/01ks3enzt9f9dpjbpe55tg7k3h))
- [The anatomy of an experiment](https://langfuse.com/academy/experiments/#the-anatomy-of-an-experiment)
  Every experiment has four components.
  Component
  What it is
  **Baseline**
  Your current production system — the control condition everything else gets measured against. Keep it fixed while you vary one thing.
  **Dataset**
  The inputs you run both conditions against. Keep the same dataset across experiments so results are comparable over time.
  **Variable**
  The configuration you're changing — model, prompt, context, tool access, or agent architecture. See [Variables](https://langfuse.com/academy/experiments/#on-variables) below.
  **Outputs to compare**
  What your system produces under each condition. Comparing these is the actual work of running an experiment.
  It often helps to change only one variable at a time. However, variables interact, and some configurations require changing multiple variables at once. ([View Highlight](https://read.readwise.io/read/01ks3epc36percbdbhgbqtqghf))
- [Variables](https://langfuse.com/academy/experiments/#on-variables)
  • **Model.** The AI model you are using. There are reasoning-heavy models, cheap models, and fast models, and they all come with different tradeoffs in result quality, speed, and cost.
  • **Prompt.** The most common lever. Before running a prompt experiment, ask: is the failure a specification problem (ambiguous or incomplete prompt) or a generalization problem (model applies clear instructions inconsistently)? The latter is worth measuring.
  • **Context.** What information you include in the prompt: retrieved documents, conversation history, user metadata.
  • **Tool access.** Adding or removing tools changes what paths your system can take.
  • **Agent architecture.** Single agent vs. multi-agent, which framework, how tasks are decomposed. The biggest bets, the hardest to isolate. ([View Highlight](https://read.readwise.io/read/01ks3epnjvw9x7p17kh6k4nkqf))
- [How experiments are used](https://langfuse.com/academy/experiments/#how-experiments-are-used)
  The core flow: pick a variable and form a hypothesis, run both conditions against your dataset, compare outputs, learn something, and repeat.
  ![Experimentation loop](https://langfuse.com/_next/image?url=%2Fimages%2Facademy%2Fexperimentation.png&w=3840&q=75) ([View Highlight](https://read.readwise.io/read/01ks3epygfdwdptp587ffscm55))
- Typical attempts can include:
  • There is a new model: Will it improve the performance of our system?
  • Does my prompt change improve the output quality of our system?
  • Is our new agent harness architecture creating better results than our multi-agent system?
  Start qualitative: same input, both conditions, traces side by side. That is how you learn what "better" means for your app; without reading real outputs regularly, metrics are easy to misread.
  Scores then make comparison concrete—win rates, whether wins are spread across inputs or concentrated, and cost or latency tradeoffs. Quality, price, and speed rarely move together; experiments show those pulls in your data instead of in the abstract. ([View Highlight](https://read.readwise.io/read/01ks3eqgrvty32n1ntsgtvyqaa))
- [Where to start](https://langfuse.com/academy/experiments/#where-to-start)
  Start with a small, manual comparison before building more infrastructure. A few examples with traces side by side will teach you more in the first hour than a week of setup work.
  1. Get 20–30 real examples. Pull them from production traces or come up with realistic examples. They don't need to cover everything, just a real slice of what your application handles.
  2. Change your configuration and run both versions. Keep everything else identical.
  3. Read traces side by side. No evaluator needed yet. Just read. What's different? Which one is actually better and why? Pay attention to the type of failure — is the prompt unclear, or is the model applying clear instructions inconsistently? That distinction tells you what kind of fix to try next.
  4. Add an evaluator once you have intuition. After a few manual rounds you'll know what you're looking for. Encode it. Now you can scale. ([View Highlight](https://read.readwise.io/read/01ks3eqq9ze9cf7mxvcs6j8eed))
