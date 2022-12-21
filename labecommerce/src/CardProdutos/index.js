import React from "react";
import { BotaoProduto,ImagemProduto, NomeProduto, Produto, TagPreco } from "./style";
export default function CardProdutos(props) {
 
   

    return (
        <Produto key={props.id}>
            
            <NomeProduto>{props.nome}</NomeProduto>
            <ImagemProduto src={props.imagem}></ImagemProduto>
            <TagPreco>R${props.preco} </TagPreco>
            <details>
                <summary>Descriçao</summary>{props.descricao}
            </details>
            
            <BotaoProduto onClick={() => props.adicionarCarrinho(props.id,props.nome, props.preco, props.quantidade)} >Adicionar ao Carrinho</BotaoProduto>

        </Produto>






    )
}