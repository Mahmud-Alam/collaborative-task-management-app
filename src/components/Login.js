import React, { useState } from "react";
import HomeCSS from './Home.module.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h3 className="text-center col-lg-8 col-md-8">Sign In</h3>
            <div>
              <Form>
                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicPassword">
                  <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button className={`col-lg-8 col-md-8 ${HomeCSS.btn}`} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <p className="mt-3">Already Have an Account <span>Signin</span></p>
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
  )
}

export default Login