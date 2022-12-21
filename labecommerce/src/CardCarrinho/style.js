import styled from "styled-components";

export const ContainerCarrinho = styled.section` 
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-content: flex-start;
    text-align: center;
    margin: 8px 0px 0px -15px;
    min-height: 180px;
    box-shadow: 3px 3px 9px 1px white;
    border-radius: 12px;
    width: 100%;
    color: white;
    gap: 1%;
    background: linear-gradient(-255deg, #697689,#555555);

    
`
export const ListaContainer = styled.ul`
   list-style : none ;
   color:white;
`
export const ItemCarrinho  =styled.li`
border: 1px solid ;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
background:#696969;
padding: 2px;


`
export const Contador = styled.div`

display: flex;
`