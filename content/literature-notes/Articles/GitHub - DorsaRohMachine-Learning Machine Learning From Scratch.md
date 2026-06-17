---
author: "[[DorsaRoh]]"
title: 'GitHub - DorsaRoh/Machine-Learning: Machine Learning From Scratch'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://opengraph.githubassets.com/29bf18668b4d740994e459a7d986a50ccc5d0e35ecde180ce65ecdd7d8e0b84c/DorsaRoh/Machine-Learning)

## Metadata
- Author: [[DorsaRoh]]
- Full Title: GitHub - DorsaRoh/Machine-Learning: Machine Learning From Scratch
- URL: https://github.com/DorsaRoh/Machine-Learning#readme

## Highlights
- Machine Learning from Scratch[](https://github.com/DorsaRoh/Machine-Learning#machine-learning-from-scratch)
  Implementations of ML, using only numpy.
  1. [Neural Networks](https://github.com/DorsaRoh/Machine-Learning#neural-networks)
  2. [Transformer](https://github.com/DorsaRoh/Machine-Learning#transformer) ([View Highlight](https://read.readwise.io/read/01j9rm96ckehr1n7734adsjzga))
- How Neural Networks Work[](https://github.com/DorsaRoh/Machine-Learning#how-neural-networks-work)
  Now that we know what a neural network is, let's dive into how it operates.
  Connections Between Neurons[](https://github.com/DorsaRoh/Machine-Learning#connections-between-neurons)
  • Each neuron in one layer is connected to all neurons in the next layer.
  • The strength of each connection is called its `"weight"`.
  • During training, these weights are adjusted to identify patterns in the data. ([View Highlight](https://read.readwise.io/read/01j9rm9s331sbfd37wa61weth5))
- How a Neuron's Activation is Determined[](https://github.com/DorsaRoh/Machine-Learning#how-a-neurons-activation-is-determined)
  The activation of a neuron is calculated based on:
  1. The activations of all neurons in the **previous** layer
  2. The weights of the connections to those neurons
  Here's how it works:
  1. Multiply each incoming activation by its corresponding weight
  2. Sum up all these products
  3. Add a special value called the `"bias"`
  This can be represented by the formula:
  weighted_sum = w1*a1 + w2*a2 + ... + wn*an + bias
  Where:
  • `wi` is the weight of the connection from neuron `i` in the previous layer
  • `ai` is the activation of neuron `i` in the previous layer
  • bias is an extra adjustable value
  [![Neural Network Architecture](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/Neural-Networks/4-weightedSum.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/Neural-Networks/4-weightedSum.png) ([View Highlight](https://read.readwise.io/read/01j9rm9xnhd10300jx28kmw471))
- The Role of Bias[](https://github.com/DorsaRoh/Machine-Learning#the-role-of-bias)
  The bias serves an important function:
  • It shifts the activation function
  • This allows the neuron to adjust its sensitivity to inputs
  • A positive bias makes the neuron more likely to activate
  • A negative bias makes it less likely to activate
  [![Neural Network Architecture](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/Neural-Networks/5-weightsAndBias.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/Neural-Networks/5-weightsAndBias.png) ([View Highlight](https://read.readwise.io/read/01j9rma2j5rrbbqazaxkn6heqp))
- Activation Functions[](https://github.com/DorsaRoh/Machine-Learning#activation-functions)
  After calculating the weighted sum, we apply an "activation function". Common choices include:
  1. Sigmoid function: Maps the output to a range between 0 and 1
  2. ReLU (Rectified Linear Unit): Outputs the input if it's positive, otherwise outputs 0
  In this guide, we'll focus on ReLU:
  def relu(self, x):
  return np.maximum(0, x)
  ReLU is popular because it helps the network learn more effectively. ([View Highlight](https://read.readwise.io/read/01j9rma4n0eqsmxw97r7kzrs8c))
- Training the Neural Network[](https://github.com/DorsaRoh/Machine-Learning#training-the-neural-network)
  Now that we understand the basic structure and operation of a neural network, let's look at how it learns.
  Forward Propagation[](https://github.com/DorsaRoh/Machine-Learning#forward-propagation)
  This is the process of passing input through the network to get an output:
  1. Start with the input layer
  2. For each subsequent layer: a. Calculate the weighted sum for each neuron b. Apply the activation function
  3. Repeat until we reach the output layer ([View Highlight](https://read.readwise.io/read/01j9rma947qkmcya3k7dcetstd))
- Measuring Performance: The Loss Function[](https://github.com/DorsaRoh/Machine-Learning#measuring-performance-the-loss-function)
  To train our network, we need to measure how well it's doing. We do this with a loss function:
  1. Compare the network's output to the desired output
  2. Calculate the difference
  3. Square this difference (to make all values positive)
  4. Sum these squared differences for all output neurons
  The result is called the "loss". **The smaller the loss, the better the network is performing.**
  def mse_loss(self, y, activations): 
  return np.mean((activations-y)**2) ([View Highlight](https://read.readwise.io/read/01j9rmac2za3xxa15j3shmhf4m))
- Gradient Descent and Backpropagation[](https://github.com/DorsaRoh/Machine-Learning#gradient-descent-and-backpropagation)
  To improve the network's performance, we need to adjust its weights and biases. We do this using two key concepts:
  1. [Gradient Descent](https://github.com/DorsaRoh/Machine-Learning#gradient-descent): A method for minimizing the loss
  2. [Backpropagation](https://github.com/DorsaRoh/Machine-Learning#backpropagation): An algorithm for calculating how to adjust each weight and bias
  Here's how it works:
  1. Calculate the gradient of the loss function
  • This tells us how changing each weight and bias affects the loss
  2. Update weights and biases in the direction that reduces the loss
  3. Repeat this process many times
  Gradient Descent[](https://github.com/DorsaRoh/Machine-Learning#gradient-descent)
  • Optimization algorithm to **minimize the cost function**.
  • Uses gradients to update/adjust weights and biases in the direction that minimizes the cost.
  • We look for the **negative** gradient of the cost function, which tells us how we need to change the weights and biases to most efficiently decrease the cost
  *Backpropagation is the algorithm used to CALCULATE these gradients*
  [![Gradient Descent](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/Neural-Networks/9-gradientDescent.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/Neural-Networks/9-gradientDescent.png)
  Backpropagation[](https://github.com/DorsaRoh/Machine-Learning#backpropagation)
  The algorithm for determining **how a SINGLE training example would like to nudge the weights and biases, not just if they should go up or down, but in terms of what relative proportions to those changes cause the most rapid decrease to the cost.**
  • The magnitude of a gradient is how sensitive the cost function is to each weight and bias.
  • Ex. you have gradients [3.2, 0.1]. Nudging the weight with gradient 3.2 results in a cost 32x greater, than the cost when nudging (the same way) the weight with gradient 0.1
  Activation is influenced in three ways: 
  w1*a1 + w2*a2 + ... + wn*an + bias
  • Changing the bias
  • Increasing a weight, in proportion to its activation (the larger the activation, the greater the change)
  • Changing all activations in previous layer, in proportion to its weights (the larger the weight, the greater the change)
  • but we don't have direct influence over activations themselves, just the weights and biases
  "Propagate backwards": backpropagation is applied in the direction from the last layer to the first layer. 
  ------ 
  **∂C/∂w = ∂C/∂a × ∂a/∂z × ∂z/∂w**
  *where C is cost, w is weight, a is activation (output of neuron), z is the weighted sum (input to neuron, before activation).*
  This tells us how much the cost (error) would change if we slightly adjusted a particular weight.
  • It indicates the direction to change the weight. If the derivative is positive, decreasing the weight will reduce the error, and vice versa.
  • The magnitude tells us how sensitive the error is to changes in this weight. Larger magnitude = weight has bigger impact on error
  [![Neural Network Architecture](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/Neural-Networks/10-backprop.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/Neural-Networks/10-backprop.png)
  Averaged nudges to each weight and bias is the negative gradient of the cost function.
  [![Neural Network Architecture](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/Neural-Networks/11-backprop-2.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/Neural-Networks/11-backprop-2.png) ([View Highlight](https://read.readwise.io/read/01j9rmap4542cen6dwz1kt7xtt))
- raining a neural network involves repeating these steps many times:
  1. Forward propagation: Pass input through the network
  2. Calculate the loss: Measure how far off the output is
  3. Backpropagation: Calculate how to adjust weights and biases
  4. Update weights and biases: Make small adjustments to improve performance
  After many iterations, the network learns to recognize patterns in the training data and can apply this knowledge to new, unseen data. ([View Highlight](https://read.readwise.io/read/01j9rmatjtdz5mx55j3k5r2pqa))
- Transformer[](https://github.com/DorsaRoh/Machine-Learning#transformer)
  Overview[](https://github.com/DorsaRoh/Machine-Learning#overview)
  Input[](https://github.com/DorsaRoh/Machine-Learning#input)
  A collection of real numbers, which could be:
  • A simple list, a 2D matrix, or even a higher-dimensional tensor
  • This collection is progressively transformed through multiple layers, with each layer being an array of real numbers. The transformation continues until the final output layer is reached
  • Ex. in a text-processing model like GPT, the final layer generates a list of numbers representing the probability distribution of all possible next words that can be generated
  Output:[](https://github.com/DorsaRoh/Machine-Learning#output)
  A probability distribution over all potential next tokens
  [![Output Example](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/4-outputEX.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/4-outputEX.png) ([View Highlight](https://read.readwise.io/read/01j9rmbq75b0hwrsy7bjtmt5t9))
- Tokens[](https://github.com/DorsaRoh/Machine-Learning#tokens)
  Tokens are "little pieces" of information (ex. words, combinations of words, sounds, images)
  • Every token is associated with a vector (some list of numbers)
  • encodes the meaning of that piece
  • ex. in considering these vectors as coordinates, words with similar meanings tend to land near each other
  [![Tokens](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/2-tokens.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/2-tokens.png) [![Token Vectors](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/3-tokenvectors.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/3-tokenvectors.png) ([View Highlight](https://read.readwise.io/read/01j9rmbyc20vy3hcndaf1cyqb9))
- Embeddings[](https://github.com/DorsaRoh/Machine-Learning#embeddings)
  Words that are used and occur in the same context tend to purport similar meanings (distributional semantics)
  • Break up the input into little chunks, then into vectors. These chunks are called tokens
  • The model has predefined vocabulary (list of all possible words)
  • Embedding matrix (W_E): single column for each word
  • The dimensions of the embedding space can be very high (ex. 12,288)
  • theoretically, E(man) - E(woman) ~= E(king) - E(queen)
  • the dot product of two vectors, is a measure of how well they align. In this case, this acts as a measure of similarity between words ([View Highlight](https://read.readwise.io/read/01j9rmc9t87yw2yc0r2m8wyfqe))
- Below is an image of the embedding matrix. Each word corresponds to a specific vector, with no reference to its context. It is the Attention block's responsibility to update a word's vector with its context. (to be discussed later)
  [![Embedding Matrix](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/10-embeddingmatrix.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/10-embeddingmatrix.png) ([View Highlight](https://read.readwise.io/read/01j9rmceh5h45vj73td5jrwj0a))
- Positional Encoders[](https://github.com/DorsaRoh/Machine-Learning#positional-encoders)
  Positional encoding provides info about the order of tokens in a sequence.
  • ex. Where a specific word is positioned in a sentence.
  • A fixed positional encoding vector is added to each word's embedding.
  *NOTE: word embeddings & positional embeddings are separate. Word embeddings capture SEMANTIC MEANING, while positional encodings capture the ORDER of tokens* ([View Highlight](https://read.readwise.io/read/01j9rmcj5w2k266xfg2znv44ww))
- Unembedding[](https://github.com/DorsaRoh/Machine-Learning#unembedding)
  In determining desired output of the transformer (a probability distribution of all possible tokens that can come next in the generating text), a well trained network on the particular dataset is able to determine the next best possible token by:
  1. Using a matrix (embedding matrix W_u) that maps the last vector/embedding in the context to a list of 50k values (one for each token in the vocabulary)
  2. Function that normalizes this into a probability distribution (softmax) ([View Highlight](https://read.readwise.io/read/01j9rmcterm82yx2ky1keewma9))
- Softmax (normalization)[](https://github.com/DorsaRoh/Machine-Learning#softmax-normalization)
  The desired output of a transformer is a probability distribution of all possible tokens that can come next in the generating text
  A probability distribution is defined as a sequence of numbers between 0-1, and that sums to 1. Softmax can give any sequence of numbers these criteria
  import numpy as np
  # given a sequence of numbers, each term `i`
  # softmax eqn: e^i/(sum of e^i for all terms) 
  # probability distribution: 
  # 1) all numbers are positive numbers 0-1 (e^i) 
  # sum of all numbers = 1 (sum of e^i of all terms)
  seq = [2, 4, 5]
  print(np.exp(seq)/np.sum(np.exp(seq)))
  # [0.03511903 0.25949646 0.70538451]
  [![Softmax Equation](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/8-softmaxEqn.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/8-softmaxEqn.png) ([View Highlight](https://read.readwise.io/read/01j9rmd8ch6kv3wayj5rqvm2d9))
- Temperature[](https://github.com/DorsaRoh/Machine-Learning#temperature)
  With softmax, the constant T added to the denominator of the exponents of e in the equation can cause more creative generated text
  • Makes the softmax outputs LESS extreme towards 0 and 1
  • This enables more unique text to be generated and different for each generation
  [![Softmax with Temperature](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/7-softmaxT.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/7-softmaxT.png) ([View Highlight](https://read.readwise.io/read/01j9rmde983zm8y35pbncy9vfx))
- Attention[](https://github.com/DorsaRoh/Machine-Learning#attention)
  Goal: enable the model to focus on different parts of the input sequence when producing an output for a specific token
  Attention Score[](https://github.com/DorsaRoh/Machine-Learning#attention-score)
  A value that represents how much focus (or attention) one word should give to another word in the sequence
  (Its derivation is explained later)
  Attention Block[](https://github.com/DorsaRoh/Machine-Learning#attention-block)
  Updates a word's embedding vector in reference to its context. Enables the transfer of information from one embedding to another
  Prior to Attention, the embedding vector of each word is consistent, regardless of its context (embedding matrix). Therefore, the motivation of Attention is to update a word's embedding vector depending on its context (i.e. surrounding tokens) to capture this specific contextual instance of the word
  [![Attention](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/10-embeddingmatrix.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/10-embeddingmatrix.png)
  The computation to predict the next token relies entirely on the final vector of the current sequence
  Initially, this vector corresponds to the embedding of the last word in the sequence. As the sequence passes through the model's attention blocks, the final vector is updated to include information from the entire sequence, not just the last word. This updated vector becomes a summary of the whole sequence, encoding all the important information needed to predict the next word
  [![Attention Last Vector](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/12-attentionlastvector.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/12-attentionlastvector.png) ([View Highlight](https://read.readwise.io/read/01j9rme1p2w1d7fej0yb8f2w7a))
- Single-Head Attention[](https://github.com/DorsaRoh/Machine-Learning#single-head-attention)
  Goal: series of computations to produce a new refined set of embeddings
  ex. Have nouns ingest the meanings of their corresponding adjectives
  [![Attention Embeddings](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/13-attentionEmbeds.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/13-attentionEmbeds.png) ([View Highlight](https://read.readwise.io/read/01j9rme5vh82fnfhhvy7scbxjk))
- Query[](https://github.com/DorsaRoh/Machine-Learning#query)
  Query: represents the "question"/"focus" that the single-head attention is asking about the current word ex. if the current word is "cat" in the sentence "The cat sat on the mat", the Query for "cat" might be asking, "Which other words (Keys) in this sentence should I focus on to understand cat better?"
  Key[](https://github.com/DorsaRoh/Machine-Learning#key)
  Key: serves as a criterion/reference point against which the Query is compared to determine the relevance of each word
  • helps the model understand which other words are related/important to the current word by evaluating how similar/relevant they are to the Query
  • ex. in the sentence "The cat sat on the mat", the Key for "sat" might contain info that represents the action/verb aspect of the sentence.
  • the Query for "cat" might compare itself to this Key to determine that "sat" is relevant to understanding the action associated with "cat" ([View Highlight](https://read.readwise.io/read/01j9rmeqxkve50gyaztf1ctk67))
- Attention Score[](https://github.com/DorsaRoh/Machine-Learning#attention-score-1)
  Attention Score: tells us how relevant each word is
  • i.e. value that represents how much focus/attention one word (Query) should give to another word in the sequence (Key)
  • computed by comparing the Query vector of the current word with the Key vectors of all other words (including itself) in the sequence
  • score indicates relevance/importance to each word in the current word
  calculated as: the dot product between the Query and Key vectors
  • higher dot product: Key is more "relevant" to Query
  • This means the model gives more weight to the Value vector of that word when forming the final representation of the Query word
  • ex. in the sentence "The cat sat on the mat," the word "cat" would have a higher influence on the final understanding of "sat" if the model finds "cat" relevant to "sat" based on their Query-Key relationship
  Input: Query, Key and Value matrices
  Output: matrix where each vector is the weighted sum of the Value vectors, where the weights come from the attention scores (which are based on the dot product of the Query and Key matrices)
  Steps:
  1. Create weight matrices (initialized randomly initially. same dimensions as embeddings)
  2. Get Query, Key values from embed.py (i.e. linear transformation applied to the vectors of the (word embeddings & positional encoding) with weight matrices, for each token)
  3. Calculate the attention score (dot product of the Query and Key matrices)
  4. Apply masking to the attention scores
  5. Apply softmax to the (masked) attention scores (this is called normalization)
  6. Use attention scores to weight the Value vectors
  7. Output step 6.
  [![Query W1](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/14-queryW1.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/14-queryW1.png) ([View Highlight](https://read.readwise.io/read/01j9rmf4x8m0308p4tkgtvzgpg))
- Masking[](https://github.com/DorsaRoh/Machine-Learning#masking)
  Masking is to prevent later tokens influencing earlier ones during the training process. This is done by setting the entries of the older tokens to -infinity. So when softmax is applied, they are turned to 0. ([View Highlight](https://read.readwise.io/read/01j9rmfhmd2g0hgknbv71b62b5))
- Why mask?
  • During the train process, every possible subsequence is trained/predicted on for efficiency.
  • One training example, effectively acts as many.
  • This means we never want to allow later words to influence earlier words (because they essentially "give away" the answer for what comes next/the answer to the predictions)
  [![Subsequence Training](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/21-subsequenceTraining.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/21-subsequenceTraining.png) ([View Highlight](https://read.readwise.io/read/01j9rmfp1zdp4z14cw52zzhrd2))
- Softmax[](https://github.com/DorsaRoh/Machine-Learning#softmax)
  After masking, softmax (normalization) is applied. Masking was done to ensure that later tokens do not affect earlier tokens in the training process. So, the older tokens' entries are set to -infinity during the masking phase, to be transformed into 0 with softmax.
  [![Masking and Softmax](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/22-maskingANDsoftmax.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/22-maskingANDsoftmax.png) ([View Highlight](https://read.readwise.io/read/01j9rmft8jwxsz6qpe5ws4r0hj))
- Value[](https://github.com/DorsaRoh/Machine-Learning#value)
  Value matrix W_v is multiplied by the embedding of a word, and this is added to the embedding of the next word
  Values essentially answer: IF a word is relevant to adjusting the meaning of something, what exactly should be added to the embedding of that something else, in order to reflect this?
  Value: vector that holds the actual info that will be passed along the next layer of the network if a word is deemed relevant based on the attention scores
  • after computing the attention scores, these scores are used to weigh the Values
  • the weighted sum of these Values is then used as the output for the current word
  • continuing with the sentence "The cat sat on the mat", if "sat" (Key) is deemed important for "cat" (Query), the Value associated with "sat" will contribute significantly to the final representation of "cat"
  • this helps the model understand that "cat" is related to the action of "sitting"
  [![Value Matrix](https://github.com/DorsaRoh/Machine-Learning/raw/main/assets/24-valueMatrix.png)](https://github.com/DorsaRoh/Machine-Learning/blob/main/assets/24-valueMatrix.png) ([View Highlight](https://read.readwise.io/read/01j9rmfxky40a01d8s2efqfys2))
- Multi-Head Attention[](https://github.com/DorsaRoh/Machine-Learning#multi-head-attention)
  An Attention block is made up of many Attention heads running in parallel (multi-headed attention)
  By running many distinct heads in parallel, we are giving the model the capacity to learn many distinct ways that context changes meaning
  In other words, multiple instances of Self Attention class running in parallel, each instance with different weight matrices
  Steps:
  1. Declare multiple heads/instances of Self Attention running in parallel
  2. Each head/instance of Self Attention class focuses on different parts of the input by having its own set of weight matrices (W_q, W_k, W_v)
  3. Each heads/instances of Self Attention's output is concatenated along the embedding dimension (input of each Self Attention class)
  4. Concatenated output is passed through a final linear transformation (a weight matrix)
  • To combine the information from all heads into a single output ([View Highlight](https://read.readwise.io/read/01j9rmg79bxmvh9vc3jpk7s2y4))
- Why Concatenate and Apply a Final Linear Transformation?[](https://github.com/DorsaRoh/Machine-Learning#why-concatenate-and-apply-a-final-linear-transformation)
  The reason for concatenating the outputs from all heads is that each head has learned something different about the input. By concatenating, we combine these insights into a single, unified representation
  The final linear transformation is applied to this concatenated output to bring it back to the original embedding dimension
  a. Concatenation In multi-head attention, each head learns different aspects of the input because each head operates on a different part of the embedding (head_dim). By concatenating the outputs from all the heads, we are combining these different learned representations into a single vector that encapsulates all these different insights
  b. Final linear transformation The final linear transformation, done using a weight matrix, mixes the information from the different heads back into a single vector of the original embedding_dim. This step is crucial because it allows the model to create a unified representation that integrates the different perspectives learned by each head ([View Highlight](https://read.readwise.io/read/01j9rmge1tez83ckbv54tvn0f9))
