---
layout:     post
title:      Web Developers Tools Workshop - Part I. AngularJS Happy Developing - ACIT Invited Talk
date:       2015-11-11
summary:    Agenda and prerequisite.
categories: presentation
---

<div>
	<h3>Web Developer's Workshop - <abbr href="#MEAN" title="MEAN stack">AngularJS, NodeJS, MongoDB</abbr> tools and develop/deployment tutorial</h3>
	<h4>***1st meeting - environment setup***</h4>
	<div>
		<p>Prerequisite - please install below tools on your laptop</p>
		<ul>
			<li><a href="https://www.google.com/chrome/browser/desktop/" title="client-side view and debug">Google Chrome browser</a> - hit 'F12' or right-click and select 'Inspect element' to initiate Developers Tool</li>
			<li><a href="https://nodejs.org/en/download/" title="node is the server and npm is to manage dependencies and install other tools">Node JS</a> - (download/run your system's matching installer)</li>
			<li><a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" title="version control">Git</a> - choose install as bash command if you're more familiar with linux-bash command, otherwise select 'command line' option</li>
			<li><a href="https://docs.mongodb.org/manual/installation/" title="JavaScript friendly database">MongoDB</a> - required if local database desired</li>
			<li>Other tools will be installed on-site with npm (come with node JS). Please - run 'node -v' and 'npm -v' in command line to verify installation. Also 'git --version' and 'mongo --version' if desired.</li>
		</ul>
	</div>
	<div>
		<p>Good to have - Web Hosting Resources</p>
		<ul>
			<li><a href="https://pages.github.com/">GitHub Pages - free static pages hosting</a> - please follow the link to create a page under your GitHub account.</li>
			<li><a href="https://www.heroku.com/">Heroku web hosting</a> - we will cover how to publish your web application on heroku.<br />But you are more than welcome to try it out first, just create a NodeJS app (and add MongoDB as an add-on)</li>
		</ul>
	</div>
	<div>
		<p>Workshop Agenda and Learning Resources</p>
		<ol>
			<li>
				<a href="https://angularjs.org/">Angular JS</a><br />
				You can go through the <a href="https://docs.angularjs.org/tutorial">official tutorial</a> if you like, but this time, we'll just start from the <a href="https://github.com/angular/angular-seed">angular-seed project</a>. Let's just cover the basic components, then build and deploy it on each participants' GitHub web pages<br />
				How to customize the project will be introduced briefly but let's focus on environment setup and leave Angular topics to coming workshops (<a href="https://github.com/Shawn-Cao/shawn-cao.github.io/tree/master/app">preview</a> on GitHub and <a href="http://www.shawn-cao.com/app/">live</a>).
			</li>
			<li>
				<a href="https://nodejs.org/">Node JS & <a href="http://expressjs.com/">Express JS</a></a><br />
				Node.js is a JavaScript runtime that comes with http server out-of-the-box and readily accepts configurations, please try some on-line resources (eg. <a href="http://www.tutorialspoint.com/nodejs/nodejs_first_application.htm">tutorials point</a>) to grab a basic understanding about the capabilities of Node.js<br />
				Express is a framework for Node.js. The best tutorial I used is written by <a href="http://evanhahn.com/understanding-express/">Evan Hahn</a><br />
				For this workshop, we'll use a <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction">template from heroku</a> and we'll go through this tutorial step-by-step, which will be the major task for our workshop :-)
			</li>
			<li>
				<a href="https://www.mongodb.org/">MongoDB</a><br />
				We'll just use it. Someone else can give a tutorial in another workshop.
			</li>
		</ol>
	</div>
	<p>
		Time and Location - online, but we'll meet at <a href="https://www.google.com/maps/place/Thai+Pad+%26+Coco+Sweets/@33.9609598,-84.1362108,17z/data=!3m1!4b1!4m2!3m1!1s0x88f5a304f1612a55:0xa9ed795e986afc22">Thai Pad &amp; Coco Sweets</a> 11:30AM Nov. 14 for Q&amp;A and discussions
	</p>
	<div>
		<p>Expanded reading</p>
		<ul>
			<li>
				<a href="http://pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose">RESTful API develop</a>
			</li>
			<li>
				<a href="http://codeplanet.io/principles-good-restful-api-design/">RESTful API design principles</a>
			</li>
		</ul>
	</div>
</div>
