import React, { useState } from 'react'
import "./login.css"

const Login = () => {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
  }

  return (
    <div className='page'>
      <div className='cover'>
        <h1>Login</h1>
        <input type="text" plcaeholder="username" />
        <input type="password" placeholder="password" />

        <div className='login-btn' onClick={popup}>Login</div>

        <a href='#' className='text'>Sign up</a>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or pass buruub baina hhoy</p>
        </div>
      
      </div>
    </div>
  )
}

export default Login