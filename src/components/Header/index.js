"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logo.svg"
import { StyleHeader, StyleNav, StyledMenuCanva } from "./style"
import Navigation from "./Navigation"
import Btn from "../Button"
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react"

export default function Header() {

    const [isOpen, setOpen] = useState(false);
    const [isFixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setFixed(true)
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <>
        <StyleHeader className={isFixed ? 'fixed' : ''}>
            <div className="container">
                <Link href="/" title="Página inicial" className="logo">
                    <Image src={Logo} alt="Logo do Structboost" />
                </Link>

                <StyleNav>
                    <Navigation />
                    <Btn variant="small-default" href="/contato" label="Entre em contato" />
                </StyleNav>

                <Hamburger label="Mostrar menu" toggled={isOpen} toggle={setOpen} />
            </div>
        </StyleHeader>
        <StyledMenuCanva className={`${isOpen ? 'open' : ''} ${isFixed ? 'fixed' : ''}`}>
            <div className="container">
                <nav>
                    <Navigation closeMenu={closeMenu} />
                    <Btn variant="small-default" href="/contato" label="Entre em contato" />
                </nav>
            </div>
        </StyledMenuCanva>
        </>
    )
}