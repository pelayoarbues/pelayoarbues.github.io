---
author: "[[Simon Willison's Weblog]]"
title: 'How StrongDM''s AI Team Build Serious Software Without Even Looking at the Code'
date: "2026-03-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: How StrongDM's AI Team Build Serious Software Without Even Looking at the Code
- URL: https://simonwillison.net/2026/Feb/7/software-factory/#atom-everything

## Highlights
- Last week [I hinted at](https://simonwillison.net/2026/Jan/28/the-five-levels/) a demo I had seen from a team implementing what Dan Shapiro called [the Dark Factory](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/) level of AI adoption, where no human even looks at the code the coding agents are producing. That team was part of StrongDM, and they’ve just shared the first public description of how they are working in [Software Factories and the Agentic Moment](https://factory.strongdm.ai):
  > We built a **Software Factory**: non-interactive development where specs + scenarios drive agents that write code, run harnesses, and converge without human review. [...]
  > 
  > In kōan or mantra form:
  > 
  > • Why am I doing this? (implied: the model should be doing this instead)
  > 
  > In rule form:
  > 
  > • Code **must not be** written by humans
  > • Code **must not be** reviewed by humans
  > 
  > Finally, in practical form:
  > 
  > • If you haven’t spent at least **$1,000 on tokens today** per human engineer, your software factory has room for improvement ([View Highlight](https://read.readwise.io/read/01kmb56py8k69fahwhypxk4bz7))
- I think the most interesting of these, without a doubt, is "Code **must not be** reviewed by humans". How could that *possibly* be a sensible strategy when we all know how prone LLMs are to making [inhuman mistakes](https://simonwillison.net/2025/Mar/2/kellan-elliott-mccrea/)?
  I’ve seen many developers recently acknowledge the [November 2025 inflection point](https://simonwillison.net/2026/Jan/4/inflection/), where Claude Opus 4.5 and GPT 5.2 appeared to turn the corner on how reliably a coding agent could follow instructions and take on complex coding tasks. StrongDM’s AI team was founded in July 2025 based on an earlier inflection point relating to Claude Sonnet 3.5:
  > The catalyst was a transition observed in late 2024: with the second revision of Claude 3.5 (October 2024), long-horizon agentic coding workflows began to compound correctness rather than error.
  > 
  > By December of 2024, the model’s long-horizon coding performance was unmistakable via Cursor’s [YOLO mode](https://forum.cursor.com/t/yolo-mode-is-amazing/36262). ([View Highlight](https://read.readwise.io/read/01kmb576ma7rjfx9tkqqvf5qam))
- Their new team started with the rule “no hand-coded software”—radical for July 2025, but something I’m seeing significant numbers of experienced developers start to adopt as of January 2026.
  They quickly ran into the obvious problem: if you’re not writing anything by hand, how do you ensure that the code actually works? Having the agents write tests only helps if they don’t cheat and `assert true`. ([View Highlight](https://read.readwise.io/read/01kmb57jeksnxwzttdy6kx3qv5))
- This feels like the most consequential question in software development right now: how can you [prove that software you are producing works](https://simonwillison.net/2025/Dec/18/code-proven-to-work/) if both the implementation and the tests are being written for you by coding agents? ([View Highlight](https://read.readwise.io/read/01kmb57pvjpnzst9v6ncxr0dmj))
- StrongDM’s answer was inspired by [Scenario testing](https://en.wikipedia.org/wiki/Scenario_testing) (Cem Kaner, 2003). As StrongDM describe it:
  > We repurposed the word **scenario** to represent an end-to-end “user story”, often stored outside the codebase (similar to a “holdout” set in model training), which could be intuitively understood and flexibly validated by an LLM.
  > 
  > Because much of the software we grow itself has an agentic component, we transitioned from boolean definitions of success (“the test suite is green”) to a probabilistic and empirical one. We use the term **satisfaction** to quantify this validation: of all the observed trajectories through all the scenarios, what fraction of them likely satisfy the user? ([View Highlight](https://read.readwise.io/read/01kmb57wmx8pn6cx51p1sc6xke))
- That idea of treating scenarios as holdout sets—used to evaluate the software but not stored where the coding agents can see them—is *fascinating*. It imitates aggressive testing by an external QA team—an expensive but highly effective way of ensuring quality in traditional software.
  Which leads us to StrongDM’s concept of a **Digital Twin Universe**—the part of the demo I saw that made the strongest impression on me. ([View Highlight](https://read.readwise.io/read/01kmb586v3fbgx1sm4xcm4hm7s))
- The [techniques page](https://factory.strongdm.ai/techniques) is worth a look too. In addition to the Digital Twin Universe they introduce terms like **[Gene Transfusion](https://factory.strongdm.ai/techniques/gene-transfusion)** for having agents extract patterns from existing systems and reuse them elsewhere, **[Semports](https://factory.strongdm.ai/techniques/semport)** for directly porting code from one language to another and **[Pyramid Summaries](https://factory.strongdm.ai/techniques/pyramid-summaries)** for providing multiple levels of summary such that an agent can enumerate the short ones quickly and zoom in on more detailed information as it is needed. ([View Highlight](https://read.readwise.io/read/01kmb596m4shc464yppshqkm3b))
