import Link from "next/link"
import { StyleNavLinks } from "./style"

export const linksMenu = [
    {
        label: "Diferenciais",
        link: "diferenciais"
    },
    {
        label: "Galeria",
        link: "galeria"
    }
]

export default function Navigation({ closeMenu }) {
    return (
        <StyleNavLinks>
        {
            linksMenu.map((linkMenu, index) => (
                <li key={index}>
                    <Link onClick={closeMenu} href={`/${linkMenu.link}`} title={`Ir para ${linkMenu.label}`}>
                        {linkMenu.label}
                    </Link>
                </li>
            ))
        }
    </StyleNavLinks>
    )
}