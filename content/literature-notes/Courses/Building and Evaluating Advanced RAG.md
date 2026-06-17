---
title:  "Building and Evaluating Advanced RAG"
date: 2023-12-19
tags: 
- fleeting 
---

Act as a personal blog editor. I want you to review the grammar and expressions of the text. If necessary provide corrections and try to make the post easier to read, and appealing for a general and technical audience. Using more engaging language to capture the reader's interest. Also, consider breaking up longer sentences into shorter ones for easier reading. Do not expand the ideas of the text. If you have any suggestions write them after three dollar signs at the end of the text.

Text:

Teachers: Jerry Liu (LlamaIndex), Anupam Datta (truera)

# Introduction

Production ready systems requires systematic iteration, evaluation, and Systematic experimenting.

# Advanced RAG pipeline

Components of a basic RAG Pipeline

![](literature-notes/Courses/attachments/Screenshot%202023-12-19%20at%2015.30.01.png)

In the notebook, it setups a simple RAG and an Evaluation using Truelens. It evaluates the following triad:

![](literature-notes/Courses/attachments/Pasted%20image%2020231219160216.png)

Evaluation is performed using LLMs. 

## Sentence-window retrieval

![](literature-notes/Courses/attachments/Screenshot%202023-12-19%20at%2016.07.33.png)

This works by embedding single sentences instead of chunks. After retrieval, the sentences are replaced by a larger window of sentences around the original retrieved sentence. This allows the LLM to have more context while retrieven more granular pieces of information. It may improve retrieval and synthesis performance. 

## Auto-merging retrieval

![](literature-notes/Courses/attachments/Screenshot%202023-12-20%20at%2009.43.11.png)

We construct a hierarchy of parent nodes, with child nodes. Auto-merging retrieval works by merging and retrieve nodes into larger pair of nodes.  

# RAG Triad of metrics