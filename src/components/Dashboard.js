import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {

    const getUser = localStorage.getItem("user_login")
    const user = JSON.parse(getUser)

    const history = useNavigate()

    const userLogout = () => {
      localStorage.removeItem("user_login")
      history('/login');
    }

  return (
    <div className='mt-5 pt-5 text-center'>
        <h1>Welcome, {`${user[0].name}`}</h1>
        <Button onClick={userLogout}>Logout</Button>
    </div>
  )
}

export default Dashboard