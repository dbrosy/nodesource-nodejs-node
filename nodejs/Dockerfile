FROM nodesource/node:latest

ADD package.json package.json
RUN npm install

ADD app.js app.js
ADD index.html index.html

EXPOSE 8090

CMD ["node","app.js"]
