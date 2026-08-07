---
author: "[[Rohit Girme]]"
title: 'Eval-Driven Development: Lessons From Evaluating GenAI at Scale'
date: "2026-08-07"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1400/1*XK40dh-lXviuXXY_WhUCUA.jpeg)

## Metadata
- Author: [[Rohit Girme]]
- Full Title: Eval-Driven Development: Lessons From Evaluating GenAI at Scale
- URL: https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788?utm_source=tldrdata

## Highlights
- Introduction
  Generative AI breaks a lot of the assumptions that used to hold true for software testing. Unlike traditional software, LLM outputs are non-deterministic, and “*correct*” is subjective. Because so much judgment is involved, you often need an AI to evaluate an AI, which introduces its own potential failure modes. Making matters more complicated, a single interaction with an LLM can chain retrieval, reasoning, tool calls, and generation, each of which can fail independently. ([View Highlight](https://read.readwise.io/read/01kzdtyx1kgqycch517zbns5wx))
- At Airbnb, we build LLM-powered features across our product, with recent launches including review highlights, AI customer support, smart communication features for guests and hosts, and more. Behind the scenes, we also use AI to help us spot trends and understand what’s working, guiding where we improve the product next.
  Each product team may have its own evaluation criteria, process, workflows, etc. However, these are built on top of some common foundations and principles. An infrastructure team provides tooling and best practices, incorporating learnings across domains so that they are shared with everyone building products at Airbnb.
  In this article, we wanted to share some of these best practices and learnings with the broader engineering community. Please note that the recommendations here are not intended to be prescriptive; there is no one-size-fits all approach when it comes to running evals. ([View Highlight](https://read.readwise.io/read/01kzdtzh9kegw0dxqqwzbqwccp))
- 1. Foundation
  Evaluating LLM-based systems is challenging work, and this should be planned for at the outset. Without a deliberate strategy, three things tend to happen:
  • **False confidence**: A generic “helpfulness” metric scores well, you ship, but it didn’t capture the failure mode people actually hit.
  • **Undetected regressions**: A prompt change subtly degrades a dimension you weren’t measuring.
  • **Wasted effort:** You build a scaled eval pipeline for metrics that don’t correlate with outcomes.
  Expect to spend a meaningful share of your total project effort on evaluation. This is not unnecessary overhead, it’s how you build products that actually work. ([View Highlight](https://read.readwise.io/read/01kzdv00vk5yeh8y6tega7d5f9))
- 1.1 The one rule
  **When in doubt, look at your data.** Manually reviewing your data and building an intuition for what counts as success is always the starting point we recommend to teams. Build your prototype, and run it through 100 examples (synthetic is fine). Then *read the outputs*. Read the traces and find the model’s mistakes. Categorize them and build an eval.
  This single habit will do more for your product quality than any framework, tool, or methodology in this document. ([View Highlight](https://read.readwise.io/read/01kzdv06rn8mz2rd0d00zfbtbq))
- 1.2 Eval-driven development
  Formalized, that habit becomes **eval-driven development (EDD)**, the GenAI analogue of test-driven development. Rather than predicting every failure upfront, EDD builds the infrastructure and habits to **discover, encode, and continuously test** for failure modes as they appear. It also forces stakeholders to externalize what “good” means, which shapes the product roadmap.
  Five principles anchor EDD:
  1. **Define goals and gates upfront.** What are you optimizing for? What must be true before you ship? These answers may not be clear right away; you might discover them as part of your data exploration.
  2. **Let real errors guide your metrics.** Co-develop them with cross-functional partners based on observed failures. Don’t invent them in a vacuum.
  3. **Keep your evaluator set small and sharp.** 3–5 well-calibrated LLM-as-judge evaluators beat 20–30 noisy ones. Each should target one specific correctness dimension.
  4. **Appoint a decision-maker.** While what constitutes correctness should be a team discussion, people will sometimes disagree. Include a final (human) decision-maker who makes the ultimate call on what constitutes good vs. bad system behavior.
  5. **Collaborate continuously.** Have your product partner regularly answer: “Is X better or worse than Y?” and “What’s actually wrong with this output?” ([View Highlight](https://read.readwise.io/read/01kzdv0f9dxy6cankypfxy1qee))
- 2. The three evaluation methods
  Every evaluation you run will use one or a combination of these three methods.
  Layer 1: Programmatic checks (fast, low resource — catches obvious failures) 
  ↓ 
  Layer 2: LLM-as-a-Judge (nuanced - catches quality issues) 
  ↓ 
  Layer 3: Human evaluation (high resource - validates edge cases, 
  calibrates the stack) ([View Highlight](https://read.readwise.io/read/01kzdv0rshyexyva1hbqjwg95b))
- 2.1 Programmatic & heuristic metrics
  Deterministic, code-based checks that don’t require an LLM call should be your first filter, catching obvious failures before you send anything to a judge or human labeler.
  Press enter or click to view image in full size
  ![A table displaying evaluation check types. It contains three columns: Check type, Examples, and When to use. The rows cover Format validity (checking JSON/schema, used always), Length & presence (checking empty/suspicious lengths, used always), Keyword/regex (checking forbidden words, used for safety/compliance), Classical ML metrics (Precision/recall/F1, used for classification), and Semantic similarity (Cosine similarity, used with gold-standard references).](https://miro.medium.com/v2/resize:fit:700/1*Rmao9jN6R1ozbAVaUP7D9A.png)
  ✅ **Do:** Use structured outputs (JSON schemas) to ensure strict typing.
  ❌ **Don’t:** Rely on prompt instructions alone to format data. This breaks downstream data pipelines. ([View Highlight](https://read.readwise.io/read/01kzdv0x89vyw3jsggav2s9ddh))
- 2.2 LLM-as-judge (Virtual judges)
  Use a stronger LLM to evaluate another LLM’s output against a carefully designed rubric. This is how you assess nuanced qualities e.g. tone, coherence, faithfulness, relevance, at a fraction of the resources needed for human evaluation.
  Press enter or click to view image in full size
  ![A table detailing five rules for building LLM evaluators: one evaluator per dimension, different judge than generator, few-shot examples, explicit output schema, and clear scoring, explaining the “Why” and “How” for each rule.](https://miro.medium.com/v2/resize:fit:700/1*hAbCLfHCaQNEFYSgfw0LrQ.png)
  **Rubric design matters.** Ambiguity is the enemy. Something like “Is the provided explanation readable and up to our standards?” isn’t likely to be effective — if a human can’t apply the rubric consistently, an LLM certainly can’t. ([View Highlight](https://read.readwise.io/read/01kzdv134hspbg6s466gjvcck1))
- Here is a simplified example of a single virtual judge’s rubric:
  Score the readability of listing explanations. A good explanation sounds 
  like a friendly travel agent: warm but professional, 
  simple, natural, grammatically complete. 
  Score 1 if it reads cleanly. 
  Score 0 if it has ANY of these problems: 
  - Tone: too formal/jargony, too casual 
  ("awesome vibes"), too salesy ("amazing!"), or robotic. 
  - Internal terms: never use internal terminology. 
  - Formatting: no quotation marks, no bullets, no fragments. End every 
  explanation with a period - never "!" or "?". 
  - Grammar: use articles/determiners/prepositions for natural flow 
  ("this home has a pool", "close to downtown"). In a series, use the 
  article once then drop it: "a backyard, grill, and kitchen" - not 
  repeated, not omitted entirely. 
  - Complexity: plain words over jargon ("pool" not "aquatic recreation 
  area"; "near" not "proximate"). 
  Examples: 
  - "Host mentions a pool and hot tub available near downtown." → 1 
  - "The listing mentions a pool!" → 0 (internal term "listing"; ends in "!") 
  - "This domicile encompasses aquatic amenities." → 0 (complex words; jargon) 
  Return ONLY: 
  { 
  "reason": "<list of [error_type, explanation] tuples as a string, or []>", 
  "score": <1 or 0> 
  } ([View Highlight](https://read.readwise.io/read/01kzdv1cm9prx7vs7r5qjsvgdb))
- 2.2.1 Calibration: Making your virtual judge trustworthy
  A virtual judge that hasn’t been calibrated is worse than no judge at all, because it gives you false confidence. Here are the calibration steps we recommend:
  1. Create a golden dataset of 50–100 examples. This MUST include bad examples (not just good ones).
  2. Run your virtual judge against the golden set.
  3. Measure agreement. Target percentages in the high 80s-90s. Possible options to measure disagreement are Cohen’s kappa or Krippendorff’s alpha. (Perfect agreement isn’t achievable — even humans disagree.)
  4. Analyze disagreements. Refine the prompt and update your few-shot examples. Then re-run the loop until you hit the target agreement.
  5. Recalibrate periodically as failure modes evolve. ([View Highlight](https://read.readwise.io/read/01kzdv1geete7a7hjymdep3tdv))
- 2.3 Human evaluation
  Human judgment remains the gold standard for ground truth, high-stakes domains, and resolving disagreements between automated evaluators.
  Press enter or click to view image in full size
  ![A two-column table outlining four scenarios explaining “Why humans are essential” in AI evaluation: Ground truth creation, Safety & high-stakes, Nuance & creativity, and Evaluator disagreement.](https://miro.medium.com/v2/resize:fit:700/1*ScgMpXStQiTZ-mEOX917Sg.png) ([View Highlight](https://read.readwise.io/read/01kzdv1m5fs2yvw40vwb290w5f))
- 2.4 Evaluation scenarios and recommended methods
  Overall, the rule of thumb is to start with 20–100 rows labeled by subject-matter experts. Move to a scaled annotation workforce only when the rubric is rock-solid and volume is the bottleneck.
  And if your experts disagree on a label, **stop**. Solve human disagreement before automating anything.
  Press enter or click to view image in full size
  ![A table outlining when and how to use programmatic, virtual judge, and human evaluation methods during development, pre-release, and production scenarios.](https://miro.medium.com/v2/resize:fit:700/1*tV_ysBTvs9SG1vBOnJZOEA.png) ([View Highlight](https://read.readwise.io/read/01kzdv1r7mekh4ckveqyvm7a22))
- 3. Evaluating agentic systems
  Agentic systems involve multi-step reasoning, tool calling, branching logic and intermediate state transitions. Evaluating only the final output is insufficient: a correct final answer can mask a broken reasoning path, wrong tool parameters, or an inefficient trajectory.
  Therefore, you will need to evaluate across three layers:
  Press enter or click to view image in full size
  ![A three-column table outlining layers of AI evaluation. The layers are: Step-level (evaluating individual tool calls or reasoning steps), Trajectory-level (evaluating if the overall path was reasonable and efficient), and Session-level (evaluating if the full interaction achieved the person’s goal). An example is provided for each layer.](https://miro.medium.com/v2/resize:fit:700/1*tkk89r30pEl0gkuw6BnzCA.png)
  To achieve this, you can take advantage of the fact that an agent generally pushes traces and spans under an application root. This contains information about the type of agent, the sub agent if invoked, input/output of the agent, tools invoked if any, and more. These traces can be written out to an observability platform or persistent storage.
  Then, you can use DFS or another type of tree traversal to reconstruct the trace in memory. This lets you ensure certain subagents were invoked at the right time, the agent called the right tools, etc. And you can scope your evaluation to specific agents/subagents. ([View Highlight](https://read.readwise.io/read/01kzdv1wrs7z08myzq7j07sfez))
- 4. A practical walkthrough
  Here’s what the full process looks like end-to-end, using a fictionalized and simplified version of a real use case.
  **Scenario:** You’re building an AI assistant that answers questions about a travel platform’s support policies.
  **Step 1: Explore & discover.** Run 100 inputs through your prototype and read every output. You find:15 responses generated policy details not in the source documents (*faithfulness issue*); 8 correct but too verbose (*conciseness*); 5 refused valid questions (*over-refusal*); 3 had broken JSON (*format*).
  **Step 2: Build evals.** Add programmatic checks for JSON validity and length bounds. Write a virtual judge for faithfulness (separate prompt, different model, chain-of-thought) and another for conciseness. Have your PM or subject matter expert label 60 examples, including failures, as a golden set.
  **Step 3: Calibrate & iterate.** Your faithfulness virtual judge agrees with the PM 78% of the time. Not good enough. Analysis reveals the judge is penalizing accurate paraphrases as “unfaithful.” Update the rubric and add few-shot examples. Agreement jumps to 88%. Improve the retrieval step; faithfulness failures drop significantly.
  *NOTE: Here, we find that when iterating on models and prompts, it’s best to fix one variable at a time. First fix the model and vary the prompt, then fix the prompt and vary the model, then fix both and vary the serving configuration. At each stage, virtual judge results narrow the candidate pool. Then, you can improve the virtual judge(s) using samples from the top candidates. The evaluators and the candidates sharpen each other until both stabilize.*
  ![A block diagram illustrating three iterative AI evaluation workflows using fixed Virtual Judges (VJs) to measure latency and serving performance, with feedback loops for each process.](https://miro.medium.com/v2/resize:fit:640/1*ZFwKSWqUXk7Po-KeaqG5Ag.png)
  **Step 4: Scale & monitor.** Scale evaluation across 5,000 examples. Set up production monitoring: sample 5% of live de-identified traffic daily, run programmatic checks + virtual judges, and surface flagged outputs for human review. A weekly PM review closes the loop, with new failure modes introducing new evals and subsequent system improvements.
  *NOTE: We sample live traffic continuously using privacy-preserving techniques. All data undergoes robust de-identification prior to human review, and usage is strictly purpose-limited to safety and quality assurance, aligning with Airbnb Privacy Principles.* ([View Highlight](https://read.readwise.io/read/01kzdv55mcq5pec3xd35m1vdjc))
- Key takeaways
  1. **Look at your data.** Read outputs and traces before building anything else.
  2. **Avoid generic metrics.** Build evaluators for *your* product’s real failure modes.
  3. **Start with 50–100 rows.** Fail fast, iterate cheaply.
  4. **One evaluator per dimension.** No “God evaluators.”
  5. **Calibrate to high 80s-90s% agreement** before trusting your Virtual Judge at scale.
  6. **Use all three methods**. Programmatic, Virtual Judge, and human as layered defenses.
  7. **Include bad examples** in your Gold Set. You can’t test discernment without them.
  8. **Evaluate the system, not just the model.** Test retrieval, tool calls, the full pipeline. For agents, evaluate the trajectory, not only the final answer.
  9. **Mirror evals in production.** Pre-production metrics are not one-and-done.
  10. **Evaluation is a team sport.** Evaluation is about shaping what product success looks like, and that takes contributions from many people. The teams that succeed with AI aren’t the ones with the best models, they’re the ones with the best communication and clearest product vision. ([View Highlight](https://read.readwise.io/read/01kzdv5b0v2z9x6gq69ax4n1dd))
