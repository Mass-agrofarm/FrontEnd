// Dependacies

import { styled } from 'styled-components';

// Components
import { FlexDiv } from './StyledComponents/StyledContainers';


const CardContainer = styled(FlexDiv)`
    width: 240px;
    height: 270px;
    padding: 20px;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    color: black;
    background-color: whitesmoke;
    box-shadow: -2px 2px 5px rgba(0,0,0,0.6);

    > h4 {
        margin: 6px 0px;
    }

    > p {
      margin-top: 5px;
    }

    > p + p {
      margin-top: 0;
    }
`




function CustomerReviews () {
  return (
    <FlexDiv style={{ marginTop: '25px' }}>
      <CardContainer>
        <h4>John Doe</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla animi! Esse ex, autem inventore nesciunt temporibus, quibusdam, totam delectus iste harum a at facilis error voluptatum soluta porro. Esse!</p>
        <p>⭐⭐⭐⭐⭐</p>
      </CardContainer>
    </FlexDiv>
  )
}

export default CustomerReviews
