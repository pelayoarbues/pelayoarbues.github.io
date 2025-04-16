---
author: [[Julien Hurault]]
title: "Iceberg + Single Node Engines - by Julien Hurault
Iceberg + Single Node Engines"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substack-post-media.s3.amazonaws.com/public/images/ad9898c3-ff88-4e51-9c68-23906fbdb574_1604x1182.png)

## Metadata
- Author: [[Julien Hurault]]
- Full Title: Iceberg + Single Node Engines - by Julien Hurault
Iceberg + Single Node Engines
- URL: https://juhache.substack.com/p/iceberg-single-node-engines

## Highlights
- The compute category has evolved a lot these past years
  We started with warehouses where compute and storage were tightly coupled.
  Next, we transitioned to solutions with separate compute and storage within the same provider.
  Now, we are adopting fully decoupled storage using Iceberg.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37438197-0082-4d04-a9d0-001db52b3692_1144x1522.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37438197-0082-4d04-a9d0-001db52b3692_1144x1522.png) ([View Highlight](https://read.readwise.io/read/01jff2nq842wdd6qpwk98q1bzx))
- The most significant advantage of this transition is the ease of integrating single-node engines (like DuckDB, Polars, and others) with the rest of the stack.
  Previously, taking parts of a pipeline outside the warehouse required a separate ETL to move data around.
  Building and maintaining this ETL often killed the ROI of using cheaper compute.
  With Iceberg as a bridge, we can now run workflows on different engines without copying data.
  I’ve been considering how to integrate these engines into a pipeline over the past few weeks. ([View Highlight](https://read.readwise.io/read/01jff2p7z95a4ab52qyda7k1gn))
- This is the most straightforward approach: run your entire dbt project in a single Docker container using DuckDB as the sole engine.
  The workflow looks like this:
  1. dbt sources are read via the DuckDB Iceberg [extension](https://duckdb.org/docs/extensions/iceberg)
  2. The dbt DAG is executed with DuckDB as the engine.
  3. Target tables are materialized to Iceberg using PyIceberg.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa393626e-7776-4252-bfda-e133f575ab09_2394x764.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa393626e-7776-4252-bfda-e133f575ab09_2394x764.png)
  Pros:
  • Simplicity
  • Efficient data passing across models
  Cons:
  • All models must fit in the instance’s memory
  • No materialization of intermediate models ([View Highlight](https://read.readwise.io/read/01jff2t0spq6jt884bgxmhtxcd))
- Option 2: one model = one worker
  In this model, each transformation is handled by a separate worker.
  This worker loads the source table into memory, performs the query, and writes the results to a destination Iceberg table.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b7ea038-0715-48a8-9e9d-6d8b3295b87a_1008x644.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b7ea038-0715-48a8-9e9d-6d8b3295b87a_1008x644.png)
  The code using DuckDB would look like this:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93fccabf-c43c-454a-b030-553e671097bb_1416x1032.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93fccabf-c43c-454a-b030-553e671097bb_1416x1032.png)
  The code is oversimplified here; it should be made more generic to accept queries, as well as source and destination tables as inputs.
  Instead of running a full materialization, we could switch to an incremental load.
  However, PyIceberg isn’t yet [optimized](https://apache-iceberg.slack.com/archives/C029EE6HQ5D/p1727170558522379) for MERGE INTO operations.
  Currently, the only option is to use OVERWRITE with an [overwrite_filter](https://py.iceberg.apache.org/reference/pyiceberg/table/#pyiceberg.table.Table.overwrite) matching updated rows, but I’ve experienced performance degradation with this method.
  Pros:
  • All models are materialized to Iceberg.
  • You can control the resources used by each model (instance size).
  Cons:
  • It only works as long as table fits in worker’s memory.
  • Inefficient incremental models. ([View Highlight](https://read.readwise.io/read/01jff2v02mxjs2apbevqm1veqz))
- Option 3: one partition = one worker
  One possible approach to counter the abovementioned limitations is to work at the partition level.
  I discussed this approach in a previous article:
  [](https://juhache.substack.com/p/debugging-data-pipelines)
  [
  ![Debugging Data Pipelines](https://substackcdn.com/image/fetch/w_140,h_140,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe059d486-468d-4773-9d1c-4e1883b15fd4_1274x988.png)
  ](https://juhache.substack.com/p/debugging-data-pipelines)
  [Debugging Data Pipelines](https://juhache.substack.com/p/debugging-data-pipelines)
  [](https://juhache.substack.com/p/debugging-data-pipelines)
  [](https://juhache.substack.com/p/debugging-data-pipelines)[Julien Hurault](https://substack.com/profile/35734446-julien-hurault)
  ·
  Jun 21
  [
  Read full story
  ](https://juhache.substack.com/p/debugging-data-pipelines)
  The idea is to divide a dataset into partitions that exist independently.
  Each partition is immutable and consistently overwritten, avoiding the row-level limitations of PyIceberg discussed earlier.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3da6180d-0a47-44e2-8b89-c7bb2851147a_952x708.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3da6180d-0a47-44e2-8b89-c7bb2851147a_952x708.png)
  Each worker is then sized to handle a single partition.
  Add more workers to process additional partitions for large backfills or initial loads—there’s no need for a particular ‘large’ instance.
  Limiting the number of concurrent workers can be beneficial in this setup, as too many can lead to excessive write conflicts and retries.
  This can be achieved by adding a buffer/queue from which each worker pulls partitions to process.
  To boost throughput, you can then allocate more memory to a worker and process multiple partitions in a single run (one Iceberg commit).
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F80729c4b-aad6-4478-9823-b614f8f67b6f_1510x994.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F80729c4b-aad6-4478-9823-b614f8f67b6f_1510x994.png)
  You might ask: what if I want to perform cross-partition aggregations?
  In that case, if a single worker isn’t large enough, our favorite data warehouses are here to help :)
  Pros:
  • Can handle large tables.
  • Offers better control over worker sizing as the tables grow.
  • Capable of handling large backfills and continuous loads with the same setup.
  Cons:
  • Requires an orchestrator to track which partitions to process.
  • Must control the number of concurrent writers.​ ([View Highlight](https://read.readwise.io/read/01jff2vk6pwre6pbk7jzjn65j1))
- AWS Implementation
  If your partition processing fits within the Lambda limitations of 10GB and 15 minutes, you can directly leverage the SQS + Lambda pattern.
  But that’s probably not the case, and you’ll probably need to move to ECS Fargate.
  ECS Fargate is an AWS service that allows you to run containers in a serverless manner.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3589f51-ab3d-44a9-8f9d-df2d7731748f_2006x404.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3589f51-ab3d-44a9-8f9d-df2d7731748f_2006x404.png)
  You can get large runners (up to 120GB, 16vpcu) that run containers hosted in ECR.
  This comes with some limitations:
  • Tasks must run in a VPC (a distinct IP is assigned to each task, so ensure enough IPs are available).
  • Has a longer cold start time than Lambda (~ 1 min).
  • Does not support SQS triggers.
  Since there is no direct SQS to Fargate trigger, we need to implement an additional SQS-watching service that will start new tasks based on the SQS queue depth:
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3cbf835f-eac8-4f3b-b85a-dcd1c81cbb7f_2022x1078.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3cbf835f-eac8-4f3b-b85a-dcd1c81cbb7f_2022x1078.png) ([View Highlight](https://read.readwise.io/read/01jff2w6cvzpt5pex8kk43pqd7))
- Orchestration
  Ideally, we would like to use a tool like dbt to handle model lineage, but dbt does not currently support remote execution in an ECS task or Iceberg (for now).
  Therefore, we must rely on an orchestrator to manage the various models.
  This orchestrator needs to perform the following tasks for each model:
  • 1: Get the partitions to update
  • 2: Trigger the processing of each partition (ECS task) while controlling concurrency.
  • 3: Wait for the processing of all the partitions
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93dc7556-b0c6-4a36-ae8c-9d41c43c8c84_1340x878.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93dc7556-b0c6-4a36-ae8c-9d41c43c8c84_1340x878.png)
  This can be done with various orchestrators:
  • Step function with Map + ECS RunTask state
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99da7881-a062-4bfc-a751-cc2ed7e02e2a_936x1154.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99da7881-a062-4bfc-a751-cc2ed7e02e2a_936x1154.png)
  • Airflow with EcsRunTaskOperator + Dynamic Task Mapping
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F241affaf-b765-4215-a2eb-f7a5f72166fe_1258x1192.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F241affaf-b765-4215-a2eb-f7a5f72166fe_1258x1192.png)
  • Dagster via PipesECSClient + partitioned asset
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F155db3c8-cd59-419a-83af-b6c996709853_1540x826.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F155db3c8-cd59-419a-83af-b6c996709853_1540x826.png)
  I’ll likely share a detailed implementation with one of these orchestrators in a future ([View Highlight](https://read.readwise.io/read/01jff2wy13jkhqetkaem8bskrx))
