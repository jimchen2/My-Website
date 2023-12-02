import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global.js";

function CV() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    minHeight: "100vh", // This will make sure the container has a minimum height of 100% of the viewport height
  };

  return (
    <Container fluid className="p-3" style={containerStyle}>
      <Row
        className="justify-content-center"
        style={{
          filter: colors.grayscale ? "grayscale(100%)" : "none", // Conditional grayscale filter
        }}
      >
        <Col xs={12}>
          <div className="text-center mb-4">My Curriculum Vitae 2023.6</div>
          <div
            style={{ overflow: "auto", minHeight: "500px", maxWidth: "800px" }}
          >
            <object
              data="/CV.pdf"
              type="application/pdf"
              width="100%"
              style={{ minHeight: "500px" }}
            >
            </object>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
