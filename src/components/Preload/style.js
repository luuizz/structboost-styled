"use client"
import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledComponentAnimation = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2050;
    background-color: #141516;
    svg {
        position: absolute;
        top: 0;
        width: 100%;
        height: calc(100% + 30rem);
        path {
            fill: #141516;
        }
    }
    p {
        display: flex;
        color: white;
        font-size: 4.2rem;
        align-items: center;
        position: absolute;
        z-index: 1;
        span {
            display: block;
            width: 1rem;
            height: 1rem;
            background-color: white;
            border-radius: 50%;
            margin-right: 1rem;
        }
    }
`