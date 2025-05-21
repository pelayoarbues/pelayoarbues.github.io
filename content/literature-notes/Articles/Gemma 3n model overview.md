---
author: "[[Google AI for Developers]]"
title: 'Gemma 3n model overview'
date: "2025-05-21"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/share.png)

## Metadata
- Author: [[Google AI for Developers]]
- Full Title: Gemma 3n model overview
- URL: https://ai.google.dev/gemma/docs/gemma-3n

## Highlights
- Gemma 3n is a generative AI model optimized for use in everyday devices, such as phones, laptops, and tablets. This model includes innovations in parameter-efficient processing, including Per-Layer Embedding (PLE) parameter caching and a MatFormer model architecture that provides the flexibility to reduce compute and memory requirements. These models feature audio input handling, as well as text and visual data. ([View Highlight](https://read.readwise.io/read/01jvs766kytmp2detbjgtmx08k))
- As with other Gemma models, Gemma 3n is provided with open weights and licensed for responsible [commercial use](https://ai.google.dev/gemma/terms), allowing you to tune and deploy it in your own projects and applications. ([View Highlight](https://read.readwise.io/read/01jvs769vnm84wx2gyf1gtjqcd))
- emma 3n includes the following key features:
  • **Audio input**: Process sound data for speech recognition, translation, and audio data analysis.
  • **Visual and text input**: Multimodal capabilities let you handle vision, sound, and text to help you understand and analyze the world around you. ([View Highlight](https://read.readwise.io/read/01jvs76hyyzhkp4c8pcaa2jg2x))
- • **PLE caching**: Per-Layer Embedding (PLE) parameters contained in these models can be cached to fast, local storage to reduce model memory run costs. [Learn more](https://ai.google.dev/gemma/docs/gemma-3n/#ple-caching)
  • **MatFormer architecture:** Matryoshka Transformer architecture allows for selective activation of the models parameters per request to reduce compute cost and response times. [Learn more](https://ai.google.dev/gemma/docs/gemma-3n/#matformer)
  • **Conditional parameter loading:** Bypass loading of vision and audio parameters in the model to reduce the total number of loaded parameters and save memory resources. [Learn more](https://ai.google.dev/gemma/docs/gemma-3n/#conditional-parameter)
  • **Wide language support**: Wide linguistic capabilities, trained in over 140 languages.
  • **32K token context**: Substantial input context for analyzing data and handling processing tasks. ([View Highlight](https://read.readwise.io/read/01jvs76rc9nbs350hzz3yjsfwc))
- Gemma 3n models are listed with parameter counts, such as **`E2B`** and **`E4B`**, that are *lower* than the total number of parameters contained in the models. The **`E`** prefix indicates these models can operate with a reduced set of Effective parameters. This reduced parameter operation can be achieved using the flexible parameter technology built into Gemma 3n models to help them run efficiently on lower resource devices. ([View Highlight](https://read.readwise.io/read/01jvs76wcsd5yhbt3xbfwmy1ft))
- The parameters in Gemma 3n models are divided into 4 main groups: text, visual, audio, and per-layer embedding (PLE) parameters. With standard execution of the E2B model, over 5 billion parameters are loaded when executing the model. However, using parameter skipping and PLE caching techniques, this model can be operated with an effective memory load of just under 2 billion (1.91B) parameters, as illustrated in Figure 1. ([View Highlight](https://read.readwise.io/read/01jvs76xsgphpj0egcrak8f5vr))
- Using these parameter offloading and selective activation techniques, you can run the model with a very lean set of parameters or activate additional parameters to handle other data types such as visual and audio. These features enable you to ramp up model functionality or ramp down capabilities based on device capabilities or task requirements. The following sections explain more about the parameter efficient techniques available in Gemma 3n models. ([View Highlight](https://read.readwise.io/read/01jvs771a6vez3qyw72fd934na))
- Gemma 3n models include Per-Layer Embedding (PLE) parameters that are used during model execution to create data that enhances the performance of each model layer. The PLE data can be generated separately, outside the operating memory of the model, cached to fast storage, and then added to the model inference process as each layer runs. This approach allows PLE parameters to be kept out of the model memory space, reducing resource consumption while still improving model response quality. ([View Highlight](https://read.readwise.io/read/01jvs775hp83x6mh9vvdy8855y))
