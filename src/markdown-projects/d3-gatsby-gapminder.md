---
startDate: 2020-03-06
endDate: 2020-03-25
title: "Gapminder Visualization"
description: "A D3 + Gatsby Fertility and Life Expectancy visualization"
url: "https://danlin604.github.io/d3-gapminder/"
source: "https://github.com/danlin604/d3-gapminder"
---

Gapminder viz is my first experiment with D3. I've had the opportunity to use other visualization libraries in previous projects but never D3. The goal is to produce a widely recognizable visualization. I had just finished reading `Factfulness: Ten Reasons We're Wrong About the World--and Why Things Are Better Than You Think` in 2018. The data on [Gapminder](https://www.gapminder.org/) make for excellent visualizations.

I chose Gatsby because they provide a convenient plugin that converts `.json` files into object data at build time. It makes loading data a seamless process.

Sadly, React does not work well with D3 when I was working on this. Both libraries try to manipulate the DOM. React relies on the `Virtual DOM`  and creates a lot of friction with D3. Some integration code is required to get the two libraries to work together. Even then, transition animations are missing in D3.

The integration code is not ideal. I want D3 code to be independent of frameworks so that D3 experience and documentation translate directly. No additional tweaks are required! I want to revisit D3 at a future date and try out other integrations.
