---
author: [[★❤✰ Vicki Boykis ★❤✰]]
title: "Why Are We Using LLMs as Calculators"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://vickiboykis.com/images/logo.png)

## Metadata
- Author: [[★❤✰ Vicki Boykis ★❤✰]]
- Full Title: Why Are We Using LLMs as Calculators
- URL: https://vickiboykis.com/2024/11/09/why-are-we-using-llms-as-calculators/

## Highlights
- So why are we trying to get these enormous models, good for natural text completion tasks like summarization, translation, and writing poems, to multiply three-digit numbers and, what’s more, attempt to return the results as a number?
  Two reasons:
  1. Humans always try to use any new software/hardware we invent to do calculation
  2. We don’t actually want them to do math for the sake of replacing calculators, we want to understand if they can reason their way to AGI. ([View Highlight](https://read.readwise.io/read/01jcbj8gngqswjc2dr5j6ddzmv))
- In the history of human relationships with computers, we’ve always wanted to count large groups of things because [we’re terrible at it](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two). Initially we used our hands - or others’ - in the Roman empire, administrators known as *calculatores* and slaves known as [calculones](https://kartsci.org/kocomu/computer-history/history-abacus-ancient-computing/) performed household accounting manually. ([View Highlight](https://read.readwise.io/read/01jcbj94skhnjre4gec308y558))
- Then, we started inventing calculation lookup tables. After the French Revolution, the French Republican government switched to the metric system in order to collect property taxes. In order to perform these calculations, it hired human computers to do the conversions by creating large tables of logarithms for decimal division of angles, [Tables du Cadastre](https://inria.hal.science/inria-00543946/document). This system was never completed and eventually scrapped, but it inspired Charles Babbage to do his work on machiens for calculation along with Ada Lovelace, which in turn kicked off the modern era of computing. ([View Highlight](https://read.readwise.io/read/01jcbj9rcxfx2kkz0h3xqn0smt))
- Second, we want to understand if LLMs can “think.” There is no one definition of what “thinking” means, but for these models in particular, [we are interested to see](https://arxiv.org/abs/2212.10403) if they can work through a chain of steps to come to an answer about logical things that are easy for humans, as an example:
  > all whales are mammals, all mammals have kidneys; therefore, all whales have kidneys ([View Highlight](https://read.readwise.io/read/01jcbjar19vff8x569kshkjvta))
- One way humans reason is through performing different kinds of math: arithmetic, solving proofs, and reasoning through symbolic logic. The underlying question in artificial intelligence is whether machines can reason outside of the original task we gave them. For large language models, the ask is whether they can move from summarizing first a book if they were trained for books, to a movie script plot, to finally, summarizing what you did all day if you pass it a bunch of documents about your activity. So, it stands to reason that if LLMs can “solve” math problems, they can achieve AGI. ([View Highlight](https://read.readwise.io/read/01jcbjawjn7rgzsr519kzm9f3t))
- However, To get an LLM to add “2+2”, we have a much more complex level of operations. Instead of a binary calculation machine that uses small, simple math business logic to derive an answer based on addition, we create an enormous model of the entire universe of human public thought and try to reason our way into the correct mathematical answer based on how many times the model has “seen” or been exposed to the text “2+2” in written form. ([View Highlight](https://read.readwise.io/read/01jcbjdcv5pnzym2wdc5hvgxt4))
- • We write “What’s 2 +2” into the text box.
  • This natural-language query [is tokenized](https://cybernetist.com/2024/10/21/you-should-probably-pay-attention-to-tokenizers/). Tokenization is the process of first converting our query into a string of words that the model uses as the first step in performing numerical lookups.
  • That text is then embedded in the context of the model’s vocabulary by converting each word to an embedding and then creating an embedding vector of the input query.
  • We then passing the vector to the model’s encoder, which stores the relative position of embeddings to each other in the model’s vocabulary
  • Passing those results to the attention mechanism for lookup, which compares the similarity using various metrics of each token and position with every other token in the reference text (the model). This happens many times in multi-head attention architectures.
  • Getting results back from the decoder. What is returned from the decoder is a [set of tokens and the probability of those tokens.](https://huggingface.co/docs/transformers/en/llm_tutorial). ([View Highlight](https://read.readwise.io/read/01jcbjf8vajss3vr04yy2n0526))
- So this entire process, in order to add “what is 2+2”, we do a non-deterministic a lookup from an enormous hashtable that contains the sum of public human knowledge we’ve seen fit to collect for our dataset, then we squeeze it through the tiny, nondeterministic funnels of decoding strategies and guided generation to get to an answer from a sampled probability distribution. All of this includes large swaths of actual humans in the loop guiding the model. ([View Highlight](https://read.readwise.io/read/01jcbjfsvta4at6z1hzwqcejqj))
- And, all of this, only to get an answer that’s right only some percent of the time, not consistent across all model architectures and platforms and in many cases has to be coaxed out of the model using techniques like chain of thought. ([View Highlight](https://read.readwise.io/read/01jcbjg88016t8djqg334eh9zm))
- From a user perspective, this is absolutely a disastrous violation of Jakob’s Law of Ux, which states that people [expect the same kind of output](https://vickiboykis.com/2024/05/06/weve-been-put-in-the-vibe-space/) from the same kind of interface.
  However, when you realize that the goal is, as [Terrence Tao notes](https://mathstodon.xyz/@tao/113132502735585408), to get models to solve mathematical theorems, it makes more sense, although all these models are still very far from actual reasoning. ([View Highlight](https://read.readwise.io/read/01jcbjgvdj1jhctfn538tqbw4b))
