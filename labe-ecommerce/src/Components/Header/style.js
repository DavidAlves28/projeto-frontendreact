import styled from "styled-components";



// style do menu
export const Header = styled.header`
display: flex;
justify-content: space-between;
box-shadow: 1px 1px 9px 3px;
position: sticky;
top: 0px;
height: 10vh;
width: 100vw;
background: #2222;
z-index: 4;
overflow: hidden;
list-style: none;
`
// logo menu
export const Logo = styled.a`
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    color: black;
    text-decoration: none;
`
//  input checkbox.
export const InputCheckbox = styled.input`
    display: none;
&:checked{
    max-height: 250px;
}
&:hover{
    background-color: #2e2d2d;

}
    
`
//  label 
export const Label = styled.label`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: 28px 20px;
    position: relative;
    user-select: none;
&:checked{
    background: transparent
}
&:before{
    transform: rotate(-45deg);
}
&:after{
    transform: rotate(45deg);
}
`
export const Span = styled.span`
/* style inicial */
background: #222;
display: block;
height: 2px;
transition: background .2s ease-out;
width: 18px;

/* style para trasiçao */
&:before{
background: #333;
content: "";
display: block;
height: 100%;
width: 100%;
position: absolute;
transition: all .2s ease-out;
top: 5px;
}

/* style para trasiçao */
&:after{
background: #333;
content: "";
display: block;
height: 100%;
width: 100%;
position: absolute;
transition: all .2s ease-out;
top: -5px;

}
`

//  Lista de itens
export const ListaMenu = styled.ul`
    clear: both;
    max-height: 0;
    transition: max-height .4s ease-out;
    list-style: none;
`
export const ListaA = styled.a`
 color: #ffff;
    display: block;
    padding: 20px 20px;
    /* border-right: 1px solid #f4f4f4; */
    text-decoration: none;
&:hover{
    background-color: #2e2d2d;

}
`