import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GetWindowWidth } from "../../utils/adjustelementwidth";

const ICON_SIZE = 35;

const socialLinks = [
  {
    href: "mailto: info@jimchen.me",
    imgSrc: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  },
  {
    href: "https://github.com/jimchen2",
    imgSrc: "https://github.com/fluidicon.png",
  },
  {
    href: "https://www.linkedin.com/in/jiamu-chen-588002255/",
    imgSrc: "https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8",
  },
  {
    href: "/w.JPG",
    imgSrc:
      "https://newres.wechat.com/t/fed_upload/25d133b0-63d9-4102-857c-5cc84c752232/NTI4MWU5.ico",
  },
  {
    href: "/gzh.PNG",
    imgSrc:
      "https://lh3.googleusercontent.com/pw/AJFCJaU7fQ7Pk2X3m01D21xTW2JGxjB0CR6QslXKRjODsb-H0vgVmVVkdrFQeFk_p0fsltAolYsvksTwdVGS_aqjW3laMybMyxB74BVKDHHehvOqBykuAtOm-64uYl--UdVV-yl3reTKwrjcTisJV5QQgSM=w177-h169-s-no?authuser=0",
  },
  {
    href: "https://space.bilibili.com/1839157258",
    imgSrc: "https://static.hdslb.com/mobile/img/512.png",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  const windowWidth = GetWindowWidth();

  // Initialize the footerHeight based on the window width
  const initialFooterHeight = windowWidth > 768 ? 45 : 90;
  const [footerHeight, setFooterHeight] = useState(initialFooterHeight);

  useEffect(() => {
    // Adjust the footer's height directly based on the window width
    setFooterHeight(windowWidth > 768 ? 45 : 90);
  }, [windowWidth]);

  return (
    <Navbar
      fixed="bottom"
      expand="lg"
      className="bg-dark-subtle"
      style={{ height: `${footerHeight}px`, fontSize: "15px" }}
    >
      <Container
        style={{
          paddingLeft: `${windowWidth / 10}px`,
          fontFamily: "'Ubuntu',sans serif",
        }}
      >
        <CopyrightSection year={year} />
        <IconLinks />
      </Container>
    </Navbar>
  );
}

const CopyrightSection = ({ year }) => (
  <div>
    Copyright © by Jim Chen {year},
    <a href="https://github.com/jimchen2/My-Website"> Source Code</a>,
    <a href="/visitinfo"> Visitor Info</a>
  </div>
);

const IconLinks = () => (
  <div className="justify-content-end">
    {socialLinks.map((link) => (
      <a key={link.href} href={link.href}>
        <img alt="" src={link.imgSrc} style={{ height: ICON_SIZE }} />
      </a>
    ))}
  </div>
);

export default Footer;
