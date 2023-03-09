FROM node:14
WORKDIR /api
COPY package*.json .
RUN npm install && npm install typescript -g
COPY . .
RUN npm run build
EXPOSE ${NEST_LOCAL_PORT}
CMD [ "nest", "start" ]