---
title: The Rise of the Dataset Engineer
date: 2024-04-25
tags:
  - permanent-note
  - data
---
![A female deity rising to the sky, holding photos in her left hand and books on the right. She wears a Polyhedron crystal helmet. Cyberpunk style - Made with Dalle3](dataset-engineer.png)

Data Scientists and Machine Learning Engineers have long been involved in preparing the [ideal datasets](Ideal%20data%20to%20solve%20a%20problem.md) for training and evaluating [successful models](Sucessful%20Model.md). However, over the past few years, I've noticed a significant increase in the importance of curating these datasets within the data function.

The availability of large pre-trained models has simplified the process of creating custom versions to address specific business problems. In this context, we can't overlook the significant role played by [Hugging Face](https://huggingface.co/) in democratizing access to highly competent models. Furthermore, Hugging Face libraries like [Datasets](https://huggingface.co/docs/datasets/index) and [🤗 Transformers](https://huggingface.co/docs/transformers/index) have facilitated easier access to vast datasets and models. They've also simplified transfer learning, fine-tuning, and efficient adaptation of specific Deep Learning architectures to current problems.

A few years back, training a Deep Learning model required highly specialized individuals—those who were passionate about reading Computer Science papers and implementing them using [TensorFlow](https://www.tensorflow.org/?hl=es-419), [PyTorch](https://pytorch.org/) or pure [CUDA](https://developer.nvidia.com/cuda-toolkit) (see tweet below). However, high-level programming languages like [Keras](https://keras.io/), [fastai](https://docs.fast.ai/) or [PyTorch Lightning](https://lightning.ai/pytorch-lightning) have simplified training processes. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🔥llm.c update: Our single file of 2,000 ~clean lines of C/CUDA code now trains GPT-2 (124M) on GPU at speeds ~matching PyTorch (fp32, no flash attention)<a href="https://t.co/ze4LKbnHKV">https://t.co/ze4LKbnHKV</a><br><br>On my A100 I&#39;m seeing 78ms/iter for llm.c and 80ms/iter for PyTorch. Keeping in mind this is fp32,… <a href="https://t.co/Ep8MwJFoWV">pic.twitter.com/Ep8MwJFoWV</a></p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1781387674978533427?ref_src=twsrc%5Etfw">April 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This has enabled Data Scientists who aren't necessarily academically inclined to train models. Today's landscape is even more user-friendly; you can simply upload a dataset to a fine-tuning service and  [fine tune Stable Diffussion LoRAs ](https://replicate.com/guides/stable-diffusion/fine-tuning), [Computer Vision Deep Learning networks](https://encord.com/blog/learn-how-to-fine-tune-the-segment-anything-model-sam/)  or even fine tune [Large Language Models](https://platform.openai.com/docs/guides/fine-tuning) or a [Large Vision Model](https://www.v7labs.com/) with minimal knowledge required.

We are currently witnessing an influx of tech enthusiasts and business roles joining Data Science teams to build Artificial Intelligence solutions. **This is fantastic news for companies as they can leverage cutting-edge technology to solve business problems without encountering bottlenecks caused by understaffed data teams**. The key ingredients often missing from these initiatives are sound evaluation practices and high-quality data. Fortunately, good evaluation techniques can be taught, which helps non-data roles comprehend their importance and how evaluation fits into the Data Science [iterative cycle](Agile%20for%20Data%20Science.md).

> [!note]
> Constructing an optimal, unbiased, high-quality dataset requires an engineering, statistical and operations mindset.

Regarding [high-quality data](https://huggingface.co/blog/burtenshaw/domain-specific-datasets), it previously required significant manual labor to obtain labeled and heavily curated data. However, we now have [excellent data annotation and curation tools](https://github.com/zenml-io/awesome-open-data-annotation) at our disposal. Data annotation tools focus on adding metadata to data observations—this could take the form of NER spans, segmented images or preferences in chat interactions. Data curation tools allow us to assess and curate the data—for instance, ensuring that we have an unbiased dataset representing our target population or avoiding the addition of near [duplicate samples](https://docs.voxel51.com/recipes/remove_duplicate_annos.html) to our training set.

In addition to a more mature ecosystem of annotation and curation tools, it's now possible to utilize the exceptional capabilities of [LLMs](https://arxiv.org/abs/2402.13446), [YOLO](https://www.v7labs.com/blog/yolo-object-detection) and [SAM](https://segment-anything.com/) for pre-annotating data. Consequently, creating a dataset no longer starts from scratch. This shift has resulted in a significant portion of work moving from programming algorithms towards efficiently labeling data using techniques such as [few-shot learning](https://github.com/huggingface/setfit), [Active Learning](https://docs.argilla.io/en/latest/practical_guides/annotation_workflows/active_learning.html) or other forms of [models in the loop](https://docs.cvat.ai/docs/manual/advanced/automatic-annotation/).

Tools like [argilla](https://argilla.io/), [CVAT](https://www.cvat.ai/) and [FiftyOne](https://docs.voxel51.com/) can be used alongside pre-annotated or synthetic data for training, evaluating and monitoring our models. In this scenario, an engineering mindset is crucial—one that understands the iterative nature of the Data Science process—to optimize data annotation or [synthetic data](https://distilabel.argilla.io/latest/) generation.

Industry leaders like [Andrew Ng](https://www.andrewng.org/) have long advocated for a [Data-centric](https://datacentricai.org/) approach to AI modeling. Recently, [Chip Huyen](https://huyenchip.com/) included Dataset Engineering as a central topic in [her upcoming book](https://www.linkedin.com/posts/chiphuyen_aiengineering-aiapplications-mlengineering-activity-7188642075230236672-zQ1u/).

While I'm not entirely convinced about introducing another term under the broad umbrella of Data Science roles just yet, it is clear that we're all thinking about how to procure high-quality datasets for training our models. Like it or not, the old data preparation function is evolving. Initially, programmatic labeling may be tackled by existing roles such as Data Scientists or Machine Learning Engineers. However, considering the constant evolution of roles, the industry tendency to incorporate new and confusing terms, and the [emergence](Data%20Science%20job%20crafting.md) of highly specialized and well-compensated positions, we may soon see Dataset Engineering listed as a desired skill in [job postings](notes/How%20to%20Hire%20Data%20Scientists%20Without%20Losing%20Your%20Mind.md).



