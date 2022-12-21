import React from "react";
import { ContainerCarrinho,Preco, Tabela,  Quantidade, Produto } from "./style";

export default function CarrinhoPage(props) {




    return (
        <ContainerCarrinho>
                    <h1>Confirmar Pedido</h1>
            {props.itensUnicos.map((produto) => {
                return<Tabela key={produto.id}>
                <Quantidade>Quantidade: 
                <p>{produto.quantidade} </p>
                </Quantidade>
                <Produto>Produto :
                <p>{produto.nome}</p>
                </Produto>   
                <Preco>Preço :
                <p>R$ {produto.preco}</p>
                </Preco>   
                </Tabela>


            })}
        </ContainerCarrinho>
    )



}