---
author: [[Spotify Engineering]]
title: 'Data Platform Explained Part I'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://storage.googleapis.com/production-eng/1/2024/04/En216-BlogPost_1200x630_final.png)

## Metadata
- Author: [[Spotify Engineering]]
- Full Title: Data Platform Explained Part I
- URL: https://engineering.atspotify.com/2024/04/data-platform-explained/

## Highlights
- Today, we rely on insights that are drawn from a staggering 1.4 trillion data points processed daily. This vast amount of data flows over a reliable data infrastructure containing several dimensions, components, and products — like Spotify’s [event delivery infrastructure](https://engineering.atspotify.com/2021/10/changing-the-wheels-on-a-moving-bus-spotify-event-delivery-migration/). Each is aligned to deliver on its proposition to fuel crucial use cases for different parts of the business, from payments to experimentation, with data. ([View Highlight](https://read.readwise.io/read/01j2e2ep9sr4d6y2wgysef52d1))
- The need for a data platform at Spotify emerged organically and evolved over time into what it is today. We learned and made corrections along the way, while use cases were maturing, thanks to the company’s commitment to leveraging high-quality data for decision-making.
  ![](https://storage.googleapis.com/production-eng/1/2024/04/Data-Platform-Illustration-1.png) ([View Highlight](https://read.readwise.io/read/01j2e2esn8s3fqbhdzy53ftsq5))
- Here are some triggers that may prompt organizations to consider investing in a data platform:
  • **Having more searchable and usable data.** Democratized data is easier to access and consume for data scientists, engineers, and product and business teams. 
  • **Satisfying financial reporting requirements.** When financial reporting is involved, organizations seek pipelines that run predictably, often incorporating reporting and alerting mechanisms.
  • **Ensuring data quality and predictable results.** Organizations realize the importance of guaranteeing data quality and predictable outcomes, especially when dealing with critical datasets.
  • **Facilitating an efficient development lifecycle.**  Experimentation becomes a first-class citizen in the organization. Processes, tools, and squads require a structured platform that can facilitate seamless experimentation.
  • **Enabling machine learning capabilities with well-classified data.** Machine learning thrives on well-classified data, making a structured data platform essential for ML initiatives. ([View Highlight](https://read.readwise.io/read/01j2e2f5q2hke57egdgrxn1b51))
- At Spotify, the data platform evolution was part of the company’s growth journey. What began as a single group [managing Europe’s largest Hadoop cluster](https://engineering.atspotify.com/2016/02/spotifys-event-delivery-the-road-to-the-cloud-part-i/) eventually transformed into an entire team encompassing various product areas. The key components of this team include the following:
  • **Data collection.** Delivers data collected from various clients.
  • **Data processing.** Manages the scheduling of pipelines for efficient data processing.
  • **Data management.** Focuses on data attribution and privacy, ensuring the integrity and security of Spotify’s data.
  ![](https://storage.googleapis.com/production-eng/1/2024/04/Evolution-of-Spotifys-Data-Platform.png) ([View Highlight](https://read.readwise.io/read/01j2e2fdmrxw47fswra0x5y1vh))
- By seamlessly connecting the components above — the building blocks responsible for specific data dimensions, such as data processing — we were able to successfully create the reliable data platform used across Spotify. This platform not only makes data easily searchable but also serves as a valuable source of information for running experiments, improving the development experience. ([View Highlight](https://read.readwise.io/read/01j2e2fsq07byeyhjf5rhtp6w2))
