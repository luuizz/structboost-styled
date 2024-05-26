"use client"
import styled from "styled-components";

export const StyledNewsletterSection = styled.section`
    padding: 8.9rem 0;
    background-color: var(--pink-10);
    .container {
        text-align: center;
        h2 {
            max-width: 64.6rem;
            margin: 0 auto;
            letter-spacing: -0.144rem;
            margin-bottom: 1.6rem;
        }
        p {
            max-width: 68.7rem;
            letter-spacing: -0.066rem;
            margin: 0 auto;
            margin-bottom: 2.4rem;
        }
    }
    @media (max-width: 560px) {
        .container {
            h2 {
                font-size: 4rem;
                max-width: 100%;
            }
            p {
                max-width: 100%;
            }
        }
    }
`