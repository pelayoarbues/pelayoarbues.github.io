---
title: AI Enhanced Knowledge Management
date: 2024-05-13
tags:
  - permanent-note
  - AI
  - workflow
---
![An old robot working as a librarian, retrieving books in an ancient, dusty library - by Dalle3](librarian-robot.png)

Ever since my [Ph.D. days](10%20Years%20Later.%20Lessons%20from%20My%20PhD%20Experience.md), I've made it a habit to delve into prior literature before making any assertive claims. My [digital-garden](mocs/digital-garden.md) serves as my personal library, housing notes from #books  and #articles I've read, and even the occasional #podcast. The real magic, however, lies in tying these notes together, creating an intricate web of knowledge - a concept beautifully articulated by Sönke Ahrens in his book [How to take smart notes](literature-notes/Books/How%20to%20take%20smart%20notes.md).

While penning a note, I always keep one eye on my past musings. My [workflow](My%20workflow%20for%20my%20public%20second%20brain.md) might be far from flawless, but it works for me. Even though it's generally advised to jot down notes in your own words, I find myself frequently highlighting key points – particularly when reading on my Kindle at night or using [Readwise Reader](https://readwise.io/read) on the go.

My workflow allows me to gather all these highlights and automatically transform them into markdown notes. These are then directly sent to my [Obsidian](https://obsidian.md/) vault – my first port of call when researching a new topic. This vault serves as a well-curated knowledge base that continually expands as I explore [new](mocs/now.md)  subjects of interest.

Previously, I would navigate through this treasure trove using Obsidian's built-in search and finder tools – usually sufficient for specific queries. However, for those times when my mind craves a more exploratory search, [Omnisearch](https://publish.obsidian.md/omnisearch/Index) proves invaluable.

Despite having advanced tools like Omnisearch at my disposal, there are instances when I can't locate what I'm searching for. That's when my new ally, a Retrieval Augmented Generation (RAG) system built atop my Obsidian vault, comes into play. This Language Model can retrieve all my personal and literature notes, generate answers to my queries, and even cite sources. It's like having a conversation with my second brain in plain English!

The idea of integrating a RAG into my notes has intrigued me since I began researching RAGs at work. However, I didn't want the hassle of maintaining another system for personal use or relying on an external provider like OpenAI. Thankfully, the flourishing Obsidian community offers numerous open-source plugins built with Language Models as a backend – one such plugin being [Copilot](https://github.com/logancyang/obsidian-copilot).

Copilot enables interaction with your notes using external providers like Anthropic or OpenAI, or even Language Models running on your local machine. In my case, I interact with local Language Models using [Ollama](https://ollama.com/) – an incredibly convenient tool that eliminates the need to manage dependencies, especially on Apple Silicon devices.

With Ollama, accessing open-source models is as simple as executing a command in the terminal – ```ollama run llama3```. The chosen model is then readily accessible via Copilot.

To use Ollama as the backend, you must initiate a dedicated Ollama server for Obsidian to ensure that the Language Model doesn't accept requests from other services.

```bash
OLLAMA_ORIGINS=app://obsidian.md* ollama serve
```

While I'd appreciate more options to interact with the RAG via UI, I can always modify the plugin code since it's written using [LangChain](https://www.langchain.com/). Copilot performs admirably in retrieving sources and generating responses; however, its effectiveness hinges on the quality of the retrieval mechanism. Incorporating hybrid search (keyword search plus embeddings) might enhance Copilot's Vault QA capabilities. Nonetheless, if you're an Obsidian user seeking to elevate your note-taking game, Copilot is definitely worth a shot.


