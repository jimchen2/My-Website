import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useGlobalColorScheme } from "../config/global.js";

const ICON_SIZE = 35;

const socialLinks = [
  {
    href: "https://github.com/jimchen2",
    imgSrc:
      "/github-icon.png",
  },
  {
    href: "https://www.kaggle.com/jc4214",
    imgSrc:
      "/kaggle-icon.png",
  },
  {
    href: "mailto: jimchen4214@gmail.com",
    imgSrc:
      "/gmail-icon.png",
  },
  {
    href: "/w.JPG",
    imgSrc:
      "/wechat-icon.png",
  },
];

function Footer() {
  const { colors } = useGlobalColorScheme();
  const year = new Date().getFullYear();

  // Styles are defined inside the component using the colors from the hook
  const linkStyle = {
    color: colors.color_blue_2,
    textDecoration: "underline",
  };

  const imageStyle = {
    height: ICON_SIZE,
    filter: colors.grayscale ? "grayscale(100%)" : "none",
  };
  const CopyrightSection = ({ year, linkStyle }) => (
    <div>
      <span
        style={{ color:colors.color_black }}
      >
        Copyright © by Jim Chen {year}, 
      </span>
      <a href="https://github.com/jimchen2/My-Website" style={linkStyle}>
         Source Code 
      </a>
      ,
      <a href="/visitinfo" style={linkStyle}>
         Visitor Info 
      </a>
    </div>
  );

  return (
    <Navbar
      fixed="bottom"
      expand="lg"
      style={{ backgroundColor: colors.color_gray, fontSize: "15px" }}
    >
      <Container style={{ height: "100%" }}>
        <CopyrightSection year={year} linkStyle={linkStyle} />
        <IconLinks imageStyle={imageStyle} linkStyle={linkStyle} />
      </Container>
    </Navbar>
  );
}

const IconLinks = ({ imageStyle, linkStyle }) => (
  <div className="justify-content-end">
    {socialLinks.map((link) => (
      <a key={link.href} href={link.href} style={linkStyle}>
        <img alt="" src={link.imgSrc} style={imageStyle} />
      </a>
    ))}
  </div>
);

export default Footer;
