---
layout:     post
title:      Micro-Services Adoption &#45; required vs luxury components
date:       2017-06-28
summary:    With the help of artifact control systems, source control systems are relieved from the burden of version control these days and development straight on master branch become the choice once again.
categories: software
---

## This is a retrospective learned from the incremental way of micro-services adoption

Turns out incremental is the safer approach in case the team is not full aware what micro-services means (Separate story on that...). It does make everybody happy for at least the first one or two years, and by the time accumulated problems bite back, team members have prepared them enough for the next job of glory/disaster... This is of course a joke, but if you learn from mistakes, that's what happens...

### Back to topic: absolutely required one I learned are

1. Authorization: allow service to service communication bearing client authorization
  * Authentication is up to debate...
2. Anti-Corruption Layer: must-have measurement to allow the adoption to continue.
  * People underestimate the drag from legacy. migration without a solid isolation plan is a indication of ... resume-driven-development

### Luxury

1. Resource Server + Session(distributed) Service: allow passing more information other than authorization during service-to-service communication bearing client authorization.
2. 12-factor apps: the concept is absolutely required, but if team know the concept really well, some aspects can be traded-off for immediate convenience. (Job security can be one, but setup configuration service & service discovery is a big change in both the system infrastructure, and people's mind...)

#### The luxury ones are more related with cloud

If the team do adopt cloud the same time with micro-services, get consult from veterans like Pivotal to adapt the team's mindset first... No garanteed success, but at least your product won't get laughed at, plus you know what to look for in the next hiring/interview round :facepalm:
