// dependencies

// components
import { FlexDiv } from '../Components/StyledComponents/StyledContainers';
import { ContactBanner, ContactSection } from '../Components/Contact/ContactStyledContainers';
import Form from '../Components/Form';

function Contacts (){
  return (
    <>
        <FlexDiv style={{ justifyContent: 'center' }}>
          <h1>Contact Us</h1>
        </FlexDiv>

        {/* banner column */}
        <ContactSection>
          <ContactBanner>
            <h3>Get in touch</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ex non natus iusto dignissimos. Fugit nemo suscipit veniam? Amet iusto doloremque ab quia laudantium ipsam animi nemo quasi blanditiis esse?</p>
            <span>
              <h4>Emails</h4>
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </span>

            <span>
              <h4>Contact</h4>
              <a href="http://">+3397449797</a>
            </span>
          </ContactBanner>

          {/* contact form */}
          <FlexDiv>
            <Form />
          </FlexDiv>
          
        </ContactSection>

        {/* map location */}
        <footer>map</footer>

    </>
  )
}

export default Contacts
