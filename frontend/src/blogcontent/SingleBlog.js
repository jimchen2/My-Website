import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LikeButton from "../button/likebutton.js";
import { SideNav } from "../sidebar/sidebar.js";
import { paddingtop, useGlobalColorScheme } from "../config/global.js";
import { MathJaxContext } from "better-react-mathjax";

function SingleBlog({ date, text, title, like, id }) {
  const { colors } = useGlobalColorScheme();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const scripts = contentRef.current.getElementsByTagName("script");
      for (const script of scripts) {
        eval(script.innerText);
      }
    }
  }, [text]); // Re-run the effect if text changes

  const commonStyles = `
  h1, h2, h3, p, code { color: ${colors.color_black}; }
  h1, h2 { font-size: 28px; font-weight: bold; }
  h3 { font-size: 20px; font-weight: bold; }
  p, code { font-size: 16px; }

  details {
    background-color: ${
      colors.dark ? "#333" : "#f9f9f9"
    }; /* Dark mode background */
    border: 1px solid ${
      colors.dark ? "#666" : "#ddd"
    }; /* Adjust border color for dark mode */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  summary {
    font-weight: bold;
    cursor: pointer;
    color: ${
      colors.dark ? "#fff" : "#000"
    }; /* Change color based on dark mode */
  }

  details[open] summary::after, details:not([open]) summary::after {
    float: right;
    color: ${
      colors.dark ? "#fff" : "#000"
    };
  }

`;

  const themeStyles = `
    code, pre { background-color: ${colors.dark ? "#3C3F41" : "#D3D3D3"}; }
    code { font-family: monospace; }
  `;

  const customHtml = `<style>${commonStyles} ${themeStyles}</style>`;
  text += customHtml;

  return (
    <Container fluid style={{ paddingBottom: "1rem" }}>
      <Row>
        <Col lg={3} xl={2} className="d-none d-lg-block">
          <SideNav />
        </Col>

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
                className="blog-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <small className="text" style={{ color: colors.color_black }}>
                  {date}
                </small>
                <a
                  href={`/embed/${date}`}
                  className="small"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                    color: colors.color_blue_2,
                  }}
                >
                  Save as PDF
                </a>
              </div>
              <h2>
                <a
                  href={`/${date}`}
                  className="text"
                  style={{
                    textDecoration: "underline",
                    color: colors.color_blue_2,
                    fontSize: "28px",
                  }}
                >
                  {title}
                </a>
              </h2>

              <MathJaxContext>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `.blog-content img { max-width: 500px; width: 100%; height: auto; } .blog-content a { color: ${
                      colors.color_blue_2
                    }; text-decoration: underline; } .blog-content p { color: ${
                      colors.color_black
                    }; } ${
                      colors.grayscale
                        ? ".blog-content { filter: grayscale(100%); }"
                        : ""
                    }`,
                  }}
                />
                <div
                  ref={contentRef}
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
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
