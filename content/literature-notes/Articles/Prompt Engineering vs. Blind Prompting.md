---
author: [[Mitchell Hashimoto]]
title: 'Prompt Engineering vs. Blind Prompting'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://mitchellh.com)

## Metadata
- Author: [[Mitchell Hashimoto]]
- Full Title: Prompt Engineering vs. Blind Prompting
- Document Note: This document explains the difference between "prompt engineering" and "blind prompting" and how to effectively extract information from language models using prompts to solve real-world problems. A demonstration set is used to measure prompt accuracy by using inputs and expected outputs to determine whether the prompts generated through prompt engineering can reliably solve a specific problem for an application. The document emphasizes that prompt engineering is a real skill that can be developed based on real experimental methodologies and informs decision-making in building prompts based on cost vs. accuracy analysis, tokens required, and accuracy presented. The process allows for trust but verification and continuous improvement to increase accuracy.
- URL: https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting

## Highlights
- A lot of people who claim to be doing prompt engineering today are actually just *blind prompting.*[1](https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting#user-content-fn-1) "Blind Prompting" is a term I am using to describe the method of creating prompts with a crude trial-and-error approach paired with minimal or no testing and a very surface level knowedge of prompting. *Blind prompting is not prompt engineering.* ([View Highlight](https://read.readwise.io/read/01gzx64nmhq8yktg9x0f0n6fnk))
- This table shows prompt candidates on the Y-axis, and prompt types using those prompts on the X-axis. The value is the accuracy as a percentage of correct answers. ([View Highlight](https://read.readwise.io/read/01gyw6dw0tt4pdzcrjp17aq1x9))
- **A note for experienced prompters:** the few-shot example doesn't say something like "mimic the examples below." Experimental research has shown this doesn't reliably increase accuracy, so I like to test without it first to limit tokens. Second, the few-shot example exemplars don't ever show the "MM/DD" extraction as an example, which is poor form. In a real few-shot setting, demonstrating all styles of extraction can be important ([View Highlight](https://read.readwise.io/read/01gyw6eh4kc3rmrfw5j6q4gyp4))
- Finally, you choose a one of the prompt candidates to integrate into your application. This isn't necessarily the most accurate prompt. This is a cost vs. accuracy analysis based on model used, tokens required, and accuracy presented. ([View Highlight](https://read.readwise.io/read/01gyw6esx5fg13hhy23a7jt3rk))
- decide to go back and test **other approaches to increase accuracy.** For ([View Highlight](https://read.readwise.io/read/01gyw6f3qx5f1kac4vcchrjk6q))
- lower cost model to see if that improves the accuracy enough. Sometimes, using more tokens on a lower cost model will save significant money vs. low-token usage on a higher cost model. For example, GPT-4 is ~15x more expensive than GPT-3.5 today. That means that you effectively have 15x more token budget to increase the GPT-3.5 prompt accuracy (caveats around rate limits noted). ([View Highlight](https://read.readwise.io/read/01gyw6fe4egy8hdyjjjde6r858))
- Due to the probabilistic nature of generative AI, your prompt likely has some issues. Even if your accuracy on your test set is 100%, there are probably unknown inputs that produce incorrect outputs. ([View Highlight](https://read.readwise.io/read/01gyw6fra6qmyd6hvx39gx5bwc))
- Verification is highly dependent on the problem. ([View Highlight](https://read.readwise.io/read/01gyw6fx698e1zft131qp3722f))
- This blog post demonstrates how developing a prompt can -- in my opinion -- be an engineering practice. It describes a systematic approach to identifying a problem, forming solutions, validating those solutions, and applying continuous improvement to refine those solutions. ([View Highlight](https://read.readwise.io/read/01gyw6gar6mcbwqjq6sws8hwas))
- Additionally, everyone is rapidly moving to higher-order LLM integrations: prompt chaining, agents, etc. Some people argue that future innovations such as these and more will make human prompting obsolete. ([View Highlight](https://read.readwise.io/read/01gyw6hgakxdhxmny7y4980bft))
    - Tags: [[favorite]] 
