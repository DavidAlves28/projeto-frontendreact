import styled, { keyframes } from "styled-components";
const gradient   = keyframes` 
    
    0% {
        background-position: 0% 25%;
    }

    50% {
        background-position: 100% 25%;
    }

    100% {
        background-position: 0% 80%;
    }

`
export const ContainerMain = styled.main`
min-height: 100vh;
min-width: 100vw;
background: linear-gradient(90deg,#FEAC5E,#C779D0,#4BC0C8);
background-size: 400% 400%;
animation: ${gradient} 6s ease-in infinite;
`  
export const ContainerApp = styled.body`
min-height: 100vh;
min-width: 100vw;

`

