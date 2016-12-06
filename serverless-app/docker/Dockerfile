FROM node:4.3.2

RUN npm install serverless -g && \
    apt-get update && \
    apt-get install -y python-pip python-dev build-essential && \
    pip install --upgrade pip && \
    pip install --upgrade virtualenv && \
    pip install awscli --ignore-installed six

RUN mkdir /home/node/app && \
    mkdir /root/.aws

VOLUME ["/home/node/app", "/root/.aws"]
CMD ["/bin/bash"]
