import { FlexDiv } from '../Components/StyledComponents/StyledComponents'

function Contacts (){
  return (
    <>
      <section>
        <FlexDiv style={{ justifyContent: 'center' }}>
          <h1>Contact Us</h1>
        </FlexDiv>
        <FlexDiv>
          <p>
            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            <a href="http://">+3397449797</a>
          </p>
        </FlexDiv>
        <FlexDiv>customer satisfaction and rating.</FlexDiv>
        <footer>FAQ</footer>
      </section>
    </>
  )
}

export default Contacts
