---
author: "[[Charlie Marsh]]"
title: 'A New Home for Python-Build-Standalone'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://astral.sh/static/OpenGraph/Astral.jpg)

## Metadata
- Author: [[Charlie Marsh]]
- Full Title: A New Home for Python-Build-Standalone
- URL: https://astral.sh/blog/python-build-standalone

## Highlights
- **TL;DR**: On 2024-12-17, we'll be taking stewardship of [python-build-standalone](https://github.com/indygreg/python-build-standalone), [Gregory Szorc's](https://gregoryszorc.com/) foundational project for building and installing portable Python distributions. You can read Gregory's own announcement [here](https://gregoryszorc.com/blog/2024/12/03/transferring-python-build-standalone-stewardship-to-astral/). ([View Highlight](https://read.readwise.io/read/01je76cx95y67e5921eyxyryfr))
- [python-build-standalone](https://github.com/indygreg/python-build-standalone) powers Python installation for [uv](https://github.com/astral-sh/uv), [Rye](https://github.com/astral-sh/rye), [mise](https://github.com/jdx/mise), [Bazel's rules_python](https://github.com/bazelbuild/rules_python), [pipx](https://github.com/pypa/pipx), [Hatch](https://github.com/pypa/hatch), and more, with **over 70,000,000 downloads** since its release. ([View Highlight](https://read.readwise.io/read/01je76d07xf21090yrstpct561))
- But given Gregory's [shifting open source priorities](https://gregoryszorc.com/blog/2024/03/17/my-shifting-open-source-priorities/), he's been looking for help. And since March, we've been working with him to maintain [python-build-standalone](https://github.com/indygreg/python-build-standalone). We've shepherded every release since April, automated the release process itself, built out support for [Python 3.13](https://github.com/indygreg/python-build-standalone/pull/319) (including support for [free-threaded Python](https://github.com/indygreg/python-build-standalone/pull/326)), and more. ([View Highlight](https://read.readwise.io/read/01je76d2jk522pv5frng54xbrb))
- We use [python-build-standalone](https://github.com/indygreg/python-build-standalone) in [uv](https://github.com/astral-sh/uv), but it's also part of a broader ecosystem and will continue to be developed with that broader ecosystem in mind. We're excited to devote full-time resources to its maintenance and development, and to foster the level of engagement and activity that you might be familiar with from [Ruff](https://github.com/astral-sh/ruff) or [uv](https://github.com/astral-sh/uv). ([View Highlight](https://read.readwise.io/read/01je76d50kxwq0s4phz95dhxn9))
- Normally, when you build CPython on Linux or macOS, several system paths are hardcoded into the binary. This is fine if you're building and installing Python on a single machine, but it's a problem if you want to pre-build Python and then distribute it to other machines. CPython is also dynamically linked against a number of system libraries, which can cause trouble if the target machine doesn't have those libraries installed. In this way, CPython is not "standalone": it's tightly coupled to the system on which it was built. ([View Highlight](https://read.readwise.io/read/01je76d7n820zmstyvaq7sxjt1))
- As a result, when you download Python from `python.org` (on Linux or macOS), what you're actually downloading is an installer that builds Python from source on your machine. Similarly, when you install Python with `pyenv`, it too is building from source. ([View Highlight](https://read.readwise.io/read/01je76dq5z0esmer0arj91nhd6))
- While source installations have their benefits, they have some drawbacks too:
  1. Building from source is much slower than downloading a pre-built binary. This is especially true if you're building CPython with optimizations enabled (i.e., PGO and LTO). Notably, `pyenv` does *not* build with optimizations enabled by default, so if you're using `pyenv` to install Python, you're leaving significant performance improvements on the table.
  2. Building from source introduces a dependency on a build toolchain (e.g., `gcc`). And it can fail! For a variety of reasons: missing dependencies, incompatible system libraries, etc. ([View Highlight](https://read.readwise.io/read/01je76e69xe0j7yktyrmwcv788))
- The net effect, though, is that you can't "download a Python binary" from... anywhere. Other than the [python-build-standalone](https://github.com/indygreg/python-build-standalone) project. ([View Highlight](https://read.readwise.io/read/01je76eanj2e8nr5qdqq9vwg6d))
- Specifically, [python-build-standalone](https://github.com/indygreg/python-build-standalone) solves these problems by (1) statically linking Python against its dependencies; and (2) patching the CPython build system to operate on relative, rather than absolute paths. ([View Highlight](https://read.readwise.io/read/01je76eexxmrsfazdfrhp88g7f))
- With those modifications, it then builds Python from source across a wide matrix of Python versions, platforms, and build variants (e.g., optimized vs. debug builds), and publishes the built distributions to GitHub Releases. ([View Highlight](https://read.readwise.io/read/01je76ejv9gb5dtjnb7vqr5se7))
- The Python builds produced by [python-build-standalone](https://github.com/indygreg/python-build-standalone) are truly standalone: you can download, unzip, and run them on any machine, without any additional dependencies. They make [`uv python install`](https://docs.astral.sh/uv/guides/install-python/) feel magical. Not only is it extremely fast, but (to borrow from Armin), it's hassle-free. ([View Highlight](https://read.readwise.io/read/01je76emgza6dv7r3batcgfyvs))
