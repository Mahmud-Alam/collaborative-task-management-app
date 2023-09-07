import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import HeaderCSS from './Header.module.css';


const Header = () => {
  return (
    <>
      <Navbar className={HeaderCSS.navBar} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Collaborative Task Management App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header