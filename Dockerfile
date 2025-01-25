FROM node:18

# Install nginx
RUN apt-get update && apt-get install -y git

# Clone the repository
WORKDIR /app
RUN git clone https://github.com/jimchen2/My-Website .

# Setup backend
WORKDIR /app/backend
RUN npm ci

ENV REACT_APP_BACKEND_URL=https://jimchen.me/api

# Setup frontend
WORKDIR /app/frontend
RUN npm ci
RUN npm run build

CMD cd /app/backend && PORT=2840 npm start