/* eslint-disable react/prop-types */
import styled from "styled-components";

import { Colors, breakpoints } from '@/GlobalStyles/Styles'
import { Link } from "react-router-dom";



//* Navigation

const Nav = styled.nav`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    color: #fff;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`
export const NavBar = ({children}) => (
    <Nav>
        {children}
    </Nav>
)

//! Containers.
//* outer Container.

export const OuterContainer = styled.div`
    margin: 0;
    padding: 0;
`

export const InnerContainer = styled.div`
    /* margin-right: 15px; */
    padding: 12.59px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
        color: ${Colors['accent-100']};
        border-bottom: 2px solid rgba(255, 255, 255, 0);

        &:hover {
            font-weight: 600;
            color: ${Colors['accent-200']};
            border-bottom: 2px solid ${Colors['accent-100']};
        }

        &:focus ,&:active {
            font-weight: 600;
            color: ${Colors['accent-200']};
            border-bottom: 2px solid ${Colors['accent-100']};
        }
    }

    @media (max-width: 768px) {
        display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        transition: all 0.35s ease-in-out;
        width: 100%;

        a{
            margin-bottom: 12px;
        }
    }
`

//* end navigation containers.


export const LogoLink = styled(Link)`
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;

    &:hover{
      border-bottom: none;
    }
`


export const HamburgerMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12.59px;
    margin-right: 25px;
    cursor: pointer;

    span {
        width: 25px;
        height: 2px;
        background-color: ${Colors["accent-100"]};
        margin-bottom: 5px;
    }

    @media(max-width: ${breakpoints.md}) {
        display: flex;
    }
`