import styled from "styled-components";

export const CarouselContainer = styled.section`

     width: 100%;
     height: 25hv;
     display: flex;
     margin: 0;
     padding: 1rem;

     img{
          width: 100%;
          height: 100%;
          max-height: 50vh;
          max-width: 60vw;
          border-radius: 8px;
     }

     background: ${props => props.theme['global']};

`