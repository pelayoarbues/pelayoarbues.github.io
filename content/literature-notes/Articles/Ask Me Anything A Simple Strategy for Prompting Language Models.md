---
author: "[[arXiv.org]]"
title: 'Ask Me Anything: A Simple Strategy for Prompting Language Models'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://static.arxiv.org/icons/twitter/arxiv-logo-twitter-square.png)

## Metadata
- Author: [[arXiv.org]]
- Full Title: Ask Me Anything: A Simple Strategy for Prompting Language Models
- URL: https://arxiv.org/abs/2210.02441

## Highlights
- Large language models (LLMs) transfer well to new tasks out-of-the-box simply given a natural language prompt that demonstrates how to perform the task and no additional training. Prompting is a brittle process wherein small modifications to the prompt can cause large variations in the model predictions, and therefore significant effort is dedicated towards designing a painstakingly "perfect prompt" for a task. To mitigate the high degree of effort involved in prompt-design, we instead ask whether producing multiple effective, yet imperfect, prompts and aggregating them can lead to a high quality prompting strategy. ([View Highlight](https://read.readwise.io/read/01jj4re8swgxe5fy7p1am6mcce))
- our proposed prompting method, ASK ME ANYTHING (AMA). We first develop an understanding of the effective prompt formats, finding that question-answering (QA) prompts, which encourage open-ended generation ("Who went to the park?") tend to outperform those that restrict the model outputs ("John went to the park. Output True or False."). Our approach recursively uses the LLM itself to transform task inputs to the effective QA format. We apply the collected prompts to obtain several noisy votes for the input's true label. We find that the prompts can have very different accuracies and complex dependencies and thus propose to use weak supervision, a procedure for combining the noisy predictions, to produce the final predictions for the inputs. ([View Highlight](https://read.readwise.io/read/01jj4regzjxmv3vcgzyaqmtntb))
