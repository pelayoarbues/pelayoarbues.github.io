---
author: "[[Simon Willison's Weblog]]"
title: 'Claude Skills Are Awesome, Maybe a Bigger Deal Than MCP'
date: "2025-10-17"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Claude Skills Are Awesome, Maybe a Bigger Deal Than MCP
- URL: https://simonwillison.net/2025/Oct/16/claude-skills/#atom-everything

## Highlights
- Claude Skills are awesome, maybe a bigger deal than MCP ([View Highlight](https://read.readwise.io/read/01k7rfscchca4h9cz05x6grgx5))
- Skills are conceptually extremely simple: a skill is a Markdown file telling the model how to do something, optionally accompanied by extra documents and pre-written scripts that the model can run to help it accomplish the tasks described by the skill. ([View Highlight](https://read.readwise.io/read/01k7rft7kpqw7ykd7n2jcrezn8))
- Claude’s new [document creation abilities](https://www.anthropic.com/news/create-files), which accompanied [their new code interpreter feature](https://simonwillison.net/2025/Sep/9/claude-code-interpreter/) in September, turned out to be entirely implemented using skills. Those are [now available Anthropic’s repo](https://github.com/anthropics/skills/tree/main/document-skills) covering `.pdf`, `.docx`, `.xlsx`, and `.pptx` files. ([View Highlight](https://read.readwise.io/read/01k7rftj5pgybs6m4zsdt4w88k))
- There’s one extra detail that makes this a feature, not just a bunch of files in disk. At the start of a session Claude’s various harnesses can scan all available skill files and read a short explanation for each one from the frontmatter YAML in the Markdown file. This is *very* token efficient: each skill only takes up a few dozen extra tokens, with the full details only loaded in should the user request a task that the skill can help solve. ([View Highlight](https://read.readwise.io/read/01k7rftvz2tfdm22jzx1m45x75))
- Trying out the slack-gif-creator skill ([View Highlight](https://read.readwise.io/read/01k7rfvfrphgrd331gvv8v3vxf))
- This is pretty neat. Slack GIFs need to be a maximum of 2MB, so the skill includes a validation function which the model can use to check the file size. If it’s too large the model can have another go at making it smaller. ([View Highlight](https://read.readwise.io/read/01k7rfw4vxacxgae6qgc043e4r))
- [Model Context Protocol](https://modelcontextprotocol.io/) has attracted an enormous amount of buzz since its initial release back [in November last year](https://simonwillison.net/2024/Nov/25/model-context-protocol/). I like to joke that one of the reasons it took off is that every company knew they needed an “AI strategy”, and building (or announcing) an MCP implementation was an easy way to tick that box. ([View Highlight](https://read.readwise.io/read/01k7rfyd18c3jdxwzxkb42mbrs))
- Over time the limitations of MCP have started to emerge. The most significant is in terms of token usage: GitHub’s official MCP on its own famously consumes tens of thousands of tokens of context, and once you’ve added a few more to that there’s precious little space left for the LLM to actually do useful work. ([View Highlight](https://read.readwise.io/read/01k7rfytefas0fttcd1e7an9qh))
- My own interest in MCPs has waned ever since I started taking coding agents seriously. Almost everything I might achieve with an MCP can be handled by a CLI tool instead. LLMs know how to call `cli-tool --help`, which means you don’t have to spend many tokens describing how to use them—the model can figure it out later when it needs to. ([View Highlight](https://read.readwise.io/read/01k7rfz6yyy81x21c2fg18pead))
- Skills have exactly the same advantage, only now I don’t even need to implement a new CLI tool. I can drop a Markdown file in describing how to do a task instead, adding extra scripts only if they’ll help make things more reliable or efficient. ([View Highlight](https://read.readwise.io/read/01k7rfzenypn2bfqrx2dc10p67))
- One of the most exciting things about Skills is how easy they are to share. I expect many skills will be implemented as a single file—more sophisticated ones will be a folder with a few more. ([View Highlight](https://read.readwise.io/read/01k7rfzmjghb1ednza7gkb4w27))
- Anthropic have [Agent Skills documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) and a [Claude Skills Cookbook](https://github.com/anthropics/claude-cookbooks/tree/main/skills). I’m already thinking through ideas of skills I might build myself, like one on [how to build Datasette plugins](https://simonwillison.net/2025/Oct/8/claude-datasette-plugins/). ([View Highlight](https://read.readwise.io/read/01k7rfzsmm8v558r03e7m6ad4b))
- You can grab a skills folder right now, point Codex CLI or Gemini CLI at it and say “read pdf/SKILL.md and then create me a PDF describing this project” and it will work, despite those tools and models having no baked in knowledge of the skills system. ([View Highlight](https://read.readwise.io/read/01k7rg017d7ka9k3e45ev58krh))
- Anthropic this morning [introduced Claude Skills](https://www.anthropic.com/news/skills), a new pattern for making new abilities available to their models:
  > Claude can now use *Skills* to improve how it performs specific tasks. Skills are folders that include instructions, scripts, and resources that Claude can load when needed.
  > 
  > Claude will only access a skill when it’s relevant to the task at hand. When used, skills make Claude better at specialized tasks like working with Excel or following your organization’s brand guidelines. ([View Highlight](https://read.readwise.io/read/01k7rfsfesz5kn32jbq9ffm392))
- The skills mechanism is *entirely dependent* on the model having access to a filesystem, tools to navigate it and the ability to execute commands in that environment.
  This is a common pattern for LLM tooling these days—ChatGPT Code Interpreter was the first big example of this [back in early 2023](https://simonwillison.net/2023/Apr/12/code-interpreter/), and the pattern later extended to local machines via coding agent tools such as Cursor, Claude Code, Codex CLI and Gemini CLI. ([View Highlight](https://read.readwise.io/read/01k7rfwegr40ckpa28z8n6k020))
- This requirement is the biggest difference between skills and other previous attempts at expanding the abilities of LLMs, such as MCP and [ChatGPT Plugins](https://simonwillison.net/tags/chatgpt-plugins/). It’s a significant dependency, but it’s somewhat bewildering how much new capability it unlocks.
  The fact that skills are so powerful and simple to create is yet another argument in favor of making safe coding environments available to LLMs. The word **safe** there is doing a *lot* of work though! We really need to figure out how best to sandbox these environments such that attacks such as prompt injections are limited to an acceptable amount of damage. ([View Highlight](https://read.readwise.io/read/01k7rfwp5shesam5jgvzs1k21r))
- Back in January I [made some foolhardy predictions about AI/LLMs](https://simonwillison.net/2025/Jan/10/ai-predictions/), including that “agents” would once again fail to happen:
  > I think we are going to see a *lot* more froth about agents in 2025, but I expect the results will be a great disappointment to most of the people who are excited about this term. I expect a lot of money will be lost chasing after several different poorly defined dreams that share that name. ([View Highlight](https://read.readwise.io/read/01k7rfwxc21dqc98mah4ezbdsg))
- [Claude Code](https://www.claude.com/product/claude-code) is, with hindsight, poorly named. It’s not purely a coding tool: it’s a tool for general computer automation. *Anything* you can achieve by typing commands into a computer is something that can now be automated by Claude Code. It’s best described as a **general agent**. Skills make this a whole lot more obvious and explicit. ([View Highlight](https://read.readwise.io/read/01k7rfxeegbj4tb1kkdrvrgz9p))
- Just thinking about this with my data journalism hat on: imagine a folder full of skills that covers tasks like the following:
  • Where to get US census data from and how to understand its structure
  • How to load data from different formats into SQLite or DuckDB using appropriate Python libraries
  • How to publish data online, as Parquet files in S3 or pushed as tables to Datasette Cloud
  • A skill defined by an experienced data reporter talking about how best to find the interesting stories in a new set of data
  • A skill that describes how to build clean, readable data visualizations using D3 ([View Highlight](https://read.readwise.io/read/01k7rfy6b7kpjdef4rdw3qxa1d))
