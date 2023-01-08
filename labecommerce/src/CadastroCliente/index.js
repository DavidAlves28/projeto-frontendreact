import React, { useState } from "react";
import { ButtonCadastro, Container, Form, Input, Label, MsgErro, Titulo } from "./style";

export default function CadastroCliente() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [confirmaEmail, setConfirmaEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numeroEnd, setNumeroEnd] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [ConfirmaSenha, setConfirmaSenha] = useState('')
    
    //  estados para renderizar avisos de erro!
    const [erroNome, setErroNome] = useState(false)
    const [erroIdade, setErroIdade] = useState(false)
    const [erroEmail, setErroEmail] = useState(false)
    const [erroConfirmaEmail, setErroConfirmaEmail] = useState(false)
    const [erroEndereco, setErroEndereco] = useState(false)
    const [erroNumeroEnd, setErroNumeroEnd] = useState(false)
    const [erroTelefone, setErroTelefone] = useState(false)
    const [erroSenha, setErroSenha] = useState(false)
    const [erroConfirmaSenha, setErroConfirmaSenha] = useState(false)

    const [confirm, setConfirm] = useState(false)
    
   
    const enviarCadastro = () => {

        nome.length <= 8 ? setErroNome(true) : setErroNome(false)
        idade < 18  ? setErroIdade(true) :  setErroIdade(false) 
        email.includes('.','@') ? setErroEmail(false) : setErroEmail(true) 
        confirmaEmail.includes('.','@') && email === confirmaEmail ? setErroConfirmaEmail(false) : setErroConfirmaEmail(true) 
        endereco.length < 4 ? setErroEndereco(true) : setErroEndereco(false)
        numeroEnd.length === 0  ? setErroNumeroEnd(true) : setErroNumeroEnd(false)
    }
    console.log(idade);
    return (

        <Container>
            <Titulo> Cadastro Cliente </Titulo>
            <Form>
                <label>

                    Nome completo
                    <Input value={nome} onChange={(e) => setNome(e.target.value)} required />                   
                    <MsgErro> {erroNome && 'Complete seu Nome!'}</MsgErro>
                     {/* Condicional Curto Circuito para Aparecer o Erro de cadastro */}
                </label>
                
                <label>
                    Idade
                    <Input type='Number' value={idade} onChange={(e) => setIdade(e.target.value)} required />
                    <MsgErro>{erroIdade && 'Voçe deve ter 18 anos ou mais!'} </MsgErro>
                </label>
                <label>
                    Email
                    <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MsgErro>{erroEmail && 'Confira se o Email está correto!'}</MsgErro>
                </label>
                <label>
                    Confirmar  Email
                    <Input type='email' onChange={(e) => setConfirmaEmail(e.target.value)} required />
                    <MsgErro>{erroConfirmaEmail && 'Confira se o Email está igual!'}</MsgErro>
                </label>
                <label>
                    Endereço
                    <Input type='text' onChange={(e) => setEndereco(e.target.value)} required />
                    <MsgErro>{erroEndereco && 'Confira se o Endereço está correto'}</MsgErro>
                </label>
                <label>
                    Número do Endereço
                    <Input type='Number' onChange={(e) => setNumeroEnd(e.target.value)} required />
                    <MsgErro>{erroNumeroEnd && 'Confira se o número do endereço está correto'}</MsgErro>
                </label>
                <label>
                    Telefone
                    <Input type='tel' onChange={(e) => setTelefone(e.target.value)} required />
                </label>
                <label>
                    Senha
                    <Input type='password' onChange={(e) => setSenha(e.target.value)} required />
                </label>
                <label>
                    Confirmar Senha
                    <Input type='password' onChange={(e) => setConfirmaSenha(e.target.value)} required />
                </label>

                <ButtonCadastro onClick={enviarCadastro} >Cadastrar</ButtonCadastro>


            </Form>


        </Container>
    )

}