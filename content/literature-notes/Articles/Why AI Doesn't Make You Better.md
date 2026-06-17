---
author: "[[Miguel Otero Pedrido]]"
title: 'Why AI Doesn''t Make You Better'
date: "2026-04-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://images.unsplash.com/photo-1746286720965-cccf57e56c68?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Metadata
- Author: [[Miguel Otero Pedrido]]
- Full Title: Why AI Doesn't Make You Better
- URL: https://theneuralmaze.substack.com/p/why-ai-doesnt-make-you-better

## Highlights
- ![](https://substackcdn.com/image/fetch/$s_!Mk1O!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93152bd2-eb29-453e-a874-7356c5a63e14_2816x1536.png) ([View Highlight](https://read.readwise.io/read/01kpp8ft451p7e6ect9e75ctw0))
- Imagine picking up a guitar. You've been playing for a year, you know a handful of chords, and you make mistakes.
  Now someone hands you an amplifier. Suddenly you sound louder, you fill the room, you feel like more. But your mistakes are louder too. The amplifier didn't teach you anything — **it just broadcasts whatever was already there, good and bad.**
  > That's the most honest description I have of what AI does for you at work. **It amplifies you.** Your strengths and your weaknesses, in equal measure. ([View Highlight](https://read.readwise.io/read/01kpp8fnr250jgvsszrqqgcdvn))
- On its surface, what AI can do is straightforward: **it reads and writes for you.**
  When it reads, it can gather context from the tools you use to track work — Jira tickets, technical documentation, codebases, legal contracts. When it writes, it can produce almost anything you ask for, in roughly the style you ask for it. None of that sounds catastrophic.
  But there are a few things worth understanding about how it does this. ([View Highlight](https://read.readwise.io/read/01kpp8g69nqkd4vrpkmcbhrfbk))
- **➤ It hallucinates**
  This is the technical term for when a model states something confidently that isn't true. Some hallucinations are obvious. Many aren't — **especially if you don't know the subject deeply yourself**. Models keep improving, but the problem hasn't gone away, and the more fluently something is written, the easier it is to miss what's wrong with it. ([View Highlight](https://read.readwise.io/read/01kpp8gca5by14zzj6cfb2bgep))
- **➤ It blends your style with its errors**
  A common way to reduce hallucinations is to give the model better examples — show it how you write, how you reason, what your previous work looks like. The model then imitates those examples closely enough that the output starts to sound like you. This is useful. **It's also the reason errors become harder to catch**: the writing feels familiar, so you read it with less skepticism than you should. ([View Highlight](https://read.readwise.io/read/01kpp8ggrwf6h3gr58rgp7hndj))
- **➤ It's designed to make you like it**
  This one is structural, not incidental. Large language models are trained using a process called **[Reinforcement Learning from Human Feedback (RLHF)](https://theneuralmaze.substack.com/p/the-rlhf-landscape-aligning-llms)**, where human raters evaluate responses and the model is rewarded for outputs that people prefer. In practice, this means models are optimized to sound helpful, agreeable, and confident — not necessarily to be honest when honesty is uncomfortable. Chip Huyen covers this tension well in AI Engineering — the models aren't incentivised to tell you what you don't want to hear. **Keep that in mind**. ([View Highlight](https://read.readwise.io/read/01kpp8gsyqdt6b5mx17whz2dn2))
- You might read all of that and think: fine, but these are manageable trade-offs. And you'd be right, if reading and writing were really all that was at stake. **But they're not.**
  **AI Evaluation is one of the hardest unsolved problems in the field** — and the main reason is that **most real tasks are open-ended**. There's no single correct reply to an email, no objectively best way to structure an argument. Humans struggle to rank these things consistently, and models do too. The tasks that are easiest to evaluate are the ones with a clear right answer. The tasks that matter most, usually aren't. ([View Highlight](https://read.readwise.io/read/01kpp8h4xrry8k2rn6f44wrd9a))
- Let me make this concrete. Say **you** and **your project manager** agree that you need to build a new data pipeline to populate a dashboard. **Two engineers go off to work on it.**
  **Engineer A** starts by drafting requirements.
  How will users consume the data? What freshness do they need? What happens when a day is missing — do you skip it, interpolate, show an error? **Engineer A asks uncomfortable questions**, goes back to stakeholders, probably gets told they're overthinking it, and pushes anyway. Some edge cases get resolved. Some get explicitly left out. **Engineer A knows exactly why**.
  **Engineer B** has a transcript of the kickoff meeting, converts it to a markdown file, feeds it to an AI coding agent, connects a Jira plugin, reviews the output after a couple of iterations, and marks the ticket done when nothing is visibly broken.
  The pipeline ships. Three weeks later, a **stakeholder** asks:
  > ***How are you calculating the average when a day is missing?***
  **Engineer B doesn't know**. Not just the answer — Engineer B doesn't know that the question was ever asked, or that it matters. ([View Highlight](https://read.readwise.io/read/01kpp8j0twt7wpvwvscnrkej90))
- here's a name for what Engineer B has accumulated here: **comprehension debt**.
  > Addy Osmani defines it as the **growing gap** between how much code exists in your system and how much of it any human genuinely understands.
  What makes it more dangerous than ordinary technical debt is that **it breeds false confidence** — the codebase looks clean, the tests are green, and the reckoning arrives quietly, usually at the worst possible moment.
  Engineer B can't learn from not knowing, because Engineer B never had to think about it in the first place. The question was never part of Engineer B's process. It was dissolved by the convenience of the tool.
  > What makes Engineer A valuable here isn't what gets built — it's what gets questioned first. ([View Highlight](https://read.readwise.io/read/01kpp8jnts23h943st03s52wft))
- It's easy to fall into what I'd call **outsourcing your judgment**.
  You take all your tickets, all your meeting notes, all your project updates, feed them into various tools and AI contexts, and let the system generate a plan.
  The problem is that **AI needs clarity to be useful** — and producing that clarity is exactly the work you've just handed away. This is also where cognitive load becomes relevant: the mental effort of breaking down a vague problem, resolving ambiguity, and making trade-offs explicit is not overhead — it's the thinking itself ([View Highlight](https://read.readwise.io/read/01kpp8kffvdfcapw2akz15c82g))
- **complexity you don't consciously manage ends up managing you.**
  I've written before about how **the highest value a senior engineer brings is often the ability to say no** — to scope ruthlessly, to identify what doesn't need to be built, to name the edge case that would invalidate the whole approach. That judgment doesn't come from processing more information faster.
  > It comes from sitting with a problem long enough to understand it.
  Which brings me to what I think is the real risk — and it's not that AI will do your job badly. It's that it might do it well enough that you stop noticing what you're no longer doing.
  > A mistake made and understood by a human is worth more than a success achieved by AI that no one can explain. ([View Highlight](https://read.readwise.io/read/01kpp8m5y0twyym3j8ww97tcv9))
- Not because failure is good, but because understanding is what compounds. It's what you carry into the next problem. When AI absorbs the failure — or avoids it silently — you don't get that. You get the output without the understanding that should have come with it.
  Go back to Engineer A and Engineer B: six months later, the dashboard has a new requirement. Engineer A can reason about the implications immediately, because Engineer A built a mental model of the system while building the system itself. Engineer B has to re-read the code like a stranger reading someone else's work.
  **Because in a meaningful sense, it is.** ([View Highlight](https://read.readwise.io/read/01kpp8mphrktdrth4xsc4wg44n))
- The tech industry has spent years mythologising the **10x engineer** — the person who ships complex projects faster than anyone else.
  What often gets left out of that story is how. It wasn't magic. It was **accumulated context**: deep knowledge of the organisation, the codebase, the failure modes, the political landscape, the customers.
  > These engineers were fast because they'd already done the thinking, in advance, over years.
  Boris Cherny, creator of Claude Code, talks about something like this in Ryan Peterman's podcast — the transition from Facebook to Instagram, working in rural Japan, moving fast in a new environment.
  The throughline is that speed came from understanding, not from skipping understanding. He also makes a point about common sense — and with the way of working I've been describing, common sense is exactly what gets eroded first. **You're executing faster than you're thinking.** ([View Highlight](https://read.readwise.io/read/01kpp8ncyqt7tvxpa7h4knhryc))
- Here's the uncomfortable data point:
  > If AI were genuinely making engineers dramatically more productive, we'd expect to see a measurable surge in software being produced.
  [![](https://substackcdn.com/image/fetch/$s_!2Yon!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c4e5c50-81ee-4574-a8ef-cc10d747a5f5_1484x883.png)](https://substackcdn.com/image/fetch/$s_!2Yon!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c4e5c50-81ee-4574-a8ef-cc10d747a5f5_1484x883.png)
  Researchers at Answer.AI looked at PyPI — Python's central package repository — and found no obvious increase in the rate of package creation post-ChatGPT, and only a marginal increase in update frequency across the board. The 10x productivity story is loudest among people who are already deeply technical and working on AI tools themselves. For everyone else, the signal is much quieter. ([View Highlight](https://read.readwise.io/read/01kpp8nps13sx9xmdbne0587kn))
- What is happening — and this is the paradox — is that AI makes execution feel cheaper, so we do more of it. More tickets, more pipelines, more features. But the thinking that should precede execution — the requirement-drafting, the edge-case-questioning, the "should we even build this" conversation — that's still expensive.
  And because it's expensive, and because AI can make it feel optional, people skip it. They get more done. They understand less. **They move faster in the wrong direction with more confidence than ever before.**
  This is the **Productivity Paradox**: increased output leading not to success, but to more work, more rework, and eventually more anxiety.
  > You're not accumulating capability. You're burning through it. ([View Highlight](https://read.readwise.io/read/01kpp8p6sywrbdss3hwc8mhm1h))
- If you've followed this far, you can probably see how something marketed as automation of your most tedious tasks can quietly become something else: a way of hollowing out the parts of your job that actually engaged you. ([View Highlight](https://read.readwise.io/read/01kpp8pg632bmp01xqp12wk8aa))
- Paul Millerd, in The Pathless Path, cites Sebastian Junger's observation about soldiers who wanted to return to war zones despite the trauma:
  > *"Humans don't mind hardship, in fact they thrive on it; what they mind is not feeling necessary.* ([View Highlight](https://read.readwise.io/read/01kpp8pqkrecqvdrhg4fq07awj))
- The hard parts of your job — the uncomfortable question, the requirement you have to fight for, the problem you have to sit with — those are what make the work feel like yours. When you hand those to AI, you're not just offloading effort. **You're offloading the thing that made you feel necessary.**
  What's left? The parts that can't be automated — the mandatory syncs, the status updates, the process overhead. Tasks you were already indifferent to, now experienced by someone who's lost their connection to the underlying work.
  The outcomes feel like they belong to the AI. The meetings feel like they belong to someone else. **You're present for all of it and invested in none of it**. Those are recognisable symptoms of **burnout** — detachment from your work, loss of ownership, a creeping sense that your responsibilities belong to someone else. ([View Highlight](https://read.readwise.io/read/01kpp8q35d55gmwx2nypf3wc30))
- > So you end up **more anxious**, **more burned out**, and **less satisfied** — despite being, by every surface metric, more productive!
  Rebecca Johnson puts it well: **we all prefer comfortable lies to unpleasant truths.**
  And the easiest person to fool is yourself. **LLMs are products**. They're designed to be used, to be liked, to be opened again tomorrow. They're not going to volunteer the uncomfortable truth that you'd be better off struggling through this one on your own. They want to help.
  > And "wanting to help" and "actually helping" are not always the same thing. ([View Highlight](https://read.readwise.io/read/01kpp8qm3a0c1q94wg6h30k51z))
- I don't think this is the only way to use AI. I use it myself, for things I've consciously decided I don't need to own. But the choice has to be conscious. So the next time you're about to open a chat window and paste in a problem — **pause and ask**:
  > *What's the part of this where I'd actually grow?*
  And then, maybe, leave that part out of the prompt.
  The amplifier will still be there. **Just make sure you've learned the chords first.** ([View Highlight](https://read.readwise.io/read/01kpp8qy4x9tvden8gcaez1688))
