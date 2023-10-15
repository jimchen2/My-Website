import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GetPaddingWidth } from "../../utils/adjustelementwidth";

function NavBar() {
  const paddingWidth = GetPaddingWidth(900);
  const commonStyles = {
    fontFamily: "'Courier New', monospace",
    paddingLeft: `${paddingWidth}px`,
    paddingRight: `${paddingWidth}px`,
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary" style={commonStyles}>
      <Container className="me-auto">
        <Nav className="justify-content-start">
          <Nav.Link>
            <img alt="" src="/graficon.jpg" style={{ maxHeight: "30px" }} />
          </Nav.Link>
          <Navbar.Brand href="/" style={{ paddingTop: "10px" }}>
            Jim Chen's Website
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify-content-end">
          <Nav.Link href="/cv">CV</Nav.Link>
          <Nav.Link href="/unofficialbio">Unofficial Bio</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/leaveamessage">Leave a Message</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
