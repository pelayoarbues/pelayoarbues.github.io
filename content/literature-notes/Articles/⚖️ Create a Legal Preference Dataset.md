---
author: [[huggingface.co]]
title: '⚖️ Create a Legal Preference Dataset'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/front/thumbnails/learn/cookbook.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: ⚖️ Create a Legal Preference Dataset
- URL: https://huggingface.co/learn/cookbook/pipeline_notus_instructions_preferences_legal

## Highlights
- In this tutorial, you will learn how to use the Notus model on the HF Inference Endpoints to create a legal preference dataset based on Retrieval Augmented Generation instructions from the European AI Act. A full end-to-end example of how to use distilabel to leverage LLMs! ([View Highlight](https://read.readwise.io/read/01j047sbyxfcctwm7k2ja5b5ec))
- [distilabel](https://github.com/argilla-io/distilabel) is an AI Feedback (AIF) framework that can generate and label datasets using LLMs and can be used for many different use cases. Implemented with robustness, efficiency, and scalability in mind, it allows anyone to build their synthetic datasets that can be used in many different scenarios. ([View Highlight](https://read.readwise.io/read/01j047smsqv1n8vaf6kvz7vmpw))
- To generate the instruction dataset, we will use the [HF Inference Endpoints](https://huggingface.co/docs/inference-endpoints/en/index) integrated with distilabel. These Inference Endpoints are provided by Hugging Face and allow to easily deploy and run transformers, diffusers or any available model from the Hub on a dedicated and autoscaling infrastructure. You can find more information on how to create your first endpoint [here](https://huggingface.co/docs/inference-endpoints/guides/create_endpoint). ([View Highlight](https://read.readwise.io/read/01j047ss97rg5ptf0wammq2ej3))
- The LLM model that we will fine-tune for this is [Notus 7B](https://argilla.io/blog/notus7b/), a fine-tuned version of Zephyr 7B that uses Direct Preference Optimization (DPO) and AIF techniques to outperform its foundation model in several benchmarks and is completely open-source.
  This tutorial includes the following steps:
  • Defining a custom generating task for a `distilabel` pipeline.
  • Creating a RAG pipeline using Haystack for the EU AI Act.
  • Generating an instruction dataset with `SelfInstructTask`.
  • Generating a preference dataset using an `UltraFeedback` text quality task. ([View Highlight](https://read.readwise.io/read/01j047szybxvjsraja7v96kwwa))
- Inference endpoints are a solution, managed by Hugging Face, to easily deploy any Transformer-like model. They are built from models on the Hugging Face Hub. Inference endpoints are handy for making inference on LLMs without the hassle of trying to run the models locally. In this tutorial, we will use inference endpoints to generate text using our Notus model, as part of the `distilabel` workflow. The endpoint of choice has a [Notus 7B instance](https://ui.endpoints.huggingface.co/argilla/endpoints/aws-notus-7b-v1-4052) running. ([View Highlight](https://read.readwise.io/read/01j047tj93ydzfk9n3sze3ceqh))
- To kickstart this tutorial, let’s see how to set up an endpoint for our Notus model. It’s not part of the end-to-end example we’ll see later, but an example of how to connect to a Hugging Face endpoint and a test of the `distilabel` pipeline.
  Let’s dive into this quick example of how to use an inference endpoint. We have prepared an easy `TextGenerationTask` to ask questions to the model, in a very similar way as we talk with the LLMs using chatbots. First, we define a class for the question-answering task, with functions showing `distilabel` how the model should generate the prompts, parse the input and the output, etc. ([View Highlight](https://read.readwise.io/read/01j047ts0tapk5pqk7rnp0cwyz))
- For this end-to-end example, we would like to create an expert model capable of answering question and filling up information about the new AI Act promoted by the European Union, which is the first regulation on artificial intelligence. As part of its digital strategy, the EU wants to regulate artificial AI to ensure better conditions for the development and use of this innovative technology. This act is a regulatory framework for AI, with different risk levels meaning more or less regulation. They are the world’s first rules on AI.
  This RAG pipeline that we want to create downloads the PDF file, converts it to plain text and preprocess it, creating batches that we can feed `distilabel` to start creating instructions from it. Let’s see this first part of the pipeline and get the input data. Note that this RAG part of the pipeline is not based on an active pipeline based queries or semantic properties, but a more brute-force approach in which we download the PDF and preprocess its contents. ([View Highlight](https://read.readwise.io/read/01j047vapq0p2dk3g62zpf8r56))
- Once we have it in our working directory, we can use Haystack’s Converter and Pipeline features to extract the textual data, clean it and divide it in different batches. Afterwards, these batches will be used to start creating synthetic instructions. ([View Highlight](https://read.readwise.io/read/01j047vqm3ydc2mj9g599t3rct))
- Generating instructions with SelfInstructTask
  With our Inference Endpoint up and running, we should be able to generate instructions with distilabel. These instructions, made by the LLM through our endpoint, will form an instruction dataset, with instructions created from the data we just extracted.
  For this example, we are using a subset of 50 batches generated in the section above, to be gentle on performance.
  Copied ([View Highlight](https://read.readwise.io/read/01j047w3d3h491x3cwnk99v14z))
- With the `SelfInstructTask` class we can generate a Self-Instruct specitification for building the prompts, as done in the [Self-Instruct paper](https://arxiv.org/abs/2212.10560). `distilabel` will start from human-made input, in this case, the batches we created from the AI Act pdf, and it will generate instructions based on it. These instructions can then be reviewed using Argilla to keep the best ones.
  An application description can be passed as a parameter to specify the behaviour of the model; we want a model capable of answering our questions about the AI Act. ([View Highlight](https://read.readwise.io/read/01j047w885ggxak2r1a18kg8xc))
- The pipeline has succesfully generated instructions given the topics and the behavior passed as input. Let’s gather all those instructions and see how they look. ([View Highlight](https://read.readwise.io/read/01j047we3jtfks4ynrwmndmj0k))
- These initial instructions create our instruction dataset. Following the human-in-the-loop approach, we should push the instructions to Argilla to visualize them and be able to rank them in terms of quality. Those annotations are essential to make quality data, ensuring a better performance of the final model. Nevertheless, this step is optional. ([View Highlight](https://read.readwise.io/read/01j047wm0481rxv28vfbj9gsg5))
- For each input, i.e., each batch of the AI Act pdf file, we have a generator prompt, with general guidelines on how to behave, as well as the application description parameter. 4 instructions per input have been generated.
  Now it’s the perfect time to upload the instruction dataset to Argilla, review it and manually annotate it. ([View Highlight](https://read.readwise.io/read/01j047x3dqad86r3nmvfpx83gh))
- Once we have our instruction dataset, we are going to create a preference dataset through the UltraFeedback text quality task. This is a type of task used in NLP used to evaluate the quality of text generated; our goal is to provide detailed feedback on the quality of the generated text, beyond a binary label.
  Our `pipeline()` method allows us to create a `Pipeline` instance with the provided LLMs for a given task, which is useful whenever you want to use a pre-defined or custom `Pipeline` for a given task. We will specify our task and subtask, the generator we want to use (in this case, one based in a Text Generator Task) and our OpenAI API key.
  > Note that not using a OpenAI model to retrieve this feedback is also possible. However, the performance will suffer and the quality of the feedback will be lower.
  Copied ([View Highlight](https://read.readwise.io/read/01j047yafp7vbanz8qa1sref9x))
