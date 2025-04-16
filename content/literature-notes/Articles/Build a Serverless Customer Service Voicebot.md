---
author: "[[inferless.com]]"
title: 'Build a Serverless Customer Service Voicebot'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://mintlify.com/docs/api/og?division=Documentation&title=Build+a+Serverless+Customer+Service+Voicebot&description=Welcome+to+an+engaging+tutorial+designed+to+walk+you+through+creating+a+customer+support+voicebot+where+users+can+voice+their+queries+and+receive+solutions.+You%27ll+learn+to+integrate+speech+recognition%2C+large+language%2C+and+text-to-speech+models+to+develop+a+responsive+and+efficient+voice-based+customer+support+application.&logoLight=https%3A%2F%2Fmintlify.s3-us-west-1.amazonaws.com%2Finferless-68%2Flogo.svg&logoDark=https%3A%2F%2Fmintlify.s3-us-west-1.amazonaws.com%2Finferless-68%2Flogo.svg&primaryColor=%2394CF09&lightColor=%239FDD0C&darkColor=%2394CF09)

## Metadata
- Author: [[inferless.com]]
- Full Title: Build a Serverless Customer Service Voicebot
- URL: https://docs.inferless.com/cookbook/serverless-customer-service-bot

## Highlights
- Key Components of the Application
  In building this application, we’ll utilize these components:
  1. **Dataset:** We will use the dataset [Twitter customer support exchanges](https://www.kaggle.com/datasets/thoughtvector/customer-support-on-twitter?resource=download) to help the voicebot develop natural and effective conversational abilities, improving its response accuracy.
  2. **Vector Database:** We will use [Pinecone](https://www.pinecone.io/) will store embeddings of the dataset, aiding in the retrieval of relevant information to provide context to the language model.
  3. **Embedding Model:** We will utilize an embedding model [bge-small-en-v1.5](https://huggingface.co/BAAI/bge-small-en-v1.5) to convert textual data from our dataset into numerical vectors. By storing these vectors in a Pinecone, our bot can quickly access relevant information to generate accurate and contextually appropriate responses.
  4. **Automatic Speech Recognition Model:** We will use the [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) to convert spoken words into text.
  5. **Text Generation Model:** The [Hermes-2-Pro-Llama-3-8B](https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B) will generate responses to user queries.
  6. **Text-to-Audio Model:** [Piper](https://github.com/rhasspy/piper) will convert the generated text responses into speech for a seamless conversational experience. ([View Highlight](https://read.readwise.io/read/01j03mcwqywg0452js3x4k4x9x))
- This tutorial guides you through creating a customer support voicebot where users can speak their queries and the bot responds with spoken solutions. It leverages technologies such as [Pinecone](https://www.pinecone.io/), [Faster-Whisper](https://github.com/SYSTRAN/faster-whisper), [LlamaIndex](https://www.llamaindex.ai/), [Piper](https://github.com/rhasspy/piper), and [Inferless](https://www.inferless.com/). ([View Highlight](https://read.readwise.io/read/01j03md436amqjp6jsaeez8jtt))
- Speech-to-Speech Generation
  • **Objective:** Capture user voice input, transcribe it to text, generate the text response, and convert it back to speech.
  • **Action:** Implement a Python class ([InferlessPythonModel](https://github.com/inferless/Customer-Service-Voicebot/blob/main/app.py)) to handle the entire speech-to-speech process, including voice input handling, model integration, and audio response generation. ([View Highlight](https://read.readwise.io/read/01j03me49ff6cvyb47a8p7q6x2))
- By opting for Inferless, ***you can achieve up to 90.10% cost savings.***
  Please note that we have utilized the A100(80 GB) GPU for model benchmarking purposes, while for pricing comparison, we referenced the A10G GPU price from both platforms. This is due to the unavailability of the A100 GPU in SageMaker.
  Also, the above analysis is based on a smaller-scale scenario for demonstration purposes. Should the scale increase tenfold, traditional cloud services might require maintaining 2-4 GPUs constantly active to manage peak loads efficiently. In contrast, Inferless, with its dynamic scaling capabilities, adeptly adjusts to fluctuating demand without the need for continuously running hardware. ([View Highlight](https://read.readwise.io/read/01j03mg2c6wrcbc23pqbjs8n1w))
- Choosing Inferless for Deployment
  Deploying your Customer Service Voicebot application with Inferless offers compelling advantages, making your development journey smoother and more cost-effective. Here’s why Inferless is the go-to choice:
  1. **Ease of Use:** Forget the complexities of infrastructure management. With Inferless, you simply bring your model, and within minutes, you have a working endpoint. Deployment is hassle-free, without the need for in-depth knowledge of scaling or infrastructure maintenance.
  2. **Cold-start Times:** Inferless’s unique load balancing ensures faster cold-starts. Expect around 2.87 seconds to process each queries, significantly faster than many traditional platforms.
  3. **Cost Efficiency:** Inferless optimizes resource utilization, translating to lower operational costs. Here’s a simplified cost comparison: ([View Highlight](https://read.readwise.io/read/01j03mekxqzaf106g0kqx5t0zs))
