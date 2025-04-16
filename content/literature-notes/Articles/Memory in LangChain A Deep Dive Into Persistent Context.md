---
author: [[Harpreet Sahota]]
title: "Memory in LangChain: A Deep Dive Into Persistent Context"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/0*P__G9UmmmLBrcWRQ)

## Metadata
- Author: [[Harpreet Sahota]]
- Full Title: Memory in LangChain: A Deep Dive Into Persistent Context
- URL: https://heartbeat.comet.ml/memory-in-langchain-a-deep-dive-into-persistent-context-8121af499b04?source=rss----680eee12c50d---4

## Highlights
- When designing language models, especially chat-based ones, maintaining context and memory is crucial to ensure the conversation flows seamlessly and feels natural.
  Enter LangChain’s Memory module, the superhero that saves our chat models from short-term memory woes. ([View Highlight](https://read.readwise.io/read/01hf4hqbzpvmxepav1z08w3v68))
- Every memory system performs two main tasks: reading and writing.
  Every chain has core logic that requires specific inputs.
  Some inputs originate from the user, while others derive from memory. During a run, a chain accesses its memory system twice:
  1) It reads from memory to supplement user inputs before executing core logic.
  2) After processing but before responding, it writes the current run’s data to memory for future reference. ([View Highlight](https://read.readwise.io/read/01hf4ht7prcz24zw889qqcg38p))
- Two fundamental decisions shape any memory system:
  1) The method of storing state.
  2) The approach to querying that state.
  **Storing:** At the heart of memory lies a record of all chat interactions.
  LangChain’s memory module offers various ways to store these chats, ranging from temporary in-memory lists to enduring databases.
  **Querying:** While storing chat logs is straightforward, designing algorithms and structures to interpret them isn’t. ([View Highlight](https://read.readwise.io/read/01hf4hte8769q20k9m3ynge6sz))
- LLMs, especially chat-based ones, are like that. You need a way to ensure your system doesn’t ‘pull a Dory’ building LLM applications. ([View Highlight](https://read.readwise.io/read/01hf4hqrkcd16ga64famckf4ze))
- he Memory module is responsible for persisting the state between calls of a chain or agent, which helps the language model remember previous interactions and use that information to make better decisions.
  It provides a standard interface for persisting state between calls of a chain or agent, enabling the language model to have memory and context. ([View Highlight](https://read.readwise.io/read/01hf4hr0p5jtnn6q4dms0ayqh9))
- The Memory module enables the language model to have memory and context, allowing the LLM to make informed decisions.
  It allows the model to remember user inputs, system responses, and any other relevant information. The stored information can be accessed and utilized during subsequent interactions. ([View Highlight](https://read.readwise.io/read/01hf4hr8kajqkyp7vkgcd0rzj0))
- Reading variables from memory
  Before going into the chain, variables are read from memory. Variable names need to align with what the chain expects. You can inspect variables by calling memory.load_memory_variables ([View Highlight](https://read.readwise.io/read/01hf4htyy4and9wfz1t47e7sbs))
- Notice that load_memory_variables returns a single key, history.
  This means that your chain (and likely your prompt) expects an input named history. You control this variable through parameters on the memory class. For example, if you want the memory variables to be returned in the key chat_history you can do the following: ([View Highlight](https://read.readwise.io/read/01hf4hv5s052axsdbgk9y4y8ys))
- When it comes to memory, one of the most common types is the storage and retrieval of chat messages.
  There are two ways to retrieve these messages:
  1) A single string that concatenates all the messages together, which is useful when the messages will be passed in Language Models
  2) A list of ChatMessages, which is useful when the messages are passed into ChatModels ([View Highlight](https://read.readwise.io/read/01hf4hvejs86vdahr4t2bfjgzy))
- n some cases, chains receive or provide multiple input/output keys.
  In this scenario, it’ll be challenging to determine which keys to store in the chat message history. But you can manage this by using the input_key and output_key parameters in memory types. By default, these parameters are set to None, which means that if there is only one input/output key, it will be used. ([View Highlight](https://read.readwise.io/read/01hf4hvqd2c9xhpyscdyx54pxp))
- The ConversationBufferWindowMemory is a tool that keeps track of past interactions in a conversation.
  It does this by maintaining a list of the most recent interactions, and only using the last K interactions. This helps to ensure that the buffer doesn’t become too large and allows for a sliding window of the most recent interactions to be kept. This type of memory is beneficial for keeping the history of past interactions small and manageable. ([View Highlight](https://read.readwise.io/read/01hf4hwj8p61qnte8mh61dypbs))
- As we’ve traversed the intricate pathways of LangChain’s Memory module, it’s evident how pivotal memory and context are in making interactions with language models feel genuine and continuous. No longer are we stuck in the cyclical loop of starting every conversation from scratch. With the power of LangChain’s memory capabilities, every interaction can be a continuation of the last, allowing for richer and more personalized engagements.
  Whether building a personal assistant, an autonomous agent, or running agent simulations, integrating memory is no longer a luxury — it’s a necessity. Through the tools and strategies discussed, LangChain offers both simplicity for beginners and depth for experts. ([View Highlight](https://read.readwise.io/read/01hf4hx097ad09xx4a4k1j107y))
