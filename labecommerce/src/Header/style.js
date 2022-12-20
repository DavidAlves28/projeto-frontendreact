import styled from "styled-components";

// style do menu
export const Container = styled.header`
display: flex;
flex-direction: column;
justify-content: space-around;
box-shadow: 1px 1px 9px 3px;
height: 18vh;
width: 100%;
list-style: none;


`

//  Lista de itens
export const ListaMenu = styled.ul`
    display: flex;
    list-style: none; 
    gap:3% ;
    height: 50%; 
    box-shadow: 1px 1px 7px mediumaquamarine;
`
export const ListaA = styled.button`
    margin-left: 90px;
    background: transparent;
    border: none;
    height: 100%;
    text-decoration: none;
    font-size: larger;
    letter-spacing: 2px;
    color: white;
&:hover{
    background-color: #2222;
    color: #ffff;
    border-bottom: 1px solid wheat;
    border-top: 1px solid wheat;
    text-decoration: underline;
    text-shadow: 1px 1px 5px;
   
}
`


export const Nav = styled.nav`
display: grid ;
grid-template-columns: repeat(5,1fr);
justify-items: center;
`
export const InputPesquisa = styled.input`
width: 50%;
height: 4vh;
box-shadow: 0px 0px 7px white;
border-radius: 8px;
text-align: center;
font-size: large;
`
export const Select = styled.select`
width: 50%;
height: 4vh;
box-shadow: 0px 0px 7px white;

`

export const Icone = styled.img`

height: 8vh;
`