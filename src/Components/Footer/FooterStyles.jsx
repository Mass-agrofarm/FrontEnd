import styled from 'styled-components';


export const FooterSection = styled.section`
    display: flex;
    justify-content: center;
    height: 60vh;
    background-color: #343434;
    backdrop-filter: blur(8px);

    h4 {
        color: #A47711;
    }
`


// export const LogoDiv = styled.div`
    
// `


export const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    width: 96px;

    > a {
        color: #ccc;
        font-weight: 500;

        &:hover {
            color: #fff;
            font-weight: 700;
        }
    }
`