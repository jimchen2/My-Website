# My-Website

Run on Linode instances

### Create a New User
```
sudo pacman -Syu
sudo pacman -S git base-devel
cd /root & git clone https://github.com/jimchen2/My-Website
sudo useradd -m builduser
sudo passwd -d builduser
echo 'builduser ALL=(ALL) NOPASSWD: ALL' | sudo tee /etc/sudoers.d/builduser
```

### Install yay
```
su - builduser
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si --noconfirm
```

### Install mongodb
```
yay -S mongodb-tools --noconfirm
yay -S mongosh-bin --noconfirm
yay -S mongodb-bin --noconfirm
```

### Store the database
```
sudo systemctl enable --now mongodb
mongorestore --dir=./dump
mongoimport --db test --file ./dump/test/blogs.json
```

### Configure Nginx
```
# Move the nginx.conf to /etc/nginx/nginx.conf
cp /root/My-Website/nginx.conf  /etc/nginx/nginx.conf
sudo systemctl start nginx
```

### Backend (starting on port 5000)
```
cd /root/My-Website/backend
npm i
node server.js 
```

### Frontend

```
cd /root/My-Website/frontend
npm i
sudo chmod o+x /root /root/My-Website /root/My-Website/frontend /root/My-Website/frontend/build
sudo chmod -R o+r /root/My-Website/frontend/build
npm install -g serve
sudo npm run build
sudo systemctl restart nginx
```
