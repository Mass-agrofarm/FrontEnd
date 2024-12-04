// components
import { FlexDiv } from '../Components/StyledComponents/StyledContainers';

// import { ContactBanner, ContactSection, MapFooter } from '../Components/Contact/StyledContainers.jsx';
import Form from '../Components/Form';
import { P } from '../Components/StyledComponents/StyledElements';
import { ContactBanner, ContactSection, FormDiv, HeaderContainer, MapFooter } from '@/Components/Contact/StyledContainers';



function Contacts (){
  return (
    <>
        <HeaderContainer>
          <h1>Contact Us</h1>
        </HeaderContainer>

        {/* banner column */}
        <ContactSection>
          <ContactBanner>
            <h3>Get in touch with us</h3>
            <P>At Mars Agrofarm & Supplies Ltd, we are eager to assist you in transforming your agricultural practices. Whether you have questions about our innovative products or need personalized advice, our dedicated team is here to help!</P>
            
            <h3>Why Contact Us?</h3>
            <P><strong>Expert Guidance:</strong> Our knowledgeable staff can provide insights tailored to your specific needs.
            <br/>
            <strong>Quick Responses:</strong> We value your time and strive to respond to all inquiries promptly.
            <br/>
            <strong>Customer-Centric Support:</strong> Your satisfaction is our priority. We are committed to ensuring you have the best experience with our products.</P>

            <h3>Reach Out Today!</h3>
            <P>Don’t hesitate to connect with us for any inquiries or assistance.</P>


            <span>
              <h4>Emails</h4>
              <a href="mailto:agrofarmmars@gmail.com">agrofarmmars@gmail.com</a>
            </span>

            <span>
              <h4>Contacts</h4>
              <a href="tell:+254712519486">+254 712519486</a>
              <a href="tell:+254722754824">+254 722754824</a>
            </span>
          </ContactBanner>

          {/* contact form */}
          <FormDiv>
            <FlexDiv style={{ justifyContent: 'center' }}>
              <h2 style={{ marginBottom: '12px' }}>Send Us An Email.</h2>
            </FlexDiv>
            {/* Contact Form */}
            <Form />
          </FormDiv>
          
        </ContactSection>

        {/* map location */}
        <MapFooter>
        <iframe 
          style={{ width: "100%", height: "300px", border: '0' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.842068817304!2d37.311484670191504!3d-1.2675082327517866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18258a1f2b26e003%3A0xb6a5966328a095f6!2sSTEVENKINGS%20ENTERPRISES!5e0!3m2!1sen!2ske!4v1733333870295!5m2!1sen!2ske" allowfullscreen=""
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </MapFooter>

    </>
  )
}

export default Contacts
