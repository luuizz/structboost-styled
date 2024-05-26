"use client"
import styled from "styled-components";

export const CardDigitalStyle = styled.li`
    .item-digital {
        flex-grow: 1;
        width: 100%;
        max-width: 38.4rem;
        .icon {
            width: 4rem;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.6rem;
        }
        .info {
            h6 {
                margin-bottom: 0.8rem;
            }
            p {
                font-size: 1.8rem;
                color: var(--gray-600);
            }
        }
    }
    @media (max-width: 1200px) {
        .item-digital {
            .info {
                p {
                    font-size: 16px;
                }
            }
        }
    }
    @media (max-width: 991px) {
        .item-digital {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

export const StyledSectionArtDigital = styled.section`
    padding-top: 12.8rem;
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        h3 {
            text-align: center;
            max-width: 53.5rem;
            letter-spacing: -0.12rem;
            margin-bottom: 6.4rem;
        }
        ul {
            display: flex;
            gap: 3.2rem;
            border-bottom: 1px solid var(--gray-800);
            padding-bottom: 12.8rem;
        }
    }
    @media (max-width: 1200px) {
        padding-top: 6.8rem;
        .container {
            ul {
                gap: 2.2rem;
                padding-bottom: 8.8rem;
            }
        }
    }

    @media (max-width: 991px) {
        .container {
            ul {
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 3.2rem;
            }
        }
    }

    @media (max-width: 560px) {
        padding-top: 8rem;
        .container {
            h3 {
                font-size: 2.8rem;
                max-width: 100%;
            }
            ul {
                padding-bottom: 8rem;
                gap: 6.4rem;
            }
        }
    }
`