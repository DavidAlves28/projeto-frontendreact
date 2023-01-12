import styled from "styled-components";
import galaxia from "../../assets/Imagens/galaxiaTerra.jpg"
import { keyframes } from "styled-components";


const gradient = keyframes`
0% {
		background-position-x: 1% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`
export const Apresentacao = styled.section`

background-image: url(${galaxia}); 
background-repeat: no-repeat ;
background-size: 110% 110%;
min-height: 100vh;
min-width: 100vw;
animation: ${gradient} 15s ease-out infinite;
scroll-behavior: smooth;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`

export const Titulo = styled.h1`
height: 30px;
color: white;
width: max-content;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: xx-large;
letter-spacing: 2px;
text-shadow: 2px 2px 9px black;
text-decoration: underline ;
/* padding: 30px 30px; */

&:hover{
    color: white;  
    background: #222;
    box-shadow: 1px 1px 9px 1px white;
    }

`
export const ContainerButton = styled.section`
height: 100%;
width: auto;
`
export const ButtonPage = styled.button`
padding: 10px 25px;
border-radius: 8px;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: xx-large;
letter-spacing: 2px;
width: 250px;
color:  white;
background: transparent ;
border: none;
text-decoration: overline underline;
cursor: pointer;
text-shadow: 1px 1px 9px black;
&:hover{
    color: white;
    background: #222;

    box-shadow: 1px 1px 9px 1px white;
    }
`
