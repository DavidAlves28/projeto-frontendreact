import React from "react";
import ConteudoMain from "../ConteudoMain/ConteudoMain";
import Carrinho from "../Carrinho/Carrinho";
import Menu from "../Menu/Menu";
import {MainStyle} from "./style"


export default function MainPage(props) {
  
    return (
        <MainStyle>
        <Menu/>
        <ConteudoMain />
        <Carrinho/>
        </MainStyle>

    )
};