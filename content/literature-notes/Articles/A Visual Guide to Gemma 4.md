---
author: "[[Maarten Grootendorst]]"
title: 'A Visual Guide to Gemma 4'
date: "2026-04-06"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!Vj_W!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37fe0e0b-90b8-445b-b2a8-0a402605cc18_6208x4980.png)

## Metadata
- Author: [[Maarten Grootendorst]]
- Full Title: A Visual Guide to Gemma 4
- URL: https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-gemma-4

## Highlights
- There are four models in the Gemma 4 family:
  • **[Gemma 4 - E2B](https://huggingface.co/google/gemma-4-e2b-it)** – A dense model with per-layer embeddings, which make them effectively 2 billion parameters
  • **[Gemma 4 - E4B](https://huggingface.co/google/gemma-4-e4b-it)** – A dense model with per-layer embeddings, which make them effectively 4 billion parameters
  • **[Gemma 4 - 31B](https://huggingface.co/google/gemma-4-31b-it)**– A dense model with 31 billion parameters
  • **[Gemma 4 - 26B A4B](https://huggingface.co/google/gemma-4-26B-A4B-it)** – A Mixture of Experts (MoE) model with 26 billion total parameters of which 4 billion are activated during inference. ([View Highlight](https://read.readwise.io/read/01kngtxcpa9bmevpj96bgd785b))
- By having a broad range of model sizes, you can choose whichever model best suits your use case and whether it actually fits on your hardware:
  [
  ![](https://substackcdn.com/image/fetch/$s_!KYBn!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F107a0d7b-d59b-4815-9f50-65dee5123fc9_1282x304.png)
  ](https://substackcdn.com/image/fetch/$s_!KYBn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F107a0d7b-d59b-4815-9f50-65dee5123fc9_1282x304.png) ([View Highlight](https://read.readwise.io/read/01kngtxjzrbsdpmk1yknzqnkjy))
- Aside from a wide range of sizes, all models are multimodal and can reason about input images. They were trained to handle many images of varying sizes (more on that later!).
  I’m especially interested in trying out the small models a bit more since they not only support input images and text, but also audio. ([View Highlight](https://read.readwise.io/read/01kngtxzg4g9pd67z0ttt1jr0w))
- There are a number of things that were changed compared to Gemma 3 that relate to all model sizes:
  • **Interleaving Layers** – Global attention is always the last layer
  • **K=V** – The Keys are set to be equivalent to the Values only for the global attention
  • **p-RoPE** – Low-frequency-pruned RoPE applied to the embeddings ([View Highlight](https://read.readwise.io/read/01kngtyn1sdwg7bmm06n7jrzpb))
- Like Gemma 3, Gemma 4 interleaves layers of local attention (also called “sliding window attention”) with global attention (which is regular or “full” attention).
  Remember that in global attention, every token attends to all tokens that came before it. Sliding window attention, however, only attends to tokens within a certain limit. This significantly reduces the compute needed to calculate the full attention.
  [
  ![](https://substackcdn.com/image/fetch/$s_!KjIB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffea15481-672a-4fe2-b803-5f4d493998d5_4770x2460.png)
  ](https://substackcdn.com/image/fetch/$s_!KjIB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffea15481-672a-4fe2-b803-5f4d493998d5_4770x2460.png) ([View Highlight](https://read.readwise.io/read/01kngtzre92xdxg2b0td024e13))
- In practice, that means that when text is processed using a sliding window, it may only see a part of the entire sequence rather than the entire thing. The “sliding” then refers to the idea of continuously moving the sequence in view as the number of tokens are being generated.
  [
  ![](https://substackcdn.com/image/fetch/$s_!MKWU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39531efc-71c3-44b6-97aa-546b108fb4d6_4770x1242.png)
  ](https://substackcdn.com/image/fetch/$s_!MKWU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39531efc-71c3-44b6-97aa-546b108fb4d6_4770x1242.png)
  You typically fix the number of tokens it can see previously. In the case of Gemma 4 models, the smaller models (E2B and E4B) have a sliding window of 512 tokens and the larger models (26B A4B and 31B) have a sliding window of 1024 tokens. ([View Highlight](https://read.readwise.io/read/01kngv0d4vsqyf9t508x8rw0ty))
- Let’s go through an example with a sliding window of 4 tokens to see what is happening at each token generation:
  [
  ![](https://substackcdn.com/image/fetch/$s_!YTt2!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3015e48f-a122-4af5-b443-a95681039f9c_4770x2082.png)
  ](https://substackcdn.com/image/fetch/$s_!YTt2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3015e48f-a122-4af5-b443-a95681039f9c_4770x2082.png)
  In our example, there is only attention given to the last four tokens which at some point in the generation starts to “ignore” the ones that came before that. However, it is actually not forgetting the representations that it calculated in the previous steps. The hidden states allow for the attention to be passed along the attention mechanism from previous layers and steps all the way to the current token.
  [
  ](https://substackcdn.com/image/fetch/$s_!AsCY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff26153b1-ec96-4c04-ad84-717bc134b06b_4020x2046.png) ([View Highlight](https://read.readwise.io/read/01kngv12qc1k5ds3n6p1jfvb3g))
- [
  ![](https://substackcdn.com/image/fetch/$s_!AsCY!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff26153b1-ec96-4c04-ad84-717bc134b06b_4020x2046.png)
  ](https://substackcdn.com/image/fetch/$s_!AsCY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff26153b1-ec96-4c04-ad84-717bc134b06b_4020x2046.png)
  Although information can be propagated by stacking sliding windows, it is not a perfect recall or attention mechanism. Think of it like a game of telephone, information gets diluted each time it passes through another layer!
  Therefore, much like in Gemma 3, local attention and global attention layers are interleaved such that the model does attend to the full sequence at times to better capture the global structure. ([View Highlight](https://read.readwise.io/read/01kngv21h3z6tw4c2271tkxdd8))
- In Gemma 3, this interleaving was generally in a 4:1 pattern with 4 layers of local attention followed by a single layer of global attention. However, Gemma 3 - 4B for instance had 34 layers, which means its last layer used local attention rather than global attention. This was changed in the Gemma 4 models to make sure that the last layer is always global attention.
  [
  ![](https://substackcdn.com/image/fetch/$s_!tQBR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feb2f917c-31b6-4461-a881-d1ae4a6d0071_4146x2982.png)
  ](https://substackcdn.com/image/fetch/$s_!tQBR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feb2f917c-31b6-4461-a881-d1ae4a6d0071_4146x2982.png) ([View Highlight](https://read.readwise.io/read/01kngv2by2rh5ezxa80zz38ksc))
- The 4:1 pattern, however, is only for the E2B as all other variants have a 5:1 pattern where they start with 5 layers of local attention followed by a single layer of global attention. We can visualize this pattern side-by-side to also demonstrate the depth of these models.
  [
  ![](https://substackcdn.com/image/fetch/$s_!CRux!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3253caa8-0499-42c7-beaf-ff1e828d890e_3012x3510.png)
  ](https://substackcdn.com/image/fetch/$s_!CRux!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3253caa8-0499-42c7-beaf-ff1e828d890e_3012x3510.png) ([View Highlight](https://read.readwise.io/read/01kngv2rhhzkfwncye2etaqsft))
- Making Global Attention more Efficient
  Interleaving local attention with global attention is an interesting way of making a Large Language Model more efficient. However, it is not a free lunch. The global attention layers still attend to the entire context, which is a costly and slow process.
  In this section, we explore various tricks that Gemma 4 uses to make those global attention layers more efficient! ([View Highlight](https://read.readwise.io/read/01kngv2zqz490djhk44zbhwkgy))
- Much like Gemma 3, these models use Grouped Query Attention (GQA) which allows the Query heads to share KV-values which reduces the amount of caching that needs to be done. The local attention layers use GQA and have 2 Query heads sharing one KV head.
  With Gemma 4, the global attention layers are made more efficient by having 8 Query heads to share one KV head. This drastically reduces the caching needed of the KV values since global attention by itself already has a lot it needs to store (the entire context) compared to the small context of the local attention layers.
  [
  ![](https://substackcdn.com/image/fetch/$s_!NqV3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbe2618d8-6c06-4e87-bc30-e865ccab1f15_5790x2760.png)
  ](https://substackcdn.com/image/fetch/$s_!NqV3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbe2618d8-6c06-4e87-bc30-e865ccab1f15_5790x2760.png) ([View Highlight](https://read.readwise.io/read/01kngv37rdt9afec4gyzdyx7ys))
- Note that reducing the number of keys and values per head may hurt performance and so to compensate for that, the size of the Keys was doubled!
  Doubling the dimensions of the Keys does fill up the KV-cache quite a bit, so let’s explore another interesting trick for reducing the KV-cache. ([View Highlight](https://read.readwise.io/read/01kngv3p2rm7rgwwbm4fk27v2v))
- K=V
  Despite the improvements to the grouping in Grouped Query Attention, the global attention layers still take up quite a bit of memory since they attend to the entire sequence. Grouping into 8 queries helps a bit but there is more that can be done for efficiency! ([View Highlight](https://read.readwise.io/read/01kngv8xqtzm8k2e68kdknb4r6))
- A neat trick, that does not hurt performance that much, is by using the Keys and Values only in the global attention layers. Effectively, this means that all Keys are equivalent to the Values which further reduces the memory requirements for the KV-Cache (or perhaps more accurately now the K-cache for the global attention layer).
  [
  ![](https://substackcdn.com/image/fetch/$s_!HBUg!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffc081644-bfea-4956-a9cd-235eb5c93b0f_4100x2060.png)
  ](https://substackcdn.com/image/fetch/$s_!HBUg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffc081644-bfea-4956-a9cd-235eb5c93b0f_4100x2060.png) ([View Highlight](https://read.readwise.io/read/01kngv94qsh56y7xdxp42fmvdm))
- An important component of any Large Language Model is how it keeps track of the order of words in a sequence. One of the most common techniques is called Rotary Positional Encodings (RoPE). RoPE takes the Query and Key vectors and slices them up into pairs of two values. Each pair can now be seen as a vector in 2-dimensional space pointing towards a direction. RoPE rotates this direction slightly for each pair of values at decreasing speeds. The first pair has a large rotation compared to the last pair. This rotation allows the model to track the relative distances between words.
  [
  ![](https://substackcdn.com/image/fetch/$s_!m7Qp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd981478a-907b-403e-aaf4-fb93aa37955d_4456x2544.png)
  ](https://substackcdn.com/image/fetch/$s_!m7Qp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd981478a-907b-403e-aaf4-fb93aa37955d_4456x2544.png) ([View Highlight](https://read.readwise.io/read/01kngw41nx5tery70tsk07r17c))
