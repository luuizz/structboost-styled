"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: var(--font-inter);
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 124.6rem;
        padding: 0 1.5rem;
    }

    html, body {
        font-size: 62.5%;
    }

    :root {
        --pink-10: #F67ACB;
        --pink-20: #CF62A9;
        --pink-30: #9D457F;
        --gray-100: #F5F6FA;
        --gray-200: #DFE1E8;
        --gray-300: #C0C3CC;
        --gray-400: #ABAFBA;
        --gray-500: #979BA6;
        --gray-600: #787C87;
        --gray-700: #5C5F69;
        --gray-800: #393B42;
        --gray-900: #0A0B0D;
        --white: #fff;
        --black: #000;

        --font-sora: "Sora", sans-serif;
        --font-inter: "Inter", sans-serif;

        --header-height: 8.8rem;
    }

    body {
        background-color: var(--gray-900);
        color: var(--gray-100);
        cursor: wait;
        overflow: hidden;
        &::-webkit-scrollbar {
            width: .5rem;
            height: .5rem;
            background-color: var(--gray-800)
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--pink-10);
        }
    }

    img {
        max-width: 100%;
        display: block;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer
    }

    ::-moz-selection {
        background-color: var(--pink-10);
        color: var(--gray-900)
    }

    ::selection {
        background-color: var(--pink-10);
        color: var(--gray-900)
    }

    h1,h2,h3,h4 {
        font-weight: 700;
        font-family: var(--font-sora);
    }

    h5,h6 {
        font-weight: 600
    }

    h1 {
        font-size: 5.6rem
    }

    h2 {
        font-size: 4.8rem
    }

    h3 {
        font-size: 4rem
    }

    h4 {
        font-size: 2.4rem
    }

    h5 {
        font-size: 2.2rem
    }

    h6 {
        font-size: 2rem
    }

    p {
        font-size: 1.8rem;
        line-height: 150%
    }
`

export default GlobalStyle;