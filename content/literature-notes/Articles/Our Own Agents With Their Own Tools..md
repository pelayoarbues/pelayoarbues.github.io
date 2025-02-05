---
author: [[Irrational Exuberance]]
title: "Our Own Agents With Their Own Tools."
date: 2025-02-05
tags: 
- articles
- literature-note
---
![rw-book-cover](https://lethain.com/static/author.png)

## Metadata
- Author: [[Irrational Exuberance]]
- Full Title: Our Own Agents With Their Own Tools.
- URL: https://lethain.com/our-own-agents-our-own-tools/

## Highlights
- Entering 2025, I decided to spend some time exploring the topic of agents. I started reading Anthropic’s [Building effective agents](https://www.anthropic.com/research/building-effective-agents), followed by Chip Huyen’s *[AI Engineering](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302)*. I kicked off a major workstream at work on using agents, and I also decided to do a personal experiment of sorts. This is a general commentary on building that project. ([View Highlight](https://read.readwise.io/read/01jkaqhabca417vegb934xrmkm))
- What I wanted to build was a simple chat interface where I could write prompts, select models, and have the model use tools as appropriate. My side goal was to build this using Cursor and generally avoid writing code directly as much as possible, but I found that generally slower than writing code in emacs while relying on `4o-mini` to provide working examples to pull from. ([View Highlight](https://read.readwise.io/read/01jkaqhc1m1vyspqd5ay4z0x9g))
- Similarly, while I initially envisioned building this in fullstack TypeScript via Cursor, I ultimately bailed into a stack that I’m more comfortable, and ended up using Python3, FastAPI, PostgreSQL, and SQLAlchemy with the async psycopg3 driver. It’s been a… while… since I started a brand new Python project, and used this project as an opportunity to get comfortable with Python3’s async/await mechanisms along with Python3’s typing along with [mypy](https://mypy.readthedocs.io/). Finally, I also wanted to experiment with [Tailwind](https://tailwindcss.com/), and ended up using [TailwindUI’s components](https://tailwindui.com/components) to build the site. ([View Highlight](https://read.readwise.io/read/01jkaqheax2bj4qh301pz4pxw8))
- The working version supports everything I wanted: creating chats with models, and allowing those models to use function calling to use tools that I provide. The models are allowed to call any number of tools in pursuit of the problem they are solving. The tool usage is the most interesting part here for sure. The simplest tool I created was a `get_temperature` tool that provided a fake temperature for your location. This allowed me to ask questions like “What should I wear tomorrow in San Francisco, CA?” and get a useful respond. ([View Highlight](https://read.readwise.io/read/01jkaqhghena69aebrzsb6khyq))
- What’s pretty amazing is how much power you can add to your agent by adding such a trivial tool as retrieving a URL. You can similarly imagine adding tools for retrieving and commenting on Github pull requests and so, which could allow a very simple agent tool like this to become quite useful. ([View Highlight](https://read.readwise.io/read/01jkaqhvwzzxqppmb9rsktrf9k))
- Working on this project gave me a moderately compelling view of a near-term future where most engineers have simple application like this running that they can pipe events into from various systems (email, text, Github pull requests, calendars, etc), create triggers that map events to templates that feed into prompts, and execute those prompts with tool-aware agents. ([View Highlight](https://read.readwise.io/read/01jkaqj37t4ymz5p31bwkrqbv8))
- Combine that with ability for other agents to register themselves with you and expose the tools that they have access to (e.g. schedule an event with tool’s owner), and a bunch of interesting things become very accessible with a very modest amount of effort:
  • You could schedule events between two busy people’s calendars, as if both of them had an assistant managing their calendar
  • Reply to your own pull requests with new blog posts, providing feedback on typos and grammatical issues
  • Crawl websites you care about and identify posts you might be interested in
  • Ask the model to generate a system model using [lethain:systems](https://github.com/lethain/systems), run that model, then chart the responses
  • Add a “planning tool” which allows the model to generate a plan to guide subsequent steps in a complex task. (e.g. getting my calendar, getting a friend’s calendar, suggesting a time we could meet) ([View Highlight](https://read.readwise.io/read/01jkaqjc8ymcc90x833dj59xts))
- None of these are exactly lifesaving, but each is somewhat useful, and I imagine there are many more fairly obvious ideas that become easy once you have the necessary scaffolding to make this sort of thing easy. ([View Highlight](https://read.readwise.io/read/01jkaqjg6rvm05148rzsb6yxrz))
