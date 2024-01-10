import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavbarHelper from "./navbarhelper";
import { useGlobalColorScheme } from "../config/global.js";

function NavBar() {
  const { colors, updateColor } = useGlobalColorScheme();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle search term changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
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
      .custom-toggler span {
        background-color: ${colors.dark ? "darkgray" : "white"}; 
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
          <Navbar.Brand href="/" className="navbar-brand-spacing black-text">
            Jim Chen's Website
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cv" style={{ color: colors.color_black }}>
                CV
              </Nav.Link>
              <Nav.Link
                href="/Wed%20Feb%2015%202023%2020:42:54"
                style={{ color: colors.color_black }}
              >
                Bio
              </Nav.Link>
              <Nav.Link href="/projects" style={{ color: colors.color_black }}>
                Projects
              </Nav.Link>
              <Nav.Link href="/blog" style={{ color: colors.color_black }}>
                Blog
              </Nav.Link>
              <Nav.Link
                href="/leaveamessage"
                style={{ color: colors.color_black }}
              >
                Message
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
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="me-2 custom-placeholder"
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
