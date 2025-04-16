---
author: [[Avi Chawla]]
title: 'A Visual and Intuitive Guide to What Makes ReLU a Non-Linear Activation Function'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f8dc2c8-4b8f-4fa8-bcdd-f1151afb8ae3_1948x1644.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: A Visual and Intuitive Guide to What Makes ReLU a Non-Linear Activation Function
- URL: https://www.blog.dailydoseofds.com/p/a-visual-and-intuitive-guide-to-what

## Highlights
- Of all possible activation functions, most people struggle to intuitively understand how ReLU adds non-linearity to a neural network. ([View Highlight](https://read.readwise.io/read/01hggs3r8pdfp2f7wfr6tehcke))
- The confusion is quite obvious because, with its seemingly linear shape, calling it a non-linear activation function isn’t that intuitive. ([View Highlight](https://read.readwise.io/read/01hggs46pqf4cnkerq4sw30pv7))
- “**How does ReLU allow a neural network to capture non-linearity?**”
  If you have ever struggled with this, then today, let me provide an intuitive explanation as to why ReLU is considered a non-linear activation function. ([View Highlight](https://read.readwise.io/read/01hggs4d6agf6yw9d2wfkmm4nw))
- Effectively, it’s the same ReLU function but shifted `h` units to the right:
  [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51fd87ae-5184-4335-9234-b9f5089c2670_641x122.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51fd87ae-5184-4335-9234-b9f5089c2670_641x122.png)
  Keep this in mind as we’ll return to it shortly.
  Breaking down the output of a neural network ([View Highlight](https://read.readwise.io/read/01hggs5nw33n24v5n5hb1q52p8))
- • First, we have input from the previous layer (x₁, x₂, …, xₙ).
  • This is multiplied element-wise by the weights (w₁, w₂, …, wₙ).
  • Next, the bias term (`b`) is added, and every neuron has its own bias term.
  • The above output is passed through an activation function (ReLU in this case) to get the output activation of a neuron. ([View Highlight](https://read.readwise.io/read/01hggs680vdf14n0rtzrb81px5))
- If we notice closely, this final output activation of a neuron is analogous to the `ReLU(x−h)` function we discussed earlier.
  [](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F693b2da2-8545-4e61-88ab-2b135bae9a8e_1000x346.jpeg) ([View Highlight](https://read.readwise.io/read/01hggs6djy98h9b3vam56pdh3d))
- [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F693b2da2-8545-4e61-88ab-2b135bae9a8e_1000x346.jpeg)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F693b2da2-8545-4e61-88ab-2b135bae9a8e_1000x346.jpeg)
  Now, let’s zoom out and **consider all neurons in the last hidden layer**. ([View Highlight](https://read.readwise.io/read/01hggs76je0532v4xy7d2h8q8g))
- Essentially, the final output is a weighted sum of **differently shifted** ReLU activations computed in the last hidden layer.
  [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa323bb08-0368-49d7-bb19-59d2b73633e4_579x290.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa323bb08-0368-49d7-bb19-59d2b73633e4_579x290.png) ([View Highlight](https://read.readwise.io/read/01hggshgwwnwe89j99c6hw0my0))
- Now that we know what makes up the final output of a network, let’s plot the **weighted sum of some dummy differently shited ReLU functions** and see how the plot looks.
  Let’s start with two terms:
  [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb86cc088-502a-42f9-8bd6-b71a1c6c6645_1020x500.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb86cc088-502a-42f9-8bd6-b71a1c6c6645_1020x500.png) ([View Highlight](https://read.readwise.io/read/01hggshvpqhdettmzgq7jac3nv))
- In the above image, we notice that adding two ReLU terms changes the slope at a point.
  Let’s add more ReLU terms to this.
  [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64e9bb87-0f44-4c0b-ae48-b324f721c895_888x395.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64e9bb87-0f44-4c0b-ae48-b324f721c895_888x395.png)
  This time, we see two bends in the final output function. ([View Highlight](https://read.readwise.io/read/01hggsj66mhqkjra14ttq7z7ba))
- The above illustrations depict that we can potentially add more and more ReLU terms, each shifted and multiplied by some constant to get any shape of the curve, linear or non-linear.
  [![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48fc1b66-30fc-471b-b708-a231a6b3009f_731x249.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48fc1b66-30fc-471b-b708-a231a6b3009f_731x249.png) ([View Highlight](https://read.readwise.io/read/01hggsjnsd9pyh5sqs0zbagzw3))
- The above equation has no restriction on the nature of the curve; it may be linear or non-linear.
  The task is to find those specific weights (w₁, w₂, …, wₙ) which closely estimate the function `f(x)`.
  Theoretically, the precision of approximation can be entirely perfect if we add a `ReLU` term for each possible value of `x`. ([View Highlight](https://read.readwise.io/read/01hggsk3y82r2nhsssyrrdvh1n))
- The core point to understand here is that **ReLU NEVER adds perfect non-linearity to a neural network**.
  Instead, it’s the **piecewise linearity** of ReLU that gives us a perception of a non-linear curve.
  Also, as we saw above, the strength of ReLU lies not in itself but in an entire army of ReLUs embedded in the network.
  This is why having a few ReLU units in a network may not yield satisfactory results. ([View Highlight](https://read.readwise.io/read/01hggsm3cd0jrryn8mpvyes40e))
- As shown above, as the number of ReLU units increases, the approximation also becomes better. At 100 ReLU units, the approximation appears entirely non-linear.
  **And this is precisely why ReLU is called a non-linear activation function.** ([View Highlight](https://read.readwise.io/read/01hggsmgfht738fd1r0f7rxmwp))
