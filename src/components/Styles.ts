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

     width: 10%;
     height: auto;
     padding: 0.25rem;
     border-radius: 8px;
     background-color: #fff;
     margin-left: 1rem;

     transition: .3s ease;

     &:hover{
          transform: scale(1.1);
     }

     img{
          width: 100%;
          height: 100%;
     }
`
export const NavbarLinks = styled.div`
     width: 60%;
     height: 4rem;
     padding: 0.75rem 1rem;

     margin: 0 auto;
     
     display: flex;
     justify-content: space-between;
     align-items: center;

     a{
          color: #fff;
     text-decoration: none;
     font-size: 1.2rem;
     }
     background-color: orange;


`

export const NavbarButtons = styled.div`

     width: auto;
     padding: 0.25rem;

     display: flex;
     align-items: center;
     justify-content: space-around;



`


export const RegisterBtn = styled.button`

     width: 5rem;
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