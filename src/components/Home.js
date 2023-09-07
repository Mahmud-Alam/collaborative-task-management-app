import React, { useState } from "react";
import HomeCSS from './Home.module.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {

  const history = useNavigate()

  return (
    <>
      <Container>
        <Row className={`${HomeCSS.marTop} ${HomeCSS.rowMar}`}>
          <Col lg={6} md={6} className="mt-5">
            <h1 className={HomeCSS.h1Home}>Welcome to</h1>
            <h2 className={HomeCSS.textHome}>Collaborative Task Management App</h2>
            <p className={HomeCSS.pHome}>Elevate your task management with our collaborative app – the best choice for efficient teamwork. Real-time updates, easy task delegation, and seamless integration make it a game-changer. Try it now and experience unmatched productivity!</p>
            <div className={HomeCSS.btnDiv}>
              <Button className={`me-4 px-5 ${HomeCSS.btn}`} onClick={()=>history('/login')}>Login</Button>
              <Button className={`px-5 ${HomeCSS.btn}`} onClick={()=>history('/signup')}>Sign Up</Button>
            </div>
          </Col>
          <Col lg={6} md={6} className="mt-3 align-self-center">
            <div>
                <img className={`${HomeCSS.homeImg}`} src="./homeImg.jpg" alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
