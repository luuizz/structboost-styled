import CardDigital from "./CardDigital"
import iconFace from "@/assets/icon-faceid.svg"
import iconDevices from "@/assets/icon-devices.svg"
import iconPerformance from "@/assets/icon-performance.svg"
import { StyledSectionArtDigital } from "./style"

const itemsCardDigital = [
    {
        image: iconFace,
        altImage: "Ícone do FaceID",
        title: "Impacto Visual Imbatível",
        text: "Domine a arte de criar interfaces envolventes que conquistam corações e mentes dos usuários.",
    },
    {
        image: iconDevices,
        altImage: "Ícone de vários dispositivos",
        title: "Navegabilidade sem Limites",
        text: "Construa a base sólida para uma experiência de usuário fluida e intuitiva, garantindo a satisfação do público.",
    },
    {
        image: iconPerformance,
        altImage: "Ícone de performance",
        title: "Performance Acelerada",
        text: "O Front End é a chave para otimizar o desempenho do seu site, cativando visitantes com velocidade e eficiência.",
    },
]

export default function HomeSectionArtDigital() {
  return (
    <StyledSectionArtDigital>
        <div className="container">
            <h3>Transformando Ideias em Realidade Digital!</h3>
            <ul>
                {
                    itemsCardDigital.map((itemCard, index) => (
                        <CardDigital 
                        key={index} 
                        srcImage={itemCard.image} 
                        altImageCard={itemCard.altImage}
                        titleCard={itemCard.title}
                        textCard={itemCard.text}
                        />
                    ))
                }
            </ul>
        </div>
    </StyledSectionArtDigital>
  )
}
