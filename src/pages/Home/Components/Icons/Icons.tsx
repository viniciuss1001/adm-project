import logoEp from './images/Logoeeep.png'
import admLogo from './images/logoadm.png'
import trophy from './images/trophy.png'
import instagramLogo from './images/instagram.png'
import { IconCard, IconsContainer } from './Styles'


export function IconsImages(){
     return(
          <IconsContainer>
               <IconCard>
                    <img src={logoEp} alt='Gonzaga Mota' 
                    title='GM'
                    />
                    <p>EEEP</p>
               </IconCard>
               <IconCard>
                    <img src={admLogo} alt='Administração' 
                    title='Adm'
                    />
                    <p>Turma</p>
               </IconCard>
               <IconCard>
                    <img src={trophy} alt='Conquistas' 
                    title='Troféu'
                    />
                    <p>Conquistas</p>
               </IconCard>
               <IconCard>
                    <img src={instagramLogo} alt='instagram' 
                    title='Insta'
                    />
                    <p>Instagram</p>
               </IconCard>
          </IconsContainer>
     )
}