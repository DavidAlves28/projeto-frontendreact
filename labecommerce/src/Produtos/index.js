import React from "react";
import CardProdutos from "../CardProdutos";
import { Container, ContainerProdutos , Contador} from "./style";
import Capacete from "../Imagens/capacete.png";
import CapaceteInfantil from "../Imagens/capaceteInfantil.jpg"
import CanecaNasaBranca from "../Imagens/canecaNasa.png"
import CanecaNasaPreta from "../Imagens/CanecaNasaPreta.png"
import OnibusMiniatura from "../Imagens/onibusEspacialDiscovery.png"
import TrajeEspacial from "../Imagens/trajeEspacial.png"
import Camiseta1 from '../Imagens/camiseta1.jpg'
import Camiseta2 from '../Imagens/camiseta2.jpeg'
import Camiseta3 from '../Imagens/camiseta3.jpeg'
import Blusa1 from '../Imagens/blusa1.jpg'
import Blusa2 from '../Imagens/blusa2.jpg'
import Blusa3 from '../Imagens/blusa3.jpg'
import Boneco1 from '../Imagens/boneco1.jpg'
import Boneco2 from '../Imagens/boneco2.jpg'
import Foguete2 from '../Imagens/foguete2.jpg'
import CardCarrinho from "../CardCarrinho";
import { ItemCarrinho } from "../CardCarrinho/style";

//Produtos 
export default function Produtos(props) {
    const produtos = [
        {
            id: Date.now(),
            quantidade:'1',
            nome: "Capacete Espacial Raro",
            imagem: Capacete,
            categoria: "Acessórios",
            descricao: "Capecete Usado em missão Espacial",
            preco: '999.99',
        }, {
            id: Date.now(),
            quantidade:'1',
            nome: "Capacete Infantil",
            imagem: CapaceteInfantil,
            categoria: "Brinquedos",
            descricao: "Capecete Usado em missão Espacial",
            preco: '99.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: CanecaNasaBranca,
            nome: "Caneca Nasa Branca",
            categoria: "Acessórios",
            descricao: "Caneca Nasa Branca de cerâmica",
            preco: '149.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: CanecaNasaPreta,
            nome: "Caneca Nasa Preta",
            categoria: "Acessórios",
            descricao: "Caneca Nasa Preta de cerâmica",
            preco: '149.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: OnibusMiniatura,
            nome: "Onibus Espacial Miniatura",
            categoria: "Brinquedos",
            descricao: "Ônibus Espacial miniatura Discovery",
            preco: '299.55',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: TrajeEspacial,
            nome: "Traje Espacial Original",
            categoria: "Roupas",
            descricao: "Traje Usado em missões espacias",
            preco: '1499.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Camiseta1,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: '79.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Camiseta2,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: '79.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Camiseta3,
            nome: "Camiseta Astronauta Estampada",
            categoria: "Roupas",
            descricao: "Camiseta tamanho único",
            preco: '79.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Blusa1,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: '179.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Blusa2,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: '179.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Blusa3,
            nome: "Blusa espacial Estampada",
            categoria: "Roupas",
            descricao: "Blusa tamanho único",
            preco: '179.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Boneco1,
            nome: "Boneco Miniatura",
            categoria: "Brinquedos",
            descricao: "Boneco miniatura Astronauta",
            preco:'29.99',
        },
        {
            id: Date.now(),
            quantidade:'1',
            imagem: Boneco2,
            nome: "Boneco Miniatura",
            categoria: "Brinquedos",
            descricao: "Boneco miniatura Astronauta",
            preco: '29.99',
        }, {
            id: Date.now(),
            quantidade:'1',
            imagem: Foguete2,
            nome: "Foguete Miniatura",
            categoria: "Brinquedos",
            descricao: "Foquete em miniatura  ",
            preco: '279.90',
        },

    ]


    return (
        <Container>
            {/* CARD LATERAL DOS PRODUTOS ADICIONADOS! */}
            <ContainerProdutos>
                <CardCarrinho total={props.total} setTotal={props.setTotal} listaCarrinho={props.listaCarrinho} setListaCarrinho={props.setListaCarrinho}></CardCarrinho>
            </ContainerProdutos>
            {/* Secao onde se encontra os cards dos produtos.
             */}
            <ContainerProdutos>

                {produtos.filter((produto) => {
                    return produto.nome.toLowerCase().includes(props.search.toLowerCase())
                })
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
                            <CardProdutos id={produto.id} nome={produto.nome}
                                imagem={produto.imagem} descricao={produto.descricao}
                                quantidade={produto.quantidade}
                                preco={produto.preco} adicionarCarrinho={props.adicionarCarrinho}
                                contador={props.contador} setContador={props.setContador}
                            >
                            </CardProdutos>

                        )
                    })}
            </ContainerProdutos>
        </Container>
    )
}