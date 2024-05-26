"use client"
import Link from "next/link"
import styled, { css } from "styled-components";

const sizeVariants = {
    small: css`
        padding: 1.6rem 2.4rem;
        font-size: 1.6rem;
    `,
    large: css`
        font-size: 1.8rem;
        padding: 2.3rem 2.4rem;
    `
};

const colorVariants = {
    default: css`
        background-color: var(--pink-10);
        color: var(--gray-900);
        line-height: 100%;
        letter-spacing: -0.048rem;
        transition: background-color .3s ease;

        &:hover {
            background-color: var(--white);
        }
    `,
    white: css`
        background-color: var(--white);
        color: var(--gray-900);
        transition: all .3s ease;
        &:hover {
            background-color: var(--gray-900);
            color: var(--white);
        }
    `
};

const StyledLink = styled(Link)`
    display: inline-block;
    font-family: var(--font-sora);

    ${({ size }) => sizeVariants[size || 'large']}
    ${({ color }) => colorVariants[color || 'default']}
`

export default function Btn({label, href, variant, title}) {

    const [size, color] = variant.split('-');
    return (
        <StyledLink href={href} title={title} size={size} color={color}>{label}</StyledLink>
    )
}