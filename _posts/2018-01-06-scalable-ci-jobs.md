---
layout:     post
title:      Scalable CI jobs
date:       2018-01-01
summary:    Some good practices for CI (Jenkins) jobs to remain scalable.
categories: software
---

### draft points: for modern CI
1. no git commit in CI. can have manual job just for commit and fail though (use build or whatever Jenkins tracked number)
2. test and deploy artifact, not source code
3. let dependency auto upgrade
4. CD CI vs traditional CI:
  2. If hotfix is desired (reproducible build): save all dependency versions with built artifact
  3. build data base to track internal project dependencies, to trigger contract test and notify change and risks. (use download statistics not pom.xml, package.json because of transitive dependencies)
