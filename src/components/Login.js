import React, { useState } from "react";
import HomeCSS from './Home.module.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [inpVal, setInpVal] = useState({
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
        //console.log(inpVal);
        
        const getUserArr = localStorage.getItem("userData")
        //console.log(getUserArr);

        const {email, password} = inpVal;

        if(email === ""){
            alert('Email is required!')
        }else if(!email.includes("@")){
            alert('Please Enter valid Email Address!')
        }else if(password === ""){
            alert('Password is required!')
        }else if(password.length < 6){
            alert('Password should be at least 6 characters long')
        }else{
            if(getUserArr && getUserArr.length){
                const userData = JSON.parse(getUserArr);
                const userLogin = userData.filter((ele,i)=>{
                    return ele.email === email && ele.password ===password;
                });
                
                if(userLogin.length === 0){
                    alert("Email or Password is Incorrect!")
                }else{
                    localStorage.setItem("user_login", JSON.stringify(userLogin));
                    history("/dashboard");
                }
            }

        }
    }

  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h3 className="text-center col-lg-8 col-md-8">Sign In</h3>
            <div>
              <Form>
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
              <p className="mt-3">New Member? <span><NavLink to="/">Sign Up</NavLink></span></p>
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