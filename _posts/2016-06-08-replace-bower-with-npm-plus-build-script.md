---
layout:     post
title:      Replace Bower with NPM + Build Scripts
date:       2016-06-08
summary:    Why and how to replace bower with npm.
categories: software
---

Bower has been useful for front-end development for year but having two independent dependency management tool is still a pain. Stackoverflow has exelent explaination on why bower is required on top of npm: http://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm. In short, limit the resources sent to client(browser) is the main drive.

However, now most browser oriented projects include a build process to take care of things like minification, dynamic resource reference. With this process in hand (with tools like Grunt or Gulp), bower can be replaced with a few lines of script. To do that, of course the dependencies declared in bower need to be moved to npm runtime dependencies, then some script like below can take care of the job (whill still support the flattened dependencies feature):

```
gulp.task('copy:dependency:npm', ['clean'], function() {
	return gulp.src(
	   Object.keys(require('./package.json').dependencies).map(function(it) {
	     return 'node_modules/'+it+'/**/*'
	   }),
	   {base: 'node_modules/'})
	 .pipe(gulp.dest('build/platform/www/'));
});
```
Note I'm sending flattened dependencies into 'build/platform/www/' folder in case there's other platforms supported.

Relying on npm for the sole source of dependency management give clearer picture of the project in package.json plus one less dependency and possibly faster build time.

## Pending Update: include npm as build tool. eg. [ES6](https://github.com/Shawn-Cao/es6-babel-project-setup)
