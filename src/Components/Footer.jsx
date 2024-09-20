import React from 'react'
import { FlexDiv } from './StyledComponents/StyledComponents'

function Footer () {
  return (
    <>
      <FlexDiv style={{ height: '60vh', backgroundColor: '#343434', justifyContent: 'center' }}>
        <FlexDiv style={{ flexDirection: 'row',alignItems: 'center', padding: '96px', gap: '120px' }}>
            
            {/* logo */}
            <div style={{alignItems: 'flex-start', width: '100%'}}>
              <h4>Mass Agro Farm</h4>
              <img style={{ width: '350px', height: '200px'}} src="../../public/kisspng-jcb-backhoe-loader-heavy-machinery-bulldozer-5b0849998b5248.6003143515272697855707-1024x595.png"/>
            </div>

            {/* links */}
            <div>
              <h4>Links</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* social links */}
            <div>Socials</div>

            {/* CTA, sub to newsletter */}
            <FlexDiv style={{alignItems: 'flex-end', flexDirection: 'column', gap: '12px'}}>
              <input type='email' style={{ padding: '8px 25px', borderRadius: '10px', border: 'none'}} placeholder='Subscribe to our newsletter'></input>
              <button style={{ padding: '8px 25px', justifyContent: 'center' }}>Subscribe</button>
            </FlexDiv>

        </FlexDiv>
      </FlexDiv>
    </>
  )
}

export default Footer
