'use strict';

let awsIot = require('aws-iot-device-sdk');
let config = require('./config');

let thingName = config.name;
let awsRegion = config.awsRegion;
let awsHost = `${config.awsClientId}.iot.us-east-1.amazonaws.com`;

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourAWSRegion>'
// with a unique client identifier and the AWS region you created your
// certificate in (e.g. 'us-east-1').  NOTE: client identifiers must be
// unique within your AWS account; if a client attempts to connect with a
// client identifier which is already in use, the existing connection will
// be terminated.
//
let device = awsIot.device({
   keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
    caPath: './certs/root-CA.crt',
  clientId: 'myClient',
    region: awsRegion,
      host: awsHost
});


device
  .on('connect', () => {
    console.log('connect');
    device.subscribe(`$aws/things/${thingName}/shadow/update/accepted`);
    device.subscribe(`$aws/things/${thingName}/shadow/get/accepted`);
    device.publish(`$aws/things/${thingName}/shadow/get`, '');
    });

device
  .on('message', (topic, payload) => {
    var result = JSON.parse(payload.toString());
    console.log('message', topic, "Led state: " + result.state.reported.led_mode);
  });
  
device
  .on('status', (thingName, stat, clientToken, stateObject) => {
    console.log('status', thingName, stat, stateObject);
  });
