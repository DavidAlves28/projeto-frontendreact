import React from "react";
import { ContainerCarrinho, ItemCarrinho, ListaContainer } from "./style";

export default function CardCarrinho(props) {

    // Remover item do carrinho
    const removeItemCarrinho = (item) => {
      
        const filterItem = props.listaCarrinho.filter((produto) => produto.id !== item)
        props.setListaCarrinho(filterItem)
    }
    
    // função para soma de preços dos itens adicionados.
    const total = props.itensUnicos.reduce((produto, nproduto) => {
        return produto + nproduto.quantidade * nproduto.preco
    },0)


    return (
        <ContainerCarrinho>
            <h1>Carrinho : </h1>
            {props.itensUnicos
                .map((produto) => {
                    return (
                        <ListaContainer key={produto.id}>
                            <ItemCarrinho>
                                {produto.quantidade}x -
                                {produto.nome}-
                                R${produto.preco}

                                <button onClick={() => removeItemCarrinho(produto.id)}>Remover</button></ItemCarrinho>
                        </ListaContainer>
                    )
                })}
            <h1>Total :R$ {total.toFixed(2)}</h1>
            <button onClick={() => props.setPage(3)}>Ir Para Carrinho</button>
        </ContainerCarrinho>


    )
}