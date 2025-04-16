---
author: [[Ethan Rosenthal]]
title: 'Portable Quarto Reports'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Ethan Rosenthal]]
- Full Title: Portable Quarto Reports
- URL: https://www.ethanrosenthal.com/2024/10/23/portable-quarto-reports/

## Highlights
- Like many Python data people, If I need to put together a proper analysis or report, I typically reach for Jupyter notebooks. I don’t like to reach for it. I want my analysis to be quick enough that I can run a couple lines of code in an IPython console and call it a day. But that’s never the case. And as we know, analysis begets analysis, and we’re going to need to rerun our old numbers. ([View Highlight](https://read.readwise.io/read/01jb1c2ddrtdjhf0c4z01agvd4))
- *Reproducible* is actually a poor word to use. Nobody wants to *reproduce* an analysis or job. They want to *modify* that job and rerun it under different conditions. Maybe we should leave *reproducibility* to the crises in social and cognitive sciences, and focus on *runnability* for code. ([View Highlight](https://read.readwise.io/read/01jb1c2s5mh1z7pc5x7vwwba9b))
- Anyway, I digress.
  There are many problems with producing a Jupyter notebook as a report. Nobody else wants to read it. Technical people don’t want to spin up a Jupyter server in order to run it, and non-technical people can’t even render it. Sure, you could make them get a GitHub account and view it on there, but that’s kind of annoying for everybody. Even if you can render the notebook, my code is ugly and distracting. ([View Highlight](https://read.readwise.io/read/01jb1c2xxkrawvwx0qwh6pb7b9))
- My solution isn’t great, but I like to render the report as an HTML file. Everybody has a browser, so everybody can open it. If you render with the option to hide the code, then the report becomes readable. ([View Highlight](https://read.readwise.io/read/01jb1c31cybywre96tefakfjn7))
- I recently got to be a data scientist again for a couple days and write a Jupyter report. I re-discovered that hiding code when rendering notebooks to HTML was broken. Thankfully, there have been a number of advances in the last 9 years. We now have [Quarto](https://quarto.org/). It does many more things than I can describe here. One thing I will describe is how it renders Jupyter notebooks to other formats, such as HTML. It also has built-in support for hiding code. To top it all off, the styling looks much nicer than a typically-rendered Jupyter notebook. ([View Highlight](https://read.readwise.io/read/01jb1c36f9wp0dn7h2s5jdehmm))
- I have two qualms with this method of delivering reports:
  1. It’s nicer to point somebody to an actual website than to send a file. While you can put the file in Google Drive and point somebody there, Drive won’t natively render the HTML. Thus, if you want to update the report, you have to re-send the file.
  2. There’s no way for people to leave comments, like they would in a Google Doc.
  So, if you have better ideas, then let me know! ([View Highlight](https://read.readwise.io/read/01jb1c3fks02gnqefkg2znkhrf))
