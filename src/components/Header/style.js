"use client"
import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--gray-900);
    transition: all .3s ease;
    padding: 2rem 0;
    position: fixed;
    z-index: 2023;
    &.fixed {
        padding: 1.4rem 0;
        border-bottom: 1px solid rgba(255,255,255,.24);
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hamburger-react {
            display: none;
        }
    }
    @media (max-width: 991px) {
        .container {
            nav {
                display: none;
            }
            .hamburger-react {
                display: block;
            }
        }
    }
`

export const StyleNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`

export const StyleNavLinks = styled.ul`
    display: flex;
    gap: 4rem;
    li {
        a {
            color: var(--gray-100);
            font-size: 1.6rem;
            font-weight: 400;
            transition: opacity .3s ease;
            &:hover {
                opacity: .5;
            }
            &.is-active {
                color: var(--pink-100);
            }
        }
    }
`

export const StyledMenuCanva = styled.aside`
    padding: 6.4rem 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-color: var(--black);
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: var(--header-height);
    transition: all .3s ease;
    transform: translateY(100%);
    z-index: 50;
    position: fixed;
    &.fixed {
        height: calc(100vh - 7.6rem);
        top: 7.6rem;
    }
    &.open {
        pointer-events: all;
        opacity: 1;
        transform: translateY(0);
    }
    .container {
        nav {
            ul {
                flex-direction: column;
                margin-bottom: 4rem;
                li {
                    a {
                        font-size: 2.4rem;
                    }
                }
            }
        }
    }
`