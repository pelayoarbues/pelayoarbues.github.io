---
author: "[[https://github.com/pchunduri6/]]"
title: 'pchunduri6/rag-demystified: An LLM-powered advanced RAG pipeline built from scratch'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://opengraph.githubassets.com/96cf6c349f72083419c81d69ee3a966d4b4825c2d35bbbb267c1c928a7f327da/pchunduri6/rag-demystified)

## Metadata
- Author: [[https://github.com/pchunduri6/]]
- Full Title: pchunduri6/rag-demystified: An LLM-powered advanced RAG pipeline built from scratch
- URL: https://github.com/pchunduri6/rag-demystified

## Highlights
- Frameworks such as [LlamaIndex](https://github.com/run-llama/llama_index) and [Haystack](https://github.com/deepset-ai/haystack) have made significant progress in making RAG pipelines easy to use. While these frameworks provide excellent abstractions for building advanced RAG pipelines, they do so at the cost of transparency. From a user perspective, it's not readily apparent what's going on under the hood, particularly when errors or inconsistencies arise. ([View Highlight](https://read.readwise.io/read/01hhcxvjhgcb9byxg8k3tveqmp))
- Retrieval-augmented generation (RAG) is a cutting-edge AI paradigm for LLM-based question answering. A RAG pipeline typically contains:
  1. **Data Warehouse** - A collection of data sources (e.g., documents, tables etc.) that contain information relevant to the question answering task.
  2. **Vector Retrieval** - Given a question, find the top K most similar data chunks to the question. This is done using a vector store (e.g., [Faiss](https://faiss.ai/index.html)).
  3. **Response Generation** - Given the top K most similar data chunks, generate a response using a large language model (e.g. GPT-4).
  RAG provides two key advantages over traditional LLM-based question answering:
  1. **Up-to-date information** - The data warehouse can be updated in real-time, so the information is always up-to-date.
  2. **Source tracking** - RAG provides clear traceability, enabling users to identify the sources of information, which is crucial for accuracy verification and mitigating LLM hallucinations. ([View Highlight](https://read.readwise.io/read/01hhcxw6dcwsvfvq03bsjxnvjv))
- To enable answering more complex questions, recent AI frameworks like LlamaIndex have introduced more advanced abstractions such as the [Sub-question Query Engine](https://gpt-index.readthedocs.io/en/latest/examples/query_engine/sub_question_query_engine.html).
  In this application, we'll demystify sophisticated RAG pipelines by using the Sub-question Query Engine as an example. We'll examine the inner workings of the Sub-question Query Engine and simplify the abstractions to their core components. We'll also identify some challenges associated with advanced RAG pipelines. ([View Highlight](https://read.readwise.io/read/01hhcxwsadx63cbkdyepves4r3))
- Our key insight is that each component in an advanced RAG pipeline is powered by a single LLM call. The entire pipeline is a series of LLM calls with carefully crafted prompt templates. These prompt templates are the secret sauce that enable advanced RAG pipelines to perform complex tasks.
  In fact, any advanced RAG pipeline can be broken down into a series of individual LLM calls that follow a universal input pattern:
  [![equation](https://github.com/pchunduri6/rag-demystified/raw/main/images/equation.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/equation.png)
  where:
  • **Prompt Template** - A curated prompt template for the specific task (e.g., sub-question generation, summarization)
  • **Context** - The context to use to perform the task (e.g. top-K most similar data chunks)
  • **Question** - The question to answer ([View Highlight](https://read.readwise.io/read/01hhcxy7dxxn9vefbv4v9h9661))
- The Sub-question Query Engine has to perform three tasks:
  1. **Sub-question generation** - Given a complex question, break it down into a set of sub-questions, while identifying the appropriate data source and retrieval function for each sub-question.
  2. **Vector/Summary Retrieval** - For each sub-question, use the chosen retrieval function over the corresponding data source to retrieve the relevant information.
  3. **Response Aggregation** - Aggregate the responses from the sub-questions into a final response ([View Highlight](https://read.readwise.io/read/01hhcxyksaksxjfynwybn80ja1))
- 1: Sub-question Generation
  Our goal is to break down a complex question into a set of sub-questions, while identifying the appropriate data source and retrieval function for each sub-question. For example, the question *"Which city has the highest population?"* is broken down into five sub-questions, one for each city, of the form *"What is the population of {city}?".* The data source for each sub-question has to be the corresponding city's wiki, and the retrieval function has to be vector retrieval.
  At first glance, this seems like a daunting task. Specifically, we need to answer the following questions:
  1. **How do we know which sub-questions to generate?**
  2. **How do we know which data source to use for each sub-question?**
  3. **How do we know which retrieval function to use for each sub-question?**
  Remarkably, the answer to all three questions is the same - a single LLM call! The entire sub-question query engine is powered by a single LLM call with a carefully crafted prompt template. Let's call this template the **Sub-question Prompt Template**.
  -- Sub-question Prompt Template --
  """
  You are an AI assistant that specializes in breaking down complex questions into simpler, manageable sub-questions.
  When presented with a complex user question, your role is to generate a list of sub-questions that, when answered, will comprehensively address the original question.
  You have at your disposal a pre-defined set of functions and data sources to utilize in answering each sub-question.
  If a user question is straightforward, your task is to return the original question, identifying the appropriate function and data source to use for its solution.
  Please remember that you are limited to the provided functions and data sources, and that each sub-question should be a full question that can be answered using a single function and a single data source.
  """ ([View Highlight](https://read.readwise.io/read/01hhcxz7dqvm83py8q6yss9n7m))
- The context for the LLM call is the names of the data sources and the functions available to the system. The question is the user question. The LLM outputs a list of sub-questions, each with a function and a data source.
  [![task_1_table](https://github.com/pchunduri6/rag-demystified/raw/main/images/task_1_table.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/task_1_table.png) ([View Highlight](https://read.readwise.io/read/01hhcxzhn7b8d8gdgcgj7y1azh))
- Vector/Summary Retrieval
  For each sub-question, we use the chosen retrieval function over the corresponding data source to retrieve the relevant information. For example, for the sub-question *"What is the population of Chicago?"*, we use vector retrieval over the Chicago data source. Similarly, for the sub-question *"Give me a summary of the positive aspects of Atlanta."*, we use summary retrieval over the Atlanta data source.
  For both retrieval methods, we use the same LLM prompt template. In fact, we find that the popular **RAG Prompt** from [LangchainHub](https://smith.langchain.com/hub) works great out-of-the-box for this step.
  -- RAG Prompt Template --
  """
  You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise.
  Question: {question}
  Context: {context}
  Answer:
  Both the retrieval methods only differ in the context used for the LLM call. For vector retrieval, we use the top K most similar data chunks to the sub-question as context. For summary retrieval, we use the entire data source as context.
  [![task_2_table](https://github.com/pchunduri6/rag-demystified/raw/main/images/task_2_table.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/task_2_table.png)
  [](https://github.com/pchunduri6/rag-demystified#task-3-response-aggregation) ([View Highlight](https://read.readwise.io/read/01hhcy095thpntg52wa4e5ajn6))
- Task 3: Response Aggregation
  This is the final step that aggregates the responses from the sub-questions into a final response. For example, for the question *"Which city has the highest population?"*, the sub-questions retrieve the population of each city and then response aggregation finds and returns the city with the highest population. The **RAG Prompt** works great for this step as well.
  The context for the LLM call is the list of responses from the sub-questions. The question is the original user question and the LLM outputs a final response.
  [![task_3_table](https://github.com/pchunduri6/rag-demystified/raw/main/images/task_3_table.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/task_3_table.png) ([View Highlight](https://read.readwise.io/read/01hhcy0h72k4ggf51h44ry2red))
- Putting it all together
  After unraveling the layers of abstraction, we uncovered the secret ingredient powering the sub-question query engine - 4 types of LLM calls each with different prompt template, context, and a question. This fits the universal input pattern that we identified earlier perfectly, and is a far cry from the complex abstractions that we started with. To summarize: [![equation](https://github.com/pchunduri6/rag-demystified/raw/main/images/equation.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/equation.png) [![call_types_table](https://github.com/pchunduri6/rag-demystified/raw/main/images/call_types_table.png)](https://github.com/pchunduri6/rag-demystified/blob/main/images/call_types_table.png) ([View Highlight](https://read.readwise.io/read/01hhcy0rp718qg94bevm3m9b43))
- 1. **Question sensitivity** - The biggest challenge that we observed with these systems is the question sensitivity. The LLMs are extremely sensitive to the user question, and the pipeline fails unexpectedly for several user questions. Here are a few example failure cases that we encountered:
  • **Incorrect sub-questions** - The LLM sometimes generates incorrect sub-questions. For example, *"Which city has the highest number of tech companies?"* is broken down into *"What are the tech companies in each city?"* 5 times (once for each city) instead of *"What is the number of tech companies in Toronto?"*, *"What is the number of tech companies in Chicago?"*, etc.
  • **Incorrect retrieval function** - *"Summarize the positive aspects of Atlanta and Toronto."* results in using the vector retrieval function instead of the summary retrieval method.
  We had to put in significant effort into prompt engineering to get the pipeline to work for each question. This is a significant challenge for building robust systems.
  To verify this behavior, we [implemented the example](https://github.com/pchunduri6/rag-demystified/blob/main/llama_index_baseline.py) using the LlamaIndex Sub-question query engine. Consistent with our observations, the system often generates the wrong sub-questions and also uses the wrong retrieval function for the sub-questions, ([View Highlight](https://read.readwise.io/read/01hhcy29kvh2rswrbd3j2qgtas))
- **Cost** - The second challenge is the cost dynamics of advanced RAG pipelines. The issue is two-fold:
  • **Cost sensitivity** - The final cost of the question is dependent on the number of sub-questions generated, the retrieval function used, and the number of data sources queried. Since the LLMs are sensitive to the prompt, the cost of the question can vary significantly depending on the question and the LLM output. For example, the incorrect model choice in the LlamaIndex baseline example above (`summary_tool`) results in a 3x higher cost compared to the `vector_tool` while also generating an incorrect response.
  • **Cost estimation** - Advanced abstractions in RAG frameworks obscure the estimated cost of the question. Setting up a cost monitoring system is challenging since the cost of the question is dependent on the LLM output. ([View Highlight](https://read.readwise.io/read/01hhcy2c7fmzqtpm2w7djwnp45))
