import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useGlobalColorScheme } from "../config/global.js";

const ICON_SIZE = 35;

const socialLinks = [
  {
    href: "https://github.com/jimchen2",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/85fe8ea9-e734-4eb2-8a3a-bb914c5f6529",
  },
  {
    href: "https://www.kaggle.com/jc4214",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/f4d6cfa0-5ad6-45aa-8921-034b65b8809b",
  },
  {
    href: "mailto: jimchen4214@gmail.com",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/2756e229-05b2-4ffb-be7d-3f1457298b62",
  },
  {
    href: "/w.JPG",
    imgSrc:
      "https://github.com/jimchen2/nonimportant/assets/123833550/c01f51fd-fa06-49d7-840d-8652672db073",
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
