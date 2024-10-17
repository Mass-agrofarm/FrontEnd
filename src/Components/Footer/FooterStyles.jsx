import styled from 'styled-components';
import { Colors } from '@/GlobalStyles/Styles';


import Logo from '@assets/logo.svg';




export const FooterSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: ${Colors['background-300']};
    backdrop-filter: blur(8px);

    h4 {
        color: ${Colors['rich-black']};
    }

    div.shell {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 96px;
        gap: 90px;

        div.logo {
            background-image: url(${Logo});
            width: 300px;
            height: 300px;
        }

        div input {
            height: 25px;
            padding: 8px 25px;
            border: 1px solid ${Colors['rich-black']};
            border-radius: 10px;
            background-color: ${Colors['background-100']};

            &:focus, &:active{
                background-color: ${Colors['background-100']};
            }
        }

        div button {
            padding: 6px 8px;
            justify-content: center;
            background-color: ${Colors['accent-100']};

            &:hover {
                background-color: ${Colors['accent-200']};
            }
        }
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
        color: ${Colors['accent-100']};
        font-weight: 500;

        &:hover {
            color: ${Colors['accent-200']};
            font-weight: 700;
            letter-spacing: 0.25px;
            text-decoration: underline 2px solid ${Colors['accent-200']};
        }
    }
`