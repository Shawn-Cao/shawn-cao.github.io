————OAuth2————


What: Authorization provider

Why: 1. Scalable  2. Separate of concerns  => 3. Cloud compatible: 12 factor apps + serverless

How: http://sivatechlab.com/secure-rest-api-using-spring-security-oauth2/

Bundled solution: OpenID Connect

Cloud solution: AWS Cognito

———Cognito————
AWS cognito ads:
https://www.youtube.com/watch?v=abTy-Yyo6lI

Creating cognito user pool + federation agency: https://console.aws.amazon.com/cognito/code/?region=us-east-1&pool=us-east-1:7fa2bb23-5485-43ae-bd40-5f23a523c774&response=%7B%22authRole%22%3A%22arn%3Aaws%3Aiam%3A%3A113688755533%3Arole%2FCognito_googleclientAuth_Role%22%2C%22unauthRole%22%3A%22arn%3Aaws%3Aiam%3A%3A113688755533%3Arole%2FCognito_googleclientUnauth_Role%22%7D

Developer guide: http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html

———Demo——
Protected S3 resource will be accessible after authentication + authorization

http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-create-bucket

Explain steps: 1. Only give index.html public access. 2. Access other files has to go through JavaScript. (Click file link will fail) 3.Demo list other users object will fail
——vars——
S3 bucket name: cognito-demo-shawn
  bucket region: us-east-1
    bucket URL: http://cognito-demo-shawn.s3-website-us-east-1.amazonaws.com/
Facebook app ID: 149302952278784
IAM policy name: facebook-auth-per-object
  IAM role name: facebook-auth-per-object-user
    role ARN: arn:aws:iam::113688755533:role/facebook-auth-per-object-user

Safety explaind:
Facebook loads in separate browser tab, credential is safe
Popup window Oauth is only safe if user verifies the URL. Browser treat cookies from different domain as totally separated context scope
Should use https to access index.html
