'use strict';

//
// Replace the values of <AWSIoTThingName>, '<YourUniqueClientIdentifier>', 
// <YourUniqueThingEndpoint> and '<YourAWSRegion>'
// with the thing name as it was set in AWS IoT Device manager, 
// a unique client identifier, unique hing Shadow using this Rest API Endpoint  
// and the AWS region you created your certificate in (e.g. 'us-east-1').  
// 
// NOTE: client identifiers must be
// unique within your AWS account; if a client attempts to connect with a
// client identifier which is already in use, the existing connection will
// be terminated.
//

let config = {};
config.name = '<AWSIoTThingName>';
config.awsRegion = '<YourAWSRegion';
config.awsClientId = '<YourUniqueClientIdentifier>';
config.awsIoTThingEndpoint = '<YourUniqueThingEndpoint>';
module.exports = config;

