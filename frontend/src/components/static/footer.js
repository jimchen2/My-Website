import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const ICON_SIZE = 35;

const socialLinks = [
  {
    href: "mailto: info@jimchen.me",
    imgSrc: "https://github.com/jimchen2/nonimportant/assets/123833550/2756e229-05b2-4ffb-be7d-3f1457298b62",
  },
  {
    href: "https://github.com/jimchen2",
    imgSrc: "https://github.com/jimchen2/nonimportant/assets/123833550/85fe8ea9-e734-4eb2-8a3a-bb914c5f6529",
  },
  {
    href: "https://www.linkedin.com/in/jiamu-chen-588002255/",
    imgSrc: "https://github.com/jimchen2/nonimportant/assets/123833550/62a33f9d-a04f-46c2-ba74-3490bb567924",
  },
  {
    href: "/w.JPG",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/c01f51fd-fa06-49d7-840d-8652672db073",
  },
  {
    href: "/gzh.PNG",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/0ea3afc0-1d1b-461a-8e24-e9a54367b16c",
  },
  {
    href: "https://space.bilibili.com/1839157258",
    imgSrc: "https://github.com/jimchen2/nonimportant/assets/123833550/32c7d69d-f526-4189-a98e-2f59527efedd",
  },
];
function Footer() {
  const year = new Date().getFullYear();

  return (
    <Navbar fixed="bottom" expand="lg" className="bg-dark-subtle footer-navbar" style={{ fontSize: '15px' }}>
      <Container style={{ height: '100%' }}>
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
