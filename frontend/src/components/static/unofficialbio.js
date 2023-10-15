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
<h2 id="identity">Identity</h2>
<p>I am an individualist and libertarian. </p>
<p>I am a minimalist. </p>
<h2 id="preferences">Preferences</h2>
<p>I use Arch btw. </p>
<p><a href="https://www.jimchen.me/Wed%20Oct%2004%202023%2017:30:01">I prefer FOSS software</a>.</p>
<p>I like using Gnome, Bash, LibreOffice, OSS Code, Chromium, DuckDuckGo, Tor, Invidious, Dropbox, MongoDB, Linode, ChatGPT. </p>
<p>I am neutral in Instagram, Iphone, Reddit, WeChat, QQ.</p>
<p>I don&#39;t use Windows, Mouse, MSOffice, VSCode, Google Chrome, Twitter, Discord, Baidu.</p>
<p><a href="https://www.jimchen.me/Wed%20Oct%2004%202023%2018:07:34">My browser font is Courier New</a>.</p>
<h2 id="hobbies">Hobbies</h2>
<p>I like browsing Internet.</p>
<p>I like <a href="https://www.instagram.com/ludovico_einaudi/">Einaudi</a>&#39;s music, including Experience, Nuvole Bianche, Primavera, etc.</p>
<p>I like running and usually run at 4 min/kilometer pace at evenings.</p>
<h2 id="previous-websites">Previous Websites</h2>
<p><a href="https://jimchen4214.wixsite.com/12345/about-me">My previous website</a> is built on <a href="https://wix.com/">Wix</a>, but I dislike Wix.</p>
<p>I also <a href="https://www.jimchen.me/thumb.jpeg">blog on Wechat</a>.</p>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BIO;
