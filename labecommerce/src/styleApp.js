import styled, { keyframes } from "styled-components";
const gradient   = keyframes` 
    
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
export const ContainerApp = styled.body`
height: 100vh;
width: 100vw;

`
export const ContainerMain = styled.main`
min-height: 100vh;
min-width: 100vw;
background: linear-gradient(45deg,#FEAC5E,#C779D0,#4BC0C8) ;
background-size: 400% 400%;
animation: ${gradient} 5s ease infinite
`  

