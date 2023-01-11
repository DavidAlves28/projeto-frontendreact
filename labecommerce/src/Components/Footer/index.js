import React from "react";
import { ContainerFooter,LinkRedeSocial } from "./style";
import github from "../Imagens/github.png"
import linkedin from "../Imagens/linkedin.png"

export default function Footer (){
    return (
        <ContainerFooter>
            David Alves Costa 
        <a href='https://github.com/DavidAlves28' target="_blank"><LinkRedeSocial src={github}/>  </a>        
        <a href='https://www.linkedin.com/in/david-alves-costa-7a2b90145/' target="_blank"><LinkRedeSocial src={linkedin}/>  </a>        
        </ContainerFooter>
    )
}