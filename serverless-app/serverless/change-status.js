'use strict';

let AWS = require('aws-sdk');
let config = require('./config');

const thingName = config.name;
const awsRegion = config.awsRegion;
const awsHost = `${config.awsIoTThingEndpoint}.iot.us-east-1.amazonaws.com`;

module.exports = (status, callback) => {
  const state = {
      "state": {
          "desired": {
              "led_mode":status
          },
          "reported": {
              "led_mode":status
          }
      }
  }

  const params = {
       "thingName": thingName,
       "payload": JSON.stringify(state)
 };



  let iotdata = new AWS.IotData({endpoint: awsHost, region: awsRegion});
  
  iotdata.updateThingShadow(params, function (err, data) {
          if (err) {
              console.log(err, err.stack); // an error occurred
              let response = {
                  statusCode: 200,
                  body: JSON.stringify({
                      "status":"error",
                      "message":"An error occure while try to access the Device Gateway."
                  })
              };

          } else {
              console.log(data);
              let response = {
                  statusCode: 200,
                    body: JSON.stringify({
                    "status":"success",
                    "message":"Successfully updated thing shadow.",
                    "data": data
                })
              };  
          }
          callback(null, response);
   });
}
