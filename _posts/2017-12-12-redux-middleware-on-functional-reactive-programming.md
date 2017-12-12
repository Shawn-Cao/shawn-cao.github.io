---
layout:     post
title:      Redux Middlewares on Functional Reactive Programming
date:       2017-12-12
summary:    A sample redux middleware for functional reactive programming with React + Redux.
categories: software, functional programming, reactive programming
---

### TL;DR: This is a introduction to my [redux-pure-fetch](https://github.com/Shawn-Cao/redux-pure-fetch) package, an redux middleware extracted from my proposal to refactor our supposedly functional enterprise apps. By moving impure part of the functions into a redux middleware, asynchronous functions stay pure and application states become clear.

## Problem at hand

Redux, the most popular state management tool for React, is meant for managing the UI state in a functional way. However, the bare bone `redux` library is focused on synchronous state change, and asynchronous state management is delegated to external middlewares. The default middleware for this task is `redux-thunk`, which is meant to be an entry level tool, to mix the non-pure actions right in place in the application code.

Obviously the in-place mixing breaks application purity and hinders functional programming paradigm. Also, `redux-thunk` allows to read arbitrary information from state which inadvertently breaks abstractions, which is a problem when applications scale up. Numerous attempt have been made to address these issues, notably `redux-saga`, `redux-observable`, `redux-promise`, `react-refetch`, and many more... In fact there's countless good or mediocre middlewares on github to tackle this hot topic. Here, I'm not trying to introduce a fantastic new middleware to make the already hard choice harder, instead I'm focusing on the perspective of the user of middlewares and propose just a contract to allow managing asynchronous states changes in the lease intrusive manner. This way, users(developers)\' existing redux knowledge is still applicable, and whatever new knowledge they have to learn is still applicable to general UI application development. Plus when requirements outgrow this middleware, users can still use whatever other libraries/tools build for bare bone redux without friction.

## Core Idea and the Contract

Since application code should stay pure, side effects has to be managed by the middleware. Which left the only choice to be separating asynchronous trigger and consequence (think about AJAX request and response) into separate functions.

Redux action creators naturally fit for triggers (as a pure function), but the intuitive redux reducers does not suit for consequence handler since they act on state. The next obvious choice is to have action creators instruct the handling of consequence as another pure function. This is intuitive but the only catch is now the dispatched action would not be [FSA](https://github.com/acdlite/flux-standard-action/) compliant. In order to stay friendly with the standard, the middleware should strip out the non-standard action fields before sending out for downstream processing, to be compatible with other FSA compliant middlewares.

## Design Choices

1. promise unaware, (unless desired, which follows standard promise coordination pattern)
2. declarative side effect
3. stay within Redux action => reducer pattern
  1. manage side-effect as separate response handlers so client code stay functional
  2. service request and response fires 2 separate actions so redux ticks twice (vs. once in redux-thunk which makes replay harder?)
4. testing concerns are addressed through dependency management (aiming for simple middleware swap or declarative response mocking)
4. Accept extended [FSA](https://github.com/acdlite/flux-standard-action/) actions (with all serializable information within standard fields), and dispatch FSA actions for upstream/downstream middleware processing).
5. TODO: should work with [FETCH](https://fetch.spec.whatwg.org/) or [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) API standard.


## Sample Implementation

[redux-pure-fetch](https://github.com/Shawn-Cao/redux-pure-fetch): for handling AJAX actions
