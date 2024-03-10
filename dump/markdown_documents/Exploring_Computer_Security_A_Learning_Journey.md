---
title: "Exploring Computer Security: A Learning Journey"
date: Thu Jul 19 2023 20:42:54
type: web
_oid: "64b8ac573f9badd366c16484"
---
## Important Concerns about Cyber Activities

------------------------------------------------------------------------

### Legality and Ethics

Engaging in activities like DDoS attacks, email spamming, brute-forcing,
and creating malware is illegal and unethical. Even \"trying\" or
\"experimenting\" with these actions can have severe legal consequences
and can harm innocent users or organizations. Understanding
cybersecurity isn\'t about attacking others; it\'s about defending and
building secure systems.

------------------------------------------------------------------------

### Intentions

It sounds like you\'re feeling some frustration and disillusionment
about your studies and your perceived lack of progress. This is not
uncommon. Many students go through periods where they question the value
of their education or feel overwhelmed by the complexity of certain
topics. Before diving deeper into potentially harmful activities,
consider talking to a mentor, teacher, or counselor about these
feelings. They might provide some perspective or guidance.

------------------------------------------------------------------------

### Productive Use of Knowledge

Instead of focusing on potential harmful actions, consider using your
knowledge and skills in constructive ways:

-   **Participate** in ethical hacking programs like Capture The Flag
    (CTF) challenges.
-   **Engage** in open-source projects that emphasize security.
-   **Look for** internships or research opportunities in cybersecurity.
-   **Offer** to help local businesses or non-profits secure their
    digital systems.

------------------------------------------------------------------------

### Security and Privacy Concerns

Sharing specific details, IP addresses, or intentions about cyberattacks
in public forums or with AI models can put you at risk. It\'s always a
good idea to keep such intentions or activities private, but it\'s even
better not to engage in them at all.

------------------------------------------------------------------------

### Future Implications

Engaging in cyberattacks, even if it\'s on your own systems, can have
long-term implications for your personal and professional reputation.
Once you engage in malicious activities, it can be hard to regain trust
in the professional world.

------------------------------------------------------------------------

### Learning and Growth

It\'s okay to be curious and want to learn. Cybersecurity is a vast
field, and there\'s always more to discover. Consider focusing on the
defensive side of things. This can be just as challenging and rewarding,
without the ethical or legal concerns.

------------------------------------------------------------------------

Remember, the cybersecurity world needs more ethical and skilled
professionals. The goal should be to protect and secure, not to harm.

## DDOS

### Why?

After learning CS161 Computer Security I do not yet know how to do a
single attack (that is plausible and reasonable). For example, Phishing
is so fake.

After all, what is the point of learning a course if you do not know how
to do anything after learning it.

Sometimes I thought it would be better if I had spent my life doing
something more valuable instead of studying all day long and not
achieving anything.

Doing attacks is illeagal, but I thought I had to be at least able to do
attack before deeping into this question. I cannot even take down my own
server.

### What I had tried

A link on [Cloudflare](https://cloudflare.com/ddos/).

[LOIC](https://sourceforge.net/projects/loic/), is a tool used to flood
traffic to a server, but actually useless with my own computer. It
cannot be downloaded in Windows 10 (I tried in the school\'s computer),
because it is marked as virus. (Although it is exe file, quite ironic)
So I downloaded and ran with mono on my Ubuntu computer. By running a
UDP attack my Internet got stuck, but the server is good as ever, this
is because the attack is not distributed.

Also there is [saphyra](https://github.com/laorynas/Saphyra) on Github,
but it didn\'t do anything too.

I figured you have to build a botnet to perform DDOS attack, so I tried
to do it.

Then I tried [byob](https://byob.dev/). It has many bugs in using. It
also requires the python flask library to be lower version, for the web
gui. I can\'t see the point of having a web gui anyways. Basically byob
stands for build your own botnet, and you generate executable files or
python files to get computers to be part of the botnet. I tried the
run.y, then navigated to the web gui. Then I tried generating a
executable, and it wouldn\'t generate, and I asked on discord and no one
responded with valuable answer. It did generate a python file, but it
wouldn\'t run on my own computer, nor will it run in the cloud. I asked
again on discord and no one responded with a good answer.

Then I looked at the source of byob, and figured it is best if I can
write a script on my own to get control of other computers. But it is
very hard and I have no time to write anyways.

### MalwareSourceCode

There is a list of
[Malwares](https://github.com/vxunderground/MalwareSourceCode/tree/main/Linux/Botnets),
and there is a file with about 1000 lines of C code that I can\'t read
well.

### So what?

So I would probably be trying to learn more after going back to China,
since before that time I wouldn\'t have any large amounts of free time
to learn such stuff.

## Email Bulking

### Why?

There are many emails on the web, and I always wondered if it is safe to
post it out (whether it is plausible to spam the inbox of email.

There is [this repo](https://github.com/bhattsameer/Bombers) on Github.

### Problems

Gmail cannot login because of security reasons with python, so it is
hard. Besides, I cannot spam with only one account, since it will be
marked as spam and easily deleted. So I figured that I need to get a
large number of accounts to actually do something.

I tried many email scripts on github but they didn\'t work (because I
don\'t have many emails and cannot login gmail).

[Email Nuker](https://emailnuker.onrender.com/) works, but it can only
generate a few emails with a few email addresses with many errors, and
not able to spam many in a short amount of time.

All the mails generated by email nuker goes to spam in gmail, so it is
not really useful.

### Generate lots of random email addresses

How to generate lots of addresses is indeed a problem, and many email
providers need a phone to sign up, which I don\'t want. There is a
tutorial on [how to set up my own email
server](https://www.hostinger.com/tutorials/how-to-install-and-setup-mail-server-on-ubuntu/).
So maybe I can set up my own email server and then everything will be
easy. But again, these things take at least a week and up to a month to
finish, so I am not doing it now.

## Build VPN myself

I figured that if I am back in China I have to use VPN again, and I
don\'t want to use [xmfast](https://best.xmfast.one) anymore, and want
to use my own VPN server. Tor Browser is too slow. But I think I would
try to do that if I go back in China since it is hard to know what
errors I may run into, and I don\'t need VPN anyways now.

## Flooding Google Forms or Wjx

For google forms, there is [borang](https://borang.skrin.xyz/), which
works fine, and you can submit as many times as you want. So if you put
a google form in public it is easy to flood it with many responses.
That\'s why Berkeley needs a .berkeley.edu mail to access its google
forms.

I haven\'t done much about wjx, though, but I figured it won\'t be hard
to spam it.

## Conclusion

I wasted a lot of time without achieving anything, since I do not have a
focus and I am taking classes right now. I hope I will achieve some
things when I have some more time and mind to do it.
