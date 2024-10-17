/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Colors } from '@/GlobalStyles/Styles';


//! Sections.
//* Navigation

const Nav = styled.nav`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`

//* end navigation containers.


//* container
export const ShapeContainer = styled.div`
    margin: 0px 96px 30px 96px;
    display: flex;
    flex-wrap: wrap;
`


export const FlexDiv = styled.div`
    display: flex;
`