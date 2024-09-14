/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styled from 'styled-components'


//! Sections.
//* Navigation

const Nav = styled.nav`
    position: sticky;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
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
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c4c4c4;
`

export const InnerContainer = styled.div`
    margin-right: 15px;
    padding: 12.59px;
    display: flex;
    /* flex-direction: row; */
    /* word-wrap: wrap; */
    justify-content: space-between;
`


//! div's.






