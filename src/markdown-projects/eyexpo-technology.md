---
startDate: 2018-10-09
endDate: 2020-01-30
title: "Eyexpo Technology"
description: "All-In-One Immersive Creation and Data Platform"
url: "https://www.eyexpo.com/"
source: ""
---

I worked on the legacy tour, rebuild tour, spotlight, and analytics for the Eyexpo platform.

Legacy uses Angular.js, MySQL, Laravel, and the VR system uses A-Frame. I extend, deprecate, and fix bugs. Extending legacy is *time-consuming* because there are many side-effects to track. It is the reason why there is a rebuild. We want to speed up development.

Legacy features I worked on:

* Authentication
* Music playback
* VR editor: translate, scale, and rotate

Rebuilding the platform is an evolving process because none of the developers have Angular experience. Conventions and best practices evolved through research and experience. *We code to expect change*.

My goal with the rebuild is to have reusable A-Frame components. For example, a VR video requires multiple A-Frame components because a video implies a preview, a play button, a pause button, and they need to have predictable life cycles. Developers should be able to use the video component *out of the box*.

Novel integration successes:

* Angular and A-Frame configurations
* Extend A-Frame with Three.js
* A-Frame components for Angular

The spotlight project uses lessons learned from the rebuild. The development speed of the spotlight project validates the new front-end VR architecture designs.

The analytics project leverages ElasticSearch, Elastic APM, OpenMetrics (now OpenTelemetry) to provide tracing, metrics, and logging, with the goal of showing user insights. The design encompasses front-end visualization, analytics micro-service, and additional modification to existing micro-services to write to telemetry.

Front-end went through many incremental changes. Different ways of handling states are tested:

* RxJS
* Services
* Smart & dumb components
* Caching
* Apollo
* NgRX
* Websocket events

The goal is always to test and verify solutions for our projects.
