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
          <NavLink className={HeaderCSS.navLink} to="/"><img src="./CTMA_logo.png" className={HeaderCSS.logo} alt=""/></NavLink>
          <Nav className="me-auto">
            <NavLink className={HeaderCSS.navLink} to="/">Home</NavLink>
            <NavLink className={HeaderCSS.navLink} to="/">Task</NavLink>
            <NavLink className={HeaderCSS.navLink} to="/">About Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header