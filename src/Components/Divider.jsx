// Components
import { breakpoints } from '@/GlobalStyles/Styles';
import { FlexDiv } from './StyledComponents/StyledContainers'
import styled from 'styled-components';

const DividerLine = styled.div`
    width: 852px;
    border: 1px solid #ccc;

    /* Add media Queries. */
    @media (max-width: ${breakpoints.md}) {
      width: 230px;
    }
`

function Divider (){
  return (

    <FlexDiv style={{ justifyContent: 'center' }}>
        <DividerLine />
    </FlexDiv>
  )
}

export default Divider
