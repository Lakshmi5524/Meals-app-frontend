import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
         
          <Navbar.Brand  href="/">Meals App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
        
              {/* <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/singup">Signup</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNavbar

