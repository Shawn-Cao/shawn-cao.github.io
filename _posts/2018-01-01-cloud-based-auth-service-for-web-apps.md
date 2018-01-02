---
layout:     post
title:      Cloud Based User Auth Service for Web Apps
date:       2018-01-01
summary:    OAuth 2 and AWS Cognito service, and the future for static web apps.
categories: software
---

### This is an overview and refined script for my presentation at local ACIT AWS learning group in November. Link to [original presentation](/presentations/serverless-web-app-with-authentication/presentation.md) and [demo app](https://s3.amazonaws.com/cognito-demo-shawn/index.html)

## User Management feature and as cross-cutting concern

User management is an essential feature for most non-trivial web apps. These apps need to accept user login to support a streamlined process for users to re-visit the app. Security is another concern when the app collect sensitive user data. So this feature is also complicated and cross-cutting, and has been a tough feature for the development team to implement.

Dominating companies put large resources to do it right, while small businesses hack it to just work (think about the MongoDB Breaches last year). While there's community initiatives and open source projects to help with the implementation, it still took my team about 3 months and 5 iterations to fully understand the standard, choose the suitable approach and create an auth service and client libraries in the time of 2016.

## Security

For a modern app, (I'm talking about development methodology that favors stateless for deployment and component-based for fast iteration). OAuth2 is the saver and only component-based solution, and has become viable option for browser based apps in recently years because of the [open security](https://en.wikipedia.org/wiki/Open_security) achievements like JWT token, HTTPS enforcement, strict-transport-security headers and alike. In principle, browser based apps can rely on popular Single Sign-On (SSO) providers and JWT token to securely access OAuth2 protected resources, but I would say it still requires knowledge and discipline to do it right.

As a reminder, the app has to be served under HTTPS, has strict-transport-security headers and send auth cookies as secure cookies to be protected from related attack vectors. And security depends on the system as a whole, full secured components doesn't addes up and grant the system to be safe automatically.

## Cloud Services

There are cloud base solutions on the market. Like Okta.com for application level integrations, but AWS Cognito is the first one I know that is suitable for static web apps for progressive adoption. Cognito allows user authenticated through popular SSO providers to access its managed user data and is payed per managed user profile. Which make it better is it's free if you just use it to establish AWS IAM access. This is a huge plus if the apps already uses AWS to manage data, which is likely the case as AWS is the dominating service provider and have the most friendly prices before your app scales up.

## Tutorial

[Official tutorial](https://console.aws.amazon.com/cognito/code/?region=us-east-1&pool=us-east-1:7fa2bb23-5485-43ae-bd40-5f23a523c774) (choose JavaScript language) or visit my [original presentation](/presentations/serverless-web-app-with-authentication/presentation.md)

## Future App: focus on business

The whole purpose for cloud movement is about efficiency. Single Sign on from web Auth providers like Google and Facebook successfully provided a low friction identify management protocol for new apps to welcome user. Now cloud services like AWS Cognito pushed one step ahead, to saves the business owners the effort to develop and manage their user pool service. With growing numbers of cross-cutting concerns managed by 3rd party service, web app development can be more focused on the business, and business can focus more on the innovation.
