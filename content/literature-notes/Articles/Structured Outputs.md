---
author: [[ollama.com]]
title: "Structured Outputs"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://ollama.com/public/og.png)

## Metadata
- Author: [[ollama.com]]
- Full Title: Structured Outputs
- URL: https://ollama.com/blog/structured-outputs

## Highlights
- Ollama now supports structured outputs making it possible to constrain a model’s output to a specific format defined by a JSON schema. The Ollama Python and JavaScript libraries have been updated to support structured outputs. ([View Highlight](https://read.readwise.io/read/01jeewdzz8ss5fwq5w5s0tqe9a))
- The response is returned in the format defined by the JSON schema in the request. ([View Highlight](https://read.readwise.io/read/01jeewec1cxe6936cq4b7j4czz))
- Using the [Ollama Python library](https://github.com/ollama/ollama-python), pass in the schema as a JSON object to the `format` parameter as either `dict` or use Pydantic (recommended) to serialize the schema using `model_json_schema()`. ([View Highlight](https://read.readwise.io/read/01jeewenv2wbw1nb6jqd57qddj))
- Structured outputs can also be used with vision models. For example, the following code uses `llama3.2-vision` to describe the following image and returns a structured output: ([View Highlight](https://read.readwise.io/read/01jeewfyw5n70zxw71vcnq8acv))
- For reliable use of structured outputs, consider to:
  • Use Pydantic (Python) or Zod (JavaScript) to define the schema for the response
  • Add “return as JSON” to the prompt to help the model understand the request
  • Set the temperature to 0 for more deterministic output ([View Highlight](https://read.readwise.io/read/01jeewh6cw7yzg6e95hn1gqkas))
