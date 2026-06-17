---
author: "[[Simon Willison's Weblog]]"
title: 'After Months of Coding With LLMs, I''m Going Back to Using My Brain'
date: "2025-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: After Months of Coding With LLMs, I'm Going Back to Using My Brain
- URL: https://simonwillison.net/2025/May/20/after-months-of-coding-with-llms/#atom-everything

## Highlights
- **[After months of coding with LLMs, I'm going back to using my brain](https://albertofortin.com/writing/coding-with-ai)**. Interesting vibe coding retrospective from Alberto Fortin. Alberto is an experienced software developer and decided to use Claude an Cursor to rewrite an existing system using Go and ClickHouse - two new-to-him technologies. ([View Highlight](https://read.readwise.io/read/01jvsmhx4qnzx1hdppqkpt8zjc))
- One morning, I decide to actually inspect closely what’s all this code that Cursor has been writing. It’s not like I was blindly prompting without looking at the end result, but I was optimizing for speed and I hadn’t actually sat down just to review the code. I was just building building building.
  So I do a “coding review” session. And **the horror ensues**. ([View Highlight](https://read.readwise.io/read/01jvsmj774gym2bgj3betbm9sd))
- Two service files, in the same directory, with similar names, clearly doing a very similar thing. But the method names are different. The props are not consistent. One is called "WebAPIprovider", the other one "webApi". They represent the same exact parameter. The same method is redeclared multiple times across different files. The same config file is being called in different ways and retrieved with different methods.
  No consistency, no overarching plan. It’s like I'd asked 10 junior-mid developers to work on this codebase, with no Git access, locking them in a room without seeing what the other 9 were doing. ([View Highlight](https://read.readwise.io/read/01jvsmjbgvb5hm9xbgsrz7nadm))
- Alberto reset to a less vibe-heavy approach and is finding it to be a much more productive way of working:
  > I’m defaulting to pen and paper, I’m defaulting to coding the first draft of that function on my own. [...] But I’m not asking it to write new things from scratch, to come up with ideas or to write a whole new plan. I’m writing the plan. I’m the senior dev. The LLM is the assistant. ([View Highlight](https://read.readwise.io/read/01jvsmjfejxff7131n7r390pkf))
