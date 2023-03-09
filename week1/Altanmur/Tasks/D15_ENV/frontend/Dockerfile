FROM node:14 as build-stage

WORKDIR /client
COPY package.json .
RUN npm install && npm install typescript -g
COPY . .
RUN npm build
CMD ["node", "./react.js"]

# Stage 2
FROM nginx:1.17.0-alpine

COPY /nginx/default.conf /etc/nginx/conf.d/
EXPOSE ${CLIENT_PORT}

CMD nginx -g 'daemon off;'