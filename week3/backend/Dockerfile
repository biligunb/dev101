# Use a Node 16 base image
FROM node:16-alpine 

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY package*.json ./
RUN npm install
RUN npm install --save @nestjs/typeorm typeorm mysql2

COPY . .

# ==== RUN =======
# Set the env to "production"
# ENV NODE_ENV production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
# EXPOSE 3000

# Start the app
CMD [ "npm", "run", "start" ]
