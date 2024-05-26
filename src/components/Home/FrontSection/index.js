import CardPost from "./CardPost"
import { itemsCardPost } from "@/app/data"
import { StyledSectionFront, StyledTopTexts } from "./style"

export default function HomeFrontSection() {
  return (
    <StyledSectionFront>
        <div className="container">
            <StyledTopTexts>
                <div className="left">
                    <h3>Domine a Arte da Front-end</h3>
                    <p>Prepare-se para criar interfaces incríveis e funcionais para a web com este curso completo de front-end.</p>
                </div>

                <div className="right">
                    <p>Junte-se a nós neste curso de front-end e embarque em uma jornada emocionante para se tornar um desenvolvedor web altamente qualificado.</p>
                </div>
            </StyledTopTexts>

            <div className="all">
                {
                    itemsCardPost.map((itemCard, index) => (
                        <CardPost key={index} tag={itemCard.tag} title={itemCard.title} text={itemCard.text} />
                    ))
                }
            </div>
        </div>
    </StyledSectionFront>
  )
}
