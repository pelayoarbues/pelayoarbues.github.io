---
author: "[[Brave Software]]"
title: 'Agentic Browser Security: Indirect Prompt Injection in Perplexity Comet'
date: "2025-10-23"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://brave.com/blog/comet-prompt-injection/images/featured.jpg)

## Metadata
- Author: [[Brave Software]]
- Full Title: Agentic Browser Security: Indirect Prompt Injection in Perplexity Comet
- URL: https://brave.com/blog/comet-prompt-injection/

## Highlights
- At Brave, we’re developing the ability for our in-browser AI assistant [Leo](https://brave.com/leo/) to browse the Web on your behalf, acting as your agent. Instead of just asking “Summarize what this page says about London flights”, you can command: “Book me a flight to London next Friday.” The AI doesn’t just read, it browses and completes transactions autonomously. This will significantly expand Leo’s capabilities while preserving [Brave’s privacy guarantees](https://support.brave.app/hc/en-us/articles/20958609786637-How-do-I-use-Brave-Leo) and maintaining robust security guardrails to protect your data and browsing sessions. ([View Highlight](https://read.readwise.io/read/01k896gvca6zp9b6x096wehgxg))
- This kind of agentic browsing is incredibly powerful, but it also presents significant security and privacy challenges. As users grow comfortable with AI browsers and begin trusting them with sensitive data in logged in sessions—such as banking, healthcare, and other critical websites—the risks multiply. What if the model hallucinates and performs actions you didn’t request? Or worse, what if a benign-looking website or a comment left on a social media site could steal your login credentials or other sensitive data by adding invisible instructions for the AI assistant? ([View Highlight](https://read.readwise.io/read/01k896h1a428xy0mhxyevbkw8p))
- To compare our implementation with others, we examined several existing solutions, such as Nanobrowser and Perplexity’s Comet. While looking at Comet, we discovered vulnerabilities which we reported to Perplexity, and which underline the security challenges faced by agentic AI implementations in browsers. The attack demonstrates how easy it is to manipulate AI assistants into performing actions that were prevented by long-standing Web security techniques, and how users need new security and privacy protections in agentic browsers. ([View Highlight](https://read.readwise.io/read/01k896hf6waxtzs36s4b4w45k8))
- The vulnerability we’re discussing in this post lies in how Comet processes webpage content: when users ask it to “Summarize this webpage,” Comet feeds a part of the webpage directly to its LLM without distinguishing between the user’s instructions and untrusted content from the webpage. This allows attackers to embed indirect prompt injection payloads that the AI will execute as commands. For instance, an attacker could gain access to a user’s emails from a prepared piece of text in a page in another tab. ([View Highlight](https://read.readwise.io/read/01k896ht2n4kc4jbpnqm82m9rz))
- How the attack works
  1. **Setup**: An attacker embeds malicious instructions in Web content through various methods. On websites they control, attackers might hide instructions using white text on white backgrounds, HTML comments, or other invisible elements. Alternatively, they may inject malicious prompts into user-generated content on social media platforms such as Reddit comments or Facebook posts.
  2. **Trigger**: An unsuspecting user navigates to this webpage and uses the browser’s AI assistant feature, for example clicking a “Summarize this page” button or asking the AI to extract key points from the page.
  3. **Injection**: As the AI processes the webpage content, it sees the hidden malicious instructions. Unable to distinguish between the content it should summarize and instructions it should not follow, the AI treats everything as user requests.
  4. **Exploit**: The injected commands instruct the AI to use its browser tools maliciously, for example navigating to the user’s banking site, extracting saved passwords, or exfiltrating sensitive information to an attacker-controlled server. ([View Highlight](https://read.readwise.io/read/01k896jwmfe310hh3mt0mw0j09))
- In this demonstration, you can see:
  1. A user visits a Reddit post, with a comment containing the prompt injection instructions hidden behind the spoiler tag.
  2. The user clicks the Comet browser’s “Summarize the current webpage” button.
  3. While processing the page for summarization, the Comet AI assistant sees and processes these hidden instructions.
  4. The malicious instructions command the Comet AI to:
  • Navigate to [https://www.perplexity.ai./account](https://www.perplexity.ai./account) and log in with this email address to receive an OTP (one-time password) from Perplexity *(note that the [trailing dot](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) creates a different domain, perplexity.ai. vs perplexity.ai, to bypass existing authentication)*
  • Navigate to [https://gmail.com](https://gmail.com), where the user is already logged in, and read the received OTP
  • Exfiltrate both the email address and the OTP by replying to the original Reddit comment
  5. The attacker learns the victim’s email address, and can take over their Perplexity account using the exfiltrated OTP and email address combination.
  Once the user tries to summarize the Reddit post with the malicious comment in Comet, the attack happens without any further user input. ([View Highlight](https://read.readwise.io/read/01k896my2y2kx9j3ebn4ga0y9t))
- This attack presents significant challenges to existing Web security mechanisms. When an AI assistant follows malicious instructions from untrusted webpage content, traditional protections such as same-origin policy (SOP) or cross-origin resource sharing (CORS) are all effectively useless. The AI operates with the user’s full privileges across authenticated sessions, providing potential access to banking accounts, corporate systems, private emails, cloud storage, and other services. ([View Highlight](https://read.readwise.io/read/01k896n52y5ka107npvst3c2y7))
