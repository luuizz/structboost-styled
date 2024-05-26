import Image from "next/image";
import { CardDigitalStyle } from "./style";
 

export default function CardDigital({ srcImage, altImageCard, titleCard, textCard }) {
  return (
    <CardDigitalStyle>
        <div className="item-digital">
            <div className="icon">
                <Image src={srcImage} alt={altImageCard} />
            </div>

            <div className="info">
                <h6>{titleCard}</h6>
                <p>{textCard}</p>
            </div>
        </div>
    </CardDigitalStyle>
  )
}
