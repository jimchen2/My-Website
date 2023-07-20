import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x, y;
  if (w < 992) {
    x = 0;
  } else if (w < 1200) {
    x = 150;
  } else {
    x = 300;
  }
  y = h / 20;
  if (h < 400) y = 20;
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      style={{
        paddingLeft: x + "px",
        paddingRight: x + "px",
      }}
    >
      <Container className="me-auto">
        <Nav className="justify-content-start">
          <Nav.Link>
            <img
              alt=""
              style={{ maxHeight: y * 0.8 + "px" }}
              src={"/graficon.jpg"}
            />
          </Nav.Link>

          <Navbar.Brand href="/#/cv" style={{ paddingTop: y / 4 + "px" }}>
            Jim Chen's Website
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify-content-end" style={{ whiteSpace: "pre" }}>
          <Nav.Link href="/#/cv">CV</Nav.Link>
          <Nav.Link href="/#/unofficialbio"> Unofficial Bio</Nav.Link>
          <Nav.Link href="/#/projects"> Projects</Nav.Link>
          <Nav.Link href="/#/blog"> Blog</Nav.Link>
          <Nav.Link href="/#/leaveamessage"> Leave a Message</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
