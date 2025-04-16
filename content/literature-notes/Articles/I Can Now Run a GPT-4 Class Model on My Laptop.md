---
author: [[Simon Willison's Weblog]]
title: "I Can Now Run a GPT-4 Class Model on My Laptop"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/livebench-llama.jpg)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: I Can Now Run a GPT-4 Class Model on My Laptop
- URL: https://simonwillison.net/2024/Dec/9/llama-33-70b/#atom-everything

## Highlights
- Meta’s new [Llama 3.3 70B](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) is a genuinely GPT-4 class Large Language Model that runs on my laptop. ([View Highlight](https://read.readwise.io/read/01jepm1pk6b2eamqq3z8e31j94))
- Just 20 months ago I was amazed to see something that felt GPT-3 class run on that same machine. The quality of models that are accessible on consumer hardware has improved *dramatically* in the past two years. ([View Highlight](https://read.readwise.io/read/01jepm1re7md2s7xx2w88he0tt))
- My laptop is a 64GB MacBook Pro M2, which I got in January 2023—two months after the initial release of ChatGPT. All of my experiments running LLMs on a laptop have used this same machine. ([View Highlight](https://read.readwise.io/read/01jepm1vvxcsk3sej0f3ne4y1m))
- In March 2023 I wrote that [Large language models are having their Stable Diffusion moment](https://simonwillison.net/2023/Mar/11/llama/) after running Meta’s initial LLaMA release (think of that as Llama 1.0) via the then-brand-new [llama.cpp](https://github.com/ggerganov/llama.cpp). I said: ([View Highlight](https://read.readwise.io/read/01jepm21b8nxstqbhmx8ep5ae2))
- I had a moment of déjà vu the day before yesterday, when I ran Llama 3.3 70B on the same laptop for the first time. ([View Highlight](https://read.readwise.io/read/01jepm25xqd1mpnd1ms66xnta5))
- This model delivers similar performance to Llama 3.1 405B with cost effective inference that’s feasible to run locally on common developer workstations. ([View Highlight](https://read.readwise.io/read/01jepm2ac8j2nz8y8ebpewn168))
- Everything I’ve seen so far from Llama 3.3 70B suggests that it holds up to that standard. I honestly didn’t think this was possible—I assumed that anything as useful as GPT-4 would require many times more resources than are available to me on my consumer-grade laptop. ([View Highlight](https://read.readwise.io/read/01jepm2g4jaxf2p5je7096z1xx))
- I’m so excited by the continual efficiency improvements we’re seeing in running these impressively capable models. In the proprietary hosted world it’s giving us incredibly cheap and fast models like [Gemini 1.5 Flash](https://simonwillison.net/search/?q=gemini+flash&sort=date), [GPT-4o mini](https://simonwillison.net/2024/Jul/18/gpt-4o-mini/) and [Amazon Nova](https://simonwillison.net/2024/Dec/4/amazon-nova/). In the openly licensed world it’s giving us increasingly powerful models we can run directly on our own devices. ([View Highlight](https://read.readwise.io/read/01jepm2q8yxwkjkx97nyt2sr09))
- I don’t expect that this model would work well with much *less* than my 64GB of RAM. The first time I tried it consumed every remaining bit of available memory and hard-crashed my Mac! For my second attempt I made sure not to have Firefox and VS Code running at the same time and it worked just fine. ([View Highlight](https://read.readwise.io/read/01jepm3a5gz2132fz3ctf9nnpq))
- One of my current favorites for that is [LiveBench](https://livebench.ai/), which calls itself “a challenging, contamination-free LLM benchmark” and tests a large array of models with a comprehensive set of different tasks. ([View Highlight](https://read.readwise.io/read/01jepm4p28jsdskf96mf7rf1e8))
- `llama-3.3-70b-instruct-turbo` currently sits in position 19 on their table, a place ahead of Claude 3 Opus (my favorite model for several months after its release in March 2024) and just behind April’s GPT-4 Turbo and September’s GPT-4o. ([View Highlight](https://read.readwise.io/read/01jepm4s7qe6f83b2qh8wsmrs6))
- Llama 3.3 is currently the model that has impressed me the most that I’ve managed to run on my own hardware, but I’ve had several other positive experiences recently. ([View Highlight](https://read.readwise.io/read/01jepm56twpyb3c4wqvkjt21qx))
- Last month [I wrote about Qwen2.5-Coder-32B](https://simonwillison.net/2024/Nov/12/qwen25-coder/), an Apache 2.0 licensed model from Alibaba’s Qwen research team that also gave me impressive results with code. ([View Highlight](https://read.readwise.io/read/01jepm5cg1kb0z6kewfxtb024k))
- A couple of weeks ago [I tried another Qwen model, QwQ](https://simonwillison.net/2024/Nov/27/qwq/), which implements a similar chain-of-thought pattern to OpenAI’s o1 series but again runs comfortably on my own device. ([View Highlight](https://read.readwise.io/read/01jepm5e3e39c7670t2d8h3w98))
- Meta’s Llama 3.2 models are interesting as well: tiny 1B and 3B models (those should run even on a Raspberry Pi) that are way more capable than I would have expected—plus Meta’s first multi-modal vision models at 11B and 90B sizes. [I wrote about those in September](https://simonwillison.net/2024/Sep/25/llama-32/). ([View Highlight](https://read.readwise.io/read/01jepm5sftwp5wxm03hhm100mt))
- I’ve been mostly unconvinced by the ongoing discourse around LLMs hitting a plateau. The areas I’m personally most excited about are multi-modality (images, audio and video as input) and model efficiency. Both of those have had enormous leaps forward in the past year. ([View Highlight](https://read.readwise.io/read/01jepm5xabftbtkdr8vxsc49vf))
- I don’t particularly care about “AGI”. I want models that can do useful things that I tell them to, quickly and inexpensively—and that’s exactly what I’ve been getting more of over the past twelve months. ([View Highlight](https://read.readwise.io/read/01jepm6158pa4jkmtdgwct2jf4))
- Even if progress on these tools entirely stopped right now, the amount I could get done with just the models I’ve downloaded and stashed on a USB drive would keep me busy and productive for years. ([View Highlight](https://read.readwise.io/read/01jepm65j8vyzr4cscc7xr898n))
- I focused on Ollama in this article because it’s the easiest option, but I also managed to run a version of Llama 3.3 using Apple’s excellent [MLX library](https://github.com/ml-explore/mlx), which just celebrated its first birthday. ([View Highlight](https://read.readwise.io/read/01jepm6h7j95vsn13ynh38jva6))
- Here’s how I ran the model with MLX, using [uv](https://github.com/astral-sh/uv) to fire up a temporary virtual environment: ([View Highlight](https://read.readwise.io/read/01jepm6m7beekd8q1tty1ynhzc))
