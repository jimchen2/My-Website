import { GetPaddingWidth } from "../../utils/adjustelementwidth";

function BIO() {
  var paddwidth = GetPaddingWidth();

  return (
    <div
      style={{
        paddingLeft: paddwidth + "px",
        paddingRight: paddwidth + "px",
    fontFamily: "'Courier New', monospace",
      }}
    >
      <br />
      <br />
<h3 id="identity">Identity</h3>
<p>I am an individualist and libertarian.</p>
<p>I am a minimalist.</p>

<h3 id="preferences">Preferences</h3>
<p>I use Arch, btw.</p>
<p><a href="https://www.jimchen.me/Preferences-FOSS">I favor FOSS software</a>.</p>
<p>I appreciate tools like Gnome, Bash, LibreOffice, OSS Code, Chromium, DuckDuckGo, Tor, Invidious, Dropbox, MongoDB, Linode, ChatGPT.</p>
<p>I maintain a neutral stance towards Instagram, iPhone, Reddit, WeChat, QQ.</p>
<p>I avoid using Windows, Mouse, MSOffice, VSCode, Google Chrome, Twitter, Discord, Baidu.</p>
<p><a href="https://www.jimchen.me/Preferences-BrowserFont">I prefer the Courier New font for my browser</a>.</p>

<h3 id="hobbies">Hobbies</h3>
<p>I enjoy browsing the internet.</p>
<p>I'm a fan of <a href="https://www.instagram.com/ludovico_einaudi/">Einaudi's</a> compositions, notably Experience, Nuvole Bianche, and Primavera.</p>
<p>I'm an avid runner, often maintaining a 4 min/kilometer pace during my evening runs.</p>

<h3 id="previous-websites">Previous Web Endeavors</h3>
<p><a href="https://jimchen4214.wixsite.com/12345/about-me">My former website</a> was developed using <a href="https://wix.com/">Wix</a>, but I now dislike Wix.</p>
<p>I also maintain a <a href="https://www.jimchen.me/blog-wechat">blog on WeChat</a>.</p>


      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BIO;
