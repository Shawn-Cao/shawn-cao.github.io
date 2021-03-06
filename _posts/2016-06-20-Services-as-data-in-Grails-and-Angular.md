---
layout:     post
title:      Services as Data in Micro-Service Architecture
date:       2016-06-20
summary:    Bref discussion on service API design in micro-services architecture, and typical enterprise IT infrastructures.
categories: software
---

This is a record of my attempt to treat services as data in heavily UI optimized frameworks like Grails and Angular. The purpose of this attempt is to leverage these frameworks' GORM capability to also reduce boiler code that deal with backend service calls. (Also I was tring to refactor some large chunks of imperative code that deals with calling a few different serivces in parallel and populate view layer data)

Grails has constructs like Domain class work with GORM and database, which could connect to a RESTful backend through plugins like [GORM Rest Client](http://www.grails.org/plugin/gorm-rest-client). Similarly, client-side solutions like Angular, also has Resource and RestAngular plugins to provides the same feature.

The above is as far as I can get. Basically RESTful web services are designed to be treated as data source already, and they work great if you have proper designed APIs. On the other hand legacy services like SOAP and RPCs are not that simple. First I could write some bridge to map certain calls with GORM but the philosophy different in designing these services made they literally impossiable to be mapped sensibly. Also other chanllenges like multiple calls in sequential plus caching logics also exits. Finally the system level solution probably has to be to introduce another micro-serice layer to wrap those calls as RESTful services, with possibly active caches to deal with complex logics...

Again micro-service architecture is the rescue!
