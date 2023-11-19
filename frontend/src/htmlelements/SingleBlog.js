import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { GetPaddingWidth, useHeaderPadding } from "../utils/adjustelementwidth";
import LikeButton from "./likebutton";
import { customHtml } from "../config/global.js";
import { SideNav } from "../components/static/sidebar.js";

function SingleBlog({ date, text, title, like, id, type }) {
  const paddingWidth = GetPaddingWidth(1000);
  // Separate JavaScript code from HTML
  var formattedText = customHtml + text;
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <br />
      <Container style={containerStyle(paddingWidth)}>
        <Card>
          <Card.Body>
            <Card.Title style={{ fontSize: "14px" }}>
              {date}{" "}
              <a
                href={"/embed/" + date}
                style={{ position: "absolute", right: "30px" }}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Save as PDF
              </a>
            </Card.Title>{" "}
            <Card.Title style={titleStyle}>
              <a href={"/" + date}>
                <b>{title}</b>
              </a>
            </Card.Title>
            <div
              className="card-text"
              style={textContainerStyle}
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />
            <LikeButton like={like} id={id} blog={true} />
          </Card.Body>
        </Card>
      </Container>
      <SideNav />
    </div>
  );
}

const containerStyle = (padding) => ({
  paddingLeft: Math.max(padding, 200) + "px",
  paddingRight: padding + "px",
  minHeight: "150px",
});

const titleStyle = {
  fontSize: "25px",
  position: "relative",
  top: "10px",
};

const textContainerStyle = {
  position: "relative",
  top: "10px",
};

export default SingleBlog;
