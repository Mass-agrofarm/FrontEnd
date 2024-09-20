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
    background-image:linear-gradient(to right, #000000ff, #000000ff, #737373, #ACACAD);
    background-blend-mode: color-burn;
    color: #fff;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid antiquewhite;
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
    margin-right: 15px;
    padding: 12.59px;
    display: flex;
    /* flex-direction: row; */
    /* word-wrap: wrap; */
    justify-content: space-between;
`

//* container
export const ShapeContainer = styled.div`
    margin: 0px 96px 30px 96px;
    display: flex;
    flex-wrap: wrap;
`


export const FlexDiv = styled.div`
    display: flex;
`

