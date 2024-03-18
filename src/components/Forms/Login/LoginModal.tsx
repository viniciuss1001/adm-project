import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Overlay,CloseModalButton,Content } from './Styled'

export function LoginUserModal() {
      return (
            <Dialog.Portal>
                  <Overlay />
                  <Content>
                        <Dialog.Title>
                              Registrar
                        </Dialog.Title>
                        <CloseModalButton>
                              <X />
                        </CloseModalButton>
                        
                        <form>
                              <input type="text"  
                              placeholder='Nome'
                              />
                              <input type="text"  
                              placeholder='Sobrenome'
                              />
                              <input type="text"  
                              placeholder='Turma'
                              />
                              <input type="number"  
                              placeholder='Ano letivo'
                              />

                              <button type="submit">
                                    Cadastrar
                              </button>
                        </form>
                  </Content>
            </Dialog.Portal>
      )
}