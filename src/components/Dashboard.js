import React, { useState } from 'react'

const Dashboard = () => {

    const getUser = localStorage.getItem("user_login")
    const user = JSON.parse(getUser)

  return (
    <div className='mt-5 pt-5 text-center'>
        <h1>Welcome, {`${user[0].name}`}</h1>
    </div>
  )
}

export default Dashboard