import styled from "styled-components";

export const StudentCardContainer = styled.div`
     width: 30%;
     height: 14rem;

     border: 1px solid ${props => props.theme['gray-300']};
     border-radius: 8px;

     margin: 1rem auto;
     padding: 1rem;
     display: flex;

     gap: 1rem;
     justify-content: center;
     align-items: center;

     background: none;

     img{
          width: 30%;
          height: 80%;

          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;

     }

     div{
               h3{
                    font-size: 1.5rem;
                    margin: 1rem auto;
                    font-weight: 400;
                    color: #000;
                    width: 100%;
                    line-height: 2rem;
               }
               p{
                    line-height: 1.5rem;
                    color: #000;
                    text-align: center;
                    margin: 0 auto;
               }
     }

`
export const SeeMoreStudentBtn = styled.button`
     width: 10rem;
     height: 4rem;

     padding: 0.25rem 1rem;
     margin: auto 0 1rem auto;

     border: none;
     border-radius: 8px;
     outline: none;

     text-align: center;
     color: #ffff;
     font-size: 1.2rem;

     background: ${props => props.theme['global']};

     cursor: pointer;
     transition: .5s ease;

     &:hover{
               text-decoration: underline;
     }
`