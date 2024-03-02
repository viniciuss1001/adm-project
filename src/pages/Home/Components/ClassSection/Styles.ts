import styled from "styled-components";

export const ClassSectionContainer = styled.section`
      width: 100%;
      height: fit-content;
      background: ${props => props.theme['white']};

      display: flex;
      flex-direction: column;

      padding: 2rem 2%;

      h3{
            font-size: 3rem;
            font-weight: 500;
            line-height: 1rem;
            margin: 1rem auto;
            text-align: center;

            color: #000;
      }
`

export const CardsContainer = styled.div`
      width: 100%;
      height: 80%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      padding: 1rem;

`