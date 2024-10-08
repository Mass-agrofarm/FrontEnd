// dependencies
import styled from 'styled-components';


// components
import { FlexDiv } from '../Components/StyledComponents/StyledContainers';
// import { ContactBanner, ContactSection, MapFooter } from '../Components/Contact/StyledContainers.jsx';
import Form from '../Components/Form';
import { P } from '../Components/StyledComponents/StyledElements';



//Todo: contact banner for the contact page.

const ContactSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 50px;
    height: 100vh;
    /* width: fit-content; */
`

const ContactBanner = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 100%;
    margin: 0px 50px;
    background-color: whitesmoke;
    color: black;
    padding: 25px 50px;
    border-radius: 15px;

    > h3{
        font-size: 20px;
        margin: 0;
    }

    > span > h4{
        font-size: 18px;
        margin: 0;
    }

    > span + span {
        margin-top: 15px;
    }


    //! mediaQueries.
    /* @media (min-width: 768px) {
        
    } */
`

//todo: contact form input div-s.

const MapFooter = styled.footer`
    padding: 5px;

    @media (max-width: 768px){
        padding: 2px;
    }
`




function Contacts (){
  return (
    <>
        <FlexDiv style={{ justifyContent: 'center', backgroundColor: 'whitesmoke', color: '#213547'}}>
          <h1>Contact Us</h1>
        </FlexDiv>

        {/* banner column */}
        <ContactSection>
          <ContactBanner>
            <h3>Get in touch with us</h3>
            <P>At Mars Agrofarm & Supplies Ltd, we are eager to assist you in transforming your agricultural practices. Whether you have questions about our innovative products or need personalized advice, our dedicated team is here to help!</P>
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
          <FlexDiv>
            <Form />
          </FlexDiv>
          
        </ContactSection>

        {/* map location */}
        <MapFooter>
          <iframe style={{ width: "100%" ,height: "300px" ,border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.65107988653!2d36.5177334104462!3d-1.3031873859975642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1728150613425!5m2!1sen!2ske"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MapFooter>

    </>
  )
}

export default Contacts
