## Meeting Time

We are using Google Hangouts as a meeting platform in our office. Meeting Time is a simple application which implements AWS IoT in a real life situation. 
The purpose of the app is to inform the colleagues around your desk that you are in a meeting.

The application consists of four tiers:

1. A hangouts application which provides web based UI to switch on or off a led connected to a raspberry pi;
2. An AWS Lambda function which handles requests from the hangouts app and updates the AWS IoT things shadow status. I decided to use this approach because it provides https 
transfer of the API data and is very cheap. You are free to use another solution, hosted or serverless;
3. AWS IoT DeviceGateway which provides device and things shadow management;
4. An AWS IoT device application installed in a raspberry pi which controls the led as a result of the things shadow status updates;