import React from "react";
import { ListaMenu, ListaA,Container, Nav, InputPesquisa, Select, Icone } from './style';
import Carrinho from '../Imagens/carrinho-de-compras.png'
export default function Header (props) {
    const irParaCarrinhoPedidos = () => {
        props.setPage(3)
    }
    return (
        <Container>
            <ListaMenu>
                <ListaA>Categorias</ListaA>
                <ListaA>Contato</ListaA>
                <ListaA>Carrinho  </ListaA>
                <Icone src={Carrinho}/> 
            </ListaMenu>
            <Nav>
                <InputPesquisa onChange={props.changeSearch} type={'text'} placeholder="Pesquisar"></InputPesquisa>

                <InputPesquisa onChange={props.changeValueMin} type={'number'} placeholder="Valor mínimo"></InputPesquisa>
                
                <InputPesquisa onChange={props.changeValueMax} type={'number'} placeholder="Valor máximo"></InputPesquisa>

                <Select value={props.ordenacao} onChange={props.changeOrdenacao} >
                    <option value={''}> Ordernação</option>
                    <option value={'crescente'}>Crescente</option>
                    <option value={'decrescente'}>Decrescente</option>
                </Select>
                <Select value={props.categoria} onChange={props.changeCategoria} >
                    <option value={''}> Categoria</option>
                    <option value={'Brinquedos'}>Brinquedos</option>
                    <option value={'Roupas'}>Roupas</option>
                    <option value={'Acessórios'}>Acessórios</option>
                </Select>

            </Nav>
        </Container>
    )
}