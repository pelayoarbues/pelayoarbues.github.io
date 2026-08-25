---
author: "[[unsloth.ai]]"
title: '🦥Unsloth Dynamic 3.0 GGUFs'
date: "2026-08-25"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F2815821428-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FHpyELzcNe0topgVLGCZY%252Fsites%252Fsite_mXXTe%252Fsocialpreview%252FOeFDVbzp4cgwaId7PbvL%252Funsloth%2520docs%2520pic.png%3Falt%3Dmedia%26token%3Df34a6bcc-db15-449a-bc2d-e0e8f52fe953&width=1200&height=630&sign=b1ca68fa&sv=2)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: 🦥Unsloth Dynamic 3.0 GGUFs
- URL: https://unsloth.ai/docs/basics/dynamic-3.0-ggufs

## Highlights
- Today, we’re releasing [**Qwen3.8-27B**](https://unsloth.ai/docs/models/qwen3.8) Dynamic v3.0 quants that deliver **>10% top-1% better accuracy at the same size** compared to **every other provider**. This is an update of our first shared **early preview** version of Dynamic v3.0. The new 3.0 GGUFs work with most inference engines including **llama.cpp** and [**Unsloth Desktop**](https://unsloth.ai/docs/desktop).
  Dynamic v3.0 overall preserves more model quality while keeping the same size, with stronger results across metrics like **Divergence-300** @32 and **KL Divergence**.
  Also a huge thanks to all your support! We saw over 5.1 million Unsloth Qwen3.8 downloads in just 5 days!
  ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252Fl9piThTmmUsePst5w3F2%252Fimage.png%3Falt%3Dmedia%26token%3D821e88e2-ad4e-40bf-adf2-e13837228e82&width=768&dpr=3&quality=100&sign=dd5f7cb5&sv=2) ([View Highlight](https://read.readwise.io/read/01m0w5z49gxrqg876qkbq9gyd0))
- Our new methodology composes of many new features and improvements. We now use a much higher-quality imatrix calibration dataset from diverse sources. The dataset is refined for **agentic coding, chat**, and multilingual performance. We also improved **layer selection** and introduced many more quantization techniques to preserve as much model quality as possible. ([View Highlight](https://read.readwise.io/read/01m0w5zjz91sw8qqp32m6my2yz))
- Dynamic v2.0 (Old)
  We're introducing [Unsloth](https://github.com/unslothai/unsloth) Dynamic v2.0 quantization - a major upgrade to our previous quants. This new method outperforms leading quantization methods and sets new benchmarks for [Aider Polyglot](https://unsloth.ai/docs/basics/dynamic-3.0-ggufs/unsloth-dynamic-ggufs-on-aider-polyglot), 5-shot MMLU and KL Divergence.
  This means you can now run + fine-tune [quantized LLMs](https://unsloth.ai/docs/models/tutorials) while preserving as much accuracy as possible! You can run the 2.0 GGUFs on most inference engines like llama.cpp, [Unsloth Studio](https://unsloth.ai/docs/new/studio) etc. ([View Highlight](https://read.readwise.io/read/01m0w5zxw8ppa0vdxz82zk5qcn))
- 💡 What's New in Dynamic v2.0?
  • **Revamped Layer Selection for GGUFs + safetensors:** Unsloth Dynamic 2.0 now selectively quantizes layers much more intelligently and extensively. Rather than modifying only select layers, we now dynamically adjust the quantization type of every possible layer, and the combinations will differ for each layer and model.
  • Current selected and all future GGUF uploads will utilize Dynamic 2.0 and our new calibration dataset. The dataset contains more than >1.5M **tokens** (depending on model) and comprise of high-quality, hand-curated and cleaned data - to greatly enhance conversational chat performance.
  • Previously, our Dynamic quantization (DeepSeek-R1 1.58-bit GGUF) was effective only for MoE architectures. **Dynamic 2.0 quantization now works on all models (including MOEs & non-MoEs)**.
  • **Model-Specific Quants:** Each model now uses a custom-tailored quantization scheme. E.g. the layers quantized in Gemma 3 differ significantly from those in Llama 4.
  • To maximize efficiency, especially on Apple Silicon and ARM devices, we now also add Q4_NL, Q5.1, Q5.0, Q4.1, and Q4.0 formats.
  To ensure accurate benchmarking, we built an internal evaluation framework to match official reported 5-shot MMLU scores of Llama 4 and Gemma 3. This allowed apples-to-apples comparisons between full-precision vs. Dynamic v2.0, **QAT** and standard **imatrix** GGUF quants. ([View Highlight](https://read.readwise.io/read/01m0w60dc8ae1x0r5cxzt591e7))
- [Accuracy is Not All You Need](https://arxiv.org/pdf/2407.09141) showcases how pruning layers, even by selecting unnecessary ones still yields vast differences in terms of "flips". A "flip" is defined as answers changing from incorrect to correct or vice versa. The paper shows how MMLU might not decrease as we prune layers or do quantization,but that's because some incorrect answers might have "flipped" to become correct. Our goal is to match the original model, so measuring "flips" is a good metric. ([View Highlight](https://read.readwise.io/read/01m0w60rr035yxrynxrkwq7w83))
