import iconInstagram from "@/assets/icon-instagram.svg";
import iconYoutube from "@/assets/icon-youtube.svg";
import iconLinkedIn from "@/assets/icon-linkedin.svg";
import { linksMenu } from "@/components/Header/Navigation";

export const itemsCardPost = [
    {
        tag: "Fundamentos",
        title: "HTML5 e Semântica",
        text: "Aprenda a usar a mais recente versão do HTML e crie páginas web bem estruturadas e otimizadas para os mecanismos de busca."
    },
    {
        tag: "Estilizando",
        title: "CSS3 e Estilização Avançada",
        text: "Explore os recursos avançados do CSS3 para criar layouts responsivos, animações incríveis e designs atrativos."
    },
    {
        tag: "Potencializando",
        title: "Javascript Moderno",
        text: "Aprenda a programar com Javascript moderno e torne suas páginas interativas e dinâmicas, proporcionando uma experiência única ."
    },
    {
        tag: "Aplicações",
        title: "Frameworks Front-end",
        text: "Descubra como utilizar frameworks populares como React, Angular e Vue.js para criar aplicações web completas e eficientes."
    },
    {
        tag: "Designs",
        title: "Design Responsivo",
        text: "Aprenda a criar designs responsivos e mobile-first que se adaptam perfeitamente a diferentes tamanhos de tela."
    },
]

export const footerDataLinks = [
    {
      title: "Lista de páginas",
      links: linksMenu.map(({ label, link }) => ({ label, href: link }))
    },
    {
      title: "Soluções",
      links: [
        { label: "Texto link 01", href: "#" },
        { label: "Texto link 02", href: "#" },
        { label: "Texto link 03", href: "#" }
      ]
    },
    {
      title: "Contato",
      links: [
        { label: "Texto link 01", href: "#" },
        { label: "Texto link 02", href: "#" }
      ]
    },
    {
      title: "Nossas redes sociais",
      links: [
        { label: "Instagram", href: "#", icon: iconInstagram, alt: "Logo do Instagram" },
        { label: "Linkedin", href: "#", icon: iconLinkedIn, alt: "Logo do LinkedIn" },
        { label: "Youtube", href: "#", icon: iconYoutube, alt: "Logo do Youtube" }
      ]
    }
]; 