import React, { useEffect, useState } from "react";
import { ContainerCarrinho, ItemCarrinho, ListaContainer } from "./style";

export default function CardCarrinho (props){

// Remover item do carrinho

const removeItemCarrinho = (item)=>{
    const filterItem = props.listaCarrinho.filter((produto)=>produto.nome !== item)
    props.setListaCarrinho(filterItem)
}


const total = props.listaCarrinho.reduce((produto,nproduto)=>{
    return produto+ nproduto.quantidade * nproduto.preco
},0)



    return (
        <ContainerCarrinho>
            <h1>Carrinho : </h1>
            {props.listaCarrinho
            .map((produto)=>{
                return (
                    <ListaContainer key={produto.id}>
                        <ItemCarrinho>{produto.nome} {produto.preco}
                        <button onClick={()=>removeItemCarrinho(produto.nome)}>Remover</button></ItemCarrinho>
                    </ListaContainer>
                )
            })}
            <h1>Total :R$ {total.toFixed(2)}</h1>
        </ContainerCarrinho>

        
    )
}