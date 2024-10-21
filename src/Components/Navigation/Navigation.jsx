import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { useState } from 'react';

// components.
// import { NavBar, InnerContainer } from '@components/StyledComponents/StyledContainers';
import Logo from '@assets/logo.svg';
import { LogoImage } from '@components/StyledComponents/StyledElements';
import { NavBar, LogoLink, MenuContainer, HamburgerMenu } from '@components/Navigation/StyledContainers';


const Navigation = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <NavBar>
        <>
            <LogoLink to="/" >
              <LogoImage src={Logo} alt="Mars AgroFarm logo" />
            </LogoLink>
        </>

        <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </HamburgerMenu>
        
        <MenuContainer isOpen={isOpen}>
            <Link onClick={() => setIsOpen(!isOpen)} to="/">Home</Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/about">About Us</Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/products">Products</Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/contacts">Contact us</Link>
        </MenuContainer>
    </NavBar>
  );
}


export default Navigation
