import React, { useState } from "react";
import HomeCSS from './Home.module.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home = () => {

    const [inpVal, setInpVal] = useState({
        username:"",
        name:"",
        email:"",
        password:""
    })
    //console.log(inpVal);

    const [data, setData] = useState([])
    
    const getData = (e) => {
        //console.log(e.target.value);
        
        const {value, name} = e.target;
        //console.log(value, name);

        setInpVal(()=>{
            return{
                ...inpVal,
                [name]:value
            }
        })

    }

    const setlocalStorage = (e) => {
        e.preventDefault();

        console.log(inpVal);

        const {username, name, email, password} = inpVal;

        if(username === ""){
            alert('Username is required!')
        }else if(username.length < 4){
            alert('Username should be at least 4 characters long')
        }else if(name === ""){
            alert('Name is required!')
        }else if(email === ""){
            alert('Email is required!')
        }else if(!email.includes("@")){
            alert('Please Enter valid Email Address!')
        }else if(password === ""){
            alert('Password is required!')
        }else if(password.length < 6){
            alert('Password should be at least 6 characters long')
        }else{
            localStorage.setItem("userData",JSON.stringify([...data,inpVal]));

        }
        
    }


  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h3 className="text-center col-lg-8 col-md-8">Sign Up</h3>
            <div>
              <Form>
                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="username" type="text" onChange={getData} placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="name" type="text" onChange={getData} placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicEmail">
                  <Form.Control name="email" type="email" onChange={getData} placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8 col-md-8" controlId="formBasicPassword">
                  <Form.Control name="password" type="password" onChange={getData} placeholder="Password" />
                </Form.Group>
                <Button className={`col-lg-8 col-md-8 ${HomeCSS.btn}`} onClick={setlocalStorage} variant="primary" type="submit">
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
  );
};

export default Home;
