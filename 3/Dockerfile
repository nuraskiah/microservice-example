FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 5002

CMD [ "node", "server.js" ]