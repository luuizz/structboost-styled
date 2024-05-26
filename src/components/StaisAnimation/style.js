"use client"
import styled from "styled-components"

export const StyledStairsAnimation = styled.div`
    .transition-container{
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 2025;
        div{
            position: relative;
            height: 100%;
            width: 100%;
            background-color: var(--pink-10);
        }
    }
    .transition-background{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: var(--pink-10);
        z-index: 2026;
        pointer-events: none;
        top: 0;
        left: 0;
    }
`