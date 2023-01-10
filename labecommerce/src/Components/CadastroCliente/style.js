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
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
border: 2px solid green;

`
export const Titulo = styled.h1`
font-size: 1.8rem;
`
export const ButtonCadastro = styled.button`
width: 100%;
    padding: 8px;
`
export const MsgErro = styled.p `
color: #fff;
background-color: crimson;
width: 100%;

`
export const Label = styled.label`
border: 2px solid green;
`
export const CadastroConcluido = styled.section`
background-color: darkgray;
`
export const Titulo1 = styled.h1`
font-size: 2.8rem;

`