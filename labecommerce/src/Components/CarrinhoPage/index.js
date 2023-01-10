import React from "react";
import { ContainerCarrinho, Preco, Tabela, Quantidade, Produto, ButtonRetornar, DivTitulo, Container, Titulo, DivTotal, ButtonRemover, ButtonConfirmar } from "./style";

export default function CarrinhoPage(props) {




    return (
        <Container>

            <DivTitulo>
                <ButtonRetornar onClick={() => props.setPage(2)}>Retornar</ButtonRetornar>
                <ButtonConfirmar onClick={() => props.setPage(4)}>Confirmar Pedido</ButtonConfirmar>
            </DivTitulo>
        <ContainerCarrinho>
            {props.itensUnicos.map((produto) => {
                return <Tabela key={produto.id}>
                    <Quantidade>Quantidade:
                        <p>{produto.quantidade} </p>
                    </Quantidade>
                    <Produto>Produto :
                        <p>{produto.nome}</p>
                    </Produto>
                    <Preco>Preço :
                        <p>R$ {produto.preco}</p>
                    </Preco>
                    
                    <ButtonRemover onClick={() => props.removeItemCarrinho(produto.id)}>
                        Remover item
                    </ButtonRemover>
                </Tabela>


            })}

        </ContainerCarrinho>
         <DivTotal>
         <Titulo>Total da Compra </Titulo>
         <Titulo>
          R$  {props.totalProdutos.toFixed(2)}
         </Titulo>
         </DivTotal>       
        </Container>
    )



}