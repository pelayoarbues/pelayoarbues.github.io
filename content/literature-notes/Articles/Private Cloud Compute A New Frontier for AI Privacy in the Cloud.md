---
author: "[[Simon Willison]]"
title: 'Private Cloud Compute: A New Frontier for AI Privacy in the Cloud'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison]]
- Full Title: Private Cloud Compute: A New Frontier for AI Privacy in the Cloud
- URL: https://simonwillison.net/2024/Jun/11/private-cloud-compute/#atom-everything

## Highlights
- The goal with PCC is to allow Apple to run larger AI models that won't fit on a device, but in a way that guarantees that private data passed from the device to the cloud cannot leak in any way - not even to Apple engineers with SSH access who are debugging an outage. ([View Highlight](https://read.readwise.io/read/01j04evq1qg7p8amcp19w1w42h))
- This is an extremely challenging problem, and their proposed solution includes a wide range of new innovations in private computing. ([View Highlight](https://read.readwise.io/read/01j04ew2a3e1x4jtv43z4tvnym))
- The most impressive part is their approach to technically enforceable guarantees and verifiable transparency. How do you ensure that privacy isn't broken by a future code change? And how can you allow external experts to verify that the software running in your data center is the same software that they have independently audited? ([View Highlight](https://read.readwise.io/read/01j04ew5b1qwcnqd04c5nxa9ry))
- When we launch Private Cloud Compute, we’ll take the extraordinary step of making software images of every production build of PCC publicly available for security research. This promise, too, is an enforceable guarantee: user devices will be willing to send data only to PCC nodes that can cryptographically attest to running publicly listed software. ([View Highlight](https://read.readwise.io/read/01j04ewbygm9thwkezv3ncdm2r))
