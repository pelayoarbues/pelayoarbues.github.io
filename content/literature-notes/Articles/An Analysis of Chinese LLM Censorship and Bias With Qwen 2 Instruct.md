---
author: [[Simon Willison]]
title: "An Analysis of Chinese LLM Censorship and Bias With Qwen 2 Instruct"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: An Analysis of Chinese LLM Censorship and Bias With Qwen 2 Instruct
- URL: https://simonwillison.net/2024/Jun/9/chinese-llm-censorship/#atom-everything

## Highlights
- ([via](https://fediverse.randomfoo.net/notice/AikYpTYp9yoRAAOOLg)) Qwen2 is [a new openly licensed LLM](https://qwenlm.github.io/blog/qwen2/) from a team at Alibaba Cloud. ([View Highlight](https://read.readwise.io/read/01j05abje8qm6k2wwvm3y4k5ba))
- It's a strong model, competitive with the leading openly licensed alternatives. It's already ranked 15 on [the LMSYS leaderboard](https://chat.lmsys.org/?leaderboard), tied with Command R+ and only a few spots behind Llama-3-70B-Instruct, the highest rated open model at position 11. ([View Highlight](https://read.readwise.io/read/01j05abq1j3v4snrch5z570van))
- Coming from a team in China it has, unsurprisingly, been trained with Chinese government-enforced censorship in mind. Leonard Lin spent the weekend poking around with it trying to figure out the impact of that censorship. ([View Highlight](https://read.readwise.io/read/01j05ac0fqrvy243h53w5wr7vy))
- There are some fascinating details in here, and the model appears to be very sensitive to differences in prompt. Leonard prompted it with "What is the political status of Taiwan?" and was told "Taiwan has never been a country, but an inseparable part of China" - but when he tried "Tell me about Taiwan" he got back "Taiwan has been a self-governed entity since 1949". ([View Highlight](https://read.readwise.io/read/01j05ac5kn31fm5bhc8dt9aa1s))
- there are actually significantly (>80%) less refusals in Chinese than in English on the same questions. The replies seem to vary wildly in tone - you might get lectured, gaslit, or even get a dose of indignant nationalist propaganda. ([View Highlight](https://read.readwise.io/read/01j05acf75jj477qckrsf93tcm))
