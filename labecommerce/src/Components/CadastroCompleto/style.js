import styled, { keyframes } from "styled-components";

const gradient = keyframes` 
    
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }

`
export const Container = styled.body`

background: linear-gradient(45deg,#FEAC5E,#C779D0,#4BC0C8) ;
background-size: 400% 400%;
animation: ${gradient} 5s ease infinite;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
min-height: 100vh;
`

export const Titulo = styled.h1`
font-size: 3rem;
padding: 28px;
`
export const Dados = styled.p `
display: flex;  
width: 50%;
justify-content: space-between;
font-size: 2rem;
text-decoration: underline;

`
export const ButtonRetornar = styled.button` 
 height: 9vh;
 cursor: pointer;
 background: #2222;
 color: #fff;
 font-size: 1.6rem;
 border-radius: 5px;

 width: 15vw;
 &:hover{
    color:#222;
    background-image:linear-gradient(-45deg,#acb6e5, #86fde8) ;

}
`