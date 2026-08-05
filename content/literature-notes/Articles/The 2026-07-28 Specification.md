---
author: "[[David Soria Parra]]"
title: 'The 2026-07-28 Specification'
date: "2026-08-05"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://blog.modelcontextprotocol.io/og-image.png)

## Metadata
- Author: [[David Soria Parra]]
- Full Title: The 2026-07-28 Specification
- URL: https://blog.modelcontextprotocol.io/posts/2026-07-28/

## Highlights
- Every request is self-describing, with an optional discovery call for clients that want capabilities up front, so any request can land on any instance behind a plain round-robin load balancer. ([View Highlight](https://read.readwise.io/read/01kz90dxz0afwamt6mc99zp9d2))
- Method and tool names travel in the `Mcp-Method` and `Mcp-Name` HTTP headers, so gateways can route and authorize on headers directly. ([View Highlight](https://read.readwise.io/read/01kz90e3pxj10s2nxssnarfdwx))
- • Server-to-client requests for things like sampling and elicitation are being redesigned to use Multi Round-Trip Requests (MRTR), removing the need for constantly open bidirectional streams.
  • List responses carry cache hints and a deterministic order, so clients can cache tool catalogs and keep upstream prompt caches stable across reconnects.
  • Formally locking in on a proper extensions framework, with Tasks joining other extensions, such as MCP Apps and Enterprise Managed Authorization (EMA).
  • A set of authorization hardening changes including RFC 9207 issuer validation and a formal shift away from Dynamic Client Registration (DCR) toward client metadata documents (CIMD).
  • A formal deprecation policy with a twelve-month minimum window so you can plan upgrades instead of reacting to them. ([View Highlight](https://read.readwise.io/read/01kz90eaaxfakb0jamacrech1g))
