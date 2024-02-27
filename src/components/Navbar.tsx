import { Link } from 'react-router-dom'
import admLogo from '../assets/admLogo.png'
import { Logo, NavbarButtons, NavbarContainer, NavbarLinks, RegisterBtn } from './Styles'
import { PersonSimple } from '@phosphor-icons/react'

export function NavbarAdm() {
  return (
    <NavbarContainer>
      <Link to='/'>
      <Logo>
        <img src={admLogo} alt="Administração" />
      </Logo>
      </Link>
      
      <NavbarLinks>
        <Link to='/'>Turma</Link>
        <Link to='/'>Alunos</Link>
        <Link to='/'>Luiz Gonzaga</Link>
        <Link to='/'>Sobre</Link>
      </NavbarLinks>
      <NavbarButtons>
        <RegisterBtn>
          Criar Conta 
          <PersonSimple />
        </RegisterBtn>
      </NavbarButtons>
    </NavbarContainer>
  )
}


