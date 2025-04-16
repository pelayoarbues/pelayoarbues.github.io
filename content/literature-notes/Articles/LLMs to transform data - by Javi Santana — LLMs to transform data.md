---
author: [[Javi Santana]]
title: "LLMs to transform data - by Javi Santana
LLMs to transform data"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c3abb0a-cc50-4295-81a4-88fb82d0d45e_2348x516.png)

## Metadata
- Author: [[Javi Santana]]
- Full Title: LLMs to transform data - by Javi Santana
LLMs to transform data
- URL: https://failingwithdata.substack.com/p/llms-to-transform-data

## Highlights
- I transform data every day and I usually do 2 kinds of transformations, changing the data format so I can use it in a tool (CSV to parquet) or the shape, like running an aggregation so I can understand it. I’m using LLMs more and more for this because it saves me a lot of time (and it’s cool) ([View Highlight](https://read.readwise.io/read/01jfdw59j6ac4y8stgad5wwwhb))
- If you don’t know what the llm command is, please, go to check the fantastic [llm cli tool](https://github.com/simonw/llm) from [Simon Willison](https://open.substack.com/users/5753967-simon-willison?utm_source=mentions).
  The second one has many benefits:
  • The code will run way faster, LLMs are still slow compared to regular CPUs
  • The transformation can be audited and fixed ([View Highlight](https://read.readwise.io/read/01jfdw6sz7vw2re18ht5x0ex5f))
- Let’s test it. I have a file with NMEA records from a GPS. NMEA according to Wikipedia “is a combined electrical and data specification for communication between [marine electronics](https://en.wikipedia.org/wiki/Marine_electronics) such as [echo sounder](https://en.wikipedia.org/wiki/Echo_sounder), [sonars](https://en.wikipedia.org/wiki/Sonar), [anemometer](https://en.wikipedia.org/wiki/Anemometer), [gyrocompass](https://en.wikipedia.org/wiki/Gyrocompass), [autopilot](https://en.wikipedia.org/wiki/Self-steering_gear), [GPS receivers](https://en.wikipedia.org/wiki/GPS_receiver) and many other types of instruments”. I NMEA was invested today would have been NDJSON but at that time machines were sending data through a 9600 bauds per second comm line so they needed to optimize. Parsing is also super easy (probably they couldn’t afford to spend a lot of code for the parsing) but let’s get back to the transformation thing. ([View Highlight](https://read.readwise.io/read/01jfdw6vqw2y0h9dr6emed3zx6))
- I have some data I got from my car’s GPS (which still sends the info using NMEA these days) in a file, I grep GPRMC sentences (the ones that have the coordinates) and pipe into the llm command (using gemini-2.0 code execution). This would be the command (I shortened it for clarity) ([View Highlight](https://read.readwise.io/read/01jfdw70xma436qjdq81pytnys))
- It sounds like it did the right transformation (indeed, checking the data, it’s accurate). Just in case you are checking the data carefully, `speed` attribute feels like too high but it’s a car in a race track, so it’s expected. ([View Highlight](https://read.readwise.io/read/01jfdw77658q7afc24jad096d3))
- But how could we make sure it’s doing it right? I’d not trust the transformed data right away but I can use what we have been using in software development for years: tests. So let’s ask the LLM to generate not just the transform, but also the test with the backwards transformation: ([View Highlight](https://read.readwise.io/read/01jfdw7csxend225zrfeddwrpd))
- It fails to run because of the pynmea2 dependency but if you run it locally it manages to do it. So running that self-test gives me *some* confidence about the transformation function and I’d trust it to be in a pull request. ([View Highlight](https://read.readwise.io/read/01jfdw7m4z39en5cfb1xwsrpdt))
