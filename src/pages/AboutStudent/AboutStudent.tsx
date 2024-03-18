import { LoggedNavbar } from "../../components/Navbar/LogedNavbar/LoggedNavbar";
import { AboutStudentContainer, Wallpaper, SideBar, MainContent,Content } from "./Styles";
import background from '../../assets/admLogo.png'
import trophy from './images/trophy.png'
import { ArrowRight} from "@phosphor-icons/react";

export function AboutStudent() {
     return (
          <>
               <LoggedNavbar />
               <AboutStudentContainer>
                    <Wallpaper>
                         <img src={background} alt="adm" />
                    </Wallpaper>
                    <Content>


                         <SideBar>
                              <header>
                                   <img src={trophy} alt="" />
                                   <h2>Turma de Adm</h2>
                              </header>
                              <nav>
                                   <p>
                                        Conquistas
                                        <ArrowRight />
                                   </p>
                                   <p>
                                        Destaque
                                        <ArrowRight />
                                   </p>
                                   <p>
                                        Formatura
                                        <ArrowRight />
                                   </p>
                              </nav>
                         </SideBar>
                         <MainContent>
                              <header>
                                   <label >
                                        <input type="text"
                                             id="s"
                                             placeholder={`Pesquisar`} 
                                             />
                                   </label>
                              </header>
                         </MainContent>
                    </Content>
               </AboutStudentContainer>
          </>
     )
}