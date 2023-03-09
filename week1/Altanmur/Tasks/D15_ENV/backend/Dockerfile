FROM node:16-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY src/ src/

RUN npm run build

EXPOSE $API_PORT

CMD [ "node", "src/main.ts" ]