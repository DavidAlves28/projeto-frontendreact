import React from "react";
import { Apresentacao, ButtonPage, ContainerButton, TagA, Titulo } from "./style";

export default function ContainerApresentacao(props) {
    const changePage = (n) => {
        props.setPage(n)
    }


    return (
        <Apresentacao>
        <Titulo> 
            LABECOMERCE 
        </Titulo>
            <ContainerButton>

                <ButtonPage onClick={() => changePage(2)}  >PRODUTOS</ButtonPage>
                <ButtonPage onClick={() => changePage(3)} >CARRINHO</ButtonPage>
                
            </ContainerButton>
        </Apresentacao>

    )
}