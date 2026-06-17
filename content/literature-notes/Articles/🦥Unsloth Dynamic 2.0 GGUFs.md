---
author: "[[unsloth.ai]]"
title: '🦥Unsloth Dynamic 2.0 GGUFs'
date: "2026-04-27"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://news.ycombinator.com/y18.svg)

## Metadata
- Author: [[unsloth.ai]]
- Full Title: 🦥Unsloth Dynamic 2.0 GGUFs
- URL: https://unsloth.ai/docs/basics/unsloth-dynamic-2.0-ggufs

## Highlights
- We're excited to introduce our Dynamic v2.0 quantization method - a major upgrade to our previous quants. This new method outperforms leading quantization methods and sets new benchmarks for 5-shot MMLU and KL Divergence. ([View Highlight](https://read.readwise.io/read/01kq71x7pzs5epkxkwzx2j0ev9))
- ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252FeynyrSMxDkkw0zl0haJH%252FCode_Generated_Image%2810%29.png%3Falt%3Dmedia%26token%3Dc62eef1c-fdd7-4838-8f69-bab227b56e23&width=768&dpr=3&quality=100&sign=457f1c1e&sv=2)
  Qwen3.5 KL Divergence Benchmarks (lower is better)
  ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252Fgit-blob-a114143bdd47add988182aabf9313ab40be38d7d%252Faider%2520thinking.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=6d6a39cd&sv=2) ([View Highlight](https://read.readwise.io/read/01kq71xv2s1qg4bhw1n1tepytj))
- This means you can now run + fine-tune [quantized LLMs](https://unsloth.ai/docs/models/tutorials) while preserving as much accuracy as possible! You can run the 2.0 GGUFs on any inference engine like llama.cpp, Ollama, Open WebUI, LM Studio etc.
  Detailed analysis of our benchmarks and evaluation further below.
  ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252FzhOcKSPKVHcpOd6QVYxg%252FCode_Generated_Image%2816%29.png%3Falt%3Dmedia%26token%3Dd71afe35-41f3-4c99-abe5-2f4ade4f8565&width=768&dpr=3&quality=100&sign=909ea7d2&sv=2) ([View Highlight](https://read.readwise.io/read/01kq71xf4bw9yh3bp2sq0qv36t))
- What's New in Dynamic v2.0?
  • **Revamped Layer Selection for GGUFs + safetensors:** Unsloth Dynamic 2.0 now selectively quantizes layers much more intelligently and extensively. Rather than modifying only select layers, we now dynamically adjust the quantization type of every possible layer, and the combinations will differ for each layer and model.
  • Current selected and all future GGUF uploads will utilize Dynamic 2.0 and our new calibration dataset. The dataset contains more than >1.5M **tokens** (depending on model) and comprise of high-quality, hand-curated and cleaned data - to greatly enhance conversational chat performance.
  • Previously, our Dynamic quantization (DeepSeek-R1 1.58-bit GGUF) was effective only for MoE architectures. **Dynamic 2.0 quantization now works on all models (including MOEs & non-MoEs)**.
  • **Model-Specific Quants:** Each model now uses a custom-tailored quantization scheme. E.g. the layers quantized in Gemma 3 differ significantly from those in Llama 4.
  • To maximize efficiency, especially on Apple Silicon and ARM devices, we now also add Q4_NL, Q5.1, Q5.0, Q4.1, and Q4.0 formats. ([View Highlight](https://read.readwise.io/read/01kq71y7vpawd83bv07fecfthz))
- To ensure accurate benchmarking, we built an internal evaluation framework to match official reported 5-shot MMLU scores of Llama 4 and Gemma 3. This allowed apples-to-apples comparisons between full-precision vs. Dynamic v2.0, **QAT** and standard **imatrix** GGUF quants.
  ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252Fgit-blob-fd0a92a2bea8efa37b71946ea934a22f00589f40%252Fkldivergence%2520graph.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=6d6a5ae7&sv=2)
  ![](https://unsloth.ai/docs/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252Fgit-blob-76662317725a3b76fb1e5e33b586c86e712bee6f%252F5shotmmlu.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=82bd53c&sv=2) ([View Highlight](https://read.readwise.io/read/01kq71yhk0vqedqx8krney7wtn))
- [Accuracy is Not All You Need](https://arxiv.org/pdf/2407.09141) showcases how pruning layers, even by selecting unnecessary ones still yields vast differences in terms of "flips". A "flip" is defined as answers changing from incorrect to correct or vice versa. The paper shows how MMLU might not decrease as we prune layers or do quantization,but that's because some incorrect answers might have "flipped" to become correct. Our goal is to match the original model, so measuring "flips" is a good metric. ([View Highlight](https://read.readwise.io/read/01kq71yn26batf9yp52je0eqt7))
- The paper also shows that interestingly KL Divergence is highly correlated with flips, and so our goal is to reduce the mean KL Divergence whilst increasing the disk space of the quantization as less as possible.
  Most frameworks report perplexity and KL Divergence using a test set of Wikipedia articles. However, we noticed using the calibration dataset which is also Wikipedia related causes quants to overfit, and attain lower perplexity scores. We utilize [Calibration_v3](https://gist.github.com/bartowski1182/eb213dccb3571f863da82e99418f81e8) and [Calibration_v5](https://gist.github.com/tristandruyen/9e207a95c7d75ddf37525d353e00659c/) datasets for fair testing which includes some wikitext data amongst other data. **Also instruct models have unique chat templates, and using text only calibration datasets is not effective for instruct models** (base models yes). In fact most imatrix GGUFs are typically calibrated with these issues. As a result, they naturally perform better on KL Divergence benchmarks that also use Wikipedia data, since the model is essentially optimized for that domain. ([View Highlight](https://read.readwise.io/read/01kq71zpknsdsrves3hdnxrxgt))
- To ensure a fair and controlled evaluation, we do not to use our own calibration dataset (which is optimized for chat performance) when benchmarking KL Divergence. Instead, we conducted tests using the same standard Wikipedia datasets, allowing us to directly compare the performance of our Dynamic 2.0 method against the baseline imatrix approach. ([View Highlight](https://read.readwise.io/read/01kq72008apkf1vf077py274jn))
