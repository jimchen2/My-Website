# Use an official Node.js runtime as the base image
FROM node:latest

# Install git and other dependencies
RUN apt update -y && \
    apt install -y git

# Set the working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/jimchen2/My-Website

# Change to the backend directory
WORKDIR /app/My-Website/backend

# Copy .env.example to .env
RUN cp .env.example .env

# Install npm dependencies
RUN npm install

# Expose the port your app runs on (adjust if needed)
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
