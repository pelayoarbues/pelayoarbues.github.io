---
author: [[Avi Chawla]]
title: "The Most Common Misconception About Python OOP"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substack-post-media.s3.amazonaws.com/public/images/71322b80-f34a-4442-af87-9816e8f66d64_5392x5408.png)

## Metadata
- Author: [[Avi Chawla]]
- Full Title: The Most Common Misconception About Python OOP
- URL: https://www.blog.dailydoseofds.com/p/the-most-common-misconception-about-c38

## Highlights
- Most Python programmers misinterpret the `__init__()` magic method in Python OOP. They think that it creates a new object, i.e., allocates memory to it. ([View Highlight](https://read.readwise.io/read/01hmhfyvcy19gdvh6cffxsf3wj))
- When we create ANY object in Python, the `__init__()` method NEVER allocates memory to it. ([View Highlight](https://read.readwise.io/read/01hmhfzc9rtdkk61r2asxy0a6q))
- As the name suggests, `__init__()` only assigns value to an object’s attributes, i.e., initialize the attributes. ([View Highlight](https://read.readwise.io/read/01hmhfzdyv5hmjsn84fnf123yf))
- Instead, it’s the `__new__()` magic method that creates a new object and allocates memory to it. ([View Highlight](https://read.readwise.io/read/01hmhfzfayfz1eha9xg39pw340))
- ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f0d4a32-958f-47ab-95dd-60e033fa9d6e_2280x1636.png) ([View Highlight](https://read.readwise.io/read/01hmhfzj0araw01tswh8gxcjp9))
