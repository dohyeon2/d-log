FROM node:alpine
WORKDIR /app
COPY package.json .
RUN yarn 
RUN yarn pm2 install typescript ts-node
COPY . .
CMD yarn api
