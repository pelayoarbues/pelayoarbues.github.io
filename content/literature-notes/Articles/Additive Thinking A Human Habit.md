---
author: "[[Christoph Molnar]]"
title: 'Additive Thinking: A Human Habit'
date: "2025-05-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bac3f77-9dda-49aa-8025-825bf98707eb_583x455.webp)

## Metadata
- Author: [[Christoph Molnar]]
- Full Title: Additive Thinking: A Human Habit
- URL: https://mindfulmodeler.substack.com/p/additive-thinking-a-human-habit

## Highlights
- Humans love to tell stories in pieces.
  > *"I failed the exam—mainly because I didn’t study enough, and partly because I couldn’t concentrate." 
  > "This house costs $200K because it’s new, big, and shiny."* ([View Highlight](https://read.readwise.io/read/01jv5j6d3hk2v5yph5m3jhdfxt))
- These explanations divide the outcome into parts, each carrying its own informal weight. The brain assigns responsibility like a judge handing down proportions of blame or credit. This process is intuitive and deeply rooted in how we understand the world: by breaking it down into additive chunks. ([View Highlight](https://read.readwise.io/read/01jv5j6fd74h4kzpqwpykp0n7v))
- This preference for additive thinking **naturally extends to how we interpret machine learning models**. Additive explanations are simpler, and they feel closer to how we already think. **Feature effect plots**—which break down a model’s predictions into individual feature contributions—lean into this. They offer a clear visual story: ([View Highlight](https://read.readwise.io/read/01jv5j6tw6ryhf6qx44ksxjetv))
- Consider a neural network trained to predict bike rentals using: weather (temperature, humidity, windspeed) and time (hour, weekday, month, etc.) information. ([View Highlight](https://read.readwise.io/read/01jv5j6zcs1c9pwevyreje4jkf))
- Once trained, we might generate **global feature effect plots** for individual features to understand how the model behaves. Below, we focus on features: hour and temperature.
  ![](https://substackcdn.com/image/fetch/w_720,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bac3f77-9dda-49aa-8025-825bf98707eb_583x455.webp) ([View Highlight](https://read.readwise.io/read/01jv5j78nn48wxjhbrv7has7wk))
- 📈 Bike rentals are low during the night. Two sharp rises exist: one around **8 AM** (going to work) and **5 PM** (return home) ([View Highlight](https://read.readwise.io/read/01jv5j7s8vxv5m69j43zaehtat))
- 🌡️ Rentals increase with temperature until about **20°C**, then taper off ([View Highlight](https://read.readwise.io/read/01jv5j7v32hryme4emq4r3ka51))
- **These plots are simple and easy to interpret**, and that's their charm. *Even non-experts can make sense of them.* Even without technical training, one can see patterns like increased bike rentals during commuting hours and a preference for milder temperatures—observations that align well with common sense. ([View Highlight](https://read.readwise.io/read/01jv5j82ej64847hhgn3n7xhab))
- But here’s the catch: **The simplicity of global interpretations often masks the complexity of the underlying model.** ([View Highlight](https://read.readwise.io/read/01jv5j85gcpjjhdtxknjrxe9ck))
- Real-world phenomena—and most ML models—are *not* additive. A neural network doesn’t treat features independently. It blends them. It computes outputs through **interactions**, not isolated contributions. If we rely only on global explanations, we risk **telling tidy stories that miss the messy truth.** ([View Highlight](https://read.readwise.io/read/01jv5j89eqbps066040sbrwts3))
- In explainability, our goal is to be as simple as possible—but no simpler. The simplest explanation is best, as long as it doesn’t conceal critical details. ([View Highlight](https://read.readwise.io/read/01jv5j8hwnad1j4sxed4r19tzm))
- The effect of temperature on bike rentals isn't the same on a Monday morning as it is on a sunny Saturday afternoon. The assumption of additivity doesn’t just fall short—it obscures the truth. ([View Highlight](https://read.readwise.io/read/01jv5j8pr0kcwb0nb23z7amx4c))
- One promising approach is to **decompose global effects into smaller, regional patterns**, where the interaction landscape is simpler and additivity becomes a more reasonable approximation. ([View Highlight](https://read.readwise.io/read/01jv5j8wj5ykzxv5s03p4zxnyp))
- This is the underlying logic of methods like **GADGET (Generalized Additive Decomposition of Global EffecTs)**: Instead of explaining a feature's effect on the prediction globally, GADGET **splits the feature space into interpretable and distinct regions**, such that within each region, the feature behaves (more) additively. Each subregion is chosen to minimize variation in how that feature contributes to predictions.
  Think of it like this:
  > Rather than forcing a single story about temperature’s effect, we allow multiple stories to coexist—each locally coherent. ([View Highlight](https://read.readwise.io/read/01jv5j97fkkqjjjz0rw9s6wbk8))
- decomposition uncovers that
  • **On working days**, the hour of day has a strong effect, peaking around commute times.
  • **On weekends**, the pattern shifts: rentals peak late morning, possibly reflecting leisure trips.
  • **On cold days**, even that leisure pattern may vanish—because nobody wants to bike in 2°C weather.
  ![](https://substackcdn.com/image/fetch/w_720,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6fdd8a4-3c25-4849-980e-4f2f1228430b_583x455.webp) ([View Highlight](https://read.readwise.io/read/01jv5ja6gdsjq2f0ddgvb4qb36))
- ![](https://substackcdn.com/image/fetch/w_720,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fead3130a-8d86-488c-8c33-f62577f781b0_583x455.webp) ([View Highlight](https://read.readwise.io/read/01jv5jaakq94kzq5rah0ca177y))
- ![](https://substackcdn.com/image/fetch/w_720,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77051221-b34e-4815-8ca4-9af7a86925b1_583x455.webp) ([View Highlight](https://read.readwise.io/read/01jv5jaya7r080dx9k7qg2d47s))
- ![](https://substackcdn.com/image/fetch/w_720,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d411a86-0d32-409c-bfaf-f19c3728c4ac_583x455.webp) ([View Highlight](https://read.readwise.io/read/01jv5jb9cmfgkzdtmp8q3kjv0f))
- By **automatically identifying these subregions**, regional effect plots provide more faithful and more precise explanations—**without adding complexity to the user**. ([View Highlight](https://read.readwise.io/read/01jv5jbfn55zv40pxnr6gaheht))
- Effector is a Python package designed to make creating regional effect plots effortless without any complicated setup.
  Key Features
  • ✔ **Works with any model**: Whether you're using decision trees, random forests, or neural networks, Effector can handle them all.
  • ✔ **Fully compatible**: Built to work seamlessly with **scikit-learn**, **PyTorch**, and **TensorFlow**.
  • ✔ **Simple to use**: Effector simplifies what would otherwise be a complex task, making it easy to generate, interpret, and visualize regional effects. ([View Highlight](https://read.readwise.io/read/01jv5jc097d8cp41m1t5v6xkps))
