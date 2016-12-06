'use strict';

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourAWSRegion>'
// with a unique client identifier and the AWS region you created your
// certificate in (e.g. 'us-east-1').  NOTE: client identifiers must be
// unique within your AWS account; if a client attempts to connect with a
// client identifier which is already in use, the existing connection will
// be terminated.
//

let config = {};
config.name = '<AWSIoTThingName>';
config.awsRegion = '<YourAWSRegion';
config.awsClientId = '<YourUniqueClientIdentifier>';
module.exports = config;

