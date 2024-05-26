"use client"
import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 4.8rem 0;
    .container {
        .main-area {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, .24);
            padding-bottom: 6.6rem;
            margin-bottom: 2.4rem;
            .left {
                max-width: 27.9rem;
                p {
                    margin-top: 2.4rem;
                    color: var(--gray-600);
                    font-size: 1.6rem;
                    font-weight: 400;
                    letter-spacing: -0.048rem;
                }
            }

            .right {
                flex-grow: 1;
                max-width: 79.2rem;
                display: flex;
                justify-content: space-between;
            }
        }
        .copy {
            color: var(--gray-600);
            font-size: 1.6rem;
            font-weight: 400;
            letter-spacing: -0.048rem;
            strong {
                font-weight: 600;
            }
        }
    }
    @media (max-width: 1200px) {
        .container {
            .main-area {
                .right {
                    max-width: 66.2rem;
                }
            }
        }
    }

    @media (max-width: 991px) {
        .container {
            .main-area {
                flex-direction: column;
                gap: 4rem;
                .left {
                    max-width: 100%;
                    text-align: center;
                    margin: 0 auto;
                    img {
                        margin: 0 auto;
                    }
                }
                .right {
                    max-width: 100%;
                    width: 100%;
                }
            }
        }
    }
    @media (max-width: 560px) {
        .container {
            .main-area {
                padding-bottom: 4.8rem;
                .right {
                    flex-direction: column;
                    align-items: center;
                    gap: 4.8rem;
                }
            }
            .copy {
                text-align: center;
                font-size: 1.4rem;
            }
        }
    }
`

export const StyledItemNavFooter = styled.div`
    h6 {
        font-size: 1.6rem;
        color: var(--gray-100);
        font-family: var(--font-body);
        font-weight: 600;
        letter-spacing: -0.048rem;
        margin-bottom: 3.2rem;
    }
    ul {
        li {
            font-size: 1.6rem;
            font-weight: 400;
            letter-spacing: -0.048rem;
            &:not(:last-child) {
                margin-bottom: 3.2rem;
            }
            a {
                color: var(--gray-600);
                transition: color .3s ease;
                display: flex;
                gap: 1.8rem;
                align-items: center;
                &:hover {
                    color: var(--white);
                }
            }
        }
    }
    @media (max-width: 560px) {
        h6 {
            text-align: center;
        }
        ul {
            li {
                a {
                    justify-content: center;
                }
            }
        }
        &:last-child {
            width: 100%;
            ul {
                display: flex;
                width: 100%;
                justify-content: space-between;
                li {
                    &:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
`