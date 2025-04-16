---
author: [[Hamel Husain]]
title: "Creating a LLM-as-a-Judge That Drives Business Results"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://hamel.dev/blog/posts/llm-judge/images/cover_img.png)

## Metadata
- Author: [[Hamel Husain]]
- Full Title: Creating a LLM-as-a-Judge That Drives Business Results
- URL: https://hamel.dev/blog/posts/llm-judge/

## Highlights
- The Problem: AI Teams Are Drowning in Data[](https://hamel.dev/blog/posts/llm-judge/#the-problem-ai-teams-are-drowning-in-data)
  Ever spend weeks building an AI system, only to realize you have no idea if it’s actually working? You’re not alone. I’ve noticed teams repeat the same mistakes when using LLMs to evaluate AI outputs:
  1. **Too Many Metrics**: Creating numerous measurements that become unmanageable.
  2. **Arbitrary Scoring Systems**: Using uncalibrated scales (like 1-5) across multiple dimensions, where the difference between scores is unclear and subjective. What makes something a 3 versus a 4? Nobody knows, and different evaluators often interpret these scales differently.
  3. **Ignoring Domain Experts**: Not involving the people who understand the subject matter deeply.
  4. **Unvalidated Metrics**: Using measurements that don’t truly reflect what matters to the users or the business.
  The result? Teams end up buried under mountains of metrics or data they don’t trust and can’t use. Progress grinds to a halt. Everyone gets frustrated. ([View Highlight](https://read.readwise.io/read/01jbf39y18c4zgfmb7sdpnsyer))
- Step 1: Find *The* Principal Domain Expert[](https://hamel.dev/blog/posts/llm-judge/#step-1-find-the-principal-domain-expert)
  In most organizations there is usually one (maybe two) key individuals whose judgment is crucial for the success of your AI product. These are the people with deep domain expertise or represent your target users. Identifying and involving this **Principal Domain Expert** early in the process is critical. ([View Highlight](https://read.readwise.io/read/01jbf3a8adh7qh3scs3jfeybzr))
- **Why is finding the right domain expert so important?**
  • **They Set the Standard**: This person not only defines what is acceptable technically, but also helps you understand if you’re building something users actually want.
  • **Capture Unspoken Expectations**: By involving them, you uncover their preferences and expectations, which they might not be able to fully articulate upfront. Through the evaluation process, you help them clarify what a “passable” AI interaction looks like.
  • **Consistency in Judgment**: People in your organization may have different opinions about the AI’s performance. Focusing on the principal expert ensures that evaluations are consistent and aligned with the most critical standards.
  • **Sense of Ownership**: Involving the expert gives them a stake in the AI’s development. They feel invested because they’ve had a hand in shaping it. In the end, they are more likely to approve of the AI. ([View Highlight](https://read.readwise.io/read/01jbf3afvmdm9gr4e5w9y63rjk))
- Many developers attempt to act as the domain expert themselves, or find a convenient proxy (ex: their superior). This is a recipe for disaster. People will have varying opinions about what is acceptable, and you can’t make everyone happy. What’s important is that your principal domain expert is satisfied.
  **Remember:** This doesn’t have to take a lot of the domain expert’s time. Later in this post, I’ll discuss how you can make the process efficient. Their involvement is absolutely critical to the AI’s success. ([View Highlight](https://read.readwise.io/read/01jbf3b27nq58v652d60yjxepd))
- Step 2: Create a Dataset[](https://hamel.dev/blog/posts/llm-judge/#step-2-create-a-dataset)
  With your principal domain expert on board, the next step is to build a dataset that captures problems that your AI will encounter. It’s important that the dataset is diverse and represents the types of interactions that your AI will have in production.
  Why a Diverse Dataset Matters[](https://hamel.dev/blog/posts/llm-judge/#why-a-diverse-dataset-matters)
  • **Comprehensive Testing**: Ensures your AI is evaluated across a wide range of situations.
  • **Realistic Interactions**: Reflects actual user behavior for more relevant evaluations.
  • **Identifies Weaknesses**: Helps uncover areas where the AI may struggle or produce errors. ([View Highlight](https://read.readwise.io/read/01jbf3bkaw2fx2qz4r94m4497j))
- Dimensions for Structuring Your Dataset[](https://hamel.dev/blog/posts/llm-judge/#dimensions-for-structuring-your-dataset)
  You want to define dimensions that make sense for your use case. For example, here are ones that I often use for B2C applications:
  1. **Features**: Specific functionalities of your AI product.
  2. **Scenarios**: Situations or problems the AI may encounter and needs to handle.
  3. **Personas**: Representative user profiles with distinct characteristics and needs. ([View Highlight](https://read.readwise.io/read/01jbf3bwnjy59pdbtxn2dnkp5v))
- Generating Data[](https://hamel.dev/blog/posts/llm-judge/#generating-data)
  To build your dataset, you can:
  • **Use Existing Data**: Sample real user interactions or behaviors from your AI system.
  • **Generate Synthetic Data**: Use LLMs to create realistic user inputs covering various features, scenarios, and personas.
  Often, you’ll do a combination of both to ensure comprehensive coverage. Synthetic data is not as good as real data, but it’s a good starting point. Also, we are only using LLMs to generate the user inputs, not the LLM responses or internal system behavior.
  Regardless of whether you use existing data or synthetic data, you want good coverage across the dimensions you’ve defined. ([View Highlight](https://read.readwise.io/read/01jbf3tjhc6qz2xfbfvdtynx9r))
- Generating Synthetic Data[](https://hamel.dev/blog/posts/llm-judge/#generating-synthetic-data)
  When generating synthetic data, you only need to create the user inputs. You then feed these inputs into your AI system to generate the AI’s responses. It’s important that you log everything so you can evaluate your AI. To recap, here’s the process:
  1. **Generate User Inputs**: Use the LLM prompts to create realistic user inputs.
  2. **Feed Inputs into Your AI System**: Input the user interactions into your AI as it currently exists.
  3. **Capture AI Responses**: Record the AI’s responses to form complete interactions.
  4. **Organize the Interactions**: Create a table to store the user inputs, AI responses, and relevant metadata. ([View Highlight](https://read.readwise.io/read/01jbf3tzsxvb5805fgn52whpds))
- How much data should you generate?[](https://hamel.dev/blog/posts/llm-judge/#how-much-data-should-you-generate)
  There is no right answer here. At a minimum, you want to generate enough data so that you have examples for each combination of dimensions (in this toy example: features, scenarios, and personas). However, you also want to keep generating more data until you feel like you have stopped seeing new failure modes. The amount of data I generate varies significantly depending on the use case. ([View Highlight](https://read.readwise.io/read/01jbf3x6w64hxwq5tk61rasdjp))
- Does synthetic data actually work?[](https://hamel.dev/blog/posts/llm-judge/#does-synthetic-data-actually-work)
  You might be skeptical of using synthetic data. After all, it’s not real data, so how can it be a good proxy? In my experience, it works surprisingly well. Some of my favorite AI products, like [Hex](https://hex.tech/) use synthetic data to power their evals:
  > “LLMs are surprisingly good at generating excellent - and diverse - examples of user prompts. This can be relevant for powering application features, and sneakily, for building Evals. If this sounds a bit like the Large Language Snake is eating its tail, I was just as surprised as you! All I can say is: it works, ship it.” *[Bryan Bischof](https://www.linkedin.com/in/bryan-bischof/), Head of AI Engineering at Hex* ([View Highlight](https://read.readwise.io/read/01jbf3xh3g1fbymj20wbxpt6wr))
- The domain expert’s job is to focus on one thing: **“Did the AI achieve the desired outcome?”** No complex scoring scales or multiple metrics. Just a clear **pass or fail** decision. In addition to the pass/fail decision, the domain expert should write a critique that explains their reasoning.
  Why are simple pass/fail metrics important?[](https://hamel.dev/blog/posts/llm-judge/#why-are-simple-passfail-metrics-important)
  • **Clarity and Focus**: A binary decision forces everyone to consider what truly matters. It simplifies the evaluation to a single, crucial question.
  • **Actionable Insights**: Pass/fail judgments are easy to interpret and act upon. They help you quickly identify whether the AI meets the user’s needs.
  • **Forces Articulation of Expectations**: When domain experts must decide if an interaction passes or fails, they are compelled to articulate their expectations clearly. This process uncovers nuances and unspoken assumptions about how the AI should behave.
  • **Efficient Use of Resources**: Keeps the evaluation process manageable, especially when starting out. You avoid getting bogged down in detailed metrics that might not be meaningful yet. ([View Highlight](https://read.readwise.io/read/01jbf5s09wfdp1w8c84w1t0zb4))
- The Role of Critiques[](https://hamel.dev/blog/posts/llm-judge/#the-role-of-critiques)
  Alongside a binary pass/fail judgment, it’s important to write a detailed critique of the LLM-generated output. These critiques:
  • **Captures Nuances**: The critique allows you to note if something was mostly correct but had areas for improvement.
  • **Guide Improvement**: Detailed feedback provides specific insights into how the AI can be enhanced.
  • **Balance Simplicity with Depth**: While the pass/fail offers a clear verdict, the critique offers the depth needed to understand the reasoning behind the judgment.
  **Why Write Critiques?:**
  In practice, domain experts may not have fully internalized all the judgment criteria. By forcing them to make a pass/fail decision and explain their reasoning, they clarify their expectations and provide valuable guidance for refining the AI.
  *“But my problem is complex!”* Trust me—starting simple forces you to focus on what truly matters. You can introduce more complexity later if needed. ([View Highlight](https://read.readwise.io/read/01jbf5sktqp2xg1dxj4y8vrhr1))
- **User:** “I can’t log into my account; it says my password is incorrect.” 
  **AI:** “Please reset your password by clicking ‘Forgot Password’.” **Fail** The AI provided a generic solution without acknowledging the user’s frustration or checking for other issues like account lockout. It failed to offer empathetic support or additional assistance. Due to the lack of personalized help and poor user experience, it **fails**. ([View Highlight](https://read.readwise.io/read/01jbf5t8wztfe8avej50kmc220))
- **User:** “Book a table for two at an Italian restaurant tonight at 7 PM.” 
  **AI:** “Table for two at Luigi’s Italian Restaurant booked for tonight at 7 PM. Confirmation number is 12345.” **Pass** The AI efficiently completed the booking as requested, providing all necessary details and a confirmation number. **However**, it could have asked if the user had seating preferences or dietary restrictions. The AI accomplished the primary task successfully, so it **passes**, with minor opportunities for enhanced service. ([View Highlight](https://read.readwise.io/read/01jbf5td3k6y2hfp6sy5v5sxxm))
- These examples demonstrate how the AI can receive both **“Pass”** and **“Fail”** judgments. In the critiques:
  • For **passes**, we explain why the AI succeeded in meeting the user’s primary need, even if there were critical aspects that could be improved. We highlight these areas for enhancement while justifying the overall passing judgment.
  • For **fails**, we identify the critical elements that led to the failure, explaining why the AI did not meet the user’s main objective or compromised important factors like user experience or security.
  Most importantly, **the critique should be detailed enough so that you can use it in a few-shot prompt for a LLM judge**. In other words, it should be detailed enough that a new employee could understand it. Being too terse is a common mistake.
  Note that the example user interactions with the AI are simplified for brevity - but you might need to give the domain expert more context to make a judgement. More on that later. ([View Highlight](https://read.readwise.io/read/01jbf5tqjdbab61evx7g60very))
- A common mistake is straying from binary pass/fail judgments. Let’s revisit the dashboard from earlier:
  ![](https://hamel.dev/blog/posts/llm-judge/dashboard.png)
  If your evaluations consist of a bunch of metrics that LLMs score on a 1-5 scale (or any other scale), you’re doing it wrong. Let’s unpack why.
  1. **It’s not actionable**: People don’t know what to do with a 3 or 4. It’s not immediately obvious how this number is better than a 2. You need to be able to say “this interaction passed because…” and “this interaction failed because…”.
  2. More often than not, **these metrics do not matter**. Every time I’ve analyzed data on domain expert judgments, they tend not to correlate with these kind of metrics. By having a domain expert make a binary judgment, you can figure out what truly matters.
  This is why I hate off the shelf metrics that come with many evaluation frameworks. They tend to lead people astray. ([View Highlight](https://read.readwise.io/read/01jbf5v4pjm8p7k3p09ektndxe))
- **Common Objections to Pass/Fail Judgments:**
  • “The business said that these 8 dimensions are important, so we need to evaluate all of them.”
  • “We need to be able to say why an interaction passed or failed.”
  I can guarantee you that if someone says you need to measure 8 things on a 1-5 scale, they don’t know what they are looking for. They are just guessing. You have to let the domain expert drive and make a pass/fail judgment with critiques so you can figure out what truly matters. Stand your ground here. ([View Highlight](https://read.readwise.io/read/01jbf5vb6696ye7m2qy63gts14))
- Make it easy for the domain expert to review data[](https://hamel.dev/blog/posts/llm-judge/#make-it-easy-for-the-domain-expert-to-review-data)
  Finally, you need to remove all friction from reviewing data. I’ve written about this [here](https://hamel.dev/notes/llm/finetuning/data_cleaning.html). Sometimes, you can just use a spreadsheet. It’s a judgement call in terms of what is easiest for the domain expert. I found that I often have to provide additional context to help the domain expert understand the user interaction, such as:
  • Metadata about the user, such as their location, subscription tier, etc.
  • Additional context about the system, such as the current time, inventory levels, etc.
  • Resources so you can check if the AI’s response is correct (ex: ability to search a database, etc.)
  All of this data needs to be presented on a single screen so the domain expert can review it without jumping through hoops. That’s why I recommend building [a simple web app](https://hamel.dev/notes/llm/finetuning/data_cleaning.html) to review data. ([View Highlight](https://read.readwise.io/read/01jbf5vqjgv2phze28ja0jkgyd))
- Step 4: Fix Errors[](https://hamel.dev/blog/posts/llm-judge/#step-4-fix-errors)
  After looking at the data, it’s likely you will find errors in your AI system. Instead of plowing ahead and building an LLM judge, you want to fix any obvious errors. Remember, the whole point of the LLM as a judge is to help you find these errors, so it’s totally fine if you find them earlier!
  If you have already developed [Level 1 evals as outlined in my previous post](https://hamel.dev/blog/posts/evals), you should not have any pervasive errors. However, these errors can sometimes slip through the cracks. If you find pervasive errors, fix them and go back to step 3. Keep iterating until you feel like you have stabilized your system. ([View Highlight](https://read.readwise.io/read/01jbf5w4gr9ergex8txk595bnm))
- The Hidden Power of Critiques[](https://hamel.dev/blog/posts/llm-judge/#the-hidden-power-of-critiques)
  You cannot write a good judge prompt until you’ve seen the data. [The paper from Shankar et al.,](https://arxiv.org/abs/2404.12272) “Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences” summarizes this well:
  > to grade outputs,people need to externalize and define their evaluation criteria; however, the process of grading outputs helps them to define that very criteria. We dub this phenomenon criteria drift, and it implies thatit is impossible to completely determine evaluation criteria prior to human judging of LLM outputs. ([View Highlight](https://read.readwise.io/read/01jbf5wdpv5fqhd7rqk08897ye))
- Start with Expert Examples[](https://hamel.dev/blog/posts/llm-judge/#start-with-expert-examples)
  Let me share a real-world example of building an LLM judge you can apply to your own use case. When I was helping Honeycomb build their [Query Assistant feature](https://www.honeycomb.io/blog/introducing-query-assistant), we needed a way to evaluate if the AI was generating good queries ([View Highlight](https://read.readwise.io/read/01jbf5x4n96wzdz44j30fswgq3))
- Keep Iterating on the Prompt Until Convergence With Domain Expert[](https://hamel.dev/blog/posts/llm-judge/#keep-iterating-on-the-prompt-until-convergence-with-domain-expert) ([View Highlight](https://read.readwise.io/read/01jbf5xxbm93p2y2srnmh8ybdm))
- It took us only three iterations to achieve > 90% agreement between the LLM and Phillip. Your mileage may vary depending on the complexity of the task. For example, [Swyx has conducted a similar process hundreds of times](https://humanloop.com/blog/why-your-product-needs-evals) for [AI News](https://www.latent.space/), an [extremely popular](https://x.com/swyx/status/1672306744884887553) news aggregator with high quality recommendations. The quality of the AI owing to this process is why this product has received [critical acclaim](https://buttondown.com/ainews). ([View Highlight](https://read.readwise.io/read/01jbf5y0hnfwsr5g7rtmvwcjp2))
- How to Optimize the LLM Judge Prompt?[](https://hamel.dev/blog/posts/llm-judge/#how-to-optimize-the-llm-judge-prompt)
  I usually adjust the prompts by hand. I haven’t had much luck with prompt optimizers like DSPy. However, my friend [Eugene Yan](https://eugeneyan.com/) has just released a promising tool named [ALIGN Eval](https://eugeneyan.com/writing/aligneval/). I like it because it’s simple and effective. Also, don’t forget the approach of [continual in-context learning](https://blog.langchain.dev/dosu-langsmith-no-prompt-eng/) mentioned earlier - it can be effective when implemented correctly.
  In rare cases, I might fine-tune a judge, but I prefer not to. I talk about this more in the [FAQ](https://hamel.dev/blog/posts/llm-judge/#do-you-recommend-fine-tuning-judges) section. ([View Highlight](https://read.readwise.io/read/01jbf5y4sp9c714ygxnfqk6g31))
- The Human Side of the Process[](https://hamel.dev/blog/posts/llm-judge/#the-human-side-of-the-process)
  Something unexpected happened during this process. [Phillip Carter](https://www.linkedin.com/in/phillip-carter-4714a135/), our domain expert at Honeycomb, found that reviewing the LLM’s critiques helped him articulate his own evaluation criteria more clearly. He said,
  > “Seeing how the LLM breaks down its reasoning made me realize I wasn’t being consistent about how I judged certain edge cases.”
  This is a pattern I’ve seen repeatedly—the process of building an LLM judge often helps standardize evaluation criteria.
  Furthermore, because this process forces the domain expert to look at data carefully, I always uncover new insights about the product, AI capabilities, and user needs. The resulting benefits are often *more valuable* than creating a LLM judge! ([View Highlight](https://read.readwise.io/read/01jbf5yexe1yg08r8a08e7fjqv))
- How Often Should You Evaluate?[](https://hamel.dev/blog/posts/llm-judge/#how-often-should-you-evaluate)
  I conduct this human review at regular intervals and whenever something material changes. For example, if I update a model, I’ll run the process again. I don’t get too scientific here; instead, I rely on my best judgment. Also note that after the first two iterations, I tend to focus more on errors rather than sampling randomly. For example, if I find an error, I’ll search for more examples that I think might trigger the same error. However, I always do a bit of random sampling as well. ([View Highlight](https://read.readwise.io/read/01jbf5ykhe550xktnkfn9xajc5))
- What if this doesn’t work?[](https://hamel.dev/blog/posts/llm-judge/#what-if-this-doesnt-work)
  I’ve seen this process fail when:
  • The AI is overscoped: Example - a chatbot in a SaaS product that promises to do anything you want.
  • The process is not followed correctly: Not using the principal domain expert, not writing proper critiques, etc.
  • The expectations of alignment are unrealistic or not feasible.
  In each of these cases, I try to address the root cause instead of trying to force alignment. Sometimes, you may not be able to achieve the alignment you want and may have to lean heavier on human annotations. However, after following the process described here, you will have metrics that help you understand how much you can trust the LLM judge. ([View Highlight](https://read.readwise.io/read/01jbf5yt0xr68gnhq4srymqqry))
- Mistakes I’ve noticed in LLM judge prompts[](https://hamel.dev/blog/posts/llm-judge/#mistakes-ive-noticed-in-llm-judge-prompts)
  Most of the mistakes I’ve seen in LLM judge prompts have to do with not providing good examples:
  1. Not providing any critiques.
  2. Writing extremely terse critiques.
  3. Not providing external context. Your examples should contain the same information you use to evaluate, including external information like user metadata, system information etc.
  4. Not providing diverse examples. You need a wide variety of examples to ensure that your judge works for a wide variety of inputs. ([View Highlight](https://read.readwise.io/read/01jbf5z36fq2kkb4mvcdfvhqz3))
- Step 6: Perform Error Analysis[](https://hamel.dev/blog/posts/llm-judge/#step-6-perform-error-analysis)
  After you have created a LLM as a judge, you will have a dataset of user interactions with the AI, and the LLM’s judgments. If your metrics show an acceptable agreement between the domain expert and the LLM judge, you can apply this judge against real or synthetic interactions. After this, you can you calculate error rates for different dimensions of your data. You should calculate the error on unseen data only to make sure your aren’t getting biased results.
  For example, if you have segmented your data by persona, scenario, feature, etc, your data analysis may look like this ([View Highlight](https://read.readwise.io/read/01jbf5zh0wg3p6v6kgyj1c7bv2))
- Classify Traces[](https://hamel.dev/blog/posts/llm-judge/#classify-traces)
  Once you know where the errors are now you can perform an error analysis to get to the root cause of the errors. My favorite way is to look at examples of each type of error and classify them by hand. I recommend using a spreadsheet for this. ([View Highlight](https://read.readwise.io/read/01jbf60fkjzeen93wsdz7m9mtj))
- In this case, you might classify the error as: `Missing User Education`. The system retrieved new user context and format information but failed to include it in the response, which suggests we could improve our prompt. After you have classified a number of errors, you can calculate the distribution of errors by root cause. ([View Highlight](https://read.readwise.io/read/01jbf60x41jyp99f4yrf9vvzh4))
- That might look like this:
  **Root Cause Distribution (20 Failed Interactions)**
  Root Cause
  Count
  Percentage
  Missing User Education
  8
  40%
  Authentication/Access Issues
  6
  30%
  Poor Context Handling
  4
  20%
  Inadequate Error Messages
  2
  10%
  Now you know where to focus your efforts. This doesn’t have to take an extraordinary amount of time. You can get quite far in just 15 minutes. Also, you can use a LLM to help you with this classification, but that is beyond the scope of this post (you can use a LLM to help you do anything in this post, as long as you have a process to verify the results). ([View Highlight](https://read.readwise.io/read/01jbf611y0m6r4f5q70wtq6g4v))
- An Interactive Walkthrough of Error Analysis[](https://hamel.dev/blog/posts/llm-judge/#an-interactive-walkthrough-of-error-analysis)
  Error analysis has been around in Machine Learning for quite some time. This video by Andrew Ng does a great job of walking through the process interactively ([View Highlight](https://read.readwise.io/read/01jbf619vvep4w6hg5h0q5ncnn))
- Fix Your Errors, Again[](https://hamel.dev/blog/posts/llm-judge/#fix-your-errors-again)
  Now that you have a sense of the errors, you can go back and fix them again. Go back to step 3 and iterate until you are satisfied. Note that every time you fix an error, you should try to write a test case for it. Sometimes, this can be an assertion in your test suite, but other times you may need to create a more “specialized” LLM judge for these failures. We’ll talk about this next. ([View Highlight](https://read.readwise.io/read/01jbf61cz3s9cjpwp8df5ybh6x))
- Doing this well requires data literacy[](https://hamel.dev/blog/posts/llm-judge/#doing-this-well-requires-data-literacy)
  Investigating your data is much harder in practice than I made it look in this post. It requires a nose for data that only comes from practice. It also helps to have some basic familiarity with statistics and data analysis tools. My favorite post on data literacy is [this one](https://jxnl.co/writing/2024/06/02/10-ways-to-be-data-illiterate-and-how-to-avoid-them/) by Jason Liu and Eugene Yan. ([View Highlight](https://read.readwise.io/read/01jbf61fkbkt2w5m66h6efevws))
- Step 7: Create More Specialized LLM Judges (if needed)[](https://hamel.dev/blog/posts/llm-judge/#step-7-create-more-specialized-llm-judges-if-needed)
  Now that you have a sense for where the problems in your AI are, you can decide where and if to invest in more targeted LLM judges. For example, if you find that the AI has trouble with citing sources correctly, you can created a targeted eval for that. You might not even need a LLM judge for some errors (and use a code-based assertion instead).
  The key takeaway is don’t jump directly to using specialized LLM judges until you have gone through this critique shadowing process. This will help you rationalize where to invest your time. ([View Highlight](https://read.readwise.io/read/01jbf61y0j09488ce2vvhzbjwy))
- The Critique Shadowing process is iterative, with feedback loops. Let’s list out the steps:
  1. Find Principal Domain Expert
  2. Create A Dataset
  • Generate diverse examples covering your use cases
  • Include real or synthetic user interactions
  3. Domain Expert Reviews Data
  • Expert makes pass/fail judgments
  • Expert writes detailed critiques explaining their reasoning
  4. Fix Errors (if found)
  • Address any issues discovered during review
  • Return to expert review to verify fixes
  • Go back to step 3 if errors are found
  5. Build LLM Judge
  • Create prompt using expert examples
  • Test against expert judgments
  • Refine prompt until agreement is satisfactory
  6. Perform Error Analysis
  • Calculate error rates across different dimensions
  • Identify patterns and root causes
  • Fix errors and go back to step 3 if needed
  • Create specialized judges as needed ([View Highlight](https://read.readwise.io/read/01jbf62qzqdg32jxk7h0gzg0p7))
- It’s Not The Judge That Created Value, Afterall[](https://hamel.dev/blog/posts/llm-judge/#its-not-the-judge-that-created-value-afterall)
  The real value of this process is looking at your data and doing careful analysis. Even though an AI judge can be a helpful tool, going through this process is what drives results. I would go as far as saying that creating a LLM judge is a nice “hack” I use to trick people into carefully looking at their data!
  That’s right. The real business value comes from looking at your data. But hey, potato, potahto. ([View Highlight](https://read.readwise.io/read/01jbf631q8t9mb1a8220fpn40q))
- If I have a good judge LLM, isn’t that also the LLM I’d also want to use?[](https://hamel.dev/blog/posts/llm-judge/#if-i-have-a-good-judge-llm-isnt-that-also-the-llm-id-also-want-to-use)
  Effective judges often use larger models or more compute (via longer prompts, chain-of-thought, etc.) than the systems they evaluate.
  However, If the cost of the most powerful LLM is not prohibitive, and latency is not an issue, then you might want to consider where you invest your efforts differently. In this case, it might make sense to put more effort towards specialist LLM judges, [code-based assertions, and A/B testing](https://hamel.dev/blog/posts/evals/#the-types-of-evaluation). However, you should still go through the process of looking at data and critiquing the LLM’s output before you adopt specialized judges. ([View Highlight](https://read.readwise.io/read/01jbf63x6az8716f33bnnek27m))
- Do you recommend fine-tuning judges?[](https://hamel.dev/blog/posts/llm-judge/#do-you-recommend-fine-tuning-judges)
  I prefer not to fine-tune LLM judges. I’d rather spend the effort fine-tuning the actual LLM instead. However, fine-tuning guardrails or other specialized judges can be useful (especially if they are small classifiers).
  As a related note, you can leverage a LLM judge to curate and transform data for fine-tuning your primary model. For example, you can use the judge to:
  • Eliminate bad examples for fine-tuning.
  • Generate higher quality outputs (by referencing the critique).
  • Simulate high quality chain-of-thought with critiques.
  Using a LLM judge for enhancing fine-tuning data is even more compelling when you are trying to [distill a large LLM into a smaller one](https://openai.com/index/api-model-distillation/). The details of fine-tuning are beyond the scope of this post. If you are interested in learning more, see [these resources](https://parlance-labs.com/education/#fine-tuning). ([View Highlight](https://read.readwise.io/read/01jbf6462myr14nmgvsma2pvpr))
- What’s wrong with off-the-shelf LLM judges?[](https://hamel.dev/blog/posts/llm-judge/#whats-wrong-with-off-the-shelf-llm-judges)
  Nothing is strictly wrong with them. It’s just that many people are led astray by them. If you are disciplined you can apply them to your data and see if they are telling you something valuable. However, I’ve found that these tend to cause more confusion than value. ([View Highlight](https://read.readwise.io/read/01jbf648xb129qsndtf41y8x99))
- How Do you evaluate the LLM judge?[](https://hamel.dev/blog/posts/llm-judge/#how-do-you-evaluate-the-llm-judge)
  You will collect metrics on the agreement between the domain expert and the LLM judge. This tells you how much you can trust the judge and in what scenarios. Your domain expert doesn’t have to inspect every single example, you just need a representative sample so you can have reliable statistics. ([View Highlight](https://read.readwise.io/read/01jbf64c71z2k0bp7pa6bpgyy9))
- What model do you use for the LLM judge?[](https://hamel.dev/blog/posts/llm-judge/#what-model-do-you-use-for-the-llm-judge)
  For the kind of judge articulated in this blog post, I like to use the most powerful model I can afford in my cost/latency budget. This budget might be different than my primary model, depending on the number of examples I need to score. This can vary significantly according to the use case. ([View Highlight](https://read.readwise.io/read/01jbf64garz61zhcb81mgy1e2y))
- How do you choose between traditional ML techniques, LLM-as-a-judge and human annotations?[](https://hamel.dev/blog/posts/llm-judge/#how-do-you-choose-between-traditional-ml-techniques-llm-as-a-judge-and-human-annotations)
  The answer to this (and many other questions) is: do the simplest thing that works. And simple doesn’t always mean traditional ML techniques. Depending on your situation, it might be easier to use a LLM API as a classifier than to train a model and deploy it. ([View Highlight](https://read.readwise.io/read/01jbf64vnvn4w5t8g4kxrcaz3w))
- Can you make judges from small models?[](https://hamel.dev/blog/posts/llm-judge/#can-you-make-judges-from-small-models)
  Yes, potentially. I’ve only used the larger models for judges. You have to base the answer to this question on the data (i.e. the agreement with the domain expert). ([View Highlight](https://read.readwise.io/read/01jbf65125vea8mav4v4byv2m4))
- How do you ensure consistency when updating your LLM model?[](https://hamel.dev/blog/posts/llm-judge/#how-do-you-ensure-consistency-when-updating-your-llm-model)
  You have to go through the process again and measure the results. ([View Highlight](https://read.readwise.io/read/01jbf6550m6r1qh9rzqqtr8mjz))
- How do you phase out human in the loop to scale this?[](https://hamel.dev/blog/posts/llm-judge/#how-do-you-phase-out-human-in-the-loop-to-scale-this)
  You don’t need a domain expert to grade every single example. You just need a representative sample. I don’t think you can eliminate humans completely, because the LLM still needs to be aligned to something, and that something is usually a human. As your evaluation system gets better, it naturally reduces the amount of human effort required. ([View Highlight](https://read.readwise.io/read/01jbf656kkj5fqhfqmjrzkrpc9))
