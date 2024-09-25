// Dependacies
/* eslint-disable react/prop-types */

import { styled } from 'styled-components';

// Components
import { FlexDiv } from './StyledComponents/StyledComponents';


const Container = styled(FlexDiv)`
    width: 240px;
    height: 270px;
    padding: 20px;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    color: black;
    background-color: whitesmoke;
`

const CardContainer = ({children}) => (
  <Container>
      {children}
  </Container>
)



function CustomerReviews () {
  return (
    <FlexDiv style={{ marginTop: '25px' }}>
      <CardContainer>
        <h4 style={{margin: '6px 0px'}}>John Doe</h4>
        <p style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla animi! Esse ex, autem inventore nesciunt temporibus, quibusdam, totam delectus iste harum a at facilis error voluptatum soluta porro. Esse!</p>
        <p style={{marginTop: '0'}}>⭐⭐⭐⭐⭐</p>
      </CardContainer>
      </FlexDiv>
  )
}

export default CustomerReviews
