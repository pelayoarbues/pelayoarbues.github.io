---
author: [[Philipp Schmid]]
title: 'Llama 2 Learns to Code'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/160_codellama/thumbnail.jpg)

## Metadata
- Author: [[Philipp Schmid]]
- Full Title: Llama 2 Learns to Code
- URL: https://huggingface.co/blog/codellama

## Highlights
- The Code Llama release introduces a family of models of 7, 13, and 34 billion parameters. The base models are initialized from Llama 2 and then trained on 500 billion tokens of code data. Meta fine-tuned those base models for two different flavors: a Python specialist (100 billion additional tokens) and an instruction fine-tuned version, which can understand natural language instructions. ([View Highlight](https://read.readwise.io/read/01h8q5jxfghq1xtkdxxgw5rr9d))
- Code Llama is specialized in code understanding, but it's a language model in its own right. You can use the same generation strategy to autocomplete comments or general text. ([View Highlight](https://read.readwise.io/read/01h8q5nrdndamgbtmcbmvh925j))
- This is a specialized task particular to code models. The model is trained to generate the code (including comments) that best matches an existing prefix and suffix. This is the strategy typically used by code assistants: they are asked to fill the current cursor position, considering the contents that appear before and after it. ([View Highlight](https://read.readwise.io/read/01h8q5p2w8gdjb9cpj8h3y15wj))
