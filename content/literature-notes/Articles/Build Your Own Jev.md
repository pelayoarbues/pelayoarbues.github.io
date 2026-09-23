---
author: "[[Avi Chawla]]"
title: 'Build Your Own Jev'
date: "2026-09-23"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!w1BQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b19a13a-5594-42ca-a222-68d8c07b14d4_900x502.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: Build Your Own Jev
- URL: https://blog.dailydoseofds.com/p/build-your-own-jev-100-local

## Highlights
- A normal LLM call asks the model to write an answer. It might return a sentence, a label, or a JSON object. The application waits for that text, parses it, and extracts the selected team. ([View Highlight](https://read.readwise.io/read/01m35c0j8a4daqs0949bfw6ks9))
- ![](https://substackcdn.com/image/fetch/$s_!Qmqw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F11752de5-5f63-4886-a391-4ba3a7f7d3d5_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c0dmamd2ns2e5eard3r2a))
- That is unnecessary if every valid answer is already known. ([View Highlight](https://read.readwise.io/read/01m35c0h9vb1752ccsx3a84x4k))
- In fact, a better and more efficient way to do this is to treat the same request as a decision (what Jev does). The application provides the ticket/query and the three allowed answers to Jev. The model then returns a score for each answer in one go (we’ll discuss shortly how exactly you can do that): ([View Highlight](https://read.readwise.io/read/01m35c0qjabk6ds856yxpq6scs))
- We will provide the input query and allowed answers. In one scoring request, the model will return a decision and a probability distribution without generating a sentence or JSON object. ([View Highlight](https://read.readwise.io/read/01m35c0zgsg0s0bbx6d7ch2esj))
- While Jev is closed-source, this inference pattern is already available in several open language models. ([View Highlight](https://read.readwise.io/read/01m35c12egjcsa8vr1bbsxjsrd))
- More specifically, we will implement it using SGLang (through /v1/score), test it with Qwen and DeepSeek models, and compare it against structured output and ordinary text generation. ([View Highlight](https://read.readwise.io/read/01m35c14afsypzx974z4jknypf))
- ![](https://substackcdn.com/image/fetch/$s_!f739!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3cc6719-1698-4ac1-817b-571b48b3a66a_900x576.png) ([View Highlight](https://read.readwise.io/read/01m35c1am7d7x0tbj3t6zb5v0n))
- To set expectations upfront, this article recreates the inference path, not the complete Jev system. Jev also includes training and calibration work that a scoring endpoint does not provide. ([View Highlight](https://read.readwise.io/read/01m35c1cj7j2pvqw96168gm33t))
- Fixed-answer scoring is different from structured output ([View Highlight](https://read.readwise.io/read/01m35c1ps6947pc8rhy2r064rw))
- It is easy to confuse Jev’s mechanism with structured output since both approaches restrict what the application receives, but they do different work inside the inference server. ([View Highlight](https://read.readwise.io/read/01m35c1nm61q8a5cdbb25h3cz6))
- The specified schema prevents an invalid object, so it does not select the team on its own. ([View Highlight](https://read.readwise.io/read/01m35c1wf9m0qw204kec6140y3))
- However, this can be further improved since, under the hood, the model still generates the opening brace, the field name, the value, and the closing brace one token at a time. Once generation finishes, the application reads the team field. This video depicts this process: ([View Highlight](https://read.readwise.io/read/01m35c1y16nahtdccgvx04h5v9))
- With scoring (which Jev does), the application can supply the three teams as the complete list of valid outcomes. The server can read one model score for each outcome and return the distribution shown earlier in this article. It does not generate a JSON object. ([View Highlight](https://read.readwise.io/read/01m35c2c60116pehggez6vycgb))
- ![](https://substackcdn.com/image/fetch/$s_!_xvL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff23c1716-ca16-4446-9e9b-29bb80e8150b_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c2fdwmh1sgdggtp5yk254))
- ![](https://substackcdn.com/image/fetch/$s_!_xvL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff23c1716-ca16-4446-9e9b-29bb80e8150b_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c2frdxsd8nrvsk8cb2g3c))
- Also, the model will only supply these scores, and the application code will set the rule for its downstream use. ([View Highlight](https://read.readwise.io/read/01m35c2wch91s8gp72bq0rsmcw))
- ![](https://substackcdn.com/image/fetch/$s_!L50b!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb882683-dd41-465b-8904-3c1e5ac0a0ac_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c3baxzgec7jdznr3pbymj))
- ![](https://substackcdn.com/image/fetch/$s_!L50b!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb882683-dd41-465b-8904-3c1e5ac0a0ac_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c3bfb6fqpknwvz8wp0wa7))
- A value of 0.91 means billing received 91 percent of the probability mass to these three choices. It does not prove that the model is correct 91 percent of the time. We need labeled examples to measure that. This is the calibration problem we will discuss later. ([View Highlight](https://read.readwise.io/read/01m35c3f9614j53p90pvvh8enb))
- But in the meantime, remember that structured output generates a valid object. Fixed-answer scoring returns a distribution over answers the application already knows. ([View Highlight](https://read.readwise.io/read/01m35c3hdb763fwj1pq5mtvz6a))
- How an LLM generates the first output token
  Before we discuss how a causal LLM can be turned into a Jev-style model, it would be better to first understand a regular generation step in LLMs.
  ![](https://substackcdn.com/image/fetch/$s_!w1BQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b19a13a-5594-42ca-a222-68d8c07b14d4_900x502.png)
  • A tokenizer first converts the prompt into token IDs.
  • The model processes that sequence and produces a vector for the next position.
  • The vector has one number for every token in the model’s vocabulary. For instance, Qwen’s vocabulary contains tens of thousands of tokens, so the vector contains tens of thousands of numbers. ([View Highlight](https://read.readwise.io/read/01m35c3t0rvkz1jkkf4801mex3))
- Those raw numbers are logits. A larger logit means the model prefers that token as the next continuation. The values are not probabilities yet. ([View Highlight](https://read.readwise.io/read/01m35c3zd3f75jzs5szy3mdc4s))
- During normal generation, the server applies the model’s decoding rules (temperature, etc.) to this vector, selects one token, and appends it to the prompt. ([View Highlight](https://read.readwise.io/read/01m35c425b11rmtbprc5hahxcd))
- “Label:” is the final text in the prompt.
  So the next position is therefore where the model would normally generate either A, B, or C.
  After processing this prompt, the model will produce its usual vocabulary-sized vector for that position. That vector will contain the logit for token A, the logits for B and C, and logits for every other token in the vocabulary. ([View Highlight](https://read.readwise.io/read/01m35c4zq1zvwh9ezkq4qf0cme))
- ![](https://substackcdn.com/image/fetch/$s_!v0Ny!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf464b8d-4be2-48b8-890c-320fa81ae29a_900x330.png) ([View Highlight](https://read.readwise.io/read/01m35c51af6g38y0c42dscxxbw))
- ![](https://substackcdn.com/image/fetch/$s_!v0Ny!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf464b8d-4be2-48b8-890c-320fa81ae29a_900x330.png) ([View Highlight](https://read.readwise.io/read/01m35c51brz56kcrfvyjdaxjys))
- 1. Find the token IDs for A, B, and C.
  2. Read the three logits at those positions in the vocabulary vector.
  3. Ignore every other logit.
  4. Apply softmax across the three selected values.
  If the selected logits are 8.2, 5.5, and 4.8, the restricted softmax produces approximately 0.91, 0.06, and 0.03. We can map those positions back to billing, technical support, and account access.
  The normalization is restricted to the declared choices. We are not asking whether A has 91 percent probability across the entire vocabulary.
  Instead, we are asking how the model divides its preference among A, B, and C after the application has ruled out every other response. ([View Highlight](https://read.readwise.io/read/01m35c5hsb0kjg5z6anxsm18qz))
- ![](https://substackcdn.com/image/fetch/$s_!9UMu!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F096ad22d-55d8-4ccf-8f69-8a612e1b3dfc_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c5m8s7h03j1md7hmjgjdt))
- This is an operation that SGLang already implements in `/v1/score`.
  It runs the prompt through the model, reads the requested token positions, and returns their scores. It saves us from modifying the Qwen implementation and extracting the final tensor ourselves.
  Btw, the reason why the answers use A, B, and C and not score the words “billing”, “technical support”, and “account access” directly is because a visible word is not necessarily one token. ([View Highlight](https://read.readwise.io/read/01m35c5zw033ykpnnktwt45wxg))
- Comparing those phrases requires sequence scoring. The model must score the first token, append it, score the next token, and combine the values for the complete phrase. Length also becomes part of the comparison. ([View Highlight](https://read.readwise.io/read/01m35c61p8tk3rxvmhnvxctwzp))
- The model reads those descriptions when it processes the prompt. The label is only the token whose logit we inspect afterward. ([View Highlight](https://read.readwise.io/read/01m35c640rbmqsnmkf2prwtbvm))
- For instance, tokenizers often encode a leading space as part of the token. The strings “A” and “ A” can therefore have different token IDs.
  ![](https://substackcdn.com/image/fetch/$s_!OuhV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F57de4256-9db1-4f99-b3b7-eb43a11e2970_900x502.png) ([View Highlight](https://read.readwise.io/read/01m35c67eexbsvdeasdxky166n))
- To avoid this, render the complete prompt using the model’s chat template. Determine the exact continuation expected at the answer position. Send that continuation to /tokenize. Reject the label if it produces anything other than one token. ([View Highlight](https://read.readwise.io/read/01m35c6b6c3bey6x6pxb5819s7))
- This label mapping stays inside the scoring client. The application sends semantic choices such as billing and technical_support. It never sends token IDs and never receives A, B, or C. That is what it means for the public API to remain independent of the model labels. ([View Highlight](https://read.readwise.io/read/01m35c6dz4qxgr3rqaf5ax24nn))
- local example. SGLang loads Qwen into GPU memory and exposes its native HTTP endpoints. Our Python script sends requests straight to that server.
  This is the complete process:
  1. Start SGLang with a Qwen model.
  2. Write the decision as a prompt with letter labels.
  3. Ask SGLang to tokenize those labels.
  4. Send one request to `/v1/score`.
  5. Map the returned probabilities back to the choices. ([View Highlight](https://read.readwise.io/read/01m35c6qc6qabj83tfskmaadfx))
