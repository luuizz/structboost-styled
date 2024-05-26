"use client"
import styled, { keyframes } from "styled-components";
import ArrowCTA from "@/assets/arrow-cta.svg"
import strokeLine from "@/assets/stroke.svg"
import illustraMobile from "@/assets/illustra-mobile.svg"

const drawLine = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

export const StyledHeroHome = styled.section`
    width: 100%;
    padding-top: calc(11.3rem + 8.8rem);
    position: relative;
    overflow: hidden;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .text {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 100%;
            max-width: 71.9rem;
            flex-direction: column;
            text-align: center;
            h1 {
                font-size: 5.6rem;
                position: relative;
                margin-bottom: 2.4rem;
                letter-spacing: -0.168rem;
                &::before {
                    content: "";
                    height: 2.2rem;
                    position: absolute;
                    background: url("${strokeLine.src}") no-repeat left center;
                    background-size: cover;
                    bottom: -0.6rem;
                    left: 3.9rem;
                    z-index: -1;
                    animation: ${drawLine} 1s .5s ease-in forwards;
                }
            }
            p {
                color: var(--gray-300);
                max-width: 55.6rem;
                margin-bottom: 3.2rem;
                letter-spacing: -0.054rem;
            }
            &::after {
                content: "";
                width: 11.7rem;
                height: 7.8rem;
                position: absolute;
                bottom: 2.2rem;
                background: url("${ArrowCTA.src}") no-repeat center center;
                background-size: cover;
                left: 5.5rem;
            }
        }
    }
    img {
        margin: 0 auto;
        margin-top: 6.4rem;
    }

    &::after {
        content: "";
        background-color: var(--pink-10);
        width: 100%;
        height: 22rem;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    @media (max-width: 1200px) {
        &::after {
            height: 13rem;
        }
    }

    @media (max-width: 768px) {
        padding-top: calc(6rem + 8.8rem);
        .container {
            .text {
                h1 {
                    max-width: 49rem;
                    margin: 0 auto;
                    &::before {
                        left: 0;
                        bottom: -0.4rem;
                        width: 49.9rem;
                        background-size: 100%; 
                    }
                }
                p {
                    max-width: 41.6rem;
                }
                &::after {
                bottom: 3.7rem;
                left: 2rem;
                width: 6rem;
                height: 3.8rem;
            }
            }

        }
    }

    @media (max-width: 560px) {
        padding-top: calc(8.8rem + 8.8rem);
        .container {
            .text {
                h1 {
                    font-size: 4rem;
                    &::before {
                        width: 36.9rem;
                    }
                }
                p {
                    font-size: 1.6rem;
                    margin: 0.8rem 0 2.4rem;
                }
            }
        }
        img {
            content: url("${illustraMobile.src}");
            margin: 0;
            margin-top: 6.4rem;
        }
    }
`