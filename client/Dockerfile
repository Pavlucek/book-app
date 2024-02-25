# Use an official Node runtime as a build stage
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it from the outside.
EXPOSE 80

# No need to specify CMD because it's inherited from the nginx base image
