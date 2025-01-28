---
author: [[huggingface.co]]
title: "We Just Gave Sight to Smolagents"
date: 2025-01-28
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/smolagents-can-see/thumbnail.png)

## Metadata
- Author: [[huggingface.co]]
- Full Title: We Just Gave Sight to Smolagents
- URL: https://huggingface.co/blog/smolagents-can-see

## Highlights
- We have added vision support to smolagents, which unlocks the use of vision language models in agentic pipelines natively. ([View Highlight](https://read.readwise.io/read/01jjp74b20v8v30q78x324j2zn))
- In the agentic world, many capabilities are hidden behind a vision wall. A common example is web browsing: web pages feature rich visual content that you never fully recover by simply extracting their text, be it the relative position of objects, messages transmitted through color, specific icons… In this case, vision is a real superpower for agents. So we just added this capability to our [smolagents](https://github.com/huggingface/smolagents)!
  Teaser of what this gives: an agentic browser that navigates the web in complete autonomy! ([View Highlight](https://read.readwise.io/read/01jjp74mn5xb9r8rp87etnfz4r))
- 🤔 How do we want to pass images to agents? Passing an image can be done in two ways:
  1. You can have images directly available to the agent at start. This is often the case for Document AI.
  2. Sometimes, images need to be added dynamically. A good example is when a web browser just performed an action, and needs to see the impact on its viewports. ([View Highlight](https://read.readwise.io/read/01jjp74w9e33ysf8phpjsmkxdp))
- 1. Pass images once at agent start
  For the case where we want to pass images at once, we added the possibility to pass a list of images to the agent in the `run` method: `agent.run("Describe these images:", images=[image_1, image_2])` .
  These image inputs are then stored in the `task_images` attribute of `TaskStep` along with the prompt of the task that you'd like to accomplish.
  When running the agent, they will be passed to the model. This comes in handy with cases like taking actions based on long PDFs that include visual elements.
  [](https://huggingface.co/blog/smolagents-can-see/#2-pass-images-at-each-step-⇒-use-a-callback) ([View Highlight](https://read.readwise.io/read/01jjp756gy2kvemm8qygs9pry7))
- Pass images at each step ⇒ use a callback
  How to dynamically add images into the agent’s memory?
  To find out, we first need to understand how our agents work.
  All agents in `smolagents` are based on the singular `MultiStepAgent` class, which is an abstraction of the ReAct framework. On a basic level, this class performs actions on a cycle of following steps, where existing variables and knowledge are incorporated into the agent logs as follows:
  • **Initialization:** the system prompt is stored in a `SystemPromptStep`, and the user query is logged into a `TaskStep`.
  • **ReAct Loop (While):**
  1. Use `agent.write_inner_memory_from_logs()` to write the agent logs into a list of LLM-readable [chat messages](https://huggingface.co/docs/transformers/en/chat_templating).
  2. Send these messages to a `Model` object to get its completion. Parse the completion to get the action (a JSON blob for `ToolCallingAgent`, a code snippet for `CodeAgent`).
  3. Execute the action and logs result into memory (an `ActionStep`).
  4. At the end of each step, run all callback functions defined in `agent.step_callbacks`. ⇒ This is where we added support to images: make a callback that logs images into memory!
  The figure below details this process:
  ![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/smolagents-can-see/diagram_adding_vlms_smolagents.png) ([View Highlight](https://read.readwise.io/read/01jjp75vkc45k18v3atrt12xgy))
- As you can see, for use cases where images are dynamically retrieved (e.g. web browser agent), we support adding images to the model’s `ActionStep`, in attribute `step_log.observation_images`.
  This can be done via a callback, which will be run at the end of each step. ([View Highlight](https://read.readwise.io/read/01jjp77sh57bf17fry05nstyax))
- We’re going to use [helium](https://github.com/mherrmann/helium). It provides browser automations based on `selenium`: this will be an easier way for our agent to manipulate webpages. ([View Highlight](https://read.readwise.io/read/01jjp783e1p4gmz26ents2f1fx))
- The agent itself can use helium directly, so no need for specific tools: it can directly use helium to perform actions, such as `click("top 10")` to click the button named "top 10" visible on the page. We still have to make some tools to help the agent navigate the web: a tool to go back to the previous page, and another tool to close pop-ups, because these are quite hard to grab for `helium` since they don’t have any text on their close buttons. ([View Highlight](https://read.readwise.io/read/01jjp78edgkcna1g2qe42f6q3m))
- For now, the agent has no visual input. So let us demonstrate how to dynamically feed it images in its step logs by using a callback. We make a callback `save_screenshot` that will be run at the end of each step. ([View Highlight](https://read.readwise.io/read/01jjp78nh984r913vjcbk688bv))
- The most important line here is when we add the image in our observations images: `step_log.observations_images = [image.copy()]`.
  This callback accepts both the `step_log`, and the `agent` itself as arguments. Having `agent` as an input allows to perform deeper operations than just modifying the last logs.
  Let's make a model. We've added support for images in all models. Just one precision: when using TransformersModel with a VLM, for it to work properly you need to pass `flatten_messages_as_text` as `False` upon initialization, like: ([View Highlight](https://read.readwise.io/read/01jjp78v59xqa7qx91sn2jqyv3))
- Now let’s move on to defining our agent. We set the highest `verbosity_level` to display the LLM’s full output messages to view its thoughts, and we increased `max_steps` to 20 to give the agent more steps to explore the web. We also provide it with our callback `save_screenshot` defined above. ([View Highlight](https://read.readwise.io/read/01jjp796qmp63kmj19tzkv1mqb))
- Note, however, that this task is really hard: depending on the VLM that you use, this might not always work. Strong VLMs like Qwen2VL-72B or GPT-4o succeed more often.
  [](https://huggingface.co/blog/smolagents-can-see/#next-steps) ([View Highlight](https://read.readwise.io/read/01jjp79kz16jbwbs1y41ns6rhy))
