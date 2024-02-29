import { FacebookLogo, GithubLogo, InstagramLogo, PaperPlane } from "@phosphor-icons/react";
import { SmallRegister } from "./SmallRegister/SRegister";
import { FooterContainer, FooterContent, TopContent, BottomContent } from "./Styles";
import { AboutFooterText, CopyText } from "./FooterText";

export function HomeFooter() {
     return (
          <FooterContainer>
               <SmallRegister />
               <FooterContent>
                    <TopContent>
                         <div>
                              <h3>Sobre nós</h3>
                              <p>
                                   {AboutFooterText}
                              </p>
                         </div>
                         <div>
                              <h4>Categorias</h4>
                              <p>Alunos</p>
                              <p>Professores</p>
                              <p>Escola</p>
                              <p>Destaque</p>
                         </div>
                         <div>
                              <h4>Links Úteis</h4>
                              <p>FAQ</p>
                              <p>Suporte</p>
                              <p>Desenvolvedor</p>
                         </div>
                    </TopContent>
                    <BottomContent>
                         <h5>
                              {CopyText}
                         </h5>
                         <div>
                              <InstagramLogo />
                              <FacebookLogo />
                              <PaperPlane />
                              <GithubLogo />
                         </div>
                    </BottomContent>
               </FooterContent>
          </FooterContainer>
     )
}