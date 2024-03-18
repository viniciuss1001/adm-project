import { Link } from 'react-router-dom'
import admLogo from '../../../assets/admLogo.png'
import { LoginBtn, Logo, NavbarButtons, NavbarContainer, NavbarLinks, RegisterBtn } from './Styles'
import {SignIn, UserCirclePlus } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginUserModal } from '../../Forms/Login/LoginModal'

export function UnregisterNavbar() {
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
        <Dialog.Root>
        <RegisterBtn>
          Criar Conta 
          <UserCirclePlus />
          <LoginUserModal />
        </RegisterBtn>

        <LoginBtn>
          Entrar
          <SignIn />
        </LoginBtn>
        </Dialog.Root>
        
      </NavbarButtons>
    </NavbarContainer>
  )
}


