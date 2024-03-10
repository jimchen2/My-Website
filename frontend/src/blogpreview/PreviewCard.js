import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink

function PreviewCard(props) {
  const { colors } = useGlobalColorScheme();
  const { searchTerm } = props;

  const getHighlightedText = (text, highlight) => {
    if (!highlight) {
      return text; // Return text as is if there's no search term
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
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
              border: "1px solid " + colors.color_black,
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
                <NavLink
                  to={`/blog/${props.date}`} // Change href to to attribute
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
                </NavLink>
              </Card.Title>
              <Card.Text
                className="small"
                style={{ marginTop: "10px", color: colors.color_black }}
              >
                {getHighlightedText(props.text, searchTerm)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PreviewCard;
