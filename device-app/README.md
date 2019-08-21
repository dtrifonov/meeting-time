## Meeting Time 
### AWS Device application

1. Set up your device;
  1. ssh to your raspberry pi;
  2. Install [nodejs](https://learn.adafruit.com/node-embedded-development/installing-node-dot-js);
  3. scp the device-app folder to your raspbery pi
  4. go to the folder on raspberry pi
  5. Install project dependencies - npm install --save
2. Set up certificate in AWS IoT;
  1. Open new tab and from Dashboard, select Security/Certificates
  2. Create and activate certificate for your thing in AWS IoT service;
  3. Download certificates - you could download them only once;
  4. Download [root CA](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem) certificate;
  5. Create a certs folder in the device-app folder in your raspberry pi;
  6. Upload the certificates to your raspberry pi and copy them to the certs folder;
  7. Rename the certificates to certificate.pem.crt, private.pem.key, publick.pem.key and root-CA.crt;
3. Set up a policy in AWS IoT;
  1. Open new tab and from the Dashboard, select Security/Policy from the AWS IoT menu;
  2. Add policy name on the top right corner and click Create;
  3. In the Create a policy screen in action add iot:* . It is the easiest way to start. Later if you need you could refine your policy.
  4. In Resource ARN add * . You could refine the resources on which this policy is applied later.
4. Attache the thing and policy to your certificate in AWS IoT;
  1. On the Dashboard from AWS IoT menu select Security/Certificates.
  2. Select your sertificate;
  3. From the top right corner select Actions/Attach policy and attach just created policy;
  4. From the top right corner select Actions/Attach thing and attach just created thing;
5. Test the connection on the raspberry pi;
* node device.js
