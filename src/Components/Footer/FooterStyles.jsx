import styled from 'styled-components';
import { Colors } from '@/GlobalStyles/Styles';

export const FooterSection = styled.section`
    display: flex;
    justify-content: center;
    height: 60vh;
    background-color: ${Colors['background-300']};
    backdrop-filter: blur(8px);

    h4 {
        color: ${Colors['rich-black']};
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
            text-decoration: underline 2px solid ${Colors['accent-200']};
        }
    }
`