---
author: "[[Cloudflare Blog]]"
title: 'Introducing Clairic, a New System One Class of Extraction Models'
date: "2026-10-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.cloudflare.com/_emdash/api/media/file/01M5AKCBMF8BCH80YN3A4DG9FH.png)

## Metadata
- Author: [[Cloudflare Blog]]
- Full Title: Introducing Clairic, a New System One Class of Extraction Models
- URL: https://blog.cloudflare.com/clairic-extraction-model/

## Highlights
- When System One models were announced by TypeSafe a month ago, it took the industry by storm. As referenced by [TypeSafe in their blog](https://typesafe.ai/blog/introducing-system-one-models-and-jev) and defined by Daniel Kahneman’s book *Thinking, Fast and Slow*, a System One model should be fast and precise, which contrasts a System Two model that is capable of deliberate reasoning (like LLMs). With this, TypeSafe introduced Jev — a model that is purpose-fit for a specific use case, and priced accessibly given its niche domain. It excelled where LLMs failed, helping users make decisions based on probabilities and well-typed outputs. The introduction of Jev prompted people to start thinking about a new class of models that were not LLMs and how to integrate them into their workflows.
  We were inspired by the concept of System One models and started thinking about other tasks where LLMs are inefficient. There are many structured-output calls going to frontier LLMs today with the same shapes again and again: *What's the invoice total? When was this delivered? How many days late is it? What will this repair cost? What will traffic look like over the next 24 hours?* None of these have answers you can list out in advance, which is needed for a decision model to give probabilities against. That led us to the class of models we're introducing today: System One extraction models.
  [Copy link](https://blog.cloudflare.com/clairic-extraction-model/#introducing-system-one-extraction-models) ([View Highlight](https://read.readwise.io/read/01m5c2w9h964n83rrwhxzcfrq3))
- Until now, every System One model has been a decision model: Jev and [Clef](https://blog.cloudflare.com/clef-decision-models/) take an input state and a list of questions and give probabilities against the inputs and your listed questions. [Clairic](http://developers.cloudflare.com/workers-ai/models/clairic/?cf_page=clairic-extraction-model%2F) is the first model in a new class: System One extraction models. It is still fast, typed, and cheap, but it answers with **values** directly extracted from the input, computed from it, or predicted beyond it.
  Most model tasks ask for one of three kinds of output: a number, a choice from a fixed set, or open-ended text. Clairic handles the first, returning numbers with an 80% range, and also pulls typed values like names, dates and lists out of the input. Clef handles the second: it picks among options and returns a probability for each. LLMs handle the third. We call Clairic and Clef System One models because they answer in a single pass, without reasoning or generating tokens. They charge only for input and typically respond in under a second, while an LLM that reasons through the same step takes several seconds. ([View Highlight](https://read.readwise.io/read/01m5c2z415bdg9t3twvhzrv9kq))
- An extraction model can return:
  • **Extracted values:** Text copied from the input, such as a name, an order ID or a description. Each one comes back as a span with its character offsets and a confidence score.
  • Including, **computed values:** Numbers, dates, times, datetimes, durations and lists, read from the input or worked out from it. They follow the rules of their type (for example, two decimals for cents) and come with a confidence score.
  • **Estimated values:** Values the input doesn't state but gives evidence for. Each one comes back as a distribution inside the bounds you declare, on the grid you specify, with a median and an 80% interval.
  • **Forecasted values:** Future values of a series, one estimate per step ahead, each with its own 80% interval.
  ![](data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAA9/fz8/Pv6+rm5+bj6unn7u3r7Orp5OPg+fn19fby7u7q6+rn7u3r8fDu7u3r5+bj+/z39/j08fHu7u3r8e/u8/Hw8e/t6ujn+/z49/j18fHv7u3s8e/u8/Hw8e/u7Oro+Pn29fbz7u7s6+ro7evq8O7t7+3s6unn9PXy8PHu6Ojm5OPh5+Xk6+no6+np5+bl8PLv7O3q4+Pg3tzb4d/e5uTk5+bm5OPi7/Du6uvo4eDe3NrY39zc5eLi5uTk4+Lh)![](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01M5AKCDMY87RYM44AD8D57A3J.png&w=715&h=308&f=webp&fit=cover&position=center) ([View Highlight](https://read.readwise.io/read/01m5c2z75r8pdjn2fj90xmvw0r))
- And because it generates no tokens, it can't produce a mistyped answer or “hallucinate” in the same way as an LLM (though it can, of course, make mistakes). Outputs are a value of the type you asked for, or null when the model fails to find an answer in the input. It also comes with confidence scores against the outputs to help you evaluate if it is appropriate to trust the model or to take a second look.
  Here’s how extraction models fit into the landscape of System One and System Two models:
  System One: Extract
  System One: Decide
  System Two
  Example models
  Clairic
  Jev, Clef
  GPT, Claude, Gemini, DeepSeek
  Sampling
  One parallel pass
  One parallel pass
  One token at a time
  Purpose
  Predict values
  Make decisions
  Write and reason
  ML framing
  Regression and extraction
  Classification
  Generation
  Thinking mode
  System 1: fast, one pass
  System 1: fast, one pass
  System 2: slow, deliberate
  Output
  Typed values: spans, numbers, dates, times, lists, distributions, with calibrated probabilities
  Typed decisions: options with calibrated probabilities
  Free-form strings
  Output space
  Continuous, but typed and bounded by your schema
  A finite set of options you list
  Anything
  What it answers
  What's the amount? When does it happen? How much will it be?
  Which category is it? Is it legitimate? Which action should we take?
  Why did it happen? How should we approach it? Can you fix it?
  Output always a valid response?
  Yes: every answer is a value of its declared type (or null), inside your bounds
  Yes: answers are always one of your options
  No: strings must be parsed and checked
  Together, these models can work together in unison to help you get closer to parsing through real-world data, making decisions on inputs, and then taking actions. Extraction models turn raw input into typed values, decision models turn values into decisions, and LLMs turn decisions into words. ([View Highlight](https://read.readwise.io/read/01m5c2zhmhvhj76s01kcds212c))
- How a request works
  Clairic is designed differently than an LLM. Similar to a decision model, it only processes input tokens with a single forward pass, and thus has no charge for output tokens. It is much faster, cheaper, and more accurate than an LLM for certain use cases.
  A request is a `state` (the text to read, plus up to four optional images) and a map of typed `fields`. You name each field, give it a type and optional plain-language `instructions`, and get back one typed answer per field, all from one parallel pass. There is no reasoning and no output tokens – everything computes in a single forward pass, which means it is both fast and cheap.
  Type
  Returns
  `text`
  A specific span of the input, with its offsets
  `number`
  A number read or computed, honoring `integer` and `decimals`
  `date`, `time`, `datetime`
  Calendar dates and valid times, in ISO form
  `duration`
  A length of time in the unit you choose
  `list`
  Matching text, number or date, in input order
  `estimate`
  A distribution inside your `[min, max]`, on your `step` grid, linear or log scale.
  `forecast`
  One estimate per future step of a series
  Every scalar answer comes with `p_null` (the probability that the value isn’t in the inputs) and `confidence`. Every `estimate` answer comes with a median and an 80% interval (`p10` to `p90`), plus all 99 percentiles on request. There's no limit on the number of fields: if they don't fit beside the input in one pass, the server splits them into parallel passes that each see the whole input, then merges the answers. ([View Highlight](https://read.readwise.io/read/01m5c2zq8p9gq8es3vr741x2g6))
- Extraction is probably the most common job handed to LLMs today: "return the invoice number, vendor and due date as JSON." It works most of the time, but the failure modes are hard to catch. The output may not be valid JSON, a digit can be misread as it's generated, and once a text excerpt comes back, there's no way to trace it to where it appeared in the source. Most people build extraction pipelines to combat this, with multiple layers of parsing, schema validation, retries and spot checks. On top of that, you pay for reasoning and output tokens on every field of every document.
  Clairic operates differently; it doesn’t generate text answers. Instead, you get:
  • **Values** extracted from your input, so an answer is grounded.
  • **Computed values**, so it can parse through unstructured data without pre-sanitizing it.
  • **Character offset spans**, so you can reference where in the input the data was.
  • **Confidence labels**, so you can determine which values need a second look.
  • **A strongly typed output**, so numbers and dates are formed under the rules of their type (e.g., a cents field has two decimals).
  • **Handling for null values**, where a missing field returns with `null` as an answer (along with an estimated probability of null and a guess).
  • **Cheaper and faster answers**, because every field is answered in the same parallel pass. So asking for thirty fields costs about the same as asking for three. ([View Highlight](https://read.readwise.io/read/01m5c2zzacm84gzppzdjwb1j46))
- Some values aren't in the input at all, but the input carries evidence for them. For example, values might not be in plain text but can be discerned from values around it. If you ask an LLM for an estimation, you usually get a single number with no sense of how sure the model is. It will make safe guesses or hallucinate, or reason its way around the answer. If you land on an estimate, any downstream processing can't tell a confident $180 from an unconfident $180, so it can't help you decide what is appropriate to automate in the circumstances. It is also a lot slower and more expensive to do reasoning through LLMs.
  A decision model can approximate an estimate by choosing among buckets ("under $100", "$100–500", …), but buckets are coarse, every bucket adds input tokens, and each new category adds more sources of confusion for the model during its decision making process.
  Clairic returns a **distribution** over the range you declare: a point value, a median, an 80% interval, and every percentile on request. The estimate is designed to fall inside your bounds, so there's nothing to clamp or round afterward. The width of the interval reflects data confidence: a narrow range signals high certainty, while a wide range indicates low certainty, information you can use to route another check. ([View Highlight](https://read.readwise.io/read/01m5c30fefhzrxkm534daj9v3d))
- An example: Forecasting values
  Forecasting values in a time series is quite hard for generalized models — it usually means you have to either build a specific pipeline per metric (parse the data, fit a model, tune it, deploy it), or you paste 36 months of numbers into an LLM and ask for the next three. The first is accurate but really expensive and time-consuming to set up for every new series. The second is easy, but you get point forecasts with no intervals, forecasts that shift depending on how the prompt is worded, and answers with limited confidence.
  Clairic sits between the two — it is not claiming to replace a dedicated time-series model, but it is a little faster and cheaper than your regular LLM. A `forecast` field takes the history as plain text in `state` and returns, for every step ahead, a value and an 80% interval, inside the bounds you declare. It reads the history the way you already have it, whether that's a CSV export, a pasted dashboard, or rows mixed with notes, and may often work with no need to clean up your data beforehand. ([View Highlight](https://read.readwise.io/read/01m5c31bc74yga6gmmxzq3qh5b))
- Thinking fast and slow
  These models are designed to fit alongside your existing agentic workflows. An extraction model predicts values, a decision model decides what to do with these values, and an LLM takes action with them. It is a perfect marriage between System One and System Two models. It bridges the existing gap, where you either have to manually extract data for LLMs, or have an LLM parse through messy data (which is costly, time-consuming, and can lead to hallucinations). With System One extraction models, you can work with real-world data with more speed, efficiency, and precision. ([View Highlight](https://read.readwise.io/read/01m5c35sdybs5p9xrq2v7m7h4h))
- Each step gets cleaner input than the one before. Clef decides from a five-line summary of typed values instead of a free-form email, which can also be susceptible to prompt injection. The LLM never sees the email, only the decision and the predictions it needs, so there are fewer numbers for it to misuse. Every step is typed and auditable, and only one step generates text. In the all-LLM version of this pipeline, all three steps are generative calls, and every value in the reply has to be checked by hand.
  We ran this pipeline against an all-LLM version with GLM-5.3 writing the reply in both. In the all-LLM version, GLM-5.3 also does the extraction and the decision, from the same email, policy and prompts:
  Clairic → Clef → GLM-5.3
  GLM-5.3 for every step
  Latency, end to end
  19.3 s
  61.7 s
  1. Extract
  Clairic: 0.46 s
  GLM-5.3: 16.1 s
  2. Decide
  Clef: 0.22 s
  GLM-5.3: 21.9 s
  3. Reply
  GLM-5.3: 18.6 s
  GLM-5.3: 16.4 s
  Input tokens
  701 ($184 per million claims)
  390 ($546 per million claims)
  Output tokens
  1,329 ($5,848 per million claims)
  2,544 ($11,194 per million claims)
  Cost per million claims
  $6,032
  $11,740
  The cascade finished in 19.3 seconds against 61.7 seconds: **69% less time, or about 3.2 times faster**. Clairic and Clef handled extraction and the decision in under a second combined, where GLM-5.3 took 38 seconds for the same two steps. It also **costs 49% less** to use the cascaded pipeline vs the all-LLM pipeline. With GLM, both pipelines got the facts and the decision right in every run, but Clairic's repair estimate was identical each time, while GLM-5.3's changed on every run ($250, $250 and $220, with different ranges each time ([View Highlight](https://read.readwise.io/read/01m5c3614j5qdyh48vtnxw95b7))
- Today, we're releasing a hosted endpoint for Clairic on Workers AI. We intend to release the model with open weights soon. We wanted to take the time first to introduce the concept of a System One extraction model, so you can start thinking about how this class of model would fit into appropriate workflows.
  The current endpoint is an early checkpoint and we expect it to get better. Here are our early impressions:
  • **Reading is strong, but multi-step arithmetic isn't yet.** One- and two-step calculations (totals, differences, conversions, date arithmetic) seem reliable. Longer chains of dependent steps are hard for any one-pass model without a scratchpad. The same goes for aggregating across many rows of a table. At least for now, have Clairic predict the value and let code do the math.
  • **Estimates need evidence.** Clairic estimates best from comparables, history, or descriptive text in the input. Asking it for a value it has no evidence for may be limited in specificity.
  • **Calibration is measured, not guaranteed.** Intervals are trained to be calibrated and are on most held-out sets, but they can run narrow on unfamiliar data.
  • **Forecasting is basic**. The model is not designed to accurately replace or predict time-series models that are trained on specific data. You should use it where appropriate, such as non-critical, general pattern matching, not detailed long-horizon forecasting.
  • **Use confidence.** The architecture makes every answer well formed, not necessarily correct. Use `confidence`, `p_null` and the intervals to decide what to automate (in an appropriate workflow context) and what to send off for additional review.
  We'll keep working on the arithmetic, estimation and forecasting sides of the model with each checkpoint. After some more work, we plan to release the model open-weights for everyone to play around with as well. ([View Highlight](https://read.readwise.io/read/01m5c37t22j50fhy0mejrme99h))
