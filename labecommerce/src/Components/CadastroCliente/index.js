import React, { useState } from "react";
import { ButtonCadastro, Container, Form, Input, MsgErro, Titulo1 } from "./style";

export default function CadastroCliente(props) {
   
    
    //  estados para renderizar avisos de erro!
    const [erroNome, setErroNome] = useState(false)
    const [erroIdade, setErroIdade] = useState(false)
    const [erroEmail, setErroEmail] = useState(false)
    const [erroConfirmaEmail, setErroConfirmaEmail] = useState(false)
    const [erroEndereco, setErroEndereco] = useState(false)
    const [erroNumeroEnd, setErroNumeroEnd] = useState(false)
    const [erroTelefone, setErroTelefone] = useState(false)
   
    const enviarCadastro = () => {
        // Validações dos inputs de cadastro!
       
        props.nome.length <= 8 ? setErroNome(true) : setErroNome(false)
        props.idade < 18  ? setErroIdade(true) :  setErroIdade(false) 
        props.email.includes('.','@') ? setErroEmail(false) : setErroEmail(true) 
        props.confirmaEmail.includes('.','@') && props.email === props.confirmaEmail ? setErroConfirmaEmail(false) : setErroConfirmaEmail(true) 
        props.endereco.length < 4 ? setErroEndereco(true) : setErroEndereco(false)

        props.numeroEnd.length === 0  ? setErroNumeroEnd(true) : setErroNumeroEnd(false)

        props.telefone.length < 11 ? setErroTelefone(true) : setErroTelefone(false)
       
        // confirmaSenha < 6 && senha === confirmaEmail ? setErroConfirmaSenha(true) : setErroConfirmaSenha(false)
        if(props.nome.length > 8 && props.idade >=18 && props.email === props.confirmaEmail ){
            props.setPage(5)
            }
          
    }   
    return (

        <Container>
            <Titulo1> Cadastro Cliente </Titulo1>
            <Form>
                <label>

                    Nome completo
                    <Input value={props.nome} onChange={(e) => props.setNome(e.target.value)} required />                   
                     {/* Condicional Curto Circuito para Aparecer o Erro de cadastro */}
                    <MsgErro> {erroNome && 'Complete seu Nome!'}</MsgErro>
                </label>
                
                <label>
                    Idade
                    <Input type='Number' value={props.idade} onChange={(e) => props.setIdade(e.target.value)} required />
                    <MsgErro>{erroIdade && 'Voçe deve ter 18 anos ou mais!'} </MsgErro>
                </label>
                <label>
                    Email
                    <Input type='email' value={props.email} onChange={(e) => props.setEmail(e.target.value)} required />
                    <MsgErro>{erroEmail && 'Confira se o Email está correto!'}</MsgErro>
                </label>
                <label>
                    Confirmar  Email
                    <Input type='email' value={props.confirmaEmail} onChange={(e) => props.setConfirmaEmail(e.target.value)} required />
                    <MsgErro>{erroConfirmaEmail && 'Confira se o Email está igual!'}</MsgErro>
                </label>
                <label>
                    Endereço
                    <Input type='text' value={props.endereco} onChange={(e) => props.setEndereco(e.target.value)} required />
                    <MsgErro>{erroEndereco && 'Confira se o Endereço está correto'}</MsgErro>
                </label>
                <label>
                    Número do Endereço
                    <Input type='Number' value={props.numeroEnd} onChange={(e) => props.setNumeroEnd(e.target.value)} required />
                    <MsgErro>{erroNumeroEnd && 'Confira se o número do endereço está correto'}</MsgErro>
                </label>
                <label>
                    Telefone
                    <Input value={props.telefone} type='tel' placeholder="(xx) xxxxx-xxxx" onChange={(e) => props.setTelefone(e.target.value)} required />
                    <MsgErro>{erroTelefone && 'Confira o número de Telefone!'}</MsgErro>

                </label>

                <ButtonCadastro onClick={enviarCadastro} >Cadastrar</ButtonCadastro>
                <ButtonCadastro onClick={()=>props.setPage(2)} >Retornar Produtos</ButtonCadastro>


            </Form>
       

        </Container>
    )

}