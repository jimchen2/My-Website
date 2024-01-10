import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global.js";

function PreviewCard(props) {
  const str = `/${props.date}`;
  const { colors } = useGlobalColorScheme();

  // Function to remove HTML tags
  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]*>/g, "");
  };

  const getHighlightedText = (text, highlight) => {
    // If no search term, return the first 150 characters of the original text
    if (!highlight) {
      return removeHtmlTags(text).substring(0, 150);
    }

    const lowerCaseText = text.toLowerCase();
    const startIndex = lowerCaseText.indexOf(highlight.toLowerCase());
    const endIndex = startIndex + highlight.length;

    // Calculate start and end indexes for the snippet
    const start = Math.max(startIndex - 150, 0);
    const end = Math.min(endIndex + 150, text.length);
    const snippet = text.slice(start, end);

    // Remove HTML tags from the snippet
    const cleanSnippet = removeHtmlTags(snippet);

    // Highlight the term in the snippet
    const parts = cleanSnippet.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} style={{ backgroundColor: colors.color_gray }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card
            className="mb-4"
            style={{
              backgroundColor: colors.color_white,
              border: "1px solid " + colors.color_black, // Adds a black border
            }}
          >
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-between">
                  <span
                    style={{ fontSize: "0.75rem", color: colors.color_black }}
                  >
                    {props.date}
                  </span>
                  <span
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                      color: colors.color_black,
                    }}
                  >
                    {props.type}
                  </span>
                </div>
                <a
                  href={str}
                  style={{ textDecoration: "none", color: colors.color_blue_2 }}
                >
                  <h4
                    className="mt-2"
                    style={{
                      textDecoration: "underline",
                      fontFamily: "'Ubuntu', sans-serif",
                    }}
                  >
                    {props.title}
                  </h4>
                </a>
              </Card.Title>
              <Card.Text
                className="small"
                style={{ marginTop: "10px", color: colors.color_black }}
              >
                {getHighlightedText(props.text, props.searchTerm)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PreviewCard;
