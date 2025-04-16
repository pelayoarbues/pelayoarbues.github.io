---
author: [[Celeb-A HQ and FFHQ]]
title: "Train Your ControlNet With Diffusers"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/136_train-your-controlnet/thumbnail.png)

## Metadata
- Author: [[Celeb-A HQ and FFHQ]]
- Full Title: Train Your ControlNet With Diffusers
- URL: https://huggingface.co/blog/train-your-controlnet

## Highlights
- [ControlNet](https://huggingface.co/blog/controlnet) is a neural network structure that allows fine-grained control of diffusion models by adding extra conditions. The technique debuted with the paper [Adding Conditional Control to Text-to-Image Diffusion Models](https://huggingface.co/papers/2302.05543), and quickly took over the open-source diffusion community author's release of 8 different conditions to control Stable Diffusion v1-5, including pose estimations, depth maps, canny edges, sketches, [and more](https://huggingface.co/lllyasviel). ([View Highlight](https://read.readwise.io/read/01hcyh7b2jj6hrad2rcvqtn125))
- Training your own ControlNet requires 3 steps:
  1. **Planning your condition**: ControlNet is flexible enough to tame Stable Diffusion towards many tasks. The pre-trained models showcase a wide-range of conditions, and the community has built others, such as conditioning on [pixelated color palettes](https://huggingface.co/thibaud/controlnet-sd21-color-diffusers).
  2. **Building your dataset**: Once a condition is decided, it is time to build your dataset. For that, you can either construct a dataset from scratch, or use a sub-set of an existing dataset. You need three columns on your dataset to train the model: a ground truth `image`, a `conditioning_image` and a `prompt`.
  3. **Training the model**: Once your dataset is ready, it is time to train the model. This is the easiest part thanks to the [diffusers training script](https://github.com/huggingface/diffusers/tree/main/examples/controlnet). You'll need a GPU with at least 8GB of VRAM. ([View Highlight](https://read.readwise.io/read/01hcyh7rxnwrg2kbkjv1gc8pb2))
- 1. Planning your condition
  To plan your condition, it is useful to think of two questions:
  1. What kind of conditioning do I want to use?
  2. Is there an already existing model that can convert 'regular' images into my condition?
  For our example, we thought about using a facial landmarks conditioning. Our reasoning was: 1. the general landmarks conditioned ControlNet works well. 2. Facial landmarks are a widespread enough technique, and there are multiple models that calculate facial landmarks on regular pictures 3. Could be fun to tame Stable Diffusion to follow a certain facial landmark or imitate your own facial expression.
  [![Example of face landmarks](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_examples.png "Example of face landmarks")](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_examples.png) ([View Highlight](https://read.readwise.io/read/01hcyypjajc7qrb3nwx739ar09))
- 2. Building your dataset
  Okay! So we decided to do a facial landmarks Stable Diffusion conditioning. So, to prepare the dataset we need:
  • The ground truth `image`: in this case, images of faces
  • The `conditioning_image`: in this case, images where the facial landmarks are visualised
  • The `caption`: a caption that describes the images being used
  For this project, we decided to go with the `FaceSynthetics` dataset by Microsoft: it is a dataset that contains 100K synthetic faces. Other face research datasets with real faces such as `Celeb-A HQ`, `FFHQ` - but we decided to go with synthetic faces for this project.
  [![Face synthetics example dataset](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/face_synethtics_example.jpeg "Face synthetics example dataset")](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/face_synethtics_example.jpeg) ([View Highlight](https://read.readwise.io/read/01hcyyqatkx3tvtbfh1jb0pfw2))
- The `FaceSynthetics` dataset sounded like a great start: it contains ground truth images of faces, and facial landmarks annotated in the iBUG 68-facial landmarks format, and a segmented image of the face.
  [![Face synthetics descriptions](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_sequence.png "Face synthetics descriptions")](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_sequence.png)
  Perfect. Right? Unfortunately, not really. Remember the second question in the "planning your condition" step - that we should have models that convert regular images to the conditioning? Turns out there was is no known model that can turn faces into the annotated landmark format of this dataset.
  [![No known segmentation model](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_no_known.png "No known segmentation model")](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/segmentation_no_known.png) ([View Highlight](https://read.readwise.io/read/01hcyyr28w8cp86f4g701adyq2))
- So we decided to follow another path:
  • Use the ground truths `image` of faces of the `FaceSynthetics` datase
  • Use a known model that can convert any image of a face into the 68-facial landmarks format of iBUG (in our case we used the SOTA model [SPIGA](https://github.com/andresprados/SPIGA))
  • Use custom code that converts the facial landmarks into a nice illustrated mask to be used as the `conditioning_image`
  • Save that as a [Hugging Face Dataset](https://huggingface.co/docs/datasets/indexx)
  [Here you can find](https://huggingface.co/datasets/pcuenq/face_synthetics_spiga) the code used to convert the ground truth images from the `FaceSynthetics` dataset into the illustrated mask and save it as a Hugging Face Dataset. ([View Highlight](https://read.readwise.io/read/01hcyysz71rba7ws0xgk8ggbkx))
- Now, with the ground truth `image` and the `conditioning_image` on the dataset, we are missing one step: a caption for each image. This step is highly recommended, but you can experiment with empty prompts and report back on your results. As we did not have captions for the `FaceSynthetics` dataset, we ran it through a [BLIP captioning](https://huggingface.co/docs/transformers/model_doc/blip). You can check the code used for captioning all images [here](https://huggingface.co/datasets/multimodalart/facesyntheticsspigacaptioned)
  With that, we arrived to our final dataset! The [Face Synthetics SPIGA with captions](https://huggingface.co/datasets/multimodalart/facesyntheticsspigacaptioned) contains a ground truth image, segmentation and a caption for the 100K images of the `FaceSynthetics` dataset. We are ready to train the model!
  [![New dataset](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/new_dataset.png "New dataset")](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/136_train-your-controlnet/new_dataset.png) ([View Highlight](https://read.readwise.io/read/01hcz01whe31n1cj7tcg5pr2p7))
- With our [dataset ready](https://huggingface.co/datasets/multimodalart/facesyntheticsspigacaptioned), it is time to train the model! Even though this was supposed to be the hardest part of the process, with the [diffusers training script](https://github.com/huggingface/diffusers/tree/main/examples/controlnet), it turned out to be the easiest. We used a single A100 rented for US$1.10/h on [LambdaLabs](https://lambdalabs.com).
  [](https://huggingface.co/blog/train-your-controlnet#our-training-experience) ([View Highlight](https://read.readwise.io/read/01hcz02vq483tcd2sqcfpchr8d))
- We trained the model for 3 epochs (this means that the batch of 100K images were shown to the model 3 times) and a batch size of 4 (each step shows 4 images to the model). This turned out to be excessive and overfit (so it forgot concepts that diverge a bit of a real face, so for example "shrek" or "a cat" in the prompt would not make a shrek or a cat but rather a person, and also started to ignore styles).
  With just 1 epoch (so after the model "saw" 100K images), it already converged to following the poses and not overfit. So it worked, but... as we used the face synthetics dataset, the model ended up learning uncanny 3D-looking faces, instead of realistic faces. This makes sense given that we used a synthetic face dataset as opposed to real ones, and can be used for fun/memetic purposes. Here is the [uncannyfaces_25K](https://huggingface.co/multimodalart/uncannyfaces_25K) model. ([View Highlight](https://read.readwise.io/read/01hcz03hv6f00a1y8nen4ddezz))
