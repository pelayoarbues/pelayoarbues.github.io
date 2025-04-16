---
author: [[Malay Haldar]]
title: 'Improving Search Ranking for Maps'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://miro.medium.com/v2/da:true/resize:fit:1200/0*DO7m1JZFPSvVRlBG)

## Metadata
- Author: [[Malay Haldar]]
- Full Title: Improving Search Ranking for Maps
- URL: https://medium.com/airbnb-engineering/improving-search-ranking-for-maps-13b03f2c2cca

## Highlights
- Search is the core mechanism that connects guests with Hosts at Airbnb. Results from a guest’s search for listings are displayed through two interfaces: (1) as a list of rectangular cards that contain the listing image, price, rating, and other details on it, referred to as *list-results* and (2) as oval pins on a map showing the listing price, called *map-results*. Since its inception, the core of the ranking algorithm that powered both these interfaces was the same — ordering listings by their booking probabilities and selecting the top listings for display.
  But some of the basic assumptions underlying ranking, built for a world where search results are presented as lists, simply break down for maps. ([View Highlight](https://read.readwise.io/read/01jkqmzhrtj9qpdacmzgh9fanr))
- The central concept that drives ranking for list-results is that *user attention decays* starting from the top of the list, going down towards the bottom. A plot of rank vs click-through rates in Figure 1 illustrates this concept. X-axis represents the rank of listings in search results. Y-axis represents the click-through rate (CTR) for listings at the particular rank.
  ![](https://miro.medium.com/v2/resize:fit:700/0*Y9drAzLenJ9GAYEA)
  Figure 1: Click-through rates by listing search rank ([View Highlight](https://read.readwise.io/read/01jkqmztakvy5reyvqrwbjtbns))
- To maximize the connections between guests and Hosts, the ranking algorithm sorts listings by their booking probabilities based on a [number of factors](https://www.airbnb.com/help/article/39) and sequentially assigns their position in the list-results. This often means that the larger a listing’s booking probability, the more attention it receives from searchers. ([View Highlight](https://read.readwise.io/read/01jkqmzxxyns9fzzygjjet1cmf))
- But in map-results, listings are scattered as pins over an area (see Figure 2). There is no ranked list, and there is no decay of user attention by ranking position. Therefore, for listings that are shown on the map, the strategy of sorting by booking probabilities is no longer applicable.
  ![](https://miro.medium.com/v2/resize:fit:624/0*6iaMrBpbSQjVnsLF) ([View Highlight](https://read.readwise.io/read/01jkqn05x8e7m79w565y62t8s1))
- To adapt ranking to the map interface, we look at new ways of modeling user attention flow across a map. We start with the most straightforward assumption that user attention is spread equally across the map pins. User attention is a very precious commodity and most searchers only click through a few map pins (see Figure 3). A large number of pins on the map means those limited clicks may miss discovering the best options available. Conversely, limiting the number of pins to the topmost choices increases the probability of the searcher finding something suitable, but runs the risk of removing their preferred choice.
  ![](https://miro.medium.com/v2/resize:fit:700/0*Vi5l4XPrl3YdHsP0) ([View Highlight](https://read.readwise.io/read/01jkqn0sd1dt39fdarg611y014))
- We test this hypothesis, controlled by a parameter . The parameter serves as an upper bound on the ratio of the highest booking probability vs the lowest booking probability when selecting the map pins. The bounds set by the parameter controls the booking probability of the listings behind the map pins. The more restricted the bounds, the higher the average booking probability of the listings presented as map pins. Figure 4 summarizes the results from A/B testing a range of parameters. ([View Highlight](https://read.readwise.io/read/01jkqn0wyweqa6sjw06g3jpjzy))
    - Tags: [[favorite]] 
- The reduction in the average impressions to discovery metric in Figure 4 denotes the fewer number of map pins a searcher has to process before clicking the listing that they eventually book. Similarly, the reduction in average clicks to discovery shows the fewer number of map pins a searcher has to click through to find the listing they booked.
  ![](https://miro.medium.com/v2/resize:fit:700/0*trGxNfKu4rHa4Gpx) ([View Highlight](https://read.readwise.io/read/01jkqn20xf2gnnatwchypqx5wv))
- Launching the restricted version resulted in one of the largest bookings improvement in Airbnb ranking history. More importantly, the gains were not only for bookings, but for quality bookings. This could be seen by the increase in trips that resulted in 5-star rating after the stay from the treatment group, in comparison to trips from the control group. ([View Highlight](https://read.readwise.io/read/01jkqn2bxaw4vf5n378wg3k1eh))
- In our next iteration of modeling user attention, we separate the map pins into two tiers. The listings with the highest booking probabilities are displayed as regular oval pins with price. Listings with comparatively lower booking probabilities are displayed as smaller ovals without price, referred to as mini-pins (Figure 5). By design, mini-pins draw less user attention, with click-through rates about 8x less than regular pins.
  ![](https://miro.medium.com/v2/resize:fit:700/0*pkL4ovuWpR1Rz9z-)
  Figure 5: Oval pins with price and mini-pins ([View Highlight](https://read.readwise.io/read/01jkqn2t1d0jnj7qnr1rhftp37))
- This comes in handy particularly for searches on desktop where 18 results are shown in a grid on the left, each of them requiring a map pin on the right (Figure 6).
  ![](https://miro.medium.com/v2/resize:fit:700/0*A83SEjyDlyTUCI06)
  Figure 6: Search results on desktop
  The number of map pins is fixed in this case, and limiting them, as we did in the previous section, is not an option. ([View Highlight](https://read.readwise.io/read/01jkqn3gw6f8b4j5x7qvdjtmbk))
- Creating the two tiers prioritizes user attention towards the map pins with the highest probabilities of getting booked. Figure 7 shows the results of testing the idea through an online A/B experiment.
  ![](https://miro.medium.com/v2/resize:fit:700/0*1V-XbGegLzPch25O) ([View Highlight](https://read.readwise.io/read/01jkqn3pznv3y90ygctm3shyqg))
- In our final iteration, we refine our understanding of how user attention is distributed over the map by plotting the click-through rate of map pins located at different coordinates on the map. Figure 8 shows these plots for the mobile (top) and the desktop apps (bottom).
  ![](https://miro.medium.com/v2/resize:fit:598/0*rDDubemWn97XvCN2)
  ![](https://miro.medium.com/v2/resize:fit:602/0*I9GtvJEw5BGfHn96)
  Figure 8: Click-through rates of map pins across map coordinates.
  To maximize the chances that a searcher will discover the listings with the highest booking probabilities, we design an algorithm that re-centers the map such that the listings with the highest booking probabilities appear closer to the center. The steps of this algorithm are illustrated in Figure 9, where a range of potential coordinates are evaluated and the one which is closer to the listings with the highest booking probabilities is chosen as the new center. ([View Highlight](https://read.readwise.io/read/01jkqn47sgwvg9nj32702etb0k))
- ![](https://miro.medium.com/v2/resize:fit:700/0*IqlsENiSd-9IdQ5v)
  Figure 9: Algorithm for finding optimal center
  When tested in an online A/B experiment, the algorithm improved uncancelled bookings by 0.27%. We also observed a reduction of 1.5% in map moves, indicating less effort from the searchers to use the map. ([View Highlight](https://read.readwise.io/read/01jkqn4jm8wrhsjww2ez6qpat7))
- Users interact with maps in a way that’s fundamentally different from interacting with items in a list. By modeling the user interaction with maps in a progressively sophisticated manner, we were able to improve the user experience for guests in the real world. However, the current approach has a challenge that remains unsolved: how can we represent the full range of available listings on the map? This is part of our future work. A more in-depth discussion of the topics covered here, along with technical details, is presented in our research paper that was [published at the **KDD ’24** conference](https://arxiv.org/pdf/2407.00091). We welcome all feedback and suggestions. ([View Highlight](https://read.readwise.io/read/01jkqn4pxejpc2xgy1ecs1xfsw))
