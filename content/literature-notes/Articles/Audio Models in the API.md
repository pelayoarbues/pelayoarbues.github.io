---
author: "[[OpenAI]]"
title: 'Audio Models in the API'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://i.ytimg.com/vi/lXb0L16ISAc/maxresdefault.jpg?v=67dc2b22)

## Metadata
- Author: [[OpenAI]]
- Full Title: Audio Models in the API
- URL: https://www.youtube.com/watch?v=lXb0L16ISAc&t=35s

## Highlights
- we released the agent asdk which allows you to build your own custom agents today is really really exciting we're moving beyond text to voice
  agents many people prefer to speak and to listen over writing and reading so in a way voice is a very natural human interface and today we're going to enable developers and businesses to build voice agents agents ([View Highlight](https://read.readwise.io/read/01jq3mt7wjhtsqe4c9eb32vqjy))
- We think of agents in general as AI systems that can act independently on behalf of a user or a developer. You might see a text agent if you visit a website and see a chat box in the bottom right. If you want to ask about the product catalog or your recent orders, that's by text. You can do the same thing with voice, so you can call in and be speaking to an AI voice. ([View Highlight](https://read.readwise.io/read/01jq3mwjy77dsmga77cjjrny4g))
- We see two primary approaches that developers take. The first one is using more futuristic speech-to-speech models. These are models that are capable of understanding audio directly and speaking back directly. They're really fast; they're what powers advanced voice modes and ChatGPT and our real-time API ([View Highlight](https://read.readwise.io/read/01jq3mx5ee752a6m5s3hsxfnyt))
- The other approach, which a lot of developers take as the way to get started in voice, is what we think of as a chained approach, where you take a speech to-text model that understands what the user says and turns it into a text transcript that's then processed by a text-based LLM, like GPT-4. Then that model figures out an appropriate response and passes it to a text-to-speech model to speak back to the user. Developers often love the chained approach first because it's modular; they can mix and match all the different components, ensuring they're using
  the best models for their use case. ([View Highlight](https://read.readwise.io/read/01jq3mxrkn3b7r5e92cytfnbeq))
- They also love it because it's the easiest way to achieve really high reliability. The gold standard in terms of intelligence is still text-based models; however, the speech-to-speech models aren’t catching up quickly. Then, the third reason they love it is that it's easier to get Started, you can take all of the work that you've done in a text-based agent and you can preen to speech-to-text model on one side, put text-to-speech on the other side, and now you have a voice agent. ([View Highlight](https://read.readwise.io/read/01jq3mzby3py05k1st37zpg8d8))
- A few things to cover: we'll start with speech to text, where we have two new models: GPT 40 Transcribe and GPT 4 Mini Transcribe. ([View Highlight](https://read.readwise.io/read/01jq3mzj7g023mwpgeb8vbb5t6))
- Whisper and the Whisper 3, our new generation model is based on our LAR Speech model. This means this new model has been trained on trillions of audio tokens. It also incorporates our latest technologies and also the architecture of our models. We also distilled the larger model down to a much smaller size one, which is the GPT 40 Mini Transcribe. The smaller size model is faster and more efficient. It also retains a good transcription capability. ([View Highlight](https://read.readwise.io/read/01jq3n02v1gyhv4ecr077s69ad))
- We’re also enhancing our speech to text APIs with streaming, so developers can pass in a continuous stream of audio into the model and get a continuous stream of text in response. This makes it easier to build really fast experiences. We’re bundling into these APIs a bunch of hard problems that developers need to solve to build voice experiences, so they come with noise cancellation. This means the model isn’t going to get tripped up by background sounds. They also include a new semantic voice activity detector, which chunks the audio up based on when the model thinks the user is actually finished speaking. So, as a developer, you don’t need to worry about processing some half-spoken ideas. ([View Highlight](https://read.readwise.io/read/01jq3n5eyjt37pdc7fq2ahy0ev))
