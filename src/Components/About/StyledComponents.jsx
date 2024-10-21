import styled from "styled-components";

// Global styling.
import { Colors, breakpoints } from "@/GlobalStyles/Styles";

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    background-color: ${Colors["background-300"]};
    color: ${Colors["accent-200"]};
`

//* storyline section.
export const StoryLineSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
    gap: 80px;
    margin: 50px 0px;

    div.story-container {
        display: flex;
        flex-direction: column;

        div h2 {
            color: ${Colors["accent-200"]};
            margin: 0;
            font-size: 34px;
        }
    }

    div.about-text {
        display: flex;
        flex-direction: column;
        width: 500px;

        p {
            margin-bottom: 0;
            text-align: justify;
        }
    }

    div.about-image {
        img {
            width: 600px;
            height: 450px;
            border-radius: 15px;
            box-shadow: -2px 2px 5px rgba(0, 0, 0 , 0.8);
        }
    }

    @media (max-width: ${breakpoints.md}){
        flex-direction: column;
        height: fit-content;
        gap: 50px;

        div.story-container {
            padding: 15px;

            div h2 {
                font-size: 24px;
            }
        }

        div.about-text {
            width: 100%;
            flex-wrap: wrap;
        }
        div.about-image {
            img {
                width: 350px;
                height: 250px;
                box-shadow: -2px 2px 5px rgba(0, 0, 0 , 0.8);
            }
        }
    }
`
//* end storyline section.



export const TagLine = styled.span`
    margin: 50px 0px;

    div {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 8px 0px 6px 0px;
        color: ${Colors["accent-200"]};
        background-color: ${Colors["background-200"]};

        p {
            font-family: 'bradley hand', cursive;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.2px;

            @media (max-width: ${breakpoints.md}) {
                font-size: 14px;
            }
        }
    }
`


export const EthosSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 80vh;
    flex-direction: row;
    gap: 80px;
    margin: 50px 0px;

    div.ethos-image {
        img {
            width: 600px;
            height: 400px;
            border-radius: 15px;
            box-shadow: -2px 2px 5px rgba(0, 0, 0 , 0.8);
        }
    }

    div.ethos-container {
        display: flex;
        gap: 50px;
        align-items: center;
    }

    div.ethos {
        width: 250px;
        height: 400px;

        div h2 {
            margin: 0;
            margin-bottom: 5px;
            color: ${Colors["accent-200"]};
        }

        div.ethos-text {
            text-align: left;
            border: 1px solid ${Colors["accent-200"]};
            padding: 0px 20px;
        }
    }

    @media (max-width: ${breakpoints.md}) {
            flex-direction: column;
            height: fit-content;
            gap: 50px;

            div.ethos-image {
                img {
                    width: 600px;
                    height: 400px;
                    border-radius: 15px;
                }
            }
    }

    @media (max-width: ${breakpoints.sm}) {
            flex-direction: column;
            height: fit-content;
            gap: 30px;

            div.ethos-image {
                img {
                    width: 380px;
                    height: 300px;
                    border-radius: 15px;
                }
            }

            div.ethos-container {
                flex-direction: column;
                gap: 30px;
            }

            div.ethos {
                height: fit-content;
            }
    }
`

export const FaqSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 80vh;
    margin: 50px 0px 60px 0px;
    gap: 50px;

    @media (max-width: ${breakpoints.md}){
        flex-direction: column;
        height: fit-content;
        gap: 0;
    }

    div.faq-container {
        display: flex;
        flex-direction: column;

        div h2 {
            margin: 0;
        }

        div.faq-solutions {
            max-width: 620px;
            margin-top: 0;

            ol li {
                line-height: 1.25;
                margin-bottom: 12px;
            }

        }

        @media (max-width: ${breakpoints.md}){
            min-width: 300px;
            padding: 25px;

            div.faq-solutions {
                ol {
                    padding-left: 25px;
                }

                ol li {
                    text-align: justify;
                }
            }
        }
    }
`