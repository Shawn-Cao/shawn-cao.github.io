---
layout:     post
title:      NPM under firewall (most corporate environments)
date:       2015-11-23
summary:    Debugging firewall related issue - NPM with GIT.
categories: software debugging
---

If you encountered this kind of problem when running npm install under a firewall: (to me it's my corporate firewall)
  'ECMDERR Failed to execute "git ls-remote --tags --heads git://github.com/jquery/jquery.git", exit code of #128 fatal: unable to connect to github.com: github.com[0: 192.30.252.130]: errno=No error'

Try override git default protocol with:
  'git config --global url.https://github.com/.insteadOf git://github.com/'
Note, you may need to unset the config var first by running:
  'git config --global --unset-all url.https'

### Reference:
  1. http://stackoverflow.com/questions/1722807/git-convert-git-urls-to-http-urls
  2. https://github.com/angular/angular-phonecat/issues/141
