---
author: "[[Tsvetan Tsvetanov]]"
title: '8 Powerful Steps for an AI-Assisted Development Workflow'
date: "2025-05-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://camplight.net/wp-content/uploads/2025/05/e38ce09b-7dbe-4920-89e0-4a5cd0d57c71.jpeg)

## Metadata
- Author: [[Tsvetan Tsvetanov]]
- Full Title: 8 Powerful Steps for an AI-Assisted Development Workflow
- URL: https://camplight.net/blog/ai-assisted-development-workflow/

## Highlights
- Thanks to resources like [Jeff Langr’s awesome Substack](https://substack.com/@jjlangr), and good practices by fellow XP practitioners I think we’ve come to the most productive AI-Assisted Development workflow. ([View Highlight](https://read.readwise.io/read/01jvt8mpfpdm8c1tffssyze6gv))
- This is an approach that doesn’t expect from the Agent to do big changes. On the contrary, it keeps the Human-Agent communication in a tight loop. The Human leads, the Agent follows. In AI-Assisted Development, the main responsibility stays with the Human. The Agent is there for support and to handle the boring stuff. ([View Highlight](https://read.readwise.io/read/01jvt8nbs43v84tzqdx7t9kd29))
- Step 1: The Human breaks down high-level requirements into vertical slices ([View Highlight](https://read.readwise.io/read/01jvt8mx0varmqz3tjnefy1ctt))
- What I’ve found is that AI-Assisted Development can’t happen in big steps. So what is the most logical small step? The [vertical slice](https://www.agilerant.info/vertical-slicing-to-boost-software-value/). This is an agile practice where you split each feature into small pieces that span the whole architectural layer – from the Database to the User Interface. Where each piece can be deployed on its own. Preferably, each piece should deliver some new value to the customer. ([View Highlight](https://read.readwise.io/read/01jvt8nsjjd5p9tbtqm9z317a4))
- Vertical slicing is an art of its own. And I can say it’s the single most important part of this workflow. If you nail it down properly, you’ll do AI-Assisted Development with ease. If you don’t, two things might happen:
  1. You’ll have to revert work and begin all over
  2. You’ll have to continue with a partially failing system
  Always prefer the first option as the second one can put you in a rabbit hole where you try to fix one problem after the other. Also, the smaller the slices, the safer your AI-Assisted Development will be. ([View Highlight](https://read.readwise.io/read/01jvt8pkmebz6mfx7x2k165c71))
- Step 2: The Human thinks about everything down to class-level design ([View Highlight](https://read.readwise.io/read/01jvt8ppa8kbj436rynzzke22a))
- Now that you have the vertical slices ready, you should focus on the design. In this case, the design consists of modules, classes, and how they interact. You shouldn’t have to focus on anything below that – let the AI handle it. ([View Highlight](https://read.readwise.io/read/01jvt8pxhrysacden9mprsvge8))
- The thing with AI-Assisted Development is that you trust the LLM with the low-level implementation details. You, on the other hand, focus on the grand design of things. You might object that this will lead to unmaintainable code in the future. However, maintainability doesn’t come from low-level details. If your classes and modules are split into easily digestible chunks with strong cohesion and loose coupling, you can always combine them in ways to extend the system. How these parts are implemented is mostly irrelevant as the AI will mostly deal with them and the tests will provide a safety net to ensure they work as intended. ([View Highlight](https://read.readwise.io/read/01jvt8qn0rymk6eykhgepv4b2f))
- Step 3: For each step, the Human instructs the Agent to implement it by providing exhaustive examples ([View Highlight](https://read.readwise.io/read/01jvt8qw7gav2y4q1exngvnxjh))
- When you have the high-level design ready, it’s time for the AI to jump in. But it has to do it properly.
  From my experience, the LLM doesn’t handle anything above the class-level well. You have to also be explicit in which modules and classes you want modified. This applies even in cases where you use editors like Cursor. ([View Highlight](https://read.readwise.io/read/01jvt8r3wpcee1bsk76dx1v109))
- Apart from that, AI-Assisted Development relies strongly on tests. Behavior-based tests are the main way you can ensure that the generated solution both adheres to the specification and doesn’t lead to regressions. If you’re feeling ambitious you can probably rely on [formal methods](https://www.hillelwayne.com/tags/formal-methods/) as well. I haven’t tried this yet, though. I’ll be happy to hear if you have! ([View Highlight](https://read.readwise.io/read/01jvt8rgdmg58jdbf7cmk6zytn))
- When writing the tests it’s crucial that you provide an exhaustive set of examples. These examples should be behavior-driven. They help the LLM immensely because they guide it toward what’s really needed. You can experiment with some negative examples as well to constrain the solution space. ([View Highlight](https://read.readwise.io/read/01jvt8rra9jafkbp2p9vxry6z7))
- Apart from test cases, you should provide a high-level overview of the purpose of the vertical slice. You can also provide some hints about implementation details you consider important. But that’s lower priority in AI-Assisted Development. ([View Highlight](https://read.readwise.io/read/01jvt8rxcdkjtr8xcjgjasjs15))
- Step 4: The Agent generates the solution ([View Highlight](https://read.readwise.io/read/01jvt8s8rkenw6gj7zjzyepdzp))
- Supplied with all this information, it’s time for the agent to generate the solution. If you’re using Cursor, just do this inside the Agentic chat. If you’re using an LLM outside of your editor, just provide it the sources of the relevant files. I prefer Cursor as it doesn’t interrupt my flow inside the editor. ([View Highlight](https://read.readwise.io/read/01jvt8scda5x4a9pvk73eh7kf0))
- This usually takes some time which you can use to rest. Try not to switch context at that stage or get distracted. AI-Assisted Development has some amount of wait time which can be pretty tedious. What I usually do is to monitor the output and verify it during generation as this saves me some time later. Another option is to just do a quick stroll or relax your eyes by looking in the distance. Whatever you do, avoid switching the context. ([View Highlight](https://read.readwise.io/read/01jvt8sk1bx4cm8qc5d8rb57en))
- Step 5: The Human validates the tests and optionally the implementation. They course-correct the Agent if needed ([View Highlight](https://read.readwise.io/read/01jvt8vm6yqssazj08jst1m0t9))
- Hate me as much as you want, but the most important output from the Agent are the tests. As I said above, they ensure that:
  1. The code behaves according to our intentions
  2. Subsequent steps in the process don’t lead to regressions ([View Highlight](https://read.readwise.io/read/01jvt8vz3x9syqc9f9f4ecv98n))
- So, when you get the output from this AI-Assisted Development step, you should validate the tests. Look for the following:
  1. Tests should exhaust the specification
  2. Tests should cover edge cases
  3. Tests should be maintainable by not over-relying on mocking and unnecessary abstractions
  4. Tests should fail for the right reasons. This is best validated by introducing mutation testing in your suite of tools ([View Highlight](https://read.readwise.io/read/01jvt8w7jwn6b7fg2msgfd9pnb))
- Once you’ve validated the tests you can optionally look at the implementation. I still do it and try to make it better. Even though it might be a big waste of time. This step is valuable in teams that haven’t adopted AI-Assisted Development fully. Otherwise, you might get some nitpicks on the resulting code. ([View Highlight](https://read.readwise.io/read/01jvt8wrszpye0mn5ars2cnr6p))
- Step 6: The Human runs the tests and makes sure they pass. If a test fails, the Human lets the Agent fix the implementation ([View Highlight](https://read.readwise.io/read/01jvt8x17x8cjcc2n35157462c))
- Once you are happy with the tests and implementation, you should make sure all the checks pass. Run the tests, and see the results. If a test fails, just copy the failure and feed it back to the Agent. Let it figure it out by itself. AI-Assisted Development is about letting the Agent do as much work for you as possible.
  Eventually, all tests will pass and you’ll have the vertical slice implemented. ([View Highlight](https://read.readwise.io/read/01jvt8x5h266vn538evky3bw4b))
- Step 7: The Human unstucks the Agent if needed or reconsiders the steps ([View Highlight](https://read.readwise.io/read/01jvt8xc0gzbac45rjxpj2md5f))
- Of course, the Agent can get stuck at some point in the AI-Assisted Development cycle. Despite all of your efforts it might not be able to resolve the issue by itself. In this case you should step in and fix it.
  In order for this to be successful, you have to understand what you’re doing. This is part of the engineering skills you need so you can do AI-Assisted Development successfully. Otherwise, you won’t be able to unwrangle the system out of the accumulating LLM-generated mess. ([View Highlight](https://read.readwise.io/read/01jvt8xjznyy1cdj19048rm4rn))
- Sometimes though, fixing it isn’t enough. The Agent has taken a totally wrong course of action. In this case, you should start over. For this to work well you have to adopt the habit of doing tiny commits, so reverting your previous work doesn’t move you too far behind. So, how do you start over? You have two options. ([View Highlight](https://read.readwise.io/read/01jvt8yc283j3dc1hy6b4kqhd9))
- The first option is to revert everything and try to implement the failing piece again. This works most of the time. On the next try you refine your instructions based on the failures you’ve observed. This usually leads to a better outcome. ([View Highlight](https://read.readwise.io/read/01jvt8z1zw46gznvdp2ad7nfv6))
- The second option is to start over by refining the steps themselves. You might’ve chosen the wrong vertical slices. They might be too big. Or they might not be user facing. Or they might not expose testable logic. This is the more damaging option as you might have to revert a lot of work. That’s why it’s really important to think hard of your vertical slices when doing AI-Assisted Development. ([View Highlight](https://read.readwise.io/read/01jvt8z61f37way0r23vh34fes))
- Step 8: The Human moves to the next slice ([View Highlight](https://read.readwise.io/read/01jvt8zcey036y8svwf9d7c687))
- After all the tests pass and you’re happy with the overall result, you should move to the next slice of work. This can be a good place to reassess whether the plan is still valid. Maybe some slices are not necessary. Or have to be rearranged. Or there’s a new slice that you’ve thought of. Whatever it is, think carefully as choosing the right slice usually determines the success of the next steps in the process. ([View Highlight](https://read.readwise.io/read/01jvt8zhaqnwn7hhc1wj2yan8g))
