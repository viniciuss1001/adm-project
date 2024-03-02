import { LoggedNavbar } from "../../components/Navbar/LogedNavbar/LoggedNavbar";
import { AboutStudentContainer } from "./Styles";

export function AboutStudent(){
     return(
          <>
               <LoggedNavbar />
               <AboutStudentContainer>
                    <h2>estudante</h2>
               </AboutStudentContainer>
          </>
     )
}