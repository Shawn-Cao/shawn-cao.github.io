---
layout:     post
title:      12-factor single page app (SPA)
date:       2017-07-05
summary:    Modern 12-factor apps applied to SPAs.
categories: software, micro-service
---

12-factor apps requires apps to load configuration from environment, which is often omitted when developing Single Page Apps (SPA)

The nature of static resources composition of SPA. They are naturally comply with other factors like port/URL. But still, they should have a mechanism (most likely compilation process) to inject environment variables:

1. Extra compile step when deploying
2. Generate landing page or set JavaScript global variables on the fly
3. Leverage container features like Server Side Includes (SSI) in nginx (which adds little burden to load/performance, but does make the app container dependent)

detailed discussion on each approach...
