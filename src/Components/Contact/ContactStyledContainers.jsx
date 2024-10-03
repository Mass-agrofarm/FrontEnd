import styled from "styled-components";

import { FlexDiv } from "../StyledComponents/StyledContainers";



//! Sections.
//! contacts list & form.
export const ContactSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 50px;
`



//Todo: contact banner for the contact page.
export const ContactBanner = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0px 50px;
    background-color: whitesmoke;
    color: black;
    padding: 25px 50px;
    border-radius: 15px;

    > h3{
        font-size: 20px;
        margin: 0;
    }

    > span > h4{
        font-size: 18px;
        margin: 0;
    }

    > span + span {
        margin-top: 15px;
    }


    //! mediaQueries.
    /* @media (min-width: 768px) {
        
    } */
`

//todo: contact form input div-s.
export const NameFields = styled.div`
    display: flex;
    flex-direction: row;

    > input{
        width: 100%;
    }

    > input + input{
        margin-left: 15px;
    }
`

export const ContactFields = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    > input + input{
        margin-top: 15px;
    }

`

export const TextField = styled.div`
    display: flex;
    width: 100%;
`