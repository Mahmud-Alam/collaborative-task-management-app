import React, { useState } from "react";
import HomeCSS from './Home.module.css';
import LoginCSS from './Login.module.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [inpVal, setInpVal] = useState({
        email:"",
        password:""
    })

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

    const isUserExist = (arr, key, val) => {
      for(let obj of arr){
          if(obj[key] === val){
              return obj;
          }
      }
      return false;
    }

    const setlocalStorage = (e) => {
        e.preventDefault();
        
        const getStorageArr = JSON.parse(localStorage.getItem("userData"))[0]

        const {email, password} = inpVal;

        if(email === ""){
            alert('Email is required!')
        }else if(password === ""){
            alert('Password is required!')
        }else{
            if(getStorageArr.length>0){
              const user = isUserExist(getStorageArr,"email",email);
              console.log(user);
              if(user){
                if(user.password === password){
                  localStorage.setItem("user_login", JSON.stringify([user]));
                  history("/dashboard");
                }else{
                  alert("Password is Incorrect!")
                }
              }else{
                alert('Email is Incorrect!!');
              }
            }else{
              alert('Create an Accout first!');
              history("/signup");
            }
        }
    }

  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h3 className={`text-center col-lg-8 col-md-8 ${HomeCSS.textHome}`}>Login</h3>
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
              <p className={`mt-3 ${LoginCSS.pLogin}`}>Don't Have An Account? <span><NavLink className={LoginCSS.link} to="/signup">Sign Up</NavLink></span></p>
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