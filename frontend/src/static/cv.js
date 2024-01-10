import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global.js";

function CV() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    minHeight: "100vh", // This ensures the container has a minimum height of 100% of the viewport height
    display: "flex", // Enables flexbox for this container
    flexDirection: "column", // Sets the direction of main axis to column
    justifyContent: "center", // Centers content along the main axis (vertically)
  };

  return (
    <Container fluid className="p-3" style={containerStyle}>
      <Row className="justify-content-center" style={{ filter: colors.grayscale ? "grayscale(100%)" : "none" }}>
        <Col xs={12} md={6}> {/* Adjust the column size as needed for medium and larger screens */}
          <iframe
            title="cv"
            src="https://drive.google.com/file/d/1qTuJPde4FJmLOh7R9pF22H1SP4Ooj0UP/preview"
            width="640"
            height="480"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} // Center the iframe horizontally
            allow="autoplay"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
