/* eslint-disable react/prop-types */
import styled from 'styled-components'


//! Sections.
//* Navigation

const Nav = styled.nav`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-image:linear-gradient(to right, #38830c, #379500, #737373, #ACACAD);
    background-blend-mode: color-dodge; */
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
    /* flex-direction: row; */
    /* word-wrap: wrap; */
    justify-content: space-between;

    > a {
        color: #38830c;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
    }
    
    > a:hover {
        font-weight: 600;
        color: #336b13;
        border-bottom: 2px solid #336b13;
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


// export const FooterLinks = styled.ul`
//     display: flex;
//     flex-direction: column;
//     list-style: none;
//     padding: 0;
//     width: 96px;

//     > a {
//         color: #ccc;
//         font-weight: 500;

//         &:hover {
//             color: #fff;
//             font-weight: 700;
//         }
//     }
// `