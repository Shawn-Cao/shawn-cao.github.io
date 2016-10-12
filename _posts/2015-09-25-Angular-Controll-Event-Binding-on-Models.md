---
layout:     post
title:      Angular Control Event Binding on Models
date:       2015-09-25
summary:    Debugging firewall related issue - NPM with GIT.
categories: software debugging
---

Here I'll show a list of possible ways to control event binding on Angular UI-binded models (means Angular is managing the data model and will update UI when data changes)

## Through infinity loop with breaking
  <pre>
    &lt;label&gt;
			&lt;input type="checkbox" ng-model="suspendRestoreCommand.allSelected" ng-change="selectAll()"&gt;
			&lt;span&gt;Select All&lt;/span&gt;
		&lt;/label&gt;
      &lt;label ng-repeat="subscriber in suspendRestoreCommand.subscribers" class="accordion-checkbox checkbox23"&gt;
        &lt;input type="checkbox" ng-model="subscriber.selected" ng-change="selecting()" /&gt;
			&lt;/label&gt;
	</pre>

refer to https://docs.angularjs.org/error/$rootScope/inprog?p0=$digest
