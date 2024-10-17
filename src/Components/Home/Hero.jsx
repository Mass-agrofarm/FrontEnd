// eslint-disable-next-line no-unused-vars
import React from "react";

import "./homeStyle.css";
import { AbsoluteDiv, HeroSection } from "./StyledContainers";

// assets.
import mamaMboga from '@assets/mama-mboga.jpg';


function Hero (){
  return (
    // identifier.
    <>
        {/* hero section */}
      <HeroSection>
        <div className='overlay'></div>
        <div className='img-container'>
          <img className='hero-img' src={mamaMboga} alt="mama mboga at work" />
        </div>
        <AbsoluteDiv>
            <h1 className="hero-heading">Mars AgroFarm</h1>
            <p className="hero-text">
            Welcome to Mars Agrofarm & Supplies Ltd, where we are dedicated to transforming agricultural productivity for smallholder farmers in Kenya and East Africa. Discover innovative and affordable farm equipment tailored to your needs.
            </p>
            <a href="tell:+254712519486" className="hero-cta-button">Call Us</a>
        </AbsoluteDiv>
      </HeroSection>
      {/* end hero */}
    </>
  )
}

export default Hero