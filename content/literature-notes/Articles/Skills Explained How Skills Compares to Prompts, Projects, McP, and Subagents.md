---
author: "[[claude.com]]"
title: 'Skills Explained: How Skills Compares to Prompts, Projects, McP, and Subagents'
date: "2025-11-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/691422974acd1cc3d6467e3a_og_skills-explained.jpg)

## Metadata
- Author: [[claude.com]]
- Full Title: Skills Explained: How Skills Compares to Prompts, Projects, McP, and Subagents
- URL: https://claude.com/blog/skills-explained

## Highlights
- Since introducing [Skills](https://www.anthropic.com/news/skills), there's been interest in understanding how the various components of Claude's agentic ecosystem work together. ([View Highlight](https://read.readwise.io/read/01k9zk4218zfvdyg3mv9ysj9se))
- Skills are folders containing instructions, scripts, and resources that Claude discovers and loads dynamically when relevant to a task. Think of them as specialized training manuals that give Claude expertise in specific domains—from working with Excel spreadsheets to following your organization's brand guidelines. ([View Highlight](https://read.readwise.io/read/01k9zk4e8g1bsnx3z0x5chzv7k))
- **How Skills work:** When Claude encounters a task, it scans available Skills to find relevant matches. Skills use progressive disclosure: metadata loads first (~100 tokens), providing just enough information for Claude to know when a Skill is relevant. Full instructions load when needed (<5k tokens), and bundled files or scripts load only as required. ([View Highlight](https://read.readwise.io/read/01k9zk4mynq87a4bcz4tyyt6bp))
- **When to use Skills:** Choose Skills when you need Claude to perform specialized tasks consistently and efficiently. They're ideal for:
  • **Organizational workflows**: Brand guidelines, compliance procedures, document templates
  • **Domain expertise:** Excel formulas, PDF manipulation, data analysis
  • **Personal preferences:** Note-taking systems, coding patterns, research methods ([View Highlight](https://read.readwise.io/read/01k9zk4sfktwt50ag6asrwwx29))
- **Example:** Create [a brand guidelines Skill](https://github.com/anthropics/skills/tree/main/brand-guidelines) that includes your company's color palette, typography rules, and layout specifications. When Claude creates presentations or documents, it automatically applies these standards without you needing to explain them each time. ([View Highlight](https://read.readwise.io/read/01k9zk58srm05prhyv5d5q81at))
- [Prompts](https://docs.claude.com/en/prompt-library/library) are the instructions you provide to Claude in natural language during a conversation. They're ephemeral, conversational, and reactive—you provide context and direction in the moment.
  **When to use prompts:** Use prompts for:
  • One-off requests: "Summarize this article"
  • Conversational refinement: "Make that tone more professional"
  • Immediate context: "Analyze this data and identify trends"
  • Ad-hoc instructions: "Format this as a bulleted list" ([View Highlight](https://read.readwise.io/read/01k9zk5qnzyg1myrewm87ze2vn))
- **Pro-tip:** Prompts are your primary way of interacting with Claude, but they don't persist across conversations. For repeated workflows or specialized knowledge, consider capturing prompts as Skills or project instructions. ([View Highlight](https://read.readwise.io/read/01k9zk678wszrprxpbdetenk5z))
- **When to use a Skill instead:** If you find yourself typing the same prompt repeatedly across multiple conversations, it's time to create a Skill. Transform recurring instructions like "review this code for security vulnerabilities using OWASP standards" or "format this analysis with executive summary, key findings, and recommendations" into Skills. This saves you from re-explaining procedures each time and ensures consistent execution. ([View Highlight](https://read.readwise.io/read/01k9zk6ap1xpz3gq7j6bye3vmq))
- Available on all paid Claude plans, [Projects](https://support.claude.com/en/articles/9517075-what-are-projects) are self-contained workspaces with their own chat histories and knowledge bases. Each project includes a 200K context window where you can upload documents, provide context, and set custom instructions that apply to all conversations within that project.
  **How Projects work:** Everything you upload to a project's knowledge base becomes available across all chats within that project. Claude automatically uses this context to provide more informed, relevant responses. When your project knowledge approaches context limits, Claude seamlessly enables Retrieval Augmented Generation (RAG) mode to expand capacity by up to 10x. ([View Highlight](https://read.readwise.io/read/01k9zk6y6qq3x7s027e77vkrqb))
- **When to use Projects:** Choose Projects when you need:
  • **Persistent context:** Background knowledge that should inform every conversation
  • **Workspace organization:** Separate contexts for different initiatives
  • **Team collaboration:** Shared knowledge and conversation history (on Team and Enterprise plans)
  • **Custom instructions:** Project-specific tone, perspective, or approach ([View Highlight](https://read.readwise.io/read/01k9zk79x6hr2kr6m1w4fwbx10))
- **When to use a Skill instead:** If multiple agents or conversations need the same expertise—like security review procedures or data analysis methods—create a Skill rather than building that knowledge into individual subagents. Skills are portable and reusable, while subagents are purpose-built for specific workflows. Use Skills to teach expertise that any agent can apply; use subagents when you need independent task execution with specific tool permissions and context isolation. ([View Highlight](https://read.readwise.io/read/01k9zk7hrerm7m3mhxnp2j4t5c))
- **What are subagents?**
  [Subagents](https://docs.claude.com/en/docs/claude-code/sub-agents) are specialized AI assistants with their own context windows, custom system prompts, and specific tool permissions. Available in Claude Code and the Claude Agent SDK, subagents handle discrete tasks independently and return results to the main agent. ([View Highlight](https://read.readwise.io/read/01k9zk7znhnzh15wkdr8cbk4ya))
- **How subagents work:** Each subagent operates with its own configuration—you define what it does, how it approaches problems, and which tools it can access. Claude automatically delegates tasks to appropriate subagents based on their descriptions, or you can explicitly request a specific subagent. ([View Highlight](https://read.readwise.io/read/01k9zk84df1qzjpq816s8t4fqq))
- **When to use subagents:** Use subagents for:
  • **Task specialization:** Code review, test generation, security audits
  • **Context management:** Keep the main conversation focused while offloading specialized work
  • **Parallel processing:** Multiple subagents can work on different aspects simultaneously
  • **Tool restriction:** Limit specific subagents to safe operations (e.g., read-only access) ([View Highlight](https://read.readwise.io/read/01k9zk8br2xzm2hwn2epn0ftf2))
- **When to use a Skill instead:** If multiple agents or conversations need the same expertise—like security review procedures or data analysis methods—create a Skill rather than building that knowledge into individual subagents. Skills are portable and reusable, while subagents are purpose-built for specific workflows. Use Skills to teach expertise that any agent can apply; use subagents when you need independent task execution with specific tool permissions and context isolation. ([View Highlight](https://read.readwise.io/read/01k9zk8jq679pqw5dsat2752h9))
- **When to use a Skill instead:** MCP connects Claude to data; Skills teach Claude what to do with that data. If you're explaining *how* to use a tool or follow procedures—like "when querying our database, always filter by date range first" or "format Excel reports with these specific formulas"—that's a Skill. If you need Claude to *access* the database or Excel files in the first place, that's MCP. Use both together: MCP for connectivity, Skills for procedural knowledge. ([View Highlight](https://read.readwise.io/read/01k9zk8y76vzrgracvffjdr5q0))
- **Skills vs. subagents: when to use what**
  **Use Skills when:** You want capabilities that any Claude instance can load and use. Skills are like training materials—they make Claude better at specific tasks across all conversations.
  **Use subagents when:** You need complete, self-contained agents designed for specific purposes that handle workflows independently. Subagents are like specialized employees with their own context and tool permissions.
  **Use them together when:** You want subagents with specialized expertise. For example, a code-review subagent can use Skills for language-specific best practices, combining the independence of a subagent with the portable expertise of Skills. ([View Highlight](https://read.readwise.io/read/01k9zkefsmpxbpvxc79q19p0yn))
- **Skills vs. prompts: when to use what**
  **Use prompts when:** You're giving one-time instructions, providing immediate context, or having a conversational back-and-forth. Prompts are reactive and ephemeral.
  **Use Skills when:** You have procedures or expertise that you'll need repeatedly. Skills are proactive—Claude knows when to apply them—and persistent across conversations.
  **Use them together:** Prompts and Skills complement each other naturally. Use Skills to provide foundational expertise, then use prompts to provide specific context and refinement for each task. ([View Highlight](https://read.readwise.io/read/01k9zkfksr6130y43r5s1zzxdz))
- **Can subagents use Skills?**
  Yes. In Claude Code and the Agent SDK, subagents can access and use Skills just like the main agent. This creates powerful combinations where specialized subagents leverage portable expertise.
  For example, your python-developer subagent can use the pandas-analysis Skill to perform data transformations following your team's conventions, while your documentation-writer subagent uses the technical-writing skill to format API documentation consistently. ([View Highlight](https://read.readwise.io/read/01k9zkfwm45ptjbr6mpybvp09e))
