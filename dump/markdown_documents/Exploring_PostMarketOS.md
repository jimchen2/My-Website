---
title: "Booting PostMarketOS"
date: Wed Apr 10 2024 19:36:45
type: linux
_oid: "64c9c73e1c066d6adae492da"
---

## Why?

After getting rid of the crappy UI and installing LineageOS on my Redmi Phone (https://www.jimchen.me/blog/Sat%20Mar%2009%202024%2002:01:02), I was still not satisfied. Mainly because I am using WeChat too frequently, and it is kinda addictive and time-wasting. Those apps eat away at me and gradually I become dependent on the mobile phone, glued to it occasionally. Eventually, I decided that carrying WeChat with me everywhere is just too distracting.

Furthermore, LineageOS doesn't offer as much control as Linux does. I mean, it does offer more control than iPhone or many Android phones with those crappy UIs, but it is more or less based on Android, and I am not that familiar with it.

With digital freedom and being liberal in mind, I began to explore PostMarketOS.

## Jailbreaking iPhone Crash

I tried to jailbreak the iPhone after running a script, but unfortunately, after that, my iPhone no longer boots, so I don't know what to do with it other than letting it rot.

## Buying OnePlus 6

Among the many devices supported by PostMarketOS, OnePlus 6 is a very accessible and modern choice, released in 2018. I hadn't realized that it was 6 years old though. Other devices like Nokia N900 have only 256 MB RAM, and the Samsung Phones were released in like 2013 or 2014. Anyways, I bought OnePlus 6 for 490 RMB (70 USD) from an online retailer store and began exploring.

## Flashing the ROM

Everything is very easy and straightforward; unlock the bootloader, then flash 2 images, and I am done.

## Desktop Environment

There are Phosh, Plasma Mobile, Gnome Mobile, and SXMO.

SXMO doesn't really have a UI; it's more like i3, managing everything from a dropdown menu.

Phosh and Gnome Mobile are pretty alike. Phosh was the mobile version for GNOME, but there are some small differences. They come with the same software shipped.

The wiki (https://wiki.postmarketos.org/) has most things anyway.

## SSH

It is very easy to SSH into it with a USB, and `ssh user@172.16.42.1` to SSH into it.

## Installing Software

Basically, connect to Wi-Fi and use the apk package manager (since it is essentially Alpine Linux), so like, many apps are available.

## Other Problems

Overflow: It is kind of working in GNOME with all windows very small.

- Nautilus is overflowing, and some browsers are overflowing.
- Chromium works, but it overflows too much, and Epiphany is bad at rendering webpages, but I settled with it.
- Doesn't natively support Chinese characters.
- Many websites are not rendering correctly. Need to change the user agent to mobile. It is like in the laptop Chromium dev console where you make the page smaller, and some websites overflow. My website works well though, since I am determining the fonts based on the window innerWidth.
- Needs manually switcghin between Headphones and Speakers: Kinda harder
- Rebooting error due to hardware problems
- Screen not auto-closing
- Doesn't support many appimages(like have to configure Clash manually)
- Need to re-login on every screen close, and it was configured to accept 6 numbers (sometimes buggy if the password contains other things)
- Camera not working
- Cannot receive calls(can initiate calls and receive messages)

These are mostly kinda small problems and can be solved by scripts, except the last problem receiving calls, which makes it less than a daily driver.

## Configuring Clash 

So before that I used Clash-verge in Linux(a frontend gui for clash that works fine). There is also Clash for Android. But like the gui isn't working well in PostmarketOS, so as an example to program it from command line, add a `test.yml`

```
proxies:
  - name: "Server1"
    type: ss
    server: bff6ce3.gxtewt.lol
    port: "43748"
    cipher: aes-128-gcm
    password: [YOURPASSWORD]
  - name: "Server2"
    type: ss
    server: bff6ce3.gxtewt.lol
    port: "43641"
    cipher: aes-128-gcm
    password:  [YOURPASSWORD]
mode: Global
external-controller: '0.0.0.0:9090'
port: 7890  # HTTP proxy port
socks-port: 7891  # SOCKS5 proxy port
```

Then get the file `Country.mmdb` and put it in current dir.

```
$ clash -d . -f test.yml
INFO[0000] inbound http://127.0.0.1:7890 create success. 
INFO[0000] inbound socks://127.0.0.1:7891 create success. 
INFO[0000] RESTful API listening at: [::]:9090
```

Using the api
```
$ curl http://localhost:9090/proxies/GLOBAL
{"alive":true,"all":["DIRECT","REJECT","Server1","Server2"],"history":[],"name":"GLOBAL","now":"Server2","type":"Selector","udp":false}
$ curl -X PUT -H "Content-Type: application/json" -d '{"name": "Server1"}' http://localhost:9090/proxies/GLOBAL
$ curl http://localhost:9090/proxies/GLOBAL
{"alive":true,"all":["DIRECT","REJECT","Server1","Server2"],"history":[],"name":"GLOBAL","now":"Server1","type":"Selector","udp":false}
```


## What's Good about PostMarketOS?

It gives users full control, including but not limited to (I observed these):

- Browser behaves like a computer, so if you switch tabs, they play in the background
- Package Manager!!! Like honestly, I would die for a package manager (although this means limited software anyway, only those working in Linux, like no shitty WeChat, lol)
- Native Linux env: I am most familiar with Linux and not familiar with proprietary environments
- DIY: Which literally means I can do whatever I want with my scripts. If I want to do something, I write a script and add it to the rc service.

## Is PostMarketOS a SmartPhone?

Of course it is, except it is more aligned with the functions of computer than phone. It is kind of like a Rasp Pi but with calling and messaging functions.

And also, the OnePlus is a smartphone, so it should be a smartphone. Whether a phone is smart shall be categorized be the kind of phone it is, not by the kind of operating systems.

Also it can browser web like on computer, so I do think it is a smartphone. It is only uncompatible with apks and App store.

## About People's Opinions

It's a person's freedom to think I am weird and don't like my ideas, but I think the same too about others though. Mobile Linux has a far smaller market than laptop Linux(although Android in build upon Linux core), so probably very very few people would comprehend. I think most people have far more resilience to WeChat or similar apps than I do. In fact, I am easily addicted and distracted by many of those apps, sometimes leading me to not doing anything all day long, so I must forcibly separate myself from those apps to ensure my mental wellbeing. People don't seem to understand that since they have resilience and self-control(which I seriously lack in). I also have the freedom to dislike other products with adequate reasons.

## What's Next?

The disk is 128 GB so I can store lots of 4k movies in it to watch offline. The whole working system is less than 4 GB now. It will probably gets larger, but with Alpine Linux it's just trivial to the whole disk.

I have no idea why people run out of disk space. Just delete the freaking bloatwares and everything would be working fine. Like to be honest without running Pytorch, 30 GB is enough for the whole computer or mobile with wise management(size of smaller sized SD card).

I will still need WeChat now and then, just not on a daily basis. For example, when like going to the hospital or doing certain things...

WeChat is a mandatory software nowadays in China, if it isn't required I will delete WeChat.

Sometimes when I need to call a Taxi the AMap and BaiduMap works good in LineageOS, but I can try not to call taxi altogether. It's not that much of a discomfort, just manage time more wisely.

Which obviously brings me nostalgia again back to the summer of 2018 when I didn't have a smartphone yet(I kind of wished I never need to use one now), when I went to Pudong Gaoqiao Riverside Forest Park alone in a bus with my old "Philip" phone(for elders). I waited for the bus (it only came every 50 minutes) after taking the subway forever, but fortunately the bus came around 20 minutes, and when I tried to return home the bus came very quickly.

Despite the inconvenience, I had less on my mind and had so much fun. I used to walk around and enjoy everything with a light-weighted heart, and look at the vast sea like nothing else mattered.

I remembered on that day I had 200 RMB(a lot to me at the time), and went all alone, and I thought that I would have went there much easier if I could call taxi after exiting the subway station. But being free of smartphone trap gives a unique sense of joy and freedom to the mind.
