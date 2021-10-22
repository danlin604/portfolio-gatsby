---
startDate: 2020-04-03
endDate: 2021-07-30
title: 'Policy Reporter'
description: 'Up to Date Medical Policy Database'
url: 'https://www.policyreporter.com/'
---

Policy Reporter provides accurate data and reports in the healthcare landscape. Stakeholders are doctors, insurance companies, and manufacturers. It's business is data.

Even though the framework is old, the patterns we use in the backend are well tested are well established. The team promoted testing which is great. I've neglected testing in my previous work. It's something I want to do but never found the time for when chasing after features. I grew to be more thoughtful about tests because of this test first culture.

I am happy to work closely with Postgres again on a data-heavy visualization project. It's always a little daunting to commit to a database schema. Is it correct? Is it future proof? Is the business well understood? It's almost like a theory. You want to challenge the schema as much as possible before you are *stuck* with it. While the schema isn't immutable, the effort to change it can be just as daunting as the initial design. Is it correct? Will migrations work? Is it future proof?

I came away with some thoughts on this.

- You want a living document that captures up-to-date schema
- The schema should allow for easy updates
- The schema should allow for easy inserts
- The schema should allow for easy deletions
- The schema should get feedback from *all* stakeholders because it is how we see the business data
- The schema should allow for performant reads

Projects will have to move on but you can always try your best to validate the above as much as possible between development and launch.

Previously at BarterBay I had to work alone on Postgres so my resources were limited. I've always wanted to work with another developer experienced with Postgres. So it has been a pleasure to just chat and learn new tricks and dig more into query optimization. I can't say I have a very structured method to optimization yet. You run the query. You observe the query planner and performance. You look for places where optimization that would make an impact. The process isn't as speedy or obvious yet, but I can feel that overtime it'll become more straightforward.