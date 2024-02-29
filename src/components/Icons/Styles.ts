import styled from "styled-components";

export const IconsContainer = styled.div`
     height: 19rem;
     width: 100%;

     display: flex;
     align-items: center;
     justify-content: space-around;
     gap: 1rem;

     background: ${props => props.theme['white']};


`
export const IconCard = styled.div`

     width: 15%;
     height: 9.2rem;

     border-radius: 1rem;
     background-color: none;

     img{
          width: 5rem;
          height: 5rem;
          
          display: flex;
          margin: 0 auto;
     }

     p{
               font-size: 2rem;
               font-weight: 500;
               text-align: center;
               text-decoration: none;
               font-size: 'Poppins', sans-serif;
               color: ${props => props.theme['gray-900']};
     }

`