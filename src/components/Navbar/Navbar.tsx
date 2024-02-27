import { Link } from 'react-router-dom'
import admLogo from '../../assets/admLogo.png'
import { LoginBtn, Logo, NavbarButtons, NavbarContainer, NavbarLinks, RegisterBtn } from './Styles'
import {SignIn, UserCirclePlus } from '@phosphor-icons/react'

export function NavbarAdm() {
  return (
    <NavbarContainer>
      <Logo>
      <Link to='/'>
        <img src={admLogo} alt="Administração" />
      </Link>
        <span>2020-2022</span>
      </Logo>
      
      <NavbarLinks>
        <Link to='/'>Turma</Link>
        <Link to='/'>Alunos</Link>
        <Link to='/'>Luiz Gonzaga</Link>
        <Link to='/'>Sobre</Link>
      </NavbarLinks>
      <NavbarButtons>
        <RegisterBtn>
          Criar Conta 
          <UserCirclePlus />
        </RegisterBtn>

        <LoginBtn>
          Entrar
          <SignIn />
        </LoginBtn>
      </NavbarButtons>
    </NavbarContainer>
  )
}


