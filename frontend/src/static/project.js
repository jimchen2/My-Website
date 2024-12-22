import React from "react";
import { Container, Row } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global.js";
import Projects from "./projectPage.js";

function Portfolio() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    minHeight: "100vh", // This ensures the container has a minimum height of 100% of the viewport height
    display: "flex", // Enables flexbox for this container
    flexDirection: "column", // Sets the direction of main axis to column
    justifyContent: "center", // Centers content along the main axis (vertically)
  };

  return (
    <Container fluid className="p-3" style={containerStyle}>
      <br />
      <br />
      <Row className="justify-content-center" style={{ filter: colors.grayscale ? "grayscale(100%)" : "none" }}></Row>
      <Projects />
    </Container>
  );
}

export default Portfolio;
