import React from 'react'
import ErrorCSS from './Home.module.css';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const ErrorPage = () => {

    const history = useNavigate()

  return (
    <>
        <div class="container">
            <div class="mt-5 error d-flex flex-column justify-content-lg-center align-items-center">
                <img src="./errorImg.jpg" alt=""/>
                <h4 className='mb-5'>404 Error | Page Not Found!</h4>
                <Button className={ErrorCSS.btn} onClick={()=>history('/login')}>Home</Button>
            </div>
        </div>
    </>
  )
}

export default ErrorPage