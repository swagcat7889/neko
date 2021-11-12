FROM node:17

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm i -g typescript
COPY . .
RUN tsc

CMD [ "node", "index.js" ]