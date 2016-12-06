'use strict';

var AWS = require('aws-sdk');

module.exports = (status, callback) => {
  var state = {
      "state": {
          "desired": {
              "led_mode":status
          },
          "reported": {
              "led_mode":status
          }
      }
  }

  var params = {
       "thingName": "pi-led",
       "payload": JSON.stringify(state)
 };



    var iotdata = new AWS.IotData({endpoint: '<AWS_IoT_Thing_ID.iot.us-east-1.amazonaws.com', region: 'us-east-1'});
    iotdata.updateThingShadow(params, function (err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
                var response = {
                    statusCode: 200,
                    body: JSON.stringify({
                        "status":"error",
                        "message":"An error occure while try to access the Device Gateway."
                    })
                };
                
            } else {
                console.log(data);
                var response = {
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
