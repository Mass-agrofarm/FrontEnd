import React from 'react'
import { FlexDiv } from './StyledComponents/StyledComponents'

function Footer () {
  return (
    <>
      <FlexDiv style={{ height: '60vh', backgroundColor: 'black' }}>
        <FlexDiv style={{ flexDirection: 'row', alignItems: 'center'}}>
            <div>Logo</div>
            <div>Links</div>
            <div>Socials</div>
            <div>CTA</div>
        </FlexDiv>
      </FlexDiv>
    </>
  )
}

export default Footer
