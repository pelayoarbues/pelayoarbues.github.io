---
author: [[BBVA AI Factory]]
title: "Our Approach to Human Data Annotation in the Age of Gen AI"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.bbvaaifactory.com/wp-content/uploads/prodigiosaia_Two_hands_one_raised_up_and_the_other_down_on_blue_b8921a05-2c0f-45b5-b322-475b8b8f871e-1.webp)

## Metadata
- Author: [[BBVA AI Factory]]
- Full Title: Our Approach to Human Data Annotation in the Age of Gen AI
- URL: https://www.bbvaaifactory.com/human-data-annotation/

## Highlights
- Data annotation remains critical in building effective AI models. Traditional AI models require accurate labels for training, which sometimes necessitates annotation. In Generative AI, annotation is vital, especially in evaluation. Annotation can be conducted manually (human annotation) or [automatically](https://www.bbvaaifactory.com/llm-beyond-dialogue/) (e.g. using LLMs for the purpose or metrics like BLEU or ROUGE). ([View Highlight](https://read.readwise.io/read/01j2h2fbn35vpf7gexmq1dv69c))
- Depending on the specific problem we need to solve, it’s essential to determine **when it’s convenient to automate and when it’s best to rely on human annotators or a combination of both.** ([View Highlight](https://read.readwise.io/read/01j2h2fjd7k6djsyze5jhykrva))
- Data annotation is often a bottleneck in AI projects due to its complexity and resource requirements. Large Language Models (LLMs) can automate this process by interpreting natural language queries. For example, when evaluating a RAG[1](https://www.bbvaaifactory.com/human-data-annotation#ReferenceID1) (e.g. a chatbot assistant using Retrieval-Augmented Generation), an LLM is able to assess whether the generated response answers the user query. ([View Highlight](https://read.readwise.io/read/01j2h2fnzgydvg66ajhaqm85bj))
- However, relying solely on automation may not always be advisable. Automation bias—where humans over-rely on machine decisions—can introduce errors and perpetuate biases inherent in training data. ([View Highlight](https://read.readwise.io/read/01j2h2fx6dhzkcccrfbka3x5yr))
- Moreover, these models might use criteria that do not align with the specific needs of a given project. Thus, **it’s essential to ensure models meet ethical and functional standards, which can be achieved through a robust in-house human annotation methodology.** This system lays the groundwork for developing automated tools aligned with human criteria and project-specific requirements. ([View Highlight](https://read.readwise.io/read/01j2h2g0ehsx8b2g01fakxzmy7))
- Human annotation is recommendable for high-quality and nuanced results when evaluating generative models. However, we must recognize the challenges we face when tackling this task. ([View Highlight](https://read.readwise.io/read/01j2h2gbzdq280ek664fhxmfc8))
- First, annotators’ subjectivity can lead to inconsistencies, particularly when they have different understandings of the task at hand. To mitigate this issue, we must count on comprehensive guidelines with specific examples to standardize the annotation process. ([View Highlight](https://read.readwise.io/read/01j2h2gf8ssp8gte41e74vac8s))
- annotators’ subjectivity can lead to inconsistencies, particularly when they have different understandings of the task at hand. To mitigate this issue, we must count on comprehensive guidelines with specific examples to standardize the annotation process. ([View Highlight](https://read.readwise.io/read/01j2h2hdjw9ger17qwjk361z00))
- managing the scale of datasets is a significant challenge in data annotation. It is often necessary to have large, well-annotated datasets in order to perform effectively. However, this makes the annotation process time-consuming and demanding. In this sense, balancing cost and quality is crucial. ([View Highlight](https://read.readwise.io/read/01j2h2hk6betdbabp9h1eyww0k))
- Before starting the annotation process, it is important to estimate the minimum size of the dataset and establish agreement thresholds. This ensures that the dataset is manageable and meets the necessary quality standards from the beginning. ([View Highlight](https://read.readwise.io/read/01j2h2hrs601r1c7hd5hmncghd))
- o define this criterion objectively and annotate accordingly, you need to follow a series of steps:
  ![](https://www.bbvaaifactory.com/wp-content/uploads/Mesa-de-trabajo-4humanannotbn.png) ([View Highlight](https://read.readwise.io/read/01j2h2jp4q6tkt9esrkch4tjzz))
- 0️⃣ Select a group of people and assign roles
  Before embarking on an annotation project, decide who will be the Annotation Owner. This should be the person or group that will benefit from the annotation task, such as the team developing the chatbot. This person will be responsible for evaluating and monitoring the system. ([View Highlight](https://read.readwise.io/read/01j2h2nbbx24rb30jaf26fwkxs))
- Next, choose a group of annotators who will handle the manual annotation task. It is important that these individuals have knowledge of the project domain. For instance, if the chatbot is intended for customer service, the annotators should be familiar with customer service protocols. Once the guidelines are defined, these annotators can make informed decisions. ([View Highlight](https://read.readwise.io/read/01j2h2msdk9xft397jv3d595hw))
- 1️⃣ Decide what you want to measure
  Before starting data entry, clearly define what you want to measure. This involves thoroughly understanding the project’s objectives and how the annotated data will contribute to achieving them. ([View Highlight](https://read.readwise.io/read/01j2h2n51fgrn3jzjyqfkt1a27))
- Ask yourself: what is the main objective of the model? In this case, it might be to provide accurate and helpful responses to customer inquiries. What types of patterns or information need to be extracted from the data? How will the annotated data be used to train and evaluate the model? Clearly defining what you want to measure ensures that annotation efforts align with project objectives, thus avoiding unnecessary or irrelevant data collection. ([View Highlight](https://read.readwise.io/read/01j2h2p1876jwfydy48dr2b6rx))
- 2️⃣ Define guidelines with examples
  Annotation guidelines should be accompanied by concrete examples illustrating how to apply the criteria in real situations. This helps annotators better understand expectations and handle ambiguous or complex cases. ([View Highlight](https://read.readwise.io/read/01j2h2phycp512d1rdk4rbc844))
- When defining guidelines for the chatbot:
  • Include examples of accurate (correctly scored) and inaccurate (incorrectly scored) chatbot responses.
  • Provide detailed descriptions of each example, explaining why it was annotated that way.
  • Update examples as new cases are identified or annotation criteria are refined.
  • Use simple, straightforward language in annotation guidelines.
  • Avoid complex or subjective criteria that may lead to inconsistent interpretations.
  • Ensure that each annotation criterion is measurable and observable. ([View Highlight](https://read.readwise.io/read/01j2h2pqr3h101a0t5k73x1c0j))
- Clear and detailed examples help align the interpretation of criteria among all annotators, improving annotation consistency. ([View Highlight](https://read.readwise.io/read/01j2h2pwg6f21smqgz2kjwp17g))
- 3️⃣ Configure an appropriate tool for the use case
  Using the right annotation tool can improve project efficiency and accuracy. ([View Highlight](https://read.readwise.io/read/01j2h2q5qyzah021gn9hhq9wn1))
- 4️⃣ Do a few rounds with a small set of data and refine the guidelines
  Before jumping into scoring a large volume of data, start with a small dataset. This allows you to identify and troubleshoot problems in the guidelines and annotation process. To do this:
  • Select a dataset that is representative but manageable in size.
  • Conduct several rounds of annotation, assessing consistency and accuracy in each round.
  • Gather feedback from annotators on the guidelines and process.
  • Take the examples with disagreement, have a session with the team of annotators, and refine the guidelines with the conclusions of the discussion. These refinements can consist of specific examples or more detailed instructions. ([View Highlight](https://read.readwise.io/read/01j2h2rppx811tv8jx9ja6bzm2))
- The annotation owner must be actively involved throughout the annotation process, from the initial definition phase to conducting several runs. This involvement includes serving as one of the annotators and participating in the initial runs with a small dataset. ([View Highlight](https://read.readwise.io/read/01j2h3ck1yjjxz937ymx68xre6))
- 5️⃣ Annotate the large dataset
  Once the guidelines are well defined and tested with a small dataset, it is time to annotate the entire dataset. ([View Highlight](https://read.readwise.io/read/01j2h3ref71vwjm56vwky0jp2p))
- Ensure to:
  • Break the dataset into smaller batches and set specific goals for each batch. For instance, if your goal is to annotate 200 samples, break the examples into three rounds of 50, 75, and 75 samples and measure the agreement in each round.[2](https://www.bbvaaifactory.com/human-data-annotation#ReferenceID2)
  • Train annotators using the refined guidelines and developed examples.
  • Implement a quality control system to monitor and review annotations regularly.
  • Provide tools and resources that make the annotation process more efficient and accurate. ([View Highlight](https://read.readwise.io/read/01j2h3rm0sxhfmde9fpffb1n9w))
- 6️⃣ Measure the agreement and return to the guidelines
  After annotating the large dataset, measure the level of agreement between annotators (known as inter-annotator agreement). This can be done using metrics such as Cohen’s Kappa coefficient or percent agreement. If the level of agreement is low:
  • Review the guidelines and examples provided.
  • Identify areas of ambiguity or confusion and clarify the criteria.
  • Provide additional feedback and training to annotators. ([View Highlight](https://read.readwise.io/read/01j2h4j94fa6h3gny87td9t1ea))
- If necessary, return to the guidelines to refine the criteria before proceeding with further annotations. This iterative cycle of evaluation and adjustment is vital to ensure that annotations are accurate and consistent over time. ([View Highlight](https://read.readwise.io/read/01j2h4jfjk8p13hg55jkry2166))
- Once we can ensure human annotation works correctly and there is a clear consensus on the criteria to follow, it is possible to create an automatic evaluator based on a large language model. You can develop an “LLM judge” evaluator by providing it with the guidelines for annotators, a specific prompt, and a set of manually annotated data. How to do this properly and efficiently is an active line of research with its advantages and limitations.[3](https://www.bbvaaifactory.com/human-data-annotation#ReferenceID3) ([View Highlight](https://read.readwise.io/read/01j2h4jpsq7t6ey83xbb1yjctp))
- **The LLM judge’s performance can then be compared with the previously defined human criteria.** For this comparison, the agreement between human annotators can be used as a benchmark. Suppose the agreement between the LLM judge and a human is similar to the agreement between humans. In that case, we can consider that we have reached human-level performance with the LLM judge, allowing us to use it in the future to automate the evaluation process. ([View Highlight](https://read.readwise.io/read/01j2h4jtpc1gw1qk8kjtw7ghq2))
- ntegrating LLMs for automatic annotation should be approached as **a complementary tool that enhances efficiency rather than completely replacing human oversight.** By combining the strengths of both human and machine capabilities, we can achieve more robust, efficient, and ultimately more responsible AI models. ([View Highlight](https://read.readwise.io/read/01j2h4k9n4qjbm7ccar5crhabh))
