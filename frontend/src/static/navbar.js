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
    console.log(colors.color_blue_1);
    if (colors.dark === false && colors.color_light_gray == "#fffcfc") {
      updateColor("color_white", "#1a1a1a");
      updateColor("color_black", "#ffffff");
      updateColor("color_blue_1", "#6aff6a");
      updateColor("color_blue_2", "#00ff00");
      updateColor("color_light_gray", "#333333");
      updateColor("color_gray", "#282828");
      updateColor("grayscale", false);
      updateColor("dark", true);
    } else if (colors.dark === true) {
      updateColor("color_white", "#FFF0F5"); // Lavender Blush (light background)
      updateColor("color_black", "#8A2BE2"); // Indigo (text color)
      updateColor("color_blue_1", "#FFB6C1"); // Light Pink
      updateColor("color_blue_2", "#FF1493"); // Hot Pink
      updateColor("color_light_gray", "#FFD1DC"); // Pastel Pink
      updateColor("color_gray", "#FFC0CB"); // Pink (lighter gray)
      updateColor("grayscale", false);
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

  const externalLinkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      style={{ verticalAlign: "middle", marginLeft: "0px" }} // Adjusted margin
    >
      <title>External Link</title>
      <path d="M14 3h7v7h-2V6.41L10.41 15 9 13.59 17.59 5H14V3zM5 5h4v2H5v12h12v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" />
    </svg>
  );

  const themeToggleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      style={{ verticalAlign: "middle", marginLeft: "0px" }}
    >
      <title>Theme Toggle</title>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM12 4a1 1 0 0 0-1 1v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6V5a1 1 0 0 0-1-1z" />
    </svg>
  );

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
        style={{
          backgroundColor: colors.color_light_gray,
        }}
      >
        <Container>
          <Navbar.Brand className="navbar-brand-spacing black-text">
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
                to="/about"
                style={{ color: colors.color_black }}
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/portfolio"
                style={{ color: colors.color_black }}
              >
                Portfolio
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/blogpreview"
                style={{ color: colors.color_black }}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://anonytube.jimchen.me"
                style={{ color: colors.color_black }}
              >
                Tube{externalLinkIcon}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://photoprism.jimchen.me/s/hello/gallery"
                style={{ color: colors.color_black }}
              >
                Gallery{externalLinkIcon}
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
