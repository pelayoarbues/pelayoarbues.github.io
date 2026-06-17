---
title: MacBook Pro preparation for SD training and inference
date: 2023-10-04
tags:
  - permanent-note
  - stablediffusion
  - GenAI
---

Preparing a working environment with Pytorch should be straightforward nowadays, but it's not as simple when dealing with ARM64 chips on Apple Devices. I admit I took some shortcuts and didn't use Docker Images (which goes against what I advocate at work) because I couldn't find reliable image sources for Kohya and Automatic1111 with Apple Silicon backends.

In any case, even though I did not use containers, I utilized virtual environments to keep libraries as isolated as possible. At the time of writing this post, I'm using a brand-new MacBook Pro, so I didn't want to tinker with the built-in Python. Instead, I followed [these guidelines on how to set it up correctly](https://opensource.com/article/19/5/python-3-default-mac).

# Environment Preparation

## Kohya

[Kohya's GUI](https://github.com/bmaltais/kohya_ss) provides a graphical user interface for [Kohya's Stable Diffusion trainers](https://github.com/kohya-ss/sd-scripts) scripts.

To prepare the environment, follow these steps:

- Create a virtualenv with Python 3.10.6. It seems that using other Python versions might lead to problems, so it's best to stick with that.

```bash
# Clone kohya project
git clone https://github.com/bmaltais/kohya_ss.git
cd ./kohya_ss
# Create environment within the folder
virtualenv -p python3.10 venv
# Activate the environment
source venv/bin/activate
```

- To install Kohya, I followed these instructions [translated from Japanese](https://planaria-page.translate.goog/blog/?p=671&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp).

```bash
# pytorch
pip install torch torchvision

# tensorflow
pip install tensorflow-macos tensorflow-metal tensorboard

# diffusersのインストール
pip install diffusers

# requirements.txt for kohya
pip install -r requirements.txt
```

- Configure accelerator settings

```bash
# Run accelerate config for entering a configuration process
accelerate config

--------------------------------------------------------------------------------
In which compute environment are you running?
This machine                                                                    
--------------------------------------------------------------------------------
Which type of machine are you using?                                            
No distributed training                                                         
Do you want to run your training on CPU only (even if a GPU / Apple Silicon device is available)? [yes/NO]:NO                                                   
Do you wish to optimize your script with torch dynamo?[yes/NO]:NO               
--------------------------------------------------------------------------------
Do you wish to use FP16 or BF16 (mixed precision)?
no                                                                            
accelerate configuration saved at ~/.cache/huggingface/accelerate/default_config.yaml
```

We're almost all set up. We still need to make a few changes in some lines of code to use MPS instead of CUDA. To do that, you have to replace `cuda` with `mps`, as explained at the end of [the post we've already reviewed](https://planaria-page.translate.goog/blog/?p=671&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp).

![](Screenshot%202023-10-04%20at%2017.26.45.png)
![](Screenshot%202023-10-04%20at%2017.27.00.png)
![](Screenshot%202023-10-04%20at%2017.27.09.png)
![](Screenshot%202023-10-04%20at%2017.27.19.png)


## Automatic1111

Installing Automatic1111 was a breeze. I followed the instructions for [Installation on Apple Silicon](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon) included in the repository.

