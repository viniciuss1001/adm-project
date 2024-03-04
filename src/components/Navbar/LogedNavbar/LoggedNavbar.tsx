import { SignOut } from "@phosphor-icons/react";
import { LoggedNav, LoggedNavbarContainer, LogoutBtn, StudentName } from "./Styles";
import { Link } from "react-router-dom";

export function LoggedNavbar() {
    return (
        <LoggedNavbarContainer>
            <StudentName>
                Olá, seja bem vindo Vinícius Frota
            </StudentName>
            <LoggedNav>
                <Link to='/'>
                    Início
                </Link>
                <Link to='/'>
                    Postagens
                </Link>
                <Link to='/'>
                    Turma
                </Link>
                <Link to='/'>
                    Professor
                </Link>
                <LogoutBtn>
                    Sair
                    <SignOut />
                </LogoutBtn>
            </LoggedNav>
        </LoggedNavbarContainer>
    )
}