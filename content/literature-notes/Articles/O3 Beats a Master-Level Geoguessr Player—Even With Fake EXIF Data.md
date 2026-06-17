---
author: "[[Simon Willison's Weblog]]"
title: 'O3 Beats a Master-Level Geoguessr Player—Even With Fake EXIF Data'
date: "2025-04-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: O3 Beats a Master-Level Geoguessr Player—Even With Fake EXIF Data
- URL: https://simonwillison.net/2025/Apr/28/o3-geoguessr/#atom-everything

## Highlights
- **[o3 Beats a Master-Level Geoguessr Player—Even with Fake EXIF Data](https://sampatt.com/blog/2025-04-28-can-o3-beat-a-geoguessr-master)**. Sam Patterson ([previously](https://simonwillison.net/2025/Apr/26/geoguessr/)) puts his GeoGuessr ELO of 1188 (just short of the top champions division) to good use, exploring o3's ability to guess the location from a photo in a much more thorough way than my own experiment. ([View Highlight](https://read.readwise.io/read/01jt11fh5045pf7v66p95tya8r))
- Over five rounds o3 narrowly beat him, guessing better than Sam in only 2/5 but with a higher score due to closer guesses in the ones that o3 won.
  Even more interestingly, Sam experimented with feeding images with fake EXIF GPS locations to see if o3 (when reminded to use Python to read those tags) would fall for the trick. It spotted the ruse:
  > Those coordinates put you in suburban Bangkok, Thailand—obviously nowhere near the Andean coffee-zone scene in the photo. So either the file is a re-encoded Street View frame with spoofed/default metadata, or the camera that captured the screenshot had stale GPS information. ([View Highlight](https://read.readwise.io/read/01jt11g325rdcat1etj5qzwr31))
