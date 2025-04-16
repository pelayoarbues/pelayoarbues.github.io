---
author: [[huggingface.co]]
title: 'Qwen2.5-VL-32B-Instruct'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/Qwen2.5-VL-32B-Instruct.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: Qwen2.5-VL-32B-Instruct
- URL: https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct

## Highlights
- [](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct)[Files Files and versions](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/tree/main) [Community](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/discussions)
  Train
  Deploy
  Use this model
  [Edit model card](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/edit/main/README.md)
  • [Qwen2.5-VL-32B-Instruct](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#qwen25-vl-32b-instruct)
  • [Latest Updates:](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#latest-updates)
  • [Introduction](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#introduction)
  • [Evaluation](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#evaluation)
  • [Vision](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#vision)
  • [Text](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#text)
  • [Requirements](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#requirements)
  • [Quickstart](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#quickstart)
  • [Using 🤗 Transformers to Chat](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#using-🤗--transformers-to-chat)
  • [🤖 ModelScope](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#🤖-modelscope)
  • [More Usage Tips](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#more-usage-tips)
  • [Processing Long Texts](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#processing-long-texts)
  • [Citation](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#citation)
  [](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#qwen25-vl-32b-instruct) ([View Highlight](https://read.readwise.io/read/01jq4ptzmahqmd8603dnvf0as0))
- Qwen2.5-VL-32B-Instruct[![Chat](https://img.shields.io/badge/%F0%9F%92%9C%EF%B8%8F%20Qwen%20Chat%20-536af5)](https://chat.qwenlm.ai/)[](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#latest-updates)Latest Updates:
  In addition to the original formula, we have further enhanced Qwen2.5-VL-32B's mathematical and problem-solving abilities through reinforcement learning. This has also significantly improved the model's subjective user experience, with response styles adjusted to better align with human preferences. Particularly for objective queries such as mathematics, logical reasoning, and knowledge-based Q&A, the level of detail in responses and the clarity of formatting have been noticeably enhanced.
  [](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#introduction)Introduction
  In the past five months since Qwen2-VL’s release, numerous developers have built new models on the Qwen2-VL vision-language models, providing us with valuable feedback. During this period, we focused on building more useful vision-language models. Today, we are excited to introduce the latest addition to the Qwen family: Qwen2.5-VL.
  [](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#key-enhancements)Key Enhancements:
  • **Understand things visually**: Qwen2.5-VL is not only proficient in recognizing common objects such as flowers, birds, fish, and insects, but it is highly capable of analyzing texts, charts, icons, graphics, and layouts within images.
  • **Being agentic**: Qwen2.5-VL directly plays as a visual agent that can reason and dynamically direct tools, which is capable of computer use and phone use.
  • **Understanding long videos and capturing events**: Qwen2.5-VL can comprehend videos of over 1 hour, and this time it has a new ability of cpaturing event by pinpointing the relevant video segments.
  • **Capable of visual localization in different formats**: Qwen2.5-VL can accurately localize objects in an image by generating bounding boxes or points, and it can provide stable JSON outputs for coordinates and attributes.
  • **Generating structured outputs**: for data like scans of invoices, forms, tables, etc. Qwen2.5-VL supports structured outputs of their contents, benefiting usages in finance, commerce, etc.
  [](https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct/#model-architecture-updates) ([View Highlight](https://read.readwise.io/read/01jq4pt66rwr1epsj8vyam2pdr))
- • **Dynamic Resolution and Frame Rate Training for Video Understanding**:
  We extend dynamic resolution to the temporal dimension by adopting dynamic FPS sampling, enabling the model to comprehend videos at various sampling rates. Accordingly, we update mRoPE in the time dimension with IDs and absolute time alignment, enabling the model to learn temporal sequence and speed, and ultimately acquire the ability to pinpoint specific moments. ([View Highlight](https://read.readwise.io/read/01jq4pv2ea8733zhtsv7y2qcn0))
