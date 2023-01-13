import styled, { keyframes } from "styled-components";

const gradient = keyframes` 
    
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }

`
export const Container = styled.main `

background: linear-gradient(45deg,#FEAC5E,#C779D0,#4BC0C8) ;
background-size: 400% 400%;
animation: ${gradient} 5s ease infinite;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
min-height: 100vh;
//mobile
@media screen and (max-width: 767px ){
    width: 99vw;
    min-height: 100vh;
    justify-content: space-between;
}
` 


export const ContainerCarrinho = styled.section`
width: 100%;
//mobile
@media screen and (max-width: 767px ){
    width: 99vw;
    overflow: hidden;
  margin-bottom: 3vh;
  order: 2;

}
`
export const Tabela = styled.section`
display: grid;
grid-template-columns: repeat(5,1fr);
background: #f0f8ff;
width: 65%;
margin: 0 auto;
    //mobile
    @media screen and (max-width: 767px ){
    width: 99vw;
    display: flex;
    flex-direction: column;
    min-height: 20vh;
    gap: 1.2vh;
}

`
export const Titulo = styled.h1`
font-size: 2.6rem;
color:  #f0f8ff;
    //mobile
    @media screen and (max-width: 767px ){
    width: 99vw;
    font-size: 1.7rem;
}

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
export const SubTotal = styled.h2`
grid-column: 4;
border: 1px solid green;
width:100%;
text-align:center;
`
export const ButtonRemover = styled.button`
grid-column: 5;
border: 1px solid ;
width:100%;
text-align:center;
background: #dc143c;
font-size: 1.5rem;
    //mobile
    @media screen and (max-width: 767px ){
        height: 4vh;
        font-size: 1.7rem;
}
`


export const ButtonRetornar = styled.button` 
 height: 9vh;
 cursor: pointer;
 background: #2222;
 color: #fff;
 font-size: 1.6rem;
 border-radius: 5px;

 width: 15vw;
 &:hover{
    color:#222;
    background-image:linear-gradient(-45deg,#acb6e5, #86fde8) ;

}
    //mobile
    @media screen and (max-width: 767px ){
    width: 99vw ;
    font-size: 1.7rem;
    justify-content: space-between;
    order: 1;
}
`
export const DivTitulo = styled.div`
height: 15vh;
width: 65%;
display: flex;
margin: 0 auto;
align-items: center;
justify-content: space-between;


`
export const DivTotal = styled.div`
height: 10vh;
width: 65%;
display: flex;
justify-content: space-between;
align-items: center;
color:  #f0f8ff;
border: 1px solid ; 
padding: 7px;
background: cadetblue;
    //mobile
    @media screen and (max-width: 767px ){
    width: 99vw ;
    font-size: 1.7rem;
    justify-content: space-between;
    order: 1;
}
`


