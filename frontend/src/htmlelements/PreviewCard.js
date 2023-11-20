import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function PreviewCard(props) {
  const str = `/${props.date}`;

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-between">
                  {/* Smaller text for date and type */}
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {props.date}
                  </span>
                  <span
                    className="text-muted"
                    style={{ fontStyle: "italic", fontSize: "0.75rem" }}
                  >
                    {props.type}
                  </span>
                </div>
                <a
                  href={str}
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <h4
                    className="mt-2"
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      fontFamily: "'Ubuntu', sans-serif",
                    }}
                  >
                    {props.title}
                  </h4>
                </a>
              </Card.Title>
              <Card.Text className="small" style={{ marginTop: "10px" }}>
                {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PreviewCard;
