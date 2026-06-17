---
author: "[[strongdm.ai]]"
title: 'Software Factories and the Agentic Moment'
date: "2026-03-12"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://factory.strongdm.ai/images/og-image.png)

## Metadata
- Author: [[strongdm.ai]]
- Full Title: Software Factories and the Agentic Moment
- URL: https://factory.strongdm.ai/

## Highlights
- We built a **Software Factory**: non-interactive development where specs + scenarios drive agents that write code, run harnesses, and converge without human review. ([View Highlight](https://read.readwise.io/read/01kkhzbkbyb068n71g5a8zqrfc))
- One recurring theme of the agentic moment: we need new language. For example, the word "test" has proven insufficient and ambiguous. A test, stored in the codebase, can be lazily rewritten to match the code. The code could be rewritten to trivially pass the test. ([View Highlight](https://read.readwise.io/read/01kkhzex9a90w8vs29am4enyes))
- Because much of the software we grow itself has an agentic component, we transitioned from boolean definitions of success ("the test suite is green") to a probabilistic and empirical one. We use the term **satisfaction** to quantify this validation: of all the observed trajectories through all the scenarios, what fraction of them likely satisfy the user? ([View Highlight](https://read.readwise.io/read/01kkhzfd6v1waacx13zy89mfc1))
- With the DTU, we can validate at volumes and rates far exceeding production limits. We can test failure modes that would be dangerous or impossible against live services. We can run thousands of scenarios per hour without hitting rate limits, triggering abuse detection, or accumulating API costs. ([View Highlight](https://read.readwise.io/read/01kkhzshs0fqb89cn451b2yzgb))
- Our success with DTU illustrates one of the many ways in which the Agentic Moment has profoundly changed the economics of software. Creating a high fidelity clone of a significant SaaS application was always possible, but never economically feasible. Generations of engineers may have *wanted* a full in-memory replica of their CRM to test against, but self-censored the proposal to build it. They didn't even bring it to their manager, because they knew the answer would be no. ([View Highlight](https://read.readwise.io/read/01kkhzsrj5267j85c9gtz9v5cd))
- Those of us building software factories must practice a **deliberate naivete**: finding and removing the habits, conventions, and constraints of [Software 1.0](https://www.youtube.com/watch?v=LCEmiRjPEtQ&t=95s). The DTU is our proof that what was unthinkable six months ago is now routine. ([View Highlight](https://read.readwise.io/read/01kkhzt0gms74tk2yevdase1p8))
- The narrative form is included below. If you'd prefer to work from first principles, I offer a few constraints & guidelines that, applied iteratively, will accelerate any team toward the same intuitions, convictions[1](https://factory.strongdm.ai/?ref=blog.firetiger.com/#fn1), and ultimately a factory[2](https://factory.strongdm.ai/?ref=blog.firetiger.com/#fn2) of your own. In kōan or mantra form:
  • Why am I doing this? (implied: the model should be doing this instead)
  In rule form:
  • Code **must not be** written by humans
  • Code **must not be** reviewed by humans
  Finally, in practical form:
  • If you haven't spent at least **$1,000 on tokens today** per human engineer, your software factory has room for improvement ([View Highlight](https://read.readwise.io/read/01kkhzbvneara8hgymrscyrtvr))
- Prior to this model improvement, iterative application of LLMs to coding tasks would accumulate errors of all imaginable varieties (misunderstandings, hallucinations, syntax, DRY violations, library incompatibility, etc). The app or product would decay and ultimately "collapse": death by a thousand cuts, etc.
  Together with YOLO mode, the updated model from Anthropic provided the first glimmer of what we now refer to internally as **non-interactive** development or **grown** software. ([View Highlight](https://read.readwise.io/read/01kkhzdnwfjs84a7xr2jxhjnz3))
- Initially it was just a hunch. An experiment. How far could we get, without writing any code by hand?
  Not very far! At least: not very far, until we added tests. However, the agent, obsessed with the immediate task, soon began to take shortcuts: **return true** is a great way to pass narrowly written tests, but probably won't generalize to the software you want.
  Tests were not enough. How about integration tests? Regression tests? End-to-end tests? Behavior tests? ([View Highlight](https://read.readwise.io/read/01kkhzee6atn532mnb98az03nz))
- We repurposed the word **scenario** to represent an end-to-end "user story", often stored outside the codebase (similar to a "holdout" set in model training), which could be intuitively understood and flexibly validated by an LLM.
  ![](https://factory.strongdm.ai/images/synthchat.png)
  Synthetic scenario curation and shaping interface ([View Highlight](https://read.readwise.io/read/01kkhzf5dmxt6xw8bzx4r3bbsv))
- We noticed two limitations of previously reliable techniques:
  1. **Tests are too rigid** - we were coding with agents, but we're also building with LLMs and agent loops as design primitives; evaluating success often required LLM-as-judge
  2. **Tests can be reward hacked** - we needed validation that was less vulnerable to the model cheating
  The Digital Twin Universe is our answer: behavioral clones of the third-party services our software depends on. We built twins of Okta, Jira, Slack, Google Docs, Google Drive, and Google Sheets, replicating their APIs, edge cases, and observable behaviors. ([View Highlight](https://read.readwise.io/read/01kkhzscdd49ky3t8g2bmdtzmf))
