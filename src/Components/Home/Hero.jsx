import React from "react";

import "./homeStyle.css";

function Hero (){
  return (
    // identifier.
    <>
        {/* hero section */}
      <section style={{ backgroundColor: 'silver',height: '100vh'}}>
        <div className='overlay'></div>
        <img className='hero-img' src="https://www.tractorgiants.com/wp-content/uploads/2024/02/DSC03826_HDR-scaled-1.jpg" alt="tractors carousel" />
        <div style={{ position: 'absolute', left: '30px', bottom: '30px' }}>
            <h1 className="hero-heading">Mass Agro Farm</h1>
            <p className="hero-text">
                Discover new ways to enhance your business with our innovative solutions. We help you drive growth and reach new heights.
                <br></br>
                <br></br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea corporis? Consectetur iusto obcaecati beatae illo, exercitationem omnis rem ipsum alias nam facere nihil accusantium error! Beatae, tempora vel. Possimus.
    	    </p>
            <button className="hero-cta-button">Call Us</button>
        </div>
      </section>
      {/* end hero */}
    </>
  )
}

export default Hero