---
author: "[[Bhoomi Gadhia]]"
title: 'NVIDIA Earth-2 Features First Gen AI to Power Weather Super-Resolution for Continental US'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blogs.nvidia.com/wp-content/uploads/2025/02/CorrDiff_blog_featured_still_sized-842x450.jpg)

## Metadata
- Author: [[Bhoomi Gadhia]]
- Full Title: NVIDIA Earth-2 Features First Gen AI to Power Weather Super-Resolution for Continental US
- URL: https://blogs.nvidia.com/blog/earth-2-ai-high-resolution-forecasts/

## Highlights
- To better prepare communities for extreme weather, forecasters first need to see exactly where it’ll land. ([View Highlight](https://read.readwise.io/read/01jmwr2hfwzamkhbj7a2hgfpzy))
- That’s why weather agencies and climate scientists around the world are harnessing NVIDIA CorrDiff, a generative AI weather model that enables kilometer-scale forecasts of wind, temperature, and precipitation type and amount. It’s part of the [NVIDIA Earth-2](https://www.nvidia.com/en-us/high-performance-computing/earth-2/) platform for simulating weather and climate conditions. ([View Highlight](https://read.readwise.io/read/01jmwr2nax6va8b7f0jv0er2rn))
- The paper behind CorrDiff was featured today [in *Communications Earth and Environment*](https://www.nature.com/articles/s43247-025-02042-5), part of the Nature portfolio of scientific journals. Available as an [easy-to-deploy NVIDIA NIM microservice](https://blogs.nvidia.com/blog/earth-2-nim-simulations/), the model is already being used by weather technology companies, researchers and government agencies to enhance their forecasts. ([View Highlight](https://read.readwise.io/read/01jmwr2v954k6y1ek3xf3q4e1c))
- With the rising frequency of extreme weather events, fast, high-resolution predictions of weather phenomena could help mitigate risks to people, communities and economies by supporting risk assessment, evacuation planning, disaster management and the development of climate-resilient infrastructure. ([View Highlight](https://read.readwise.io/read/01jmwr2zfpb4t7aqdeh7gesvhm))
- CorrDiff uses generative AI to sharpen the precision of coarse-resolution weather models — resolving atmospheric data from 25-kilometer scale down to 2 kilometers [using diffusion modeling](https://developer.nvidia.com/blog/how-generative-ai-is-empowering-climate-tech-with-nvidia-earth-2/#predicting_fine-scale_weather_details_with_corrdiff), the same kind of AI model architecture that powers today’s text-to-image generation services. ([View Highlight](https://read.readwise.io/read/01jmwr35zc22czj5khjsc2w3gt))
- In addition to boosting image resolution, CorrDiff can also predict related variables that weren’t present in the input data — such as radar reflectivity, which is used as an indicator of rain location and intensity. ([View Highlight](https://read.readwise.io/read/01jmwr4rzctahkz4vdjz4m1hcv))
- CorrDiff was trained on the [Weather Research and Forecasting model](https://nuwrf.gsfc.nasa.gov/wrf)’s numerical simulations to generate weather patterns at 12x higher resolution. ([View Highlight](https://read.readwise.io/read/01jmwr4x8ycnctrbz4sfggr4cp))
- NVIDIA researchers and engineers next worked to efficiently scale the model to cover a larger section of the globe. The version released as an [NVIDIA NIM microservice](https://build.nvidia.com/nvidia/corrdiff) at Supercomputing 2024 covers the continental United States — trained on U.S. weather data, with sample datasets of real-world natural disasters including hurricanes, floods, winter storms, tornados and cold waves. ([View Highlight](https://read.readwise.io/read/01jmwr53xjy67x8ke1dkb7d0fg))
- The optimized CorrDiff NIM microservice for U.S. data is 500x faster and 10,000x more energy-efficient than traditional high-resolution numerical weather prediction using CPUs. ([View Highlight](https://read.readwise.io/read/01jmwr5g0n54z3e5qvawkvj3kg))
- The research team behind CorrDiff continues to advance the model’s capabilities, and has released additional generative AI diffusion models showing how the model could be enhanced to more [robustly resolve small-scale details in different environments](https://arxiv.org/abs/2410.19814) — and better [capture rare or extreme weather events](https://arxiv.org/abs/2410.14171). ([View Highlight](https://read.readwise.io/read/01jmwr5nrk2b3tpvnbj15k7mah))
- Meteorological agencies and companies around the globe are tapping CorrDiff to accelerate predictions with applications in regional forecasting, renewable energy and disaster management. ([View Highlight](https://read.readwise.io/read/01jmwr604n4rjahqv00mf1rtrq))
