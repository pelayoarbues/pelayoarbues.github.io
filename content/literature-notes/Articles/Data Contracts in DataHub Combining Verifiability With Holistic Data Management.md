---
author: [[acryldata.io]]
title: "Data Contracts in DataHub: Combining Verifiability With Holistic Data Management"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.acryldata.io/images/meta/default-meta-image.png?1696531662395)

## Metadata
- Author: [[acryldata.io]]
- Full Title: Data Contracts in DataHub: Combining Verifiability With Holistic Data Management
- URL: https://www.acryldata.io/blog/data-contracts-in-datahub-combining-verifiability-with-holistic-data-management?utm_source=datahub&utm_medium=referral&utm_content=blog

## Highlights
- A data contract refers to an agreement or specification that defines the structure, format, and semantics of data exchanged between different systems, applications, or components. It serves as a mutual understanding between parties involved in data exchange ensuring that data is transmitted and interpreted correctly. ([View Highlight](https://read.readwise.io/read/01jd0e7s4hmvn7t4x6jz79yh83))
- While contracts encompass agreements, specifications, and various structural aspects, their true value lies in their ability to be validated. 
  Verifiable elements include schemas, column-level data checks, and operational service level agreements (SLAs that can be programmatically checked and enforced. ([View Highlight](https://read.readwise.io/read/01jd0e7y9f776zz3v1ws011sgq))
- A Data Contract is an agreement between a producer and a consumer that clearly defines
  • what data needs to move from a producer/source to a consumer/destination
  • the shape of that data, its schema, and semantics
  • expectations around availability and data quality
  • details about contract violation(s) and enforcement ([View Highlight](https://read.readwise.io/read/01jd0e8bx6hyw630h4g0wsgtmp))
- **End-to-End Implementation of Data Contracts in DataHub**
  The implementation of Data Contracts in DataHub is designed so that:
  • Data producers can author data contracts as YAML files and store them in version control systems like Git.
  • These contracts can then be deployed to DataHub, which acts as a repository for contracts and their associated assertions
  • Business users can use DataHub to access and edit/update the Data Contract.
  • Existing data quality tools can evaluate these assertions and report the results. ([View Highlight](https://read.readwise.io/read/01jd0e8tgydv99fnkmjjp6fnfd))
- Going back to the verifiability aspect of Data Contracts, key data elements, such as documentation, ownership, and tags, lack verifiability, but we know how incredibly important they are in the context of the data ecosystem. ([View Highlight](https://read.readwise.io/read/01jd0e90229ew7m4q7bx10thxn))
- And it’s this focus on both verifiable and non-verifiable metadata that anchors DataHub’s approach to Data Contracts. Data Contracts in DataHub integrate with Data Products for a holistic approach to managing data assets. Here’s how. ([View Highlight](https://read.readwise.io/read/01jd0e92qp5h6f4weay6p52s6d))
- Data Products in DataHub represent collections of assets combined together in a concept for you to manage and maintain. They have owners, tags, glossary terms, and documentation. ([View Highlight](https://read.readwise.io/read/01jd0e93tmjk0j8bscbw2aey94))
- Data Contracts are the verifiable aspects stated and enforced on individual data assets, that cover schema-related aspects, service level agreements (SLAs), data freshness, and data quality. ([View Highlight](https://read.readwise.io/read/01jd0e99n7h9msefcq6w0b4r1j))
- With DataHub, you can combine the verifiable (via Data Contracts) and the descriptive, non-verifiable (via Data Contracts) elements to create a curated metadata graph. ([View Highlight](https://read.readwise.io/read/01jd0e9bme88qxrde4gakfytjd))
- In the near future, to streamline the management of Data Products and Data Contracts, you can use the same YAML file to define both Data Products and Data Contract specifications – allowing them to be managed as a unified definition. This approach ensures that both documentation and schema assertions can be maintained as code, satisfying the needs of different stakeholders. ([View Highlight](https://read.readwise.io/read/01jd0e9qq7nx884j6m94gn56tm))
- While DataHub serves as the foundation for Data Contracts, Acryl’s managed DataHub version provides the advanced tools and capabilities you need to manage them at scale. This includes: ([View Highlight](https://read.readwise.io/read/01jd0e9vxng5x8ct7dx8vh9ead))
- • An inference engine to generate proposals for Data Contracts
  • Approval workflows for data producers and consumers, and
  • Enforcement mechanisms for data contracts. ([View Highlight](https://read.readwise.io/read/01jd0ea1xssybvvyakk81zgh8v))
