---
author: [[Hugging Face - Blog]]
title: "Judge Arena: Benchmarking LLMs as Evaluators"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/favicon.ico)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: Judge Arena: Benchmarking LLMs as Evaluators
- URL: https://huggingface.co/blog/arena-atla

## Highlights
- LLM-as-a-Judge has emerged as a popular way to grade natural language outputs from LLM applications, **but how do we know which models make the best judges**? ([View Highlight](https://read.readwise.io/read/01jd37vazx916p6ytks5nqvx6j))
- We’re excited to launch [Judge Arena](https://huggingface.co/spaces/AtlaAI/judge-arena) - a platform that lets anyone easily compare models as judges side-by-side. Just run the judges on a test sample and vote which judge you agree with most. The results will be organized into a leaderboard that displays the best judges. ([View Highlight](https://read.readwise.io/read/01jd37vd9wp0ts4qe9qjvdvbbd))
- Crowdsourced, randomized battles have proven effective at benchmarking LLMs. LMSys's Chatbot Arena has collected over 2M votes and is [highly regarded](https://x.com/karpathy/status/1737544497016578453) as a field-test to identify the best language models. Since LLM evaluations aim to capture human preferences, direct human feedback is also key to determining which AI judges are most helpful. ([View Highlight](https://read.readwise.io/read/01jd37vfe4tncen9gax0sw47t0))
- How it works
  1. Choose your sample for evaluation:
  • Let the system randomly generate a 👩 User Input / 🤖 AI Response pair
  • OR input your own custom sample
  2. Two LLM judges will:
  • Score the response
  • Provide their reasoning for the score
  3. Review both judges’ evaluations and vote for the one that best aligns with your judgment
  *(We recommend reviewing the scores first before comparing critiques)* ([View Highlight](https://read.readwise.io/read/01jd37vxsc8mffwtpgjdtanj0z))
- After each vote, you can:
  • **Regenerate judges:** Get new evaluations of the same sample
  • Start a **🎲 New round:** Randomly generate a new sample to be evaluated
  • OR, input a new custom sample to be evaluated
  To avoid bias and potential abuse, the model names are only revealed after a vote is submitted. ([View Highlight](https://read.readwise.io/read/01jd37w7r8y09cct3e79qvbmew))
- Judge Arena focuses on the LLM-as-a-Judge approach, and therefore only includes generative models (excluding classifier models that solely output a score). We formalize our selection criteria for AI judges as the following:
  1. **The model should possess the ability to score AND critique other models' outputs effectively.**
  2. **The model should be prompt-able to evaluate in different scoring formats, for different criteria.** ([View Highlight](https://read.readwise.io/read/01jd37weqpd6kaw82wp9vfb4tj))
- **Mix of top performers between proprietary and open source**: GPT-4 Turbo leads by a narrow margin but the Llama and Qwen models are extremely competitive, surpassing the majority of proprietary models ([View Highlight](https://read.readwise.io/read/01jd37wrjh76x7kc3102b34yab))
- **Smaller models show impressive performance:** Qwen 2.5 7B and Llama 3.1 8B are performing remarkably well and competing with much larger models. As we gather more data, we hope to better understand the relationship between model scale and judging ability ([View Highlight](https://read.readwise.io/read/01jd37wwct9xqqdzq3ja0a6wze))
- **Preliminary empirical support for emerging research:** LLM-as-a-Judge literature suggests that Llama models are well-suited as base models, demonstrating strong out-of-the-box performance on evaluation benchmarks. Several approaches including [Lynx](https://arxiv.org/pdf/2407.08488), [Auto-J](https://arxiv.org/pdf/2310.05470), and [SFR-LLaMA-3.1-Judge](https://arxiv.org/pdf/2409.14664) opted to start with Llama models before post-training for evaluation capabilities. Our provisional results align with this trend, showing Llama 3.1 70B and 405B ranking 2nd and 3rd, respectively ([View Highlight](https://read.readwise.io/read/01jd37x0vs5e3pzmkv51588rjs))
