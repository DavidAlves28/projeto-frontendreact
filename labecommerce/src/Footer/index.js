import React from "react";
import { ContainerFooter,LinkRedeSocial } from "./style";
import github from "../Imagens/github.png"

export default function Footer (){
    return (
        <ContainerFooter>
            Criado por David Alves Costa 
            
        <a href='https://github.com/DavidAlves28' target="_blank"><LinkRedeSocial src={github}/>  </a>        
        </ContainerFooter>
    )
}