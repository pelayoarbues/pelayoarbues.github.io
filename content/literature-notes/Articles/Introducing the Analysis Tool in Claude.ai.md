---
author: [[Simon Willison's Weblog]]
title: "Introducing the Analysis Tool in Claude.ai"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/analysis-uv-lock.jpg)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Introducing the Analysis Tool in Claude.ai
- URL: https://simonwillison.net/2024/Oct/24/claude-analysis-tool/#atom-everything

## Highlights
- . The [Claude.ai](http://claude.ai/) consumer-facing interface just shipped a major new feature, which they're calling "the analysis tool". ([View Highlight](https://read.readwise.io/read/01jb053v9x3scvyf0yqzea6r2s))
- It's their answer to OpenAI's [ChatGPT Code Interpreter](https://simonwillison.net/tags/code-interpreter/) mode: Claude can now chose to solve models by writing some code, executing that code and then continuing the conversation using the results from that execution. ([View Highlight](https://read.readwise.io/read/01jb053zjcr3dbtytvxgjv32ha))
- Here's [that chat transcript](https://gist.github.com/simonw/b25198899f92bdd7f15830567a07e319) and [the resulting artifact](https://static.simonwillison.net/static/2024/uv-lock-vis/index.html). I upgraded my [Claude transcript export tool](https://observablehq.com/@simonw/convert-claude-json-to-markdown) to handle the new feature, and hacked around with [Claude Artifact Runner](https://simonwillison.net/2024/Oct/23/claude-artifact-runner/) (manually editing the source to replace `fs.readFile()` with a constant) to build the React artifact separately. ([View Highlight](https://read.readwise.io/read/01jb055qwtt8q291wk7a651cbs))
- ChatGPT Code Interpreter (and the under-documented [Google Gemini equivalent](https://ai.google.dev/gemini-api/docs/code-execution)) both work the same way: they write Python code which then runs in a secure sandbox on OpenAI or Google's servers. ([View Highlight](https://read.readwise.io/read/01jb055sqx33ec05p69rxp73n6))
- Claude does things differently. It uses JavaScript rather than Python, and it executes that JavaScript directly in your browser - in a locked down [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) that communicates back to the main page by intercepting messages sent to `console.log()`. ([View Highlight](https://read.readwise.io/read/01jb055w9k325emsb52x5arfqr))
- It's implemented as a tool called `repl`, and you can prompt Claude like this to reveal some of the custom instructions that are used to drive it: ([View Highlight](https://read.readwise.io/read/01jb056108qefqq9yyrqt10sja))
- Analyzing user-uploaded files, particularly when these files are large and contain more data than you could reasonably handle within the span of your output limit (which is around 6,000 words). ([View Highlight](https://read.readwise.io/read/01jb056jmvk76c4b68atx9mvkv))
- The analysis tool has access to a `fs.readFile()` function that can read data from files you have shared with your Claude conversation. It also has access to the [Lodash](https://lodash.com/) utility library and [Papa Parse](https://www.papaparse.com/) for parsing CSV content. The instructions say: ([View Highlight](https://read.readwise.io/read/01jb056tzmrqt3ewzery6gwtqa))
- You can import available libraries such as lodash and papaparse in the analysis tool. However, note that the analysis tool is NOT a Node.js environment. Imports in the analysis tool work the same way they do in React. Instead of trying to get an import from the window, import using React style import syntax. E.g., you can write `import Papa from 'papaparse';` ([View Highlight](https://read.readwise.io/read/01jb056xyx61k47xcb8rv0nqng))
- I'm not sure why it says "libraries such as ..." there when as far as I can tell Lodash and papaparse are the *only* libraries it can load - unlike Claude Artifacts it can't pull in other packages from its CDN. ([View Highlight](https://read.readwise.io/read/01jb0575185b40rxwdmtmfhmh0))
- Code that you write in the analysis tool is *NOT* in a shared environment with the Artifact. This means:
  • To reuse code from the analysis tool in an Artifact, you must rewrite the code in its entirety in the Artifact.
  • You cannot add an object to the `window` and expect to be able to read it in the Artifact. Instead, use the `window.fs.readFile` api to read the CSV in the Artifact after first reading it in the analysis tool. ([View Highlight](https://read.readwise.io/read/01jb057h5nsm4bcyfb1fesp9b3))
- A further limitation of the analysis tool is that any files you upload to it are currently added to the Claude context. This means there's a size limit, and also means that only text formats work right now - you can't upload a binary (as I found when I tried uploading [sqlite.wasm](https://github.com/sqlite/sqlite-wasm/tree/main/sqlite-wasm/jswasm) to see if I could get it to use SQLite). ([View Highlight](https://read.readwise.io/read/01jb057jy5mgphxjpr9erxmdyz))
