import { RegisterButtonSmallRegister, SmallRegisterContainer } from "./Styles";

export function SmallRegister() {
     return (
          <SmallRegisterContainer>
                    <p>
                         Quer saber mais sobre a turma?
                    </p>
                    <p>
                         Crie uma conta e interaja com cada um deles!
                    </p>
                    <p>
                         Crie agora mesmo!
                         <RegisterButtonSmallRegister>
                              Criar
                         </RegisterButtonSmallRegister>
                    </p>
          </SmallRegisterContainer>
     )
}