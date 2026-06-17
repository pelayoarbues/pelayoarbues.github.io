---
title: Why Software Engineers Should Learn a Bit of Data Science
date: 2025-04-01
tags:
  - permanent-note
  - data
  - AI
---
![AI generated image of a bridge connecting science and engineering lands](notes/attachments/building-bridges.webp)

For a few years, those of us with the title _data scientist_ were building software without clear rules. When we started pushing our projects into production environments, our software engineer colleagues quickly realized, we were screaming for help. 

For decades, software engineers have been refining their craft, focused on the robustness of their solutions. Practices like Test-Driven Development (TDD), smart deployments, and Continuous Integration/Continuous Delivery (CI/CD) didn’t happen by chance, they were deliberate responses to recurring problems.

In the early days of Data Science, the field was mostly populated by statisticians, econometricians, biostatisticians, and similar _icians_. Computer scientists were less common. At the time, statistical rigor mattered more than computational efficiency. But those with both skill sets saw it coming: deploying data science projects without solid engineering practices was bound to fail before reaching real users.

When the rest of us, without formal software engineering backgrounds, gained access to well-structured projects, we had a wake-up call. The Bolognese code we were writing (it wasn’t even spaghetti!) and our lack of engineering habits made one thing obvious: we needed to adapt software engineering best practices to our own work. That moment sparked the maturing of data science. No longer an experimental playground, the field started growing up. And along the way, new roles emerged, like Machine Learning (ML) engineers, bridging the gap for those of us who hadn’t (yet) reskilled ourselves with strong software engineering chops. 

Now we’re witnessing a new shift. The barriers to AI are falling fast. Today, software engineers with no formal training in machine learning can enhance products with cutting-edge models. Not so long ago, training a deep learning model required strong skills in statistics, linear algebra, and hands-on coding with low-level libraries like TensorFlow or PyTorch. And I’m not talking about building architectures from scratch. Just solving a business problem with classification or segmentation in Computer Vision or NLP was complicated. Even transfer learning wasn’t easy. Today? You can solve business problems with high accuracy by fine-tuning massive AI models with just an API call and a few lines of code.

>[!tip]
> If you're a software developer interested in exploring AI, you might find this helpful: [AI Learning Paths for Software Engineers Without Becoming a Data Scientist](notes/AI%20Learning%20Paths%20for%20Software%20Engineers%20Without%20Becoming%20a%20Data%20Scientist.md)

In this new landscape, it’s a great time for software engineers to adopt at least a basic set of good data science practices. I’m not saying everyone needs a PhD in Statistics. But understanding the essentials of an iterative, scientific-style process, the fundamentals of ML and AI, and some basic statistics and sampling principles is increasingly valuable.

When I talk about “the process,” I mean recognizing the [unique challenges](notes/Agile%20for%20Data%20Science.md) that come with working with data. Beyond the usual uncertainties of software development, data adds its own layer of unpredictability.


> [!warning] Data can flow, data can crash


Here are a few quick examples. Data quality is always vulnerable, data capture systems tend to drift into chaos. Sometimes the real-world process we’re trying to model is so complex, [our data isn’t detailed or stable enough to represent it reliably](notes/Data%20is%20not%20objective.md). Data can also drift over time, causing gaps between model expectations and real-world performance. And when you plug a model into a system, your output becomes non-deterministic, it might return different results for the same input. That stochastic behavior is especially tricky for engineers used to deterministic, rule-based systems.

There’s also a mindset shift: we’re [constantly testing hypotheses](notes/Bayesian%20reasoning.md), often ending up with more questions than answers. That means going back to the [drawing board](notes/Explaining%20AI-infused%20products.md): redefining scopes, reconsidering decisions, rewriting labeling guidelines, or even revisiting business processes to make algorithmic solutions effective.

Fellow engineers don’t need to become statisticians, but they should understand concepts like performance metrics, the cost of false positives and negatives, how to map technical metrics to business goals, and the distinctions among AI, ML, deep learning, and LLMs. They should also know what it means to iterate on, maintain, and deploy ML models—what we call MLOps.

As for statistics, I’m not asking for much, just good solution evaluation. That starts with building a representative sample. If your sample doesn’t reflect your production population, you’re setting yourself up for disappointment. Easier said than done, I know. But it’s the minimum standard we should all be aiming for.

Right now, I see a lot of engineers creating AI-based features via simple API calls, without thoroughly evaluating their solutions. Without careful validation, rejection from users and stakeholders is almost inevitable. Evaluation and sampling should be second nature to everyone involved in building AI products. Good sampling also ensures [efficient data labeling](notes/The%20Rise%20of%20the%20Dataset%20Engineer.md), whether you’re training, fine-tuning, or prompt-optimizing proprietary or open-source models.

>[!question] If you’re an engineer using an LLM API today: how confident are you in the quality of the output?

Some of today’s talent gap in data science could be eased if experienced engineers strengthened their foundation with the insights I’ve mentioned. After all, most engineers already have strong STEM backgrounds and are incredibly smart. With the right guidance, and some support from data science veterans, they can create excellent products, [validate ideas quickly](notes/Make'em%20talk%20with%20prototypes.md), and experiment with bold solutions. I truly believe every digital product company should invest in upskilling programs for their tech teams. The return on that investment is massive. 

Of course, dedicated data scientists still play a crucial role. They translate business needs into robust models, [select meaningful evaluation metrics aligned with goals](notes/Short%20term%20and%20long%20term%20metrics.md), weigh the tradeoffs between statistical, ML, deep learning, and LLM solutions, and guide newcomers in building solutions that truly work in practice.

What excites me most is how data scientists and software engineers are now meeting in the middle. [We’re bridging gaps](notes/Fostering%20collaboration%20between%20teams.md), speaking the same language, and working together more effectively. This convergence is breaking down silos, and unlocking better products.

So whether you started in engineering or in data science, don’t trap yourself behind artificial boundaries. Break them. Build bridges. It’ll benefit the products you are building. And your career.