import Image from 'next/image'
import React from 'react'
import ItemFooter from './ItemFooter'
import LogoStructBoost from "@/assets/logo.svg"
import Link from 'next/link'
import { StyledFooter } from './style'

export default function Footer() {
  return (
    <StyledFooter>
        <div className="container">
            <div className="main-area">
                <div className="left">
                    <Link href="/" title='Ir para página inicial'>
                        <Image src={LogoStructBoost} alt='Logo Structboost' />
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
                </div>

                <div className="right">
                    <ItemFooter />
                </div>
            </div>

            <p className="copy">
                2023 © Todos os direitos reservados. <strong>Codeboost</strong>
            </p>
        </div>
    </StyledFooter>
  )
}
