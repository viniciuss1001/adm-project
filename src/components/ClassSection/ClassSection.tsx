import { StudentCard } from "./StudentCard/StudentCard";
import { CardsContainer, ClassSectionContainer } from "./Styles";

export function ClassSaction(){
     return(
          <ClassSectionContainer>
               <h3>Veja abaixo os integrantes da turma!</h3>
               <CardsContainer>
                    <StudentCard 
                    name="Vinicius Frota"
                    description="Estudante de programação"
                    BtnText="VF"
                    key={1}
                    />
                    <StudentCard 
                    name="Vinicius Frota"
                    description="Estudante de programação"
                    BtnText="VF"
                    key={1}
                    />
                    <StudentCard 
                    name="Vinicius Frota"
                    description="Estudante de programação"
                    BtnText="VF"
                    key={1}
                    />
                    <StudentCard 
                    name="Vinicius Frota"
                    description="Estudante de programação"
                    BtnText="VF"
                    key={1}
                    />
               </CardsContainer>
          </ClassSectionContainer>
     )
}