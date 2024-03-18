---
title: "Setting Up Invidious"
date: Wed Mar 12 2024 08:44:59
type: web
_oid: "652e036d48651e4055712d28"
---

Recently, I set up an Invidious instance at https://invidious.jimchen.me.

## What is Bad about YouTube?

Honestly, YouTube is a very good app, and inarguably the most popular media platform in the world right now. However, there are certain crappy things about it (I am not saying it's bad or something, because comparatively, I can say many bad things about nearly all sorts of platforms). They just reflect my personal opinion and are by no means objective.

1. YouTube made an attempt to ban AdBlocker.
   YouTube tried popping up a window if you used adblocker like five months ago, in late 2023, it stopped trying (or adblocker or ublock got past this limitation) right now.
   I understand that YouTube needs to earn money, and that maintaining the large amounts of video data and CDN costs probably more than billions yearly, but stopping users from using adblocker is obviously not the best act! There is a premium subscription, I just don't want to pay. Also Google won't accept my Debit Card.
2. YouTube has a really crappy recommendation system that keeps recommending watched videos to me again and again. Nothing new or interesting is recommended, and all I see are the videos I have watched 10 times, which is annoying honestly. Maybe someone can finetune the recommendation system for them, but using another frontend fixes this problem.
3. Actually, YouTube is much slower and laggy than raw streaming videos because it uses DASH. It tries really hard to encrypt the video source URL in the Javascript. It fetches the video URL every 1 or 2 seconds, as seen in the browser network inspector. However, Invidious can be configured to use either DASH or no DASH, meaning it fetches the video URL directly and makes it fully utilize the networking!
4. Generally, YouTube is less customizable, like, just like every other proprietary platform.

Invidious provides many advantages including

1. Invidious lets users customize every bit of it, including the menus, the language. Invidious has an API, and you can set up your own frontend (or app). FreeTube is an example. Video comments are considered distracting to me, so I disabled video comments. Invidious also has a listen-only config, which can make it practically a free music listening app.
2. Invidious is free and open-source and ad-free.

## Legality

```
Under United States copyright law 17 U.S.C. § 512(a), part of the Digital Millennium Copyright Act, content that "is transmitted through the system or network without modification of its content" is allowed, and legal.
```

## Installation

Copied from Source:
https://docs.invidious.io/installation/

Setting up on ArchLinux in cloud.

```
sudo pacman -Syu
sudo pacman -S base-devel librsvg postgresql ttf-opensans shards crystal
useradd -m invidious
su - invidious
git clone https://github.com/iv-org/invidious
exit
# Init the postgresql first
systemctl enable --now postgresql
sudo -i -u postgres
psql -c "CREATE USER kemal WITH PASSWORD 'kemal';" # Change 'kemal' here to a stronger password, and update `password` in config/config.yml
createdb -O kemal invidious
exit
su - invidious
cd invidious
make
# Configure config/config.yml as you like
cp config/config.example.yml config/config.yml
# Deploy the database
./invidious --migrate
exit
cp /home/invidious/invidious/invidious.service /etc/systemd/system/invidious.service
systemctl enable --now invidious.service
```

## Some More Cloud Configs

I use Linode cloud for deploying Invidious. I use a 5 dollar per month Nanode for money-saving purposes. Change the swap partition to be large, like around 4 GB. Then try to set up `config.yml` whichever way you want (it's basically the settings and stored in cookies). Then try to configure a reverse proxy with Nginx and download a certificate for the domain. Then the instance is up and running!
