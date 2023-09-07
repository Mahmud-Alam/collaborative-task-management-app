import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import HeaderCSS from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <Navbar className={HeaderCSS.navBar} bg="dark" data-bs-theme="dark">
        <Container className={HeaderCSS.navCon}>
          <Navbar.Brand href="#home"><span><NavLink className={HeaderCSS.nav} to="/"><img src="./CTMA_logo.png" className={HeaderCSS.logo} alt=""/></NavLink></span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><span><NavLink className={HeaderCSS.nav} to="/">Home</NavLink></span></Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header