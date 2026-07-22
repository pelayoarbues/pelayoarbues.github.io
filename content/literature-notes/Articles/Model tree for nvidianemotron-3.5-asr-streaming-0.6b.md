---
author: "[[huggingface.co]]"
title: 'Model tree for nvidia/nemotron-3.5-asr-streaming-0.6b'
date: "2026-07-22"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/e7c2985f78cb42d4988db16469e670fb.jpg)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Model tree for nvidia/nemotron-3.5-asr-streaming-0.6b
- URL: https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b

## Highlights
- **Nemotron 3.5 ASR** is a multilingual, streaming Automatic Speech Recognition (ASR) model engineered to deliver high-quality multilingual transcription across both low-latency streaming and high-throughput batch workloads. Developed by NVIDIA, this 600M parameter model transcribes speech into text with native support for punctuation and capitalization, and offers runtime flexibility with configurable chunk sizes, including 80ms, 160ms, 320ms, 560ms, and 1120ms.
  By leveraging a state-of-the-art **Cache-Aware FastConformer-RNNT** architecture, the model eliminates redundant overlapping computations common in traditional "buffered" streaming. This allows it to process only new audio chunks while reusing cached encoder context, significantly improving computational efficiency and minimizing end-to-end delay without sacrificing accuracy. ([View Highlight](https://read.readwise.io/read/01ky4mpsqvhgmkhvpn7xsdakjr))
- Why Choose Nemotron 3.5 ASR?
  • 🌍 **Single Multilingual Model:** Transcribes 40 language-locales from one model through language-ID prompt conditioning, with optional automatic language detection.
  • ⚡ **Native Streaming Architecture:** Cache-aware design enables efficient processing of continuous audio streams, designed and optimized for low-latency voice agent applications.
  • 💰 **Improved Operational Efficiency:** Delivers superior throughput compared to traditional buffered streaming approaches. This allows for a higher number of parallel streams within the same GPU memory constraints, directly reducing operational costs for production environments.
  • 🎛️ **Dynamic Runtime Flexibility:** Choose the optimal operating point on the latency-accuracy Pareto curve at inference time. No re-training is required to adjust for different use-case requirements.
  • 📝 **Punctuation & Capitalization:** Built-in support for punctuation and capitalization in output text.
  • 🔧 **Fine-tuning:** Check our [blog post](https://huggingface.co/blog/nvidia/fine-tuning-nemotron-35-asr) of **how to fine-tune Nemotron 3.5 ASR to improve these languages**, including before/after results. ([View Highlight](https://read.readwise.io/read/01ky4mqknz18g2j44z7d1wg1cg))
