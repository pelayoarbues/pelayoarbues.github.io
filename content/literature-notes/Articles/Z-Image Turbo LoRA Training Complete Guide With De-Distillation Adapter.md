---
author: "[[Z-Image-Turbo]]"
title: 'Z-Image Turbo LoRA Training: Complete Guide With De-Distillation Adapter'
date: "2026-05-11"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://zimageturbo.com/imgs/zimage/zimageturbo-3.webp)

## Metadata
- Author: [[Z-Image-Turbo]]
- Full Title: Z-Image Turbo LoRA Training: Complete Guide With De-Distillation Adapter
- URL: https://zimageturbo.com/blog/z-image-lora-training-guide

## Highlights
- Training custom LoRA models for Z-Image Turbo requires a specific approach due to its distilled architecture. This guide covers the de-distillation adapter technique developed by Ostris, training parameters, and deployment steps.
  **Quick Start**: If you prefer a web-based solution, [use our LoRA training tool](https://zimageturbo.com/loras) to train custom Z-Image Turbo LoRAs directly in your browser—no local GPU required. ([View Highlight](https://read.readwise.io/read/01krc8y0nns9qqkr1qq7age41z))
- ParameterValueNotesSteps2,000-5,000Start with 3,000 for testingLearning Rate1e-4 to 5e-5Lower for fine detailsLoRA Rank (r)8-16Higher = more capacityResolution1024×1024Match base modelBatch Size1-2Adjust based on VRAM ([View Highlight](https://read.readwise.io/read/01krc8zx42xf857bx7h5c2c9y2))
- Z-Image Turbo is a step-distilled model—it achieves fast 8-step generation through a distillation process. Standard LoRA training breaks this distillation quickly, resulting in:
  • Loss of speed benefits (no longer 8-step capable)
  • Unpredictable quality degradation
  • Artifacts in generated outputs ([View Highlight](https://read.readwise.io/read/01krc8ya399qc3zgmvznw1h8s3))
- The [de-distillation training adapter](https://huggingface.co/ostris/zimage_turbo_training_adapter) created by Ostris solves this problem.
  According to the [Hugging Face engineering blog](https://huggingface.co/blog/content-and-code/training-a-lora-for-z-image-turbo):
  1. **Adapter generation**: Thousands of images were generated using Z-Image Turbo at various sizes and aspect ratios
  2. **Controlled distillation breakdown**: A LoRA was trained on these images at low learning rate (1e-5), allowing distillation to break down in a controlled manner
  3. **Training on top**: Your custom LoRA trains on top of this adapter, learning only your new content
  4. **Adapter removal**: At inference time, remove the training adapter—your LoRA preserves distilled speed
  This approach lets you train style, character, or concept LoRAs while maintaining 8-step Turbo generation. ([View Highlight](https://read.readwise.io/read/01krc8yd4gqzvps9mv6vs2vyr9))
- **Download Training Adapter:**
  Use V2 of the adapter for refined results.
  Quality training data is essential for good LoRA results.
  • **Count**: 5-15 images for characters, 15-25 for styles
  • **Resolution**: 1024×1024 minimum (matches Z-Image Turbo's native resolution)
  • **Format**: PNG or JPEG
  • **Variety**: Include different angles, lighting, and contexts
  Create a text file for each image with the same name:
  Caption format example:
  Use a consistent trigger word that will activate your LoRA during generation. ([View Highlight](https://read.readwise.io/read/01krc8ze8b01tyvayfb7k3qmbb))
- Two options in AI Toolkit:
  1. **Z-Image Turbo W/ Training Adapter**
  • Preserves 8-step Turbo speed
  • Best for shorter runs (< 5,000 steps)
  • Remove adapter at inference
  2. **Z-Image De-Turbo (De-Distilled)**
  • No adapter needed at inference
  • Suitable for longer training runs
  • Slightly slower generation
  For most use cases, option 1 (with training adapter) is recommended.
  Adjust paths and parameters based on your dataset and hardware. ([View Highlight](https://read.readwise.io/read/01krc90jk9z7j0e1zjqx9hy7c2))
- Based on user reports:
  Enable Low VRAM mode if you encounter memory errors on 12GB cards.
  1. Copy LoRA file to `ComfyUI/models/loras/`
  2. Add "Load LoRA" node to workflow
  3. Connect to Z-Image Turbo model loader
  4. Set LoRA strength (0.5-1.0)
  Remember to include your trigger word in prompts.
  • Verify file path is correct
  • Check LoRA was trained on Z-Image Turbo (not FLUX or SD)
  • Increase LoRA strength
  • Training too long (distillation breakdown)
  • Learning rate too high
  • Reduce steps or use V2 training adapter
  • Enable Low VRAM mode in AI Toolkit
  • Reduce batch size to 1
  • Use gradient checkpointing
  • Remove training adapter if using Method 1
  • Check LoRA strength (reduce if artifacts appear)
  • Verify training completed without errors
  1. **Start small**: Test with 1,000 steps before committing to longer runs
  2. **Caption carefully**: Good captions improve LoRA quality significantly
  3. **Use V2 adapter**: The refined V2 training adapter produces better results
  4. **Monitor checkpoints**: Save every 500 steps to find optimal training point
  5. **Test incrementally**: Generate samples at each checkpoint to avoid overtraining ([View Highlight](https://read.readwise.io/read/01krc91213exyxb4p72fjgw3kw))
