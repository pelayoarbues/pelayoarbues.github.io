---
author: "[[Tai Groot]]"
title: 'Introducing Rampart'
date: "2026-07-13"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://ndstudio.gov/blog-posts/say-hello-to-rampart/featured.webp)

## Metadata
- Author: [[Tai Groot]]
- Full Title: Introducing Rampart
- URL: https://ndstudio.gov/posts/say-hello-to-rampart?utm_source=substack&utm_medium=email

## Highlights
- Built by National Design Studio, Rampart runs entirely in the browser, identifying and removing personal information before a message is sent. It combines deterministic rules and machine learning to deliver privacy protection in milliseconds.
  When you type into a chatbot, you might reveal more about yourself than you intend. A request to clean up an email carries your name and your coworker's; a question about a medical bill carries your address and account number; a vented frustration carries who you are and where you live. And whatever you type doesn't stay with you — it travels to a remote server you have no way to inspect. ([View Highlight](https://read.readwise.io/read/01kxed5rvtgj9j9e9tx5tg63qg))
- Our core design principle is that the only personal information you can be sure is private is the information that never leaves your device.
  Today, we open source Rampart — a first-generation on-device personal information filtering system that is a strong first line of defense in ensuring your personal information never leaves your device. Rampart is a combination of a deterministic layer, based on regular expressions to catch SSNs and ID numbers, and MiniLM to catch names and street addresses. ([View Highlight](https://read.readwise.io/read/01kxed631hdpr51x026apweytw))
- Why we built Rampart
  Often times, doing PII removal means either trusting a remote server or downloading binaries to the client, which present a few key challenges:
  1. AI privacy guarantees are almost impossible to verify. From first principles, it is impossible to verify the privacy and security claims of AI vendors. A newly deployed version of an AI runtime may accidentally begin logging sensitive user information, and services carry unknown internal security risks such as zero-day vulnerabilities and insider threats.
  2. Most models for PII removal are gigantic, narrowing the group of users that can benefit from them. For example, OpenAI Privacy Filter is ~2.8GB, which would take approximately 38 minutes to download to a browser on a relatively poor connection (10mbps).
  Everything happens in the browser, in the moment between typing a message and sending it; there is no server in the loop.
  Before the message goes anywhere, two readers look at it on your device.
  The first is a set of rules. Regular expressions paired with real validations handle the information that has structure: Social Security numbers, credit cards, phone numbers, routing and account numbers, emails, IP addresses, government IDs. It is deterministic and fast.
  The second is a small language model. Rules can't anticipate every name or street address, so MiniLM reads the sentence for the personal information with a deeper understanding of the context of the sentence, then redacts information it finds within a specific category. ([View Highlight](https://read.readwise.io/read/01kxed6fa9fr9gdmencjtyy4k1))
- We trained Rampart on AI4Privacy's OpenPII 1.5M dataset and a synthetic generator that reinforces all 17 entity types with deliberately messy chat-style input. The headline numbers below come from a 30,000-row held-out OpenPII slice spanning seven Latin-script languages, scored end-to-end by the shipped pipeline.
  Private-term recall on a 30,000-row held-out OpenPII test set across seven supported languages. Higher is better. [Benchmark↗](https://inference.ndstudio.gov/rampart/whitepaper.pdf)
  Rampart is an alpha product intended to be the first line of defense in a more thorough effort to manage personally identifiable information for AI chat experiences. It currently supports English, Spanish, French, German, Italian, Portuguese, and Dutch. ([View Highlight](https://read.readwise.io/read/01kxed71d00ykmmvjqb1jp8vfp))
