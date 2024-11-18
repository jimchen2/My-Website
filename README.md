# My-Website

## ToDO

- [ ] Add YouTube Video Page
- [ ] Change title to from `?title=...` to `/type/title`
- [ ] Implement in-memory caching for Preview Page for all blogs
- [ ] Build a better search function (vector search)
- [ ] Support multi languages
- [ ] Add Online Profiles
- [ ] Write Import Code

- **Backend Implentation**

```
/blog?date="string"&type="string"
get
/blogpreview
get
/getbloglikes?blogdate="string"&isarray=bool
get
/comment?blogdate="string"
get/post
/visitinfo?num=[int] getting the num latest visitinfos
get/post
/changechildid
patch
/addliketoblog?blogdate="string"&isliked
patch
/addliketocomment?dateString=yourDateStringHere&isliked
/addliketocomment?commentid=yourCommentIdHere&isliked
patch
/search?query="string"
get
```

## Backend

```
sudo dnf update && sudo dnf install git nodejs 
git clone https://github.com/jimchen2/My-Website && cd My-Website/backend
cp .env.example .env

sudo bash -c 'cat > /etc/systemd/system/my-website.service << EOL
[Unit]
Description=My Website Backend
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/My-Website/backend
ExecStart=/usr/bin/npm start
Restart=always

[Install]
WantedBy=multi-user.target
EOL'

npm i
sudo systemctl daemon-reload
sudo systemctl enable --now my-website
```
