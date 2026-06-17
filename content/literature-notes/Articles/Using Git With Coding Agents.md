---
author: "[[Simon Willison's Weblog]]"
title: 'Using Git With Coding Agents'
date: "2026-03-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Using Git With Coding Agents
- URL: https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/#atom-everything

## Highlights
- Git is a key tool for working with coding agents. Keeping code in version control lets us record how that code changes over time and investigate and reverse any mistakes. All of the coding agents are fluent in using Git's features, both basic and advanced.
  This fluency means we can be more ambitious about how we use Git ourselves. We don't need to memorize *how* to do things with Git, but staying aware of what's possible means we can take advantage of the full suite of Git's abilities. ([View Highlight](https://read.readwise.io/read/01kmb4mrbzyp80fmf25c691322))
- To turn the folder the agent is working in into a Git repository - the agent will probably run the `git init` command. If you just say "repo" agents will assume you mean a Git repository. Create a new Git commit to record the changes the agent has made - usually with the `git commit -m "commit message"` command. This should configure your repository for GitHub. You'll need to create a new repo first using [github.com/new](https://github.com/new), and configure your machine to talk to GitHub. Or "recent changes" or "last three commits". ([View Highlight](https://read.readwise.io/read/01kmb4myw8ya1zm7ck4x9750fs))
- This is a great way to start a fresh coding agents session. Telling the agent to look at recent changes causes it to run `git log`, which can instantly load its context with details of what you have been working on recently - both the modified code and the commit messages that describe it.
  Seeding the session in this way means you can start talking about that code - suggest additional fixes, ask questions about how it works, or propose the next change that builds on what came before.
  Run this on your main branch to fetch other contributions from the remote repository, or run it in a branch to integrate the latest changes on main. ([View Highlight](https://read.readwise.io/read/01kmb4negd6cc0wde4cy6kq5bk))
- There are multiple ways to merge changes, including merge, rebase, squash or fast-forward. If you can't remember the details of these that's fine:
  Agents are great at explaining the pros and cons of different merging strategies, and everything in git can always be undone so there's minimal risk in trying new things. I use this universal prompt surprisingly often! There are plenty of ways you can get into a mess with Git, often through pulls or rebase commands that end in a merge conflict, or just through adding the wrong things to Git's staging environment.
  Unpicking those used to be the most difficult and time consuming parts of working with Git. No more! Coding agents can navigate the most Byzantine of merge conflicts, reasoning through the intent of the new code and figuring out what to keep and how to combine conflicting changes. If your code has automated tests (and [it should](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)) the agent can ensure those pass before finalizing that merg ([View Highlight](https://read.readwise.io/read/01kmb4nm58x25e3ph4ka182f7a))
- If you lose code that you are working on that's previously been committed (or saved with `git stash`) your agent can probably find it for you.
  Git has a mechanism called the `reflog` which can often capture details of code that hasn't been committed to a permanent branch. Agents can search that, and search other branches too. ([View Highlight](https://read.readwise.io/read/01kmb4ny3zzjgcspbrsavrb0cm))
- Git bisect is one of the most powerful debugging tools in Git's arsenal, but it has a relatively steep learning curve that often deters developers from using it.
  When you run a bisect operation you provide Git with some kind of test condition and a start and ending commit range. Git then runs a binary search to identify the earliest commit for which your test condition fails.
  This can efficiently answer the question "what first caused this bug". The only downside is the need to express the test for the bug in a format that Git bisect can execute. ([View Highlight](https://read.readwise.io/read/01kmb4pk5ey3bx9crb9ppqtyfn))
- The commit history of a Git repository is not fixed. The data is just files on disk after all (tucked away in a hidden `.git/` directory), and Git itself provides tools that can be used to modify that history.
  Don't think of the Git history as a permanent record of what actually happened - instead consider it to be a deliberately authored story that describes the progression of the software project.
  This story is a tool to aid future development. Permanently recording mistakes and cancelled directions can sometimes be useful, but repository authors can make editorial decisions about what to keep and how best to capture that history.
  Coding agents are really good at using Git's advanced history rewriting features. ([View Highlight](https://read.readwise.io/read/01kmb4pym83cnffdej3x0b1v6f))
