---
layout:     post
title:      Proposal of using npm as deployment/version management tool
date:       2016-11-15
summary:    We are used to deployment documentations. But they are getting harder to track with micro services and continous delivery, here I'm proposing to use artifacts vault (npm in this case) as deployment documentation and version management.
categories: draft, software
---

### I hit some efficiency road blocks in the deployment meeting at my client site when they are trying to create documentations to manage a few micro services.

So the story starts with a drowsy discussion on deployment documentation draft:

>Hey guys, we gona deploy a new micro-service today. We are deploying service A which dependes on libray changes L and CDN change N. and CDN change C will impact 2 other services B and C


Of course I'm not suggesting to always just commit and push changes to master. What I want to say is the same old idea of assign proper meaning to any long-living branches. Only difference is here, because master and the build-in semantics of well-communicated, I'm suggesting to leverage this property and assign developement role to it.

TODO:

1. why not others
2. concerns and maybe known issues
3. suggest best practise to project dev/deploy set-up

### References and ideas inspired from
1. https://barro.github.io/2016/02/a-succesful-git-branching-model-considered-harmful/
