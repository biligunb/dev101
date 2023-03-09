FROM node:14

WORKDIR /client
COPY package*.json .
RUN npm install && npm install typescript -g
COPY . .
RUN npm build
EXPOSE ${REACT_LOCAL_PORT}
CMD ["npm", "start"]