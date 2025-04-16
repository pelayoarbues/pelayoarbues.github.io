---
author: [[Meor Amer]]
title: 'Validating LLM Outputs'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://cohere.com/_ipx/w_640,q_75/https%3A%2F%2Fcohere-ai.ghost.io%2Fcontent%2Fimages%2F2023%2F09%2FValidating-Large-Language-Model-Outputs.png?url=https%3A%2F%2Fcohere-ai.ghost.io%2Fcontent%2Fimages%2F2023%2F09%2FValidating-Large-Language-Model-Outputs.png&w=640&q=75)

## Metadata
- Author: [[Meor Amer]]
- Full Title: Validating LLM Outputs
- URL: https://cohere.com/blog/validating-llm-outputs

## Highlights
- However, one key property of LLMs that’s different from traditional software is that the output is probabilistic in nature. The same input (i.e., the prompt) may not always produce the same response. While this property makes it possible to build entirely new classes of natural language applications, it also means that those applications require a mechanism for validating their outputs. ([View Highlight](https://read.readwise.io/read/01hy2snmdc5xyxwwt8dzerg1a6))
- There are many other ways that a response may not match the expected structure. For example, what if the generated output contained fields we never specified? What if the document provided were more challenging to parse, causing an unclear response? What if we wanted to impose a rule that a field can only take up values within a certain range? In these cases, and many others, we need to add a step for validating the output.
  In the rest of this article, we’ll look at LLM output validation and examples of how to implement it using an open-source package called Guardrails AI. ([View Highlight](https://read.readwise.io/read/01hy2snzx079x4hm8h2dsepr8x))
- To build robust and production-ready LLM applications, the outputs need to be predictable. This helps to safeguard the application against unexpected behaviors and to ensure a reliable user experience. The following provides some example scenarios when output validation may be needed.
  • **Structure compliance**: Some LLM applications require their output to go beyond just freeform text and instead follow a specific structure containing specific types of information. We looked at a toy example earlier of a text extraction task that requires a JSON output that follows a certain format. We can extend this to synthetic data generation cases, where the generated data must meet certain criteria.
  • **Safe responses**: Due to their probabilistic nature, LLM applications require additional guardrails to ensure their outputs are safe, ethical, and privacy-preserving. For example, we may want to confirm that an output does not contain profanity. Alternatively, we may want to ensure that an output does not contain personally identifiable information (PII).
  • **Semantic similarity**: In some applications, we may require the output to be similar enough to a target. For example, in text summarization tasks, we want to ensure that the summary does not deviate too far from the original document. For this, with the help of text embeddings, we want to validate that the summary and the document are similar enough semantically.
  • **Valid choices**: We may also want the LLM to generate valid outputs per given definitions or constraints. For example, creating an LLM chess player will require the LLM output to generate only valid moves for a given board state. We could also validate that a generated piece of code is syntactically correct.
  • **Quality assurance**: More generally, we may want to implement a validation step to ensure an LLM output meets a certain quality standard for a respective application’s use case and provides value to users. ([View Highlight](https://read.readwise.io/read/01hy2sp5vy3vh1jhj3vwjz39s0))
- [Guardrails AI](http://guardrailsai.com/?ref=cohere-ai.ghost.io) is a Python package that enables developers to enhance the outputs of LLms by adding structural, type, and quality assurances. Guardrails helps developers with two key activities in a validation process:
  • **Validation**: Performing output validation for LLMs in a similar style to the [Pydantic](https://docs.pydantic.dev/latest/?ref=cohere-ai.ghost.io) package, which is a data validation library for Python. Some examples are validating the structure of generated JSON output, identifying bias in generated text, and checking for bugs in generated code.
  • **Correction**: Performing corrective actions based on the validation results, such as asking the LLM to re-generate the response or fixing the output directly. ([View Highlight](https://read.readwise.io/read/01hy2spd1jkbdtd1a9aptwnxht))
- In the schema, we defined a few “validators,” a Guardrails feature that lets us define the type of validation to perform. One example is `ValidChoices`, useful for situations where we want to enforce that a response can only be within a predefined list of items. In our example, in the `symptom` field, the value can only be one of head, neck, or chest. And if the generated response doesn’t fulfill this criteria, it will be re-prompted. This is shown by the `on_fail` setting that triggers a `reask`. ([View Highlight](https://read.readwise.io/read/01hy2sqp3f4q260w7fjd4ypn46))
