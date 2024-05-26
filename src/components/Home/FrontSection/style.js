"use client"
import styled from "styled-components"

export const StyledSectionFront = styled.section`
    padding: 12.8rem 0;
    .container {
        .all {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 3.2rem;
        }
    }
    @media (max-width: 1200px) {
        padding: 6rem 0;
        .container {
            .all {
                grid-gap: 1.6rem;
            }
        }
    }

    @media (max-width: 991px) {
        .container {
            .all {
                grid-template-columns: 1fr;
            }
        }
    }
    @media (max-width: 560px) {
        padding: 8rem 0;
        .container {
            .all {
                grid-gap: 3.2rem;
            }
        }
    }
`

export const StyledTopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6.4rem;
    p {
        color: var(--gray-600);
        letter-spacing: -0.054rem;
    }
    .left {
        max-width: 53.9rem;
        h3 {
            letter-spacing: -0.12rem;
            font-weight: 600;
        }
        p {
            max-width: 45.2rem;
            margin-top: 1.6rem;
        }
    }

    .right {
        max-width: 42.9rem;
    }
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 4rem;
        .left, .right {
            max-width: 100%;
            text-align: center;
            p {
                max-width: 100%;
                margin-top: 0.8rem;
            }
        }
    }
    @media (max-width: 560px) {
        .left {
            h3 {
                font-size: 2.8rem;
                max-width: 22.7rem;
                margin: 0 auto;
                margin-bottom: 1.6rem;
            }
            p {
                font-size: 1.6rem;
                max-width: 28rem;
                letter-spacing: -0.048rem;
            }
        }
        .right {
            display: none;
        }
    }
`

export const StyledCardPost = styled.div`
    border: 2px solid rgba(255, 255, 255, .08);
    background: rgba(255, 255, 255, .02);
    padding: 2.4rem;
    &:first-child {
        grid-column: span 2;
    }
    .image {
        margin-bottom: 5.65rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .infos {
        width: 100%;
        max-width: 48.2rem;
        h6 {
            letter-spacing: -0.066rem;
            margin-bottom: .8rem; 
        }
        p {
            font-size: 1.6rem;
            letter-spacing: -0.048rem;
            color: var(--gray-600);
        }
    }
    @media (max-width: 1200px) {
        &:first-child, &:nth-child(2) {
            grid-column: span 3;
        }
    }

    @media (max-width: 991px) {
        &:first-child, &:nth-child(2) {
            grid-column: initial;
        }
    }
    @media (max-width: 560px) {
        .infos {
            h6 {
                font-size: 1.8rem;
            }
            p {
                font-size: 1.4rem;
            }
        }
    }
`

export const StyledTagSpan = styled.span`
    display: inline-block;
    border-radius: 10rem;
    background: rgba(255, 255, 255, .1);
    padding: .8rem 2.2rem;
    color: var(--gray-100);
    text-align: center;
    font-family: var(--font-sora);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: .126rem;
    text-transform: uppercase;
    margin-bottom: 4.6rem; 
`