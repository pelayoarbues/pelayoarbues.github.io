---
author: "[[Simon Willison]]"
title: 'Mistral Large 2'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Mistral Large 2
- URL: https://simonwillison.net/2024/Jul/24/mistral-large-2/#atom-everything

## Highlights
- **[Mistral Large 2](https://mistral.ai/news/mistral-large-2407/)** ([via](https://twitter.com/MistralAI/status/1816133332582703547)) The second release of a GPT-4 class open weights model in two days, after yesterday's [Llama 3.1 405B](https://simonwillison.net/2024/Jul/23/introducing-llama-31/). ([View Highlight](https://read.readwise.io/read/01j3maa22cbetv7q3ztm8yg2wb))
- The weights for this one are under Mistral's [Research License](https://mistral.ai/licenses/MRL-0.1.md), which "allows usage and modification for research and non-commercial usages" - so not as open as Llama 3.1. You can use it commercially via the Mistral paid API. ([View Highlight](https://read.readwise.io/read/01j3maa7ykffsq440km65ac3q5))
- Mistral Large 2 is 123 billion parameters, "designed for single-node inference" (on a very expensive single-node!) and has a 128,000 token context window, the same size as Llama 3.1. ([View Highlight](https://read.readwise.io/read/01j3maagvn9qer4wyy423mxgk7))
- Notably, according to Mistral's own benchmarks it out-performs the much larger Llama 3.1 405B on their code and math benchmarks. They trained on a lot of code: ([View Highlight](https://read.readwise.io/read/01j3maarnaats282b3s5mpx6en))
- Following our experience with [Codestral 22B](https://mistral.ai/news/codestral/) and [Codestral Mamba](https://mistral.ai/news/codestral-mamba/), we trained Mistral Large 2 on a very large proportion of code. Mistral Large 2 vastly outperforms the previous Mistral Large, and performs on par with leading models such as GPT-4o, Claude 3 Opus, and Llama 3 405B. ([View Highlight](https://read.readwise.io/read/01j3maatyannc61s0fzb1v4j1c))
- One of the key focus areas during training was to minimize the model’s tendency to “hallucinate” or generate plausible-sounding but factually incorrect or irrelevant information. This was achieved by fine-tuning the model to be more cautious and discerning in its responses, ensuring that it provides reliable and accurate outputs. ([View Highlight](https://read.readwise.io/read/01j3mab42rgmz67xak22x6js46))
