import styled from "styled-components"


export const Container = styled.section`
display: grid;
grid-template-columns: 250px 1fr;
margin: 1%;
margin-bottom:20px;
`

export const ContainerProdutos = styled.section`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: flex-start;

width: 100%;
gap: 1%;
color: white;
font-size: large;

`
export const ContainerCarrinho = styled.section`
display:flex;
flex-direction: column;
`
export const Contador = styled.section `
display: flex ;
`





export const Produto = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    background: #2222;
    /* background: linear-gradient(-255deg,purple,violet) ; */
    border-radius: 5px;
    box-shadow: 1px 1px 7px ;
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




