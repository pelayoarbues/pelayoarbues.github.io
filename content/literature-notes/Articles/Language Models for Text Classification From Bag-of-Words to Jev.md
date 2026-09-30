---
author: "[[Sebastian Raschka, PhD]]"
title: 'Language Models for Text Classification: From Bag-of-Words to Jev'
date: "2026-09-30"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substack-post-media.s3.amazonaws.com/public/images/0015e77a-5140-4139-b361-78e28d18df17_2494x1304.png)

## Metadata
- Author: [[Sebastian Raschka, PhD]]
- Full Title: Language Models for Text Classification: From Bag-of-Words to Jev
- URL: https://magazine.sebastianraschka.com/p/classifier-history-and-jev

## Highlights
- The recently released [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) AI model has been quite a cultural phenomenon in technical communities in the past 2 weeks.
  While Jev aims to classify things, it’s easy to dismiss Jev as “just a classifier,” and my own view of Jev has evolved quite a bit over the past few days. In particular, my thoughts went from “classifiers used to be my bread & butter; I can easily build this myself” (more on this later) to “wow, this actually works better than I thought.” ([View Highlight](https://read.readwise.io/read/01m3rnj8th8sz4vsf0fsc8qsj5))
- [
  ![jev-intro](https://substackcdn.com/image/fetch/$s_!0Q-x!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5481509-dd15-42bf-9ce0-29a292276016_6461x3353.png "jev-intro")
  ](https://substackcdn.com/image/fetch/$s_!0Q-x!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5481509-dd15-42bf-9ce0-29a292276016_6461x3353.png)
  Figure 1: Quick overview of the Jev API; more details on that later. ([View Highlight](https://read.readwise.io/read/01m3rnjbrewvhepbawpcka26zn))
- Sure, the latest state-of-the-art GPT and open-weight LLMs can do the same kinds of classification tasks as Jev, while also being capable of much more general decision-making. But Jev’s advantage is that it can handle those classification tasks much faster and more cheaply.
  At the other end of the spectrum, for a narrow, well-defined problem, Jev probably won’t classify anything better, faster, or cheaper than a special-purpose classifier. But its selling point is that it is far more general than those task-specific models. ([View Highlight](https://read.readwise.io/read/01m3rnjxbz8mxmagbsga1gnfyp))
- So, what is the methodology behind Jev (based on an educated guess), what can it do, and why is it so popular? I aim to answer all of these later in this article. However, I thought starting with a brief history of language models for decision-making would be a great way to begin. And it hopefully helps demystify some of the hype and show what Jev does very well (”Jev is essentially a text classifier,” but “Jev is also not ‘just’ a text classifier.”) ([View Highlight](https://read.readwise.io/read/01m3rnk4f94z1emdpry3mjsx7e))
- 1. Language modeling and classification in the pre-transformer era
  For completeness, before we put Jev in context (no pun intended), I thought it made the most sense to start chronologically. In this section, I want to take a brief tour of applied text classification via naive Bayes, logistic regression, and the more classic (deep) neural networks before transformer-based models came along. ([View Highlight](https://read.readwise.io/read/01m3rnkg1bnm176r8aaj4y89m7))
- 1.1 Bag-of-words: naive Bayes, logistic regression, and XGBoost
  Back in the day, when I was a grad student 15 years ago, even though recurrent neural networks already existed (more on that later), text classification was usually done with a bag-of-words representation because it was straightforward and could get good results on moderately sized datasets.
  In short, we can think of the bag-of-words representation as a method that makes free-form text input of different lengths compatible with classic classifiers (naive Bayes, Logistic Regression, SVMs, Random Forest, XGBoost, to name a few), which expect a fixed-size input vector.
  Popular real-world applications include anything from news article classification to email spam filtering. And yes, allegedly even Gmail’s original spam filter used a Naive Bayes model with a bag-of-words representation. ([View Highlight](https://read.readwise.io/read/01m3rnm00bwtsbgzvchgsgtd95))
- So, what exactly is this bag-of-words representation? It’s a way to convert free-form texts with different lengths, e.g.,
  • Training example 1: *“Zentropa is the most original movie I’ve seen in years. If you like unique thrillers that are influenced by film noir, then this is just the right cure for all of those Hollywood summer blockbusters clogging the theaters these days. Von Trier’s follow-ups like Breaking the Waves have gotten more acclaim, but this is really his best work.”*
  • Training example 2: *“This film is just plain horrible. John Ritter doing pratt falls, 75% of the actors delivering their lines as if they were reading them from cue cards, poor editing, horrible sound mixing”*
  • Training example 3: *“Zentropa has much in common with The Third Man, another noir-like film set among the rubble of postwar Europe.”*
  into a fixed-size representation for the aforementioned “classic” classifiers. (The example above is an excerpt from the popular [IMDb movie review classification dataset](https://ai.stanford.edu/~amaas/data/sentiment/).)
  [
  ![bow](https://substackcdn.com/image/fetch/$s_!WLtd!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f041db0-58bb-43db-a07c-ac672b613470_7769x3701.png "bow")
  ](https://substackcdn.com/image/fetch/$s_!WLtd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f041db0-58bb-43db-a07c-ac672b613470_7769x3701.png) ([View Highlight](https://read.readwise.io/read/01m3rnmab4ree0h721rzzsa37t))
- A bag-of-words model starts by building the vocabulary, which consists of all unique words in the training set (optionally, one can get rid of so-called stopwords like “a” and “the”, which are words that carry little to no semantic meaning in most contexts).
  A bag-of-words representation results in these fixed-size inputs by assigning each word in a vocabulary its own position in a vector. We then count how often each word occurs in a document. For example, if we have a vocabulary of 50,000 unique words, it produces a fixed-size vector with 50,000 entries, regardless of whether the input consists of only ten words or 300k words. Note that most entries are zero because each document contains only a small subset of the vocabulary. (Instead of representing the raw counts, there are also normalization schemes like TF-IDF.) ([View Highlight](https://read.readwise.io/read/01m3rnn8qzg5x6qtqbnnwyj1yc))
- Then, once we have these word frequency vectors, we can train a classifier on a labeled training set, such as emails labeled as spam or non-spam. For example, a logistic regression model would then learn feature weights that correlate certain words (and word counts) with particular labels. For instance, certain words might increase the predicted spam probability, and others may decrease it.
  This approach is computationally cheap and can work well when particular words provide strong clues about the label. In a simple classification task such as spam classification, this is often enough to get quick, reasonably accurate results.
  But one of the biggest downsides of this approach is that, because of the nature of the bag-of-words representation, it loses word order. So, for example, “the dog bites the man” and “the man bites the dog” produce identical vectors despite describing different events. ([View Highlight](https://read.readwise.io/read/01m3rnnsqgqzqe5w4vvdjcx8c5))
- (There are some workarounds to preserve some local order by adding word pairs or longer sequences, called n-grams, as features, although this increases the vocabulary size.)
  Despite the shortcomings, I still think that a bag-of-words has its place in certain low-stakes applications because it’s so cheap, and a bag-of-words representation + logistic regression remains my go-to baseline for every text classification problem, since it’s so easy to implement.
  [
  ![logreg](https://substackcdn.com/image/fetch/$s_!qNQv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fbb03a2-bb84-407b-8e08-f298e72a85f2_3907x2469.png "logreg")
  ](https://substackcdn.com/image/fetch/$s_!qNQv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fbb03a2-bb84-407b-8e08-f298e72a85f2_3907x2469.png) ([View Highlight](https://read.readwise.io/read/01m3rnny8ntfq13zex0wbk7tbt))
- 1.2 Deep neural networks for text classification
  The aforementioned bag-of-words model would also work with (simple) deep neural networks, like multilayer perceptrons. But the downside still is that we would lose the sentence structure and word order.
  However, more sophisticated neural network architectures avoid the bag-of-words workaround: convolutional neural networks (CNNs) and recurrent neural networks (RNNs), which can take word embeddings as input. ([View Highlight](https://read.readwise.io/read/01m3rnpafqmaqs909ae0pjm1e7))
- First, before feeding the input texts into a model, we have to convert them into a suitable representation. One such representation is bag-of-words. Another is word embedding vectors. The difference is that a bag-of-words vector represents the entire text by counting how often each vocabulary word occurs, while a word embedding represents an individual word as a dense vector of learned numbers.
  [
  ![word-embeddings](https://substackcdn.com/image/fetch/$s_!2shX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb7384f46-af12-44c5-a1b4-5ec0c023094c_7579x3181.png "word-embeddings")
  ](https://substackcdn.com/image/fetch/$s_!2shX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb7384f46-af12-44c5-a1b4-5ec0c023094c_7579x3181.png) ([View Highlight](https://read.readwise.io/read/01m3rnpex1y1px47va017gz6hf))
- Word embeddings work similarly to embedding layers in LLMs, i.e., they convert input tokens into dense vectors. Embeddings can happen outside the model (e.g., two classic, popular methods for learning them are [Word2Vec](https://arxiv.org/abs/1301.3781) and [GloVe](https://aclanthology.org/D14-1162/)), or the embedding layer can be part of the neural network architecture itself and be learned and tuned during model training.
  These classic embeddings are context-independent at lookup time. The word “bank”, for example, gets the same vector in “river bank” and “bank account” (as you may know, context can be handled via concepts like attention).
  For additional resources on embeddings, you may find the following ones helpful:
  • [Chapter 2: Working with Text Data](https://github.com/rasbt/LLMs-from-scratch/blob/main/ch02/01_main-chapter-code/ch02.ipynb) (this is an LLM chapter but should give you the gist of embedding words or tokens; in LLM tokenizers, we split words into subword tokens; in Word2Vec, 1 word is usually 1 token.)
  • [Understanding the Difference Between Embedding Layers and Linear Layers](https://github.com/rasbt/LLMs-from-scratch/blob/main/ch02/03_bonus_embedding-vs-matmul/embeddings-and-linear-layers.ipynb) (this is an illustration that shows when embedding vectors are mathematically equivalent to Linear layers and matrix multiplications.) ([View Highlight](https://read.readwise.io/read/01m3rnpmssx0tx1x4b5g84sh74))
- .2.2 Recurrent neural networks (RNNs)
  Since many of you are probably familiar with recurrent neural networks (RNNs), I will keep this section short. RNNs are a classic go-to neural network architecture for natural language processing, and popular variants go back to the 1980s and early 1990s. Transformers, which were introduced in 2017 (and using the attention mechanisms that were first introduced in RNNs; see my [Understanding Large Language Models](https://magazine.sebastianraschka.com/p/understanding-large-language-models) for a brief timeline), then gradually replaced them in many NLP applications. ([View Highlight](https://read.readwise.io/read/01m3rnq54er3h65x6a9m6ypsdv))
- RNNs read a sequence (like text) one word at a time. At each step, they combine the current word embedding (discussed in the previous section) with a hidden state from the previous step. We can think of the hidden state as a fixed-size vector that summarizes the text processed so far, so this makes word order matter, because rearranging the words changes the sequence of state updates.
  [
  ![rnn-classify](https://substackcdn.com/image/fetch/$s_!k4d9!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63c0da28-827d-4a59-9fed-cb283e57ad1b_7776x4745.png "rnn-classify")
  ](https://substackcdn.com/image/fetch/$s_!k4d9!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63c0da28-827d-4a59-9fed-cb283e57ad1b_7776x4745.png) ([View Highlight](https://read.readwise.io/read/01m3rnq7sy5ecc3nynay8m9gfg))
- Note that the figure above shows the RNN in the unrolled representation. I.e., the RNN reuses the same layer stack for each input, hence the term “recurrent”. And since it’s “recurrent”, the input text can have an arbitrary length. The figure below illustrates the “recurrence” with the unrolled representation side by side. Note that both show the identical architecture, it’s just a different visualization.
  [
  ![rolled-rnn](https://substackcdn.com/image/fetch/$s_!JOy3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc3e8a8d-8e3b-4989-8b42-564cf84c80b6_7675x3257.png "rolled-rnn")
  ](https://substackcdn.com/image/fetch/$s_!JOy3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc3e8a8d-8e3b-4989-8b42-564cf84c80b6_7675x3257.png) ([View Highlight](https://read.readwise.io/read/01m3rnqxvrkbdwbqhcjkpjesjr))
- RNNs were notoriously hard to train, and there are important improvements to RNNs, like [Long short-term memory](https://www.bioinf.jku.at/publications/older/2604.pdf) (LSTM) networks, introduced in 1997, and [gated recurrent units](https://aclanthology.org/D14-1179/) (GRUs), introduced in 2014, which use learned gates to control how information is retained and updated. (There is also the more recent [xLSTM: Extended long short-term memory](https://proceedings.neurips.cc/paper_files/paper/2024/hash/c2ce2f2701c10a2b2f2ea0bfa43cfaa3-Abstract-Conference.html), introduced in 2024).
  Also, state-space models are inspired by this idea of a fixed-size hidden state updated sequentially, which is cheaper than transformer attention. However, the bottleneck is still how much information the hidden state can retain, and it still has to be processed sequentially. (Fun fact: attention was first developed for RNNs before the transformer architecture came along, but it’s a story for another time; I’ve written about it in my [Understanding Large Language Models](https://magazine.sebastianraschka.com/p/understanding-large-language-models) article.) ([View Highlight](https://read.readwise.io/read/01m3rnrn7qz29hx4wmb5xwyjyt))
- The bottom line is that RNNs can be used to train text classifiers. Coming back to the IMDb movie review dataset, the bag-of-words classifier with logistic regression achieved about 89.9% accuracy (on a balanced dataset), while an LSTM RNN achieved only 85.66% accuracy. Yes, RNNs can be harder to train (stay tuned for the ULMFiT method below, which trains an RNN with much higher accuracy).
  [
  ![rnn-imdb](https://substackcdn.com/image/fetch/$s_!PvQO!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdbb8bd45-04a6-47c5-bbdb-b87fe171b32b_3866x2127.png "rnn-imdb")
  ](https://substackcdn.com/image/fetch/$s_!PvQO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdbb8bd45-04a6-47c5-bbdb-b87fe171b32b_3866x2127.png)
  Figure 8: A simple RNN with LSTM [tutorial](https://github.com/rasbt/machine-learning-book/blob/main/ch15/ch15_part2.ipynb). This model achieves 85.66% accuracy (on a balanced dataset); the higher training accuracy indicates substantial overfitting.
  Note that this RNN was trained from scratch. A better approach is to pre-train the model on a larger dataset first, then fine-tune it on this target dataset (classically, we call this approach “transfer learning”). ([View Highlight](https://read.readwise.io/read/01m3rns4av5tj94s7w7vpc2y9w))
- In the natural language processing domain, one of the most influential papers proposing this approach is [ULMFiT](https://arxiv.org/abs/1801.06146) (2018), which achieved an impressive 95.4% test accuracy on IMDb.
  [
  ![ulmfit](https://substackcdn.com/image/fetch/$s_!HZOG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5e8aeef2-95e4-415a-8f5f-93895d1f2eb2_4470x2477.png "ulmfit")
  ](https://substackcdn.com/image/fetch/$s_!HZOG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5e8aeef2-95e4-415a-8f5f-93895d1f2eb2_4470x2477.png)
  Figure 9: Annotated figure from the [ULMFiT](https://arxiv.org/abs/1801.06146) paper. ([View Highlight](https://read.readwise.io/read/01m3rns8p3fjnze71cp080bykc))
- 1.2.3 Convolutional neural networks (CNNs)
  You probably know convolutional neural networks (CNNs) from their use in computer vision. However, it is also possible, although historically less common, to use them for text.
  [
  ![cnn-vision](https://substackcdn.com/image/fetch/$s_!ZK8R!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbacd70f8-4159-41b2-a812-9ab65de29f2b_7288x2635.png "cnn-vision")
  ](https://substackcdn.com/image/fetch/$s_!ZK8R!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbacd70f8-4159-41b2-a812-9ab65de29f2b_7288x2635.png)
  Figure 10: Illustration of a convolutional neural network (CNN) to classify images.
  As shown in the image classification example in the figure above, CNNs apply learned filters to image patches (windows). Similarly, in the natural language domain, we can apply learned filters to windows of adjacent word embeddings.
  [
  ![cnn-all](https://substackcdn.com/image/fetch/$s_!zRgr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b710ad1-6fad-47a7-9b79-192b61097194_7935x7279.png "cnn-all")
  ](https://substackcdn.com/image/fetch/$s_!zRgr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b710ad1-6fad-47a7-9b79-192b61097194_7935x7279.png)
  Figure 11: A CNN for text classification, step by step. Only 1 filter (channel) for simplicity.
  As illustrated in the figure above, a convolutional filter with a window size of three uses the same weights for each adjacent group of three words. Then, as it slides over the inputs, it moves the filter one word at a time across “the movie had surprisingly good acting”. So, this gives four windows (ignoring padding for simplicity):
  • 1: “the movie had”
  • 2: “movie had surprisingly”
  • 3: “had surprisingly good”
  • 4: “surprisingly good acting”
  So, in the last layer, before the classification head, we can either flatten or global max pool the results before connecting it to the classification head. While flattening preserves all information, it would produce differently sized vectors depending on the text input length. (E.g., if “the movie had surprisingly good acting” were longer, we would have longer feature maps.) So, to make it input-length agnostic, global max-pooling would be a better option here. ([View Highlight](https://read.readwise.io/read/01m3rnsm2k2epp9mfzqt1vch5p))
- In short, we can visualize the text CNN as shown below.
  [
  ![cnn-summary](https://substackcdn.com/image/fetch/$s_!7qXx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F88ad7444-1759-4966-a53e-4744f13ff889_7748x2519.png "cnn-summary")
  ](https://substackcdn.com/image/fetch/$s_!7qXx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F88ad7444-1759-4966-a53e-4744f13ff889_7748x2519.png)
  Figure 12: CNN for text classification with multiple filters (channels).
  Also, what’s nice is that the filter computations across positions can run in parallel, which avoids the step-by-step dependency of an RNN.
  For a quick comparison, on the aforementioned IMDb dataset, my experiments show that such a CNN gets about 90.07% accuracy (but note that this is highly architecture-dependent; for example, you may know from computer vision contexts that accuracies can vary widely). (E.g., the good old AlexNet had a ~62.5% top-1 accuracy on ImageNet, and a ConvNeXt V2-H gets 88.9%.)
  [
  ![cnn-imdb](https://substackcdn.com/image/fetch/$s_!CSes!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F91765c78-a4d8-48bf-ade0-10b515441b8a_4442x2189.png "cnn-imdb")
  ](https://substackcdn.com/image/fetch/$s_!CSes!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F91765c78-a4d8-48bf-ade0-10b515441b8a_4442x2189.png) ([View Highlight](https://read.readwise.io/read/01m3rnxjjdev916ca1s4fvfgrs))
- In 2017, the original transformer architecture was introduced in the [Attention Is All You Need](https://arxiv.org/abs/1706.03762) paper. ([View Highlight](https://read.readwise.io/read/01m3rnxxftc6x79rqr968b0701))
- The key point is that the original transformer architecture was an encoder-decoder setup used for language translation, but it can be easily adapted for text classification tasks, as I’ll illustrate in the following sections.
  [
  ![attention-is-all-you-need](https://substackcdn.com/image/fetch/$s_!y9UZ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd94764e4-62ed-4c95-b468-80fb6f9a6621_6217x7963.png "attention-is-all-you-need")
  ](https://substackcdn.com/image/fetch/$s_!y9UZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd94764e4-62ed-4c95-b468-80fb6f9a6621_6217x7963.png) ([View Highlight](https://read.readwise.io/read/01m3rny2k94j6526e2nkc1xmga))
- I remember all too well the first years after the original transformer architecture release. They were pretty much defined by the rivalry between two different approaches:
  1. Encoder-style models like BERT, primarily developed by Google;
  2. Decoder-style models like GPT, primarily developed by OpenAI.
  Encoder-style models were natural text classifiers, whereas GPT models could do zero- and few-shot classification as an emergent property, but their strength was more in generative tasks.
  But let’s start with encoder-style models and how to fine-tune and use them to classify text.
  One universal aspect of using transformers, whether encoder- or decoder-style, is that we work with models pre-trained on large text corpora, and, in addition to using them as zero- or few-shot classifiers, we can fine-tune them on the target dataset (similar to ULMFiT, as mentioned in the RNN section earlier).
  As shown in the figure excerpt from the [BERT paper](https://arxiv.org/abs/1810.04805) (2018) below, BERT-/encoder-style models have a classification token at the first position that we can conveniently fine-tune for this.
  [
  ![bert-annotate](https://substackcdn.com/image/fetch/$s_!zrSS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59456abf-cf68-4d6e-9c92-73ad3e593665_4982x3213.png "bert-annotate")
  ](https://substackcdn.com/image/fetch/$s_!zrSS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59456abf-cf68-4d6e-9c92-73ad3e593665_4982x3213.png) ([View Highlight](https://read.readwise.io/read/01m3rnyf96crkbg6wsxmv0ftp6))
- While BERT models are not nearly as popular as autoregressive GPT-style transformers, thankfully some people still update and modernize them occasionally. One recent example that is often my go-to for classification tasks is the 2024 [ModernBERT](https://arxiv.org/abs/2412.13663) model.
  As shown below, on the IMDb movie reviews, ModernBERT gets approximately 95% accuracy with very little fine-tuning effort.
  [
  ![bert-imdb](https://substackcdn.com/image/fetch/$s_!GqmY!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4cc75fe-608d-47fc-95aa-14f3f2b58b83_4147x2928.png "bert-imdb")
  ](https://substackcdn.com/image/fetch/$s_!GqmY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4cc75fe-608d-47fc-95aa-14f3f2b58b83_4147x2928.png) ([View Highlight](https://read.readwise.io/read/01m3rnytbdzwm9pbsdkb1874d5))
- Decoder-style LLMs
  LLMs like GPT are decoder-style, autoregressive transformers that are the center of all attention (no pun intended) for generating text and code.
  However, as I explained in chapter 6 of my [Build A Large Language Model (From Scratch)](https://amzn.to/4fqvn0D) book, as a gentle introduction to fine-tuning (before covering instruction fine-tuning), we can also repurpose these for text classification.
  Sure, we can also prompt an LLM directly, as shown in the screenshot below.
  [
  ![prompt-gpt](https://substackcdn.com/image/fetch/$s_!Rh-F!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0be7e4aa-5436-46cf-8e85-809f776f39e1_4920x3189.png "prompt-gpt")
  ](https://substackcdn.com/image/fetch/$s_!Rh-F!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0be7e4aa-5436-46cf-8e85-809f776f39e1_4920x3189.png) ([View Highlight](https://read.readwise.io/read/01m3rnzrnhjwyy9hfmgbtz7n0r))
- However, if we want structured outputs and we have a specific target domain in mind, this is unnecessarily brittle and inefficient.
  Instead, we can replace the output layer with a leaner classification head, as illustrated below:
  [
  ![gpt-head](https://substackcdn.com/image/fetch/$s_!T3RZ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9065aa90-305d-4373-bf45-73d82ec86768_1943x1931.png "gpt-head")
  ](https://substackcdn.com/image/fetch/$s_!T3RZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9065aa90-305d-4373-bf45-73d82ec86768_1943x1931.png)
  Figure 18: Swapping the output layer of a GPT-style model with a leaner classification head.
  Now, fine-tuning has a few caveats. For instance, because of the autoregressive attention mask, we have to be careful about how we design fine-tuning so that the classification token has information about all other tokens in the sequence.
  [
  ![attention-masks](https://substackcdn.com/image/fetch/$s_!5cCi!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6bc5509-085e-4b93-b557-566a5a05f0ff_2940x2021.png "attention-masks")
  ](https://substackcdn.com/image/fetch/$s_!5cCi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6bc5509-085e-4b93-b557-566a5a05f0ff_2940x2021.png)
  Figure 19: Attention masks in BERT and GPT. ([View Highlight](https://read.readwise.io/read/01m3rp09y1qwwv9ddj6h723fz2))
- Overall, though, the advantage of using GPT-style LLMs over e.g., BERT variants is that there are so many modern open-weight architectures out there to adopt. Anything between the small Qwen 3 0.6B models to the latest Kimi, GLM, or DeepSeek models. (Of course, using such >1B parameter models for classification could be a bit overkill from an efficiency perspective, but hey, it’s possible.)
  [
  ![gpt-classify](https://substackcdn.com/image/fetch/$s_!z4j3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb41880c4-c2e4-4deb-b97b-13d82b47c8c7_4164x2928.png "gpt-classify")
  ](https://substackcdn.com/image/fetch/$s_!z4j3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb41880c4-c2e4-4deb-b97b-13d82b47c8c7_4164x2928.png)
  Figure 20: On the aforementioned IMDb movie review dataset, a relatively small GPT-2 124M model gets approximately 92% accuracy; a larger and newer LLM (like a recent Qwen3 variant) would likely perform better. ([View Highlight](https://read.readwise.io/read/01m3rp0rgnvk7xhc21sdybyjky))
- While the original transformer architecture (an encoder-decoder) was split into two paradigms, encoder-style models like BERT and decoder-style LLMs like GPT, there were also efforts to use encoder-decoder-style variants, with the most recent variant (somewhat unexpectedly) being [DeepSeek V4.1 Flash](https://sebastianraschka.com/llm-architecture-gallery/#card-deepseek-v4-1-flash). (However, in this case, it’s a causal encoder not a bidirectional one as in T5.)
  Keeping the focus on encoder-decoder architectures for classification, probably the most prominent candidate is Google’s 2019 [T5 (Text-to-Text Transfer Transformer)](https://arxiv.org/abs/1910.10683). ([View Highlight](https://read.readwise.io/read/01m3rp1acgwkw36cmrygkgwztj))
- Architecturally, the differences between T5 and the original transformer include updates to the architecture (as summarized below), as well as changes to training. The original transformer was trained to do language translation (in a supervised fashion); T5 uses pre-training on unlabeled text with span corruption, where the encoder receives text with missing spans and the decoder generates those missing spans.
  [
  ![t5](https://substackcdn.com/image/fetch/$s_!EeEQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb15fdb01-219a-4373-8b17-a15a9956436a_6256x4375.png "t5")
  ](https://substackcdn.com/image/fetch/$s_!EeEQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb15fdb01-219a-4373-8b17-a15a9956436a_6256x4375.png)
  Figure 21: T5 architecture changes to the original transformer architecture. (The architecture drawing is taken from [Attention Is All You Need](https://arxiv.org/abs/1706.03762).) ([View Highlight](https://read.readwise.io/read/01m3rp1g7eprfkk9f7hmb2hgka))
- Now, we can use T5 similar to the other RNN, CNN, and transformer approaches above, by adding a classification head.
  Additionally, we can also (train to) have the decoder output the class label prediction (like “positive” or “negative” in the IMDb movie review dataset case), similar to regular LLMs. Let’s call this approach text-to-text classification.
  While GPT-style LLMs are trained on massive amounts of text, they usually perform text-to-text classification well out of the box, as shown earlier (the figure below is inserted here again for convenience).
  [
  ![prompt-gpt](https://substackcdn.com/image/fetch/$s_!Rh-F!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0be7e4aa-5436-46cf-8e85-809f776f39e1_4920x3189.png "prompt-gpt")
  ](https://substackcdn.com/image/fetch/$s_!Rh-F!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0be7e4aa-5436-46cf-8e85-809f776f39e1_4920x3189.png)
  Figure 22: Text-to-text classification with a GPT model.
  However, in the case of T5, it is common to further fine-tune the decoder to do well on these types of tasks in a given target domain.
  For T5, both approaches work. Here’s a summary:
  [
  ![Classification head vs text-to-text approaches](https://substackcdn.com/image/fetch/$s_!bg1N!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe2a84f80-0975-4ddc-aee6-d3579f50edc5_5046x1890.png "Classification head vs text-to-text approaches")
  ](https://substackcdn.com/image/fetch/$s_!bg1N!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe2a84f80-0975-4ddc-aee6-d3579f50edc5_5046x1890.png)
  Figure 23: Classification head vs text-to-text approaches. ([View Highlight](https://read.readwise.io/read/01m3rp21ve2ve1aef2ev25sj9g))
- So far, we have seen that there are plenty of approaches to text classification, from traditional methods like logistic regression and naive Bayes with bag-of-words representations to prompting the latest frontier LLMs like GPT-6 or fine-tuning any open-weight LLM with a classification head (or text-to-text classification).
  At first, I (almost) dismissed it as “just a classifier,” something that I build routinely for classification tasks with natural language inputs ([View Highlight](https://read.readwise.io/read/01m3rp2d98ryyaqn89hhwyx4ry))
- 3.1 Jev vs existing text-to-text classification
  Before continuing this discussion, though, let’s start with a quick Jev overview. [Jev is a new model released by TypeSafe AI](https://typesafe.ai/blog/introducing-system-one-models-and-jev), which just came out of stealth a few weeks ago and got a lot of attention (at first, it seemed a bit bizarre because it looks just like a classifier).
  Jev is a proprietary model (although the release was followed by a huge number of quick open-source clones, but we will get to this later) that is relatively cheap to use and claims to be on par with GPT-5.6 Luna (for decision-making) while being orders of magnitude faster and cheaper:
  [
  ![jev-bench](https://substackcdn.com/image/fetch/$s_!2oFN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13d2d71d-7704-433d-9d4d-ac8a87ef3b8a_5584x3084.png "jev-bench")
  ](https://substackcdn.com/image/fetch/$s_!2oFN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13d2d71d-7704-433d-9d4d-ac8a87ef3b8a_5584x3084.png) ([View Highlight](https://read.readwise.io/read/01m3rp2wg6nfzdh56vsc5wkb6j))
- Here, regarding GPT-Luna, think of this as the text-to-text classification approach discussed earlier.
  So why all this hype? I think it’s partly because of the nice API and that it performs so well on all kinds of tasks, so it doesn’t require custom fine-tuning.
  For example, I can use it to categorize support tickets/emails ([View Highlight](https://read.readwise.io/read/01m3rp364tkhkekky3g18674b5))
- Maybe the best way to succinctly explain it (before getting into technical details) is as follows: Like ChatGPT in 2022 was exciting because it was a general-purpose chat model that could generate all kinds of texts, one of the reasons the tech community is excited about Jev is that it is the ChatGPT moment for classification, where it can cheaply classify all kinds of text inputs without having to fine-tune a custom classifier for each task. ([View Highlight](https://read.readwise.io/read/01m3rp3fqh8dqeg2jgn6k5khnr))
- The Jev API
  Over the past few years, we’ve gotten used to throwing bigger, better, and more expensive GPT-style LLMs at all kinds of problems, and for targeted decision-making or classification tasks, a cheap & fast approach like Jev may feel refreshing to most. Especially for one-off tasks where collecting training data and fine-tuning a custom ModernBERT sounds too tedious, we might just throw a Luna-like model at it.
  But on top of being popular for its versatility (that is, performing well on different target domains out of the box), Jev also has a relatively nice API which we can use via curl in the terminal or via its Python API.
  In short, there are three main API types illustrated below. Let’s start with the Choice API, which is convenient for multi-class classification.
  [
  ![jev-choice](https://substackcdn.com/image/fetch/$s_!SzWL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4ac35084-507b-4f08-856c-dd449f43ebf2_6461x3353.png "jev-choice")
  ](https://substackcdn.com/image/fetch/$s_!SzWL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4ac35084-507b-4f08-856c-dd449f43ebf2_6461x3353.png)
  Figure 25: Jev’s Choice API. Use this for multi-class classification.
  Next is the Noul API, which is simpler and assigns a “yes” probability to a question.
  [
  ![jev-noul](https://substackcdn.com/image/fetch/$s_!8qtX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb63ec307-8be5-48c5-a0f3-21dbe461c78d_6461x3353.png "jev-noul")
  ](https://substackcdn.com/image/fetch/$s_!8qtX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb63ec307-8be5-48c5-a0f3-21dbe461c78d_6461x3353.png)
  Figure 26: Jev’s Noul API. Use this for binary classification or multi-label classification (with multiple Noul questions).
  Lastly, the Score API assigns a score based on a rubric level (in the example below, 0, 1, 2).
  [
  ![jev-score](https://substackcdn.com/image/fetch/$s_!4RFc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb3eb167e-451f-4bb8-8c8d-4da0a781ab5d_6461x3354.png "jev-score")
  ](https://substackcdn.com/image/fetch/$s_!4RFc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb3eb167e-451f-4bb8-8c8d-4da0a781ab5d_6461x3354.png)
  Figure 27: Jev’s Score API. Use this for ordinal classification.
  To sum it up, the different APIs and use cases are as follows.
  [
  ![jev-api-table](https://substackcdn.com/image/fetch/$s_!QQ6G!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe962a588-c3d3-453a-9e1a-abfccfd4e7b7_4455x1747.png "jev-api-table")
  ](https://substackcdn.com/image/fetch/$s_!QQ6G!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe962a588-c3d3-453a-9e1a-abfccfd4e7b7_4455x1747.png) ([View Highlight](https://read.readwise.io/read/01m3rp7k677fptvsfg6vcvsfq6))
- Anyways, the results look quite good overall (caveat: we don’t know if the IMDb test set was part of the training set).
  For reference, a ModernBERT model took
  • 23 min to fine-tune on the training set;
  • 7 min to evaluate on the test set.
  For comparison, the best ModernBERT model has similar accuracy, as shown below (I expect you can still get 1-2% higher accuracy with additional hyperparameter tuning). Note that this was run on a DGX Spark, and it’s possible to get faster inference performance with quantization and faster hardware.
  [
  ![bert-vs-jev](https://substackcdn.com/image/fetch/$s_!mnNk!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9933df13-7e9b-4144-86f3-b53781791e85_4776x2169.png "bert-vs-jev")
  ](https://substackcdn.com/image/fetch/$s_!mnNk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9933df13-7e9b-4144-86f3-b53781791e85_4776x2169.png)
  Figure 30: ModernBERT versus Jev.
  But our ModernBERT model can’t play Tetris, for example, or do anything else besides movie classification without us fine-tuning it for the new task. But we could then throw a GPT-5.6 Luna or GPT-6 Luna model at it (which is a bit slower and also more expensive). ([View Highlight](https://read.readwise.io/read/01m3rpa7mxf47xwza2z6jz926t))
- A classic rule of thumb was:
  • Use a cheap LLM (like GPT-6 Luna) for one-off decision-making tasks;
  • Fine-tune a custom classifier if we want to do this task repeatedly.
  Now, something like Jev could take the place of the above to a) reduce latency and save money over Luna and b) save us the work of fine-tuning a custom model. (Although if we have a very high-volume task and we want to maximize speed and accuracy on a very specific task, it, of course, still makes sense to fine-tune.) ([View Highlight](https://read.readwise.io/read/01m3rpaajmw153rymhqpvr7k89))
- BERT- and GPT-style models with Jev API
  Of course, we could also be adding a Jev-like API on top of a (Modern)BERT or any GPT-style model. Adding a Jev-like API is pretty straightforward. In fact, as soon as Jev was released, I built a Jev-like ModernBERT model to show how simple it is to build your own Jev model.
  I decided not to release my Jev clone because I changed my mind in the meantime. I.e., it’s trivial to put a Jev-like API on top of ModernBERT, and it’s trivial to fine-tune it on a bunch of classification tasks. But it’s not trivial to make this model work well on all different kinds of tasks (like Tetris) without extensive training and testing. (Also, there are already enough quick Jev clones riding on the hype train by now; the world doesn’t need another quick clone, but a strong open-weight version would be nice, of course.)
  However, if you are interested in how that retrofitting would work, here is a quick overview. For example, we can implement a Jev-like Choice API by adding a small classification head to any BERT-, GPT-, or T5-style model as illustrated earlier. But instead of having the output nodes in this head match the number of classes, we have it with only 1 output node, as illustrated for the modified GPT model below.
  [
  ![gpt-1node](https://substackcdn.com/image/fetch/$s_!Doyz!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd09a503-5698-4cc1-8692-7a9bcb81ffba_1943x1931.png "gpt-1node")
  ](https://substackcdn.com/image/fetch/$s_!Doyz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd09a503-5698-4cc1-8692-7a9bcb81ffba_1943x1931.png) ([View Highlight](https://read.readwise.io/read/01m3rpb0m0fsyg31g4zkjmgjnx))
- Earlier, we discussed fine-tuning these models for a specific task like movie review classification with a pre-defined number of class labels (here, “positive” and “negative”). With this “1 output node” setup, we can actually extend this to a flexible and arbitrary number of classes.
  To extend this to an arbitrary number of classes (let’s consider the 3-class case of categorizing a customer ticket into the three categories “billing”, “technical”, “account”), we can do so as shown in the figure below.
  [
  ![jev-diy](https://substackcdn.com/image/fetch/$s_!kK4c!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a0ef4b0-2afd-4ba9-9be5-95440b50b2aa_6723x3497.png "jev-diy")
  ](https://substackcdn.com/image/fetch/$s_!kK4c!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a0ef4b0-2afd-4ba9-9be5-95440b50b2aa_6723x3497.png)
  Figure 32: Using a BERT- or GPT-style model with a Jev-like choice API. ([View Highlight](https://read.readwise.io/read/01m3rpb97hga6az6akshzqwyw9))
- As shown in the figure above, for each candidate option, we feed the model the input text, the task instructions, and the candidate’s description. The classification (scoring) head maps the output representation to a single scalar score. We then apply softmax across the candidate scores to obtain a probability distribution and return the highest-probability option. ([View Highlight](https://read.readwise.io/read/01m3rpbde54k9v1zk5ycxpda8z))
- The main point here is that the proposed head has one output per class. Each class description produces its own representation, which the same head scores via the output layer (which is essentially a logistic regression model):
  where
  • *si* is the scalar score for class label *i*;
  • *w* is a learnable weight;
  • *b* is a learnable bias unit;
  • *hi* is the output of the transformer before the classification head.
  For *N* candidates, this produces *N* scores. Softmax then returns *N* probabilities. The learned parameters and stay the same when *N* changes.
  Note that for *hi*:
  • BERT-style encoder models use the final hidden state of the `[CLS]` token (optionally passed through a pooling layer);
  • GPT-style autoregressive models typically use the final non-padding token’s hidden state, which we need because of the autoregressive nature as discussed earlier (the last non-padding token can attend to the preceding text, instructions, and candidate description).
  Then, we fine-tune the model and the scoring head jointly using cross-entropy loss against the correct option. Since all candidates share the same scoring head, we can change the number and descriptions of the options without changing the architecture. But again, how well this works on unfamiliar tasks depends on the training data.
  By the way, why BERT- or GPT-style transformer-based models over simpler RNN and CNN architectures mentioned earlier? From a technical perspective, the approach outlined above works with either. But transformer-based models scale really well, meaning they can be pre-trained on larger datasets and benefit more than other models. Also, they can make good use of the information provided in the context (thanks to attention). So, if we want our model to generalize well to different target tasks without explicit fine-tuning on each one, pre-training a transformer-based model on a high-quality dataset likely gets us closer than RNN- or CNN-based models ([View Highlight](https://read.readwise.io/read/01m3rpbha6kv0tcsen4x31vwrx))
- So, how come Jev does so well on so many different tasks (from movie reviews to something arbitrary like playing Tetris)? Unfortunately, the architecture, algorithm, and training data details are not public. Also, keep in mind there’s a whole team and multi-million-dollar company behind it that specialized in and worked really hard on this model; we can’t expect to match that level of performance by training a ModernBERT-like model for a week on some open datasets. ([View Highlight](https://read.readwise.io/read/01m3rptb5xrfc6rydk7kznz2tv))
- That being said, if I had to make an educated guess, architecture-wise, I’d guess that they are using something small similar to ModernBERT, hence, the low latency.
  For the training data, as mentioned before, the TypeSafe AI CEO [said](https://x.com/CompleteSkeptic/status/2100617775823966680) the following:
  > 100% of our data is synthetic (but not the type of crap that is just spit out from an LLM obviously)
  So, yeah, I think most of the effort went into curating this dataset. It’s something I’ve also been preaching to students and collaborators for many years. As a short anecdote, about 8 years ago, I was collaborating with another professor in the social sciences department and helped to design the experimental setup for a text classification problem. Her student spent many days hyperparameter tuning both a bag-of-words baseline and a BERT model to eke out ~2-5% accuracy. Then I suggested we each sit down for a few days to hand-label more data (I think our original dataset was around 300 samples, and we doubled the size), which resulted in a >10-20% accuracy boost. Yes, it’s important to [plot learning curves](https://rasbt.github.io/mlxtend/user_guide/plotting/plot_learning_curves/) for that purpose :).
  [
  ](https://substackcdn.com/image/fetch/$s_!RRQL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcfa6e6db-1008-4418-b319-41f1bba35410_6020x2962.png) ([View Highlight](https://read.readwise.io/read/01m3rptweqw718nkgqg8pdt7kd))
- [
  ![learning-curve](https://substackcdn.com/image/fetch/$s_!RRQL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcfa6e6db-1008-4418-b319-41f1bba35410_6020x2962.png "learning-curve")
  ](https://substackcdn.com/image/fetch/$s_!RRQL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcfa6e6db-1008-4418-b319-41f1bba35410_6020x2962.png)
  Figure 33: Rule of thumb showing that often more data helps more than additional hyperparameter tuning. ([View Highlight](https://read.readwise.io/read/01m3rpvs397kw5yqsz57ana8br))
- Finally, the training algorithm. Again, the details are not known, but TypeSafe AI’s blog post [states](https://typesafe.ai/blog/introducing-system-one-models-and-jev) that they were using a new algorithm called Reinforcement Learning for Calibrated Decisions (RLCD):
  > “We built a new stack entirely focused on automation: with a new model architecture, parallel sampler for maximum efficiency, and training method we call Reinforcement Learning for Calibrated Decisions (RLCD).”
  This method is not public. A published method with a similar calibration objective is RLCR (Reinforcement Learning with Calibration Rewards), from the 2025 paper [Beyond Binary Rewards: Training LMs to Reason About Their Uncertainty](https://arxiv.org/abs/2507.16806). Before providing more details, the next section gives a brief overview of calibration in general. ([View Highlight](https://read.readwise.io/read/01m3rpw18qapexd147xzz773ez))
- 5.1 On calibration
  Calibration is not a new topic and a step I recommend for any production model where you want to use and evaluate the class-membership probabilities. In short, calibration adjusts the model’s probability estimates so they better match observed class frequencies.
  For example, consider once more our IMDb movie classification problem. A model might assign a review 74% positive and 26% negative. These are probability estimates, but the model may be overconfident or underconfident. We cannot assume that the numerical values are reliable without evaluating calibration. I.e., predictions of 74% positive and 54% positive both yield the class label “positive” at a 50% threshold, although the model expresses more confidence in the 74% case.
  [
  ](https://substackcdn.com/image/fetch/$s_!k414!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F642f91a5-0550-4d6d-8f70-85a1b77330c7_5046x2578.png) ([View Highlight](https://read.readwise.io/read/01m3rpwxxga827cekz3m0s8vg1))
- [
  ![calibration](https://substackcdn.com/image/fetch/$s_!k414!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F642f91a5-0550-4d6d-8f70-85a1b77330c7_5046x2578.png "calibration")
  ](https://substackcdn.com/image/fetch/$s_!k414!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F642f91a5-0550-4d6d-8f70-85a1b77330c7_5046x2578.png)
  Figure 34: Illustration of how calibration works.
  Calibration techniques use a separate labeled dataset, e.g., a held-out validation set, to adjust these probability estimates. After successful calibration, among many reviews assigned a positive probability of approximately 74%, roughly 74% should actually be positive. For more information, I recommend the good old [scikit-learn documentation](https://scikit-learn.org/stable/modules/calibration.html). ([View Highlight](https://read.readwise.io/read/01m3rpyy2ygjwdk21pd9shx1m2))
- Jev’s RLCD training method remains proprietary, but a related idea we can discuss is *Reinforcement Learning with Calibration Rewards* (RLCR), which was introduced in the 2025 [Beyond Binary Rewards: Training LMs to Reason About Their Uncertainty](https://arxiv.org/abs/2507.16806) paper. (Note that there is no officially established connection between the two methods, but I am assuming that they could be related.)
  Reinforcement learning with verifiable rewards (RLVR) typically rewards a correct answer with 1 and an incorrect answer with 0. (For a comprehensive explanation and implementation, I recommend checking out my [Build A Reasoning Model (From Scratch) book](https://amzn.to/4aAKiFY) :)). ([View Highlight](https://read.readwise.io/read/01m3rpz9n5yme0vpeb7gdd7q6d))
- In short, RLCR adds an additional penalty for inaccurate confidence estimates.
  So, in the conventional RLVR method, the reward *R* is either 0 or 1 based on the answer correctness (we are ignoring an optional formatting reward and length penalty here, for simplicity).
  In RLCR, the model generates reasoning and an answer, which is followed by an uncertainty analysis and a numerical confidence (*q*). This modified reward is
  R=c−(q−c)2,
  where is 1 for a correct answer and 0 otherwise. For example, an incorrect answer with 90% (0.9) confidence receives a reward of -0.81, since
  0−(0.9−0)2=−0.81.
  At 20% confidence, the reward is -0.04. And a correct answer at 90% confidence earns 0.99. (Readers familiar with evaluating calibrated models may notice that the squared-error term is the Brier penalty for the stated probability that the answer is correct.)
  [
  ![RLCR training loop](https://substackcdn.com/image/fetch/$s_!CodI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F23d71def-2f99-4f25-a66e-9ee6e656c6d8_6070x2504.png "RLCR training loop")
  ](https://substackcdn.com/image/fetch/$s_!CodI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F23d71def-2f99-4f25-a66e-9ee6e656c6d8_6070x2504.png)
  Figure 35: RLCR overview.
  Note that the same (here, Qwen2.5-7B) model generates the uncertainty analysis and q as part of its response.
  The uncertainty analysis is a written assessment of where its answer could be wrong. After answering, the model examines missing evidence, ambiguous wording, questionable assumptions, or possible reasoning errors. The paper’s prompt asks it to identify specific uncertainties rather than propose corrections. ([View Highlight](https://read.readwise.io/read/01m3rpzgrkf3pw2xy1shq996rr))
