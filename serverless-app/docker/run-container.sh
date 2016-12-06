#!/bin/bash
docker run -it --name=sls --volume=$PWD/hangouts/:/home/node/app --volume=/root/.aws:/path/to/your/local/.aws sls:1.2 /bin/bash