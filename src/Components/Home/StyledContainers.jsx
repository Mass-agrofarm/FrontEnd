import styled from "styled-components";
import { Colors } from "@/GlobalStyles/Styles";


//* hero section.
export const AbsoluteDiv = styled.div`
    position: absolute;
    left: 30px;
    bottom: 30px;

    /* Add media queries */
`

export const HeroSection = styled.section`
    background-color: ${Colors['silver']};
    height: 100vh;
`
//* end hero.


//* main section.
export const MainSection = styled.section`
    height: 80vh;
    padding: 0px 96px;
    margin-top: 96.16px;

    div a {
        background-color: ${Colors['accent-100']};
        color: ${Colors['rich-black']};
        padding: 8px 44.16px;
        border-radius: 5px;
        box-shadow: -2px 2px 5px rgba(0,0,0,0.6);

        &:hover{
            background-color: ${Colors['accent-200']};
            color: ${Colors['white-smoke']};
            font-weight: 600;
            margin-left: 2px;
            margin-bottom: 2px;
            box-shadow: -4px 4px 5px rgba(0,0,0,0.6);
        }
    }

    div.text {
        padding-right: 90px;
        align-items: center;
        
        h1{
            color: ${Colors["rich-black"]};
        }

        p{
            color: ${Colors["text-100"]};
            width: 450px;
            margin-bottom: 60px;
        }
    }

    div.image {
        img {
            width: 100%;
            border-radius: 15px;
            box-shadow: -5px 5px 5px rgba(0,0,0,0.6);
        }
    }

`
//* end main.



//* featured products section.
export const FeaturedProductsSection = styled.section`
    height: 105vh;
    margin-bottom: 50px;
    background-color: ${Colors["background-200"]};

    div.header{
        display: flex;
        justify-content: center;
        color: ${Colors["accent-100"]};
    }

    div.link{
        display: flex;
        justify-content: center;
    }

    div.link a {
        padding: 8px 44.16px;
        border-radius:15px;
        color: ${Colors["text-100"]};
        background-color: ${Colors["accent-100"]};

        &:hover{
            background-color: ${Colors["accent-200"]};
            color: ${Colors["white-smoke"]};
            font-weight: 500;
        }
    }
`
//* end featured.

//* Testimonials section.

export const TestimonialsSection = styled.section`
    height: 90vh;

    div h2 {
        margin: 50px 0px 0px 0px;
    }

    div.review-cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }
`

//* end testimonials.