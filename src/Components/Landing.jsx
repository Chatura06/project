import React, { useEffect } from 'react'
import "../styles/landing.css";
import landing from "../Assets/landing.png"

function Landing() {

  return (

    <>
    <div className='landing-main'>
        <div className="landing-left">
            <h2>
               <span> Chatura </span> Enterprises
            </h2>

            <p>
                <q>Be The Reason Someone Smile</q>
            </p>

            <div className="landing-btn">
                <button className="donate-btn"> <a href="#about">
                   About </a>
                   </button> 
                <button className='btn-more'> <a href="#contact">Know More</a> </button>
            </div>
        </div>
        <div className="landing-right">
            <img src={landing} alt="Landing-image"  loading='lazy'/>
        </div>

    </div>
    
    </>
  )
}

export default Landing