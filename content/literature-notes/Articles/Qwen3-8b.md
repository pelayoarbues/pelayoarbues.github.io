---
author: "[[Simon Willison's Weblog]]"
title: 'Qwen3-8b'
date: "2025-05-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Qwen3-8b
- URL: https://simonwillison.net/2025/May/2/qwen3-8b/#atom-everything

## Highlights
- Having tried a few of the [Qwen 3 models](https://simonwillison.net/2025/Apr/29/qwen-3/) now my favorite is a bit of a surprise to me: I'm really enjoying [Qwen3-8B](https://huggingface.co/Qwen/Qwen3-8B). ([View Highlight](https://read.readwise.io/read/01jtdgn0xtv5abftf7zs6mjx2v))
- Qwen3 is a "reasoning" model, so it starts each prompt with a `<think>` block containing its chain of thought. Reading these is always *really fun*. ([View Highlight](https://read.readwise.io/read/01jtdgnn9nvtyrjzvbcfmdad4c))
- I'm finding Qwen3-8B to be surprisingly capable for useful things too. It can [summarize short articles](https://gist.github.com/simonw/ab414f01a28e050b8419b4152a4016d1). It can [write simple SQL queries](https://gist.github.com/simonw/db129dddb76e5ba8f97794a794ae626d#response-1) given a question and a schema. It can [figure out what a simple web app does](https://gist.github.com/simonw/54f040ae2f2ca3b83cdc1b2e691936ab) by reading the HTML and JavaScript. It can [write Python code](https://gist.github.com/simonw/ac4082df0dcde87d5845586804fb80c9) to meet a paragraph long spec - for that one it "reasoned" for an unreasonably long time but it did eventually get to a useful answer. ([View Highlight](https://read.readwise.io/read/01jtdgp5rx6r1cwnxyz1cgf261))
- All this while consuming between 4 and 5GB of memory, depending on the length of the prompt. ([View Highlight](https://read.readwise.io/read/01jtdgpbg5ek87rmc6pjctnax4))
