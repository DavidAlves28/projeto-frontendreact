import React from "react";
import { BotaoProduto, ImagemProduto, NomeProduto, Produto } from "./style";
export default function CardProdutos (props) {

    console.log(props);
    return (
       <Produto>
        <NomeProduto>{props.nome}</NomeProduto>
        <ImagemProduto src={props.imagem}></ImagemProduto>
        <details>
            <summary>Saiba Mais</summary>{props.descricao}
        </details>
        <BotaoProduto>Adicionar ao Carrinho</BotaoProduto>

       </Produto>




        
       
    )
}