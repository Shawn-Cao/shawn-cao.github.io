---
layout:     post
title:      Ideas in Software Products
date:       2016-10-10
summary:    Importance on ideas and consistent re-evaluation of ideas during software development.
categories: software
---

## Ideas are the CORE in Software Products

Ideas are the core, and the only core in software products. It affects the product development, operation, tracking, and most importantly, competetiveness. One can always invest and catch up competetors in features through different approach, but better products are always the ones with better ideas.

Take example of WeChat vs Momo. WeChat's is about mobile specific platform, its focus on mobile specific concerns made it succesful. On the other hand, Momo gained it's track from privacy concerns on mobile networking, but distracted later on non-core features copied from popular networking apps. The loose on focus made Momo less popular, and other apps started to emerge on top of the same ideas.

I'm not an entrepreneur yet so I couldn't figure out the stories behind. I'm blaming these on leadership. Leadership in IT companies, which are intrinsically idea based, should focus on ideas, and the competetiveness of those ideas. I've seen big companies spending millions dollars elaborating on slightly outdated ideas. Always, turns out the slightly outdating, if left unaddressed, is costing them the whole project...

The failed Angular project in my neighbor team was new at the time of conceiving, but ventured in the dark field of maintaining security on static pages. Sophisticated mechanisms were build, just to move static HTML pages into CQ5 based content management systems (CMS), for authority protection. Which is causing problem in development, and violating the dev/prod parity principle. If leadership could assess the viability of original idea during execution, the team could catch the problem when maintainese issues showed up, and avoid over-investing and over-engineering on incompetent ideas.

Here, I'm proposing a set of ideas for UI development:

### Minimalism
1. smaller projects and faster prototyping - for the sake of assessing you are doing the right thing and your customers are happy.
2. smaller libraries - smaller, modular libraries can work together and your client can easily use them as custom bundles
3. invent on solution space, but stick to existing APIs. whenever possible - consider the communication cost whenever you create new tags, new factory names, etc in your libraries.
