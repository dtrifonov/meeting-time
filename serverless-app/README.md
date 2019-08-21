
#### Meeting Time
## Serverless application

1. More about [Serverless framework](https://serverless.com/)
  1. You need to have an Amazon [AWS CLI profile set up](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) on your machine.
  2. You could install serverless framework on your local machine, you could build a virtual machine and install serverless into it, or you could build and use the docker container from the Docker file provided with the app.
  3. From the serverless environment go to the serverless folder
    * to check if the environment is set up correctly run sls info;
    * run sls deploy;
    * go to API Gateway Service and find dev-MeetingTime Resource;
    * from the submenu select Stages/dev and find the Invoke URL;
    * Use this url to make requests from Hangouts app;
2. Docker file to build your own docker container is provided. More about [Docker](https://www.docker.com/)
  1. Go to the docker folder and execute docker build -t sls:1.2 . to build sls image;
  2. To avoid resetting AWS CLI profile again, share your local .aws with the docker container. Set up the path to your .aws folder in run-container.sh;
  3. Execute run-container.sh script;
  4. To enter into the container use docker exec -it sls /bin/bash;
  5. Go to the /home/node/app folder and execute sls info and sls deploy;
