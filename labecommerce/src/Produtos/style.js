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