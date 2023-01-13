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
font-size: 1.3rem;

//mobile
@media screen and (max-width: 767px){
    font-size: 1rem;
    width: 99vw;
    min-height: 31vh;
    margin: 0 auto;
    }
`

//  Lista de itens
export const ListaMenu = styled.ul`
    display: flex;
    list-style: none; 
    gap:3% ;
    height: 50%; 
    box-shadow: 1px 1px 7px mediumaquamarine;
   
    //mobile
    @media screen and (max-width: 767px){
   
    gap: 0%;
    height: 12vh;
    width : 100% ;
    margin-left: -60px;
      
}

`
//botões
export const ListaA = styled.button`
    margin-left: 90px;
    background: transparent;
    border: none;
    height: 100%;
    text-decoration: none;
    font-size: larger;
    letter-spacing: 2px;
    color: white;
    cursor: pointer;
&:hover{
    background-color: #2222;
    color: #ffff;
    border-bottom: 1px solid wheat;
    border-top: 1px solid wheat;
    text-shadow: 1px 1px 5px;
}
    //mobile
    @media screen and (max-width: 767px){
    font-size: 1.2rem;
    gap: 0%;
    height: 13vh; 
     width:100%
     
}
`
// navegação do menu
export const Nav = styled.nav`
display: grid ;
grid-template-columns: repeat(5,1fr);
justify-items: center;
width: 100%;

    //mobile
    @media screen and (max-width: 767px){
    display: flex;
    flex-wrap: wrap;
    width: 99vw;
    height: 25vh;
    overflow: hidden;
    gap:1% 

}
`
// campo de pesquisa
export const InputPesquisa = styled.input`
width: 50%;
height: 4vh;
box-shadow: 0px 0px 7px ;
border-radius: 5px;
text-align: center;
font-size: large;
   //mobile
   @media screen and (max-width: 767px){
    width: 46%;
   
}
`
export const InputPesquisaTexto = styled.input`
width: 50%;
height: 4vh;
box-shadow: 0px 0px 7px ;
border-radius: 5px;
text-align: center;
font-size: large;
   //mobile
   @media screen and (max-width: 767px){
       width: 92%;

}
`
// select
export const Select = styled.select`
width: 50%;
height: 4vh;
box-shadow: 0px 0px 7px white;
   //mobile
   @media screen and (max-width: 767px){
    width: 92%;
    height: 4.4vh;
    font-size: 1.2rem;
}
`
// imagem
export const Icone = styled.img`
cursor: pointer;
height: 8vh;
  //mobile
  @media screen and (max-width: 767px){
    display: none;
}
`
export const Aviso = styled.img`
width: 12;
`