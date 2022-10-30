import React from "react";
import ConteudoMain from "../ConteudoMain/ConteundoMain";
import Carrinho from "../Carrinho/Carrinho";
import Menu from "../Menu/Menu";
import {MainStyle} from "./style"

export default function MainPage() {
  
    return (
        <MainStyle>
        <Menu/>
        <ConteudoMain/>
        <Carrinho/>
        </MainStyle>

    )
};