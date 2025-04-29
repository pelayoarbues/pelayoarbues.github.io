---
author: "[[Simon Willison's Weblog]]"
title: 'Qwen 3 Offers a Case Study in How to Effectively Release a Model'
date: "2025-04-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://static.simonwillison.net/static/2025/qwen3-32b-pelican.jpg)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Qwen 3 Offers a Case Study in How to Effectively Release a Model
- URL: https://simonwillison.net/2025/Apr/29/qwen-3/#atom-everything

## Highlights
- Alibaba’s Qwen team released the hotly anticipated [Qwen 3 model family](https://qwenlm.github.io/blog/qwen3/) today. The Qwen models are already some of the best open weight models—Apache 2.0 licensed and with a variety of different capabilities (including vision and audio input/output). ([View Highlight](https://read.readwise.io/read/01jt11bbyxqakx73p5whabharh))
- Qwen 3 is text input/output only for the moment and comes in an exciting range of different shapes and sizes: 32B, 14B, 8B, 4B, 1.7B, and 0.6B models. The 4B and up models all have 131,072 token context windows (extended from 32k using YaRN)—0.6B, and 1.7B are 32,768. ([View Highlight](https://read.readwise.io/read/01jt11bhpkdg2zjtj0ntp6nsew))
- This covers the full spectrum of sizes that I generally care about: 0.6B and 1.7B should run fine on an iPhone, and 32B will fit on my 64GB Mac with room to spare for other applications. ([View Highlight](https://read.readwise.io/read/01jt11bprkbxby9fqzd4rdp210))
- Qwen also released two Mixture of Experts models—Qwen3-30B-A3B and Qwen3-235B-A22B. The A stands for “active parameters”—Qwen3-30B-A3B is a 30 billion parameter model that keeps 3 billion active at once, which reduces the memory needed to run the models. ([View Highlight](https://read.readwise.io/read/01jt11c4wheae4rnbnsrwfysdr))
- Qwen describe these as “hybrid thinking” models—every one of them is capable of the “reason step by step” trick before they deliver their final answer. In my experiments so far this presents itself as a `<think>...</think>` block at the start of the response. ([View Highlight](https://read.readwise.io/read/01jt11c7ddzmn2cevyvfvvrthb))
- The thing that stands out most to me about the Qwen 3 release is how well coordinated it was across the LLM ecosystem.
  Qwen worked directly with almost all of the popular LLM serving frameworks to ensure that support for the new models was available on day one. ([View Highlight](https://read.readwise.io/read/01jt11dadyzx1adfpkgp71ex3a))
- This is an extraordinary level of coordination for a model release! I haven’t seen any other model providers make this level of effort—the usual pattern is to dump a bunch of models on Hugging Face for a single architecture (usually NVIDIA) and then wait for the community to catch up with quantizations and conversions for everything else.
  It’s also great to see smaller models that can run on consumer hardware on day one. I think one of the reasons [the Llama 4 release](https://simonwillison.net/2025/Apr/5/llama-4-notes/) a few weeks ago was a little muted is that very few people had access to hardware that was capable of running the models. ([View Highlight](https://read.readwise.io/read/01jt11dmveks2tav7zfy8xe9h4))
- I don’t have a great feeling for the general “vibes” of Qwen 3 yet—it’s only been available for a few hours and I’ve not really run it through its paces yet. The general buzz so far seems pretty positive and the initial benchmarks are promising, but these things always take a little while to shake out. ([View Highlight](https://read.readwise.io/read/01jt11edhspma5a5s39x795kar))
- I’m always keen to see this trend continue: better models that can run on the same hardware as their predecessors.
  We’ve seen the same trend with other models—Llama 3.3 70B [claimed to deliver](https://simonwillison.net/2024/Dec/9/llama-33-70b/) “similar performance to Llama 3.1 405B”, and Mistral Small 3 24B [said that](https://simonwillison.net/2025/Jan/30/mistral-small-3/) it was “on par with Llama 3.3 70B instruct, while being more than 3x faster on the same hardware.” ([View Highlight](https://read.readwise.io/read/01jt11f0at08vr2dhj6pg3cevb))
