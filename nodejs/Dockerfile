FROM nodesource/node:latest

ADD package.json package.json
RUN npm install

ADD server.js server.js


CMD ["node","server.js"]
