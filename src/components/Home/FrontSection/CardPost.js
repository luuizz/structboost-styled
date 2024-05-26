import Image from 'next/image'
import IconImageGeneric from "@/assets/icon-imgframe.svg"
import { StyledCardPost, StyledTagSpan } from './style'
 
export default function CardPost({tag, title, text }) {
  return (
    <StyledCardPost>
        <div className='card-post'>
            <StyledTagSpan>{tag}</StyledTagSpan>
            <div className='image'>
                <Image src={IconImageGeneric} alt='Placeholder de uma imagem'/>
            </div>

            <div className='infos'>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    </StyledCardPost>
  )
}
