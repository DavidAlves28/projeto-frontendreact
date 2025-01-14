import React from "react";

import { Container, ContainerProdutos, NomeProduto, Produto, TagPreco, ImagemProduto, BotaoProduto, ContainerCarrinho } from "./style";
import Capacete from "../../assets/Imagens/capacete.png";
import CapaceteInfantil from "../../assets/Imagens/capaceteInfantil.jpg"
import CanecaNasaBranca from "../../assets/Imagens/canecaNasa.png"
import CanecaNasaPreta from "../../assets/Imagens/CanecaNasaPreta.png"
import OnibusMiniatura from "../../assets/Imagens/onibusEspacialDiscovery.png"
import TrajeEspacial from "../../assets/Imagens/trajeEspacial.png"
import Camiseta1 from '../../assets/Imagens/camiseta1.jpg'
import Camiseta2 from '../../assets/Imagens/camiseta2.jpeg'
import Camiseta3 from '../../assets/Imagens/camiseta3.jpeg'
import Blusa1 from '../../assets/Imagens/blusa1.jpg'
import Blusa2 from '../../assets/Imagens/blusa2.jpg'
import Blusa3 from '../../assets/Imagens/blusa3.jpg'
import Boneco1 from '../../assets/Imagens/boneco1.jpg'
import Boneco2 from '../../assets/Imagens/boneco2.jpg'
import Foguete2 from '../../assets/Imagens/foguete2.jpg'
import CardCarrinho from "../CardCarrinho/index";

//Produtos 
export default function Produtos(props) {
    const produtos = [
        {
            id: 1,
            quantidade: 1,
            nome: "Capacete Espacial Raro",
            imagem: Capacete,
            categoria: "Acessórios",
            descricao: "Capecete Usado em missão Espacial",
            preco: 999.99,
        }, {
            id: 2,
            nome: "Capacete Infantil",
            imagem: CapaceteInfantil,
            categoria: "Brinquedos",
            descricao: "Capecete Usado em missão Espacial",
            preco: 99.99,
        },
        {
            id: 3,
            imagem: CanecaNasaBranca,
            nome: "Caneca Nasa Branca",
            categoria: "Acessórios",
            descricao: "Caneca Nasa Branca de cerâmica",
            preco: 149.99,
        },
        {
            id: 4,
            imagem: CanecaNasaPreta,
            nome: "Caneca Nasa Preta",
            categoria: "Acessórios",
            descricao: "Caneca Nasa Preta de cerâmica",
            preco: 149.99,
        },
        {
            id: 5,
            imagem: OnibusMiniatura,
            nome: "Onibus Espacial Miniatura",
            categoria: "Brinquedos",
            descricao: "Ônibus Espacial miniatura Discovery",
            preco: 299.55,
        },
        {
            id: 6,
            imagem: TrajeEspacial,
            nome: "Traje Espacial Original",
            categoria: "Roupas",
            descricao: "Traje Usado em missões espacias",
            preco: 1499.99,
        },
        {
            id: 7,
            imagem: Camiseta1,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: 79.99,
        },
        {
            id: 8,
            imagem: Camiseta2,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: 79.99,
        },
        {
            id: 9,
            imagem: Camiseta3,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: 79.99,
        },
        {
            id: 10,
            imagem: Blusa1,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: 179.99,
        },
        {
            id: 11,
            imagem: Blusa2,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: 179.99,
        },
        {
            id: 12,
            imagem: Blusa3,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: 179.99,
        },
        {
            id: 13,
            imagem: Boneco1,
            nome: "Boneco Miniatura",
            categoria: "Brinquedos",
            descricao: "Boneco jogador miniatura Astronauta",
            preco: 29.99,
        },
        {
            id: 14,
            imagem: Boneco2,
            nome: "Boneco Miniatura",
            categoria: "Brinquedos",
            descricao: "Boneco miniatura Astronauta",
            preco: 29.99,
        }, {
            id: 15,
            imagem: Foguete2,
            nome: "Foguete Miniatura",
            categoria: "Brinquedos",
            descricao: "Foquete em miniatura  ",
            preco: 279.99,
        },

    ]


    return (
        <Container>
            {/* Secao onde se encontra os cards dos produtos.
             */}
            <ContainerProdutos>
                {/* Filtro Pesquisa */}
                {produtos.filter((produto) => {
                    return produto.nome.toLowerCase().includes(props.search.toLowerCase())
                })
                    /* filtro ordenação alfabetica */
                    .sort((produto, novoProduto) => {
                        switch (props.ordenacao) {
                            case 'crescente':
                                return produto.nome.localeCompare(novoProduto.nome)
                            case 'decrescente':
                                return novoProduto.nome.localeCompare(produto.nome)
                            default:
                                return produto
                        }
                    })
                    /* filtro ordenação categoria */
                    .filter((produto) => {
                        switch (props.categoria) {
                            case 'Brinquedos':
                                return produto.categoria === "Brinquedos"
                            case 'Roupas':
                                return produto.categoria === "Roupas"
                            case 'Acessórios':
                                return produto.categoria === "Acessórios"
                            default:
                                return produto
                        }
                    })
                    /* Filtro para definir valor mínimo escolhdi e valor maximo  */
                    .filter((produto) => {
                        return produto.preco >= props.valueMin && produto.preco <= props.valueMax
                    })
                    /* Map para renderizar produtos */
                    .map((produto) => {

                        return (
                            <Produto key={produto.id}>
                                <NomeProduto>{produto.nome}</NomeProduto>
                                <ImagemProduto src={produto.imagem}></ImagemProduto>
                                <TagPreco>R${produto.preco} </TagPreco>
                                <details>
                                    <summary>Descriçao</summary>{produto.descricao}
                                </details>
                                <BotaoProduto onClick={() => props.adicionarCarrinho(produto)} >Adicionar ao Carrinho</BotaoProduto>
                            </Produto>

                        )
                    })}
            </ContainerProdutos>
            {/* CARD LATERAL DOS PRODUTOS ADICIONADOS! */}
            <ContainerCarrinho>
                <CardCarrinho
                    itensUnicos={props.itensUnicos}
                    total={props.total}
                    setTotal={props.setTotal}
                    listaCarrinho={props.listaCarrinho}
                    setListaCarrinho={props.setListaCarrinho}
                    contador={props.contador} 
                    setContador={props.setContador}
                    totalProdutos={props.totalProdutos}
                    page={props.page}
                    setPage={props.setPage} 
                    removeItemCarrinho={props.removeItemCarrinho}>
                </CardCarrinho>
            </ContainerCarrinho>
        </Container>
    )
}