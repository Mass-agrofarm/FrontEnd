// dependencies

// components
import { FlexDiv } from '../Components/StyledComponents/StyledContainers';
import { ContactBanner, ContactSection } from '../Components/Contact/StyledContainers';
import Form from '../Components/Form';

function Contacts (){
  return (
    <>
        <FlexDiv style={{ justifyContent: 'center', backgroundColor: 'whitesmoke', color: '#213547'}}>
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
        <footer>
          <iframe style={{ width: "100%" ,height: "300px" ,border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.65107988653!2d36.5177334104462!3d-1.3031873859975642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1728150613425!5m2!1sen!2ske"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </footer>

    </>
  )
}

export default Contacts
