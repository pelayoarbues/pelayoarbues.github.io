---
author: "[[mistral.ai]]"
title: 'Voxtral'
date: "2025-07-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://mistral.ai/img/mistral-cover.png)

## Metadata
- Author: [[mistral.ai]]
- Full Title: Voxtral
- URL: https://mistral.ai/news/voxtral

## Highlights
- Voice was humanity’s first interface—long before writing or typing, it let us share ideas, coordinate work, and build relationships. As digital systems become more capable, voice is returning as our most natural form of human-computer interaction. ([View Highlight](https://read.readwise.io/read/01k0rp1f3hcw7bcknvtmpczzgd))
- We release the Voxtral models to accelerate this future. These state‑of‑the‑art speech understanding models are  available in two sizes—a 24B variant for production-scale applications and a 3B variant for local and edge deployments. Both versions are released under the Apache 2.0 license, and are also available on our [API](https://docs.mistral.ai/capabilities/audio/#transcription). The API routes transcription queries to a transcribe-optimized version of Voxtral Mini (Voxtral Mini Transcribe) that delivers unparalleled cost and latency-efficiency. ([View Highlight](https://read.readwise.io/read/01k0rp4w8f2q15tty6vzwfjcd6))
- Until recently, gaining truly usable speech intelligence in production meant choosing between two trade-offs:
  1. Open-source ASR systems with high word error rates and limited semantic understanding
  2. Closed, proprietary APIs that combine strong transcription with language understanding, but at significantly higher cost and with less control over deployment ([View Highlight](https://read.readwise.io/read/01k0rp1v67zwtw8q13vjs196rh))
- Both Voxtral models go beyond simple transcription with capabilities that include:
  • *Long-form context:* with a 32k token context length, Voxtral handles audios up to 30 minutes for transcription, or 40 minutes for understanding 
  • *Built-in Q&A and summarization:* Supports asking questions directly about the audio content or generating structured summaries, without the need to chain separate ASR and language models
  • *Natively multilingual:* Automatic language detection and state-of-the-art performance in the world’s most widely used languages (English, Spanish, French, Portuguese, Hindi, German, Dutch, Italian, to name a few), helping teams serve global audiences with a single system
  • *Function-calling straight from voice:* Enables direct triggering of backend functions, workflows, or API calls based on spoken user intents, turning voice interactions into actionable system commands without intermediate parsing steps.
  • *Highly capable at text:* Retains the text understanding capabilities of its language model backbone, Mistral Small 3.1 ([View Highlight](https://read.readwise.io/read/01k0rp22mdqxxq6nbrj45gj5xy))
- To assess Voxtral’s transcription capabilities, we evaluate it on a range of English and multilingual benchmarks. For each task, we report the macro-average word error rate (lower is better) across languages. For English, we report a short-form (<30-seconds) and long-form (>30-seconds) average.
  Voxtral comprehensively outperforms Whisper large-v3, the current leading open-source Speech Transcription model. It beats GPT-4o mini Transcribe and Gemini 2.5 Flash across all tasks, and achieves state-of-the-art results on English short-form and Mozilla Common Voice, surpassing ElevenLabs Scribe and demonstrating its strong multilingual capabilities. ([View Highlight](https://read.readwise.io/read/01k0rp2cy24hy3vvfhwc9vzxqk))
- Voxtral Small and Mini are capable of answering questions directly from speech, or by providing an audio and a text-based prompt. To evaluate Audio Understanding capabilities, we create speech-synthesized versions of three common Text Understanding tasks. We also evaluate the models on an in-house Audio Understanding (AU) Benchmark, where the model is tasked with answering challenging questions on 40 long-form audio examples. Finally, we assess Speech Translation capabilities on the FLEURS-Translation benchmark. ([View Highlight](https://read.readwise.io/read/01k0rp2s4gxvz1snph5wb533d7))
- Whether you’re prototyping on a laptop, running private workloads on-premises, or scaling to production in the cloud, getting started is straightforward.
  • Download and run locally: Both Voxtral (24B) and Voxtral Mini (3B) are available to [download](https://huggingface.co/mistralai/) on Hugging Face
  • Try the API: Integrate frontier speech intelligence into your application with a single [API call](https://console.mistral.ai/). Pricing starts at $0.001 per minute, making high-quality transcription and understanding affordable at scale. Check out our documentation [here](https://docs.mistral.ai/capabilities/audio/). ([View Highlight](https://read.readwise.io/read/01k0rp36nsybnhh8a20ykfzeja))
