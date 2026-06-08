---
author: "[[Amazon Web Services]]"
title: 'Amazon Bedrock Introduces New Advanced Prompt Optimization and Migration Tool'
date: "2026-05-25"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2026/05/14/Bedrock-Advanced-Prompt-Optimization.png)

## Metadata
- Author: [[Amazon Web Services]]
- Full Title: Amazon Bedrock Introduces New Advanced Prompt Optimization and Migration Tool
- URL: https://aws.amazon.com/blogs/aws/amazon-bedrock-introduces-new-advanced-prompt-optimization-and-migration-tool/

## Highlights
- Today, we’re announcing **Amazon Bedrock Advanced Prompt Optimization**, a new tool that you can use to optimize your prompts for any model on [Amazon Bedrock](https://aws.amazon.com/bedrock), while comparing your original prompts to optimized prompts across up to 5 models simultaneously. With the new prompt optimization, you can migrate to a new model or improve performance from your current model. You can test them to make sure they see no regressions on known use cases and also improve on underperforming tasks. ([View Highlight](https://read.readwise.io/read/01ksfy6fp38yvmha6n4dphyjaf))
- ![](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2026/05/14/2026-bedrock-advanced-prompt-optimization-process-3.png)
  The new prompt optimizer takes in your prompt template, example user inputs for the variable values, ground truth answers, and an evaluation metric to use as a guide. You can even use this with multimodal user inputs – it supports `png`, `jpg`, and `pdf` as inputs to your prompt templates so you can optimize prompts for tasks like document and image analysis.
  You can also provide an [AWS Lambda](https://aws.amazon.com/lambda/?trk=d8ec3b19-0f37-4f8c-8c12-189f913e205c&sc_channel=el) function, LLM-as-a-judge rubric, or a short natural language description to guide the optimization. The prompt optimizer works in a metric-driven feedback loop to optimize the prompt and resulting model responses for the evaluation metric, and outputs the original and final prompt templates with evaluation scores, cost estimates, and latency. ([View Highlight](https://read.readwise.io/read/01ksfya7drsa2xpqzr3hs30tr9))
- To get started with the new prompt optimization, choose **Create prompt optimization** on the **Advanced Prompt Optimization** page of [Amazon Bedrock console](https://console.aws.amazon.com/bedrock/?trk=d8ec3b19-0f37-4f8c-8c12-189f913e205c&sc_channel=el).
  ![](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2026/05/13/2026-bedrock-advanced-prompt-optimization-1-console.jpg)
  Pick up to 5 inference models for which to optimize your prompts. You can use this if you are migrating to a new model or just want to get better performance on their current model. If you’re changing models, you can select your current model as a baseline and up to 4 other models. If you aren’t changing models, then just select your current model to see before and after optimization. ([View Highlight](https://read.readwise.io/read/01ksfyacfk34p1mv8h94f5m07j))
- As you noted, you can evaluate prompt quality in three ways: a Lambda function with your own Python scoring logic, LLM-as-a-Judge with a custom rubric, or natural-language steering criteria. You can just choose one per prompt template, but can do multiple prompt templates in a job, so they can use a different method for each prompt template if they want.
  • **Lambda function** — If you have a concrete metric (accuracy, F1, execution accuracy, structured-JSON match, etc.), you can deploy a Lambda function containing your custom scoring logic and configure `evaluationMetricS3Uri` field of the prompt template. Inside the Lambda, the core is a compute_score implementation that programmatically compares model outputs against reference responses.
  • **LLM-as-a-Judge** — If your task is open-ended (summarization, generation, reasoning explanations) and you want a rubric-based score, you can configure the S3 config file in the `customLLMJConfig` field of the prompt template to define named metrics with structured instructions and a rating scale. A Bedrock judge model evaluates each prompt-response pair and returns a score with reasoning. The default model is Claude Sonnet 4.6 and you can also select your own from a list of judge models.
  • **Steering criteria** — If you know the qualities you want (brand voice, format, safety constraints) but don’t want to author a full judge prompt, you can define criteria in the input dataset through the `steeringCriteria` array of the prompt template. Instead of structured metrics with rating scales, you provide free-form natural language criteria that the LLM judge evaluates holistically. If you use this option, then a default LLM-as-a-judge prompt will evaluate the responses and incorporate your steering criteria into the judge prompt. The judge model in this case is Anthropic Claude Sonnet 4.6. ([View Highlight](https://read.readwise.io/read/01ksfyasza60k7jezq6dav91f1))
