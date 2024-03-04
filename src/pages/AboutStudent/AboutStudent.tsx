import { LoggedNavbar } from "../../components/Navbar/LogedNavbar/LoggedNavbar";
import { AboutStudentContainer, Wallpaper, SideBar, MainContent } from "./Styles";
import background from '../../assets/admLogo.png'
import trophy from './images/trophy.png'
import { ArrowRight, FileSearch } from "@phosphor-icons/react";

export function AboutStudent() {
     return (
          <>
               <LoggedNavbar />
               <AboutStudentContainer>
                    <Wallpaper>
                         <img src={background} alt="adm" />
                    </Wallpaper>

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
                                        placeholder="Pesquisar"
                                   />
                                   <FileSearch />
                              </label>
                              hello
                         </header>
                    </MainContent>
               </AboutStudentContainer>
          </>
     )
}