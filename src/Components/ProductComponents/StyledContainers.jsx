import styled from "styled-components";
import { Devices, breakpoints } from "@/GlobalStyles/Styles";



export const ProductCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 96px 30px 96px;
    /* products container gap */
    gap: 1.5em;

    @media (${Devices.xs}) and (max-width: ${breakpoints.sm}){
        display: flex;
        flex-direction: column;
        margin: 0;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: fit-content;
    }

    @media (${Devices.sm}){
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        flex-wrap: wrap;
    }
`