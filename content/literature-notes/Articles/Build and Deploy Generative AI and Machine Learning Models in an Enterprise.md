---
author: "[[Google Cloud]]"
title: 'Build and Deploy Generative AI and Machine Learning Models in an Enterprise'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png)

## Metadata
- Author: [[Google Cloud]]
- Full Title: Build and Deploy Generative AI and Machine Learning Models in an Enterprise
- URL: https://cloud.google.com/architecture/genai-mlops-blueprint

## Highlights
- The enterprise generative AI and ML blueprint takes a layered approach to provide the capabilities that enable generative AI and ML model training. The blueprint is intended to be deployed and controlled through an [ML operations (MLOps)](https://cloud.google.com/vertex-ai/docs/start/introduction-mlops) workflow. The following diagram shows how the MLOps layer deployed by this blueprint relates to other layers in your environment.
  ![The blueprint layers.](https://cloud.google.com/static/architecture/genai-mlops-blueprint/images/mlops-layers.svg) ([View Highlight](https://read.readwise.io/read/01j970h4a4ck7tp184agr1qpf8))
- The enterprise generative AI and ML blueprint provides you with the ability to work directly with data. You can create models in an interactive (development) environment and promote the models into an operational (production or non-production) environment.
  In the interactive environment, you develop ML models using [Vertex AI Workbench](https://cloud.google.com/vertex-ai/docs/workbench/introduction), which is a Jupyter Notebook service that is managed by Google. You build data extraction, data transformation, and model-tuning capabilities in the interactive environment and promote them into the operational environment.
  In the operational (non-production) environment, you use pipelines to build and test their models in a repeatable and controllable fashion. After you are satisfied with the performance of the model, you can deploy the model into the operational (production) environment. The following diagram shows the various components of the interactive and operational environments.
  ![The blueprint architecture.](https://cloud.google.com/static/architecture/genai-mlops-blueprint/images/mlops-architecture.svg) ([View Highlight](https://read.readwise.io/read/01j970htsch88hpntbpc31bh7g))
- This diagram includes the following:
  1. **Deployment systems:** Services such as [Service Catalog](https://cloud.google.com/service-catalog) and [Cloud Build](https://cloud.google.com/build) deploy Google Cloud resources into the interactive environment. Cloud Build also deploys Google Cloud resources and model-building workflows into the operational environment.
  2. **Data sources:** Services such as [BigQuery](https://cloud.google.com/bigquery), [Cloud Storage](https://cloud.google.com/storage), [Spanner](https://cloud.google.com/spanner), and [AlloyDB for PostgreSQL](https://cloud.google.com/alloydb/docs/overview) host your data. The blueprint provides example data in BigQuery and Cloud Storage.
  3. **Interactive environment:** An environment where you can interact directly with data, experiment on models, and build pipelines for use in the operational environment.
  4. **Operational environment:** An environment where you can build and test your models in a repeatable manner and then deploy models into production.
  5. **Model services:** The following services support various MLOps activities:
  • [Vertex AI Feature Store](https://cloud.google.com/vertex-ai/docs/featurestore#vaifs) serves feature data to your model.
  • [Model Garden](https://cloud.google.com/vertex-ai/docs/start/explore-models) includes an ML model library that lets you use Google models and select open-source models.
  • [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) manages the lifecycle of your ML models.
  6. **Artifact storage:** These services store the code and containers and for your model development and pipelines. These services include the following:
  • [Artifact Registry](https://cloud.google.com/artifact-registry/docs) stores containers that are used by pipelines in the operational environment to control the various stages of the model development.
  • Git repository stores the code base of the various components that are used in the model development. ([View Highlight](https://read.readwise.io/read/01j970j42jdx7zvr89rwth8dr4))
- When you deploy the blueprint, you create four types of user groups: an MLOps engineer group, a DevOps engineer group, a data scientist group, and a data engineer group. The groups have the following responsibilities:
  • The **MLOps engineer** group develops the Terraform templates used by the Service Catalog. This team provides templates used by many models.
  • The **DevOps engineer** group approves the Terraform templates that the MLOps developer group creates.
  • The **data scientist** group develops models, pipelines, and the containers that are used by the pipelines. Typically, a single team is dedicated to building a single model.
  • The **Data engineer** group approves the use of the artifacts that the data science group creates. ([View Highlight](https://read.readwise.io/read/01j970jcftq0ne4qmwtpck6mk5))
- To let you explore data and develop models while maintaining your organization's security posture, the interactive environment provides you with a controlled set of actions you can perform. You can deploy Google Cloud resources using one of the following methods:
  • Using Service Catalog, which is preconfigured through automation with resource templates
  • Building code artifacts and committing them to Git repositories using Vertex AI Workbench notebooks
  The following diagram depicts the interactive environment.
  ![The blueprint interactive environment.](https://cloud.google.com/static/architecture/genai-mlops-blueprint/images/mlops-interactive-flow.svg) ([View Highlight](https://read.readwise.io/read/01j970jyd22v577yx61rqz8jj7))
- A typical interactive flow has the following steps and components associated with it:
  1. Service Catalog provides a curated list of Google Cloud resources that data scientists can deploy into the interactive environment. The data scientist deploys the Vertex AI Workbench notebook resource from the Service Catalog.
  2. Vertex AI Workbench notebooks are the main interface that data scientists use to work with Google Cloud resources that are deployed in the interactive environment. The notebooks enable data scientists to pull their code from Git and update their code as needed.
  3. Source data is stored outside of the interactive environment and managed separately from this blueprint. Access to the data is controlled by a [data owner](https://datagovernance.com/assigning-data-ownership/). Data scientists can request read access to source data, but data scientists can't write to the source data.
  4. Data scientists can transfer source data into the interactive environment into resources created through the Service Catalog. In the interactive environment, data scientists can read, write, and manipulate the data. However, data scientists can't transfer data out of the interactive environment or grant access to resources that are created by Service Catalog. BigQuery stores structured data and semi-structured data and Cloud Storage stores unstructured data.
  5. Feature Store provides data scientists with low-latency access to features for model training.
  6. Data scientists train models using Vertex AI [custom training jobs](https://cloud.google.com/vertex-ai/docs/training/create-custom-job). The blueprint also uses Vertex AI for [hyperparameter tuning](https://cloud.google.com/vertex-ai/docs/training/hyperparameter-tuning-overview).
  7. Data scientists evaluate models through the use of [Vertex AI Experiments](https://cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments) and [Vertex AI TensorBoard](https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-introduction). Vertex AI Experiments lets you run multiple trainings against a model using different parameters, modeling techniques, architectures, and inputs. Vertex AI TensorBoard lets you track, visualize, and compare the various experiments that you ran and then choose the model with the best observed characteristics to validate.
  8. Data scientists validate their models with [Vertex AI evaluation](https://cloud.google.com/vertex-ai/docs/evaluation/using-model-evaluation). To validate their models, data scientists split the source data into a training data set and a validation data set and run a [Vertex AI evaluation](https://cloud.google.com/vertex-ai/docs/evaluation/using-model-evaluation) against your model.
  9. Data scientists build containers using Cloud Build, store the containers in Artifact Registry, and use the containers in pipelines that are in the operational environment. ([View Highlight](https://read.readwise.io/read/01j970k891vqj29nxtmjqvskkh))
- Operational environment
  The operational environment uses a Git repository and pipelines. This environment includes the production environment and non-production environment of the enterprise foundation blueprint. In the non-production environment, the data scientist selects a pipeline from one of the pipelines that was developed in the interactive environment. The data scientist can run the pipeline in the non-production environment, evaluate the results, and then determine which model to promote into the production environment.
  The blueprint includes an example pipeline that was built using Cloud Composer and an example pipeline that was built using Vertex AI Pipelines. The diagram below shows the operational environment.
  ![The blueprint operational environment.](https://cloud.google.com/static/architecture/genai-mlops-blueprint/images/mlops-operational-flow.svg) ([View Highlight](https://read.readwise.io/read/01j970kqg245cbf2xpx2wksa8s))
- A typical operational flow has the following steps:
  1. A data scientist merges a development branch successfully into a deployment branch.
  2. The merge into the deployment branch triggers a Cloud Build pipeline.
  3. One of the following items occurs:
  • If a data scientist is using Cloud Composer as the orchestrator, the Cloud Build pipeline moves a DAG into Cloud Storage.
  • If the data scientist is using Vertex AI Pipelines as the orchestrator, the pipeline moves a Python file into Cloud Storage.
  4. The Cloud Build pipeline triggers the orchestrator (Cloud Composer or Vertex AI Pipelines).
  5. The orchestrator pulls its pipeline definition from Cloud Storage and begins to execute the pipeline.
  6. The pipeline pulls a container from Artifact Registry that is used by all stages of the pipeline to trigger Vertex AI services.
  7. The pipeline, using the container, triggers a data transfer from the source data project into the operational environment.
  8. Data is transformed, validated, split, and prepared for model training and validation by the pipeline.
  9. If needed, the pipeline moves data into Vertex AI Feature Store for easy access during model training.
  10. The pipeline uses Vertex AI custom model training to train the model.
  11. The pipeline uses Vertex AI evaluation to validate the model.
  12. A validated model is [imported](https://cloud.google.com/vertex-ai/docs/model-registry/import-model) into the [Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) by the pipeline.
  13. The imported model is then used to generate predictions through [online predictions](https://cloud.google.com/vertex-ai/docs/predictions/overview#online_predictions) or [batch predictions](https://cloud.google.com/vertex-ai/docs/predictions/overview#online_predictions).
  14. After the model is deployed into the production environment, the pipeline uses [Vertex AI Model Monitoring](https://cloud.google.com/vertex-ai/docs/model-monitoring/overview) to detect if the model's performance degrades by monitoring for [training-serving skew](https://cloud.google.com/vertex-ai/docs/model-monitoring/overview#calculating-skew-and-drift) and [prediction drift](https://cloud.google.com/vertex-ai/docs/model-monitoring/overview#calculating-skew-and-drift). ([View Highlight](https://read.readwise.io/read/01j970kw0rxay1snfej0ve1gnb))
- The blueprint uses a series of Cloud Build pipelines to provision the blueprint infrastructure, the pipeline in the operational environment, and the containers used to create generative AI and ML models. The pipelines used and the resources provisioned are the following:
  • **[Infrastructure pipeline](https://cloud.google.com/architecture/security-foundations/deployment-methodology#infrastructure-pipeline):** This pipeline is part of the enterprise foundation blueprint. This pipeline provisions the Google Cloud resources that are associated with the interactive environment and operational environment.
  • **Interactive pipeline:** The interactive pipeline is part of the interactive environment. This pipeline copies Terraform templates from a Git repository to a Cloud Storage bucket that Service Catalog can read. The interactive pipeline is triggered when a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) is made to merge with the main branch.
  • **Container pipeline:** The blueprint includes a Cloud Build pipeline to build containers used in the operational pipeline. Containers that are deployed across environments are immutable container images. Immutable container images help ensure that the same image is deployed across all environments and cannot be modified while they are running. If you need to modify the application, you must rebuild and redeploy the image. Container images that are used in the blueprint are stored in Artifact Registry and referenced by the configuration files that are used in the operational pipeline.
  • **Operational pipeline:** The operational pipeline is part of the operational environment. This pipeline copies DAGs for Cloud Composer or Vertex AI Pipelines, which are then used to build, test, and deploy models. ([View Highlight](https://read.readwise.io/read/01j970m33vqzqdxp258ngv83j2))
- The interactive environment uses Service Catalog to let data scientists deploy Google Cloud resources in a manner that complies with their enterprise's security posture. When developing a model that requires Google Cloud resources, such as a Cloud Storage bucket, the data scientist selects the resource from the Service Catalog, configures the resource, and deploys the resource in the interactive environment. Service Catalog contains pre-configured templates for various Google Cloud resources that the data scientist can deploy in the interactive environment. The data scientist cannot alter the resource templates, but can configure the resources through the configuration variables that the template exposes. The following diagram shows the structure of how the Service Catalog and interactive environment interrelate.
  ![The blueprint catalog.](https://cloud.google.com/static/architecture/genai-mlops-blueprint/images/mlops-service-catalog.svg) ([View Highlight](https://read.readwise.io/read/01j970m6hmhczwjdvp9anhy2pm))
