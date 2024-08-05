---
author: [[Google DeepMind]]
title: "AI Achieves Silver-Medal Standard Solving International Mathematical Olympiad Problems"
date: 2024-07-26
tags: 
- articles
- literature-note
---
![rw-book-cover](https://lh3.googleusercontent.com/2A21eFt7wdDrmMzzkenrCTuioLWGFdzU5Ao5dPH9yPtAw6QNHxZcDmoQA2_ZriU2gMjX8mzEOtfPbMCRuL5kVzLoz6efLgqT_foBXU3pxKBXTTOXXpc=w1200-h630-n-nu)

## Metadata
- Author: [[Google DeepMind]]
- Full Title: AI Achieves Silver-Medal Standard Solving International Mathematical Olympiad Problems
- URL: https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/

## Highlights
- Breakthrough models AlphaProof and AlphaGeometry 2 solve advanced reasoning problems in mathematics ([View Highlight](https://read.readwise.io/read/01j3nst9ab85vd5h7c9vvmvjwq))
- Artificial general intelligence (AGI) with advanced mathematical reasoning has the potential to unlock new frontiers in science and technology. ([View Highlight](https://read.readwise.io/read/01j3nstcrkycp5hv3d93n05trn))
- We’ve made great progress building AI systems that help mathematicians discover [new insights](https://deepmind.google/discover/blog/exploring-the-beauty-of-pure-mathematics-in-novel-ways/), [novel algorithms](https://deepmind.google/discover/blog/discovering-novel-algorithms-with-alphatensor/) and answers to [open problems](https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/). But current AI systems still struggle with solving general math problems because of limitations in reasoning skills and training data. ([View Highlight](https://read.readwise.io/read/01j3nstesxgb0dt2wpae1qyc61))
- Today, we present AlphaProof, a new reinforcement-learning based system for formal math reasoning, and AlphaGeometry 2, an improved version of our [geometry-solving system](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/). Together, these systems solved four out of six problems from this year’s [International Mathematical Olympiad](https://www.imo2024.uk/) (IMO), achieving the same level as a silver medalist in the competition for the first time. ([View Highlight](https://read.readwise.io/read/01j3nstj77355ppf7deg7b5kj5))
- The IMO is the oldest, largest and most prestigious competition for young mathematicians, held annually since 1959. ([View Highlight](https://read.readwise.io/read/01j3nstt438zzqdsgzj8x3wgh3))
- Each year, elite pre-college mathematicians train, sometimes for thousands of hours, to solve six exceptionally difficult problems in algebra, combinatorics, geometry and number theory. Many of the winners of the [Fields Medal](https://www.mathunion.org/imu-awards/fields-medal), one of the highest honors for mathematicians, have represented their country at the IMO. ([View Highlight](https://read.readwise.io/read/01j3nstwdd517dpxd001zyrtfe))
- More recently, the annual IMO competition has also become widely recognised as a grand challenge in machine learning and an aspirational benchmark for measuring an AI system’s advanced mathematical reasoning capabilities. ([View Highlight](https://read.readwise.io/read/01j3nsvcc4wjv7nqyzffxbhpa8))
- This year, we applied our combined AI system to the competition problems, provided by the IMO organizers. Our solutions were scored according to the IMO’s point-awarding rules by prominent mathematicians [Prof Sir Timothy Gowers](https://www.dpmms.cam.ac.uk/~wtg10/), an IMO gold medalist and Fields Medal winner, and [Dr Joseph Myers](https://www.polyomino.org.uk/), a two-time IMO gold medalist and Chair of the IMO 2024 Problem Selection Committee. ([View Highlight](https://read.readwise.io/read/01j3nsvjkxgr10sdtbybregey4))
- First, the problems were manually translated into formal mathematical language for our systems to understand. In the official competition, students submit answers in two sessions of 4.5 hours each. Our systems solved one problem within minutes and took up to three days to solve the others. ([View Highlight](https://read.readwise.io/read/01j3nsvtw2dwnff2gngj53rpzn))
- AlphaProof solved two algebra problems and one number theory problem by determining the answer and proving it was correct. This included the hardest problem in the competition, solved by only five contestants at this year’s IMO. AlphaGeometry 2 proved the geometry problem, while the two combinatorics problems remained unsolved. ([View Highlight](https://read.readwise.io/read/01j3nsw99s097d22j0m12z8gpp))
- Each of the six problems can earn seven points, with a total maximum of 42. Our system achieved a final score of 28 points, earning a perfect score on each problem solved — equivalent to the top end of the [silver-medal category](https://www.imo-official.org/year_info.aspx?year=2024). This year, the gold-medal threshold starts at 29 points, and was achieved by [58 of 609 contestants](https://www.imo-official.org/year_individual_r.aspx?year=2024) at the official competition. ([View Highlight](https://read.readwise.io/read/01j3nswk0cwpcsak7b368hb55j))
- AlphaProof is a system that trains itself to prove mathematical statements in the formal language [Lean](https://lean-lang.org/). It couples a pre-trained language model with the [AlphaZero](https://deepmind.google/discover/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/) reinforcement learning algorithm, which previously taught itself how to master the games of chess, shogi and Go. ([View Highlight](https://read.readwise.io/read/01j3nsww908ssme73m8xry39c0))
- Formal languages offer the critical advantage that proofs involving mathematical reasoning can be formally verified for correctness. Their use in machine learning has, however, previously been constraind by the very limited amount of human-written data available. ([View Highlight](https://read.readwise.io/read/01j3nsx8j4krv8c472n9ma2her))
- In contrast, natural language based approaches can hallucinate plausible but incorrect intermediate reasoning steps and solutions, despite having access to orders of magnitudes more data. We established a bridge between these two complementary spheres by fine-tuning a [Gemini](https://deepmind.google/technologies/gemini/#introduction) model to automatically translate natural language problem statements into formal statements, creating a large library of formal problems of varying difficulty. ([View Highlight](https://read.readwise.io/read/01j3nsxvd4ad6bxc9xvd55d8pt))
- When presented with a problem, AlphaProof generates solution candidates and then proves or disproves them by searching over possible proof steps in Lean. Each proof that was found and verified is used to reinforce AlphaProof’s language model, enhancing its ability to solve subsequent, more challenging problems. ([View Highlight](https://read.readwise.io/read/01j3nsxyn1amerxe75z92y4pzk))
- We trained AlphaProof for the IMO by proving or disproving millions of problems, covering a wide range of difficulties and mathematical topic areas over a period of weeks leading up to the competition. The training loop was also applied during the contest, reinforcing proofs of self-generated variations of the contest problems until a full solution could be found. ([View Highlight](https://read.readwise.io/read/01j3nsy0v1hdcf7y9fvjz510fn))
- AlphaGeometry 2 is a significantly improved version of [AlphaGeometry](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/). It’s a neuro-symbolic hybrid system in which the language model was based on [Gemini](https://deepmind.google/technologies/gemini/#introduction) and trained from scratch on an order of magnitude more synthetic data than its predecessor. This helped the model tackle much more challenging geometry problems, including problems about movements of objects and equations of angles, ratio or distances. ([View Highlight](https://read.readwise.io/read/01j3nsygr5rk6wbd4c5e7w85ry))
- AlphaGeometry 2 employs a symbolic engine that is two orders of magnitude faster than its predecessor. When presented with a new problem, a novel knowledge-sharing mechanism is used to enable advanced combinations of different search trees to tackle more complex problems. ([View Highlight](https://read.readwise.io/read/01j3nsytj0981w3wrh791yjcs4))
- As part of our IMO work, we also experimented with a natural language reasoning system, built upon [Gemini](https://deepmind.google/technologies/gemini/#introduction) and our latest research to enable advanced problem-solving skills. This system doesn’t require the problems to be translated into a formal language and could be combined with other AI systems. We also tested this approach on this year’s IMO problems and the results showed great promise. ([View Highlight](https://read.readwise.io/read/01j3nszcycj7by6zs9zerpqb00))