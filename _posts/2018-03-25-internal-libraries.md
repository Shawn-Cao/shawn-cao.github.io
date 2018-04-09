---
layout:     post
title:      Scalable CI jobs
date:       2018-03-25
summary:    Some good practices for organizations internal library design.
categories: software
---

### draft points: for modern CI
1. build for open use. Don't expect people to comply and use the library only the way it's designed
2. Do not force people to use your library. in fact, do not expect people to always use any of the internal provided library, framework or tools. That adds communication burden and easily kills innovations. Even worse, never try to leverage the authority of mandated library use for other purposes.
I've experienced this kind of push for "good" purposes: force good practise like code readability, promote code reuse. No, no of that justifies.
