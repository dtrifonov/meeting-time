## Meeting Time

A simple application which implements AWS IoT in a real life situation. The purpose of the app is to inform your colleagues around your desk that you are in a meeting.

The application consists from three parts:

1. A hangouts application which provides web based UI to control the status of a led connected to a raspberry pi;
2. An AWS Lambda function which handles requests from the hangouts app and updates the AWS IoT things shadow status;
3. An AWS IoT device application installed in a raspberry pi which controls the led as a result of shadow status updates;