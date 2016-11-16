---
layout:     post
title:      Use master as the development branch
date:       2016-11-07
summary:    With the help of artifact control systems, source control systems are relieved from the burden of version control these days and development straight on master branch become the choice once again.
categories: software
---

### This is to elaborate my response on a [StackExchange question](http://softwareengineering.stackexchange.com/questions/223400/when-should-i-stop-committing-to-master-on-new-projects), where I propose to use master branch to host the major effort of development.

Of course I'm not suggesting to always just commit and push changes to master. What I want to say is the same old idea of assign proper meaning to any long-living branches. Only difference is here, because master and the build-in semantics of well-communicated, I'm suggesting to leverage this property and assign developement role to it.

## Why Master

The branch master is so precious that it is the only provided branch whenever a repository is cloned. And the act of cloning indicates users' purpose is not to consume, which should resort to binary downloading from package management systems like NPM. Rather, they to either start development, or look at current code status. Either case it is the users' best benefit to defaut to the latest code. I don't think anyone enjoys to spend unnecessary time to figure out what's the 'development' branch, by potentially another unnecessary search on documentations...

GIT is a source control tool, let it present the best source control experience by defauling current code status to master branch. If there's any secondary concerns like release management, use secondary GIT features like tags, or artifact control systems like NPM.

Above maybe just theoretical benefits, but another practical reason to use master is to reduce the number of long-living branches, which helps to avoid 'merging hell'. Whenever multiple branches live for extended time, be it release or feature, merging cost grows with time. And merging branched onto different but converging destinations make that even worse. Then most project suffer compromises like deadlines, workarounds and hotfixs that make the GIT graph intertwines like a hell... We know, that's the cost of having real live people to do developement... and merging...

## Concerns and Best Practises

There are certain cost associated with using master as development branch. By far the top most concerns are accidental check-ins, and history preservation. They are related and can be address with process control. I'm sharing my ideal process:

### small projects with less developers (like <5)
1. master branch are open to check-in
2. optionally create pull requests for communication and documentation purposes
3. trigger automated tests on each commit on master
4. test passed: publish to artifact vault (eg. NPM) with pre-release versions
   test failed: alert commiter (to fix or revert/reset code)
5. execute automatic/manual integration/visual/acceptance test on success, update artifact vault's version/tags (and tag GIT versions) to release candidate (see [semver](http://semver.org/), and prefer 'latest' as release tag as provided by NPM)
6. release and deploy!

this process is proposed based on the fact that:
1. team is small so each member know about the project, hence 'on demand' communication is good enough using just pull requests.
2. changes are small, so reverting is simple. And make [atomic commit](https://en.wikipedia.org/wiki/Atomic_commit) helps this.
3. GIT is not used to determine release versions. This applies to whenever dependencies changes without notice, in which case each build could be different and release binaries are not garanteed same at any commit point.
Note that this should be the case for modern projects, if not, try [microservices](https://en.wikipedia.org/wiki/Microservices)

### bigger projects need some tweek
1. lock master branch and only allow pull requests into it
2. require certain number of approval in pull requests
3. trigger automated tests on branches with naming conventions

### References and ideas inspired from
1. https://barro.github.io/2016/02/a-succesful-git-branching-model-considered-harmful/
2. semantic versioning: http://semver.org/
