import styled from "styled-components";

//* Global styles
import { Colors } from "@/GlobalStyles/Styles";
import { Devices, breakpoints } from "@/GlobalStyles/Styles";


//* assets.
import mamaMboga from '@assets/mama-mboga.jpg';




//* hero section.
export const AbsoluteDiv = styled.div`
    position: absolute;
    left: 30px;
    bottom: 30px;

    /* Add media queries */

    @media (${Devices.xs}) and (max-width: ${breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        bottom: 5px;
        left: 5px;
        padding: 25px;
    }

    @media (${Devices.sm}) {
        left: 30px;
        bottom: 30px;
    }
`

export const HeroSection = styled.section`
    height: 100vh;

    
    a.hero-cta-button {
        background-color: var(--forest-green);
        color: var(--rich-black);
        font-weight: 700;
        padding: 0.6em 2.2em;
        box-shadow: -2px 2px 5px rgba(0,0,0,0.6);
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
    }
    
    a.hero-cta-button:hover {
        background-color: var(--pigment-green);
        color: var(--white-smoke);
        margin-left: 2px;
        box-shadow: -4px 4px 5px rgba(0,0,0,0.6);
    }
    
    .hero-img{
        height: 100vh;
        width: 100%;
    }

    .overlay {
        height: 100vh;
        width: 100%;
        position: absolute;
        /* background-color: transparent; */
        background-image: linear-gradient(225deg, #24823254 1%, var(--baby-powder) 75%);
        /* background-image: linear-gradient(315deg, #040f0fff, #248232ff, #2ba84aff, #2d3a3aff, #fcfffcff); */

        /*backdrop-filter: blur(2px); */
        /* opacity: 1; */
        transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
        -webkit-transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
        -moz-transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
        -ms-transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
        -o-transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
    }

    .hero-text{
        color: var(--rich-black);
        font-weight: 500;
        font-size: 18px;
        width: 450px;
        text-align: justify;
        padding: 2px 0px 12px 26px;
    }

    .hero-heading{
        color: var(--rich-black);
        margin-bottom: 15px;
    }

    @media (${Devices.xs}) and (max-width: ${breakpoints.sm}) {
        height: fit-content;

        .hero-img{
            height: 100vh;
            width: 100%;
        }

        .overlay{
            background-image: linear-gradient(180deg, #24823254 1%, var(--baby-powder) 75%);
        }

        .hero-heading{
            font-size: 26px;
        }
        
        .hero-text{
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            width: 100%;
            font-size: 14px;
            font-weight: 500;

            //* text width standard.
            min-width: 150px;
            max-width: 300px;

            padding: 2px 0px 12px 0px;
        }

        @media (${Devices.md}) {
            .hero-img{
                height: 100vh;
                width: 100%;
            }

            .overlay{
                height: 100vh;
                width: 100%;
            }
        }
    }
`
//* end hero.


//* main section.
export const MainSection = styled.section`
    height: 80vh;
    padding: 0px 96px;
    margin-top: 96.16px;

    div.shell {
        display: flex;
    }

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
            width: 600px;
            height: 400px;
            border-radius: 15px;
            box-shadow: -5px 5px 5px rgba(0,0,0,0.6);
        }
        /* background-image: url(${mamaMboga});
        object-fit: contain;
        width: 600px;
        height: 400px;
        border-radius: 15px; */
    }

    @media (${Devices.xs}) and (max-width: ${breakpoints.md}){
        margin-top: 5px;
        margin-bottom: 50px;
        padding: 0px 30px;
        display: flex;
        flex-direction: column;
        height: fit-content;

        div.shell{
            display: flex;
            flex-direction: column;
            height: fit-content;
            align-items: center;
            gap: 30px;
        }

        div.text{
            display: flex;
            padding: 0;
            flex-direction: column;
            justify-self: center;
            align-self: center;

            a{
                margin: 0;
            }

            h1 {
                font-size: 32px;
                margin-bottom: 0;
            }
            p {
                margin-bottom: 15px;
                font-size: 14px;
                text-align: justify;
                min-width: 150px;
                max-width: 300px;
            }
        }

        div.image {
            img {
                margin-top: 5px;
                min-width: 200px;
                max-width: 350px;
                min-height: 250px;
                max-height: 500px;
                border-radius: 15px;
                box-shadow: -5px 5px 5px rgba(0,0,0,0.6);
            }
        }
    }


    @media (${Devices.sm}) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-top: 0;
        margin-bottom: 50px;
        justify-content: center;
        align-items: center;
        height: fit-content;

        div.shell{
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 50px;
        }

        div.text{
            display: flex;
            padding: 0;
            flex-direction: column;
            justify-self: center;
            align-self: center;

            h1{
                font-size: 32px;
                margin-bottom: 0;
            }

            p {
                text-align: justify;
                margin-bottom: 15px;
            }
        }
    }

`
//* end main.



//* featured products section.
export const FeaturedProductsSection = styled.section`
    display: flex;
    flex-direction: column;
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

    @media (${Devices.xs}) and (max-width: ${breakpoints.sm}){
        height: fit-content;
        padding: 0px 30px 60px 30px;

        div.header{
            display: flex;
            justify-content: center;
            color: ${Colors["accent-100"]};

            h1 {
                font-size: 32px;
                font-weight: 600;
            }
        }

        div.link {
            margin-top: 25px;
        }
    }
`
//* end featured.

//* Testimonials section.

export const TestimonialsSection = styled.section`
    display: flex;
    flex-direction: column;
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

    @media (${Devices.xs}) and (max-width: ${breakpoints.sm}){
        height: fit-content;
        padding: 30px;
        margin-bottom: 30px;

        div.title{
            display: flex;
            flex-direction: column;
            padding: 20px;

            h2 {
                margin: 0px;
                font-size: 24px;
            }

            p {
                text-align: justify;
            }
        }
    }
`

//* end testimonials.