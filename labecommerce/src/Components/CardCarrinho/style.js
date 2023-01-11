import styled from "styled-components";

export const ContainerCarrinho = styled.section` 
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-content: flex-start;
    text-align: center;
    margin-top:  10px ;
    /* margin-right: 50px; */
    min-height: 220px;
    box-shadow: 3px 3px 9px 1px #222;
    border-radius: 12px;
    min-width: 100%;
    color: white;
    gap: 1%;
    background: linear-gradient(-255deg, #697689,#555555);

    
`
export const ListaContainer = styled.ul`
   list-style : none ;
   color:white;
   height: 10vh;
`
export const ItemCarrinho  =styled.li`
/* border: 1px solid ; */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
background:#2222;
padding: 2px;
display: flex;
justify-content: space-between;
`
export const ButtonCard = styled.button`
border-radius: 8px;
height: 100%;

width: 10%;
cursor: pointer;
&:hover{
    background-color: red
    }
`

export const ButtonCarrinho  = styled.button `
height: 40px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
font-size: 1.3rem;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
cursor: pointer;
&:hover{
    color:#222;
        background-image:linear-gradient(-45deg,#acb6e5, #86fde8) ;

}
`
export const Icone = styled.img`

height: 100%;
`

export const Titulo = styled.h1`
font-size: 1.5rem;
`
export const Lixeira = styled.img`
width: 100%;
height: 100%;


`
