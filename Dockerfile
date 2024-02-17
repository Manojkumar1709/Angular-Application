# Use the official Node.js image as a base image
FROM node:21-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Build the Angular app for production
RUN ng build

# Expose port 4200 (default port for Angular development server)
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
