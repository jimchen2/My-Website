import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  var d = new Date();
  var year = d.getFullYear();
  var w = window.innerWidth;
  var h = window.innerHeight;
  var y;

  y = h / 17;

  return (
    <>
      <Navbar
        fixed="bottom"
        expand="lg"
        className="bg-dark-subtle"
        style={{ height: y + "px", fontSize: y / 3 + "px" }}
      >
        <Container>
          <div style={{ paddingLeft: w / 10 + "px" }}>
            <div>
              Copyright © by Jim Chen {year},{" "}
              <a href="https://github.com/jimchen2/My-Website">Source Code</a>,{" "}
              <a href="/#/visitinfo">Visitor Info</a>
            </div>
          </div>
          <div className="justify-content-end">
            <a href="mailto: info@jimchen.me">
              <img
                alt=""
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
            <a href="https://github.com/jimchen2">
              <img
                alt=""
                src="https://github.com/fluidicon.png"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
            <a href="https://www.linkedin.com/in/jiamu-chen-588002255/">
              <img
                alt=""
                src="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
            <a href="/w.JPG">
              <img
                alt=""
                src="https://newres.wechat.com/t/fed_upload/25d133b0-63d9-4102-857c-5cc84c752232/NTI4MWU5.ico"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
            <a href="/gzh.PNG">
              <img
                alt=""
                src="https://lh3.googleusercontent.com/pw/AJFCJaU7fQ7Pk2X3m01D21xTW2JGxjB0CR6QslXKRjODsb-H0vgVmVVkdrFQeFk_p0fsltAolYsvksTwdVGS_aqjW3laMybMyxB74BVKDHHehvOqBykuAtOm-64uYl--UdVV-yl3reTKwrjcTisJV5QQgSM=w177-h169-s-no?authuser=0"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
            <a href="https://space.bilibili.com/1839157258">
              <img
                alt=""
                src="https://static.hdslb.com/mobile/img/512.png"
                style={{ maxHeight: 0.8 * y }}
              />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
