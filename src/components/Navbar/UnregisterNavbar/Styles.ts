import styled from "styled-components";


export const NavbarContainer = styled.header`
     width: 100%;
     height: 5rem;

     display: flex;
     justify-content: space-around;
     align-items: center;

     color: #ffff;
     background-color: #00459D;

`

export const Logo = styled.div`

     width: 50%;
     height: 90%;

     padding: 0.25rem 1rem 0.25rem 3rem;
     border-radius: 8px;
     margin-left: -1rem;
     
     display: flex;
     align-items: center;
     background-color: #fff;

     img{
          width: 7rem;
          height: 4rem;
          transition: .3s ease;
          background-color: #fff;
          padding: 0.25rem;
          border-radius: 0.5rem;

          display: flex;
          float: left;
          
          &:hover{
          transform: scale(1.01);
     }
     }
     span{
          font-size: 2rem;
          font-family: '"Dancing Script", cursive';
          text-align: center;
          justify-content: center;
          align-self: flex-start;

          font-size: 2rem;
          color: ${props => props.theme['global']};
          text-decoration: none;
          margin: 2rem auto auto 1rem ;
          }
`
export const NavbarLinks = styled.div`
     width: 80%;
     height: 4rem;
     padding: 0.75rem 1rem;

     margin: 0 auto;
     border-radius: 1rem;
     
     display: flex;
     justify-content: space-around;
     align-items: center;

     a{
          color: #fff;
     text-decoration: none;
     font-size: 1.2rem;
     
     transition: 0.3s ease;

     &:hover{
          text-decoration: underline;
     }
     }
     background-color: transparent;
`

export const NavbarButtons = styled.div`
     width: 35%;
     padding: 0.25rem;

     display: flex;
     align-items: center;
     justify-content: space-around;
`


export const RegisterBtn = styled.button`

     width: fit-content;
     padding: 0.75rem 1rem;

     background: transparent;

     color:#fff;
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
          background: #FFFF;
          color: #00459D;
     }

`

export const LoginBtn = styled.button`

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