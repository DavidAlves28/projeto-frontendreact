import styled from "styled-components";

export const ContainerCarrinho = styled.main`
       background: chocolate;
       text-align: center;
        height: 100vh;
`


export const Tabela = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
   
    background: chartreuse;
    width: 60vw;
    margin:0 auto;
   
`

export const Quantidade = styled.h2`
grid-column: 1;
border: 1px solid green;
width:100%;
text-align:center;
`
export const Produto = styled.h2`
grid-column: 2;
border: 1px solid green;
width:100%;

text-align:center;
`
export const Preco = styled.h2`
grid-column: 3;
border: 1px solid green;
width:100%;
text-align:center;
`
