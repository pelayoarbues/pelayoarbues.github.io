---
author: [[Hugging Face - Blog]]
title: 'How to Deploy and Fine-Tune DeepSeek Models on AWS'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/favicon.ico)

## Metadata
- Author: [[Hugging Face - Blog]]
- Full Title: How to Deploy and Fine-Tune DeepSeek Models on AWS
- URL: https://huggingface.co/blog/deepseek-r1-aws

## Highlights
- However, the recipe behind OpenAI’s reasoning models has been a well kept secret. That is, until last week, when DeepSeek released their [**DeepSeek-R1**](https://huggingface.co/deepseek-ai/DeepSeek-R1) model and promptly broke the internet (and the [**stock market!**](https://x.com/KobeissiLetter/status/1883831022149927352)). ([View Highlight](https://read.readwise.io/read/01jjw9qm3fx0w6c1zf2emcpwvr))
- DeepSeek AI open-sourced DeepSeek-R1-Zero, DeepSeek-R1, and six dense models distilled from DeepSeek-R1 based on Llama and Qwen architectures. You can find them all in the [DeepSeek R1 collection](https://huggingface.co/collections/deepseek-ai/deepseek-r1-678e1e131c0169c0bc89728d). ([View Highlight](https://read.readwise.io/read/01jjw9qznakhbk6a2z2zpax3se))
- Let’s review how you can deploy and fine-tune DeepSeek R1 models with Hugging Face on AWS. ([View Highlight](https://read.readwise.io/read/01jjw9r5b2q2qd3sbcag1kb2v0))
- [**Hugging Face Inference Endpoints**](https://ui.endpoints.huggingface.co/) offers an easy and secure way to deploy Machine Learning models on dedicated compute for use in production on AWS. Inference Endpoints empower developers and data scientists alike to create AI applications without managing infrastructure: simplifying the deployment process to a few clicks, including handling large volumes of requests with autoscaling, reducing infrastructure costs with scale-to-zero, and offering advanced security. ([View Highlight](https://read.readwise.io/read/01jjw9r9dect9actrgaf8dk1cv))
- With Inference Endpoints, you can deploy any of the 6 distilled models from DeepSeek-R1 and also a quantized version of DeepSeek R1 made by Unsloth: [https://huggingface.co/unsloth/DeepSeek-R1-GGUF](https://huggingface.co/unsloth/DeepSeek-R1-GGUF). On the model page, click on Deploy, then on HF Inference Endpoints. You will be redirected to the Inference Endpoint page, where we selected for you an optimized inference container, and the recommended hardware to run the model. Once you created your endpoint, you can send your queries to DeepSeek R1 for 8.3$ per hour with AWS 🤯. ([View Highlight](https://read.readwise.io/read/01jjw9rm706r6qwj7qrk7h547f))
- You can find DeepSeek R1 and distilled models, as well as other popular open LLMs, ready to deploy on optimized configurations in the [Inference Endpoints Model Catalog](https://endpoints.huggingface.co/catalog?task=text-generation). ([View Highlight](https://read.readwise.io/read/01jjw9rx9dxjr6ybcbh81ew0v6))
- | **Note:** The team is working on enabling DeepSeek models deployment on Inferentia instances. Stay tuned! ([View Highlight](https://read.readwise.io/read/01jjw9sajf933w29x0a9pf3ctc))
- | **Note:** The team is working on enabling DeepSeek-R1 deployment on Amazon Sagemaker AI with the Hugging Face LLM DLCs on GPU. Stay tuned! ([View Highlight](https://read.readwise.io/read/01jjw9scdf5h78nwmf8nzvr931))
- Before, let’s start with a few pre-requisites. Make sur you have a Sagemaker Domain [configured](https://docs.aws.amazon.com/sagemaker/latest/dg/onboard-quick-start.html), sufficient [quota](https://docs.aws.amazon.com/general/latest/gr/sagemaker.html) in Sagemaker, and a JupyterLab [space](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-jl-user-guide-create-space.html). For DeepSeek-R1-Distill-Llama-70B, you should raise the default quota for ml.g6.48xlarge for endpoint usage to 1. ([View Highlight](https://read.readwise.io/read/01jjw9ss5efee9rmn3hb93hdfd))
- Let’s walk through the deployment of DeepSeek-R1-Distill-Llama-70B on a Neuron instance, like AWS Trainium 2 and AWS Inferentia 2. ([View Highlight](https://read.readwise.io/read/01jjw9t5vabp4pctk8xn7135wz))
- The pre-requisites to deploy to a Neuron instance are the same. Make sur you have a Sagemaker Domain [configured](https://docs.aws.amazon.com/sagemaker/latest/dg/onboard-quick-start.html), sufficient [quota](https://docs.aws.amazon.com/general/latest/gr/sagemaker.html) in Sagemaker, and a JupyterLab [space](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-jl-user-guide-create-space.html). For DeepSeek-R1-Distill-Llama-70B, you should raise the default quota for ml.inf2.48xlarge for endpoint usage to 1. ([View Highlight](https://read.readwise.io/read/01jjw9t9cj9dw0tv25b5xg3vkf))
- Then, instantiate a sagemaker_session which is used to determine the current region and execution role.
  Create the SageMaker Model object with the Python SDK:
  Deploy the model to a Sagemaker endpoint and test the endpoint:
  That’s it, you deployed a Llama 70B reasoning model on a Neuron instance! Under the hood, it downloaded a pre-compiled model from Hugging Face to speed up the endpoint start time. ([View Highlight](https://read.readwise.io/read/01jjw9tfngqzk6ghwzn29zafks))
- Before, let’s start with a few pre-requisites. Make sur you have subscribed to the Hugging Face Neuron Deep Learning AMI on the [Marketplace](https://aws.amazon.com/marketplace/pp/prodview-gr3e6yiscria2). It provides you all the necessary dependencies to train and deploy Hugging Face models on Trainium & Inferentia. Then, launch an inf2.48xlarge instance in EC2 with the AMI and connect through SSH. You can check our step-by-step [guide](https://huggingface.co/docs/optimum-neuron/en/guides/setup_aws_instance) if you have never done it.
  Once connected through the instance, you can deploy the model on an endpoint ([View Highlight](https://read.readwise.io/read/01jjw9w12t3vmpcn511megz25d))
