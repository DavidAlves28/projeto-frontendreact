import React from "react";
import { Apresentacao, ButtonPage, ContainerButton, Titulo } from "./style";
// Componente Tela de apresentação!
export default function ContainerApresentacao(props) {
    
    return (
        <Apresentacao>
            <Titulo>
                LABECOMMERCE
            </Titulo>
            <ContainerButton>
                <ButtonPage onClick={() =>props.setPage(2)}>PRODUTOS</ButtonPage>
                <ButtonPage onClick={() =>props.setPage(3)}>CARRINHO</ButtonPage>
            </ContainerButton>
            <Titulo>
               DAVID ALVES COSTA
            </Titulo>
        </Apresentacao >

    )
}