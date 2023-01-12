import React from "react";
import { ButtonCard, ButtonCarrinho, ContainerCarrinho, Icone, ItemCarrinho, ListaContainer, Lixeira, Titulo } from "./style";
import Carrinho from '../../assets/Imagens/carrinho-de-compras.png'
export default function CardCarrinho(props) {  
  

    return (
        <ContainerCarrinho>
            <Titulo>Carrinho : </Titulo>
            {props.itensUnicos
                .map((produto) => {
                    return (
                        <ListaContainer key={produto.id}>
                            <ItemCarrinho>
                                {produto.quantidade}x -
                                {produto.nome}-
                                R${produto.preco}

                                <ButtonCard onClick={() => props.removeItemCarrinho(produto.id)}>x</ButtonCard>
                                </ItemCarrinho>
                        </ListaContainer>
                    )
                })}
            <Titulo>Total :R$ {  props.totalProdutos.toFixed(2)}</Titulo>
            <ButtonCarrinho onClick={() => props.setPage(3)}>Ir Para Carrinho <Icone src={Carrinho} /></ButtonCarrinho>
            
        </ContainerCarrinho>


    )
}