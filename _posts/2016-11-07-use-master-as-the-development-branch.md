---
layout:     post
title:      Use master as the development branch
date:       2016-11-07
summary:    With the help of artifact control systems, source-code control systems are relieved from the burden of version control these days and development straight on master branch become the choice once again.
categories: draft
---

### This is to elaborate my response on a [StackExchange question](http://softwareengineering.stackexchange.com/questions/223400/when-should-i-stop-committing-to-master-on-new-projects), where I propose to use master branch to host the major effort of development.

Of course I'm not suggesting to always just commit and push changes to master. What I want to say is the same old idea of assign proper meaning to any long-living branches. Only difference is here, because master and the build-in semantics of well-communicated, I'm suggesting to leverage this property and assign developement role to it. TODO:
1. why not others
2. concerns and maybe known issues
3. suggest best practise to project dev/deploy set-up

### References and ideas inspired from
1. https://barro.github.io/2016/02/a-succesful-git-branching-model-considered-harmful/
