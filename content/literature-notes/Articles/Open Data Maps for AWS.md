---
author: [[Alan McConchie]]
title: "Open Data Maps for AWS"
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://stamen.com/wp-content/uploads/2023/08/image10-1024x608.gif)

## Metadata
- Author: [[Alan McConchie]]
- Full Title: Open Data Maps for AWS
- URL: https://stamen.com/open-data-maps-for-aws/

## Highlights
- Thinking about the user first allows us to focus on what matters visually and provide a style that emphasizes what’s important. ([View Highlight](https://read.readwise.io/read/01h934js2vkxqccy10fjp6dr9j))
- how can we customize it to AWS-specific customer needs? This is a product development question as well as a cartographic one. The right answer will lead to smart product decisions that highlight the information users need and expect for their precise applications, without the clutter of everything else. ([View Highlight](https://read.readwise.io/read/01h934kbyj4snemgf7y4t87p3t))
- The opportunity we saw with the Open Maps Data Collection was to focus on what we could create that speaks to AWS-specific customer needs. This was a unique challenge: AWS customers are all over the world, and come from every industry and government sector you can imagine, and we do not have direct access to or knowledge of any of them. ([View Highlight](https://read.readwise.io/read/01h934krdf109fw7bmzmsgbc8y))
- AWS customers need maps to show store locations, track assets in the field, and look up addresses. They also need maps to show complex data spatially – traffic, pollution, risk, opportunity, availability, frequency. This gets at the most fundamental distinction in cartography: reference maps and thematic maps:
  • *Reference* maps show place names and streets and natural features and political boundaries; they are used whenever you need to place yourself (or a point) in context. (think of Google/Apple Maps here)
  • *Thematic* maps are data visualizations. While they may contain reference *layers*, like country names, their primary purpose is to show the distribution or pattern of something that varies spatially – thus we made a map style specifically optimized for overlaying data on top. ([View Highlight](https://read.readwise.io/read/01h934n38c6n8v0zyk2164wwwt))
- When we say ‘reference maps’, we’re referring to the styles similar to road atlases of yore, where colors are vivid to distinguish between important land uses, roads are highly visible, and labels are used to provide crucial context. These maps are often used for identifying the location of a store or alongside a routing API. With ‘data visualization’ styles, we try to balance between crucial contextual information and a color palette that is cohesive and understated to allow for data to easily be rendered over the map. Data visualization styles can easily be used to show data layers on top, whether they’re integrated into a dashboard or on their own. ([View Highlight](https://read.readwise.io/read/01h934njqk2hmm4t9s5b2n845y))
- Ask any cartographer – what’s the most maddening, least appreciated challenge in map design? Without hesitation we will tell you: IT’S LABELS. With print maps, the challenge of label placement is that there is limited space to make everything legible and make sure everything fits. This can be an enormous, almost impossible task that requires hours and hours of painstaking manual work. With web maps, it’s different – label placement is automated, so the cartographer’s job is to give the algorithm some rules. In order to work for everything everywhere all at once, these rules are a constant balancing act. ([View Highlight](https://read.readwise.io/read/01h934pc8xknmjjfapasmkv5b7))
- With online maps, collision rules determine which features get labeled on the fly based on whether they can be placed without overlapping. Thus, the cartographer’s job is not just to style the labels such that the map labels that matter most stand out, but also to curate the collisions such that the critical labels will always be placed. ([View Highlight](https://read.readwise.io/read/01h934pzaz70hsf62awxwswpen))
- People expect labels on the map, particularly a reference map, in order to orient themselves. And labels are not just text – icons for landmarks and route shields on major highways are among the placemakers that help us recognize the place we are looking at on the map. However, depending on what data and how much data AWS customers put on the map, these labels and other map symbols will be obscured and would be better drawn over the data than carefully curated within the basemap. ([View Highlight](https://read.readwise.io/read/01h934qbwx2h4h6gz3a51vnxcw))
- We resolved this by focusing on simplicity, legibility, and hierarchy in our label styles. Everything important is labeled, but the labels are designed to never overwhelm the map.
  [![](https://stamen.com/wp-content/uploads/2023/08/image2-1-1024x585.png)](https://stamen.com/wp-content/uploads/2023/08/image2-1-1024x585.png) ([View Highlight](https://read.readwise.io/read/01h934qk3cpajmgsf2sb0pcpmj))
- Dark maps, like dark mode generally, have an accessibility aspect, as some people find the lower luminosity reduces eye strain. From a cartographic standpoint, the higher contrast of a dark map with brighter data overlaid is easier to read. For some applications, it’s more about giving customers a choice, so we made sure to design dark and light modes that fade seamlessly into one another. ([View Highlight](https://read.readwise.io/read/01h934r8ezcbgvc6watqpzkkyb))
- but in order to figure out what belongs on the map, we have to consider the opposite. There are boat loads of great data included in vector tile schemes, from OSM, but less is more when map styles are designed to be used as a component and not the star of the show. ([View Highlight](https://read.readwise.io/read/01h934sb2n31tjf3xc4p56ex6v))
