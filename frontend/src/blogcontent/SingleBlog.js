import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SideNav } from "../sidebar/sidebar";
import { paddingtop, useGlobalColorScheme } from "../config/global";
import { MathJaxContext } from "better-react-mathjax";
import { NavLink } from "react-router-dom";
import { calculateBlogPadding } from "./SingleBlogPaddingHelper";
import BlogLikeButtonHelper from "./bloglikebuttonhelper";
import {
  generateCommonStyles,
  generateThemeStyles,
  generateAdditionalStyles,
} from "./stylesHelper";
import CodeBlock from "./CodeBlock";
import parse from "html-react-parser";

function SingleBlog({ date, text, title, like, id }) {
  const { colors } = useGlobalColorScheme();
  const [paddingStyles, setPaddingStyles] = useState(calculateBlogPadding());

  useEffect(() => {
    const handleResize = () => {
      setPaddingStyles(calculateBlogPadding());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const processedText = text.replace(
    /<pre><code class="(language-\w+)">(.*?)<\/code><\/pre>|<pre><code>(.*?)<\/code><\/pre>/gs,
    (match, language, codeWithLang, codeWithoutLang) => {
      const code = codeWithLang || codeWithoutLang;
      const langClass = language ? language : "";
      return `<codeblock language="${langClass}" code="${code.replace(
        /"/g,
        "&quot;"
      )}"></codeblock>`;
    }
  );

  const elements = parse(processedText, {
    replace: (domNode) => {
      if (domNode.name === "codeblock") {
        const language = domNode.attribs.language;
        const code = domNode.attribs.code.replace(/&quot;/g, '"');
        return <CodeBlock language={language} code={code} />;
      }
    },
  });

  const commonStyles = generateCommonStyles(colors);
  const themeStyles = generateThemeStyles(colors);
  const additionalStyles = generateAdditionalStyles(colors);

  const customHtml = `<style>${commonStyles} ${themeStyles} ${additionalStyles}</style>`;

  return (
    <Container fluid style={{ paddingBottom: "1rem" }}>
      <br />
      <br />
      <Row>
        <Col className="d-none d-lg-block">
          <SideNav />
        </Col>
        <Col
          md={12}
          lg={9}
          xl={10}
          style={{
            paddingTop: paddingStyles.paddingTop,
            paddingLeft: paddingStyles.paddingLeft,
            paddingRight: paddingStyles.paddingRight,
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
                <NavLink
                  to={`/embed/blog/${date}`}
                  className="small"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                    color: colors.color_blue_2,
                  }}
                >
                  Save as PDF
                </NavLink>
              </div>
              <h2>
                <div style={{ color: colors.color_blue_2 }}>{title}</div>
              </h2>
              <MathJaxContext>
                <div className="blog-content">
                  {elements}
                  <div dangerouslySetInnerHTML={{ __html: customHtml }} />
                </div>
              </MathJaxContext>
              <BlogLikeButtonHelper blogdate={date} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleBlog;
