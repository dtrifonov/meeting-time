#!/bin/bash
openssl s_client -connect <YourUniqueClientIdentifier>.<YourAWSRegion>.amazonaws.com:8883 -CAfile ./certs/root-CA.crt -cert ./certs/certificate.pem.crt -key ./certs/private.pem.key
