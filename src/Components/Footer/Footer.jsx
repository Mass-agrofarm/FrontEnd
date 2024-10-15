// Dependancies.
import { Link } from 'react-router-dom';

// Components.
import { FlexDiv } from '@components/StyledComponents/StyledContainers';
import { FooterSection, FooterLinks } from '@components/Footer/FooterStyles';
import Logo from '@assets/logo.svg';


function Footer () {
  return (
    <>
      <FooterSection>
        <FlexDiv style={{ flexDirection: 'row',alignItems: 'center', padding: '96px', gap: '90px' }}>
            
            {/* logo */}
            <div style={{float: 'left', width: '100%'}}>
              <h4>Mars AgroFarm</h4>
              <img style={{ width: '350px', height: '200px'}} src={Logo}/>
            </div>

            {/* links */}
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
                <a href="/https://facebook.com" target='_blank'>facebook</a>
                <a href="https://x.com" target='_blank'>twitter</a>
                <a href="https://tiktok.com" target='_blank'>tiktok</a>
                <a href="https://insagram.com" target='_blank'>instagram</a>
              </FooterLinks>
            </div>

            {/* CTA, sub to newsletter */}
            <FlexDiv style={{ flexDirection: 'column', gap: '12px'}}>
              <input type='email' style={{ padding: '8px 25px', borderRadius: '10px', border: 'none'}} placeholder='Subscribe to our newsletter'></input>
              <button style={{ padding: '6px 8px', justifyContent: 'center' }}>Subscribe</button>
            </FlexDiv>

        </FlexDiv>
      </FooterSection>
    </>
  )
}

export default Footer
