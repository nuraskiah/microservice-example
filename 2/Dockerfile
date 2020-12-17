FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 5001

CMD [ "node", "server.js" ]