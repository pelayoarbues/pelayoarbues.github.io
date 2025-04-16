---
author: [[Simon Willison]]
title: "TIL: Using uv to develop Python command-line applications"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: TIL: Using uv to develop Python command-line applications
- URL: https://simonwillison.net/2024/Oct/24/uv-cli/#atom-everything

## Highlights
- . I've been increasingly using [uv](https://docs.astral.sh/uv/) to try out new software (via `uvx`) and experiment with new ideas, but I hadn't quite figured out the right way to use it for developing my own projects. ([View Highlight](https://read.readwise.io/read/01jb04rdtcybzztzgwx8v583qx))
- It turns out I was missing a few things - in particular the fact that there's no need to use `uv pip` at all when working with a local development environment, you can get by entirely on `uv run` (and maybe `uv sync --extra test` to install test dependencies) with no direct invocations of `uv pip` at all. ([View Highlight](https://read.readwise.io/read/01jb04rwckgsxv5acq4xp0jmsw))
- I bounced [a few questions](https://gist.github.com/simonw/975dfa41e9b03bca2513a986d9aa3dcf) off Charlie Marsh and filled in the missing gaps - this TIL shows my new uv-powered process for hacking on Python CLI apps built using Click and my [simonw/click-app](https://github.com/simonw/click-app) cookecutter template. ([View Highlight](https://read.readwise.io/read/01jb04s1z84m914vnppdfnsdwn))
