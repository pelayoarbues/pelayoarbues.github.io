---
author: [[IVAN ILIN]]
title: "Advanced RAG Techniques: An Illustrated Overview"
date: 2024-01-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*1fgXZ3jvzFYVY0tU_f53cw.jpeg)

## Metadata
- Author: [[IVAN ILIN]]
- Full Title: Advanced RAG Techniques: An Illustrated Overview
- URL: https://pub.towardsai.net/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6

## Highlights
- **Basically RAG is Search + LLM prompting**, where you ask the model to answer the query provided the information found with the search algorithm as a context. Both the query and the retrieved context are injected into the prompt that is sent to the LLM. ([View Highlight](https://read.readwise.io/read/01hm8q1j5fevjwh0j3wh5r3vs1))
- Even the **vector search** area got pumped by that hype although embedding based search engines were made with [faiss](https://faiss.ai) back in 2019. Vector database startups like [chroma](https://github.com/chroma-core/chroma), [weavaite.io](https://weaviate.io) and [pinecone](https://www.pinecone.io) have been built upon existing open source search indices — mainly faiss and [nmslib](https://github.com/nmslib/nmslib) — and added an extra storage for the input texts plus some other tooling lately. ([View Highlight](https://read.readwise.io/read/01hm8q1yemehy921bef4hg0rzc))
- ![](https://miro.medium.com/v2/resize:fit:700/0*Ko_ihY8ecAukf2g1.png) ([View Highlight](https://read.readwise.io/read/01hm8q3jjxgtsry2sa9by1eqs1))
- **Vanilla RAG case** in brief looks the following way: you split your texts into chunks, then you embed these chunks into vectors with some Transformer Encoder model, you put all those vectors into an index and finally you create a prompt for an LLM that tells the model to answers user’s query given the context we found on the search step. 
  In the runtime we vectorise user’s query with the same Encoder model and then execute search of this query vector against the index, find the top-k results, retrieve the corresponding text chunks from our database and feed them into the LLM prompt as context. ([View Highlight](https://read.readwise.io/read/01hm8q3yv8pz24x8x225yq19xx))
- ![](https://miro.medium.com/v2/resize:fit:1000/0*Gr_JqzdpHu7enWG9.png) ([View Highlight](https://read.readwise.io/read/01hm8q5m28cdfdz3zrvq946hgr))
- 1. Chunking & vectorisation
  First of all we want to create an index of vectors, representing our document contents and then in the runtime to search for the least cosine distance between all these vectors and the query vector which corresponds to the closest semantic meaning. ([View Highlight](https://read.readwise.io/read/01hm8q66cpkh816g6heqeg9ck6))
- **1.1 Chunking** 
  Transformer models have fixed input sequence length and even if the input context window is large, the vector of a sentence or a few better represents their semantic meaning than a vector averaged over a few pages of text (depends on the model too, but true in general), so **chunk your data** — split the initial documents in chunks of some size without loosing their meaning (splitting your text in sentences or in paragraphs, not cutting a single sentence in two parts). ([View Highlight](https://read.readwise.io/read/01hm8q6nfmbv61k41pp2bbarcw))
- **The size of the chunk is a parameter to think of** — it depends on the embedding model you use and its capacity in tokens, standard transformer Encoder models like BERT-based Sentence Transformers take 512 tokens at most, OpenAI ada-002 is capable of handling longer sequences like 8191 tokens, but **the compromise here is enough context for the LLM to reason upon vs specific enough text embedding in order to efficiently execute search upon** ([View Highlight](https://read.readwise.io/read/01hm8q7gr1vfx1yvwx150sq9qd))
## New highlights added January 16, 2024 at 10:47 AM
- The next step is to choose a **model to embed our chunks** — there are quite some options, I go with the **search optimised models** like [bge-large](https://huggingface.co/BAAI/bge-large-en-v1.5) or [E5](https://huggingface.co/intfloat/multilingual-e5-large) embeddings family — just check the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) for the latest updates.
  For an end2end implementation of the chunking & vectorisation step check an [example](https://docs.llamaindex.ai/en/latest/module_guides/loading/ingestion_pipeline/root.html#) of a full data ingestion pipeline in LlamaIndex. ([View Highlight](https://read.readwise.io/read/01hm8qc0db13qsx2cy6783gx3x))
- ![](https://miro.medium.com/v2/resize:fit:700/0*fCxtcFf8gIgnaJfE.png)
  In this scheme and everywhere further in the text I omit the Encoder block and send our query straight to the index for the scheme simplicity. The query always gets vectorised first of course. Same with the top k cunks — index retrieves top k vectors, not chunks, but I replace them with chunks as fetching them is a trivial step.
  **The crucial part of the RAG pipeline is the search index**, storing your vectorised content we got in the previous step. The most naive implementation uses a flat index — a brute force distance calculation between the query vector and all the chunks’ vectors. ([View Highlight](https://read.readwise.io/read/01hm8qfvj8epbef705amp9vhhx))
- **A proper search index, optimised for efficient retrieval** on 10000+ elements scales **is a vector index** like [faiss](https://faiss.ai), [nmslib](https://github.com/nmslib/nmslib) or [annoy](https://github.com/spotify/annoy), using some Approximate Nearest Neighbours implementation like clustring, trees or [HNSW](https://www.pinecone.io/learn/series/faiss/hnsw/) algorithm.
  There are also managed solutions like OpenSearch or ElasticSearch and vector databases, taking care of the data ingestion pipeline described in step 1 under the hood, like [Pinecone](https://www.pinecone.io), [Weaviate](https://weaviate.io) or [Chroma](https://www.trychroma.com). ([View Highlight](https://read.readwise.io/read/01hm8qgbf20atd51aneq53t8rc))
- Depending on your index choice, data and search needs **you can also store metadata along with vectors** and then use **metadata filters** to search for information within some dates or sources for example.
  LlamaIndex supports lots of [vector store indices](https://docs.llamaindex.ai/en/latest/community/integrations/vector_stores.html) but there are also other simpler index implementations supported like list index, tree index, and keyword table index — we’ll talk about the latter in the Fusion retrieval part. ([View Highlight](https://read.readwise.io/read/01hm8qgw17g6fvhjdbpn46p2e6))
- ![](https://miro.medium.com/v2/resize:fit:1000/0*nDwj0Jgpyk2qc_qJ.png) ([View Highlight](https://read.readwise.io/read/01hm8qj2h5vsxtk6j3q1f29q5g))
- In case you have many documents to retrieve from, you need to be able to efficiently search inside them, find relevant information and synthesise it in a single answer with references to the sources. An efficient way to do that in case of a large database is to **create two indices — one composed of summaries and the other one composed of document chunks**, and to search in two steps, first filtering out the relevant docs by summaries and then searching just inside this relevant group. ([View Highlight](https://read.readwise.io/read/01hm8qmwbz9fknp3p727r3ga5g))
- 2.3 Hypothetical Questions and HyDE
  Another approach is to ask an LLM to **generate a question for each chunk and embed these questions in vectors**, at runtime performing query search against this index of question vectors (replacing chunks vectors with questions vectors in our index) and then after retrieval route to original text chunks and send them as the context for the LLM to get an answer. 
  This approach improves search quality due to a **higher semantic similarity between query and hypothetical question** compared to what we’d have for an actual chunk.
  There is also the reversed logic apporach called [**HyDE**](http://boston.lti.cs.cmu.edu/luyug/HyDE/HyDE.pdf) — you ask an LLM to generate a hypothetical response given the query and then use its vector along with the query vector to enhance search quality. ([View Highlight](https://read.readwise.io/read/01hm8qnmwskrw6wctt0wt3asf5))
- 2.4 Context enrichment
  **The concept here is to retrieve smaller chunks for better search quality**, **but add up surrounding context for LLM to reason upon**. 
  There are two options — to expand context by sentences around the smaller retrieved chunk or to split documents recursively into a number of larger parent chunks, containing smaller child chunks. ([View Highlight](https://read.readwise.io/read/01hm8qpbgzzmae93xvm0c2d18z))
- [**2.4.1 Sentence Window Retrieval**](https://docs.llamaindex.ai/en/stable/examples/node_postprocessor/MetadataReplacementDemo.html) 
  In this scheme each sentence in a document is embedded separately which provides great accuracy of the query to context cosine distance search. 
  In order to better reason upon the found context after fetching the most relevant single sentence we extend the context window by *k* sentences before and after the retrieved sentence and then send this extended context to LLM.
  ![](https://miro.medium.com/v2/resize:fit:1000/0*JKZ9m_c6jyIKqCWu.png)
  The green part is the sentence embedding found while search in index, and the whole black + green paragraph is fed to the LLM to enlarge its context while reasoning upon the provided query ([View Highlight](https://read.readwise.io/read/01hm8qqfyeqqq45j05tfg46y3q))
- **2.4.2** [**Auto-merging Retriever**](https://docs.llamaindex.ai/en/latest/examples/retrievers/auto_merging_retriever.html) **(aka** [**Parent Document Retriever**](https://python.langchain.com/docs/modules/data_connection/retrievers/parent_document_retriever)**)**
  The idea here is pretty much similar to Sentence Window Retriever — to search for more granular pieces of information and then to extend the context window before feeding said context to an LLM for reasoning. Documents are split into smaller child chunks referring to larger parent chunks.
  ![](https://miro.medium.com/v2/resize:fit:1000/0*x4rMd50GP99OSDuo.png)
  Documents are splitted into an hierarchy of chunks and then the smallest leaf chunks are sent to index. At the retrieval time we retrieve k leaf chunks, and if there is n chunks referring to the same parent chunk, we replace them with this parent chunk and send it to LLM for answer generation.
  Fetch smaller chunks during retrieval first, then if more than *n* chunks in top *k* retrieved chunks are linked to the same parent node (larger chunk), we replace the context fed to the LLM by this parent node — works like auto merging a few retrieved chunks into a larger parent chunk, hence the method name. Just to note — search is performed just within the child nodes index. Check the LlamaIndex tutorial on [Recursive Retriever + Node References](https://docs.llamaindex.ai/en/stable/examples/retrievers/recursive_retriever_nodes.html) for a deeper dive. ([View Highlight](https://read.readwise.io/read/01hm8qrqr415b4fbz4fv51e63b))
- 2.5 Fusion retrieval or hybrid search
  A relatively old idea that you could **take the best from both worlds — keyword-based old school search** — sparse retrieval algorithms like [tf-idf](https://en.wikipedia.org/wiki/Tf–idf) or search industry standard [BM25](https://en.wikipedia.org/wiki/Okapi_BM25) — **and modern** semantic or **vector search and combine it in one retrieval result.** 
  The only trick here is to properly combine the retrieved results with different similarity scores — this problem is usually solved with the help of the [Reciprocal Rank Fusion](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf) algorithm, reranking the retrieved results for the final output.
  ![](https://miro.medium.com/v2/resize:fit:1000/0*0pQbhBEez7U-2knd.png) ([View Highlight](https://read.readwise.io/read/01hm8qy3m8h69bkea61mk4b95m))
- 3. Reranking & filtering
  So we got our retrieval results with any of the algorithms described above, now it is time to refine them through filtering, re-ranking or some transformation. In LlamaIndex there is a variety of available [**Postprocessors**](https://docs.llamaindex.ai/en/stable/module_guides/querying/node_postprocessors/root.html), **filtering out results based on similarity score, keywords, metadata or reranking them with other models** like an LLM, 
  [sentence-transformer cross-encoder](https://www.sbert.net/examples/applications/cross-encoder/README.html), Cohere reranking [endpoint](https://txt.cohere.com/rerank/) 
  or based on metadata like date recency — basically, all you could imagine.
  This is the final step before feeding our retrieved context to LLM in order to get the resulting answer. ([View Highlight](https://read.readwise.io/read/01hm8qz2g1b023tknnz4fyq7s5))
- 4. Query transformations
  **Query transformations are a family of techniques using an LLM as a reasoning engine to modify user input in order to improve retrieval quality.** There are different options to do that.
  ![](https://miro.medium.com/v2/resize:fit:700/0*DP6RrSA2OkcHnWIV.png)
  Query transformation principles illustrated
  **If the query is complex, LLM can decompose it into several sub queries.** For examle, if you ask: 
  *— “What framework has more stars on Github, Langchain or LlamaIndex?”, 
  *and it is unlikely that we’ll find a direct comparison in some text in our corpus so it makes sense to decompose this question in two sub-queries presupposing simpler and more concrete information retrieval: 
  *— “How many stars does Langchain have on Github?” 
  — “How many stars does Llamaindex have on Github?” 
  *They would be executed in parallel and then the retrieved context would be combined in a single prompt for LLM to synthesize a final answer to the initial query. Both libraries have this functional implemented — as a [Multi Query Retriever](https://python.langchain.com/docs/modules/data_connection/retrievers/MultiQueryRetriever?ref=blog.langchain.dev) in Langchain and as a [Sub Question Query Engine](https://docs.llamaindex.ai/en/stable/examples/query_engine/sub_question_query_engine.html) in Llamaindex.
  1. [**Step-back prompting**](https://arxiv.org/pdf/2310.06117.pdf?ref=blog.langchain.dev) **uses LLM to generate a more general query**, retrieving for which we obtain a more general or high-level context useful to ground the answer to our original query on. 
  Retrieval for the original query is also performed and both contexts are fed to the LLM on the final answer generation step. 
  Here is a LangChain [implementation](https://github.com/langchain-ai/langchain/blob/master/cookbook/stepback-qa.ipynb?ref=blog.langchain.dev).
  2. **Query re-writing uses LLM to reformulate initial query** in order to improve retrieval. Both [LangChain](https://github.com/langchain-ai/langchain/blob/master/cookbook/rewrite.ipynb?ref=blog.langchain.dev) and [LlamaIndex](https://llamahub.ai/l/llama_packs-fusion_retriever-query_rewrite) have implementations, tough a bit different, I find LlamaIndex solution being more powerful here. ([View Highlight](https://read.readwise.io/read/01hm8r1v222panmn02pf7xgyvb))
- **If we’ve used multiple sources to generate an answer** either due to the initial query complexity (we had to execute multiple subqueries and then to combine retrieved context in one answer), or because we found relevant context for a single query in various documents, the question rises if we could **accurately back reference our sources**.
  There are a couple of ways to do that:
  1. **Insert this referencing task into our prompt** and ask LLM to mention ids of the used sources.
  2. **Match the parts of generated response to the original text chunks** in our index — llamaindex offers an efficient [fuzzy matching based solution](https://github.com/run-llama/llama-hub/tree/main/llama_hub/llama_packs/fuzzy_citation) for this case. In case you have not heard of fuzzy matching, this is an [incredibly powerful string matching technique](https://towardsdatascience.com/fuzzy-matching-at-scale-84f2bfd0c536). ([View Highlight](https://read.readwise.io/read/01hm8r4x6rc1qawzzkkj8gh63t))
- 5. [Chat Engine](https://docs.llamaindex.ai/en/stable/module_guides/deploying/chat_engines/root.html)
  The next big thing about building a nice RAG system that can work more than once for a single query is the **chat logic, taking into account the dialogue context**, same as in the classic chat bots in the pre-LLM era. 
  This is needed to support follow up questions, anaphora, or arbitrary user commands relating to the previous dialogue context. It is solved by **query compression technique, taking chat context into account** along with the user query.
  As always, there are several approaches to said context compression — 
  a popular and relatively simple [ContextChatEngine](https://docs.llamaindex.ai/en/stable/examples/chat_engine/chat_engine_context.html), first retrieving context relevant to user’s query and then sending it to LLM along with chat history from the *memory* buffer for LLM to be aware of the previous context while generating the next answer.
  A bit more sophisticated case is [CondensePlusContextMode](https://docs.llamaindex.ai/en/stable/examples/chat_engine/chat_engine_condense_plus_context.html) — there in each interaction the chat history and last message are condensed into a new query, then this query goes to the index and the retrieved context is passed to the LLM along with the original user message to generate an answer.
  It’s important to note that there is also support for [OpenAI agents based Chat Engine](https://docs.llamaindex.ai/en/stable/examples/chat_engine/chat_engine_openai.html) in LlamaIndex providing a more flexible chat mode and Langchain also [supports](https://python.langchain.com/docs/modules/agents/agent_types/openai_multi_functions_agent) OpenAI functional API. ([View Highlight](https://read.readwise.io/read/01hm8r6rq2swv1hhzeyb22dzta))
- ![](https://miro.medium.com/v2/resize:fit:700/0*9cxhMMkUf8veRnRB.png)
  An illustration of different Ch ([View Highlight](https://read.readwise.io/read/01hm8r7053tbcz3rwwd48zg24q))
- 6. Query Routing
  **Query routing is the step of LLM-powered decision making upon what to do next given the user query** — the options usually are to summarise, to perform search against some data index or to try a number of different routes and then to synthesise their output in a single answer.
  Query routers are also used to select an index, or, broader, data store, where to send user query — either you have multiple sources of data, for example, a classic vector store and a graph database or a relational DB, or you have an hierarchy of indices — for a multi-document storage a pretty classic case would be an index of summaries and another index of document chunks vectors for example.
  **Defining the query router includes setting up the choices it can make.** 
  The selection of a routing option is performed with an LLM call, returning its result in a predefined format, used to route the query to the given index, or, if we are taking of the agnatic behaviour, to sub-chains or even other agents as shown in the **Multi documents agent scheme** below.
  Both [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/querying/router/root.html) and [LangChain](https://python.langchain.com/docs/expression_language/how_to/routing?ref=blog.langchain.dev) have support for query routers. ([View Highlight](https://read.readwise.io/read/01hm8r7ffvg7wqhvq0tjphc9k6))
- Agents (supported both by [Langchain](https://python.langchain.com/docs/modules/agents/) and [LlamaIndex](https://docs.llamaindex.ai/en/latest/use_cases/agents.html#)) have been around almost since the first LLM API has been released — **the idea was to provide an LLM, capable of reasoning, with a set of tools and a task to be completed**. ([View Highlight](https://read.readwise.io/read/01hm8r896p4zqb40zvqqtw4wex))
- [**OpenAI Assistants**](https://platform.openai.com/docs/assistants/overview) basically have implemented a lot of tools needed around an LLM that we previously had in open source — a chat history, a knowledge storage, a document uploading interface and, maybe most important, [**function calling API**](https://platform.openai.com/docs/assistants/tools/function-calling). This latter provides capabilities to **convert natural language into API calls to external tools or database queries.**
  In LlamaIndex there is an [OpenAIAgent](https://docs.llamaindex.ai/en/stable/examples/agent/openai_agent.html) class marrying this advanced logic with the ChatEngine and QueryEngine classes, providing knowledge-based and context aware chatting along with the ability of multiple OpenAI functions calls in one conversation turn, which really brings the smart agentic behaviour. ([View Highlight](https://read.readwise.io/read/01hm8r99a41ads3yzq61sdthwk))
- Let’s take a look at the [**Multi-Document Agents**](https://docs.llamaindex.ai/en/stable/examples/agent/multi_document_agents.html) **scheme** — a pretty sophisticated setting, involving initialisation of an **agent** ([OpenAIAgent](https://docs.llamaindex.ai/en/stable/examples/agent/openai_agent.html)) **upon each document**, capable of doc summarisation and the classic QA mechanics, **and a top agent**, responsible for queries routing to doc agents and for the final answer synthesis.
  Each document agent has two tools — a vector store index and a summary index, and based on the routed query it decides which one to use. 
  And for the top agent, all document agents are tools respectfully. ([View Highlight](https://read.readwise.io/read/01hm8rajq0k071n195dm71ttz6))
- This scheme illustrates an advanced RAG architecture with a lot of routing decisions made by each involved agent. **The benefit of such approach is the ability to compare different solutions or entities, described in different documents and their summaries** along with the classic single doc summarisation and QA mechanics — this basically covers the most frequent chat-with-collection-of-docs usecases.
  ![](https://miro.medium.com/v2/resize:fit:700/0*FZp2J2NyHHBXPtii.png)
  A scheme illustrating multi document agents, involving both query routing and agentic behavior patterns.
  The drawback of such a complex scheme can be guessed from the picture — it’s a bit slow due to multiple back and forth iterations with the LLMs inside our agents. Just in case, an LLM call is always the longest operation in a RAG pipeline — search is optimised for speed by design. So for a large multi document storage I’d recommed to think of some simplifications to this scheme making it scalable. ([View Highlight](https://read.readwise.io/read/01hm8rb4h2k6ftj4mrw1kkcnwr))
- 8. Response synthesiser
  This is the final step of any RAG pipeline — generate an answer based on all the context we carefully retrieved and on the initial user query. 
  The simplest approach would be just to concatenate and feed all the fetched context (above some relevance threshold) along with the query to an LLM at once. 
  But, as always, there are other more sophisticated options involving multiple LLM calls to refine retrieved context and generate a better answer.
  **The main approaches to response synthesis are: 
  **1. **iteratively refine the answer** by sending retrieved context to LLM chunk by chunk2. **summarise the retrieved context** to fit into the prompt3. **generate multiple answers** based on different context chunks and then to concatenate or **summarise them**. 
  For more details please check the [Response synthesizer module docs](https://docs.llamaindex.ai/en/stable/module_guides/querying/response_synthesizers/root.html). ([View Highlight](https://read.readwise.io/read/01hm8rbkx5xwy4bxpkb9rsy8j7))
- Encoder and LLM fine-tuning
  This approach involves fine-tuning of some of the two DL models involved in our RAG pipeline — either the Transformer **Encoder, resposible for embeddings quality and thus context retrieval quality** or an **LLM, responsible for the best usage of the provided context to answer user query** — luckily, the latter is a good few shot learner.
  One big advantage nowadays is the availability of high-end LLMs like GPT-4 to generate high quality synthetic datasets. 
  But you should always be aware that taking an open-source model trained by professional research teams on carefully collected, cleaned and validated large datasets and making a quick tuning using small synthetic dataset might narrow down the model’s capabilities in general. ([View Highlight](https://read.readwise.io/read/01hm8rcj7nzhzr52g3md871mnq))
- Encoder fine-tuning
  I’ve also been a bit skeptical about the Encoder funetuning approach as the latest Transformer Encoders optimised for search are pretty efficient. 
  So I have tested the performance increase provided by finetuning of [bge-large-en-v1.5](https://huggingface.co/BAAI/bge-large-en-v1.5) (top 4 of the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) at the time of writing) in the [LlamaIndex notebook](https://docs.llamaindex.ai/en/stable/examples/finetuning/embeddings/finetune_embedding.html) setting, and it demonstrated a 2% retrieval quality increase. Nothing dramatic but it is nice to be aware of that option, especially if you have a narrow domain dataset you’re building RAG for. ([View Highlight](https://read.readwise.io/read/01hm8rd8f799axpt8nt6a9ss2z))
- Ranker fine-tuning
  **The other good old option is to have a cross-encoder for reranking your retrieved results** if you dont trust your base Encoder completely. 
  It works the following way — you pass the query and each of the top k retrieved text chunks to the cross-encoder, separated by a SEP token, and fine-tune it to output 1 for relevant chunks and 0 for non-relevant. 
  A good example of such tuning process could be found [here](https://docs.llamaindex.ai/en/latest/examples/finetuning/cross_encoder_finetuning/cross_encoder_finetuning.html#), the results say the pairwise score was improved by 4% by cross-encoder finetuning. ([View Highlight](https://read.readwise.io/read/01hm8rdknc2gds3sn7r4pv65cj))
## New highlights added January 17, 2024 at 3:18 PM
- This approach involves fine-tuning of some of the two DL models involved in our RAG pipeline — either the Transformer **Encoder, resposible for embeddings quality and thus context retrieval quality** or an **LLM, responsible for the best usage of the provided context to answer user query** — luckily, the latter is a good few shot learner. ([View Highlight](https://read.readwise.io/read/01hmbk1rj4fd0zbfk9c1qmv25x))
- I’ve also been a bit skeptical about the Encoder funetuning approach as the latest Transformer Encoders optimised for search are pretty efficient. 
  So I have tested the performance increase provided by finetuning of [bge-large-en-v1.5](https://huggingface.co/BAAI/bge-large-en-v1.5) (top 4 of the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) at the time of writing) in the [LlamaIndex notebook](https://docs.llamaindex.ai/en/stable/examples/finetuning/embeddings/finetune_embedding.html) setting, and it demonstrated a 2% retrieval quality increase. Nothing dramatic but it is nice to be aware of that option, especially if you have a narrow domain dataset you’re building RAG for. ([View Highlight](https://read.readwise.io/read/01hmbk1y269jm1bdeyec3f5ap6))
- **The other good old option is to have a cross-encoder for reranking your retrieved results** if you dont trust your base Encoder completely. 
  It works the following way — you pass the query and each of the top k retrieved text chunks to the cross-encoder, separated by a SEP token, and fine-tune it to output 1 for relevant chunks and 0 for non-relevant. 
  A good example of such tuning process could be found [here](https://docs.llamaindex.ai/en/latest/examples/finetuning/cross_encoder_finetuning/cross_encoder_finetuning.html#), the results say the pairwise score was improved by 4% by cross-encoder finetuning. ([View Highlight](https://read.readwise.io/read/01hmbk216jn03a0kp5e0z67bc6))
- A bit more sophisticated approach is demonstrated in the recent [paper](https://arxiv.org/pdf/2310.01352.pdf) **RA-DIT: Retrieval Augmented Dual Instruction Tuning** by Meta AI Research, **suggesting a technique to tune both the LLM and the Retriever** 
  (a Dual Encoder in the original paper) **on triplets of query, context and answer**. For the implementations details please refer to this [guide](https://docs.llamaindex.ai/en/stable/examples/finetuning/knowledge/finetune_retrieval_aug.html#fine-tuning-with-retrieval-augmentation). 
  This technique was used both to fine-tune OpenAI LLMs through the fine-tuning API and Llama2 open-source model (in the original paper), resulting in ~5% increase in knowledge-intense tasks metrics (compared to Llama2 65B with RAG) and a couple percent increase in common sense reasoning tasks. ([View Highlight](https://read.readwise.io/read/01hmbk271h7z74e5t21bz2vgtd))
- [Ragas](https://docs.ragas.io/en/latest/index.html), mentioned in the previous section, uses [faithfulness](https://docs.ragas.io/en/latest/concepts/metrics/faithfulness.html) and [answer relevance](https://docs.ragas.io/en/latest/concepts/metrics/answer_relevance.html) as the generated answer quality metrics and classic context [precision](https://docs.ragas.io/en/latest/concepts/metrics/context_precision.html) and [recall](https://docs.ragas.io/en/latest/concepts/metrics/context_recall.html) for the retrieval part of the RAG scheme. ([View Highlight](https://read.readwise.io/read/01hmbk38recevmmpvj2abyx60d))
- In a recently released great short course [Building and Evaluating Advanced RAG](https://learn.deeplearning.ai/building-evaluating-advanced-rag/) by Andrew NG, LlamaIndex and the evaluation framework [Truelens](https://github.com/truera/trulens/tree/main), they suggest the **RAG triad** — **retrieved context relevance** to the query, **groundedness** (how much the LLM answer is supported by the provided context) and **answer relevance** to the query. ([View Highlight](https://read.readwise.io/read/01hmbk3f7d86ecqhwjvjeb1hqy))
- The key and the most controllable metric is the **retrieved context relevance** — basically parts 1–7 of the advanced RAG pipeline described above plus the Encoder and Ranker fine-tuning sections are meant to improve this metric, while part 8 and LLM fine-tuning are focusing on answer relevance and groundedness. ([View Highlight](https://read.readwise.io/read/01hmbk3rbc6tjggxr8gjmdzd20))
- A good example of a pretty simple retriever evaluation pipeline could be found [here](https://github.com/run-llama/finetune-embedding/blob/main/evaluate.ipynb) and it was applied in the Encoder fine-tuning section. 
  A bit more advanced approach taking into account not only the **hit rate**, but the **Mean Reciprocal Rank**, a common search engine metric, and also generated answer metrics such as faithfulness abd relevance, is demonstrated in the OpenAI [cookbook.](https://github.com/openai/openai-cookbook/blob/main/examples/evaluation/Evaluate_RAG_with_LlamaIndex.ipynb) ([View Highlight](https://read.readwise.io/read/01hmbk40sw9y0463n1n8aqqndv))
- LangChain has a pretty advanced evaluation framework [LangSmith](https://docs.smith.langchain.com) where custom evaluators may be implemented plus it monitors the traces running inside your RAG pipeline in order to make your system more transparent. ([View Highlight](https://read.readwise.io/read/01hmbk4ekkrnarv3gxb48pyma2))
- In case you are building with LlamaIndex, there is a [rag_evaluator llama pack](https://github.com/run-llama/llama-hub/tree/dac193254456df699b4c73dd98cdbab3d1dc89b0/llama_hub/llama_packs/rag_evaluator), providing a quick tool to evaluate your pipeline with a public dataset. ([View Highlight](https://read.readwise.io/read/01hmbk4bepmvq316q72az1dfy7))