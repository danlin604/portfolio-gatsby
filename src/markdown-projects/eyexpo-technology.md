---
startDate: 2018-10-09
endDate: 2020-01-30
title: "Eyexpo Technology"
description: "All-In-One Immersive Creation and Data Platform"
url: "https://www.eyexpo.com/"
source: ""
---

Eyexpo platform is split as legacy, re-build, spotlight, and analytics. There are other projects, but these what I worked on and developed.

Legacy uses Angular.js, MySQL, Laravel, and the VR system is built using A-Frame. My work with the legacy system relates solely to extending the system, deprecating parts of the system, and bug fixes. Extending legacy was time consuming because there are many side-effects to track. It is the reason why there is a re-built. The intent is to speed up development.

I worked on authentication related features for legacy, creating a music playback system, VR transformation feature to allow users to translate, scale, and rotate objects for their VR tour on mobile and desktop.

The re-build of the platform was an evolving process as none of the developers have Angular experience. Conventions and best practices evolved through research and practice during development. My personal preference is to let pain-points in a project stew for a while and confer with other developers for possible solutions and alternatives. The number of experimental solutions and change is architecture and design speaks volumes about how code should be written to expect change.

The re-build resulted in a novel, but highly re-usable way of handling A-Frame inside Angular. This system is novel, but the design borrows ideas from React. There is a lack of A-Frame and Angular integration, and I am happy to have contributed a solution for them. I was able to extend A-Frame with Three.js features which speeds up development and feature requests. We end up being able to pull in new features on-demand since there are many existing Three.js solutions.

The spotlight project leverages most of the knowledge learned from the re-build into a brand new VR project. The speed of the spotlight project validates the recent designs of the rebuild and allows VR components to be developed independently.

The analytics project's goal is to track errors, metrics, and traces by leveraging ElasticSearch, Elastic APM, OpenMetrics (now OpenTelemetry) to provide tracing, metrics, and logging, with the goal of informing users. Data are outputted to ECharts for visualization. The design encompasses the frontend visualization, the analytics micro-service, and additional modification to existing micro-services to begin writing telemetry.

Design and implement multiple state-management solutions for client-facing projects: cache,
service-oriented, event-driven, smart & dumb components, apollo-client, and NgRX.
Design and implement analytics solutions: MySQL, Elasticsearch, OpenMetrics, Sentry and
data-flow, and visualizations.

