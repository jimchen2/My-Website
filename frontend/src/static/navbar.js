import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavbarHelper from "./navbarhelper";
import { useGlobalColorScheme } from "../config/global";

function NavBar() {
  const { colors, updateColor } = useGlobalColorScheme();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  const toggleTheme = () => {
    if (colors.dark === false && colors.grayscale === false) {
      updateColor("color_white", "#000000");
      updateColor("color_black", "#ffffff");
      updateColor("color_blue_1", "#000000");
      updateColor("color_blue_2", "#ffffff");
      updateColor("color_light_gray", "#000000");
      updateColor("color_gray", "#000000");
      updateColor("grayscale", false);
      updateColor("dark", true);
    } else if (colors.dark === true) {
      updateColor("color_white", "#ffffff");
      updateColor("color_black", "#000000");
      updateColor("color_blue_1", "#ffffff");
      updateColor("color_blue_2", "#000000");
      updateColor("color_light_gray", "#fffcfc");
      updateColor("color_gray", "#d0d4dc");
      updateColor("grayscale", true);
      updateColor("dark", false);
    } else {
      updateColor("color_white", "#ffffff");
      updateColor("color_black", "#000000");
      updateColor("color_blue_1", "#0000ff");
      updateColor("color_blue_2", "#0000ff");
      updateColor("color_light_gray", "#fffcfc");
      updateColor("color_gray", "#d0d4dc");
      updateColor("grayscale", false);
      updateColor("dark", false);
    }
  };

  return (
    <>
      <style type="text/css">
        {`
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='gray' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
    }
    .navbar-toggler {
      border-color: lightgray !important;
    }
  `}
      </style>

      <NavbarHelper />
      <Navbar
        expand="lg"
        fixed="top"
        style={{ backgroundColor: colors.color_light_gray }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="navbar-brand-spacing black-text"
          >
            Jim Chen's Website
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/home"
                style={{ color: colors.color_black }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cv"
                style={{ color: colors.color_black }}
              >
                CV
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                style={{ color: colors.color_black }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/leaveamessage"
                style={{ color: colors.color_black }}
              >
                Message
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blogpreview"
                style={{ color: colors.color_black }}
              >
                Blog
              </Nav.Link>

              <Nav.Link
                onClick={toggleTheme}
                style={{ color: colors.color_black }}
              >
                Theme
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 custom-placeholder"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  color: colors.color_black,
                  borderColor: colors.color_black,
                  backgroundColor: colors.color_white,
                }}
              />
              <Button
                variant="outline-primary"
                type="submit"
                className="custom-search-button"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
