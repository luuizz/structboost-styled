import Btn from "@/components/Button";
import Image from "next/image";
import illustration from "@/assets/hero-img-desktop.svg"
import { StyledHeroHome } from "./style";

export default function HomeHeroSection() {
    return (
        <StyledHeroHome>
            <div className="container">
                <div className="text">
                    <h1>Front-end descomplicado e direto ao ponto!</h1>
                    <p>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
                    <Btn href="/contato" label="Fazer parte da lista de espera" title="Cadastrar" variant="large-default" />
                </div>
            </div>

            <Image 
            src={illustration} 
            alt="Illustração da dashboard"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            />
        </StyledHeroHome>
    )
}