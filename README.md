# My-Website

Run on Linode instances

### Create a New User
```
sudo pacman -Syu
sudo pacman -S git base-devel
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
```

### Configure Nginx
```
# Move the nginx.conf to /etc/nginx/nginx.conf
sudo setfacl -m u:nginx:rx /root
sudo setfacl -R -m u:nginx:rX /root/My-Website/frontend/build
sudo systemctl start nginx
```


### Backend(starting on port 5000)
```
cd /root/My-Website/backend;
cd backend 
npm i
node server.js &
```

### 


Frontend
```
cd frontend
npm i
sudo npm start
```


[user ~/Downloads/My-Website/frontend]$ sudo chmod o+x /home /home/user /home/user/Downloads /home/user/Downloads/My-Website /home/user/Downloads/My-Website/frontend
[user ~/Downloads/My-Website/frontend]$ sudo chmod -R 755 /home/user/Downloads/My-Website/frontend/build
[user ~/Downloads/My-Website/frontend]$ 

