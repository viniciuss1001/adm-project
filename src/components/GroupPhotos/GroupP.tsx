import { CaretDoubleRight, Images } from "@phosphor-icons/react";
import { Carousel } from "../Carousel/Carousel";
import { GroupContainer, LeftSide, RightSide, SeeMoreBtn } from "./Styles";

import apresentation from './images/apresentation.png'


export function GroupPhotos() {
     return (
          <GroupContainer>
               <LeftSide>
                    <h3>Fotos da Turma 
                         <span>
                              <CaretDoubleRight />
                         </span>
                    </h3>
                    <img src={apresentation} alt="Rafiki" />
               </LeftSide>
               <RightSide>
                    <Carousel />
                    <SeeMoreBtn>
                         Ver mais
                         <Images />
                    </SeeMoreBtn>
               </RightSide>
          </GroupContainer>
     )
}