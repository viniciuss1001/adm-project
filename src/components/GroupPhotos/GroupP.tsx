import { GroupContainer, LeftSide, RightSide } from "./Styles";

import apresentation from './images/apresentation.png'


export function GroupPhotos(){
     return(
          <GroupContainer>
               <LeftSide>
                    <h4>Fotos da Turma</h4>
                    <img src={apresentation} alt="Rafiki" />
               </LeftSide>
               <RightSide>
                              
               </RightSide>
          </GroupContainer>
     )
}