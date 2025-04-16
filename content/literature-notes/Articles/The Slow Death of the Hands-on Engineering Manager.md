---
author: "[[Anton Zaides]]"
title: 'The Slow Death of the Hands-on Engineering Manager'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F35acf64f-f6c2-47d3-b1dd-08f6d2925e26_767x692.png)

## Metadata
- Author: [[Anton Zaides]]
- Full Title: The Slow Death of the Hands-on Engineering Manager
- URL: https://zaidesanton.substack.com/p/the-slow-death-of-the-hands-on-engineering?utm_source=substack&utm_campaign=post_embed&utm_medium=email

## Highlights
- The slow death of the hands-on manager
  There are 2 types of engineering managers:
  1. Super hands-on - they take tasks in every sprint, know the codebase, and help the team fix hard bugs.
  2. Full-time managers - attending meetings all day, having 1:1s, zero coding time.
  The sad truth is that almost all of us start from type 1, and slowly become type 2:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F35acf64f-f6c2-47d3-b1dd-08f6d2925e26_767x692.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F35acf64f-f6c2-47d3-b1dd-08f6d2925e26_767x692.png) ([View Highlight](https://read.readwise.io/read/01jh2tcn8nvqdxvy4h05pbn1a2))
- I’ve been through that transition **twice**. When you are first promoted, you are close to the code. You were responsible for big parts of the codebase, and it’s easy to stay a part of the sprint.
  For the first couple of years, you code 30-70% of your time, with a slow decrease as your team grows.
  Then comes a sprint where you just have too many things. Tons of meetings, a new project you are leading, the usual stuff. So for the first time, you decide to not take on any coding task. ([View Highlight](https://read.readwise.io/read/01jh2tczv9kf4xh82xa3tnt7ej))
- One sprint becomes 2, then 5, then 10. Suddenly a year went by and you barely opened your IDE. Now it’s not a question of having no time - it’s a habit you have lost. Even the most busy engineering managers can find 2-3 hours a week to do some coding.
  Getting back into the game is hard. You tell yourself “I can’t do anything useful in 2 hours. I’ll get into the zone and I will be distracted anyway. Better go over that document one more time”. ([View Highlight](https://read.readwise.io/read/01jh2tdhg7h8b1q68039qrb6bn))
- Getting back to coding
  In the last couple of months, I was able to write **more** code with a simple change: choosing very specific tasks.
  I don’t take anything that is in the critical path, or that someone else depends on.
  I choose one of 3 options:
  1. Something that’ll help my engineers.
  2. Something I’ll learn from.
  3. Something that will help the company and no one else will ever do.
  Today our focus is on number 1: **why you should do simple tasks that you’ll developers will thank you for.** ([View Highlight](https://read.readwise.io/read/01jh2te1y7ey5eg2sn3e18tk20))
- Build your internal docs ChatGPT
  Avi is my colleague, a fellow engineering manager. He is one of the first employees in Taranis, and has been in the company for 8 years.
  Most of his days, he is interrupted at least 4–5 times with some random question about legacy parts only he remembers… So he finally decided to be a responsible adult and write down all those answers. ([View Highlight](https://read.readwise.io/read/01jh2te9mk16mab8zd467fnvfh))
- Guess what? Nobody was reading his documents! **It’s not that people were lazy, they just couldn’t find them or didn’t even know they existed.**
  So a couple of months ago, he decided to solve it once and for all. He wrote an internal chatbot that lets everyone in our company simply *ask* questions, and receive correct answers based on all our internal knowledge.
  He used **an existing opensource repo** (so you don’t need any frontend knowledge for that!), and the end result looks like this:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fee5bdd11-4cf8-4f28-a3f1-e430eccc0a10_728x413.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fee5bdd11-4cf8-4f28-a3f1-e430eccc0a10_728x413.png) ([View Highlight](https://read.readwise.io/read/01jh2tegq3106s2mczs2xy1s4y))
- So what else can you do?
  • Fix bugs that nobody prioritizes
  • Address technical debt
  • Or my favorite: automating **the most annoying process for your engineers**. ([View Highlight](https://read.readwise.io/read/01jh2teyfz312xxtvddnw2ye6h))
- A few weeks ago, one of my team members raised in a retrospective how awful was the process of copying data from production to QA buckets. There was some Jenkins job, but it could only copy data in huge chunks, and could take a few hours.
  Long story short, I created a simple UI (using ChatGPT, I’m horrible with CSS), and wrote some Python backend to automate the process. Now they can just input the specific criteria for the copy, and they receive an email once it is done (through a SendGrid integration).
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08b88300-357e-4a35-a668-963470e72aef_814x782.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08b88300-357e-4a35-a668-963470e72aef_814x782.png)
  These types of projects have a double benefit:
  • It will improve the lives of your engineers
  • AND teach you something new ([View Highlight](https://read.readwise.io/read/01jh2tf7nzh4vswrrfjxvmwaym))
