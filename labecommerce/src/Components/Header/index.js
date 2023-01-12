import React from "react";
import { ListaMenu, ListaA, Container, Nav, InputPesquisa, Select, Icone ,Aviso} from './style';
import Carrinho from '../../assets/Imagens/carrinho-de-compras.png'

export default function Header(props) {
  
    return (
        <Container>
            <ListaMenu>
                <ListaA
                    onClick={() => props.setPage(1)}>Tela Inicial 
                </ListaA>
                <ListaA
                    onClick={() => props.setPage(3)}>Carrinho 
                </ListaA>
                <Icone onClick={() => props.setPage(3)} src={Carrinho} ></Icone> 
                
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