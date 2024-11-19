FROM node:18

# Install nginx
RUN apt-get update && apt-get install -y nginx git

# Clone the repository
WORKDIR /app
RUN git clone https://github.com/jimchen2/My-Website .

# Setup backend
WORKDIR /app/backend
RUN npm install

# Setup frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Configure nginx
COPY /app/other/nginx.conf /etc/nginx/nginx.conf
COPY /app/other/mywebsite.conf /etc/nginx/sites-available/
RUN mkdir -p /etc/nginx/sites-enabled && \
    ln -sf /etc/nginx/sites-available/mywebsite.conf /etc/nginx/sites-enabled/

# Start both backend and nginx
CMD service nginx start && cd /app/backend && PORT=2840 npm start

