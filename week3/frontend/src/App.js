import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
function App() {
  console.log("Start");
  try {
    axios.get("http://172.19.0.3:3000/").then((response) => {
      console.log("response");  
      console.log(response.data);
    });
  } catch (error) {
    console.log("error");
  } 
  console.log("End");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React acually worked yeey
        </a>
      </header>
    </div>
  );
}

export default App;
