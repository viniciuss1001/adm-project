import styled from "styled-components";

export const GroupContainer = styled.section`
     width: 100%;
     height: 35rem;
     background: ${props => props.theme['global']};

     display: flex;
     justify-content: space-between;
     align-items: center;

     margin: 0;
     padding: 1rem 5%;
     gap: 2rem;

`
export const LeftSide = styled.div`
     margin-left: 2%;
     width: 30%;
     height: 100%;

     background: none;

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     h3, span{
          font-size: 3rem;
          font-weight: 500;
          color: ${props => props.theme['white']};
          display: flex;
          align-items: center;
          justify-content: center;
     }
`
export const RightSide = styled.div`
     margin-right: 2%;
     width: 70%;
     height: 100%;

     background: none;

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`

export const SeeMoreBtn = styled.button`
     padding: 0.25rem 1rem;
     margin: 2rem auto;

     width: 10rem;
     height: 3rem; 

     outline: none;
     border: none;
     border-radius: 0.5rem;

     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;

     text-align: center;
     color:${props => props.theme['global']};
     background: ${props => props.theme['white']};

`