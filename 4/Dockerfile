FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 5003

CMD [ "node", "server.js" ]