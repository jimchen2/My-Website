import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { marked } from "marked";
import { useState, useEffect } from "react";

const MarkdownComponent = () => {
  const [content, setContent] = useState(`

### Discussion Forums

| Platform                                     | Description                                       |
| -------------------------------------------- | ------------------------------------------------- |
| [Stack Overflow](https://stackoverflow.com/) | Q&A site for developers and tech professionals    |
| [Reddit](https://www.reddit.com/)            | Forum with multiple tech and non-tech communities |
| [RuBoard](https://forum.ru-board.com/)       | Tech discussion forum                     |
| [Pikabu](https://pikabu.ru)                  | Social news and discussion site           |
| [Huaren](https://huaren.us)                  | Chinese expat community and forum                 |
| [Hacker News](https://news.ycombinator.com/) | Social news website focusing on tech and startups |
| [Douban](https://www.douban.com/)            | Chinese social networking service                 |

### Documentation

| Platform                                       | Description                                 |
| ---------------------------------------------- | ------------------------------------------- |
| [MDN Web Docs](https://developer.mozilla.org/) | Comprehensive web development documentation |
| [Free Media](https://fmhy.net/)                | Free Media Resources                        |
| [Hidden Wiki](https://thehiddenwiki.org/)      | Tor Websites Wiki                           |

### Blogs

| Platform                          | Description                                |
| --------------------------------- | ------------------------------------------ |
| [Medium](https://medium.com/)     | Publishing platform with tech articles     |
| [Dev.to](https://dev.to/)         | Community blogging platform for developers |
| [Hashnode](https://hashnode.com/) | Developer blogging platform                |
| [Substack](https://substack.com/) | Developer blogging platform                |

### Git Platforms

| Platform                                | Description                                    |
| --------------------------------------- | ---------------------------------------------- |
| [Codeberg Gitea](https://codeberg.org/) | Open-source code hosting platform              |
| [GitLab](https://gitlab.com/)           | DevOps platform with Git repository management |

### News

| Platform                        | Description                   |
| ------------------------------- | ----------------------------- |
| [Sports.ru](https://sports.ru)  | Sports news platform          |
| [Match TV](https://matchtv.ru/) | Sports news platform          |
| [Habr](https://habr.com/)       | Tech news and articles        |
| [Dzen](https://dzen.ru)         | News and entertainment portal |

### Social Platforms

| Platform                         | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| [Odnoklassniki](https://ok.ru)   | Social network focused on reconnecting classmates  |
| [VK](https://vk.ru)              | Social network with diverse features               |
| [Telegram](https://telegram.org) | Cloud-based messaging app with channels and groups |

### Language Exchange

| Platform  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Tandem    | Language exchange app connecting native speakers worldwide   |
| HelloTalk | Social language learning app with built-in translation tools |

### Fediverse Platforms

| Platform                              | Description                                    |
| ------------------------------------- | ---------------------------------------------- |
| [Matrix](https://matrix.org/)         | Decentralized communication platform           |
| [PeerTube](https://joinpeertube.org/) | Decentralized video hosting platform           |
| [Mastodon](https://mastodon.social/)  | Decentralized social networking                |
| [Lemmy](https://lemmy.ml/)            | Decentralized link aggregation and discussions |

### Torrent Sites

| Platform                            | Description                              |
| ----------------------------------- | ---------------------------------------- |
| [RuTracker](https://rutracker.org/) | Torrent tracker                  |
| [1337x](https://1337x.to/)          | Popular torrent site for various content |

### Video Platforms

| Platform                                    | Description                             |
| ------------------------------------------- | --------------------------------------- |
| [YouTube](https://www.youtube.com/)         | Video sharing platform                  |
| [Dailymotion](https://www.dailymotion.com/) | Video sharing platform                  |
| [Rumble](https://rumble.com/)               | Video platform with various content     |
| [Bilibili](https://bilibili.com/)           | Chinese video platform                  |
| [1tv](https://1tv.ru)                       | State television channel        |
| [Smotrim](https://smotrim.ru)               | Streaming platform              |
| [VK Video](https://vk.com/video)            | Video platform within VK social network |
| [Rutube](https://rutube.ru)                 | Video hosting platform          |

### Clash

| Platform                            | Description                    |
| ----------------------------------- | ------------------------------ |
| [Clash](https://en.clash.wiki/)     | Clash Wiki                     |
| [Guatizi](https://guatizi.com/)     | GFW bypass resources and tools |
| [Aijichang](https://aijichang.xyz/) | Proxy and VPN services         |

### LLM Resources

| Platform                                                 | Description                              |
| -------------------------------------------------------- | ---------------------------------------- |
| [ChatGPT](https://chat.openai.com/)                      | Conversational AI by OpenAI              |
| [Claude](https://www.anthropic.com/)                     | AI assistant by Anthropic                |
| [Gemini](https://aistudio.google.com/)                   | Google's conversational AI               |
| [Perplexity](https://www.perplexity.ai/)                 | AI-powered search engine                 |
| [HuggingFace](https://huggingface.co/)                   | AI model repository and community        |
| [OpenRouter](https://openrouter.ai/)                     | API aggregator for language models       |
| [Poe](https://poe.com/)                                  | Platform for accessing various AI models |
| [Lmsys Arena](https://lmsys.org/arena/)                  | AI model comparison platform             |
| [Aider Benchmark](https://aider.chat/docs/leaderboards/) | AI coding assistant benchmarks           |



  `);

  const createMarkup = () => {
    return { __html: marked(content) };
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} lg={6} md={8} sm={10} xs={12}>
          <br />
          <br />
          <br />
          <div dangerouslySetInnerHTML={createMarkup()} />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownComponent;
