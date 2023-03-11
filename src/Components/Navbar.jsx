import React from "react";
import "../App.css";
import logo from "../Assets/logo.png";
import {auth , provider } from '../firebase.js';

function Navbar() {

  const loginHandle = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        // alert(result.additionalUserInfo.profile.name)
        alert("Welcome "+result.additionalUserInfo.profile.name)
        sessionStorage.setItem('user' , result.additionalUserInfo.profile.name);
    })
    .catch((error) => alert(error.message));
  }

  const logoutHandle = () => {
      sessionStorage.removeItem('user');
      alert('user Logged out')
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo image" className="navbar-logo" />

        <h2>Chatura Developer & Enterprises </h2>
      </div>

      <input type="checkbox" id="check" />
      <label for="check" className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </label>

      <div className="navbar-mid">
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
          <li>
            <a href="#contact"> Help </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {!sessionStorage.getItem('user') && 
        <button className="sign-btn" onClick={loginHandle}>
          Login <i className="fa-solid fa-right-to-bracket"></i>
        </button>
        }
        {
          sessionStorage.getItem('user') && 
          <button className="sign-btn" onClick={logoutHandle}>
          logout <i className="fa-solid fa-right-to-bracket"></i>
        </button>
        }
       

      </div>
    </nav>
  );
}

export default Navbar;
