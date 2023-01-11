import styled from "styled-components"


export const Container = styled.section`
display: grid;
justify-content:space-between;
align-items: flex-start;
min-width: 90vw;
min-height: 100vh;
grid-template-columns: 1fr 250px ;
margin: 1% 3% 0 0 ;
`

export const ContainerProdutos = styled.section`
display: flex;
flex-wrap: wrap;
justify-content:center ;
align-items: flex-start;
width: 100%;
min-height: 100%;
color: white;
font-size: large;
grid-column: 1/1;

`
export const ContainerCarrinho = styled.section`
display:flex;
flex-direction: column;
grid-column: 2;
min-width: 100%;
min-height: 100%;
`
export const Produto = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
text-align: center;
background: #2222;
border-radius: 8px;
box-shadow: 3px 3px 9px 1px #222;
min-height: 370px;
width: 190px;
margin: 10px;
&:hover{
    box-shadow: 1px 1px 9px black;
    border-radius: 5px;
    border: 1px solid black ;
    border-radius: 10px;
    background: #222
}
`
  
    export const NomeProduto = styled.h1`
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    &:hover{
        text-shadow: 1px 1px 9px black;
    }
    `
    export const ImagemProduto = styled.img`
    height: 180px;
    width: 90%;
    border-bottom: 1px solid;
    `
    export const TagPreco = styled.p`
    text-decoration:underline;
    margin-bottom: 5px;
    color:whitesmoke;
    font-size: x-large;
    text-align: left;
    `
    export const BotaoProduto = styled.button`
    background:#222 ;
    color: #fff;
    width: 90%;
    height: 32px;
    margin: 10px ;
    border:1px solid black;
    border-radius: 8px;
    &:hover{
        color:#222;
        background-image:linear-gradient(-45deg,#acb6e5, #86fde8) ;
    }
`




