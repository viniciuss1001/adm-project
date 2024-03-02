import styled from "styled-components";

export const LoggedNavbarContainer = styled.header`

     width: 100%;
     height: 5rem;

     padding: 1rem 2rem;
     margin: none;

     display: flex;
     justify-content: space-around;
     align-items: center;

     color: ${props => props.theme['white']};
     background: ${props => props.theme['global']};

`

export const StudentName = styled.div`
     display: flex;
     margin: auto auto auto 0;
     width: fit-content;
     background: none;

     font-size: 1.2rem;
`

export const LoggedNav = styled.nav`
     color: ${props => props.theme['white']};
     font-size: 1.2rem;

     text-decoration: none;

     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 55%;
     background: none;
     a{
          color:  ${props => props.theme['white']};
          text-decoration: none;

          transition: .3s ease;

          &:hover{
               text-decoration: underline;
          }
     }


`
export const LogoutBtn = styled.button`

     width: fit-content;
     padding: 0.75rem 1rem;

     background: ${props => props.theme['white']};

     color:${props => props.theme['global']};
     font-size: 1.2rem;
     font-weight: 400;
     text-decoration: none;

     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;

     border: none;
     border-radius: 8px;
     outline: none;

     transition: .3s ease;

     &:hover{
     border: 1px solid #fff;
}
`