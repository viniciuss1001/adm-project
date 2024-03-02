import styled from "styled-components";


export const FooterContainer = styled.div`
     background: ${props => props.theme['global']};
     color: ${props => props.theme['white']};

     display: flex;
     flex-direction: column;

     padding: 1rem 2%;
     margin: 0;
     

`

export const FooterContent = styled.div`
     background: none;
     padding: 1rem;

`
export const TopContent = styled.div`
     display: flex;
     gap: 2rem;

     div:first-child{
          width: 50%;
          background: none;

          padding: 1rem 2rem;

          h3{
               color: #fff;
               font-size: 1.2rem;
               margin: 1rem auto ;
               text-align: left;
          }
     }
     div:not(:first-child){
          padding: 1rem;
          background: none;
          padding: 0.5rem;

          width: 25%;

          h4{
               color: #fff;
               font-size: 1.2rem;
               margin: 1rem auto;
          }
          p{
               margin-left: 2rem;
               line-height: 2rem;
          }
     }
`
export const BottomContent = styled.div`
     margin: 1rem auto;
     border-top: 2px solid #fff;

     display: flex;
     justify-content: space-around;
     align-items: center;
     gap: 2rem;

     h5{
          font-size: 1.1rem;
     }
     div{
          margin: 1rem ;
          background: none;
          width: 25%;

          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;

          font-size: 2rem;
          font-weight: 400;
     }
`