import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Movies.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
                Movies
            </Nav.Link>
          </Nav> 
        </Container>
      </Navbar>
  );
}

export default NavBar