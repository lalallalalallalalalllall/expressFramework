FROM node:alpine
COPY . ./service
WORKDIR ./service
RUN npm install
RUN export PATH=$PATH:/bin/sh
ENTRYPOINT ["npm","start"]