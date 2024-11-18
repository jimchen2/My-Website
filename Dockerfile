# Use an official Node.js runtime as the base image
FROM node:latest

# Install git and other dependencies
RUN apt update -y && \
    apt install -y git

# Set the working directory
WORKDIR /app

# Change to the backend directory
WORKDIR /app/backend

# Copy .env.example to .env
RUN cp .env.example .env

# Install npm dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
