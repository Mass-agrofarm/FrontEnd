// Dependancies.
import { Link } from 'react-router-dom';

// Components.
import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import { FooterSection, FooterLinksDiv, FooterLinks } from '@components/Footer/FooterStyles';
// import Logo from '@assets/logo.svg';


function Footer () {
  return (
    <>
      <FooterSection>
        <div className="shell">
            
            {/* logo */}
            <div className="logo">
              <span className="logo-text">
                <span className="logo-pop">Mars</span>
                <br/>
                <span className="logo-brand">AgroFarm</span>
                <span className="logo-tagline">
                  <p>Empowering Agriculture, Enriching Lives.</p>
                </span>
              </span>
            </div>
            {/* <div style={{ width: '100%'}}> */}
              {/* <h4>Mars AgroFarm</h4> */}
              {/* <img style={{ width: '350px', height: '200px', marginBottom: '0' }} src={Logo}/>
            </div> */}
            
            {/* links */}
            <FooterLinksDiv>
              <div>
                <h4 style={{ marginBottom: '0', marginTop: '0' }}>Links</h4>
                <FooterLinks>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contacts">Contact us</Link>
                </FooterLinks>
              </div>

              {/* social links */}
              <div>
                <h4 style={{ marginBottom: '0', marginTop: '0' }}>Socials</h4>
                <FooterLinks>
                  <a href="https://www.facebook.com/stevenkingsenterprises" target='_blank'>facebook</a>
                  <a href="https://x.com/MarsAgrofarm11?t=WsbEJsbG94pMEybLe_4afg&s=08" target='_blank'>twitter</a>
                  <a href="https://www.tiktok.com/@marsagrofarm254?_t=8rEKbOI0AZs&_r=1" target='_blank'>tiktok</a>
                  <a href="https://insagram.com" target='_blank'>instagram</a>
                </FooterLinks>
              </div>
            </FooterLinksDiv>

            {/* CTA, sub to newsletter */}
            <FlexDiv style={{ flexDirection: 'column', gap: '12px'}}>
              <input type='email' placeholder='Subscribe to our newsletter'></input>
              <button>Subscribe</button>
            </FlexDiv>

        </div>
      </FooterSection>
    </>
  )
}

export default Footer
