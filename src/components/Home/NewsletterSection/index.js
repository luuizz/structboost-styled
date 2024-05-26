import Btn from "@/components/Button";
import { StyledNewsletterSection } from "./style";

export default function HomeNewsletterSection() {
  return (
    <StyledNewsletterSection>
        <div className="container">
            <h2>Front-end descomplicado e direto ao ponto!</h2>
            <p>Aprenda a desenvolver interfaces modernas e de alta qualidade com quem está na área atuando com projetos altamente renomados.</p>
            <Btn 
            href="/contato" 
            label="Fazer parte da lista de espera"
            title="Preencher formulário"
            variant="large-white"
            />
        </div>
    </StyledNewsletterSection>
  )
}
