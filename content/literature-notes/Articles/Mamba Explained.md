---
author: [[The Gradient]]
title: 'Mamba Explained'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://images.unsplash.com/photo-1598348341635-33a3f4205d32?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fHRyYW5zZm9ybWVyfGVufDB8fHx8MTcxMTM0NTEwM3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000)

## Metadata
- Author: [[The Gradient]]
- Full Title: Mamba Explained
- URL: https://thegradient.pub/mamba-explained/

## Highlights
- **Mamba**, however, is one of an alternative class of models called **State Space Models** (**SSMs**). Importantly, for the first time, Mamba promises similar performance (and crucially similar [*scaling laws*](https://arxiv.org/pdf/2203.15556.pdf)) as the Transformer whilst being feasible at long sequence lengths (say 1 million tokens). To achieve this long context, the Mamba authors remove the “quadratic bottleneck” in the Attention Mechanism. Mamba also runs *fast* - like “up to 5x faster than Transformer fast”[1](https://thegradient.pub/mamba-explained/#1).
  ![Scaling Laws for Mamba vs other Language Models](https://lh7-us.googleusercontent.com/uIkOGdo_oOuGilrgILP7E0KvNC8Y7ZL93om_wMUQCJEEIeSo0GtO4dzQ4bHMq5sdZu2ldL-fMrFy3KcLAr5_A8JhNOqqPyxFbYPPx016x1Djhr9VJ0lGzcEMvDDe5a-r0Wv-xvtneEYUSMJAsVS0OTY) ([View Highlight](https://read.readwise.io/read/01hv4sr2zgkh1qbe5h1t0p1f46))
- Mamba enjoys fast inference and linear scaling in sequence length, and its performance improves on real data up to million-length sequences. As a general sequence model backbone, Mamba achieves state-of-the-art performance across several modalities such as language, audio, and genomics. On language modelling, our Mamba-3B model outperforms Transformers of the same size and matches Transformers twice its size, both in pretraining and downstream evaluation. ([View Highlight](https://read.readwise.io/read/01hv4sr7996ww8nr0h62wrgh2e))
    - Tags: [[favorite]] 
- We’re very much in the Transformer-era of history. ML used to be about detecting cats and dogs. Now, with Transformers, we’re [generating human-like poetry](https://openai.com/research/gpt-4), [coding better than the median competitive programmer](https://storage.googleapis.com/deepmind-media/AlphaCode2/AlphaCode2_Tech_Report.pdf), and [solving the protein folding problem](https://www.nature.com/articles/s41586-021-03819-2).
  But Transformers have one core problem. In a transformer, every token can look back at every previous token when making predictions. For this lookback, we cache detailed information about each token in the so-called KV cache.
  ![attention](https://lh7-us.googleusercontent.com/dTD7M6vcg6ZBJPUyvFw_sOLbcZl6s6WXQbQ9Nfo3gq92G7bFIDBmr4Zj-Lahw7rZyHh6yKxRrSe790W04cyWAcRyM2rKkNz2wmsF_XJfP9mNJI5pSdst688I6o-brks05LF4N_5fNUPlQ1vvF8dOOdE) ([View Highlight](https://read.readwise.io/read/01hv4srbwqwa5d4cwbwbdhngvw))
- This pairwise communication means a forward pass is O(n²) time complexity in training (the dreaded quadratic bottleneck), and each new token generated autoregressively takes O(n) time. In other words, as the context size increases, the model gets *slower*.
  To add insult to injury, storing this key-value (KV) cache requires O(n) space.  Consequently, the dreaded CUDA out-of-memory (OOM) error becomes a significant threat as the memory footprint expands. If space were the only concern, we might consider adding more GPUs; however, with latency increasing quadratically, simply adding more compute might not be a viable solution.
  On the margin, we can mitigate the quadratic bottleneck with techniques like [Sliding Window Attention](https://paperswithcode.com/method/sliding-window-attention) or clever CUDA optimisations like [FlashAttention](https://arxiv.org/pdf/2205.14135.pdf). But ultimately, for super long context windows (like a chatbot which remembers every conversation you’ve shared), we need a different approach. ([View Highlight](https://read.readwise.io/read/01hv4srhdhjmdrcftr5w6ayfxd))
- Fundamentally, all good ML architecture backbones have components for two important operations:
  1. **Communication** *between* tokens
  2. **Computation** *within* a token
  ![Transformer Block](https://lh7-us.googleusercontent.com/WpckyY81cA3zGS1j1vq5lH-nZKiRdelILLO6OdiX05s4Psqe3oBpIZiy1IavhsutFkz4oa7V9ZjzGhjxcdMxD9Q_Z3pYelK04_7YA1-I-_PVu3SLDfBBK1c4-M3QcHh0MwzQcUR7wccwPKvjoXzS06I)
  The Transformer Block ([View Highlight](https://read.readwise.io/read/01hv4srpgka9jymcer361a22hr))
- In transformers, this is **Attention** (communication) and **MLPs** (computation). We improve transformers by optimising these two operations[2](https://thegradient.pub/mamba-explained/#ft2).
  We would like to substitute the Attention component[3](https://thegradient.pub/mamba-explained/#ft3) with an alternative mechanism for facilitating inter-token communication. Specifically, **Mamba** employs a Control Theory-inspired State Space Model, or **SSM,** for Communication purposes while retaining Multilayer Perceptron (MLP)-style projections for Computation.
  ![Mamba Block](https://lh7-us.googleusercontent.com/T4MbDYFoOq5yAKl9uEEs9tjMy-CxBYy2S2rxnKbo5PmlnumyMs3DWV5chNooGG2hGp8ES9vXLEkmjHqlEzoCocVAnN2nquNhcBVK4hnrsfDJfBjJs5RZvx2bMSZEkm5yZtrTt7wBZfMW_iQXp4u8cU0)
  The Mamba Block
  Like a Transformer made up of stacked transformer blocks, Mamba is made up of stacked Mamba blocks as above. ([View Highlight](https://read.readwise.io/read/01hv4stbwmg1haejwpp37vb3wy))
- Motivating Mamba - A Throwback to Temple Run
  Imagine we’re building a Temple Run agent[4](https://thegradient.pub/mamba-explained/#ft4). It chooses if the runner should move left or right at any time.
  ![Temple Run](https://thegradient.pub/content/images/2024/03/temple_run.png)
  To successfully pick the correct direction, we need information about our surroundings. Let’s call the collection of relevant information the state. Here the state likely includes your current position and velocity, the position of the nearest obstacle, weather conditions, etc.
  > *Claim 1: if you know the current state of the world and how the world is evolving, then you can use this to determine the direction to move.*
  Note that you don’t need to look at the whole screen all the time. You can figure out what will happen to most of the screen by noting that as you run, the obstacles move down the screen. You only need to look at the top of the screen to understand the new information and then simulate the rest.
  ![Temple Run](https://lh7-us.googleusercontent.com/09a_eDMzBRh-usMcrg1W-JnkWE59PbsAtAW3Q8z8NmeyHGCpGsKG58dJtHNTnVUunlBbGb7xKt8nExTChRxMdcs1a125J7p11vDMR77GzigsI3j797VQxLLB9e_ILa1l8A-BCy7psxnYBIoQzk6-2GQ)
  This lends itself to a natural formulation. Let h be the hidden state, relevant knowledge about the world. Also let x be the input, the observation that you get each time. h’ then represents the derivative of the hidden state, i.e. how the state is evolving. We’re trying to predict y, the optimal next move (right or left). ([View Highlight](https://read.readwise.io/read/01hv4sv22q7j4xjpnfvx5mz5yn))
- Now, Claim 1 states that from the hidden state h, h’, and the new observation x, you can figure out y.
  More concretely, h, the state, can be represented as a differential equation (Eq 1a):
  h′(t)=Ah(t)+Bx(t)h’(t) = \mathbf{A}h(t) + \mathbf{B}x(t)
  Knowing h allows you to determine your next move y (Eq 1b):
  y(t)=Ch(t)+Dx(t)y(t) = \mathbf{C}h(t) + \mathbf{D}x(t)
  The system's evolution is determined by its current state and newly acquired observations. A small new observation is enough, as the majority of the state can be inferred by applying known state dynamics to its previous state. That is, most of the screen isn’t new, it’s just a continuation of the previous state's natural downward trajectory. A full understanding of the state would enable optimal selection of the subsequent action, denoted as y.
  You can learn a lot about the system dynamics by observing the top of the screen. For instance, increased velocity of this upper section suggests an acceleration of the rest of the screen as well, so we can infer that the game is speeding up[5](https://thegradient.pub/mamba-explained/#ft5). In this way, even if we start off knowing nothing about the game and only have limited observations, it becomes possible to gain a holistic understanding of the screen dynamics fairly rapidly. ([View Highlight](https://read.readwise.io/read/01hv4sw3w2j3972jhbn7cn1085))
- Here, **state** refers to the variables that, when combined with the input variables, fully determine the future system behaviour. In theory, once we have the state, there’s nothing else we need to know about the past to predict the future. With this choice of state, the system is converted to a **Markov Decision Process**. Ideally, the state is a fairly small amount of information which captures the essential properties of the system. That is, **the state is a compression of the past**[6](https://thegradient.pub/mamba-explained/#ft6). ([View Highlight](https://read.readwise.io/read/01hv4swh33zz1qy4c713yv87qb))
- Discretisation - How To Deal With Living in a Quantised World
  Okay, great! So, given some state and input observation, we have an autoregressive-style system to determine the next action. Amazing!
  In practice though, there’s a little snag here. We’re modelling time as continuous. But in real life, we get new inputs and take new actions at discrete time steps[7](https://thegradient.pub/mamba-explained/#ft7). ([View Highlight](https://read.readwise.io/read/01hv4swz40345wq86z2vyb0chh))
- We would like to convert this *continuous-time differential equation* into a *discrete-time difference equation*. This conversion process is known as discretisation. Discretisation is a well-studied problem in the literature. Mamba uses the [Zero-Order Hold](https://en.wikipedia.org/wiki/Zero-order_hold) (ZOH) discretisation[8](https://thegradient.pub/mamba-explained/#ft8). To give an idea of what’s happening morally, consider a naive first-order approximation[9](https://thegradient.pub/mamba-explained/#ft9). ([View Highlight](https://read.readwise.io/read/01hv4sxfmgnnfatvea88fnrznr))
- Now, we can interpret the A, B, C, D matrices more intuitively:
  • A is the transition state matrix. It shows how you transition the current state into the next state. It asks “How should I forget the less relevant parts of the state over time?”
  • B is mapping the new input into the state, asking “What part of my new input should I remember?”[11](https://thegradient.pub/mamba-explained/#ft11)
  • C is mapping the state to the output of the SSM. It asks, “How can I use the state to make a good next prediction?”[12](https://thegradient.pub/mamba-explained/#ft12)
  • D is how the new input passes through to the output. It’s a kind of modified skip connection that asks “How can I use the new input in my prediction?” ([View Highlight](https://read.readwise.io/read/01hv4symrjr3arvyfhbf4t0v3b))
- At WWDC ‘97, Steve Jobs famously noted that “[focusing is about saying no](https://www.youtube.com/watch?v=H8eP99neOVs&t=98s)”. Focus is ruthless prioritisation. It’s common to think about Attention *positively* as choosing what to *notice*. In the Steve Jobs sense, we might instead frame Attention *negatively* as choosing what to *discard*.
  There’s a classic intuition pump in Machine Learning known as the Cocktail Party Problem[13](https://thegradient.pub/mamba-explained/#ft13). Imagine a party with dozens of simultaneous loud conversations:
  Question:
  *How do we recognise what one person is saying when others are talking at the same time?[14](https://thegradient.pub/mamba-explained/#ft14)*
  Answer:
  *The brain solves this problem by focusing your “attention” on a particular stimulus and hence drowning out all other sounds as much as possible.*
  ![Cocktail Party](https://lh7-us.googleusercontent.com/C18AUAf7863Uq5SHEwb4aQFcFoA4HW8olFXz_MvZ9HttqJNF2hvIfm3TEsNLhRkXyEJTOwhbtUyOh4QKV2qiGUXwA1sq2_CSTjO7FWPvK2YRnJgYvN859kqXo8pOkZffsXC0iO9z5yajWbc_9CvtwO8) ([View Highlight](https://read.readwise.io/read/01hv4t0gdq16kr66jqqygpq09n))
- Transformers use Dot-Product Attention to focus on the most relevant tokens. A big reason Attention is so great is that you have the potential to look back at everything that ever happened in its context. This is like photographic memory when done right.[15](https://thegradient.pub/mamba-explained/#ft15)
  Transformers (🤖) are extremely **effective**. But they aren’t very **efficient**. They store everything from the past so that they can look back at tokens with theoretically perfect recall.
  Traditional RNNs (🔁) are the opposite - they forget a lot, only recalling a small amount in their hidden state and discarding the rest. They are very **efficient** - their state is small. Yet they are less **effective** as discarded information cannot be recovered.
  We’d like something closer to the Pareto frontier of the effectiveness/efficiency tradeoff. Something that’s more effective than traditional RNNs and more efficient than transformers.
  ![Pareto Frontier](https://lh7-us.googleusercontent.com/V2BPTE_TEzO_CAXFnp54TL-nAzSpkiHN_PWZeWOgMN7TInAXL8i3hLgS8ruinxworyEl0248jU6y4Y86Wg1TJca-UjzjCrMQrmSpWceXJ-C4LIg6SJvJykJFfDBb12rIQi84B-aHKdPG_gWsxVkxT20)
  The Mamba Architecture seems to offer a solution which pushes out the Pareto frontier of effectiveness/efficiency. ([View Highlight](https://read.readwise.io/read/01hv4t15eafp1g0cb0fbcjkxpt))
- The Selection Mechanism
  **Selectivity** allows each token to be transformed into the state in a way that is unique to its own needs. Selectivity is what takes us from vanilla SSM models (applying the same A (forgetting) and B (remembering) matrices to every input) to Mamba, the ***Selective*** *State Space Model*.
  In regular SSMs, A, B, C and D are learned matrices - that is
  A=Aθ\mathbf{A} = \mathbf{A}_{\theta} etc. (where θ represents the learned parameters)
  With the Selection Mechanism in Mamba, A, B, C and D are also functions of x. That is A=Aθ(x)\mathbf{A} = \mathbf{A}_{\theta(x)} etc; the matrices are context dependent rather than static.
  ![SSM Algorithm](https://lh7-us.googleusercontent.com/wATzvqFAg8l5HWS9BSCi_OGZRkZ7XmoPfpuZkIaCgLNE1jwrocWaKn_j6OrSG_4n5uULQN6yYK1oWkR4_AbCTXnpaJDTw9PPmeF7btcFa4-7h1QESJIBxTPK4D5vbzFvGJKjxUu-kXqYnRi_oPiVAD4)
  Mamba (right) differs from traditional SSMs by allowing A,B,C matrices to be **selective** i.e. context dependent ([source](https://arxiv.org/abs/2312.00752)) ([View Highlight](https://read.readwise.io/read/01hv4t1z0rrdza52crm37r9zkf))
- Making A and B functions of x allows us to get the best of both worlds:
  • We’re selective about what we include in the state, which improves **effectiveness** vs traditional SSMs.
  • Yet, since the state size is bounded, we improve on **efficiency** relative to the Transformer. We have O(1), not O(n) space and O(n) not O(n²) time requirements.
  The Mamba paper authors write:
  *The efficiency vs. effectiveness tradeoff of sequence models is characterized by how well they compress their state: efficient models must have a small state, while effective models must have a state that contains all necessary information from the context. In turn, we propose that a fundamental principle for building sequence models is selectivity: or the context-aware ability to focus on or filter out inputs into a sequential state. In particular, a selection mechanism controls how information propagates or interacts along the sequence dimension.* ([View Highlight](https://read.readwise.io/read/01hv4t2ny37q8658vpebsz5fbt))
- Humans (mostly) don’t have photographic memory for everything they experience within a lifetime - or even within a day! There’s just way too much information to retain it all. Subconsciously, we select what to remember by choosing to forget, throwing away most information as we encounter it. Transformers (🤖) decide what to focus on at **recall time**. Humans (🧑) also decide what to throw away at **memory-making time**. Humans filter out information early and often.
  If we had infinite capacity for memorisation, it’s clear the transformer approach is better than the human approach - it truly is more effective. But it’s less efficient - transformers have to store so much information about the past that might not be relevant. Transformers (🤖) only decide what’s relevant at **recall time**. The innovation of Mamba (🐍) is allowing the model better ways of forgetting earlier - it’s focusing by choosing what to *discard* using **Selectivity**, throwing away less relevant information at **memory-making time**[16](https://thegradient.pub/mamba-explained/#ft16). ([View Highlight](https://read.readwise.io/read/01hv4t3mb8mjsaw186ed3ck2gt))
- Applying the Selection Mechanism does have its gotchas though. Non-selective SSMs (i.e. A,B not dependent on x) are fast to compute in training. This is because the component of
  Yt which depends on xi can be expressed as a linear map, i.e. a single matrix that can be precomputed!
  For example (ignoring the D component, the skip connection):
  y2=CBx2+CABx1+CAABx0
  y_2 = \mathbf{C}\mathbf{B}x_2 + \mathbf{C}\mathbf{A}\mathbf{B}x_1 + \mathbf{C}\mathbf{A}\mathbf{A}\mathbf{B}x_0
  If we’re paying attention, we might spot something even better here - this expression can be written as a convolution. Hence we can apply the Fast Fourier Transform and the Convolution Theorem to compute this *very* efficiently on hardware as in Equation 3 below. ([View Highlight](https://read.readwise.io/read/01hv4t42td0brsqhvsexqxqgz3))
- Machine Learning for Political Economists - How Large Should The State Be?
  The Mamba authors write, “the efficiency vs. effectiveness tradeoff of sequence models is characterised by how well they compress their state”. In other words, like in political economy[18](https://thegradient.pub/mamba-explained/#ft18), the fundamental problem is how to manage the state.
  🔁 **Traditional RNNs are anarchic**
  *They have a small, minimal state. The size of the state is bounded. The compression of state is poor.*
  🤖 **Transformers are communist**
  *They have a maximally large state. The “state” is just a cache of the entire history with no compression. Every context token is treated equally until recall time.*
  🐍**Mamba has a compressed state**
  *…but it’s selective about what goes in. Mamba says we can get away with a small state if the state is well focused and effective[19](https://thegradient.pub/mamba-explained/#ft19).*
  ![Language Models and State Size](https://lh7-us.googleusercontent.com/rkN6fi0try__wiIKQ1D9gbHvCrW_dHsKV0jckG85H7P3_Lx1Vm2vHfeb7Zs6N50lnjVx04A3QTQb2JSjMltn8C0kFmvB4DPUgsjj_DEAGu8O-LcKlY7G0RLgLCCsDV_R1W4pkkE67_2rnyx0vCMnayM)
  Language Models and State Size ([View Highlight](https://read.readwise.io/read/01hv4t5acsv1b8ddp9gc5t6bhv))
- nformation Flow in Transformer vs Mamba
  How do Transformers know anything? At initialization, a transformer isn’t very smart. It learns in two ways:
  1. Training data (Pretraining, SFT, RLHF etc)
  2. In context-data
  Training Data
  Models learn from their training data. This is a kind of lossy compression of input data into the weights. We can think of the effect of pretraining data on the transformer kinda like the effect of your ancestor’s experiences on your genetics - you can’t recall their experiences, you just have vague instincts about them[20](https://thegradient.pub/mamba-explained/#ft20).
  In Context-Data
  Transformers use their context as short-term memory, which they can recall with ~perfect fidelity. So we get [In-Context Learning](https://thegradient.pub/in-context-learning-in-context/), e.g. using induction heads to solve the [Indirect Object Identification](https://arxiv.org/pdf/2211.00593.pdf) task, or [computing Linear Regression](https://proceedings.neurips.cc/paper_files/paper/2022/file/c529dba08a146ea8d6cf715ae8930cbe-Paper-Conference.pdf).
  Retrieval
  Note that Transformers don’t filter their context at all until recall time. So if we have a bunch of information we think *might* be useful to the Transformer, we filter it *outside* the Transformer (using Information Retrieval strategies) and then stuff the results into the prompt. This process is known as Retrieval Augmented Generation (RAG). RAG determines relevant information for the context window of a transformer. A human with the internet is kinda like a RAG system - you still have to know what to search but whatever you retrieve is as salient as short-term memory to you. ([View Highlight](https://read.readwise.io/read/01hv4t9t7h9q7wwp86vrj6kwmt))
- Information Flow for Mamba
  Training Data acts similarly for Mamba. However, the lines are slightly blurred for in-context data and retrieval. In-context data for Mamba *is* compressed/filtered similar to retrieval data for transformers. This in-context data is also accessible for look-up like for transformers (although with somewhat lower fidelity).
  ![The Information Flow in Mamba](https://lh7-us.googleusercontent.com/0dxiIk5NUI9g_P7G5lr5CSziEVKABYdtIW-R4Rxi6OHwWV_vLYVb1wtetVmzNtRWcLngldL4A8WUQA2jhIQj-IJmpaYr97xt-2Du_dxVOe5ppA4EcRNxEbjQvmjbND_DhyKhO6nsnS4nf1NxvRLwx-o)
  Transformer context is to Mamba states what short-term is to long-term memory. Mamba doesn’t just have “RAM”, it has a hard drive[21](https://thegradient.pub/mamba-explained/#ft21) [22](https://thegradient.pub/mamba-explained/#ft22). ([View Highlight](https://read.readwise.io/read/01hv4tae3e7ar5pxm7jkxbb6kx))
- Swapping States as a New Prompting Paradigm
  Currently, we often use RAG to give a transformer contextual information.
  With Mamba-like models, you could instead imagine having a library of states created by running the model over specialised data. States could be shared kinda like [LoRAs](https://paperswithcode.com/paper/lora-low-rank-adaptation-of-large-language) for image models.
  For example, I could do inference on 20 physics textbooks and, say, 100 physics questions and answers. Then I have a state which I can give to you. Now you don’t need to add any few-shot examples; you just simply ask your question. **The in-context learning is in the state**.
  In other words, you can drag and drop downloaded states into your model, like literal plug-in cartridges. And note that “training” a state doesn’t require any backprop. It’s more like a highly specialised one-pass fixed-size compression algorithm. This is unlimited in-context learning applied at inference time for zero-compute or latency[23](https://thegradient.pub/mamba-explained/#ft23). ([View Highlight](https://read.readwise.io/read/01hv4tbbw2s5hxmyey40scsm1q))
- The structure of an effective LLM call goes from…
  1. System Prompt
  2. Preamble
  3. Few shot-examples
  4. Question
  …for Transformers, to simply…
  1. Inputted state (with problem context, initial instructions, textbooks, and few-shot examples)
  2. Short question
  …for Mamba.
  This is cheaper and faster than few-shot prompting (as the state is infinitely reusable without inference cost). It’s also MUCH cheaper than finetuning and doesn’t require any gradient updates. We could imagine retrieving states in addition to context. ([View Highlight](https://read.readwise.io/read/01hv4tbgq6hw1rcrpsvts8vr84))
- Mamba & Mechanistic Interpretability
  Transformer interpretability typically involves:
  1. understanding token relationships via attention,
  2. understanding circuits, and
  3. using [Dictionary Learning](https://www.kolaayonrinde.com/blog/2023/11/03/dictionary-learning.html) for unfolding MLPs.
  Most of the ablations that we would like to do for Mamba are still valid, but understanding token communication (1) is now more nuanced. All information moves between tokens via hidden states instead of the Attention Mechanism which can “teleport” information from one sequence position to another.
  For understanding in-context learning (ICL) tasks with Mamba, we will look to intervene on the SSM state. A classic task in-context learning task is [Indirect Object Identification](https://arxiv.org/pdf/2211.00593.pdf) in which a model has to finish a paragraph like: ([View Highlight](https://read.readwise.io/read/01hv4tbwm66t1q513ppbfsyg0w))
- Mamba-like models are likely to excel in scenarios requiring extremely long context and long-term memory. Examples include:
  • Processing DNA
  • Generating (or reasoning over) video
  • Writing novels
  An illustrative example is agents with long-term goals.
  *Suppose you have an agent interacting with the world. Eventually, its experiences become too much for the context window of a transformer. The agent then has to compress or summarise its experiences into some more compact representation.*
  *But how do you decide what information is the most useful as a summary? If the task is language, LLMs are actually fairly good at summaries - okay, yeah, you’ll lose some information, but the most important stuff can be retained.*
  *However, for other disciplines, it might not be clear how to summarise. For example, what’s the best way to summarise a 2 hour movie?[24](https://thegradient.pub/mamba-explained/#ft24). Could the model itself learn to do this naturally rather than a hacky workaround like trying to describe the aesthetics of the movie in text?*
  This is what Mamba allows. Actual long-term memory. A real state where the model learns to keep what’s important. [Prediction is compression](https://arxiv.org/pdf/2309.10668.pdf) - learning what’s useful to predict what’s coming next inevitably leads to building a useful compression of the previous tokens. ([View Highlight](https://read.readwise.io/read/01hv4te6hgx21aw6kj20vzsyhc))
- The Best Collab Since Taco Bell & KFC: 🤖 x 🐍
  The Mamba authors show that there’s value in combining Mamba’s long context with the Transformer’s high fidelity over short sequences. For example, if you’re making long videos, you likely can’t fit a whole movie into a Transformer’s context for attention[26](https://thegradient.pub/mamba-explained/#ft26). You could imagine having Attention look at the most recent frames for short-term fluidity and an SSM for long-term narrative consistency[27](https://thegradient.pub/mamba-explained/#ft27).
  * * *
  This isn’t the end for Transformers. Their high effectiveness is exactly what’s needed for many tasks. But now Transformers aren’t the only option. Other architectures are genuinely feasible.
  So we’re not in the post-Transformer era. But for the first time, we’re living in the post-only-Transformers era[28](https://thegradient.pub/mamba-explained/#ft28). And this blows the possibilities wide open for sequence modelling with extreme context lengths and native long-term memory. ([View Highlight](https://read.readwise.io/read/01hv4tf9rvb722edmqwcfefde6))
