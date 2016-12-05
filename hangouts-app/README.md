#### Meeting Time
## Hangouts application

1. Building Application;
  Google Hangouts API provides Javascript interface to the Hangouts video calls. The Meeting Time Hangouts application is embedded in the Google Hangouts as other popular Hangouts applications like Draw and Effects. It provides an UI to make requests to the Meeting Time's AWS Lambda function which updates AWS IoT thing shadow status.
  
  1. Create a free tier AWS account;
    * [AWS Free Tier](https://aws.amazon.com/free/) - The meeting time app is using AWS S3, AWS CloudFront, AWS API Gateway, AWS Lambda, AWS IoT. 
    Be careful, Meeting Time AWS Lambda application does not provide any authentication yet which could affect to your AWS bill if you share the access to it.
    * [Upload your files to a S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/UG/UploadingObjectsintoAmazonS3.html)
    * [Set up CloudFront to deliver content from S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html) 
      Select Distribution to use https protocol.
    * Use [CloudFront invalidation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) when you update your content in S3.
  2. Set up Google Hangouts Application;
    * [Hangouts - Getting Started](https://developers.google.com/+/hangouts/getting-started)

2. Publishing Application - the application is still in development mode