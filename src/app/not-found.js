import Btn from "@/components/Button";

export default function NotFound() {
    return (
        <div className="generic">
            <div className="container">
                <h1 style={{marginBottom: '4rem'}}>Página não encontrada</h1>
                <Btn href="/" label="Voltar para a Home" title="Voltar para página inicial" variant="large-default" />
            </div>
        </div>
    )
}