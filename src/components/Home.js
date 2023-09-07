import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
        <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h3 className="text-center col-lg-8 col-md-8">Sign Up</h3>
            <div>
              <Form>
                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="username" type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="name" type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicPassword">
                  <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button className="col-lg-8 col-md-8" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <p className="mt-3">Already Have an Account <span>Signin</span></p>
            </div>
          </Col>
          <Col lg={6} md={6} className="mt-3 align-self-center">
            <div>
                <img src="" alt="" srcset=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home