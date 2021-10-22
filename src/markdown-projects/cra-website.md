---
startDate: 2018-05-12
endDate: 2018-12-01
title: 'CRA Website'
description: 'Simple React Website'
source: 'https://github.com/danlin604/website-react'
---

I want to revisit web development using React. It is similar to React Native as they share the same React library. CSS translates well between these frameworks.

This website is built on top of `create-react-app`, and the default starter is highly optimized. Very little work needs to be done to get started. There are some parts where I had to dig in further, such as their cache-busting implementation and how CRA abstracts away Webpack.

I heard good things about `styled-components` before starting on my website. The speaker claims that refactoring non-styled-component CSS to `styled-component` is a _totally zen_ experience. They got me _curious_. Not having to worry about interfering CSS styles and confidently write CSS with no worry is an attractive feature. So I gave it a try! I love the CSS isolation, and I like the first-class component support. `styled-component` has the potential to solve a lot of React CSS issues. I'd recommend them if developers struggle with leaky styles.

I played a little bit with `p5.js` integration in React. I can get them working. However, support for both is limited and potentially _hacky_.

This website is hosted on AWS. I want to register an account, buy a domain, host a website, secure the website, and optimize the performance of the website. As of writing, this project is hosted on [danlin.ca](https://danlin.ca). It will only serve `HTTPS` for the following URLs: `danlin.ca`, `www.danlin.ca`, `http://danlin.ca`, `http://www.danlin.ca`. It also prevents direct bucket access because having unknown users access my S3 bucket is a _terrible security risk_! Cutting off S3 was non-trivial, but in the end, I have Cloudfront, and a way to cache-bust the deployment.

The website ends up costing about \$1 CAD per month. I will be retiring the CRA website and migrate it to GitHub Pages in favor of moving newer projects to my primary domain.

*Update:*

Expect [danlin.ca](https://danlin.ca) to host a newer web project.


