---
author: [[BentoML Documentation]]
title: 'Introduction#'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://docs.bentoml.com/en/latest/_static/img/bentoml-banner.jpg)

## Metadata
- Author: [[BentoML Documentation]]
- Full Title: Introduction#
- URL: https://docs.bentoml.org/en/latest/get-started/introduction.html

## Highlights
- BentoML is designed for teams working to bring machine learning (ML) models into production in a reliable, scalable, and cost-efficient way. In particular, AI application developers can leverage BentoML to easily integrate state-of-the-art pre-trained models into their applications. By seamlessly bridging the gap between model creation and production deployment, BentoML promotes collaboration between developers and in-house data science teams. ([View Highlight](https://read.readwise.io/read/01hsgat9jah5c01jg0wsc5arjw))
- ML projects often involve different roles and complex collaboration. BentoML simplifies this process through a unified distribution format - a file archive known as a Bento. With BentoML’s open standard and SDK for AI applications, you can package all the necessary packages and dependencies into a Bento. ([View Highlight](https://read.readwise.io/read/01hsgatw0q9fm988m7zzqhqqc2))
- BentoML provides the flexibility and ease to build any AI applications with any tools your team prefers. Whether you want to import models from any model hub or bring your own models built with frameworks such as PyTorch and TensorFlow, you can use BentoML’s local Model Store to manage them and build applications on top of them. ([View Highlight](https://read.readwise.io/read/01hsgav4jap6z7vywdhrdqf8ds))
- BentoML’s proven open-source architecture ensures high performance for your AI applications through efficient resource utilization and latency reduction techniques. It supports model inference parallelization and adaptive batching. With built-in optimization for specific model architectures (like OpenLLM for LLMs) and support for high-performance runtimes like ONNX-runtime and TorchScript, BentoML delivers faster response time and higher throughput, offering scalable and cost-efficient backbone infrastructure for any AI applications. ([View Highlight](https://read.readwise.io/read/01hsgavf1qpg4650j4qhzx2p4z))
- BentoML is designed with a Python-first approach, ensuring the effortless scalability of complex AI workloads. It simplifies the architecture of modern AI applications by allowing you to compose multiple models to run either concurrently or sequentially, across multiple GPUs or on a Kubernetes cluster. This flexibility extends to running and debugging your BentoML applications locally, whether you are using Mac, Windows, or Linux. ([View Highlight](https://read.readwise.io/read/01hsgavq5444fhw30c1qk1d2s2))
- 1. Model registration[#](https://docs.bentoml.org/en/latest/get-started/introduction.html#model-registration)
  To get started, you can save your model in the BentoML [Model Store](https://docs.bentoml.org/en/latest/get-started/introduction.html/../guides/model-store.html), a centralized repository for managing all local models. BentoML is compatible with a variety of models, including pre-trained models from Hugging Face or custom models trained on your custom datasets. The Model Store simplifies the process of iterating and evaluating different model versions, providing an efficient way to track and manage your ML assets.
  Note that for simple use cases, you can **skip this step** and use pre-trained models directly when creating your BentoML Service.
  2. Service creation[#](https://docs.bentoml.org/en/latest/get-started/introduction.html#service-creation)
  You create BentoML [Services](https://docs.bentoml.org/en/latest/get-started/introduction.html/../guides/services.html) by defining a `service.py` file, where you outline your model’s serving logic through class-based Services. In this file, you can define multiple Services for specific tasks like data preprocessing or model predictions if necessary. Each Service can be customized to handle its own input and output logic. You can test model serving and inference by running Services locally. During deploying, each Service can be independently scaled and separately deployed for better resolution utilization.
  3. Deployment[#](https://docs.bentoml.org/en/latest/get-started/introduction.html#deployment)
  Before deploying your AI application, you create a `bentofile.yaml` file, detailing all necessary build configurations such as Python dependencies and Docker settings. After that, you can choose either of the following ways to deploy your application.
  • With a single command, you [deploy your application to BentoCloud](https://docs.bentoml.org/en/latest/get-started/introduction.html/../guides/deployment.html). In this approach, your project is automatically packaged into a Bento, the standard distribution format for BentoML Services, uploaded and deployed on BentoCloud. This serverless platform offers scalable and hardware-optimized solutions for running AI applications.
  • You can manually package your project into a Bento and [containerize it as a Docker image](https://docs.bentoml.org/en/latest/get-started/introduction.html/../guides/containerization.html). This Docker image can then be deployed to any Docker-compatible environment, such as Kubernetes. This method provides more flexibility in deployment and is suitable for integration into your existing container orchestration system. ([View Highlight](https://read.readwise.io/read/01hsgawvvjvcwvz6xpy1t52hat))
