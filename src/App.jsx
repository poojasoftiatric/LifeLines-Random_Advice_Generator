import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from './images/logo.png'

function App() {
  const [state, setState] = useState("");

  const fetchAdvice = () => {
    const randomId =  Math.floor(Math.random() * 200) + 1 ;
      axios
        .get(`https://api.adviceslip.com/advice/${randomId}`)
        .then((response) => {
          const { advice } = response.data.slip;
          setState(advice);
        })
        .catch((error) => {
          console.error(error);
          setState({ advice: "Sorry, something went wrong." });
        });
  };

  // Run fetchAdvice only once when component mounts 
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="app">
        <div className="navbar">
          <img src={logo} alt="Mb Advice" />
        </div>
        <div className="main">
          <div className="card">
            <h2 className="heading"><p>{state}</p></h2>
            <button className="button" onClick={fetchAdvice}>
              Give Me Advice!
            </button>
          </div>
        </div>
        <div className="footer">
          <span>
            Made by <span className="heart">❤</span> Pooja Kaushal
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
