import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import styled from 'styled-components';

// components.
import { NavBar, InnerContainer } from './StyledComponents/StyledContainers';
import { LogoImage } from './StyledComponents/StyledElements';


const LogoLink = styled(Link)`
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;

    &hover{
      border-bottom: none;
    }
`



const Navigation = () => {
  return (
    <NavBar>
        <>
            <LogoLink to="/" >
              <LogoImage src={Logo} alt="Mars AgroFarm logo" />
            </LogoLink>
        </>
        <InnerContainer>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contacts">Contact us</Link>
        </InnerContainer>
    </NavBar>
  );
}

export default Navigation
