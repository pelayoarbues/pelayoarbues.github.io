---
author: [[W&B]]
title: "RAGs to Riches: Bringing Wandbot Into Production"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://wandb.ai/logo.png)

## Metadata
- Author: [[W&B]]
- Full Title: RAGs to Riches: Bringing Wandbot Into Production
- URL: https://wandb.ai/wandbot/wandbot_public/reports/RAGs-To-Riches-Bringing-Wandbot-into-Production--Vmlldzo1ODU5ODk0

## Highlights
- The first version of Wandbot was a monolith, and while it worked as an initial implementation, it had its limitations. It was difficult to maintain, didn't scale well, and wasn't ready for production. We needed something more flexible and adaptable.
  So, we refactored Wandbot. We chose a microservices architecture, a method that breaks down the bot into smaller, manageable parts. This new design is not only easier to maintain but also cost-effective and fully equipped for production use. It also allowed us to add new features like multilingual support, follow-up conversations, and model fallback mechanisms. ([View Highlight](https://read.readwise.io/read/01hrxy91dsvqekwrkc8ceedxfw))
- Initially built as a monolithic structure, the Discord and Slack apps were deployed separately, resulting in duplicated code with minor configuration changes. This approach brought with it a range of issues:
  • Maintenance difficulty: Any modification necessitated updates in multiple areas, often resulting in bugs and inconsistencies due to unsynchronized deployments.
  • Increased costs: Operating two distinct bots meant duplicating resources, such as vector stores and app deployments, thereby inflating our infrastructure expenses.
  • Complexity and scalability issues: As we integrated new features like conversation history, the system's complexity escalated. The monolithic architecture became increasingly cumbersome to work with, hindering scalabilit ([View Highlight](https://read.readwise.io/read/01hrxy99r8q2p162tc425qe4bq))
- To address these problems and prepare Wandbot for future growth, we resolved to transition the implementation to a microservices-oriented architecture. This strategy involves breaking down the bot into smaller, manageable components, providing flexibility, adaptability, and scalability. This restructuring allowed us to:
  • Organize the system into distinct components like ingestion, chat, and database services.
  • Centralize core services and models for use across applications.
  • Develop dedicated APIs for seamless integration with existing and potential future platforms.
  • Independently modify each service, minimizing the impact on the overall system. ([View Highlight](https://read.readwise.io/read/01hrxy9gam0t9sh2n8md9rnzrd))
- The Ingestion Module, a new feature we added during the transition to microservices, is designed for parsing and processing raw documentation in diverse formats such as Markdown, Python code, and Jupyter Notebooks. Additionally, it plays a crucial role in creating embedding vectors for document chunks and indexing these documents into a [FAISS vector store](https://docs.llamaindex.ai/en/latest/examples/vector_stores/FaissIndexDemo.html), complete with relevant metadata.
  The introduction of this module brings multiple advantages. It distinctly separates the ingestion process from other components, allowing each to evolve and refine independently. By caching embedding calls, we significantly lower operational costs and avoid redundant model invocations. This strategic design not only boosts maintainability but also optimizes resource use. The module also creates artifacts for the vector store index and generates comprehensive data ingestion reports, crucial for ongoing evaluation and improvement. ([View Highlight](https://read.readwise.io/read/01hrxy9vhs9ryhav45ee08m349))
- Document Parsing and Preprocessing
  This process begins with syncing the latest updates from GitHub repositories.
  • We use the [MarkdownNodeParser](https://docs.llamaindex.ai/en/latest/api/llama_index.node_parser.MarkdownNodeParser.html) from [llama-index](https://www.llamaindex.ai/) for parsing and chunking Markdown documents by identifying headers and code blocks.
  • Jupyter Notebooks are converted into Markdown using [nbconvert](https://nbconvert.readthedocs.io/en/latest/) and undergo a similar parsing routine.
  • Code blocks are parsed and chunked using [Concrete Syntax Trees (CST)](https://docs.llamaindex.ai/en/stable/api/llama_index.node_parser.CodeSplitter.html), segmenting the code logically into functions, classes, and statements.
  • Each document chunk is enriched with metadata like source URLs and languages, enhancing future retrieval. ([View Highlight](https://read.readwise.io/read/01hrxyar5zb40dgxzjb17q0gpd))
- Vector Store Ingestion
  In this phase, the WandB artifact from parsing serves as the input to create a vector store index. Using OpenAI's ada2 model, document chunks are embedded. SQL-lite [caching](https://python.langchain.com/docs/modules/data_connection/text_embedding/caching_embeddings), a part of Langchain, minimizes redundant model calls, crucial for cost and operational efficiency. The outcome is a FAISS index with embedded chunks and metadata, stored as a WandB artifact. ([View Highlight](https://read.readwise.io/read/01hrxyavb8pg7z0hhhtz7axwc9))
- Report Generation
  The process culminates in creating a W&B Report using the artifacts from the previous step. The following report outlines GitHub repository revision numbers, the volume of documents ingested, and artifacts comprising parsed documents and vector stores. This practice offered us a clear, transparent view of the ingestion process, facilitating analysis and future improvements. ([View Highlight](https://read.readwise.io/read/01hrxyazd74f1njnrbt9kc6hkm))
- Chat Module
  Let's now explore the heart of user interaction and its impressive development: the chat module. Its evolution over time has brought about significant improvements in how it operates and connects with users.
  Recent Transformations
  We migrated the implementation from [Langchain](https://www.langchain.com/)﻿ [to Llama-index](https://www.llamaindex.ai/), which gave us better control over the chat module's underlying functionality, like managing the retrieval methods, response synthesis pipeline and other customizations.
  An exciting development is Wandbot's integration with Cohere's [rerank-v2 endpoint](https://cohere.com/rerank). This allows Wandbot to sift through retriever results more effectively, ensuring that responses are not just accurate, but also highly relevant to the user's query.
  We have made language inclusivity a priority in our recent updates. The chat module now recognizes and responds to queries in the same language, with particular emphasis on Japanese to better serve our W&B [Japan Slack community](http://wandbjp.slack.com).
  We also wanted to ensure uninterrupted service by switching to a backup LLM ([GPT-3.5-turbo](https://platform.openai.com/docs/models/gpt-3-5)) if the primary one ([GPT-4](https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo)) is down. We managed this within the llama-index service-context and adds a layer of resilience against potential downtimes. ([View Highlight](https://read.readwise.io/read/01hrxybhfdhnp26tc7t6mhygrf))
- Enhancing Conversations
  Wandbot now retains conversation history, enabling it to recall past discussions and user feedback. Additionally, we’ve also upgraded the system-prompt to guide the LLM's behavior, ensuring responses align better with user needs. Here's the upgraded system-prompt truncated for brevity. You can see the complete system prompt [here](https://github.com/wandb/wandbot/blob/main/data/prompts/chat_prompt.json). ([View Highlight](https://read.readwise.io/read/01hrxybz4qwkp0njf163c9mskt))
- Streamlining Operations
  • Caching: To enhance efficiency, Wandbot now caches embedding results. This eliminates the need for repetitive embedding model calls, cutting down operational costs.
  • Modular design: By encapsulating the chat logic in a standalone module, we've simplified maintenance and updates. This modular approach also eases the integration of Wandbot across various platforms, including Discord, Slack, and an upcoming Zendesk Application. ([View Highlight](https://read.readwise.io/read/01hrxyc5ejyf3geqexsy45kw8w))
- Benefits from Improvements
  The cumulative impact of these upgrades has been crucial. Users now enjoy more engaging, continuous conversations with Wandbot. The accuracy of Wandbot's responses has significantly improved, thanks to the reranking process and prompt tuning. Adding new services like reranking and [language-based retrieval](https://github.com/wandb/wandbot/blob/983e522e9785eaaf2ce05802f7ead4eb3f24a79b/src/wandbot/utils.py#L204) has become more streamlined. Additionally, Wandbot now maintains a consistent conversational context across different client applications.
  Overall, these enhancements have made Wandbot not only more efficient in its operation but also more adaptive and useful in its interactions with us ([View Highlight](https://read.readwise.io/read/01hrxycekgvkw0tf2atdja881r))
- Key Functions
  The database module is akin to a memory bank, meticulously storing and managing conversation data. It acts as a foundation in Wandbot's data and conversational memory, providing essential services:
  • Storing conversational history: Like a detailed journal, it records all user questions and Wandbot's responses.
  • Providing conversational context: Utilizing chat history, the module informs future queries, thus enhancing relevance and continuity in interactions.
  • Enabling personalization: Wandbot leverages conversation threads to offer a customized responses to follow-up queries.
  • Persisting user feedback: Collecting user opinions on Wandbot's responses, aiding in continuous improvement. ([View Highlight](https://read.readwise.io/read/01hrxyckaqwac39ex488fe1zn9))
- Operational Benefits
  The introduction of the database module has brought about several operational advantages:
  • Caching: It stores LLM query results, reducing the need for repetitive queries and thereby cutting down on operational costs.
  • Consistent User Experience: As a unified data layer across different clients, it ensures users receive consistent information, regardless of the platform.
  • Data-Driven Improvements: User feedback, stored within the database, is a goldmine for refining Wandbot's performance. ([View Highlight](https://read.readwise.io/read/01hrxycq4s6df6svj2gr5gvaxz))
- SQLite as the Database Choice
  In choosing SQLite, Wandbot gains a lightweight yet powerful database solution:
  • Serverless Architecture: With no need for a separate database server, SQLite simplifies overall management.
  • Embeddable Nature: All data is contained within a single, easily transportable database file.
  • Ease of Integration: The availability of Python SQLite libraries, makes integration a breeze. ([View Highlight](https://read.readwise.io/read/01hrxyd06h5e3q54d962p0nbgm))
- API Module
  The API module serves as the central interface through which clients like Discord and Slack interact with Wandbot. It plays a pivotal role in simplifying integration, enhancing scalability, and ensuring the robustness of our bot's services.
  Key endpoints in the API include:
  • /question_answer: This endpoint allows the storage of question-answer pairs in the database.
  • /chat_thread: Clients can retrieve chat threads stored in the database using this endpoint.
  • /query: The primary chat endpoint that responds to user queries.
  • /feedback: This endpoint is responsible for storing user feedback provided by clients.
  By centralizing our API, we achieve several significant advantages:
  Wandbot's internal workings are decoupled from the intricacies of client interactions. This separation enables us to optimize performance through mechanisms like caching layers while keeping the client-side code unaltered, even when we make changes to the APIs. ([View Highlight](https://read.readwise.io/read/01hrxydbd6zeajpvwha99ab4ja))
- In addition to these technical benefits, our centralized API empowers us in multiple ways:
  • Loose Coupling: It fosters loose coupling between our frontend applications and backend services, allowing us to modify internals without impacting clients.
  • Developer Productivity: By abstracting away complexities behind simple APIs, we enhance developer productivity, making it easier to work with Wandbot.
  • Scalability: The ability to scale individual API services independently ensures that Wandbot can handle an increasing load gracefully.
  • Security: By avoiding direct exposure to core modules, we enhance the security of Wandbot, protecting sensitive data and functionalities. ([View Highlight](https://read.readwise.io/read/01hrxydez4341e2mtwgmr6dcpp))
- New Capabilities
  Wandbot's recent transformation into a microservices architecture has not only revamped its core, but has also infused it with several new capabilities. These enhancements directly cater to user experience and functionality:
  • Multilingual Mastery: Wandbot now effortlessly handles both English and Japanese, fetching documents and responding in the user’s language. This bilingual ability makes it more accessible and user-friendly.
  • Reliable Backup: If Wandbot's primary Large Language Model (LLM) faces downtime, it seamlessly switches to a secondary model. This failover mechanism ensures uninterrupted service.
  • Smart Conversation Context: Leveraging chat history, Wandbot now provides context-rich conversations. It also evolves through user feedback, making interactions more natural and intuitive.
  • New integrations: The new architecture allowed us to seamlessly integrate new applications like Zendesk(coming soon ...) and the absolutely New [WandB-GPT](https://wandb.me/gpt) - a Technical support GPT for Weights & Biases ([View Highlight](https://read.readwise.io/read/01hrxydjhdkpjr6fvznewdpz0r))
- During deployment, the individual micro-services for the Database, API, and each client application are run in a single repl. Our current usage pattern doesn't require anymore compute. However, to improve reliability and scalability, we migrated Wandbot to [Replit Deployments](https://docs.replit.com/hosting/deployments/about-deployments). This move has improved uptime, allowed for auto-scaling, and improved monitoring and security. ([View Highlight](https://read.readwise.io/read/01hrxydt8j9gws1wd2dpthajew))
