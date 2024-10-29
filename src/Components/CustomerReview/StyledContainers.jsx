// Dependacies
import { Devices } from '@/GlobalStyles/Styles';
import { styled } from 'styled-components';


export const CardsShell = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;

  /* Mobile-first design: flex-column for smaller screens */
  @media (${Devices.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  /* For larger screens */
  @media (${Devices.sm}) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: clamp(25px, 2vw, 50px);  /* Dynamic gap based on viewport width */
    justify-content: center;
    align-items: center;
  }

  /* For wider screens and desktops */
  @media (${Devices.md}) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 50px;
  }
`

export const CardContainer = styled.div`
    width: 240px;
    height: fit-content;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    background-color: whitesmoke;
    box-shadow: -2px 2px 5px rgba(0,0,0,0.6);

    > h4 {
        margin: 0;
    }

    > h5 {
      margin: 0;
      font-weight: 350;
      font-style: italic;
      letter-spacing: 1.25px;
    }

    > p {
      margin-top: 5px;
    }

    > p + p {
      margin: 0;
    }
`