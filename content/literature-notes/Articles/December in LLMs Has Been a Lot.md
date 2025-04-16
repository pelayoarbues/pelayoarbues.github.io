---
author: [[Simon Willison's Weblog]]
title: 'December in LLMs Has Been a Lot'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: December in LLMs Has Been a Lot
- URL: https://simonwillison.net/2024/Dec/20/december-in-llms-has-been-a-lot/#atom-everything

## Highlights
- On December 4th Amazon introduced the [Amazon Nova family](https://simonwillison.net/2024/Dec/4/amazon-nova/) of multi-modal models—clearly priced to compete with the excellent and inexpensive Gemini 1.5 series from Google. I got those working with [LLM](https://llm.datasette.io/) via a new [llm-bedrock](https://github.com/simonw/llm-bedrock) plugin. ([View Highlight](https://read.readwise.io/read/01jh5nagtr2dme28vft2gbygsr))
- The next big release was Llama 3.3 70B-Instruct, on December 6th. Meta claimed that this 70B model was comparable in quality to their much larger 405B model, and those claims seem to hold weight. ([View Highlight](https://read.readwise.io/read/01jh5narb51gknynzsw6y7tbt0))
- Llama 3.3 70B has started showing up from API providers now, including super-fast hosted versions from both [Groq](https://groq.com/new-ai-inference-speed-benchmark-for-llama-3-3-70b-powered-by-groq/) (276 tokens/second) and [Cerebras](https://cerebras.ai/inference) (a quite frankly absurd 2,200 tokens/second). If you haven’t tried Val Town’s [Cerebras Coder](https://cerebrascoder.com/) demo you really should. ([View Highlight](https://read.readwise.io/read/01jh5nb9fr2c2ycg7ra753ey04))
- I think the huge gains in model efficiency are one of the defining stories of LLMs in 2024. It’s not just the local models that have benefited: the price of proprietary hosted LLMs has dropped through the floor, a result of both competition between vendors and the increasing efficiency of the models themselves.
  Last year the running joke was that every time Google put out a new Gemini release OpenAI would ship something more impressive that same day to undermine them.
  The tides have turned! This month Google shipped three updates that took the wind out of OpenAI’s sails. ([View Highlight](https://read.readwise.io/read/01jh5ne400sdmx6hk0fy2qx8gt))
- The first was [Gemini 2.0 Flash](https://simonwillison.net/2024/Dec/11/gemini-2/) on the 11th of December, the first release in Google’s Gemini 2.0 series. The streaming support was particularly impressive, with [https://aistudio.google.com/live](https://aistudio.google.com/live) demonstrating streaming audio and webcam communication with the multi-modal LLM a full day before OpenAI released their own streaming camera/audio features in an update to ChatGPT. ([View Highlight](https://read.readwise.io/read/01jh5nehre0f9a4c6g8cdhw8g4))
- Then this morning Google shipped [Gemini 2.0 Flash “Thinking mode”](https://simonwillison.net/2024/Dec/19/gemini-thinking-mode/), their version of the inference scaling technique pioneered by OpenAI’s o1. I did *not* expect Gemini to ship a version of that before 2024 had even ended. ([View Highlight](https://read.readwise.io/read/01jh5net0s61da1k5nbwkb27b4))
- OpenAI have one day left in their [12 Days of OpenAI](https://openai.com/12-days/) event. Previous highlights have included the full o1 model (an upgrade from o1-preview) and o1-pro, [Sora](https://simonwillison.net/2024/Dec/9/sora/) (later upstaged a week later by Google’s [Veo 2](https://simonwillison.net/2024/Dec/16/veo-2/)), Canvas (with a confusing [second way to run Python](https://simonwillison.net/2024/Dec/10/chatgpt-canvas/)), Advanced Voice with video streaming and Santa, ChatGPT Projects (pretty much a direct lift of the similar Claude feature) and the 1-800-CHATGPT phone line. ([View Highlight](https://read.readwise.io/read/01jh5nf7zhcp0g2dn63wjh4mpk))
