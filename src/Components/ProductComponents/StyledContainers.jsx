import styled from "styled-components";
import { Devices, Colors } from "@/GlobalStyles/Styles";

// Container for the product cards with improved responsiveness
export const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 0 clamp(16px, 8vw, 96px) 30px;  /* Uses clamp for dynamic margin based on viewport size */
  
  /* Mobile-first design: flex-column for smaller screens */
  @media (${Devices.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  /* For larger screens */
  @media (${Devices.sm}) {
    justify-content: center;
    align-items: center;
  }

  /* For wider screens and desktops */
  @media (${Devices.md}) {
    justify-content: space-between;
    margin: 0 clamp(24px, 5vw, 96px) 30px; /* Dynamic margins to accommodate larger screens */
  }
`;


export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  margin-bottom: 100px;
  background-color: ${Colors["background-300"]};
  color: ${Colors["accent-200"]};
`

export const ReviewSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: fit-content;

  div.heading {
    display: flex;
    justify-content: center;
    color: ${Colors["accent-200"]};

    h1 {
      margin-bottom: 0;
      font-size: 42px;
    }
  }

  /* Mobile-first design: flex-column for smaller screens */
  @media (${Devices.xs}) {
    height: fit-content;
    
    div.heading {
      h1 {
        margin-bottom: 0;
        font-size: 32px;
      }
    }
  }

  /* For larger screens */
  @media (${Devices.sm}) {
    height: fit-content;

    div.heading {
      h1 {
        margin-bottom: 0;
        font-size: 32px;
      }
    }
  }

  /* For wider screens and desktops */
  @media (${Devices.md}) {
    height: fit-content;

    div.heading {
      h1 {
        margin-bottom: 0;
        font-size: 42px;
      }
    }
  }
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;

  /* Mobile-first design: flex-column for smaller screens */
  @media (${Devices.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  /* For larger screens */
  @media (${Devices.sm}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* For wider screens and desktops */
  @media (${Devices.md}) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 clamp(24px, 5vw, 96px) 30px; /* Dynamic margins to accommodate larger screens */
  }
`