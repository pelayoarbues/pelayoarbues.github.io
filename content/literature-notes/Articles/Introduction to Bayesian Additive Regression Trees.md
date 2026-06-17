---
author: "[[Juan Martín Loyola]]"
title: 'Introduction to Bayesian Additive Regression Trees'
date: "2025-05-11"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://jmloyola.github.io/images/posts/2019-06-23-introduction-to-bart/header_san_luis.jpg)

## Metadata
- Author: [[Juan Martín Loyola]]
- Full Title: Introduction to Bayesian Additive Regression Trees
- URL: https://jmloyola.github.io/posts/2019/06/introduction-to-bart

## Highlights
- Bayesian Additive Regression Trees (BART) is a sum-of-trees model for approximating an unknown function f. Like other ensemble methods, every tree act as a weak learner, explaining only part of the result. All these trees are of a particular kind called decision trees. The decision tree is a very interpretable and flexible model but it is also prone to overfitting. To avoid overfitting, BART uses a regularization prior that forces each tree to be able to explain only a limited subset of the relationships between the covariates and the predictor variable. ([View Highlight](https://read.readwise.io/read/01jty1px718d3nbt87gjngn7q7))
- The problem BART tackles is making inference about an unknown function f that predicts an output y using a p dimensional vector of inputs x=(x1,…,xp) when
  y=f(x)+ϵ,ϵ∼N(0,σ2)
  To solve this regression problem, BART approximates f(x)=E(y∣x) using f(x)≈h(x)≡∑mj=1gj(x), where each gj denotes a regression tree:
  y=h(x)+ϵ,ϵ∼N(0,σ2) ([View Highlight](https://read.readwise.io/read/01jty1qgg73akn4rvbafwxfaey))
- The BART model consists of two parts: a sum-of-trees model and a regularization prior on the parameters of that model. ([View Highlight](https://read.readwise.io/read/01jty1r92q2rqadb50pze73wfg))
- To elaborate the form of the sum-of-trees model (2), we begin by establishing notation for a single tree model. Let T denote a binary tree consisting of a set of interior node decision rules and a set of terminal nodes, and let M={μ1,μ2,…,μb} denote a set of parameter values associated with each of the b terminal nodes of T. ([View Highlight](https://read.readwise.io/read/01jty1s4psx6skb3yhdtgsaj3j))
- The decision rules are binary splits of the predictor space of the form {x∈A} vs {x∉A} where A is a subset of the range of x. These are typically based on the single components of x=(x1,…,xp) and are of the form {xi≤c} vs {xi>c} for continuous xi. Given the way it is constructed, the tree is a full binary tree, that is, each node has exactly zero or two children. Each x value is associated with a single terminal node of T by the sequence of decision rules from top to bottom, and is then assigned the μi value associated with this terminal node. For a given T and M, we use g(x;T,M) to denote the function which assigns a μi∈M to x. ([View Highlight](https://read.readwise.io/read/01jty1t2zhwcaza3hpzfzckb8g))
- Each such μij will represent a main effect when g(x;Tj,Mj) depends on only one component of x (i.e., single variable), and will represent an interaction effect when g(x;Tj,Mj) depends on more than one component of x (i.e., more than one variable). Thus, the sum-of-trees model can incorporate both main effects and interaction effects. And because (3) may be based on trees of varying sizes, the interaction effects may be of varying orders. In the special case where every terminal node assignment depends on just a single component of x, the sum-of-trees model reduces to a simple additive function, a sum of step functions of the individual components of x. ([View Highlight](https://read.readwise.io/read/01jty1w02t7xdrsaa73hxxtchq))
- With a large number of trees, a sum-of-trees model gains increased representation flexibility which endows BART with excellent predictive capabilities. This representational flexibility is obtained by rapidly increasing the number of parameters. Indeed, for fixed m, each sum-of-trees model (3) is determined by (T1,M1),…,(Tm,Mm) and σ, which includes all the bottom node parameters as well as the tree structures and decision rules. ([View Highlight](https://read.readwise.io/read/01jty1wyh9w557ekw4h93pkebz))
- The BART model specification is completed by imposing a prior over all the parameters of the sum-of-trees model, namely, (T1,M1),…,(Tm,Mm) and σ. There exists specifications of this prior that effectively regularize the fit by keeping the individual tree effects from being unduly influential. Without such a regularizing influence, large tree components would overwhelm the rich structure of (3), thereby limiting the advantages of the additive representation both in terms of function approximation and computation. ([View Highlight](https://read.readwise.io/read/01jty1ynpfwewqdb23mpwy2gdw))
- Chipman et al. proposed a prior formulation in term of just a few interpretable hyperparameters which govern priors on Tj, Mj and σ. When domain information is not available the authors recomend using an *empirical Bayes* approach and calibrate the prior using the observed variation in y. Or at least to obtaing a range of plausible values and the perform cross-validation to select from these values. ([View Highlight](https://read.readwise.io/read/01jty1zc7fhphbhqy75wtx7w8m))
- In order to simplify the specification of the regularization prior we restrict our attention to priors for which the tree components (Tj, Mj) are independent of each other and also independent of σ, and the terminal node parameters of every tree are independent. ([View Highlight](https://read.readwise.io/read/01jty20bwfx9rtfng7p7e8w998))
- The Tj prior, p(Tj), is specified by three aspects: ([View Highlight](https://read.readwise.io/read/01jty20jy2qwpdjez747empt47))
- • the probability that a node at depth d=(0,1,2,…) is nonterminal, given by: α(1+d)β with α∈(0,1) and β∈[0,∞). Node depth is defined as distance from the root. Thus, the root itself has depth 0, its first child node has depth 1, etc. This prior controls the tree depth. For a sum-of-trees model with m large, we want the regularization prior to keep the individual tree components small. To do that, we usually use α=0.95 and β=2. Even though this prior puts most probability on tree sizes of 2 or 3, trees with many terminal nodes can be grown if the data demands it.
  • the distribution on the splitting variable assignments at each interior node. Usually, this is the uniform prior on available variables
  • the distribution on the splitting rule assignment in each interior node, conditional on the splitting variable. Usually, this is the uniform prior on the discrete set of available splitting values. ([View Highlight](https://read.readwise.io/read/01jty20gterb4wmq9pdh735axb))
- we first shift and rescale y so that the observed transformed values range from ymin=−0.5 to ymax=0.5, then the prior is
  μij∼N(0,σ2μ)
  where σμ=0.5k√m.
  This prior has the effect of shrinking the tree parameters μij toward zero, limiting the effect of the individual tree components by keeping them small. Note that as k and/or m is increased, this prior will become tighter and apply greater shrinkage to the μij. Chipman et al. (2010) found that a value of k between 1 and 3 yield good results. ([View Highlight](https://read.readwise.io/read/01jty22f5ta7cqzv47hgqyaqaa))
- The σ prior
  We used the inverse chi-square distribution
  σ2∼νλχ2ν
  Essentially, we calibrate the prior for the degree of freedom ν and scale λ for this purpose using a *rough data-based overestimate* ˆσ of σ. Two natural choices for ˆσ are:
  • the *naive* specification, in which we take ˆσ to be the sample standard deviation of y
  • the *linear model* specification, in which we take ˆσ as the residual standard deviation from a least squares linear regression of y on the original X. ([View Highlight](https://read.readwise.io/read/01jty23psqdn6nkvab74p77vf5))
- We then pick a value of ν between 3 and 10 to get an appropriate shape, and a value of λ so that the qth quantile of the prior on σ is located at ˆσ, that is, P(σ<ˆσ)=q. We consider values of q such as 0.75, 0.90 or 0.99 to center the distribution below ˆσ. ([View Highlight](https://read.readwise.io/read/01jty23yktpngdakzkzzmsrgt8))
- For automatic use, Chipman et al. (2010) recommend the default setting (ν,q)=(3,0.90). It is not recommended to choose ν<3 because it seems to concentrate too much mass on very small σ values, which leads to overfitting. ([View Highlight](https://read.readwise.io/read/01jty242ejsxas2sgk4mapvx07))
- Instead of being fully Bayesian and estimate the value of m, a fast and robust option is to choose m=200 and then maybe check if a couple of other values makes any difference. As m is increased, starting with m=1, the predictive performance of BART improves dramatically until at some point it levels off and then begins to very slowly degrade for large values of m. Thus, for prediction, it seems only important to avoid choosing m too small. ([View Highlight](https://read.readwise.io/read/01jty24ckhpagkcqpk48yny9dv))
- The ouput of a BART model is:
  • a posterior mean estimate of f(x)=E(y∣x) at any input value x
  • pointwise uncertainty intervals for f(x)
  • variable importance meassures. This is done by keeping track of the relative frequency with which x components appear in the sum-of-trees model iterations. ([View Highlight](https://read.readwise.io/read/01jty24q3x9d6yhahh140wk2c4))
