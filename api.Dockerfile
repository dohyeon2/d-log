FROM node:alpine
WORKDIR /app
COPY package.json .
RUN yarn 
RUN yarn pm2 install typescript ts-node
COPY ./api ./api
CMD yarn api
