---
author: "[[Richmond Alake]]"
title: 'The Agent Loop Decoded: Three Levels Every Agent Engineer Must Know'
date: "2026-07-13"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/The-Agent-Loop-Decoded.png)

## Metadata
- Author: [[Richmond Alake]]
- Full Title: The Agent Loop Decoded: Three Levels Every Agent Engineer Must Know
- URL: https://blogs.oracle.com/developers/the-agent-loop-decoded-three-levels-every-agent-engineer-must-know

## Highlights
- Every session with a coding companion such as Claude Code, Codex, or Cursor is one: the model reads a request, inspects the repository, edits a file, runs the tests, observes the failures, and edits again until the build passes.
  That cycle of reasoning, acting, and observing the result is the agent loop at work, and it now sits at the centre of nearly every production agent system. **The agent loop is the repeating cycle a harness runs within a single agent turn: assemble context, invoke the model to reason, act on its decision, and go again until a stop condition ends the run.** ([View Highlight](https://read.readwise.io/read/01kxecm97dn5v1znnm7tw6m7ea))
- This piece unpacks that loop across three levels of understanding.
  • Level 1 is the minimal loop most developers meet first: an LLM, a handful of tools, and a response.
  • Level 2 introduces a lifecycle inside the loop, where memory operations turn a stateless process into a reasoning engine with state.
  • Level 3 pushes operations both inside and outside the loop, where the agent harness becomes a system in its own right. ([View Highlight](https://read.readwise.io/read/01kxecmrehhpcvhxjgrbjqg4y9))
- **An agent is a computational system that perceives its environment, reasons about what it perceives, takes actions to achieve a goal, and has some form of memory.** That description applies to many things: a thermostat, a chess engine, a human professional. What makes an AI agent distinct is that the reasoning step is handled by a large language model, and the range of possible actions extends well beyond a binary output. ([View Highlight](https://read.readwise.io/read/01kxecn3k4fa2sdpzsj27bt246))
- An agent’s architecture consists of two separable layers. The first is the model: the inference engine that does the reasoning. The second is the harness: the code that prepares context, executes tool calls, enforces operational constraints, and persists state. Most agent engineering work happens in the harness, not the model. Understanding that boundary clarifies where failures originate and where interventions are effective. ([View Highlight](https://read.readwise.io/read/01kxecnhdkr6ey8246cwc0kgks))
- ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/Agent-Harness.png) ([View Highlight](https://read.readwise.io/read/01kxecnmz4b4jj2d5469rqmmk1))
- An agent needs at minimum four things to be useful:
  • **Instructions**: a system prompt or goal that tells it what it is trying to accomplish.
  • **Memory**: access to information beyond the current message, including prior context, retrieved knowledge, and learned patterns.
  • **The ability to take actions**: tool calls, API requests, database writes, or any operation with an external effect.
  • **A reasoning engine**: an LLM that looks at context and decides what to do next. ([View Highlight](https://read.readwise.io/read/01kxecnwbb2zjfegzep88sds1p))
- A loop is a control structure that repeats a block of execution until a condition is met. In programming you encounter this everywhere: iterating over a collection, running until a flag is set, calling recursively until a base case is reached.
  The agent loop applies that same structure to an LLM-powered system. Rather than processing a user message once and returning a static response, the agent feeds its output back into itself, reasoning, acting, observing the result, and reasoning again, until it determines the task is complete. ([View Highlight](https://read.readwise.io/read/01kxecp4sgfccj1teca76genfq))
- ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/fig3_loop_vertical-1-1-scaled.png) ([View Highlight](https://read.readwise.io/read/01kxecp90zxrejc15s5w7njhdz))
- The necessity for loops in agent execution can be derived from the nature of the use cases and tasks agents are applied to. These common use cases can be referred to as **application modes**: the expected interaction patterns between a user and an agent. There are three: ([View Highlight](https://read.readwise.io/read/01kxecpgw9pmpb4a5s173g2wps))
- Take the deep research mode. An agent tasked with finding relevant sources, identifying contradictions across them, and producing a structured summary is not running a single-shot task. It requires the agent to:
  • Search for relevant sources.
  • Read and evaluate what it finds.
  • Identify gaps and contradictions.
  • Search again to fill in those gaps.
  • Synthesise everything into a coherent output. ([View Highlight](https://read.readwise.io/read/01kxecpp449e4dk7wf6zws7mve))
- ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/fig4_research_vertical-1-1-scaled.png) ([View Highlight](https://read.readwise.io/read/01kxecq367trf6pbh83kg6w65r))
- No single LLM call can do all of that. What is required is the mechanism and scaffolding that allows the model to reason, act, observe the result, reason again, and continue until the task is complete. That mechanism is the agent loop.
  Notably, implementations of agent frameworks and harnesses, however opinionated, have shared one thing in common: convergence on a minimal agent loop design. That convergence is arguably not much of a design choice, so much as a logical consequence of the task itself. ([View Highlight](https://read.readwise.io/read/01kxecqdz1bw2wkg11vxja67rq))
- The loop emerging as a design pattern draws a parallel to how humans operate in most organisations: structured cycles of work, review, and feedback that repeat until the objective is met.
  Loops have to be exited eventually. The programmatic loops taught in computer science classes usually exit in one of two ways: the iteration count for the loop is reached, or a break statement inside the loop triggers an exit. ([View Highlight](https://read.readwise.io/read/01kxecqsgk48v8ke9aprtwm53s))
- A well-designed agent loop defines explicit exit criteria. Common examples:
  • The model produces a final response with no pending tool calls.
  • A goal-completion check returns true: an objective-specific predicate, not merely the absence of tool calls.
  • A maximum number of iterations is reached.
  • A wall-clock timeout expires.
  • An error occurs that the agent cannot recover from.
  • The harness identifies a failure mode, such as the agent repeating the same action without progress.
  • The agent explicitly invokes an exit action or sets a completion flag. ([View Highlight](https://read.readwise.io/read/01kxecr3ychsa6wzgry7qh9akd))
- **The Agent Loop**
  A cyclical, iterative execution pattern inside a single agent run where the harness repeatedly:
  1. **Assembles execution context**: system instructions, conversation state, retrieved memory, tool outputs, and any relevant external data.
  2. **Invokes a reasoning model** to decide what to do next.
  3. **Acts**: responds to the user, calls tools, writes memory or state, or updates its plan.
  Each cycle appends its trace (assistant messages, tool outputs, state updates) to the context and repeats until a termination check ends the run. Context-window pressure and operational safety (timeouts, iteration caps, budget guards) are first-class concerns, not afterthoughts. ([View Highlight](https://read.readwise.io/read/01kxecrs1ay0bqg1ka73n8v9p2))
- The agent loop is not a fixed pattern. The simple design presented above evolves as memory, tooling, and opinionated scaffolding are added. The three levels below provide a framework for where a system currently sits and what engineering work lies ahead. Most production failures (agents that repeat themselves, lose context, or produce inconsistent results across sessions) trace back to a mismatch between task complexity and agent level.
  ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/m_fig5_levels_vertical-1.png) ([View Highlight](https://read.readwise.io/read/01kxecs3pycjknkkxegjsen560))
- At its simplest, the agent loop is an LLM that can call tools and return a response. There is no persistent memory, no external state, and no scaffolding beyond the loop itself. The loop iterates because tool results must be fed back to the model before it can produce a final answer.
  The code below demonstrates the pattern most developers encounter when building simple tool-calling agents:
  ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/fig6_level1_vertical-1-1-scaled.png) ([View Highlight](https://read.readwise.io/read/01kxecsdgegahwq2skf97m8rrw))
- Level 1 is where most developers start, and it is genuinely useful for self-contained tasks. Its limitation is structural: the agent has no recollection of previous conversations. Every run starts cold, the context window is the only memory it has, and it resets completely when the run ends. On any multi-turn or long-horizon task, it will repeat work it already did, lose track of decisions made earlier in the session, and produce output that contradicts its own prior responses. ([View Highlight](https://read.readwise.io/read/01kxecsnemdhc89kks94sjnjqp))
- At Level 2, operations begin to appear inside the agent loop. Memory is read before the LLM is called, and memory is written after the agent acts. The loop now has a lifecycle. At Level 1, the loop can be seen as a transport mechanism for tool calls. At Level 2, the loop becomes a reasoning engine with state. This is also where the distinction between a memory-augmented agent and a memory-aware agent becomes consequential.
  • **Memory-augmented agents** retrieve and inject information into context. They read from memory, but they do not actively manage it. Memory is something that happens to them.
  • **Memory-aware agents** treat memory as a first-class engineering concern. They encode, store, retrieve, inject, and forget, actively managing their cognitive state within each run and across sessions. Level 2 is where you begin building memory-aware agents. ([View Highlight](https://read.readwise.io/read/01kxect0fcv1q5pjb0pxf1m7pg))
- ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/fig7_aware_vertical-1-1-scaled.png)
  Figure 7: Memory-augmented agents read from memory; memory-aware agents manage it ([View Highlight](https://read.readwise.io/read/01kxecvfm22mq6hcsnk2kpx3q4))
- Level 2 makes context assembly trade-offs immediately visible. Adding more memory types (conversation history, retrieved documents, entity records, workflow patterns) improves grounding and action selection. On the other hand, it also introduces cost: more tokens, higher latency, and a greater risk of injecting irrelevant or stale content that misleads the model rather than informing it.
  There are a few failure modes worth mentioning:
  1. **Noisy retrieval**: semantically similar documents that are not actually relevant to the current query. Mitigation approaches are implemented via relevance thresholds and precision-oriented retrieval strategies such as hybrid search and pre-, post-, and in-filtering methods in retrieval pipelines.
  2. **Stale memory**: data can quickly become irrelevant in a fast-paced problem domain: cached facts, entity records, or summaries that are no longer accurate. Mitigate with TTL policies and update-on-write patterns.
  3. **Tool schema overload**: context bloat is a common problem, and it is most prevalent in tool-calling agents with too many tool definitions passed to the model at once, degrading tool selection accuracy. Mitigate with semantic tool retrieval rather than exhaustive enumeration; this is shown in the companion notebook for this piece. ([View Highlight](https://read.readwise.io/read/01kxecvyad98e5fds5gkr1fdn9))
- each serving a specific cognitive function:
  • **Conversational memory**: episodic chat history retrieved by thread ID via a standard SQL table. Exact lookup, no similarity search required.
  • **Knowledge base memory**: semantic memory backed by a vector-enabled SQL table with HNSW indexing for similarity search.
  • **Workflow memory**: procedural memory storing learned action patterns and tool sequences.
  • **Toolbox memory**: a vector-indexed registry of tool definitions enabling semantic discovery rather than exhaustive schema enumeration.
  • **Entity memory**: LLM-extracted people, places, and systems, persisted across sessions.
  • **Summary memory**: compressed context for long conversations, with just-in-time expansion when the agent needs the full content.
  At Level 2, the loop is no longer just executing tools. It is actively managing its own cognitive state.
  At this point, developers understand not only which operations they require inside the loop; more opinionated scaffolding and harness begin to form around the agent loop itself.
  Operations now exist both within the loop and outside it, and there are deliberate architectural choices about which side of the boundary each operation belongs on. This is where agent engineering becomes opinionated, and where context engineering and memory engineering become distinct disciplines with separate concerns. ([View Highlight](https://read.readwise.io/read/01kxecxxgfwwhk0gnya47myfvz))
- In a Level 3 agent loop, some operations should be automatic. The agent should never have to decide whether to load its own conversation history. Others should be agent-triggered: the agent decides when to search the web, not the harness.
  Getting this boundary wrong produces either context bloat, when too much is loaded automatically, or missed context, when content that should always be present is left to the model’s discretion. ([View Highlight](https://read.readwise.io/read/01kxecy7c0jg8y0btvfv8dam2h))
- Three techniques only become necessary at Level 3. Below Level 3, your context is manageable by construction. At Level 3, with memory reads, multiple tool calls, and iterated reasoning, it is not.
  • **Context window monitoring**: tracking token usage across iterations to detect when compaction is needed before the window fills and performance degrades.
  • **Conversation compaction**: replacing verbose chat history with compressed summaries while preserving originals in the database. The notebook marks messages with a summary_id rather than deleting them, keeping the full record available for audit and on-demand expansion.
  • **Tool output offloading**: persisting full tool outputs to a tool log table and replacing them in context with a compact one-line reference. ([View Highlight](https://read.readwise.io/read/01kxecyeegg27rfgwmha14dvgw))
- t Level 3, the number of available tools is unlikely to stay small. Passing every tool schema to the model on every iteration is a known failure mode: tool selection accuracy drops as the schema list grows, and token costs climb regardless of how many tools are actually relevant.
  The notebook addresses this with a **Toolbox**: a vector-indexed registry of tool definitions where only semantically relevant tools are retrieved and passed to the model for each query. Tools are registered with LLM-augmented metadata so that embeddings capture intent and use case, not just function signatures:
  Tool call failures are a production reality. Network errors, rate limits, and transient service issues occur regularly. If the harness retries a failed tool call naively, it risks executing a side-effecting operation twice: writing a record, sending a message, or triggering a payment more than once. ([View Highlight](https://read.readwise.io/read/01kxecytj466tqdew5d0d44md3))
- The mitigation is idempotency: assigning each tool call a stable key before execution so that retries can be safely distinguished from duplicate calls. This is harness-level engineering, not model-level reasoning, and it belongs in the Level 3 design.
  At Level 3, the harness also starts to affect inference economics through prompt caching. Most LLM providers implement prefix-based caching: if the beginning of a prompt is identical to a recent request, the cached computation can be reused, reducing latency and cost.
  The implication for agent design is concrete. Rewriting earlier messages mid-conversation, to clean up history, reorder context, or inject new system instructions inline, breaks prefix stability and degrades cache hit rates. The correct pattern is to append new instructions rather than modifying existing message history. The [Codex implementation](https://openai.com/index/unrolling-the-codex-agent-loop/) established this explicitly: old prompts are preserved as exact prefixes of new prompts specifically to maintain caching benefits across long multi-step runs.
  Level 3 is where the agent harness becomes a system in its own right. The inner loop, assembling context, invoking the model, and acting, has not changed. What has changed is everything around it: the scaffolding that feeds it, the operational constraints that govern it, and the persistence layer that gives it continuity across time and sessions. ([View Highlight](https://read.readwise.io/read/01kxeczdvjzvv38ferwdtmzygd))
- The agent loop does not run in isolation. It sits inside a wider system of loops, and the engineering decisions made inside the agent loop are shaped by what happens in the loops around it.
  Three matter most to agent engineers and memory engineers: the training loop that produced the model, the feedback loop that signals whether the system is working, and the human loop that bounds its authority.
  ![](https://blogs.oracle.com/developers/wp-content/uploads/sites/129/2026/06/fig8_loops_vertical-1-scaled.png)
  Figure 8: The loops interconnected: the training loop produces the model, the agent loop generates experience, and the memory layer routes that experience back as training signal
  **The training loop is the cycle that produced the model in the first place: data collection, gradient updates, evaluation, and release.** It operates offline, at a timescale of days or weeks, on curated datasets. The agent loop operates online, in real time, on live interactions.
  Today these two loops are largely decoupled. Training happens, weights are frozen, and the agent loop runs on top of those fixed weights. The apparent learning you observe within a session, an agent recalling prior context or adapting to corrections, is not weight updating. It is retrieval. The agent is not learning; it is reading from memory.
  This separation defines the boundary of what the agent loop can and cannot accomplish on its own. It can accumulate experience through memory operations. It cannot change the underlying model without a training cycle. Understanding this boundary tells you which problems belong to memory engineering and which require retraining.
  Every action the agent takes produces feedback. Tool results are feedback. User corrections are feedback. Evaluation metrics (hallucination rate, task completion, citation accuracy) are feedback at a system level. ([View Highlight](https://read.readwise.io/read/01kxeczza7pwbm0fv6we7w3q6h))
- At Level 3, the agent harness begins to make the feedback loop explicit and instrumentable. The notebook’s context window growth chart is a primitive example: watching whether token counts stabilize across runs tells you whether your context engineering is actually working. More sophisticated systems route evaluation signals back into memory stores, marking retrieved content as reliable or unreliable based on downstream outcomes, and gradually improving retrieval quality without retraining.
  The feedback loop is what turns an agent into a system that improves over time. Without it, every invocation starts from the same baseline regardless of what the agent has done before.
  Long-horizon tasks regularly reach decision points where the agent lacks the information, authority, or confidence to proceed without human input. The human-in-the-loop pattern introduces a pause condition: the agent surfaces a question or proposed action, waits for review or correction, and then continues.
  This is a stop condition of a different kind. Rather than halting because the task is finished, the loop pauses because it has reached the boundary of its autonomous authority. Designing this well involves two things: knowing in advance where those boundaries should sit for a given workflow, and ensuring the agent communicates specifically when it reaches one. A generic request for help is insufficient. The agent must surface a precise description of what information or decision is blocking progress.
  Human-in-the-loop is not a safety net for when the agent fails. It is a deliberate architectural decision about where human judgment adds the most value in a system. The agent loop handles what can be reasoned about autonomously. The human loop handles what requires authority, context, or accountability that the agent does not have. ([View Highlight](https://read.readwise.io/read/01kxed0b0n6e7jx0rrw3f7msgw))
- **Design your memory layer accordingly.**
  1. **What is the agent loop?**
  The agent loop is the repeating cycle a harness runs within a single agent turn: assemble context, invoke the model to reason, act on its decision, and repeat until a stop condition ends the run. It exists because long-horizon tasks cannot be completed in a single LLM call. ([View Highlight](https://read.readwise.io/read/01kxed0s1j6d5pbsbr24c6034y))
- 2. **How do you stop an agent loop from running forever?**
  Define explicit stop conditions in the harness: a terminal message with no pending tool calls, a goal-completion check, an iteration cap, a wall-clock timeout, unrecoverable errors, and failure mode detection such as the agent repeating the same tool call with identical arguments. ([View Highlight](https://read.readwise.io/read/01kxed0yczm6wa21tf9wj68611))
- 3. **What is the difference between a memory-augmented agent and a memory-aware agent?**
  A memory-augmented agent retrieves and injects information into context but does not manage it; memory is something that happens to the agent. A memory-aware agent encodes, stores, retrieves, injects, and forgets, actively managing its cognitive state within each run and across sessions. ([View Highlight](https://read.readwise.io/read/01kxed11kgs0b084eat21czqt5))
- 4. **How do I know which level my agent system sits at?**
  If there is no persistence beyond the context window, it is Level 1. If memory is read before the model call and written after the agent acts, it is Level 2. If there is a deliberate boundary between programmatic and agent-triggered operations, with techniques such as compaction, tool output offloading, and semantic tool discovery, it is Level 3. ([View Highlight](https://read.readwise.io/read/01kxed15ebya25rypyxy3ksybd))
- 5. **What connects the agent loop to the training loop?**
  The memory layer. Agent runs generate experience: episodic records, entities, workflows, and evaluation signals. With continual learning, that experience becomes training signal. ([View Highlight](https://read.readwise.io/read/01kxed1hfdkgw9w9fk3d21z1e3))
