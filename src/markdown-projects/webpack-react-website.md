---
startDate: 2019-04-10
endDate: 2020-02-06
title: 'Webpack React Website'
description: 'Config Config Config'
url: 'https://dev.danlin.ca'
source: 'https://github.com/danlin604/web'
---

Learning Webpack gives me the _excuse_ I need to start again from scratch. The previous CRA website requires me to custom code a lot of the content, all of which require additional styling. They are not maintainable at all.

_Maintainability_ is one of the issues I want to address. Markdown simplifies the website because the content is separate from the code. Styling the `.md` in a single stylesheet offloads a lot of my future work.

You can find emoji animation, imported P5 starfield animation, and a solar system built in A-Frame at `dev.danlin.ca`. I am trying out subdomain prefixing to see if it makes sense to separate future projects this way. Maintaining both `danlin.ca` and `dev.danlin.ca` is confusing, instead, I am going to migrate the Webpack website to GitHub Pages. Only one _main_ project should be hosted on `danlin.ca` with a subdomain prefix allocated for development and staging.
