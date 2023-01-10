import React from "react";
import { ButtonRetornar, Container, Dados, Titulo } from "./style";

export default function CadastroCompleto (props){
    const retornaPage = ()=>{
        props.setPage(2)
        props.setNome('')
        props.setSenha('')
        props.setEmail('')
        props.setConfirmaEmail('')
        props.setConfirmaSenha('')
        props.setEndereco('')
        props.setNumeroEnd('')
        props.setIdade('')
        props.setTelefone('')
    }

return (
  <Container>
  <ButtonRetornar onClick={()=>retornaPage()} > Retorna para Produtos</ButtonRetornar>
    <Titulo> Cadastro Completo ! </Titulo>
        <Dados> Nome Cliente: {props.nome} </Dados>
        <Dados>Email : {props.email} </Dados>
       <Dados> Telefone : {props.telefone}</Dados>
       <Dados> Endereço : {props.endereco} </Dados>
        <Dados> Número : {props.numeroEnd}</Dados>
  </Container>
)

}