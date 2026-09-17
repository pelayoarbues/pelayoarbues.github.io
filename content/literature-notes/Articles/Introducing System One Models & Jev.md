---
author: "[[typesafe.ai]]"
title: 'Introducing System One Models & Jev'
date: "2026-09-17"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://framerusercontent.com/images/RtIGTDwO43jR4ZDilesXiR5znc.jpg)

## Metadata
- Author: [[typesafe.ai]]
- Full Title: Introducing System One Models & Jev
- URL: https://typesafe.ai/blog/introducing-system-one-models-and-jev

## Highlights
- Models have been superhuman at chat for years, so where is all the automation?
  This has been my driving question for the last four years. At OpenAI, I helped build the methods that made language models useful at following instructions and talking with people. That work ended up as the research behind ChatGPT.  At the time, I thought maybe chat models would lead to AGI, but despite the hype it became obvious to me that there was something really big missing.
  After two years in stealth, countless technical challenges, and research breakthroughs… I am beyond excited to announce that today, TypeSafe AI is releasing our first **System One Model**: a new class of frontier models built to make fast, structured decisions that software can use directly.
  We built a new stack entirely focused on automation: with a new model architecture, parallel sampler for maximum efficiency, and training method we call Reinforcement Learning for Calibrated Decisions (RLCD).
  Our first public model is **Jev**, available today in early access. Jev achieves similar levels of intelligence on System One tasks compared to existing LLMs, while being two orders of magnitude faster and more efficient. While Jev gives up string generation, it’s optimized for structured outputs and *can’t* hallucinate. 
  Think of Jev as a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out. ([View Highlight](https://read.readwise.io/read/01m2qm5k6dxn3jds67pwd436rx))
- Evidence / Technical Results
  We love skeptics, and are skeptics ourselves.
  There are some claims you can easily verify:
  • **Speed per call:** We truly are that fast, though our published evals are generally run from our laptops on the West Coast (this is where our service is currently based).
  • **Cost per call:** We make our pricing transparent. We can’t prove it isn’t subsidized; we’ll need the long-term to prove the sustainability of our pricing (which we expect to go down, not up).
  • **No type errors**: This would be an easy thing to falsify with just a single counter-example, but it is mathematically impossible.
  For our bolder claims, we want to provide as much nuance as we can. ([View Highlight](https://read.readwise.io/read/01m2qm6j9zv1hg3hjdyvddv93r))
- Workflow evals
  We made a new type of evaluation to measure how well AI works within code. We don’t optimize for a ground truth classification or allow the harness and model to change (potentially allowing for overfitting via harness engineering). Instead, we assume there is a correct compute graph (a “workflow” represented in code) and use the predictions of the largest, smartest, and most expensive external models as reference probabilities.
  Rephrased: every model gets the same workflow. We test how they compare to the average of the smartest models (in this case, Astra and Fable).
  ![](https://framerusercontent.com/images/z4Uu1YpJeEZPBSMTCMI0CN2PX0.png)
  Jev is off the charts – owning the Pareto frontier for almost 2 orders of magnitude. We also compare to models with a generated prompt doing all the logic in their chain-of-thought, but this tends to do significantly worse than using the workflow itself. ([View Highlight](https://read.readwise.io/read/01m2qm84589pcr1fbmfv294647))
