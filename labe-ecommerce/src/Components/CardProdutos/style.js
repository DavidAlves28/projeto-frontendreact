import styled from "styled-components";
import ImagemBotao from "../Imagens/backgroundBotao.jpg"

export const Produto = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black ;
    height: 100%;
    width: 90%;
    
    `
export const NomeProduto = styled.h1`
color:black;

`
export const ImagemProduto = styled.img`
height: 70%;
width: 90%;
`
export const BotaoProduto = styled.button`
width: 100%;
height: 25px;
&:hover{
    color:#fff;
    background-image: url(${ImagemBotao});
}
`