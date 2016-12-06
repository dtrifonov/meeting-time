'use strict';

var changeStatus = require('./change-status.js');

module.exports.controlLed = (event, context, callback) => {
  var status = null;
  if(typeof( event.pathParameters.status) !== 'undefined') {
      status = parseInt(event.pathParameters.status);
  }
  if(status !== 0 && status !== 1) {
    var response = {
        statusCode: 400,
        body: JSON.stringify({
            "status":"error",
            "message":"Invalid status. It should be 1 or 0."
        })
    }
    callback(null, response);
  } else {
    changeStatus(status, callback);
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.ledOn = (event, context, callback) => {
    var status = 1;
    changeStatus(status, callback);
}

module.exports.ledOff = (event, context, callback) => {
    var status = 0;
    changeStatus(status, callback);
}
