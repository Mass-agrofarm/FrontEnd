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
    height: 100vh;
    /* width: fit-content; */
`



//Todo: contact banner for the contact page.
export const ContactBanner = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 100%;
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

    > label {
        margin-bottom: 5px;
    }

    > input{
        height: 43px;
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
    }

    > input + input{
        margin-left: 20px;
    }
`

export const ContactFields = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 5px;

    > input{
        height: 43px;
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
    }

    > input + input{
        margin-top: 15px;
    }

`

export const TextField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    > label {
        margin-bottom: 5px;
    }

    > textarea {
        height: 120px;
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
    }

    > button {
        color: #ffffff;
        background-color: #235d91;
        margin-top: 8px;
        text-align: center;

        &:hover {
            color: #213547;
            background-color: #ffffff;
            letter-spacing: 2.2px;
        }
    }
`


export const MapFooter = styled.footer`
    padding: 5px;

    @media (max-width: 768px){
        padding: 2px;
    }
`