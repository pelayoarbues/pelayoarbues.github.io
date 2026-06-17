---
author: "[[vickiboykis.com]]"
title: 'Running Local Models Is Good Now'
date: "2026-06-17"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://vickiboykis.com/images/refactor_gemma.png)

## Metadata
- Author: [[vickiboykis.com]]
- Full Title: Running Local Models Is Good Now
- URL: https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/

## Highlights
- Running local models is good now
  *Jun 15 2026*
  I’ve been working [with local models](https://vickiboykis.com/2024/02/28/gguf-the-long-way-around/) since they came out, and finally, they’re surprisingly good now.
  I have a 2022 M2 Mac with 64 GB RAM and 1TB storage and I’ve used
  • [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/)
  • [Gemma 3](https://deepmind.google/models/gemma/gemma-3/)
  • [OpenAI OSS-20B](https://huggingface.co/openai/gpt-oss-20b)
  • [Qwen 3 MOE](https://huggingface.co/Qwen/Qwen3-30B-A3B), as well as a number of other Qwen variants like [Qwen 2.5 Coder](https://ollama.com/library/qwen2.5-coder)
  across [a lot of different system setups](https://vickiboykis.com/2026/05/18/tagging-my-blog-posts-with-bertopic-and-llms/) like
  • raw llama.cpp with [Open WebUI](https://github.com/open-webui/open-webui)
  • llama-cpp-python
  • Ollama
  • llamafiles and
  • LM Studio ([View Highlight](https://read.readwise.io/read/01kvbek0gzc6ys11qt22w8twf8))
- Early on, models were slow, hard to use, and just not that accurate for most programming tasks. The idea that local models were severely lagging behind was largely true until, for me, the release of GPT-OSS. I have no concrete scientific evidence of this - my own personal vibe metric of “is a model good enough” is, “do I have to double-check it against an API model”, and GPT-OSS was the first one where I started doing that a lot less often.
  As a result, I’ve mostly been using local models as fast, personalized Google for development questions that don’t require recency. ([View Highlight](https://read.readwise.io/read/01kvbekfrp9rrb7xwsp6wn8x1c))
- But with the most recent releases from Google in the [Gemma 4](https://deepmind.google/models/gemma/gemma-4/), family, I’ve finally been able to do agentic coding locally and have loops work at about ~75% the accuracy/speed of frontier models, which is incredible.
  I’ve so far been using `gemma-4-26b-a4b` [LM Studio implementation](https://lmstudio.ai/models/google/gemma-4-26b-a4b) as my default local model. I’ve used the local setup so far to: Refactor a Python script that was a notebook into a repo of 5-6 modules, [lint that module](https://peps.python.org/pep-0585/) to use correct type hints for generics (most frontier models now do this automatically, but not always).
  ![](https://vickiboykis.com/images/refactor_gemma.png)
  I’ve also used it to proofread some blog posts, write unit tests, and to bootstrap a repo that stands up a two-tower model for recommendations just to see what the agent would do with a blank slate. Here’s what it generated, which was pretty basic but still beyond the scope of anything I would have thought possible last year:
  ![](https://vickiboykis.com/images/twotower.png) ([View Highlight](https://read.readwise.io/read/01kvbembqdqbkr0qmqacfcrbss))
- Note that the environment is restricted because I run all my agentic workflows in a Docker container with limited access to execution.
  I’m also building an app that surfaces trending topics from Arxiv papers. Out of curiosity, I had Pi go through my past LM Studio session logs and figure out what I was using LM Studio for: ([View Highlight](https://read.readwise.io/read/01kvbemns2h6px30d20ke5pc27))
- But, the larger story for me is that these kinds of tasks, even as simple as they are, used to be impossible for local models as recently as 6 months ago.
  [`Gemma-4-12b-qat`](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/) just came out but I’ve already also really been impressed with its performance relative to its size. The model architecture itself is [really interesting](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-gemma-4-12b) and proposes a bunch of interesting questions like, “if we are constrained by performance and price, what architectural tradeoffs do we need to make?” a question that so far has not really been asked in the mad token gold rush. ([View Highlight](https://read.readwise.io/read/01kvbenbb72kh4djvhg2ew4hxn))
- But don’t take my word for any of this, try it out for yourself! You’ll need a local model inference engine, an agentic harness, and the local model artifact if you want to try to run local agentic flows. You’ll need to set up the harness to point at your local inference endpoint, the [downloaded model artifact](https://vickiboykis.com/2024/02/28/gguf-the-long-way-around/) served via the inference engine. ([View Highlight](https://read.readwise.io/read/01kvbenmmg1q4spe0et6p1akr3))
- For my local setup, I’m currently using [Pi](https://pi.dev/) as the agent harness and [LM Studio](https://lmstudio.ai/) as the inference server, although it would likely be faster if I just used llama.cpp directly - a potential direction for a future experiment. ([View Highlight](https://read.readwise.io/read/01kvbep36ye5b4sjk5bcpygd1e))
- [This post was very easy to follow](https://patloeber.com/gemma-4-pi-agent/) to set up agentic coding with Pi and LM Studio, although I did make a few tweaks to the post’s setup.
  1. **Model:** The post recommends `Gemma 26B A4B` , but `gemma-4-12b-qat` is more recent and smaller and faster, without much sacrifice in accuracy.
  2. **Security:** I run every Pi session in a Docker container and give it permissions only to bash so that it can’t run Python code or do web browsing, although I do plan to allow curl in a different image for some research work I’m doing.
  3. **Agent Harness Config:** Since I run everything in Docker, I edited Pi’s `models.json` in order to get Pi to talk to the model. ([View Highlight](https://read.readwise.io/read/01kvbep8720j3405qzc5xj1d4s))
- I build the Docker container and make changes to the files in its own repo. Then, I run Pi in the repo I’m working in, which spins up Docker so that Pi can’t wipe files or directories by acting on my physical hard drive. This also enables Pi running in the container to see my custom model `json` config by shipping it into the container. All of this has been working fairly well for my experiments.
  There are still issues with local models: inference can be slow, context windows are small and limited to your own hardware, and the ecosystem, although it’s made a ton easier by tooling like LM Studio and HuggingFace’s [Use This Model button](https://huggingface.co/blog/yagilb/lms-hf). Early releases suffer from [prompt template mismatches](https://docs.langchain.com/langsmith/prompt-template-format). But, these are usually patched extremely quickly. Needless to say, I’m not sure this is ready for production software development quite yet.
  The benefits, though, are numerous and the ecosystem critical to invest in, particularly now. One of the very cool parts of local models is you can introspect almost everything, like watching the token inference process live, ([View Highlight](https://read.readwise.io/read/01kvbepkvgfyqbpzftcx7czmxv))
- You can do things like change the local context window and watch performance improve or degrade, and really dig into how your tokens are processed on the GPU. You can change the system prompt, the quantizations. You can pit models against each other. You can also change and introspect the harness side.
  The possibilities are endless, and the tools only keep getting better. ([View Highlight](https://read.readwise.io/read/01kvbept51erwxdgaycqjdd9yz))
