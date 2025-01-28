---
author: [[Mike James]]
title: "The Worm in the Machine"
date: 2025-01-28
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Mike James]]
- Full Title: The Worm in the Machine
- URL: https://www.i-programmer.info/news/105-artificial-intelligence/17728-the-worm-in-the-machine.html

## Highlights
- We have reached the point were we can create and train neural networks with trillions of connections, but when it comes to something more biologically accurate we are limited to a few hundred neurons. ([View Highlight](https://read.readwise.io/read/01jjp7rkqw9s30v4c4jy8d60qp))
- To investigate real neural networks takes a lot of computer power. One of the reasons is that to provide an accurate simulation you have to mimic the complex behavior of a neuron. Artificial neurons are huge simplifications of real biological neurons which have been suggested to be equal to a small group of artificial neurons. Could it be that real neurons do things that networks of artificial neurons don't do? One way to find out is to simulate them and see what happens. ([View Highlight](https://read.readwise.io/read/01jjp7s0xk9rhe0jn7mv2h8me1))
- The nematode worm, *Caenorhabditis elegans*, *C. elegans* to its friends and admirers, is one of the few organisms that we know the neural wiring of. It only has 302 neurons and we know exactly how they are wired together, so it is possible to think of simulating the entire network. This is the first time that a network the whole of *C. elegans,* including its body, has been attempted, and achieved.
  The latest work implements 92 muscle cells and the neural network to see how the simulation compares to the real worm's behavior. The worm exhibits easy-to-spot behaviors such as crawling, swimming and foraging and these can be used to judge how natural the behavior of the simulation is. ([View Highlight](https://read.readwise.io/read/01jjp7stj8dcecgda2n1mdzh3s))
- If you are familiar with implementing neural networks then this one might come as something of a shock. The neurons and cells were simulated using multi-compartment models that simulated the electrical characteristics of each type of neuron. There were five types in total corresponding to sensory, inter-neuron, command, head motor and body motor neurons. The body was simulated using a tetrahedral mesh with 3341 tetrahedrons and solved using a finite element application. ([View Highlight](https://read.readwise.io/read/01jjp7t8rajz429qb51rq1djad))
- When the simulation is run, the simulated worm seems to correspond to the neurological data that has been collected and it exhibits behavior that is not unlike the real worm:
  *"Notably, we observed that the trajectory of the C. elegans movement in our model was similar to the zigzag trajectory recorded in the experiments . In addition, C. elegans in both the simulations and experiments exhibited a realistic dorsoventral fluctuation during 3D movement"* ([View Highlight](https://read.readwise.io/read/01jjp7tnj1635btk426qssx29t))
- All great but....
  *"In our current model, we modeled 136 neurons rather than all 302 neurons, and the only behavior considered was zigzag locomotion. Training biophysically detailed neural network model is challenging and consumes much time and graphics processing unit memory resources. In the future, we will improve the optimization algorithm to effectively train larger detailed neural networks that contain all 302 neurons, with more constraints such as single-neuron voltages, and reproduce more behaviors beyond zigzag locomotion."*
  It is slightly humbling that we can only manage 136 neurons, which should be compared to the billions used in large language models. ([View Highlight](https://read.readwise.io/read/01jjp7v5a7kxtd84pbga4829w6))
