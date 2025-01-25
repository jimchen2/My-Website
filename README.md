# My-Website

```
sudo docker build -t jimchen2/my-website .
#docker run -p 80:80 --env-file .env jimchen2/my-website
sudo docker run -d --restart always -p 3001:80 -e MONGODB_URI=your_mongodb_connection_string jimchen2/my-website


sudo docker push jimchen2/my-website

sudo docker system prune -af
```
