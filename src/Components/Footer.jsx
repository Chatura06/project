import React from 'react'
import "../styles/footer.css"
import logo from "../Assets/logo.png";

function Footer() {
  return (
    <div className='footer-main' id='contact'>
        <div className="footer-left">
            <img src={logo} alt="" />
            <h2>Chatura Developer & Enterprises </h2>
        </div>
        <div className="footer-right">
            <h2 className='footer-h2'>Follow us </h2>
            <ul>
                <li> <a href="#"> <i className="fa-brands fa-instagram"></i> </a> </li>
                <li> <a href="#"> <i className="fa-brands fa-twitter"></i>  </a></li>
                <li> <a href="#"> <i className="fa-brands fa-facebook"></i> </a> </li>
                <li> <a href="#"> <i className="fa-brands fa-youtube"></i> </a></li>
                <li> <a href="#"> <i className="fa-brands fa-snapchat"></i></a> </li>
            </ul>
        </div>

    </div>
  )
}

export default Footer