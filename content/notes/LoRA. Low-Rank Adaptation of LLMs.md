---
title: LoRA. Low-Rank Adaptation of LLMs
date: 2023-10-23
tags:
  - permanent-note
  - technical
  - data
---

Notes on [ LoRA Low-Rank Adaptation of Large Language Models](literature-notes/Articles/%20LoRA%20Low-Rank%20Adaptation%20of%20Large%20Language%20Models.md). It can be used with [PEFT library of by HuggingFace](literature-notes/Articles/Lora%20Low-Rank%20Adaptation%20of%20Large%20Language%20Models.md).

Adapting a large-scale, pre-trained general Large Language Model to a specific application requires Fine Tuning. Full fine tuning becomes unfeasible with current Large Language Models, which are built using billions of parameters.

> [!quote]
> We propose Low-Rank Adaptation, or LoRA, which freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture, greatly reducing the number of trainable parameters for downstream tasks.

Main advantages of LoRA:
- A common model can be used to train multiple small LoRA modules for different tasks, reducing storage and overhead.
- LoRA makes training more efficient as we do not need to calculate the gradients for most parameters.
- LoRA weights can be merged with frozen weights introducing no inference latency.
- LoRA can be combined with other methods.

The paper is focused on Large Language Models but it is agnostic to any subset of weight matrices in a neural network, although the paper is primarily focused on the weight matrices of Transformer architecture.

## Comparison to other transfer learning techniques

There is vast literature trying to make transfer learning more parameter and compute efficient. In the case of efficient adaptations there are two main strategies:
- Adapter layers. There are many different versions of adapters, which might introduce two or more adapter layers per transformer block. The main problem is that these layers impose additional computations and thus increase inference latency.
- Optimizing some forms of the input layer activations. For instance, prefix tuning is difficult to optimize.

## LoRa Method

The weight matrices in dense layers of neural networks that perform matrix multiplications typically have full-rank. When adapting to a new specific task, LLMs have a low intrinsic dimension and can still learn efficiently despite a random projection to a smaller subspace (Aghajanyan et al., 2020). The authors try to mimic this idea assuming that updates to the weight also have a low intrinsic rank during adaptation.

LoRA can be understood as a generalization of full fine-tuning because as we increase the number of trainable parameters, LoRA roughly converges to training the original model. In addition, frozen weights can be updated with LoRA parameters and perform inference as usual.

## Main conclusions from experiments

It is preferable to adapt more weight matrices than adapting a single type of weights with a larger rank. LoRA performs competitively with a very small r, and increasing r does not cover a more meaningful space, which suggests that a low-rank adaptation matrix is sufficient. A low-rank adaptation matrix potentially amplifies the important features for specific downstream tasks that were learned but not emphasized in the general pre-training model.
