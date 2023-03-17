import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  async function login() {
    let data = { email, password };

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      localStorage.setItem("token", JSON.stringify(result));
      navigate("/home");
      return result;
    } catch (err) {
      console.log(err);
      popup();
    }
  }

  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-btn" onClick={login}>
          Login
        </div>

        {/* <a href='#' className='text'>Sign up</a> */}

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Something wrong</p>
          <p>Check read me</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
