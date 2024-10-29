// eslint-disable-next-line no-unused-vars
import React from "react";

// Importing styles and styled components
import { AbsoluteDiv, HeroSection } from "./StyledContainers";

// Assets
// Importing hero image asset for visual display
import miniTractor from '@assets/Images/kubota-tractor.jpg';

// Hero Component Function
// Function rendering the Hero section with background image, overlay, and call-to-action elements
function Hero (){
  return (
    // JSX Fragment wrapping the hero content
    <>
      {/* Hero Section */}
      <HeroSection>
        <div className='overlay'></div> {/* Overlay for image styling */}

        {/* Image Container */}
        {/* Holds the main hero image with alt description */}
        <div className='img-container'>
          <img className='hero-img' src={miniTractor} alt="mama mboga at work" />
        </div>

        {/* Content Container */}
        {/* Absolute positioned content block with heading, description, and CTA button */}
        <AbsoluteDiv>
            <h1 className="hero-heading">Mars AgroFarm</h1>
            <p className="hero-text">
              Welcome to Mars Agrofarm & Supplies Ltd, where we are dedicated to transforming agricultural productivity for smallholder farmers in Kenya and East Africa. Discover innovative and affordable farm equipment tailored to your needs.
            </p>
            <a href="tel:+254712519486" className="hero-cta-button">Call Us</a> {/* CTA button linking to phone number */}
        </AbsoluteDiv>
      </HeroSection>
      {/* End Hero Section */}
    </>
  )
}

export default Hero
