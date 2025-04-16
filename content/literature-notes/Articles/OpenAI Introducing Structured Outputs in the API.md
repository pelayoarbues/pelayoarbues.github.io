---
author: [[Simon Willison]]
title: "OpenAI: Introducing Structured Outputs in the API"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: OpenAI: Introducing Structured Outputs in the API
- URL: https://simonwillison.net/2024/Aug/6/openai-structured-outputs/#atom-everything

## Highlights
- . OpenAI have offered structured outputs for a while now: you could specify `"response_format": {"type": "json_object"}}` to request a valid JSON object, or you could use the [function calling](https://platform.openai.com/docs/guides/function-calling) mechanism to request responses that match a specific schema. ([View Highlight](https://read.readwise.io/read/01j4mxxar1bemyp31f1rpryrjm))
- Neither of these modes were guaranteed to return valid JSON! In my experience they usually did, but there was always a chance that something could go wrong and the returned code could not match the schema, or even not be valid JSON at all. ([View Highlight](https://read.readwise.io/read/01j4mxxccw5zxcwtk33f64vbdc))
- Outside of OpenAI techniques like [jsonformer](https://github.com/1rgs/jsonformer) and [llama.cpp grammars](https://til.simonwillison.net/llms/llama-cpp-python-grammars) could provide those guarantees against open weights models, by interacting directly with the next-token logic to ensure that only tokens that matched the required schema were selected. ([View Highlight](https://read.readwise.io/read/01j4mxxefzt8wkk9a3hwm08jmz))
- OpenAI credit that work in this announcement, so they're presumably using the same trick. They've provided two new ways to guarantee valid outputs. The first a new `"strict": true` option for function definitions. The second is a new feature: a `"type": "json_schema"` option for the `"response_format"` field which lets you then pass a JSON schema (and another `"strict": true` flag) to specify your required output. ([View Highlight](https://read.readwise.io/read/01j4mxxxcp7tpek8kxfg1f0y6s))
- I've been using the existing `"tools"` mechanism for exactly this already in my [datasette-extract](https://github.com/datasette/datasette-extract) plugin - defining a function that I have no intention of executing just to get structured data out of the API in the shape that I want. ([View Highlight](https://read.readwise.io/read/01j4mxydp215ek0567x9pwx7ec))
- The official `openai-python` library also [added structured output support](https://github.com/openai/openai-python/commit/bf1ca86cf392eb0ffed1e146937c5d73d8a568f0) this morning, based on Pydantic and looking very similar to the [Instructor library](https://python.useinstructor.com/) (also credited as providing inspiration in their announcement). ([View Highlight](https://read.readwise.io/read/01j4mxz12qgrpwvvf08r6rv4ea))
- By switching to the new `gpt-4o-2024-08-06`, developers save 50% on inputs ($2.50/1M input tokens) and 33% on outputs ($10.00/1M output tokens) compared to `gpt-4o-2024-05-13`. ([View Highlight](https://read.readwise.io/read/01j4mxzqc1q292ertwz99662ec))
- This is particularly notable because [GPT-4o-mini](https://simonwillison.net/2024/Jul/18/gpt-4o-mini/), the much cheaper alternative to GPT-4o, prices image inputs at the *same price* as GPT-4o. This new model appears to cut that by half, making `gpt-4o-2024-08-06` the new cheapest model from OpenAI for handling image inputs. ([View Highlight](https://read.readwise.io/read/01j4my04mh7ww4f49vsc72bw02))
