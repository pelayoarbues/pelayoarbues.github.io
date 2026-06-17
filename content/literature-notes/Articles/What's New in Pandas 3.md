---
author: "[[Marc Garcia]]"
title: 'What''s New in Pandas 3'
date: "2026-02-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://datapythonista.me/static/img/bg.jpg)

## Metadata
- Author: [[Marc Garcia]]
- Full Title: What's New in Pandas 3
- URL: https://datapythonista.me/blog/whats-new-in-pandas-3?_bhlid=7f5447d72e7a80ff2a0b402c7e27cae6e36de8b0

## Highlights
- pandas does not develop features in parallel across major versions. Instead, new features land continuously on the main development line and are included in the next release once they are ready (for example 2.1). As a result, pandas 3.0 does not include everything developed since pandas 2.0 (released almost three years ago), but primarily what has been added since pandas 2.3, which was released roughly six months ago. ([View Highlight](https://read.readwise.io/read/01kgn2dgyhgfjns2etcy1jw34t))
- Most importantly, the pandas developers consistently prioritize backward compatibility. Instead of continuously breaking APIs to improve everything that can be improved, we aim to fix what can reasonably be fixed without forcing users to rewrite their codebases. Users maintaining large pandas projects, or those who simply do not want to relearn pandas syntax every year, will likely appreciate this philosophy. ([View Highlight](https://read.readwise.io/read/01kgn2dncy8386nqvgb0d8fjza))
- The downside of this conservative approach is that pandas cannot always offer state‑of‑the‑art performance or a clean and consistent API, and instead will suffer from some design decisions that made sense a couple of decades ago, but that we would implement differently if we started pandas today. For users starting fresh with dataframe‑based projects, it is worth considering [Polars](https://pola.rs/), which could learn from pandas experience to deliver a dataframe library with impressive performance, full Arrow support, and a cleaner and more consistent API. ([View Highlight](https://read.readwise.io/read/01kgn2dvpa65m724zvbd4e51ec))
- ![](https://datapythonista.me/static/img/blog/pandas3/panda_polar_bears.jpeg) ([View Highlight](https://read.readwise.io/read/01kgn2e1vgdtpck6tcb1z6cam0))
- ![](https://datapythonista.me/static/img/blog/pandas3/panda_polar_bears.jpeg) ([View Highlight](https://read.readwise.io/read/01kgn2e1yyfqtfcj85e52798zw))
- That said, pandas 3 still introduces several significant changes that improve performance, syntax, and the overall user experience. Let’s take a closer look. ([View Highlight](https://read.readwise.io/read/01kgn2e5f4rf16qxbqsq4pwhtd))
- Another important improvement in pandas 3 is better support for user‑defined functions (UDFs). In pandas, UDFs are regular Python functions passed to methods such as `.apply()` or `.map()`. ([View Highlight](https://read.readwise.io/read/01kgn2fehyn2b0ce123pwfxysq))
- At the time pandas 2 was being released, the core team was committed to implement a more aggressive transition to Apache Arrow. Primarily, to make sure users could always benefit from the performance and compatibility enhancements Arrow provides. This would be particularly relevant for strings, where the legacy implementation is really suboptimal compared to the Arrow one. Ultimately, this plan was scaled back. This is in short what happened: ([View Highlight](https://read.readwise.io/read/01kgn2gzv5avxkwn341rdgp509))
- I'm not personally aware of any current plan or effort to change the pandas 3 status quo significantly. While the new approach is a good trade-off between backward compatibility and allowing users to benefit from Arrow by default, it comes with its drawbacks. Now there are 3 different ways to represent strings, since the PyArrow example above is still valid in pandas 3, as it would be setting `dtype="object"` and using the original implementation. It may also not be ideal for some users to have the same code running with different implementation depending on whether PyArrow is installed or not. This can be tricky for example for developers of other libraries, who can't make assumptions on what a pandas string is internally. ([View Highlight](https://read.readwise.io/read/01kgn2h9z7p6ffykgce94ra5gh))
- Clearly, the users that will benefit more from the new pandas 3 strings are users with existing codebases concerned about backward compatibility. While the new changes are not fully backward compatible, migrating to pandas 3 should be really straightforward. ([View Highlight](https://read.readwise.io/read/01kgn2hkdpvam1jzm6bwype7x0))
- Users who need a simpler and modern dataframe experience based on Arrow, and are less concerned about pandas legacy, [Polars](https://pola.rs/) is a great alternative. ([View Highlight](https://read.readwise.io/read/01kgn2hwj3hcxy81zkhk0xsvk8))
