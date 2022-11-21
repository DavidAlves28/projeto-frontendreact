import React from "react";
import { Header,Logo,InputCheckbox, Span,Label, ListaMenu, ListaA } from "./style";
export default function HeaderPage (){
    return (
        <Header>
            <Logo href="#">Menu</Logo>
            <InputCheckbox type="checkbox" id="menu-start" ></InputCheckbox>
            <Label htmlFor="menu-start"><Span></Span></Label>
            <ListaMenu>
                <ListaA>Categorias</ListaA>
                <li><ListaA>Carrinho</ListaA></li>
                <li><ListaA>Contato</ListaA></li>
            </ListaMenu>

          
        </Header>
    )
}