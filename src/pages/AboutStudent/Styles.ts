import styled from "styled-components";


export const AboutStudentContainer = styled.div`

`

export const Wallpaper = styled.div`
     width: 100%;
     height: 16rem;

     display: flex;
     justify-content: center;
     align-items: center;

     background-color: none;

     img{
          width: 20%;
          height: auto;
          display: flex;
          margin: auto;
     }

`
export const SideBar = styled.aside`
     width: 25rem;
     height: 60vh;

     background: ${props => props.theme['global']};
     margin-top: -2rem;
     padding: 1rem 2rem;

     display: flex;
     flex-direction: column;
     border-radius: 4px;

     header{
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;

          img{
               width: 20%;
               height: auto;
          }
          h2{
               color: ${props => props.theme['white']};
               font: 400 normal 2rem;
               margin: 0 auto 0  1rem;
          }
     }
     nav{
          display: flex;
          flex-direction: column;
          padding: 2rem 1rem;
          color: ${props => props.theme['white']};
          line-height: 2rem;
          font-size: 1.2rem;

          p{
               display: flex;
               align-items: center;
               gap: 1rem;
               margin-left: 0;
          }
     }


`
export const Content = styled.div`
     display: flex;
     width: 100%;
     height: fit-content;
     padding: 0 2rem;
`
export const MainContent = styled.main`
     background: ${props => props.theme['white']};
     border-radius: 2px;

     padding: 2rem;
     width: 100%;
     height: 50vh;


     header{
          height: 20%;
          background: none;
          display: flex;
          gap: 1rem;

          label{
               display: flex;
               gap: 2rem;

               justify-content: center;
               align-items: center;

               padding: 0 2rem;
               width: 100%;
               input{
                    border: 1px solid ${props => props.theme['gray-100']};
                    border-radius: 1rem;
                    margin: 1rem 2rem;
                    padding: 0.25rem 1rem;
                    outline: none;

                    height: 3rem;
                    width: 80%;
                    color: #000;


               }
               i{
                    margin-left: 1rem;
               }
          }
     }

`