import React from "react";
import CardProdutos from "../CardProdutos/CardProdutos";
import { ContainerProdutos } from "./style";
import Capacete from "../Imagens/capacete.jpeg"

export default function ConteudoMain() {
    const capaceteEspacial =
    {
        nome: "Capacete Espacial único",
        imagem: { Capacete },
        descricao: "Capecete Usado em missão Espacial"
    }



    return (
        <ContainerProdutos>

            <CardProdutos nome={capaceteEspacial.nome} imagem={capaceteEspacial.imagem}
                descricao={capaceteEspacial.descricao}
            />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />

        </ContainerProdutos>

    )
}