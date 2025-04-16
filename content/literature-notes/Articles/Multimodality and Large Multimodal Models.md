---
author: "[[Chip Huyen]]"
title: 'Multimodality and Large Multimodal Models'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://huyenchip.com/favicon.ico)

## Metadata
- Author: [[Chip Huyen]]
- Full Title: Multimodality and Large Multimodal Models
- URL: https://huyenchip.com//2023/10/10/multimodal.html

## Highlights
- Incorporating additional modalities to LLMs (Large Language Models) creates LMMs (Large Multimodal Models). In the last year, every week, a major research lab introduced a new LMM, e.g. DeepMind’s Flamingo, Salesforce’s BLIP, Microsoft’s KOSMOS-1, Google’s PaLM-E, and Tencent’s Macaw-LLM. Chatbots like [ChatGPT](https://openai.com/blog/chatgpt-can-now-see-hear-and-speak) and [Gemini](https://blog.google/technology/ai/google-io-2023-keynote-sundar-pichai/#palm-2-gemini) are LMMs. ([View Highlight](https://read.readwise.io/read/01hw100c9ay54qd7ysdhd6e8m0))
- Multimodal can mean one or more of the following:
  1. Input and output are of different modalities (e.g. text-to-image, image-to-text)
  2. Inputs are multimodal (e.g. a system that can process both text and images)
  3. Outputs are multimodal (e.g. a system that can generate both text and images)
  This post covers multimodal ([View Highlight](https://read.readwise.io/read/01hw101q54tb19dc66j1nv6rtm))
- Many use cases are impossible without multimodality, especially those in industries that deal with a mixture of data modalities such as healthcare, robotics, e-commerce, retail, gaming, etc. ([View Highlight](https://read.readwise.io/read/01hw102hyjbpm3bn1671qb4g7a))
- Not only that, multimodal data can boost unimodal model performance. Shouldn’t a model that can learn from both text and images perform better than a model that can learn from only text or only image? ([View Highlight](https://read.readwise.io/read/01hw102nb82956vk9n26rq4n5j))
- Multimodal systems can provide a more flexible interface, allowing you to interact with them in whichever way works best for you at the moment. Imagine you can ask a question by typing, talking, or just pointing your camera at something. ([View Highlight](https://read.readwise.io/read/01hw102skcq0gfavmhty7pmym2))
- One use case that I’m especially excited about, is that multimodality can also enable visually impaired people to browse the Internet and also navigate the real world. ([View Highlight](https://read.readwise.io/read/01hw10368zqr43me8j61q9nsdj))
- Different data modes are text, image, audio, tabular data, etc. One data mode can be represented or *approximated* in another data mode. For example:
  • Audio can be represented as images (mel spectrograms).
  • Speech can be transcribed into text, though its text-only representation loses information such as volume, intonation, pauses, etc.
  • An image can be represented as a vector, which, in turn, can be flattened and represented as a sequence of text tokens.
  • A video is a sequence of images plus audio. ML models today mostly treat videos as sequences of images. This is a severe limitation, as sounds have proved to be just as important as visuals for videos. [88% of TikTok users shared that sound is essential for their TikTok experience](https://www.kantar.com/uki/inspiration/advertising-media/the-power-of-tiktok).
  • A text can be represented as an image if you simply take a picture of it.
  • A data table can be converted into a chart, which is an image. ([View Highlight](https://read.readwise.io/read/01hw103h7bkqn2qzze4t45a1cy))
- In ML today, audio is still largely treated as a voice-based alternative to text. The most common use cases for audio are still speech recognition (speech-to-text) and speech synthesis (text-to-speech). Non-speech audio use cases, e.g. music generation, are still pretty niche. See the fake Drake & Weeknd song and [MusicGen model on HuggingFace](https://huggingface.co/spaces/facebook/MusicGen). ([View Highlight](https://read.readwise.io/read/01hw104e2htc6d1n7z21and0n8))
- Image is perhaps the most versatile format for model inputs, as it can be used to represent text, tabular data, audio, and to some extent, videos. There’s also so much more visual data than text data. We have phones/webcams that constantly take pictures and videos today. ([View Highlight](https://read.readwise.io/read/01hw104padpke1kgyesanfmyxw))
- Text is a much more powerful mode for model outputs. A model that can generate images can only be used for image generation, whereas a model that can generate text can be used for many tasks: summarization, translation, reasoning, question answering, etc. ([View Highlight](https://read.readwise.io/read/01hw1050ax1rgjjahwee6ws8v4))
- To understand multimodal systems, it’s helpful to look at the tasks they are built to solve. There are many tasks and many possible ways to organize them. In literature, I commonly see vision-language tasks divided into two groups: **generation** and **vision-language understanding** (VLU), which is the umbrella term for all tasks that don’t require generation. The line between these two groups is blurred, as being able to generate answers requires understanding too. ([View Highlight](https://read.readwise.io/read/01hw105dbmxabhf1dfafq7wt73))
