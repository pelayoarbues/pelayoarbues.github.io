---
author: "[[unsloth.ai]]"
title: 'How to Run Local LLMs With Claude Code'
date: "2026-02-28"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F2815821428-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FHpyELzcNe0topgVLGCZY%252Fsites%252Fsite_mXXTe%252Fsocialpreview%252FOeFDVbzp4cgwaId7PbvL%252Funsloth%2520docs%2520pic.png%3Falt%3Dmedia%26token%3Df34a6bcc-db15-449a-bc2d-e0e8f52fe953&width=1200&height=630&sign=b1ca68fa&sv=2)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: How to Run Local LLMs With Claude Code
- URL: https://unsloth.ai/docs/basics/claude-code

## Highlights
- This step-by-step guide shows you how to connect open LLMs and APIs to Claude Code entirely locally, complete with screenshots. Run using any open model like DeepSeek, Qwen and Gemma. ([View Highlight](https://read.readwise.io/read/01kjk012374hy8f7ekdan5ap9m))
- For this tutorial, we’ll use [GLM-4.7-Flash](https://unsloth.ai/docs/models/glm-4.7-flash), the strongest 30B MoE agentic & coding model as of Jan 2026 (which works great on a 24GB RAM/unified mem device) to autonomously fine-tune an LLM with [Unsloth](https://github.com/unslothai/unsloth). You can swap in [any other model](https://unsloth.ai/docs/models/tutorials), just update the model names in your scripts. ([View Highlight](https://read.readwise.io/read/01kjk016jmv54d5kq2e5s39hb5))
- We use `llama.cpp` which is an open-source framework for running LLMs on your Mac, Linux, Windows etc. devices. Llama.cpp contains `llama-server` which allows you to serve and deploy LLMs efficiently. The model will be served on port 8001, with all agent tools routed through a single OpenAI-compatible endpoint. ([View Highlight](https://read.readwise.io/read/01kjk01e1ejge92frgj2q30x2g))
- We need to install `llama.cpp` to deploy/serve local LLMs to use in Claude Code etc. We follow the official build instructions for correct GPU bindings and maximum performance. Change `-DGGML_CUDA=ON` to `-DGGML_CUDA=OFF` if you don't have a GPU or just want CPU inference. ([View Highlight](https://read.readwise.io/read/01kjk01p53bf91h4pw4fyjt1pz))
- To deploy GLM-4.7-Flash for agentic workloads, we use `llama-server`. We apply Z.ai's recommended sampling parameters (`temp 1.0`, `top_p 0.95`) and enable `--jinja` for proper tool calling support. ([View Highlight](https://read.readwise.io/read/01kjk0256yyk3qyxrt7sh2f8js))
- Run this command in a new terminal (use `tmux` or open a new terminal). The below should **fit perfectly in a 24GB GPU (RTX 4090) (uses 23GB)** `--fit on` will also auto offload, but if you see bad performance, reduce `--ctx-size` . We used `--cache-type-k q8_0 --cache-type-v q8_0` for KV cache quantization to reduce VRAM usage. ([View Highlight](https://read.readwise.io/read/01kjk02b9zn2h8p9mjda3vd9hs))
- Claude Code is Anthropic's agentic coding tool that lives in your terminal, understands your codebase, and handles complex Git workflows via natural language. ([View Highlight](https://read.readwise.io/read/01kjk02n7dras8cvd27yx212mh))
