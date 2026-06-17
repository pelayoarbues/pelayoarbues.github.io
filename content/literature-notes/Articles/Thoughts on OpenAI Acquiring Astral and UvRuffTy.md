---
author: "[[Simon Willison's Weblog]]"
title: 'Thoughts on OpenAI Acquiring Astral and Uv/Ruff/Ty'
date: "2026-03-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Thoughts on OpenAI Acquiring Astral and Uv/Ruff/Ty
- URL: https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/#atom-everything

## Highlights
- The big news this morning: [Astral to join OpenAI](https://astral.sh/blog/openai) (on the Astral blog) and [OpenAI to acquire Astral](https://openai.com/index/openai-to-acquire-astral/) (the OpenAI announcement). Astral are the company behind [uv](https://simonwillison.net/tags/uv/), [ruff](https://simonwillison.net/tags/ruff/), and [ty](https://simonwillison.net/tags/ty/)—three increasingly load-bearing open source projects in the Python ecosystem. I have thoughts! ([View Highlight](https://read.readwise.io/read/01kmb4qvzftae3ryhxj4ebp0pq))
- The official line from OpenAI and Astral [#](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/#the-official-line-from-openai-and-astral)
  The Astral team will become part of the Codex team at OpenAI.
  Charlie Marsh [has this to say](https://astral.sh/blog/openai):
  > Open source is at the heart of that impact and the heart of that story; it sits at the center of everything we do. In line with our philosophy and [OpenAI’s own announcement](https://openai.com/index/openai-to-acquire-astral/), OpenAI will continue supporting our open source tools after the deal closes. We’ll keep building in the open, alongside our community -- and for the broader Python ecosystem -- just as we have from the start. [...]
  > 
  > After joining the Codex team, we’ll continue building our open source tools, explore ways they can work more seamlessly with Codex, and expand our reach to think more broadly about the future of software development. ([View Highlight](https://read.readwise.io/read/01kmb4r13ajbt0c9x1ee3a4ys6))
- OpenAI’s message [has a slightly different focus](https://openai.com/index/openai-to-acquire-astral/) (highlights mine):
  > As part of our developer-first philosophy, after closing OpenAI plans to support Astral’s open source products. **By bringing Astral’s tooling and engineering expertise to OpenAI, we will accelerate our work on Codex** and expand what AI can do across the software development lifecycle.
  This is a slightly confusing message. The [Codex CLI](https://github.com/openai/codex) is a Rust application, and Astral have some of the best Rust engineers in the industry—[BurntSushi](https://github.com/burntsushi) alone ([Rust regex](https://github.com/rust-lang/regex), [ripgrep](https://github.com/BurntSushi/ripgrep), [jiff](https://github.com/BurntSushi/jiff)) may be worth the price of acquisition!
  So is this about the talent or about the product? I expect both, but I know from past experience that a product+talent acquisition can turn into a talent-only acquisition later on. ([View Highlight](https://read.readwise.io/read/01kmb4r8exca6a4mq1rda5w449))
- uv is the big one [#](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/#uv-is-the-big-one)
  Of Astral’s projects the most impactful by far is [uv](https://github.com/astral-sh/uv). If you’re not familiar with it, `uv` is by far the most convincing solution to Python’s environment management problems, best illustrated by [this classic XKCD](https://xkcd.com/1987/):
  ![](https://imgs.xkcd.com/comics/python_environment.png) ([View Highlight](https://read.readwise.io/read/01kmb4red6ehrtyfa73yzbdbtm))
- Switch from `python` to `uv run` and most of these problems go away. I’ve been using it extensively for the past couple of years and it’s become an essential part of my workflow.
  I’m not alone in this. According to PyPI Stats [uv was downloaded](https://pypistats.org/packages/uv) more than 126 million times last month! Since its release in February 2024—just two years ago—it’s become one of the most popular tools for running Python code. ([View Highlight](https://read.readwise.io/read/01kmb4rnwsb7pp8hfm7ca25vt6))
- Astral’s two other big projects are [ruff](https://github.com/astral-sh/ruff)—a Python linter and formatter—and [ty](https://github.com/astral-sh/ty)—a fast Python type checker.
  These are popular tools that provide a great developer experience but they aren’t load-bearing in the same way that `uv` is.
  They do however resonate well with coding agent tools like Codex—giving an agent access to fast linting and type checking tools can help improve the quality of the code they generate. ([View Highlight](https://read.readwise.io/read/01kmb4s1htvfevjrmv4nc2wbm9))
- Armin Ronacher built [Rye](https://til.simonwillison.net/python/rye), which was later taken over by Astral and effectively merged with uv. In [August 2024](https://lucumr.pocoo.org/2024/8/21/harvest-season/) he wrote about the risk involved in a VC-backed company owning a key piece of open source infrastructure and said the following (highlight mine):
  > However having seen the code and what uv is doing, **even in the worst possible future this is a very forkable and maintainable thing**. I believe that even in case Astral shuts down or were to do something incredibly dodgy licensing wise, the community would be better off than before uv existed. ([View Highlight](https://read.readwise.io/read/01kmb4sqj21n2b9381q7gnykwn))
- > All I can say is that *right now*, we’re committed to maintaining our open-source tools with the same level of effort, care, and attention to detail as before. That does not change with this acquisition. No one can guarantee how motives, incentives, and decisions might change years down the line. But that’s why we bake optionality into it with the tools being permissively licensed. That makes the worst-case scenarios have the shape of “fork and move on”, and not “software disappears forever”.
  I like and trust the Astral team and I’m optimistic that their projects will be well-maintained in their new home. ([View Highlight](https://read.readwise.io/read/01kmb4swv71t8hny1sea191gqm))
- OpenAI don’t yet have much of a track record with respect to acquiring and maintaining open source projects. They’ve been on a bit of an acquisition spree over the past three months though, snapping up [Promptfoo](https://openai.com/index/openai-to-acquire-promptfoo/) and [OpenClaw](https://steipete.me/posts/2026/openclaw) (sort-of, they hired creator Peter Steinberger and are spinning OpenClaw off to a foundation), plus closed source LaTeX platform [Crixet (now Prism)](https://openai.com/index/introducing-prism/).
  If things do go south for `uv` and the other Astral projects we’ll get to see quite how credible the forking exit strategy turns out to be. ([View Highlight](https://read.readwise.io/read/01kmb4tb5emqfyd9vpzbcftggq))
