import styled from "styled-components";

export const SmallRegisterContainer = styled.div`
     width: 100%;
     height: 16rem;

     padding: 1rem 2%;
     margin: 0 auto;

     display: grid;
     grid-template-columns: repeat(3, 1fr);
     justify-content: space-between;
     align-items: center;
     gap: 2rem;

     text-align: center;
     color: #${props => props.theme['white']};
     background: ${props => props.theme['global']};
     font-size: 2rem;
     font-weight: 400;

`

export const RegisterButtonSmallRegister = styled.button `
     width: 10rem;
     height: 3rem;
     outline: none;
     border: none;
     border-radius: 8px;

     padding: 1rem 1.5rem;
     margin: 2rem auto;

     background: ${props => props.theme['white']};
     color: ${props => props.theme['global']};

     display: flex;
     align-items: center;
     justify-content: center;
     
     font-size: 1.2rem;

     cursor: pointer;


`