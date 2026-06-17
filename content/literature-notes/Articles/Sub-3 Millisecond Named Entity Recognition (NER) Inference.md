---
author: "[[Baseten]]"
title: 'Sub-3 Millisecond Named Entity Recognition (NER) Inference'
date: "2026-04-06"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.baseten.co/blog/sub-3-millisecond-named-entity-recognition-ner-inference/opengraph-image-w6ejn9?d279179c4f880b3f)

## Metadata
- Author: [[Baseten]]
- Full Title: Sub-3 Millisecond Named Entity Recognition (NER) Inference
- URL: https://www.baseten.co/blog/sub-3-millisecond-named-entity-recognition-ner-inference/#optimizing-ner-inference-ner-vs-embeddings

## Highlights
- If you’re already using NER in production, switching the inference layer is often the easiest way to make the pipeline faster (and cheaper) without changing your models or your application logic. BEI NER is designed for exactly that: a low-overhead serving path for encoder workloads where “everything else” can dominate latency. ([View Highlight](https://read.readwise.io/read/01knj8seh7jr2qsr369mqm9par))
- If you want to deploy a specific NER checkpoint (or a token classifier for PII detection, moderation, or routing), you can use the same BEI workflow — point BEI at your checkpoint, expose `/predict_tokens`, and scale it like any other Baseten deployment. If you have any questions, [reach out](https://www.baseten.co/talk-to-us/) or check out [our docs](https://docs.baseten.co/engines/bei/bei-bert#named-entity-recognition-ner-models); we’re happy to help! ([View Highlight](https://read.readwise.io/read/01knj8skj93tts4rf0b47xewm1))
- Using BEI, named entity recognition (NER) inference runs at 1 ms P50 and 3 ms P99 latency on the server side, and 3 ms P50 and 4 ms P99 latency end-to-end (including network latency, which can be variable). In comparison, an optimized PyTorch model implementation (transformers + the open-source Baseten Performance Client, which improves throughput up to 12x) achieves 16 ms P50 and 23 ms P99 latency (without the Performance Client we see up to 50 ms P99 latency, but use the more conservative estimate here). The BEI implementation is ~7.7x faster. ([View Highlight](https://read.readwise.io/read/01knj8p35e9kprsg2nw3f5wnkc))
- Most modern NER models are implemented as token classification:
  1. Tokenize the input text into word pieces (e.g., WordPiece/BPE).
  2. Run an encoder model (often from the BERT family).
  3. Produce a label distribution for every token (e.g., B-PER, I-ORG, O, etc.).
  4. Optionally post-process token labels into entity spans aligned with the original string. ([View Highlight](https://read.readwise.io/read/01knj8pm6v26wsf8wa1e31hn43))
- Unlike embedding models (which output one vector per input text), NER returns a prediction per token. That makes the inference compute relatively small compared to the overhead around inference (tokenization, HTTP parsing, JSON serialization, connection behavior, proxying, and framework overhead).
  Once the model is fast enough, the real work becomes removing everything else from the hot path. ([View Highlight](https://read.readwise.io/read/01knj8pvapp5mzv0xt41g5tsa7))
- To achieve sub-3 ms NER inference, we focused on removing latency at every layer of the serving stack: the web framework and tokenizer, the proxy, connection handling, and the deployment topology.
  BEI uses a Rust-based web server and tokenizer stack designed for high-throughput encoder workloads. NER benefits even more than embeddings here, because token classification requests can be small enough that a Python web framework’s overhead dominates the end-to-end latency.
  By keeping tokenization and request handling in Rust, we minimize per-request overhead and keep CPU utilization predictable under concurrency. ([View Highlight](https://read.readwise.io/read/01knj8q5z735n4n4vxn12k41e3))
- sub-millisecond inference, “just the proxy” can become the bottleneck. We configure Nginx to reduce overhead on the serving path, minimizing unnecessary buffering and avoiding disk-backed behavior that can introduce latency variance.
  The goal is simple: keep the request path memory-backed and lightweight, so the model runtime is what you’re measuring — not incidental IO.
  If you benchmark without connection reuse, you’re mostly measuring TLS handshakes, socket setup, and request lifecycle overhead. That’s not what production looks like, and it’s especially misleading when the model itself is extremely fast. ([View Highlight](https://read.readwise.io/read/01knj8qfy75arq6jdf8eb9ygmf))
- you’re calling your NER pipeline as part of a larger processing pipeline, e.g., for anonymization or query understanding, running it in the same physical datacenter can help reduce latency.
  Baseten has products like [Chains](https://docs.baseten.co/development/chain/overview) that allow co-location of Baseten deployments. ([View Highlight](https://read.readwise.io/read/01knj8qv2a8cw3wkgtzbyb6gj7))
- elpful mental model:
  • A minimal FastAPI route like `/hello_world` is effectively a benchmark of framework overhead.
  • A Python-served NER endpoint often adds tokenization, model runtime, and serialization on top of that.
  • BEI’s `/predict_tokens` is designed to keep overhead low enough that token classification can run at the speed the hardware allows.
  When you’re chasing sub-millisecond inference, these differences matter: at that point, even “small” overhead (routing layers, connection setup, JSON parsing/encoding) can dominate end-to-end latency. ([View Highlight](https://read.readwise.io/read/01knj8rcpa3z34a826zsz6d3sn))
- is an example configuration for deploying a BERT-family NER model checkpoint via BEI on an L4 GPU. It sets BEI’s default route to `/predict_tokens`, which returns token-level predictions.
  • `base_model: encoder_bert` selects the encoder runtime path suitable for token classification.
  • `webserver_default_route: /predict_tokens` makes the model behave like a dedicated token prediction endpoint.
  • `raw_scores: true` returns per-label probabilities per token (useful if you want to apply confidence thresholds or custom decoding).
  BEI returns token-level predictions from `/predict_tokens`. The response includes one entry per token and (when enabled) a per-label probability distribution. ([View Highlight](https://read.readwise.io/read/01knj8s0kk6vgxps7xev9dbcwk))
