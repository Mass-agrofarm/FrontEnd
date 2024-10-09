// eslint-disable-next-line no-unused-vars
import React from "react";

import "./homeStyle.css";
import { P } from "../StyledComponents/StyledElements";
import { AbsoluteDiv } from "./StyledContainer";

function Hero (){
  return (
    // identifier.
    <>
        {/* hero section */}
      <section style={{ backgroundColor: 'silver',height: '100vh'}}>
        <div className='overlay'></div>
        <img className='hero-img' src="https://www.tractorgiants.com/wp-content/uploads/2024/02/DSC03826_HDR-scaled-1.jpg" alt="tractors carousel" />
        <AbsoluteDiv>
            <h1 className="hero-heading">Mars AgroFarm</h1>
            <P className="hero-text">
            Welcome to Mars Agrofarm & Supplies Ltd, where we are dedicated to transforming agricultural productivity for smallholder farmers in Kenya and East Africa. Discover innovative and affordable farm equipment tailored to your needs.
            </P>
            <a href="tell:+254712519486" className="hero-cta-button">Call Us</a>
        </AbsoluteDiv>
      </section>
      {/* end hero */}
    </>
  )
}

export default Hero