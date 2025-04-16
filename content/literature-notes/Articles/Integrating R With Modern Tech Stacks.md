---
author: "[[Dean Marchiori]]"
title: 'Integrating R With Modern Tech Stacks'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://www.deanmarchiori.com/posts/2024-12-02-r-docker/featured.png)

## Metadata
- Author: [[Dean Marchiori]]
- Full Title: Integrating R With Modern Tech Stacks
- URL: https://www.deanmarchiori.com/posts/2024-12-02-r-docker/

## Highlights
- There seems to be a subconscious deterrent from using specialised tools like R as part of a production or core tech stack, as if it’s somehow not compatible with other forms of technology. ([View Highlight](https://read.readwise.io/read/01je74qfb4hhs3gvnsv0bve306))
- Which is clealy BS. Over the past year a suprising number of my projects have involved ways to package and integrate complex R code into an existing application. ([View Highlight](https://read.readwise.io/read/01je74qhk4ke4j88zk11eyzpxn))
- Docker addresses these challenges by containerizing applications along with their dependencies, ensuring that they run consistently across environments. For R, this means you can create a portable, self-contained environment that includes your scripts, libraries, and configurations—all packaged in a lightweight container. ([View Highlight](https://read.readwise.io/read/01je74qrdvxsxt8f8as1g23fgn))
- 1. **Set Up Your R Environment**
  Before diving into Docker, start by setting up your R project. Ensure that:
  • Your scripts are modular and well-organized. Below we have a basic setup where the script or code you want to run is in the `app.R` file.
  • Dependencies are explicitly listed. I suggesting using [`{renv}`](https://rstudio.github.io/renv/articles/renv.html), its good practice in general but it also makes installing the required packages a lot easier later on when we write our Dockerfile. ([View Highlight](https://read.readwise.io/read/01je74r4wj3py2myph930bd3cn))
- Example or a bare-minimum directory structure:
  my-r-project/ 
  │ 
  ├── R/ # other R scripts or function
  ├── data/ # Data files (if applicable) 
  ├── Dockerfile # Docker configuration file 
  ├── renv.lock # Dependency file 
  ├── app.R # Entry point 
  └── README.md # Documentation ([View Highlight](https://read.readwise.io/read/01je74rekyx77a8bbz4tp75ez2))
- Key Notes on This Dockerfile:
  • **Base Image:** We use the `rocker/r-ver` image, which is optimized for R and maintained [here](https://rocker-project.org/). 
  • **System Dependencies:** Add system-level dependencies your R packages might require. 
  • **Install R packages:** Notice how we are replying on `renv`’s automated package restoration? ([View Highlight](https://read.readwise.io/read/01je74rvsxwzg6gvpgns1rhqzx))
- If you are doing serious work, you will likely want to move past cute ASCII art. In these cases you should invest a little more time into ensuring your R workflow is fit for purpose. Here are some resources to help go to the next level:
  • If you want an easy guide to writing better, production quality R code [check out my e-book.](https://datasciworkflows.netlify.app/)
  • In particular, if you want to deploy a predictive model endpoint I cover this in the following [case study](https://datasciworkflows.netlify.app/chapters/case_study).
  • For a simple example of deploying R as a shiny app using a base Docker image [check this repo out.](https://github.com/deanmarchiori/dockerised-shiny)
  • You can even set up your own development environment using Docker. Just [follow these steps.](https://www.deanmarchiori.com/posts/2023-03-17-building-your-own-r-data-science-lab/) ([View Highlight](https://read.readwise.io/read/01je74scyqgj0whpp7hb5vjx72))
