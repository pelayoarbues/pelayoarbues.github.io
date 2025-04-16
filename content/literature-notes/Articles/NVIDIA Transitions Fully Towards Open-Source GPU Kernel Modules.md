---
author: [[NVIDIA Technical Blog]]
title: 'NVIDIA Transitions Fully Towards Open-Source GPU Kernel Modules'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://developer-blogs.nvidia.com/wp-content/uploads/2023/12/hpc-featured.jpg)

## Metadata
- Author: [[NVIDIA Technical Blog]]
- Full Title: NVIDIA Transitions Fully Towards Open-Source GPU Kernel Modules
- URL: https://developer.nvidia.com/blog/nvidia-transitions-fully-towards-open-source-gpu-kernel-modules/

## Highlights
- With the R515 driver, NVIDIA released a set of [Linux GPU kernel](https://developer.nvidia.com/blog/nvidia-releases-open-source-gpu-kernel-modules/) modules in May 2022 as open source with dual GPL and MIT licensing. The initial release targeted datacenter compute GPUs, with GeForce and Workstation GPUs in an alpha state. ([View Highlight](https://read.readwise.io/read/01j355qcedwdg1xw7bv27482cp))
- NVIDIA GPUs share a common driver architecture and capability set. The same driver for your desktop or laptop runs the world’s most advanced AI workloads in the cloud. It’s been incredibly important to us that we get it just right. ([View Highlight](https://read.readwise.io/read/01j355qgz199vk741yg7ga4m3q))
    - Tags: [[favorite]] 
- Two years on, we’ve achieved equivalent or better application performance with our open-source GPU kernel modules and added substantial new capabilities:
  • Heterogeneous memory management (HMM) support
  • Confidential computing
  • The coherent memory architectures of our Grace platforms
  • And more ([View Highlight](https://read.readwise.io/read/01j355qq92629t2aedxhy9j2k2))
- For cutting-edge platforms such as NVIDIA Grace Hopper or NVIDIA Blackwell, you must use the open-source GPU kernel modules. The proprietary drivers are unsupported on these platforms. ([View Highlight](https://read.readwise.io/read/01j355qzr7tsw6ebcjbstp9gdf))
- In general, the default version of the driver installed by all installation methods is switching from the proprietary driver to the open-source driver. There are a few specific scenarios that deserve special attention:
  • Package managers with the CUDA metapackage
  • Runfile
  • Installation helper script
  • Package manager details
  • Windows Subsystem for Linux
  • CUDA Toolkit ([View Highlight](https://read.readwise.io/read/01j355rc4ker226jw4ea8zrj43))
- When you are installing CUDA Toolkit using a package manager (not the .run file), installation metapackages exist and are commonly used. By installing a top-level `cuda` package, you install a combination of CUDA Toolkit and the associated driver release. For example, by installing cuda during the CUDA 12.5 release time frame, you get the proprietary NVIDIA driver 555 along with CUDA Toolkit 12.5. ([View Highlight](https://read.readwise.io/read/01j355rn97n3spe8tc844mve2t))
