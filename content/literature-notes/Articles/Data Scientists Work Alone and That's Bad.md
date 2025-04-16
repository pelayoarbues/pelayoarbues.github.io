---
author: [[Ethan Rosenthal]]
title: "Data Scientists Work Alone and That's Bad"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.ethanrosenthal.com/favicon.ico)

## Metadata
- Author: [[Ethan Rosenthal]]
- Full Title: Data Scientists Work Alone and That's Bad
- Document Note: This essay discusses the importance of code review in software engineering and the challenges of data science, where the norm is for data scientists to work alone. The author highlights the benefits of code review and collaboration, such as receiving feedback and learning more quickly, and explains the risks of data scientists working alone, such as the difficulty of collaborating and maintenance becoming a massive burden. The author also proposes solutions to make data science more collaborative, such as sharing Jupyter notebooks or setting up regular pair programming sessions.
- URL: https://www.ethanrosenthal.com/2023/01/10/data-scientists-alone/

## Highlights
- many data scientists like myself who start with scientific programming and then find their way into software engineering are particularly dangerous. We have the ability to pretty much program whatever we want. This makes us prolific which is a terrible trait to combine with sloppy code. ([View Highlight](https://read.readwise.io/read/01gr4vay0fj50sskzbpca2a5h1))
- The norm is that of a lonely life for the data scientist. Whether they lie near analytics, machine learning, or elsewhere in the large latent space that spans this ill-defined role, just like in the curse of high-dimensionality, they are likely alone. ([View Highlight](https://read.readwise.io/read/01gr4vc56f1k5v4jqxb6a9x3fe))
- Analyses, models, one-off-scripts: all of these endeavors are usually built solo. It’s just hard to collaborate on training a machine learning model. And so, we often work alone. Each project is a [one-bus](https://en.wikipedia.org/wiki/Bus_factor) project. Beyond the inherent business risks that this represents, this kinda sucks for learning and development. ([View Highlight](https://read.readwise.io/read/01gr4vcme5pksbqhdj4fw0sqfx))
- I found myself at at my first data science job where I thought I knew everything after a single year. I saw how the systems had been built and thought, “Psshhh, I can do that”. I left to be the first data scientist at a Seed stage startup. I built some things and felt smart.
  The company was smarter, though, since they hired a boss for me. My boss came from a more data engineering-y background, and then they hired some more data engineers. I quickly learned that my mess of spaghetti code, AWS hacking, and complete lack of tests were, perhaps, not following best practices. ([View Highlight](https://read.readwise.io/read/01ha1rdkfrws322baj2mq29m52))
    - Tags: [[favorite]] 
- My code started going through code review. Just like in high school, my Pull Requests came back riddled in comments. This experience was invaluable. I learned so many things! One big thing I learned was that if I absorbed the feedback and implemented it on my next PR, then that PR would get merged quicker. ([View Highlight](https://read.readwise.io/read/01ha1rdyzmngqx6tbyv0srgdks))
- In the Data world, so much gets built from scratch. Often, each machine learning “task” or model gets its own custom training code. It might even get its own code repository. This makes it hard for new people to contribute since they have to start from nothing. Maintenance becomes a massive burden. Each model uses its own training framework, libraries, etc… that are likely only properly known by the original author. Just wait until the author leaves the company and somebody else has to take over. ([View Highlight](https://read.readwise.io/read/01ha1rfw8qjpmn89ngdk7g518w))
- So how do we fix this? Shared libraries for common data operations are a nice place to start. Instead of copy/pasting the same code in between each Jupyter notebook for authenticating and querying the database, move that code into a shared library. Encouraging the data team to contribute to these libraries will facilitate code review and nudge people towards a team mindset. ([View Highlight](https://read.readwise.io/read/01ha1rgcs05xs9n1stjekf7g3r))
- One can take things further. On my current team, we all work within a single repo that handles both training and serving of models. This *constrains* model training and serving to match the codebase. The benefits of this are that everybody works (and reviews) the same training and serving code which helps with knowledge sharing and reduces the bus factor of a given model. ([View Highlight](https://read.readwise.io/read/01ha1rgjn6g7cck8cg68j40zwk))
