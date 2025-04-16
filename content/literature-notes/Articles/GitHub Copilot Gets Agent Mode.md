---
author: "[[Kay Ewbank]]"
title: 'GitHub Copilot Gets Agent Mode'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Kay Ewbank]]
- Full Title: GitHub Copilot Gets Agent Mode
- URL: https://www.i-programmer.info/news/90-tools/17818-github-copilot-gets-agent-mode.html

## Highlights
- GitHub has announced new features for GitHub Copilot to streamline coding tasks. Copilot will now predict what a developer might be going to type next based on what they have already typed. The tool also gets the ability for its agents to implement changes across multiple files. ([View Highlight](https://read.readwise.io/read/01jm1z8dwjn8kddbwztp7v4ky8))
- The updates that have been announced aim at streamlining coding tasks based on an organization’s specific ways of working. These improvements start with Copilot Edits, which let a developer specify a set of files to be edited and then use natural language to ask Copilot what changes should be made. Copilot Edits makes inline changes directly in the user's workspace, across multiple files. ([View Highlight](https://read.readwise.io/read/01jm1z91gh3hgcsqshp6wc0nzv))
- If that sounds like a disaster waiting to happen, GitHub CEO Thomas Dohmke says:
  *"You stay in the flow of your code while reviewing the suggested changes, accepting what works, and iterating with follow-up asks."* ([View Highlight](https://read.readwise.io/read/01jm1z952t9acf0a1p9kyy9hzx))
- Behind the scenes, Copilot Edits uses a dual-model architecture. A foundation language model (chosen by the developer) considers a full context of the Edits session to generate initial edit suggestions. These suggestions are then passed to a "speculative decoding endpoint, optimized for fast application of changes in files" that has been developed by GitHub. ([View Highlight](https://read.readwise.io/read/01jm1z9j3tf2fsz83zx7fwk69f))
- Dohmke said in a blog pos that Copilot Edits works because it puts you in control, from setting the right context to accepting changes. When the model gets it wrong, you can review changes across multiple files, accept good ones and iterate until, together with Copilot, you arrive at the right solution. ([View Highlight](https://read.readwise.io/read/01jm1z9vszsv3edyr499rqtbrs))
- In agent mode, Copilot will iterate on not just its own output, but the result of that output. And it will iterate until it has completed all the subtasks required to complete your prompt, inferring any additional tasks that were not specified, but are also necessary for the primary request to work. ([View Highlight](https://read.readwise.io/read/01jm1za48b5n3zcfgcytjstfp4))
- GitHub has also provided a first look at a new autonomous SWE agent. SWE agents are a type of automated system that act on behalf of developers, performing tasks such as generating and reviewing code, refactoring or optimizing the codebase, automating workflows like tests or pipelines, and providing guidance. ([View Highlight](https://read.readwise.io/read/01jm1zace4j08fhz22k9btqge3))
