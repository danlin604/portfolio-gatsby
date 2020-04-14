---
startDate: 2020-03-06
endDate: 2020-03-25
title: "Gapminder Visualization"
description: "A D3 + Gatsby Fertility and Life Expectancy visualization"
url: "https://danlin604.github.io/d3-gapminder/"
source: "https://github.com/danlin604/d3-gapminder"
---

This is my first experiment with D3. The goal is to produce a widely recognizable visualization. I read `Factfulness: Ten Reasons We're Wrong About the World--and Why Things Are Better Than You Think` in 2018 and the data on [Gapminder](https://www.gapminder.org/) make for excellent visualizations.

I use Gatsby because they provide a convenient plugin that converts `.json` files into object data at build-time. It makes loading data a seamless process.

React does not work well with D3. Both libraries try to manipulate the DOM and React relies on their `Virtual DOM`, which creates a lot of friction with D3. Some integration code is required to get the two libraries to work together. Even then, transition animations are missing in D3.

The integration code is not ideal. I want D3 code to be independent of frameworks so that D3 experience and documentation translate directly. No additional tweaks required! I want to revisit D3 at a future date and try out other integrations.
