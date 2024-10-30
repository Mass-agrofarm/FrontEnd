import styled from "styled-components";

import { FlexDiv } from "../StyledComponents/StyledContainers";
import { Colors, Devices } from "@/GlobalStyles/Styles";



//! Sections.

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  margin-bottom: 100px;
  background-color: ${Colors["background-300"]};
  color: ${Colors["accent-200"]};
`

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

    /* Mobile-first design: flex-column for smaller screens */
    @media (${Devices.xs}) {
      flex-direction: column;
      height: fit-content;
      margin: 25px;
      gap: 50px;
    }

    /* For larger screens */
    @media (${Devices.sm}) {
      flex-direction: column;
      height: fit-content;
      margin: clamp(50px, 30px, 50px);
    }

    /* For wider screens and desktops */
    @media (${Devices.md}) {
      flex-direction: column;
      height: fit-content;
      padding: 50px;
      gap: 50px;
    }

    @media (${Devices.lg}){
        flex-direction: row;
        gap: 100px;
    }
`



//Todo: contact banner for the contact page.
export const ContactBanner = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 100%;
    margin: 0px clamp(50px, 30px, 50px);
    background-color: ${Colors["background-300"]};
    color: black;
    padding: 25px 50px;
    border-radius: 15px;

    > h3{
        font-size: 20px;
        margin: 0;
        color: ${Colors["accent-200"]};
    }

    p > strong {
        color: ${Colors["rich-black"]};
    }

    > span > h4{
        font-size: 18px;
        margin: 0;
        color: ${Colors["accent-200"]};
    }

    > span + span {
        margin-top: 15px;
    }


    //! mediaQueries.
    //* Mobile-first design: flex-column for smaller screens */
    @media (${Devices.xs}) {
        width: 250px;
    }

    /* For larger screens */
    @media (${Devices.sm}) {
        width: 300px;
    }

    /* For wider screens and desktops */
    @media (${Devices.md}) {
        width: 600px;
    }

    @media (${Devices.lg}) {
        width: 350px;
    }
`


//! form section.

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    border-radius: 15px;
    background-color: ${Colors["background-300"]};

    div > h2 {
        margin-top: 0;
        color: ${Colors["accent-200"]};
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    
    /* Mobile-first design: flex-column for smaller screens */
    @media (${Devices.xs}) {
      width: 250px;
    }

    /* For larger screens */
    @media (${Devices.sm}) {
      width: 350px;
    }

    /* For wider screens and desktops */
    @media (${Devices.md}) {
      width: 400px;
    }
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

    /* Mobile-first design: flex-column for smaller screens */
    @media (${Devices.xs}) {
      flex-direction: column;

      > input + input {
            margin-top: 15px;
            margin-left: 0px;
        }
    }

    /* For larger screens */
    @media (${Devices.sm}) {
      flex-direction: column;
    }

    /* For wider screens and desktops */
    @media (${Devices.md}) {
      flex-direction: row;

      > input + input {
        margin-top: 0;
        margin-left: 20px;
      }
    }
`

export const ContactFields = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 5px;

    > div > input {
        height: 43px;
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
    }

    > div > input > span {
        font-weight: 500;
    }

    > div + div{
        margin-top: 5px;
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
        border-radius: 15px;
        text-align: center;
        transition: all 100ms ease-in-out;

        &:hover {
            color: #213547;
            background-color: #ffffff;
            letter-spacing: 2.2px;
        }
        &:focus, &:focus-visible::after{
            outline: none;
        }
        &:active, &:active::after{
            color: #ffffff;
            background-color: #235d91;
        }
    }
`


export const MapFooter = styled.footer`
    padding: 5px;

    @media (max-width: 768px){
        padding: 2px;
    }
`