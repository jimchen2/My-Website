import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LikeButton from "./likebutton";
import { SideNav } from "../components/static/sidebar.js";
import { paddingtop } from "../config/global.js";
import { customHtml } from "../config/global.js";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function SingleBlog({ date, text, title, like, id, type }) {
  text = text + customHtml;
  return (
    <Container
      fluid
      style={{
        paddingBottom: "1rem",
      }}
    >
      <Row>
        {/* Sidebar for large screens and up */}
        <Col lg={3} xl={2} className="d-none d-lg-block">
          <SideNav />
        </Col>

        {/* Main blog content */}
        <Col
          md={12}
          lg={9}
          xl={10}
          style={{
            paddingTop: `${paddingtop}px`,
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <div className="mb-4">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <small className="text-muted">{date}</small>
                <a
                  href={`/embed/${date}`}
                  className="small"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Save as PDF
                </a>
              </div>
              <h2>
                <a
                  href={`/${date}`}
                  className="text-primary"
                  style={{ textDecoration: "underline" }}
                >
                  {title}
                </a>
              </h2>

              <MathJaxContext>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </MathJaxContext>

              <LikeButton like={like} id={id} blog={true} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleBlog;
