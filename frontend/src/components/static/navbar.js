import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`); // Redirect to the search page with the term
    }
  };

  return (
    <>
      <style type="text/css">
        {`
          @media (min-width: 992px) { 
            .navbar-brand-spacing {
              margin-right: 10rem; /* Adjust this value for desired spacing */
            }
          }
        `}
      </style>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-spacing">Jim Chen's Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cv">CV</Nav.Link>
              <Nav.Link href="/unofficialbio">Unofficial-Bio</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/leaveamessage">Leave a Message</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="me-2"
                style={{ borderColor: 'blue' }}
              />
              <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
