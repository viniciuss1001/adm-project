
import { CaretCircleRight } from "@phosphor-icons/react"
import { SeeMoreStudentBtn, StudentCardContainer } from "./Styles"


interface StudentsCardProps {
     name: string
     description: string
     BtnText?: string
}


export function StudentCard({ name, description, BtnText }: StudentsCardProps) {
     return (
          <StudentCardContainer>
               <img src="https://github.com/viniciuss1001.png" alt="profile" />
               <div>
                    <h3>
                         {name}
                    </h3>
                    <p>
                         {description}
                    </p>
               </div>

               <SeeMoreStudentBtn>
                    Ver mais: {BtnText}
                    <CaretCircleRight />
               </SeeMoreStudentBtn>
          </StudentCardContainer>
     )
}