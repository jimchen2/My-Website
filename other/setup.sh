sudo dnf install git nodejs nginx
cd ~ && sudo git clone https://github.com/jimchen2/My-Website
cd /root/My-Website/backend; npm install
# configure .env
sudo cp /root/My-Website/other/my-website-backend.service /etc/systemd/system/my-website-backend.service
cd /root/My-Website/frontend; npm install; npm run build
mkdir -p /etc/nginx/{sites-available,sites-enabled} && sudo ln -sf /etc/nginx/sites-available/mywebsite.conf /etc/nginx/sites-enabled/
sudo cp /var/www/My-Website/other/mywebsite.conf /etc/nginx/sites-available/mywebsite.conf
sudo cp /var/www/My-Website/other/nginx.conf /etc/nginx/nginx.conf
sudo systemctl daemon-reload && sudo systemctl enable --now my-website-backend nginx
