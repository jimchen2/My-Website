# Update system and install required packages
sudo pacman -Syu --noconfirm; sudo pacman -S git base-devel npm nodejs nginx certbot --noconfirm
# Create and configure a new user
sudo useradd -m builduser && sudo passwd -d builduser && echo 'builduser ALL=(ALL) NOPASSWD: ALL' | sudo tee /etc/sudoers.d/builduser
# Install Yay helper and MongoDB tools
sudo -u builduser bash -c 'cd ~; git clone https://aur.archlinux.org/yay-bin.git; cd yay-bin; makepkg -si --noconfirm; cd ..; rm -rf yay-bin; yay -S mongodb-tools mongosh-bin mongodb-bin --noconfirm'
# Clone website repository and set ownership
sudo mkdir -p /var/www; sudo git clone https://github.com/jimchen2/My-Website /var/www/My-Website; sudo chown -R builduser:builduser /var/www/My-Website
# Enable MongoDB and import data
sudo systemctl enable --now mongodb
sudo -u builduser bash -c 'cd /var/www/My-Website; mongorestore --dir=./dump; mongoimport --db test --file ./dump/test/blogs.json'
# Install backend dependencies and set up service
sudo -u builduser bash -c 'cd /var/www/My-Website/backend; npm install'
sudo cp /var/www/My-Website/my-website-backend.service /etc/systemd/system/my-website-backend.service
sudo systemctl daemon-reload && sudo systemctl enable --now my-website-backend
# Install frontend dependencies and build
sudo -u builduser bash -c 'cd /var/www/My-Website/frontend; npm install; npm run build'
# Set up SSL certificates
certbot certonly --standalone -d jimchen.me -d www.jimchen.me --email jimchen4214@gmail.com && systemctl enable --now certbot-renew.timer
# Set up Nginx
mkdir -p /etc/nginx/{sites-available,sites-enabled} && sudo ln -sf /etc/nginx/sites-available/mywebsite.conf /etc/nginx/sites-enabled/
sudo cp /var/www/My-Website/{mywebsite.conf,nginx.conf} /etc/nginx/{sites-available/mywebsite.conf,nginx.conf}
sudo systemctl enable --now nginx
# Set up Updates
sudo cp /var/www/My-Website/update-mywebsite.{service,timer} /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now update-mywebsite.timer
