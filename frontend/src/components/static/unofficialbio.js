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
      <p>
        I am an individualist and I believe in freedom. I think from my own
        perspective.
      </p>
      <p>
        I am a minimalist, and I prefer simple things. In life I seldom get more
        things than necessary, and I try to be simple and direct in both
        speaking and writing.
      </p>
      <h3 id="preferences">Preferences</h3>
      <p>
        I am a devoted Linux user. I won&#39;t use Windows and mouse anymore.
      </p>
      <p>I have erratic sleep schedule.</p>
      <p>
        {/* I love traveling, and there are many places yet to go. I want to go to
        North Pole, Russia, Norway, Iceland, Italy, Kenya, and Australia. */}
      </p>
      <h3 id="hobbies">Hobbies</h3>
      <p>
        I live on the Internet and I would go browse all kinds of stuff for
        hours every day. I love watching YouTube, but I think Bilibili is more
        interactive. Some contents I like include{" "}
        <a href="https://www.youtube.com/@NNRunningTeam">Running</a>,{" "}
        <a href="https://www.youtube.com/watch?v=EFuxhi45ZbM&t=58s&ab_channel=NBCSports">
          Figure-skating
        </a>
        , Vlogs, <a href="https://www.youtube.com/@freecodecamp">Tutorials</a>,{" "}
        <a href="https://smotrim.ru/live/21">News</a>,{" "}
        <a href="https://www.youtube.com/@bluetractortv">Cartoons</a>,{" "}
        <a href="https://www.youtube.com/@PatrikPietschmann">Music</a>,{" "}
        <a href="https://www.youtube.com/watch?v=nImK2qsYoFM&ab_channel=FreeHigh-QualityDocumentaries">
          Documentaries
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=linlz7-Pnvw&t=638s&ab_channel=8KWorld">
          Travel Guides
        </a>
        .{" "}
      </p>
      <p>
        I also love watching{" "}
        <a href="https://smotrim.ru/live/63250">movies and tvs</a>, but do not have
        specific preferences.
      </p>
      <p>
        I used to really enjoy reading, but in the last 5 years I haven&#39;t
        read much.
      </p>
      <p>
        I love running and I usually run at 4-5 min/kilometer pace at evenings.
      </p>
      <p>I love hiking and I usually go out in weekends.</p>
      <h3 id="previous-websites">Previous Websites</h3>
      <p>
        <a href="https://jimchen4214.wixsite.com/12345">My previous website</a>{" "}
        is build using <a href="https://wix.com">Wix</a>. Wix is easy and slow,
        so I don&#39;t like Wix now.
      </p>
      <p>
        {" "}
        I also have a blog with <a href="thumb.jpeg">WeChat offical account</a>.
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BIO;
