import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, InnerContainer } from '../StyledComponents/StyledComponents';




const Navigation = () => {
  return (
    <NavBar>
        <InnerContainer>
            Logo
        </InnerContainer>
        <InnerContainer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contacts">Contact us</Link>
        </InnerContainer>
    </NavBar>
  );
}

export default Navigation
