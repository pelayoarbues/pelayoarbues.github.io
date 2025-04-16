---
author: "[[Qwen Team]]"
title: 'Qwen2.5-Coder Series: Powerful, Diverse, Practical.'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](http://qwenlm.github.io/%3Clink%20or%20path%20of%20image%20for%20opengraph,%20twitter-cards%3E)

## Metadata
- Author: [[Qwen Team]]
- Full Title: Qwen2.5-Coder Series: Powerful, Diverse, Practical.
- URL: https://qwenlm.github.io/blog/qwen2.5-coder-family/

## Highlights
- Today, we are excited to open source the “Powerful”, “Diverse”, and “Practical” Qwen2.5-Coder series, dedicated to continuously promoting the development of Open CodeLLMs.
  • **Powerful**: Qwen2.5-Coder-32B-Instruct has become the current SOTA open-source code model, matching the coding capabilities of GPT-4o. While demonstrating strong and comprehensive coding abilities, it also possesses good general and mathematical skills;
  • **Diverse**: Building on the previously open-sourced two sizes of 1.5B / 7B, this release brings four model sizes, including 0.5B / 3B / 14B / 32B. As of now, Qwen2.5-Coder has covered six mainstream model sizes to meet the needs of different developers;
  • **Practical**: We explore the practicality of Qwen2.5-Coder in two scenarios, including code assistants and Artifacts, with some examples showcasing the potential applications of Qwen2.5-Coder in real-world scenarios; ([View Highlight](https://read.readwise.io/read/01jcfsd20ng6r54zchk8cjg8qb))
- Powerful: Code capabilities reach SOTA for open-source models[#](https://qwenlm.github.io/blog/qwen2.5-coder-family/#powerful-code-capabilities-reach-sota-for-open-source-models)
  ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/32b-main.png#center) ([View Highlight](https://read.readwise.io/read/01jcfsd7hryv6rd404dk03fg1w))
- • **Code Generation**: Qwen2.5-Coder-32B-Instruct, as the flagship model of this open-source release, has achieved the best performance among open-source models on multiple popular code generation benchmarks (EvalPlus, LiveCodeBench, BigCodeBench), and has competitive performance with GPT-4o.
  • **Code Repair**: Code repair is an important programming skill. Qwen2.5-Coder-32B-Instruct can help users fix errors in their code, making programming more efficient. Aider is a popular benchmark for code repair, and Qwen2.5-Coder-32B-Instruct scored 73.7, performing comparably to GPT-4o on Aider.
  • **Code Reasoning**: Code reasoning refers to the model’s ability to learn the process of code execution and accurately predict the model’s inputs and outputs. The recently released Qwen2.5-Coder-7B-Instruct has already shown impressive performance in code reasoning, and this 32B model takes it a step further. ([View Highlight](https://read.readwise.io/read/01jcfsdag0s5d2b7rjrzfbjsfk))
- **Multiple Programming Languages**: An intelligent programming assistant should be familiar with all programming languages. Qwen2.5-Coder-32B-Instruct performs excellently across more than 40 programming languages, scoring 65.9 on McEval, with impressive performances in languages like Haskell and Racket, thanks to our unique data cleaning and balancing during the pre-training phase. ([View Highlight](https://read.readwise.io/read/01jcfsezgx3t7a0rk0h4h400ap))
- This time, Qwen2.5-Coder has open-sourced a rich variety of model sizes, including 0.5B/1.5B/3B/7B/14B/32B, which not only meets the needs of developers in different resource scenarios but also provides a good experimental platform for the research community. The following table provides detailed model information: ([View Highlight](https://read.readwise.io/read/01jcfsf638hrkp26wdy8tskqy9))
- We have always believed in the philosophy of Scaling Law. We evaluated the performance of different sizes of Qwen2.5-Coder across all datasets to verify the effectiveness of Scaling in Code LLMs. For each size, we open-sourced both Base and Instruct models, where the Instruct model serves as an official aligned model that can chat directly, and the Base model serves as a foundation for developers to fine-tune their own models. ([View Highlight](https://read.readwise.io/read/01jcfsfcjmyjg3x4apkf6tx6pj))
- We present a comparison of different sizes of Qwen2.5-Coder with other open-source models on core datasets.
  • For the Base model, we chose MBPP-3shot as the evaluation metric. Our extensive experiments show that MBPP-3shot is more suitable for evaluating base models and correlates well with the actual performance of the models.
  • For the Instruct model, we selected the latest 4 months of LiveCodeBench (2024.07 - 2024.11) questions as the evaluation, which are the latest published questions that could not have leaked into the training set, reflecting the model’s OOD capabilities.
  There is a positive correlation between model size and model performance, and Qwen2.5-Coder has achieved SOTA performance across all sizes, encouraging us to continue exploring larger sizes of Coder.
  ![](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/qwen2.5-coder-family-dual.jpg#center) ([View Highlight](https://read.readwise.io/read/01jcfsfrrndaz9z1xpp6pbqe0f))
