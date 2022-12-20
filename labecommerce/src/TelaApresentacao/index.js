import React from "react";
import { Apresentacao, ButtonPage, ContainerButton, TagA, Titulo } from "./style";

export default function ContainerApresentacao(props) {
    const changePage = () => {
        props.setPage(2)
    }


    return (
        <Apresentacao>
        <Titulo> 
            LABECOMERCE 
        </Titulo>
            <ContainerButton>

                <ButtonPage onClick={() => changePage()}  > PRODUTOS</ButtonPage>
                <ButtonPage onClick={() => changePage()} > CARRINHO</ButtonPage>
                <ButtonPage onClick={() => changePage()} > CONTATO</ButtonPage>
            </ContainerButton>
        </Apresentacao>

    )
}